import React from 'react';
import { 
  Award, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Flame, 
  Play, 
  Sparkles, 
  Star, 
  Timer, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  Bot,
  Brain
} from 'lucide-react';

export default function DashboardView({ 
  chapters, 
  certifications, 
  dailyByte, 
  userProgress, 
  setActiveTab, 
  setSelectedChapter, 
  setSelectedCertTrack,
  onLaunchExam 
}) {
  const completedChaptersCount = Object.keys(userProgress.completedChapters || {}).length;
  const completedExamsCount = Object.keys(userProgress.completedExams || {}).length;

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-8 text-white shadow-xl border border-blue-800/40">
        <div className="absolute right-0 top-0 -mt-10 -mr-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
              <Zap className="w-3.5 h-3.5" />
              <span>Elite Product Owner Acceleration Portal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Master Product Ownership from Foundations to Executive Leadership
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Equipping you with deep conceptual mastery across {chapters.length} progressive chapters, 
              end-of-chapter assessments, daily micro-insights, the dedicated <span className="text-purple-300 font-semibold">AI Product Manager Suite</span>, and <span className="font-semibold text-blue-200">30 full replica mock certification exams</span> for PSPO I/II/III, CSPO, SAFe POPM, and ICP-APO.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button 
                onClick={() => setActiveTab('chapters')}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5"
              >
                <BookOpen className="w-4 h-4" />
                <span>Continue Curriculum</span>
              </button>
              <button 
                onClick={() => setActiveTab('aiPm')}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 transition transform hover:-translate-y-0.5"
              >
                <Bot className="w-4 h-4 text-purple-200" />
                <span>AI PM Suite & Roadmap</span>
              </button>
              <button 
                onClick={() => setActiveTab('certifications')}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition"
              >
                <Timer className="w-4 h-4 text-blue-400" />
                <span>Simulate 30 Exams</span>
              </button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 shrink-0">
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-xl p-4 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-400">{completedChaptersCount}/{chapters.length}</span>
              <p className="text-xs text-slate-400 mt-1">Chapters Mastered</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-xl p-4 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">{completedExamsCount}/30</span>
              <p className="text-xs text-slate-400 mt-1">Mock Exams Taken</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-xl p-4 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">{userProgress.streak || 1}</span>
              <p className="text-xs text-slate-400 mt-1">Day Streak 🔥</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-xl p-4 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-purple-400">6 Certs</span>
              <p className="text-xs text-slate-400 mt-1">Track Simulator</p>
            </div>
          </div>
        </div>
      </div>

      {/* PO Daily Byte Spotlight */}
      {dailyByte && (
        <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-amber-500/20 text-amber-600 rounded-xl shrink-0 mt-1">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  PO Daily Byte • Day {dailyByte.dayNumber}
                </span>
                <span className="text-xs text-slate-500">{dailyByte.category}</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900">{dailyByte.title}</h2>
              <p className="text-sm text-slate-600 max-w-3xl line-clamp-2">
                {dailyByte.coreConcept}
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('dailyByte')}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition shrink-0"
          >
            <span>Solve Today's Dilemma</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* AI Product Manager Spotlight Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-900 border border-purple-500/30 p-6 shadow-xl">
        <div className="absolute right-0 top-0 -mt-12 -mr-12 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/30">
              <Bot className="w-3.5 h-3.5" />
              <span>SPECIALIZED MASTER TRACK • AI PRODUCT MANAGEMENT</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Bridge from Scrum Product Owner to Elite AI Product Manager
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Master the shift from deterministic backlog slicing to probabilistic systems (<span className="text-purple-300 font-mono font-semibold">P(Y|X)</span>). 
              Includes an end-to-end 16-week transition roadmap, interactive token cost & unit economics calculator, RAG vs Fine-Tuning trade-off explorer, 4-tier autonomy governance, and Senior AI PM interview masterclass.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-400">
              <span className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60 text-purple-200">16-Week Transition Blueprint</span>
              <span className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60 text-purple-200">Live Token Cost Calculator</span>
              <span className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60 text-purple-200">10-Question Readiness Assessment</span>
              <span className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60 text-purple-200">Chapter 11 (35-min Masterclass)</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full lg:w-auto">
            <button
              onClick={() => setActiveTab('aiPm')}
              className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition transform hover:-translate-y-0.5"
            >
              <Bot className="w-4 h-4" />
              <span>Launch AI PM Suite</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button
              onClick={() => {
                setSelectedChapter('ch-11');
                setActiveTab('chapters');
              }}
              className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs transition"
            >
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>Read Chapter 11 Deep Dive</span>
            </button>
          </div>
        </div>
      </div>

      {/* 6 Certification Tracks Overview (30 Mock Exams Hub) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <Timer className="w-5 h-5 text-blue-600" />
              <span>30 Exact Replica Mock Exams (5 per Track)</span>
            </h2>
            <p className="text-sm text-slate-500">
              Realistic timed simulations, passing score benchmarks, domain analysis, and Scrum Guide / EBM rationales.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('certifications')}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center space-x-1"
          >
            <span>View All Tracks</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((track) => {
            const completedCount = track.exams.filter(e => userProgress.completedExams?.[e.id]).length;
            return (
              <div 
                key={track.id}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition flex flex-col justify-between group hover:border-blue-400"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {track.issuingBody}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{track.durationMinutes} min</span>
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition">
                      {track.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {track.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <span className="font-semibold text-slate-800">5 Full Exams</span>
                    <span>•</span>
                    <span>Passing: <strong className="text-slate-900">{track.passingScore}%</strong></span>
                    <span>•</span>
                    <span className="text-emerald-600 font-semibold">{completedCount}/5 Done</span>
                  </div>
                </div>

                <div className="pt-4 mt-2">
                  <button
                    onClick={() => {
                      setSelectedCertTrack(track.id);
                      setActiveTab('certifications');
                    }}
                    className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 text-xs font-bold transition"
                  >
                    <span>Open 5 Mock Exams</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 10 Chapters Curriculum Quick Progress */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span>PO Mastery Curriculum ({chapters.length} Chapters)</span>
            </h2>
            <p className="text-sm text-slate-500">
              Comprehensive readings with scenario-based assessments at the end of every chapter.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('chapters')}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center space-x-1"
          >
            <span>Explore All Chapters</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {chapters.map((ch, idx) => {
            const isCompleted = !!userProgress.completedChapters?.[ch.id];
            const quizScore = userProgress.completedChapters?.[ch.id]?.percentage;
            return (
              <div 
                key={ch.id}
                onClick={() => {
                  setSelectedChapter(ch.id);
                  setActiveTab('chapters');
                }}
                className={`cursor-pointer rounded-xl p-4 border transition ${
                  isCompleted 
                    ? 'bg-emerald-50/50 border-emerald-200 hover:border-emerald-400' 
                    : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-400">CH {idx + 1}</span>
                  {isCompleted ? (
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded flex items-center space-x-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>{quizScore}%</span>
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-400">{ch.readTime}</span>
                  )}
                </div>
                <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug">
                  {ch.title.replace(/^\d+\.\s*/, '')}
                </h4>
                <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                  <span>{ch.category}</span>
                  <span className="text-blue-600 font-semibold">5 Questions</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
