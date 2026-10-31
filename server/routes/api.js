const express = require('express');
const router = express.Router();

const chapters = require('../data/chapters');
const certifications = require('../data/certifications');
const dailyBytes = require('../data/dailyBytes');
const resources = require('../data/resources');
const aiPmData = require('../data/aiPmData');
const aiCertData = require('../data/aiCertificationData');
const poGrowthData = require('../data/poGrowthFeaturesData');

// Health Check
router.get('/health', (req, res) => {
  res.json({
    status: 'UP',
    timestamp: new Date().toISOString(),
    version: process.env.APP_VERSION || '1.0.0',
    totalChapters: chapters.length,
    totalCertifications: certifications.length,
    totalMockExams: certifications.reduce((acc, c) => acc + c.exams.length, 0)
  });
});

// Chapters - List summaries
router.get('/chapters', (req, res) => {
  const summaries = chapters.map(ch => ({
    id: ch.id,
    title: ch.title,
    category: ch.category,
    level: ch.level,
    readTime: ch.readTime,
    summary: ch.summary,
    questionCount: ch.assessment.length
  }));
  res.json(summaries);
});

// Chapters - Get single chapter detail
router.get('/chapters/:id', (req, res) => {
  const chapter = chapters.find(c => c.id === req.params.id);
  if (!chapter) {
    return res.status(404).json({ error: 'Chapter not found' });
  }
  res.json(chapter);
});

// Chapters - Grade Assessment
router.post('/chapters/:id/submit-assessment', (req, res) => {
  const chapter = chapters.find(c => c.id === req.params.id);
  if (!chapter) {
    return res.status(404).json({ error: 'Chapter not found' });
  }

  const userAnswers = req.body.answers || {};
  let correctCount = 0;
  const breakdown = chapter.assessment.map(q => {
    const selected = userAnswers[q.id];
    const isCorrect = selected === q.answer;
    if (isCorrect) correctCount++;
    return {
      questionId: q.id,
      question: q.question,
      selectedAnswer: selected !== undefined ? selected : null,
      correctAnswer: q.answer,
      isCorrect,
      explanation: q.explanation
    };
  });

  const total = chapter.assessment.length;
  const percentage = Math.round((correctCount / total) * 100);
  const passed = percentage >= 80;

  res.json({
    score: correctCount,
    total,
    percentage,
    passed,
    breakdown
  });
});

// Certifications - List tracks
router.get('/certifications', (req, res) => {
  const tracks = certifications.map(cert => ({
    id: cert.id,
    name: cert.name,
    issuingBody: cert.issuingBody,
    level: cert.level,
    durationMinutes: cert.durationMinutes,
    passingScore: cert.passingScore,
    description: cert.description,
    examCount: cert.exams.length,
    isEssayBased: !!cert.isEssayBased,
    exams: cert.exams.map(e => ({
      id: e.id,
      title: e.title,
      examNumber: e.examNumber,
      durationMinutes: e.durationMinutes,
      questionCount: e.questions.length
    }))
  }));
  res.json(tracks);
});

// Certifications - Get specific mock exam
router.get('/certifications/:certId/exams/:examId', (req, res) => {
  const cert = certifications.find(c => c.id === req.params.certId);
  if (!cert) {
    return res.status(404).json({ error: 'Certification track not found' });
  }

  const exam = cert.exams.find(e => e.id === req.params.examId);
  if (!exam) {
    return res.status(404).json({ error: 'Mock exam not found' });
  }

  // Provide questions. In exam runner mode, we keep questions clean.
  res.json({
    id: exam.id,
    title: exam.title,
    certId: cert.id,
    certName: cert.name,
    issuingBody: cert.issuingBody,
    examNumber: exam.examNumber,
    durationMinutes: exam.durationMinutes,
    passingScore: exam.passingScore,
    isEssayBased: !!cert.isEssayBased,
    questions: exam.questions
  });
});

// Certifications - Evaluate Exam submission
router.post('/certifications/:certId/exams/:examId/evaluate', (req, res) => {
  const cert = certifications.find(c => c.id === req.params.certId);
  if (!cert) return res.status(404).json({ error: 'Certification track not found' });

  const exam = cert.exams.find(e => e.id === req.params.examId);
  if (!exam) return res.status(404).json({ error: 'Mock exam not found' });

  const userAnswers = req.body.answers || {};
  let totalScore = 0;
  const domainStats = {};

  const evaluatedQuestions = exam.questions.map(q => {
    const domain = q.domain || 'General';
    if (!domainStats[domain]) {
      domainStats[domain] = { total: 0, correct: 0 };
    }
    domainStats[domain].total++;

    if (q.type === 'essay') {
      // For essay questions (PSPO III), we check if user self-assessed or provided response
      const selfScore = req.body.selfAssessment && req.body.selfAssessment[q.id] ? req.body.selfAssessment[q.id] : 85;
      totalScore += selfScore;
      domainStats[domain].correct += (selfScore / 100);
      return {
        id: q.id,
        type: 'essay',
        domain,
        question: q.text,
        userAnswer: userAnswers[q.id] || '',
        score: selfScore,
        rubric: q.rubric
      };
    }

    const userSelected = userAnswers[q.id];
    let isCorrect = false;

    if (q.type === 'multiple') {
      const correctSorted = (q.correctAnswers || []).slice().sort();
      const userSorted = Array.isArray(userSelected) ? userSelected.slice().sort() : [];
      isCorrect = correctSorted.length === userSorted.length && correctSorted.every((val, idx) => val === userSorted[idx]);
    } else {
      isCorrect = Array.isArray(q.correctAnswers) ? q.correctAnswers.includes(userSelected) : false;
    }

    if (isCorrect) {
      totalScore += 1;
      domainStats[domain].correct++;
    }

    return {
      id: q.id,
      type: q.type,
      domain,
      question: q.text,
      options: q.options,
      userAnswer: userSelected !== undefined ? userSelected : null,
      correctAnswers: q.correctAnswers,
      isCorrect,
      explanation: q.explanation,
      references: q.references
    };
  });

  const total = exam.questions.length;
  const percentage = cert.isEssayBased
    ? Math.round(totalScore / total)
    : Math.round((totalScore / total) * 100);
  const passed = percentage >= exam.passingScore;

  // Compute domain percentages
  const domainScores = {};
  for (const [dom, stats] of Object.entries(domainStats)) {
    domainScores[dom] = {
      correct: stats.correct,
      total: stats.total,
      percentage: Math.round((stats.correct / stats.total) * 100)
    };
  }

  res.json({
    score: totalScore,
    total,
    percentage,
    passed,
    passingScore: exam.passingScore,
    timeSpentSeconds: req.body.timeSpentSeconds || 0,
    domainScores,
    results: evaluatedQuestions
  });
});

// Daily Byte - Get current day or specific day
router.get('/daily-byte', (req, res) => {
  const dayQuery = parseInt(req.query.day, 10);
  let byteItem;
  if (!isNaN(dayQuery)) {
    byteItem = dailyBytes.find(b => b.dayNumber === dayQuery) || dailyBytes[0];
  } else {
    // Deterministic day of the month or sequence
    const dayOfMonth = (new Date().getDate() % dailyBytes.length) + 1;
    byteItem = dailyBytes.find(b => b.dayNumber === dayOfMonth) || dailyBytes[0];
  }
  res.json({
    currentDay: byteItem.dayNumber,
    totalAvailableDays: dailyBytes.length,
    allDays: dailyBytes.map(d => ({ dayNumber: d.dayNumber, title: d.title, category: d.category })),
    byte: byteItem
  });
});

// Resources - Get curated learning links
router.get('/resources', (req, res) => {
  const { type, search } = req.query;
  let filtered = [...resources];

  if (type && type !== 'all') {
    filtered = filtered.filter(r => r.type.toLowerCase() === type.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.author.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      (r.tags && r.tags.some(t => t.toLowerCase().includes(q)))
    );
  }

  res.json(filtered);
});

// AI Product Manager - Get Transition Roadmap & Masterclass
router.get('/ai-pm/roadmap', (req, res) => {
  res.json({
    overview: aiPmData.overview,
    stages: aiPmData.roadmapStages,
    interviewMasterclass: aiPmData.interviewMasterclass
  });
});

// AI Product Manager - Get Toolkits Configuration
router.get('/ai-pm/tools', (req, res) => {
  res.json({
    modelPricingBenchmarks: aiPmData.modelPricingBenchmarks,
    architectureTradeoffs: aiPmData.architectureTradeoffs,
    readinessQuestions: aiPmData.readinessQuestions
  });
});

// AI PM Certification - Program Syllabus & Framework
router.get('/ai-cert/program', (req, res) => {
  res.json({
    program: aiCertData.program,
    outcomes: aiCertData.outcomes,
    competencyFramework: aiCertData.competencyFramework,
    coreCourses: aiCertData.coreCourses,
    electives: aiCertData.electives,
    courseDetails: aiCertData.courseDetails,
    toolsCovered: aiCertData.toolsCovered,
    hiringCompanies: aiCertData.hiringCompanies,
    executiveCoaches: aiCertData.executiveCoaches
  });
});

// AI PM Certification - Get Official Mock Exam
router.get('/ai-cert/exam', (req, res) => {
  // Strip correct answer for client delivery
  const publicExam = {
    ...aiCertData.certificationSimulator,
    questions: aiCertData.certificationSimulator.questions.map(q => ({
      id: q.id,
      course: q.course,
      domain: q.domain,
      question: q.question,
      options: q.options
    }))
  };
  res.json(publicExam);
});

// AI PM Certification - Submit Exam & Grade
router.post('/ai-cert/submit-exam', (req, res) => {
  const userAnswers = req.body.answers || {};
  const exam = aiCertData.certificationSimulator;
  let correctCount = 0;
  const domainBreakdown = {};

  const details = exam.questions.map(q => {
    const selected = userAnswers[q.id];
    const isCorrect = selected === q.answer;
    if (isCorrect) correctCount++;

    if (!domainBreakdown[q.domain]) {
      domainBreakdown[q.domain] = { total: 0, correct: 0 };
    }
    domainBreakdown[q.domain].total++;
    if (isCorrect) domainBreakdown[q.domain].correct++;

    return {
      questionId: q.id,
      question: q.question,
      domain: q.domain,
      course: q.course,
      selectedAnswer: selected !== undefined ? selected : null,
      correctAnswer: q.answer,
      isCorrect,
      explanation: q.explanation
    };
  });

  const total = exam.questions.length;
  const percentage = Math.round((correctCount / total) * 100);
  const passed = percentage >= exam.passingScore;

  res.json({
    passed,
    score: correctCount,
    total,
    percentage,
    passingScore: exam.passingScore,
    candidateName: req.body.candidateName || 'AI Product Professional',
    issuedDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    certificateId: `IPL-AIPM-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
    domainBreakdown,
    details
  });
});

// =========================================================================
// PO Growth Features Endpoints
// =========================================================================

// 1. Diagnostic Assessment Quiz
router.get('/po-growth/diagnostic', (req, res) => {
  const diag = poGrowthData.diagnosticAssessment;
  // Return questions without scores for fair test-taking
  const sanitized = {
    ...diag,
    questions: diag.questions.map(q => ({
      id: q.id,
      pillar: q.pillar,
      scenario: q.scenario,
      question: q.question,
      options: q.options.map(opt => ({ text: opt.text }))
    }))
  };
  res.json(sanitized);
});

// Submit Diagnostic Assessment & Calculate Radar Breakdown
router.post('/po-growth/diagnostic/submit', (req, res) => {
  const userAnswers = req.body.answers || {}; // map of { [qId]: optionIdx }
  const diag = poGrowthData.diagnosticAssessment;
  let totalScore = 0;
  const pillarScores = {};

  diag.pillars.forEach(p => {
    pillarScores[p.id] = { name: p.name, score: 0, maxScore: 0, feedback: [] };
  });

  const questionResults = diag.questions.map(q => {
    const selectedIdx = userAnswers[q.id];
    const option = q.options[selectedIdx] || { text: 'Not answered', score: 0, feedback: 'No answer selected.' };
    totalScore += option.score;

    if (pillarScores[q.pillar]) {
      pillarScores[q.pillar].score += option.score;
      pillarScores[q.pillar].maxScore += 5;
      pillarScores[q.pillar].feedback.push(option.feedback);
    }

    return {
      questionId: q.id,
      pillar: q.pillar,
      scenario: q.scenario,
      question: q.question,
      selectedOption: option.text,
      score: option.score,
      feedback: option.feedback
    };
  });

  // Determine Seniority Profile
  let profile = diag.seniorityProfiles.associate;
  if (totalScore >= diag.seniorityProfiles.principal.scoreRange[0]) {
    profile = diag.seniorityProfiles.principal;
  } else if (totalScore >= diag.seniorityProfiles.senior.scoreRange[0]) {
    profile = diag.seniorityProfiles.senior;
  }

  res.json({
    totalScore,
    maxScore: diag.questions.length * 5,
    percentage: Math.round((totalScore / (diag.questions.length * 5)) * 100),
    profile,
    pillarScores,
    questionResults,
    evaluatedAt: new Date().toISOString()
  });
});

// 2. PO Toolkit (Calculators, Templates, Slicing Guide)
router.get('/po-growth/toolkit', (req, res) => {
  res.json(poGrowthData.toolkitHub);
});

// 3. PO Scenario Simulator
router.get('/po-growth/scenarios', (req, res) => {
  res.json(poGrowthData.scenarioSimulator);
});

// 4. PO Interview War Room
router.get('/po-growth/interview-war-room', (req, res) => {
  res.json(poGrowthData.interviewWarRoom);
});

module.exports = router;
