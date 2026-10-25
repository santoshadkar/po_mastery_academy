const test = require('node:test');
const assert = require('node:assert/strict');

const app = require('../server/server');
const chapters = require('../server/data/chapters');
const certifications = require('../server/data/certifications');
const dailyBytes = require('../server/data/dailyBytes');
const resources = require('../server/data/resources');

test('1. System Data Integrity - Chapters Curriculum', (t) => {
  assert.ok(chapters.length >= 11, 'Must have at least 11 comprehensive learning chapters including AI PM');
  chapters.forEach((ch, idx) => {
    assert.ok(ch.id, `Chapter ${idx} must have an ID`);
    assert.ok(ch.title, `Chapter ${ch.id} must have a title`);
    assert.ok(ch.subChapters && ch.subChapters.length > 0, `Chapter ${ch.id} must have detailed sub-chapters`);
    ch.subChapters.forEach(sub => {
      assert.ok(sub.id, 'Sub-chapter must have an ID');
      assert.ok(sub.title, 'Sub-chapter must have a title');
      assert.ok(sub.concept, 'Sub-chapter must have a deep conceptual explanation');
    });
    assert.ok(ch.assessment.length >= 5, `Chapter ${ch.id} must have at least 5 assessment questions`);
    ch.assessment.forEach(q => {
      assert.ok(q.id, 'Question must have id');
      assert.ok(q.question, 'Question must have text');
      assert.ok(q.options.length >= 2, 'Question must have at least 2 options');
      assert.ok(typeof q.answer === 'number', 'Question must have numeric answer index');
      assert.ok(q.explanation, 'Question must have explanation');
    });
  });
});

test('2. Certification Mock Exam Simulator - 30 Exact Replica Exams', (t) => {
  assert.equal(certifications.length, 6, 'Must support exactly 6 certifications: PSPO I, PSPO II, PSPO III, CSPO, SAFe POPM, ICP-APO');

  const requiredTrackIds = ['pspo-1', 'pspo-2', 'pspo-3', 'cspo', 'safe-popm', 'icp-apo'];
  requiredTrackIds.forEach(id => {
    const track = certifications.find(c => c.id === id);
    assert.ok(track, `Track ${id} must be present in certifications suite`);
    assert.equal(track.exams.length, 5, `Track ${id} must have exactly 5 full mock exams`);
  });

  const totalExams = certifications.reduce((acc, c) => acc + c.exams.length, 0);
  assert.equal(totalExams, 30, 'Total mock exams across all tracks must equal exactly 30');

  // Verify full realistic question counts per track
  const safe = certifications.find(c => c.id === 'safe-popm');
  assert.equal(safe.exams[0].questions.length, 45, 'SAFe POPM must have 45 questions per exam');

  const pspo1 = certifications.find(c => c.id === 'pspo-1');
  assert.equal(pspo1.exams[0].questions.length, 80, 'PSPO I must have exactly 80 questions per exam');
  assert.equal(pspo1.durationMinutes, 60, 'PSPO I must have 60-minute timebox');

  const pspo2 = certifications.find(c => c.id === 'pspo-2');
  assert.equal(pspo2.exams[0].questions.length, 40, 'PSPO II must have exactly 40 scenario questions per exam');
  assert.equal(pspo2.durationMinutes, 60, 'PSPO II must have 60-minute timebox');

  const pspo3 = certifications.find(c => c.id === 'pspo-3');
  assert.equal(pspo3.exams[0].questions.length, 35, 'PSPO III must have exactly 35 questions per exam');
  assert.equal(pspo3.durationMinutes, 120, 'PSPO III must have 120-minute timebox');

  const cspo = certifications.find(c => c.id === 'cspo');
  assert.equal(cspo.exams[0].questions.length, 35, 'CSPO must have 35 questions per exam');

  const icp = certifications.find(c => c.id === 'icp-apo');
  assert.equal(icp.exams[0].questions.length, 35, 'ICP-APO must have 35 questions per exam');
});

test('3. PSPO III Mixed Exam Structure - Objective & Essay Rubrics', (t) => {
  const pspo3 = certifications.find(c => c.id === 'pspo-3');
  assert.ok(pspo3.isEssayBased, 'PSPO III must be marked as containing essay questions');
  assert.ok(pspo3.hasMixedQuestions, 'PSPO III must be marked as containing mixed question types');
  pspo3.exams.forEach(exam => {
    assert.equal(exam.questions.length, 35, 'PSPO III exams must contain exactly 35 questions');
    
    // Check that there is a mix of question types
    const essayQs = exam.questions.filter(q => q.type === 'essay');
    const objQs = exam.questions.filter(q => q.type !== 'essay');
    
    assert.ok(essayQs.length > 0, 'PSPO III must have essay questions');
    assert.ok(objQs.length > 0, 'PSPO III must have objective questions');
    
    essayQs.forEach(q => {
      assert.ok(q.rubric, 'PSPO III essay questions must provide grading rubric');
      assert.ok(q.rubric.modelAnswer, 'PSPO III rubric must include a model benchmark answer');
      assert.ok(q.rubric.keyPoints.length > 0, 'PSPO III rubric must specify key grading points');
    });
  });
});

test('4. Daily Byte Continuity & Quality', (t) => {
  assert.ok(dailyBytes.length >= 10, 'Must have at least 10 daily lessons');
  dailyBytes.forEach(d => {
    assert.ok(d.dayNumber, 'Daily byte must have a day number');
    assert.ok(d.title, 'Daily byte must have a title');
    assert.ok(d.coreConcept, 'Daily byte must have a core concept');
    assert.ok(d.dilemma, 'Daily byte must contain an interactive dilemma scenario');
    assert.ok(d.dilemma.options.length >= 2, 'Dilemma must have options');
    const recommended = d.dilemma.options.filter(o => o.isRecommended);
    assert.equal(recommended.length, 1, `Dilemma for day ${d.dayNumber} must have exactly 1 recommended option`);
  });
});

test('5. Curated Media Library - Books, Podcasts, Videos', (t) => {
  assert.ok(resources.length >= 10, 'Curated resources must contain at least 10 entries');
  const books = resources.filter(r => r.type === 'book');
  const podcasts = resources.filter(r => r.type === 'podcast');
  const videos = resources.filter(r => r.type === 'video');

  assert.ok(books.length >= 4, 'Must include key PO books (Inspired, Escaping Build Trap, etc.)');
  assert.ok(podcasts.length >= 3, 'Must include PO podcasts');
  assert.ok(videos.length >= 3, 'Must include masterclass videos');

  resources.forEach(r => {
    assert.ok(r.title, 'Resource must have title');
    assert.ok(r.author, 'Resource must have author');
    assert.ok(r.url.startsWith('http'), 'Resource must have valid URL');
    assert.ok(r.keyTakeaways.length > 0, 'Resource must list key takeaways');
  });
});

test('6. Zero-Hardcoding and Environment Validation', (t) => {
  require('dotenv').config();
  assert.ok(process.env.PORT, 'PORT must be defined in .env');
  assert.ok(process.env.APP_NAME, 'APP_NAME must be defined in .env');
  assert.ok(process.env.DEFAULT_PASSING_SCORE, 'DEFAULT_PASSING_SCORE must be configured');
});

test('7. Question Uniqueness and Uniform Option Distribution Audit', (t) => {
  certifications.forEach(cert => {
    cert.exams.forEach((exam, eIdx) => {
      // 1. Uniqueness Guarantee: 0 duplicate questions inside any exam
      const texts = exam.questions.map(q => q.text.trim());
      const uniqueTexts = new Set(texts);
      assert.equal(
        uniqueTexts.size,
        exam.questions.length,
        `${cert.id} Exam ${eIdx + 1} must have 0 duplicate questions (All ${exam.questions.length} questions must be unique)`
      );

      // 2. Uniform Answer Distribution across 4-option questions A, B, C, D
      const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
      let fourOptCount = 0;

      exam.questions.forEach(q => {
        if (q.type !== 'essay' && q.type !== 'true_false' && q.correctAnswers && q.options && q.options.length === 4) {
          fourOptCount++;
          q.correctAnswers.forEach(ans => {
            if (dist[ans] !== undefined) dist[ans]++;
          });
        }
      });

      if (fourOptCount > 0) {
        // Ensure all options A, B, C, D are represented
        assert.ok(dist[0] > 0, `${cert.id} Exam ${eIdx + 1} must have option A represented`);
        assert.ok(dist[1] > 0, `${cert.id} Exam ${eIdx + 1} must have option B represented`);
        assert.ok(dist[2] > 0, `${cert.id} Exam ${eIdx + 1} must have option C represented`);
        assert.ok(dist[3] > 0, `${cert.id} Exam ${eIdx + 1} must have option D represented`);

        // Check that no single option constitutes more than 35% of 4-option answers (uniform ~25%)
        const maxSingle = Math.max(dist[0], dist[1], dist[2], dist[3]);
        const maxRatio = maxSingle / fourOptCount;
        assert.ok(
          maxRatio <= 0.35,
          `${cert.id} Exam ${eIdx + 1} options must be balanced: max option ratio (${maxRatio.toFixed(2)}) must not exceed 0.35`
        );
      }
    });
  });
});

test('8. AI Product Manager Master Suite & Data Integrity', (t) => {
  const aiPmData = require('../server/data/aiPmData');
  assert.ok(aiPmData, 'aiPmData must exist');
  assert.ok((aiPmData.roadmapStages || aiPmData.roadmap).length >= 6, 'Must provide at least 6-stage transition roadmap');
  assert.ok((aiPmData.modelPricingBenchmarks || aiPmData.modelBenchmarks).length >= 5, 'Must provide pricing benchmarks for top frontier/SLM models');
  assert.ok(aiPmData.architectureTradeoffs && aiPmData.architectureTradeoffs.length >= 4, 'Must provide architecture trade-offs');
  assert.ok(aiPmData.readinessQuestions && aiPmData.readinessQuestions.length === 10, 'Must provide 10-question AI PM readiness assessment');
  assert.ok(aiPmData.interviewMasterclass && aiPmData.interviewMasterclass.length >= 3, 'Must provide Senior AI PM interview masterclass');

  // Validate Chapter 11 exists and is the AI PM chapter
  const ch11 = chapters.find(c => c.id === 'ch-11');
  assert.ok(ch11, 'Chapter 11 (AI PM) must be registered in chapters curriculum');
  assert.equal(ch11.category, 'AI & Innovation', 'Chapter 11 category must be AI & Innovation');
  assert.ok(ch11.subChapters.length >= 5, 'Chapter 11 must have at least 5 in-depth sub-chapters');
  assert.ok(ch11.assessment.length >= 5, 'Chapter 11 must have 5 scenario assessment questions');
});

test('9. International Certificate in AI Product Management (IPL Accredited) Data Integrity', (t) => {
  const aiCertData = require('../server/data/aiCertificationData');
  assert.ok(aiCertData, 'aiCertData must exist');

  // 1. Program & Outcomes
  assert.ok(aiCertData.program.title.includes('AI Product Management'), 'Must specify AI Product Management program title');
  assert.equal(aiCertData.outcomes.length, 6, 'Must specify exactly 6 core program outcomes');

  // 2. Adaptive AI PM Competency Framework
  const fw = aiCertData.competencyFramework;
  assert.ok(fw, 'Must define Adaptive AI PM Competency Framework');
  assert.equal(fw.practiceAreas.length, 5, 'Must define 5 core practice areas');
  assert.equal(fw.personaRings.length, 3, 'Must define 3 persona rings (Business PM, Tech/Data PM, Domain PM)');
  assert.equal(fw.aiPillars.length, 3, 'Must define 3 AI pillars (Generative, Predictive, Agentic)');

  // 3. 3 Core Courses (AIPM401F, AIPM402F, AIPM403F)
  assert.equal(aiCertData.coreCourses.length, 3, 'Must include exactly 3 core courses');
  const codes = aiCertData.coreCourses.map(c => c.code);
  assert.ok(codes.includes('AIPM401F'), 'Must include AIPM401F: Generative AI Product Management');
  assert.ok(codes.includes('AIPM402F'), 'Must include AIPM402F: Predictive AI in Product Management');
  assert.ok(codes.includes('AIPM403F'), 'Must include AIPM403F: Agent-driven Automation in Products');

  aiCertData.coreCourses.forEach(course => {
    assert.ok(course.modules.length >= 4, `${course.code} must have at least 4 in-depth modules`);
    course.modules.forEach(mod => {
      assert.ok(mod.id, 'Module must have id');
      assert.ok(mod.title, 'Module must have title');
      assert.ok(mod.topics.length >= 3, `Module ${mod.id} must have detailed topic list`);
      assert.ok(mod.practicalExercise, `Module ${mod.id} must have a hands-on project exercise`);
      assert.ok(mod.detailedTopics && mod.detailedTopics.length >= 3, `Module ${mod.id} must have detailed topic masterclasses`);
      mod.detailedTopics.forEach(dt => {
        assert.ok(dt.title, 'Topic must have title');
        assert.ok(dt.deepDive, 'Topic must have conceptual deep dive');
        assert.ok(dt.frameworkOrFormula, 'Topic must have framework or formula');
        assert.ok(dt.implementationPlaybook && dt.implementationPlaybook.length >= 2, 'Topic must have implementation playbook');
        assert.ok(dt.enterpriseCaseStudy, 'Topic must have enterprise case study');
        assert.ok(dt.deliverableTemplate, 'Topic must have deliverable template');
      });
    });
  });

  // 4. 4 Elective Courses
  assert.equal(aiCertData.electives.length, 4, 'Must include 4 elective micro-certification courses');
  const elCodes = aiCertData.electives.map(e => e.code);
  assert.ok(elCodes.includes('LDR401F'), 'Must include LDR401F');
  assert.ok(elCodes.includes('LDR402F'), 'Must include LDR402F');
  assert.ok(elCodes.includes('STG401F'), 'Must include STG401F');
  assert.ok(elCodes.includes('DSN401F'), 'Must include DSN401F');

  aiCertData.electives.forEach(elective => {
    elective.modules.forEach(mod => {
      assert.ok(mod.detailedTopics && mod.detailedTopics.length >= 2, `Elective module ${mod.id} must have detailed topics`);
      mod.detailedTopics.forEach(dt => {
        assert.ok(dt.title, 'Elective topic must have title');
        assert.ok(dt.deepDive, 'Elective topic must have conceptual deep dive');
      });
    });
  });

  // 5. Tools & Coaches
  assert.ok(aiCertData.toolsCovered.length >= 8, 'Must cover at least 8 industry tools (Google AI Studio, n8n, Langflow, AutoGen, Claude, etc.)');
  assert.ok(aiCertData.executiveCoaches.length >= 8, 'Must list executive coaches');
  assert.ok(aiCertData.hiringCompanies.length >= 15, 'Must list hiring companies');

  // 6. 25-Question Official Exam Simulator
  const sim = aiCertData.certificationSimulator;
  assert.ok(sim, 'Must include official replica exam simulator');
  assert.equal(sim.questions.length, 25, 'Exam simulator must contain exactly 25 comprehensive questions');
  assert.equal(sim.passingScore, 80, 'Exam simulator passing threshold must be 80%');
  sim.questions.forEach((q, idx) => {
    assert.ok(q.id, `Sim question ${idx} must have id`);
    assert.ok(q.question, `Sim question ${idx} must have text`);
    assert.equal(q.options.length, 4, `Sim question ${idx} must have 4 options`);
    assert.ok(typeof q.answer === 'number', `Sim question ${idx} must have numeric answer`);
    assert.ok(q.explanation, `Sim question ${idx} must have syllabus explanation`);
    assert.ok(q.course, `Sim question ${idx} must be mapped to a course code`);
    assert.ok(q.domain, `Sim question ${idx} must be mapped to a syllabus domain`);
  });
});
