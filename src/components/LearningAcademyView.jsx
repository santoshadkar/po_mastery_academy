import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  ArrowLeft, 
  Award, 
  RotateCcw, 
  Sparkles, 
  AlertCircle,
  Lightbulb,
  Check,
  X,
  Layers,
  FileText,
  Briefcase,
  AlertTriangle,
  ListChecks,
  ChevronRight,
  BookMarked,
  Clock,
  Compass,
  BookmarkCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import MarkdownView from './MarkdownView';

export default function LearningAcademyView({ 
  chapters, 
  selectedChapterId, 
  setSelectedChapterId, 
  userProgress, 
  onSaveChapterQuiz 
}) {
  const currentChapter = chapters.find(c => c.id === selectedChapterId) || chapters[0];
  const [selectedSubChapterIdx, setSelectedSubChapterIdx] = useState(0);
  const [activeTabMode, setActiveTabMode] = useState('guide'); // 'guide' | 'templates' | 'cases' | 'checklist' | 'quiz'

  // Assessment State
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(null);

  const categories = ['All', 'Foundations', 'Frameworks', 'Strategy & Prioritization', 'Metrics & Strategy', 'Customer Discovery', 'Flow & Operations', 'Execution & Discovery', 'Execution & Requirements', 'Leadership & Facilitation', 'Leadership & Technology'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredChapters = selectedCategory === 'All'
    ? chapters
    : chapters.filter(c => c.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(c.category.toLowerCase()));

  const subChapters = currentChapter.subChapters || [];
  const currentSub = subChapters[selectedSubChapterIdx] || subChapters[0] || {};

  const handleSelectOption = (questionId, optionIndex) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleSubmitAssessment = () => {
    let correct = 0;
    const breakdown = currentChapter.assessment.map(q => {
      const isCorrect = selectedAnswers[q.id] === q.answer;
      if (isCorrect) correct++;
      return {
        questionId: q.id,
        isCorrect,
        userAnswer: selectedAnswers[q.id],
        correctAnswer: q.answer
      };
    });

    const percentage = Math.round((correct / currentChapter.assessment.length) * 100);
    const passed = percentage >= 80;

    const result = {
      score: correct,
      total: currentChapter.assessment.length,
      percentage,
      passed,
      breakdown
    };

    setQuizScore(result);
    setIsSubmitted(true);
    onSaveChapterQuiz(currentChapter.id, result);

    if (passed) {
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setQuizScore(null);
  };

  const handleChapterChange = (id) => {
    setSelectedChapterId(id);
    setSelectedSubChapterIdx(0);
    setActiveTabMode('guide');
    setSelectedAnswers({});
    setIsSubmitted(false);
    setQuizScore(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentIdx = chapters.findIndex(c => c.id === currentChapter.id);
  const nextChapter = currentIdx < chapters.length - 1 ? chapters[currentIdx + 1] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Category Filter Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sticky Sidebar: Chapter Hierarchy & Sub-Chapter Table of Contents */}
        <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
          {/* Active Chapter Sub-Chapters Navigator */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Chapter Sub-Modules ({subChapters.length})
              </span>
              <span className="text-xs font-bold text-blue-600">
                Step {selectedSubChapterIdx + 1}/{subChapters.length}
              </span>
            </div>

            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
              {subChapters.map((sub, sIdx) => {
                const isCurrent = sIdx === selectedSubChapterIdx;
                return (
                  <button
                    key={sub.id || sIdx}
                    onClick={() => {
                      setSelectedSubChapterIdx(sIdx);
                      window.scrollTo({ top: 180, behavior: 'smooth' });
                    }}
                    className={`w-full text-left p-2.5 rounded-xl border text-xs transition flex items-center space-x-2.5 ${
                      isCurrent
                        ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50 hover:text-blue-900'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      isCurrent ? 'bg-blue-800 text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {sIdx + 1}
                    </span>
                    <span className="truncate leading-tight">
                      {sub.title.replace(/^[\d.]+\s*/, '')}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Jump to Assessment Button */}
            <button
              onClick={() => {
                setActiveTabMode('quiz');
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className="w-full mt-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold transition flex items-center justify-center space-x-2"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Jump to Chapter Knowledge Check</span>
            </button>
          </div>

          {/* All Chapters Roster */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center justify-between">
              <span>All Curriculum Modules ({chapters.length})</span>
              <span className="text-xs text-blue-600 font-semibold">
                {Object.keys(userProgress.completedChapters || {}).length} Passed
              </span>
            </h3>
            <div className="space-y-1.5 max-h-[480px] overflow-y-auto pr-1">
              {filteredChapters.map((ch, idx) => {
                const isActive = ch.id === currentChapter.id;
                const isCompleted = userProgress.completedChapters?.[ch.id]?.passed;
                const score = userProgress.completedChapters?.[ch.id]?.percentage;
                return (
                  <button
                    key={ch.id}
                    onClick={() => handleChapterChange(ch.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition flex items-center justify-between ${
                      isActive
                        ? 'bg-blue-50 border-blue-400 text-blue-900 font-bold shadow-xs'
                        : isCompleted
                        ? 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate pr-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        isActive ? 'bg-blue-600 text-white' : isCompleted ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="truncate">{ch.title.replace(/^\d+\.\s*/, '')}</span>
                    </div>
                    {isCompleted && (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded shrink-0">
                        {score}%
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Main Reader Area: Executive Study Deck */}
        <div className="lg:col-span-8 space-y-6 order-1 lg:order-2">
          {/* Chapter Overview Hero */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                {currentChapter.category} • {currentChapter.level}
              </span>
              <span className="text-xs text-slate-300 font-medium flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>{currentChapter.readTime} read time</span>
                <span>•</span>
                <span>{subChapters.length} Sub-Chapters</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              {currentChapter.title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              {currentChapter.summary}
            </p>
          </div>

          {/* Sub-Chapter Executive Tabs Header */}
          <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-sm flex items-center space-x-1 overflow-x-auto scrollbar-none text-xs font-bold">
            <button
              onClick={() => setActiveTabMode('guide')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
                activeTabMode === 'guide'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Comprehensive Guide</span>
            </button>
            {currentSub.frameworkOrTemplate && (
              <button
                onClick={() => setActiveTabMode('templates')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
                  activeTabMode === 'templates'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Frameworks & Templates</span>
              </button>
            )}
            {currentSub.realWorldExample && (
              <button
                onClick={() => setActiveTabMode('cases')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
                  activeTabMode === 'cases'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Enterprise Case Studies</span>
              </button>
            )}
            {currentSub.actionChecklist && (
              <button
                onClick={() => setActiveTabMode('checklist')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
                  activeTabMode === 'checklist'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <ListChecks className="w-3.5 h-3.5" />
                <span>Action Checklist</span>
              </button>
            )}
            {currentSub.marketInterviewMasterclass && (
              <button
                onClick={() => setActiveTabMode('interview')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
                  activeTabMode === 'interview'
                    ? 'bg-purple-600 text-white shadow-sm font-bold'
                    : 'text-purple-700 hover:bg-purple-50'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interview Masterclass</span>
              </button>
            )}
            <button
              onClick={() => setActiveTabMode('quiz')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
                activeTabMode === 'quiz'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                  : 'text-amber-700 hover:bg-amber-50'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Knowledge Check</span>
            </button>
          </div>

          {/* ACTIVE CONTENT VIEW */}
          {activeTabMode !== 'quiz' && (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
              {/* Sub-Chapter Title & Step Controls */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Sub-Chapter {selectedSubChapterIdx + 1} of {subChapters.length}
                </span>

                <div className="flex items-center space-x-2">
                  <button
                    disabled={selectedSubChapterIdx === 0}
                    onClick={() => {
                      setSelectedSubChapterIdx(i => Math.max(0, i - 1));
                      window.scrollTo({ top: 220, behavior: 'smooth' });
                    }}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center space-x-1 ${
                      selectedSubChapterIdx === 0
                        ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                        : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Prev Sub-Chapter</span>
                  </button>
                  <button
                    disabled={selectedSubChapterIdx === subChapters.length - 1}
                    onClick={() => {
                      setSelectedSubChapterIdx(i => Math.min(subChapters.length - 1, i + 1));
                      window.scrollTo({ top: 220, behavior: 'smooth' });
                    }}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center space-x-1 ${
                      selectedSubChapterIdx === subChapters.length - 1
                        ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                        : 'bg-slate-900 text-white hover:bg-blue-600'
                    }`}
                  >
                    <span>Next Sub-Chapter</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {currentSub.title}
              </h2>

              {/* MODE 1: COMPREHENSIVE GUIDE */}
              {activeTabMode === 'guide' && (
                <div className="space-y-8">
                  {/* Deep Conceptual Core - Parsed via MarkdownView */}
                  <div className="space-y-3">
                    <MarkdownView content={currentSub.concept} />
                  </div>

                  {/* Frameworks & Architecture if present */}
                  {currentSub.frameworkOrTemplate && (
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                      <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-indigo-600" />
                        <span>Framework, Formula & Architecture Specification</span>
                      </h3>
                      <MarkdownView content={currentSub.frameworkOrTemplate} />
                    </div>
                  )}

                  {/* Enterprise Case Study if present */}
                  {currentSub.realWorldExample && (
                    <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
                      <h3 className="text-base font-bold text-emerald-950 flex items-center space-x-2">
                        <Briefcase className="w-4 h-4 text-emerald-700" />
                        <span>Enterprise Real-World Case Study</span>
                      </h3>
                      <MarkdownView content={currentSub.realWorldExample} />
                    </div>
                  )}

                  {/* Market Interview Masterclass if present */}
                  {currentSub.marketInterviewMasterclass && (
                    <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200/80 space-y-3">
                      <h3 className="text-base font-bold text-purple-950 flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-purple-700" />
                        <span>Executive Interview Masterclass & Verbal Scripts</span>
                      </h3>
                      <MarkdownView content={currentSub.marketInterviewMasterclass} />
                    </div>
                  )}

                  {/* Anti-Patterns if present */}
                  {currentSub.antiPatternsToAvoid && (
                    <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
                      <h3 className="text-base font-bold text-amber-950 flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-700" />
                        <span>Critical Anti-Patterns & Traps to Avoid</span>
                      </h3>
                      <MarkdownView content={currentSub.antiPatternsToAvoid} />
                    </div>
                  )}

                  {/* Monday Morning Action Checklist */}
                  {currentSub.actionChecklist && currentSub.actionChecklist.length > 0 && (
                    <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
                      <h3 className="text-base font-bold text-blue-950 flex items-center space-x-2">
                        <ListChecks className="w-4 h-4 text-blue-600" />
                        <span>Monday Morning Action Checklist for Product Owners</span>
                      </h3>
                      <div className="space-y-2.5 pt-1">
                        {currentSub.actionChecklist.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3 text-sm text-blue-950">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* MODE 2: TEMPLATES & ARCHITECTURES ONLY */}
              {activeTabMode === 'templates' && currentSub.frameworkOrTemplate && (
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <MarkdownView content={currentSub.frameworkOrTemplate} />
                  </div>
                </div>
              )}

              {/* MODE 3: ENTERPRISE CASE STUDIES ONLY */}
              {activeTabMode === 'cases' && currentSub.realWorldExample && (
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                    <MarkdownView content={currentSub.realWorldExample} />
                  </div>
                </div>
              )}

              {/* MODE 4: ACTION CHECKLIST ONLY */}
              {activeTabMode === 'checklist' && currentSub.actionChecklist && (
                <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-4">
                  <h3 className="text-lg font-bold text-blue-950">
                    Product Owner Implementation Action Items:
                  </h3>
                  <div className="space-y-3 pt-2">
                    {currentSub.actionChecklist.map((item, idx) => (
                      <div key={idx} className="p-3 bg-white border border-blue-200 rounded-xl flex items-start space-x-3 text-sm text-blue-950 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MODE 5: INTERVIEW MASTERCLASS ONLY */}
              {activeTabMode === 'interview' && currentSub.marketInterviewMasterclass && (
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-4">
                    <MarkdownView content={currentSub.marketInterviewMasterclass} />
                  </div>
                </div>
              )}

              {/* Sub-Chapter Next Button Footer */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  disabled={selectedSubChapterIdx === 0}
                  onClick={() => {
                    setSelectedSubChapterIdx(i => Math.max(0, i - 1));
                    window.scrollTo({ top: 220, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold disabled:opacity-30"
                >
                  Previous Sub-Chapter
                </button>

                {selectedSubChapterIdx < subChapters.length - 1 ? (
                  <button
                    onClick={() => {
                      setSelectedSubChapterIdx(i => i + 1);
                      window.scrollTo({ top: 220, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow transition"
                  >
                    <span>Next Sub-Chapter</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setActiveTabMode('quiz');
                      window.scrollTo({ top: 220, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black shadow transition"
                  >
                    <span>Take Chapter Knowledge Check</span>
                    <Award className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* MODE 5: END-OF-CHAPTER INTERACTIVE ASSESSMENT */}
          {activeTabMode === 'quiz' && (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span>End-of-Chapter Knowledge Check</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Validate what you learned across all {subChapters.length} sub-chapters. Score 80% or higher to earn chapter completion.
                  </p>
                </div>

                {quizScore && (
                  <div className={`text-right px-4 py-2 rounded-xl border ${
                    quizScore.passed ? 'bg-emerald-50 border-emerald-300' : 'bg-red-50 border-red-300'
                  }`}>
                    <span className={`text-xl font-black ${quizScore.passed ? 'text-emerald-700' : 'text-red-700'}`}>
                      {quizScore.percentage}%
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      {quizScore.passed ? 'Mastery Passed! 🎉' : 'Needs Review'}
                    </p>
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {currentChapter.assessment.map((q, qIdx) => {
                  const userChoice = selectedAnswers[q.id];
                  const isCorrect = userChoice === q.answer;

                  return (
                    <div key={q.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-xs font-bold text-slate-400">Question {qIdx + 1} of {currentChapter.assessment.length}</span>
                        {isSubmitted && (
                          <span className={`text-xs font-bold px-2 py-0.5 rounded flex items-center space-x-1 ${
                            isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {isCorrect ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                            <span>{isCorrect ? 'Correct' : 'Incorrect'}</span>
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-slate-900">
                        {q.question}
                      </p>

                      <div className="space-y-2 pt-1">
                        {q.options.map((opt, oIdx) => {
                          const isSelected = userChoice === oIdx;
                          let optionStyle = 'bg-white border-slate-200 text-slate-700 hover:border-blue-400';

                          if (isSubmitted) {
                            if (oIdx === q.answer) {
                              optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                            } else if (isSelected && !isCorrect) {
                              optionStyle = 'bg-red-50 border-red-400 text-red-950';
                            } else {
                              optionStyle = 'bg-slate-100 border-slate-200 text-slate-400';
                            }
                          } else if (isSelected) {
                            optionStyle = 'bg-blue-50 border-blue-600 text-blue-900 font-medium shadow-xs';
                          }

                          return (
                            <div
                              key={oIdx}
                              onClick={() => handleSelectOption(q.id, oIdx)}
                              className={`p-3.5 rounded-xl border text-xs cursor-pointer transition flex items-center space-x-3 ${optionStyle}`}
                            >
                              <span className={`w-5 h-5 rounded-full border flex items-center justify-center font-bold text-[10px] shrink-0 ${
                                isSelected ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 text-slate-500'
                              }`}>
                                {String.fromCharCode(65 + oIdx)}
                              </span>
                              <span className="leading-snug">{opt}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation Box on Submit */}
                      {isSubmitted && (
                        <div className="mt-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-950 space-y-1">
                          <strong className="block text-blue-900 font-bold">Explanation & PO Best Practice:</strong>
                          <p className="leading-relaxed">{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Assessment Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitAssessment}
                    disabled={Object.keys(selectedAnswers).length < currentChapter.assessment.length}
                    className={`px-6 py-2.5 rounded-xl font-bold text-sm shadow transition ${
                      Object.keys(selectedAnswers).length === currentChapter.assessment.length
                        ? 'bg-blue-600 hover:bg-blue-500 text-white'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Submit Assessment ({Object.keys(selectedAnswers).length}/{currentChapter.assessment.length} answered)
                  </button>
                ) : (
                  <button
                    onClick={handleRetake}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Assessment</span>
                  </button>
                )}

                {nextChapter && (
                  <button
                    onClick={() => handleChapterChange(nextChapter.id)}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow transition"
                  >
                    <span>Next Chapter: {nextChapter.title.replace(/^\d+\.\s*/, '')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
