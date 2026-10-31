import React, { useState } from 'react';
import { 
  X, 
  Award, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  Target, 
  Zap, 
  BookOpen,
  Share2
} from 'lucide-react';
import poGrowthData from '../data/poGrowthFeatures';

export default function PoSkillAssessmentModal({ isOpen, onClose, onNavigateToChapter, onOpenLinkedInShare }) {
  if (!isOpen) return null;

  const { diagnosticAssessment } = poGrowthData;
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = diagnosticAssessment.questions[currentQIndex];
  const totalQuestions = diagnosticAssessment.questions.length;

  const handleSelectOption = (qId, optIdx) => {
    setUserAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleNext = () => {
    if (currentQIndex < totalQuestions - 1) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentQIndex(0);
    setUserAnswers({});
    setIsCompleted(false);
  };

  // Calculate Results
  const calculateResult = () => {
    let totalScore = 0;
    const pillarScores = {};

    diagnosticAssessment.pillars.forEach(p => {
      pillarScores[p.id] = { name: p.name, score: 0, maxScore: 0 };
    });

    diagnosticAssessment.questions.forEach(q => {
      const selectedIdx = userAnswers[q.id];
      const opt = q.options[selectedIdx];
      const score = opt ? opt.score : 0;
      totalScore += score;

      if (pillarScores[q.pillar]) {
        pillarScores[q.pillar].score += score;
        pillarScores[q.pillar].maxScore += 5;
      }
    });

    let profile = diagnosticAssessment.seniorityProfiles.associate;
    if (totalScore >= diagnosticAssessment.seniorityProfiles.principal.scoreRange[0]) {
      profile = diagnosticAssessment.seniorityProfiles.principal;
    } else if (totalScore >= diagnosticAssessment.seniorityProfiles.senior.scoreRange[0]) {
      profile = diagnosticAssessment.seniorityProfiles.senior;
    }

    const percentage = Math.round((totalScore / (totalQuestions * 5)) * 100);

    return { totalScore, maxScore: totalQuestions * 5, percentage, profile, pillarScores };
  };

  const result = calculateResult();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          /* Active Question View */
          <div className="p-6 sm:p-10 space-y-6">
            {/* Header / Progress */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span className="uppercase tracking-wider text-blue-600 font-extrabold">
                  Question {currentQIndex + 1} of {totalQuestions}
                </span>
                <span>Timebox: ~5 Minutes</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQIndex + 1) / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Scenario Callout */}
            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-slate-800 leading-relaxed">
              <strong className="text-blue-900 block mb-1">Real-World Scenario:</strong>
              {currentQ.scenario}
            </div>

            {/* Question Text */}
            <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
              {currentQ.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = userAnswers[currentQ.id] === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(currentQ.id, optIdx)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-blue-50/80 border-blue-600 shadow-sm ring-1 ring-blue-200 text-slate-900'
                        : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="text-xs sm:text-sm font-medium leading-relaxed">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Next / Submit Button */}
            <div className="pt-2 flex justify-end">
              <button
                disabled={userAnswers[currentQ.id] === undefined}
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm flex items-center gap-2 shadow-md shadow-blue-600/30 transition"
              >
                <span>{currentQIndex === totalQuestions - 1 ? 'Calculate My PO Level' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Results Assessment View */
          <div className="p-6 sm:p-10 space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Diagnostic Capability Result
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                You are operating as a <span className="text-blue-600">{result.profile.title}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
                {result.profile.tagline}
              </p>
            </div>

            {/* Score & Profile Summary Grid */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <span className="text-xs text-slate-400 block">Overall Mastery Benchmark:</span>
                <span className="text-4xl font-black text-slate-900">{result.percentage}%</span>
                <span className="text-xs text-slate-500 block mt-0.5">({result.totalScore} of {result.maxScore} points)</span>
              </div>

              <div className="max-w-md text-xs text-slate-600 leading-relaxed border-t sm:border-t-0 sm:border-l border-slate-200 pt-4 sm:pt-0 sm:pl-6">
                {result.profile.summary}
              </div>
            </div>

            {/* 5 Core Pillars Diagnostic Radar Breakdown */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Capability Breakdown Across 5 PO Pillars:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.keys(result.pillarScores).map(pKey => {
                  const p = result.pillarScores[pKey];
                  const pPercent = p.maxScore > 0 ? Math.round((p.score / p.maxScore) * 100) : 0;
                  return (
                    <div key={pKey} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                        <span>{p.name}</span>
                        <span className="font-mono text-blue-600">{pPercent}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-blue-600 h-1.5 rounded-full" 
                          style={{ width: `${pPercent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recommended Learning Path */}
            <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Your Personalized Recommended Study Path:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {result.profile.recommendedChapters.map(chId => (
                  <button
                    key={chId}
                    onClick={() => {
                      onClose();
                      if (onNavigateToChapter) onNavigateToChapter(chId);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-white border border-blue-200 text-blue-800 font-bold text-xs hover:bg-blue-600 hover:text-white transition shadow-xs"
                  >
                    Study {chId.toUpperCase()} →
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={handleReset}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Assessment</span>
              </button>

              <div className="flex items-center gap-2">
                {onOpenLinkedInShare && (
                  <button
                    onClick={() => onOpenLinkedInShare(result.profile.title, result.percentage)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-blue-600/30 transition"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share Result on LinkedIn</span>
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition"
                >
                  Close & Explore Portal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
