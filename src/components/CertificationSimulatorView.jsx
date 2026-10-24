import React, { useState, useEffect } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Clock, 
  Flag, 
  HelpCircle, 
  Pause, 
  Play, 
  RotateCcw, 
  ShieldCheck, 
  Timer, 
  ArrowRight, 
  ArrowLeft,
  XCircle,
  AlertTriangle,
  BarChart3,
  FileText,
  Sparkles,
  Check,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CertificationSimulatorView({ 
  certifications, 
  selectedTrackId, 
  setSelectedTrackId, 
  userProgress, 
  onSaveExamResult 
}) {
  const currentTrack = certifications.find(c => c.id === selectedTrackId) || certifications[0];

  // Active Exam Runner State
  const [activeExam, setActiveExam] = useState(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [selfScores, setSelfScores] = useState({}); // for PSPO III essay
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState(0);

  // Result Report State
  const [examResult, setExamResult] = useState(null);
  const [resultFilter, setResultFilter] = useState('all'); // 'all' | 'incorrect' | 'flagged'

  // Timer countdown hook
  useEffect(() => {
    let interval = null;
    if (activeExam && !isPaused && !examResult && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            clearInterval(interval);
            handleAutoSubmit();
            return 0;
          }
          return t - 1;
        });
        setTimeSpentSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeExam, isPaused, examResult, timeLeft]);

  const handleStartExam = (exam) => {
    setActiveExam(exam);
    setCurrentQuestionIdx(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setSelfScores({});
    setTimeLeft(exam.durationMinutes * 60);
    setIsPaused(false);
    setTimeSpentSeconds(0);
    setExamResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (questionId, optionIdx, isMultiple) => {
    if (isMultiple) {
      setUserAnswers(prev => {
        const currentList = prev[questionId] || [];
        const exists = currentList.includes(optionIdx);
        const updated = exists 
          ? currentList.filter(i => i !== optionIdx)
          : [...currentList, optionIdx];
        return { ...prev, [questionId]: updated };
      });
    } else {
      setUserAnswers(prev => ({
        ...prev,
        [questionId]: optionIdx
      }));
    }
  };

  const handleEssayChange = (questionId, text) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: text
    }));
  };

  const handleSelfScoreChange = (questionId, score) => {
    setSelfScores(prev => ({
      ...prev,
      [questionId]: score
    }));
  };

  const toggleFlag = (idx) => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const calculateEvaluation = () => {
    let pointsEarnedTotal = 0;
    const domainStats = {};

    const evaluatedQuestions = activeExam.questions.map(q => {
      const domain = q.domain || 'General';
      if (!domainStats[domain]) {
        domainStats[domain] = { total: 0, correct: 0 };
      }
      domainStats[domain].total++;

      if (q.type === 'essay') {
        const score = selfScores[q.id] !== undefined ? selfScores[q.id] : 85;
        const essayFraction = score / 100;
        pointsEarnedTotal += essayFraction;
        domainStats[domain].correct += essayFraction;
        return {
          id: q.id,
          type: 'essay',
          domain,
          text: q.text,
          userAnswer: userAnswers[q.id] || '',
          score,
          rubric: q.rubric
        };
      }

      const userChoice = userAnswers[q.id];
      let isCorrect = false;

      if (q.type === 'multiple') {
        const correctSorted = (q.correctAnswers || []).slice().sort();
        const userSorted = Array.isArray(userChoice) ? userChoice.slice().sort() : [];
        isCorrect = correctSorted.length === userSorted.length && 
          correctSorted.every((val, i) => val === userSorted[i]);
      } else {
        isCorrect = Array.isArray(q.correctAnswers) ? q.correctAnswers.includes(userChoice) : false;
      }

      if (isCorrect) {
        pointsEarnedTotal += 1;
        domainStats[domain].correct++;
      }

      return {
        id: q.id,
        type: q.type,
        domain,
        text: q.text,
        options: q.options,
        userAnswer: userChoice !== undefined ? userChoice : null,
        correctAnswers: q.correctAnswers,
        isCorrect,
        explanation: q.explanation,
        references: q.references
      };
    });

    const totalQuestions = activeExam.questions.length;
    const percentage = Math.round((pointsEarnedTotal / totalQuestions) * 100);
    const passed = percentage >= activeExam.passingScore;

    const domainScores = {};
    for (const [dom, stats] of Object.entries(domainStats)) {
      domainScores[dom] = {
        correct: Math.round(stats.correct * 10) / 10,
        total: stats.total,
        percentage: Math.round((stats.correct / stats.total) * 100)
      };
    }

    const report = {
      examId: activeExam.id,
      examTitle: activeExam.title,
      certId: currentTrack.id,
      certName: currentTrack.name,
      passingScore: activeExam.passingScore,
      score: Math.round(pointsEarnedTotal * 10) / 10,
      total: totalQuestions,
      percentage,
      passed,
      timeSpentSeconds,
      domainScores,
      results: evaluatedQuestions
    };

    setExamResult(report);
    onSaveExamResult(activeExam.id, report);

    if (passed) {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch (e) {}
    }
  };

  const handleAutoSubmit = () => {
    alert("Time is up! Submitting your exam automatically for evaluation.");
    calculateEvaluation();
  };

  const formatTimer = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // 1. Result Report Screen
  if (examResult) {
    const filteredReviewQuestions = examResult.results.filter((q, idx) => {
      if (resultFilter === 'incorrect') return !q.isCorrect && q.type !== 'essay';
      if (resultFilter === 'flagged') return !!flaggedQuestions[idx];
      return true;
    });

    return (
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Pass/Fail Banner */}
        <div className={`rounded-2xl p-8 border shadow-lg text-center space-y-4 ${
          examResult.passed 
            ? 'bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white border-emerald-500/40' 
            : 'bg-gradient-to-br from-red-950 via-slate-900 to-slate-950 text-white border-red-500/40'
        }`}>
          <div className="inline-flex p-3 rounded-full bg-white/10 mb-2">
            {examResult.passed ? (
              <CheckCircle2 className="w-12 h-12 text-emerald-400" />
            ) : (
              <XCircle className="w-12 h-12 text-red-400" />
            )}
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            {examResult.passed ? 'Certification Benchmark Passed!' : 'Benchmark Not Met - Retake Advised'}
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            {examResult.examTitle} ({examResult.certName})
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-xl border border-white/10">
              <span className="text-xs uppercase tracking-wider text-slate-400 block">Your Score</span>
              <span className={`text-3xl font-black ${examResult.passed ? 'text-emerald-400' : 'text-red-400'}`}>
                {examResult.percentage}%
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-xl border border-white/10">
              <span className="text-xs uppercase tracking-wider text-slate-400 block">Passing Required</span>
              <span className="text-3xl font-black text-slate-200">
                {examResult.passingScore}%
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-xl border border-white/10">
              <span className="text-xs uppercase tracking-wider text-slate-400 block">Time Spent</span>
              <span className="text-3xl font-black text-blue-400">
                {formatTimer(examResult.timeSpentSeconds)}
              </span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleStartExam(activeExam)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake This Exam</span>
            </button>
            <button
              onClick={() => {
                setActiveExam(null);
                setExamResult(null);
              }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Track Roster</span>
            </button>
          </div>
        </div>

        {/* Domain-Level Diagnostics */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-base flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <span>Category & Domain Diagnostic Breakdown</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(examResult.domainScores || {}).map(([dom, stats]) => (
              <div key={dom} className="p-4 rounded-xl border border-slate-100 bg-slate-50 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                  <span>{dom}</span>
                  <span className={`${stats.percentage >= examResult.passingScore ? 'text-emerald-700' : 'text-red-600'}`}>
                    {stats.percentage}% ({stats.correct}/{stats.total})
                  </span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      stats.percentage >= examResult.passingScore ? 'bg-emerald-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${stats.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Question-by-Question Post-Mortem */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base flex items-center space-x-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                <span>Detailed Itemized Post-Mortem & Guide References</span>
              </h3>
              <p className="text-xs text-slate-500">
                Study the exact rationale and official framework sources to close knowledge gaps.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="inline-flex p-1 bg-slate-100 rounded-xl space-x-1 text-xs font-semibold">
              <button
                onClick={() => setResultFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  resultFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({examResult.results.length})
              </button>
              <button
                onClick={() => setResultFilter('incorrect')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  resultFilter === 'incorrect' ? 'bg-white text-red-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Incorrect ({examResult.results.filter(q => !q.isCorrect && q.type !== 'essay').length})
              </button>
              <button
                onClick={() => setResultFilter('flagged')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  resultFilter === 'flagged' ? 'bg-white text-amber-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Flagged ({Object.values(flaggedQuestions).filter(Boolean).length})
              </button>
            </div>
          </div>

          {/* List of Evaluated Questions */}
          <div className="space-y-6">
            {filteredReviewQuestions.map((q, idx) => (
              <div key={q.id} className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">
                    Question {idx + 1} • <span className="text-blue-700">{q.domain}</span>
                  </span>
                  {q.type === 'essay' ? (
                    <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                      Essay Self-Score: {q.score}%
                    </span>
                  ) : (
                    <span className={`text-xs font-bold px-2 py-0.5 rounded flex items-center space-x-1 ${
                      q.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {q.isCorrect ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                      <span>{q.isCorrect ? 'Correct' : 'Incorrect'}</span>
                    </span>
                  )}
                </div>

                <p className="text-sm font-semibold text-slate-900 leading-snug">
                  {q.text}
                </p>

                {/* Option list for standard multiple choice */}
                {q.options && (
                  <div className="space-y-1.5 pt-2">
                    {q.options.map((opt, oIdx) => {
                      const isUserChoice = Array.isArray(q.userAnswer)
                        ? q.userAnswer.includes(oIdx)
                        : q.userAnswer === oIdx;
                      const isAnswer = Array.isArray(q.correctAnswers)
                        ? q.correctAnswers.includes(oIdx)
                        : false;

                      let style = 'bg-white border-slate-200 text-slate-700';
                      if (isAnswer) {
                        style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                      } else if (isUserChoice && !q.isCorrect) {
                        style = 'bg-red-50 border-red-400 text-red-950 font-medium';
                      }

                      return (
                        <div key={oIdx} className={`p-2.5 rounded-lg border text-xs flex items-center space-x-2 ${style}`}>
                          <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Essay Model Answer Comparison for PSPO III */}
                {q.type === 'essay' && q.rubric && (
                  <div className="space-y-3 pt-2">
                    <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs space-y-1">
                      <span className="font-bold text-slate-800">Your Submitted Strategic Analysis:</span>
                      <p className="text-slate-600 whitespace-pre-line">{q.userAnswer || 'No response provided.'}</p>
                    </div>
                    <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-lg text-xs space-y-1">
                      <span className="font-bold text-blue-900">Benchmark Model Answer (PSPO III Standard):</span>
                      <p className="text-blue-950 whitespace-pre-line leading-relaxed">{q.rubric.modelAnswer}</p>
                    </div>
                  </div>
                )}

                {/* Explanation Box */}
                {q.explanation && (
                  <div className="mt-2 p-3 bg-blue-50/60 border border-blue-200 rounded-lg text-xs text-blue-950 space-y-1">
                    <strong className="block text-blue-900">Framework Explanation:</strong>
                    <p className="leading-relaxed">{q.explanation}</p>
                    {q.references && (
                      <span className="block pt-1 text-[11px] text-blue-700 font-medium">
                        📖 Reference: {q.references}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 2. Active Exam Simulation Runner Mode
  if (activeExam) {
    const currentQ = activeExam.questions[currentQuestionIdx];
    const isMultiple = currentQ.type === 'multiple';
    const isEssay = currentQ.type === 'essay';
    const userChoice = userAnswers[currentQ.id];
    const isFlagged = !!flaggedQuestions[currentQuestionIdx];

    return (
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {/* Exam Runner Header */}
        <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl p-5 shadow-lg flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
              {currentTrack.issuingBody} • {currentTrack.name}
            </span>
            <h2 className="text-lg font-bold text-white">{activeExam.title}</h2>
          </div>

          <div className="flex items-center space-x-4">
            {/* Countdown Timer */}
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-mono text-base font-bold border ${
              timeLeft < 300 
                ? 'bg-red-500/20 text-red-300 border-red-500/40 animate-pulse' 
                : 'bg-slate-800 text-blue-300 border-slate-700'
            }`}>
              <Clock className="w-4 h-4" />
              <span>{formatTimer(timeLeft)}</span>
            </div>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
              title={isPaused ? 'Resume Exam' : 'Pause Exam'}
            >
              {isPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                if (confirm('Are you sure you want to finish and submit this exam?')) {
                  calculateEvaluation();
                }
              }}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition"
            >
              Submit Exam
            </button>
          </div>
        </div>

        {/* Question Palette / Navigator */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Question Navigator ({activeExam.questions.length})</span>
            <div className="flex items-center space-x-3 text-[11px]">
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span>Answered</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span>Flagged</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200 inline-block" />
                <span>Unanswered</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {activeExam.questions.map((q, idx) => {
              const qIsEssay = q.type === 'essay';
              const qIsMultiple = q.type === 'multiple';
              const isAnswered = qIsEssay 
                ? (userAnswers[q.id] && userAnswers[q.id].trim().length > 0)
                : (qIsMultiple 
                    ? (userAnswers[q.id] && userAnswers[q.id].length > 0) 
                    : userAnswers[q.id] !== undefined);
              const isFlag = !!flaggedQuestions[idx];
              const isCurrent = idx === currentQuestionIdx;

              let btnStyle = 'bg-slate-100 text-slate-600 border-slate-200';
              if (isFlag) btnStyle = 'bg-amber-100 text-amber-900 border-amber-300 font-bold';
              else if (isAnswered) btnStyle = 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold';

              if (isCurrent) btnStyle += ' ring-2 ring-blue-600 ring-offset-1';

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestionIdx(idx)}
                  className={`w-7 h-7 rounded-lg border text-xs flex items-center justify-center transition ${btnStyle}`}
                  title={`Question ${idx + 1} (${q.type || 'single'})`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Question Main Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                Question {currentQuestionIdx + 1} of {activeExam.questions.length}
              </span>
              <span className="text-xs font-medium text-slate-500">
                {currentQ.domain}
              </span>
            </div>

            <button
              onClick={() => toggleFlag(currentQuestionIdx)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                isFlagged 
                  ? 'bg-amber-100 text-amber-800 border-amber-300' 
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-600 text-amber-600' : ''}`} />
              <span>{isFlagged ? 'Flagged for Review' : 'Flag Question'}</span>
            </button>
          </div>

          <div className="space-y-3">
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              {currentQ.text}
            </p>
            {isMultiple && (
              <span className="inline-block text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-100">
                Select {currentQ.correctAnswers?.length || 2} correct options
              </span>
            )}
            {currentQ.type === 'true_false' && (
              <span className="inline-block text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                True or False Question
              </span>
            )}
            {isEssay && (
              <span className="inline-block text-xs font-bold text-purple-800 bg-purple-50 px-2.5 py-1 rounded border border-purple-200">
                Written / Essay Strategic Dilemma (With Model Rubric Benchmark)
              </span>
            )}
          </div>

          {/* Multiple Choice Options */}
          {!isEssay && currentQ.options && (
            <div className="space-y-2.5 pt-2">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = isMultiple
                  ? (Array.isArray(userChoice) && userChoice.includes(oIdx))
                  : userChoice === oIdx;

                return (
                  <div
                    key={oIdx}
                    onClick={() => handleSelectOption(currentQ.id, oIdx, isMultiple)}
                    className={`p-4 rounded-xl border text-sm cursor-pointer transition flex items-center space-x-3.5 ${
                      isSelected
                        ? 'bg-blue-50 border-blue-600 text-blue-950 font-semibold shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 ${
                      isSelected
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-slate-300 text-slate-500'
                    }`}>
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span className="leading-snug">{opt}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* PSPO III Essay Editor & Rubric Benchmark */}
          {isEssay && (
            <div className="space-y-4 pt-2">
              <label className="block text-xs font-bold text-slate-700">
                Your Strategic Leadership Essay Response:
              </label>
              <textarea
                rows={6}
                value={userAnswers[currentQ.id] || ''}
                onChange={(e) => handleEssayChange(currentQ.id, e.target.value)}
                placeholder="Draft your detailed strategic recommendation, citing empirical Scrum principles, stakeholder management tactics, and value governance..."
                className="w-full p-4 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 leading-relaxed font-mono"
              />

              {/* Rubric Benchmark Reveal */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>Scrum.org PSPO III Official Rubric Evaluation Dimension</span>
                  </span>
                  <span className="text-xs font-bold text-blue-600">
                    Self-Score: {selfScores[currentQ.id] || 85}%
                  </span>
                </div>

                <div className="text-xs text-slate-600 space-y-1">
                  <strong>Key Grading Dimensions required for full credit:</strong>
                  <ul className="list-disc pl-5 space-y-1 pt-1">
                    {currentQ.rubric?.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex items-center space-x-4">
                  <span className="text-xs font-semibold text-slate-700">Self-Evaluation Benchmark:</span>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    step="5"
                    value={selfScores[currentQ.id] || 85}
                    onChange={(e) => handleSelfScoreChange(currentQ.id, parseInt(e.target.value, 10))}
                    className="flex-1 accent-blue-600 cursor-pointer"
                  />
                  <span className="text-xs font-extrabold text-blue-700 w-10">
                    {selfScores[currentQ.id] || 85}%
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <button
              onClick={() => setCurrentQuestionIdx(idx => Math.max(0, idx - 1))}
              disabled={currentQuestionIdx === 0}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold border transition ${
                currentQuestionIdx === 0 
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed' 
                  : 'border-slate-300 hover:bg-slate-100 text-slate-700'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            {currentQuestionIdx < activeExam.questions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestionIdx(idx => idx + 1)}
                className="inline-flex items-center space-x-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow transition"
              >
                <span>Next Question</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => {
                  if (confirm('You have reached the end of the exam. Submit for grading?')) {
                    calculateEvaluation();
                  }
                }}
                className="inline-flex items-center space-x-2 px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow transition"
              >
                <span>Submit & View Results</span>
                <Check className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 3. Track Selection & Exam Roster View (Default)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          30 Full Certification Mock Exams (5 Replica Tests Each)
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Exact replicas of the world's most prestigious Product Owner examinations. Practice with realistic timeboxes, passing scores, and comprehensive question rationales.
        </p>
      </div>

      {/* Track Selection Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {certifications.map((track) => {
          const isSelected = track.id === currentTrack.id;
          const completedCount = track.exams.filter(e => userProgress.completedExams?.[e.id]).length;

          return (
            <button
              key={track.id}
              onClick={() => setSelectedTrackId(track.id)}
              className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-slate-50'
              }`}
            >
              <div>
                <span className={`text-[10px] uppercase font-bold tracking-wider block ${
                  isSelected ? 'text-blue-200' : 'text-slate-400'
                }`}>
                  {track.issuingBody}
                </span>
                <span className="text-xs font-bold block mt-0.5 line-clamp-1">{track.name.split('(')[0]}</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px]">
                <span className={isSelected ? 'text-blue-100' : 'text-slate-500'}>
                  5 Exams
                </span>
                <span className={`font-bold ${isSelected ? 'text-emerald-200' : 'text-emerald-600'}`}>
                  {completedCount}/5
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Track Overview & 5 Mock Exams Roster */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                {currentTrack.issuingBody} Official Track
              </span>
              <span className="text-xs font-semibold text-slate-500">{currentTrack.level}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">{currentTrack.name}</h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              {currentTrack.description}
            </p>
          </div>

          <div className="flex items-center space-x-4 bg-slate-50 p-4 rounded-xl border border-slate-200 shrink-0">
            <div className="text-center px-2">
              <span className="text-xs uppercase font-bold text-slate-400 block">Passing</span>
              <span className="text-lg font-black text-slate-900">{currentTrack.passingScore}%</span>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="text-center px-2">
              <span className="text-xs uppercase font-bold text-slate-400 block">Timebox</span>
              <span className="text-lg font-black text-slate-900">{currentTrack.durationMinutes}m</span>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="text-center px-2">
              <span className="text-xs uppercase font-bold text-slate-400 block">Full Exams</span>
              <span className="text-lg font-black text-blue-600">5 Tests</span>
            </div>
          </div>
        </div>

        {/* 5 Mock Exams Grid */}
        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 text-sm">
            Select Mock Exam to Launch (5 Replicas Available):
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentTrack.exams.map((exam, idx) => {
              const prevAttempt = userProgress.completedExams?.[exam.id];
              return (
                <div 
                  key={exam.id}
                  className="p-5 rounded-xl border border-slate-200 hover:border-blue-400 bg-white hover:shadow-md transition flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">Mock Exam {idx + 1}</span>
                      {prevAttempt ? (
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                          prevAttempt.passed ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {prevAttempt.percentage}% {prevAttempt.passed ? 'Passed' : 'Failed'}
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400 font-medium">Not Attempted</span>
                      )}
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition leading-snug">
                      {exam.title}
                    </h4>
                    <div className="flex items-center space-x-3 text-xs text-slate-500 pt-1">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{exam.durationMinutes} min</span>
                      </span>
                      <span>•</span>
                      <span>{exam.questions.length} Questions</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStartExam(exam)}
                    className="w-full inline-flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-sm transition"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>{prevAttempt ? 'Retake Timed Exam' : 'Start Timed Exam'}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
