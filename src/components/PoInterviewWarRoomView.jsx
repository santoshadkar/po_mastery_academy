import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  HelpCircle, 
  Award, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  AlertTriangle, 
  CheckCircle2, 
  Copy, 
  Check,
  Target
} from 'lucide-react';
import poGrowthData from '../data/poGrowthFeatures';

export default function PoInterviewWarRoomView() {
  const { interviewWarRoom } = poGrowthData;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestionId, setExpandedQuestionId] = useState('iwq-1');
  const [copiedKey, setCopiedKey] = useState(null);

  const filteredQuestions = interviewWarRoom.questions.filter(q => {
    const matchesCat = selectedCategory === 'all' || q.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.companyTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.whatInterviewerLooksFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCopyStar = (id, answer) => {
    const text = `STAR Interview Answer:\n\n[SITUATION]\n${answer.situation}\n\n[TASK]\n${answer.task}\n\n[ACTION]\n${answer.action}\n\n[RESULT]\n${answer.result}`;
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 p-8 text-white shadow-xl border border-emerald-800/40">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Acceleration & Job Landings</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            {interviewWarRoom.title}
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            {interviewWarRoom.subtitle}
          </p>
        </div>
      </div>

      {/* Category Filter & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5">
          {interviewWarRoom.categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or company..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Question Accordion List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <p className="text-slate-500 text-sm">No interview questions match your filter.</p>
          </div>
        ) : (
          filteredQuestions.map((q, idx) => {
            const isExpanded = expandedQuestionId === q.id;
            return (
              <div 
                key={q.id}
                className={`rounded-2xl border transition-all ${
                  isExpanded ? 'bg-white border-emerald-400 shadow-md ring-1 ring-emerald-200' : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                  className="w-full text-left p-5 flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      Q{idx + 1}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                          <Building2 className="w-3 h-3 text-slate-400" />
                          {q.companyTag}
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          q.difficulty === 'Hard' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {q.difficulty}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                        {q.question}
                      </h3>
                    </div>
                  </div>
                  <div className="text-slate-400 shrink-0 mt-1">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-emerald-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Details Screen */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-1 border-t border-slate-100 space-y-5 text-xs sm:text-sm">
                    {/* Interviewer Expectations & Red Flags Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 text-emerald-950 space-y-1">
                        <strong className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                          <Target className="w-3.5 h-3.5" />
                          What the Interviewer is Evaluating:
                        </strong>
                        <p className="leading-relaxed">{q.whatInterviewerLooksFor}</p>
                      </div>

                      <div className="bg-rose-50/70 p-4 rounded-xl border border-rose-200 text-rose-950 space-y-1">
                        <strong className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-800">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          Common Red Flags to Avoid:
                        </strong>
                        <p className="leading-relaxed">{q.redFlags}</p>
                      </div>
                    </div>

                    {/* STAR Framework Answer Blueprint */}
                    <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          Model Answer (STAR Framework: Situation, Task, Action, Result)
                        </span>
                        <button
                          onClick={() => handleCopyStar(q.id, q.modelStarAnswer)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition"
                        >
                          {copiedKey === q.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedKey === q.id ? 'Copied STAR!' : 'Copy Answer'}</span>
                        </button>
                      </div>

                      <div className="space-y-3 font-sans text-xs sm:text-sm">
                        <div className="border-l-2 border-emerald-500 pl-3">
                          <strong className="text-emerald-400 block text-xs uppercase tracking-wider mb-0.5">Situation</strong>
                          <p className="text-slate-300 leading-relaxed">{q.modelStarAnswer.situation}</p>
                        </div>
                        <div className="border-l-2 border-blue-500 pl-3">
                          <strong className="text-blue-400 block text-xs uppercase tracking-wider mb-0.5">Task</strong>
                          <p className="text-slate-300 leading-relaxed">{q.modelStarAnswer.task}</p>
                        </div>
                        <div className="border-l-2 border-purple-500 pl-3">
                          <strong className="text-purple-400 block text-xs uppercase tracking-wider mb-0.5">Action</strong>
                          <p className="text-slate-300 leading-relaxed">{q.modelStarAnswer.action}</p>
                        </div>
                        <div className="border-l-2 border-amber-400 pl-3">
                          <strong className="text-amber-400 block text-xs uppercase tracking-wider mb-0.5">Result (Quantified Outcome)</strong>
                          <p className="text-slate-200 leading-relaxed">{q.modelStarAnswer.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
