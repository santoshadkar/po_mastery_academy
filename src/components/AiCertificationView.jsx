import React, { useState, useEffect } from 'react';
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Cpu, 
  Sparkles, 
  Layers, 
  Compass, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Users, 
  Building2, 
  Briefcase, 
  FileText, 
  HelpCircle, 
  Star, 
  Target, 
  TrendingUp, 
  RotateCcw, 
  AlertCircle,
  ExternalLink,
  GraduationCap,
  Copy,
  Check,
  Search
} from 'lucide-react';
import aiCertData from '../data/aiCertification';

export default function AiCertificationView({ onNavigateToAiPmHub }) {
  const [activeCertSubTab, setActiveCertSubTab] = useState('courses');
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [selectedElectiveIndex, setSelectedElectiveIndex] = useState(0);
  const [selectedFrameworkPersona, setSelectedFrameworkPersona] = useState('Business Product Manager');
  const [expandedModuleId, setExpandedModuleId] = useState('mod-1-1');
  const [expandedElectiveModuleId, setExpandedElectiveModuleId] = useState('ldr-1-1');
  const [expandedTopics, setExpandedTopics] = useState({ 'mod-1-1-0': true });
  const [copiedTemplateKey, setCopiedTemplateKey] = useState(null);
  const [courseSearchQuery, setCourseSearchQuery] = useState('');

  // Simulator State
  const [simActive, setSimActive] = useState(false);
  const [simAnswers, setSimAnswers] = useState({});
  const [simCurrentQ, setSimCurrentQ] = useState(0);
  const [simTimeRemaining, setSimTimeRemaining] = useState(45 * 60); // 45 minutes
  const [simSubmitted, setSimSubmitted] = useState(false);
  const [candidateName, setCandidateName] = useState('AI Product Leader');

  const handleCopyTemplate = (key, text) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedTemplateKey(key);
    setTimeout(() => {
      setCopiedTemplateKey(null);
    }, 2500);
  };

  const toggleTopic = (topicKey) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicKey]: !prev[topicKey]
    }));
  };

  const isEveryTopicExpanded = (modId, topics) => {
    if (!topics || topics.length === 0) return false;
    return topics.every((_, idx) => !!expandedTopics[`${modId}-${idx}`]);
  };

  const toggleAllTopicsInModule = (modId, topics) => {
    if (!topics || topics.length === 0) return;
    const allCurrentlyExpanded = isEveryTopicExpanded(modId, topics);
    setExpandedTopics(prev => {
      const next = { ...prev };
      topics.forEach((_, idx) => {
        next[`${modId}-${idx}`] = !allCurrentlyExpanded;
      });
      return next;
    });
  };

  const inlineFormat = (str) => {
    if (!str) return '';
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-slate-800">$1</em>')
      .replace(/`([^`]+)`/g, '<code class="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded text-xs font-mono font-semibold border border-indigo-100">$1</code>')
      .replace(/\$([^\$]+)\$/g, '<span class="font-mono text-indigo-800 bg-indigo-50/70 px-1 py-0.5 rounded font-semibold">$1</span>');
  };

  const renderFormattedText = (text) => {
    if (!text) return null;
    const blocks = text.split('\n\n');
    return blocks.map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith('```') || trimmed.startsWith('\\`\\`\\`')) {
        const clean = trimmed
          .replace(/^```[a-z]*\n?|^\\`\\`\\`[a-z]*\n?/, '')
          .replace(/```$|\\`\\`\\`$/, '')
          .trim();
        return (
          <pre key={idx} className="bg-slate-950 text-indigo-200 p-4 rounded-xl text-xs font-mono overflow-x-auto my-3 border border-indigo-900/60 leading-relaxed shadow-inner">
            <code>{clean}</code>
          </pre>
        );
      }

      const lines = trimmed.split('\n');
      if (lines.length > 1 && lines.every(l => l.trim().startsWith('- ') || l.trim().startsWith('* ') || /^\d+\.\s/.test(l.trim()))) {
        return (
          <ul key={idx} className="space-y-1.5 my-2.5 pl-4 list-disc text-slate-700 text-xs sm:text-sm">
            {lines.map((line, lIdx) => (
              <li 
                key={lIdx} 
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: inlineFormat(line.replace(/^[-*]\s+|\d+\.\s+/, '')) 
                }} 
              />
            ))}
          </ul>
        );
      }

      return (
        <p 
          key={idx} 
          className="text-xs sm:text-sm text-slate-700 leading-relaxed my-2" 
          dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed) }} 
        />
      );
    });
  };

  const { program, outcomes, competencyFramework, coreCourses, electives, toolsCovered, hiringCompanies, executiveCoaches, certificationSimulator } = aiCertData;

  // Simulator Timer
  useEffect(() => {
    let timer = null;
    if (simActive && !simSubmitted && simTimeRemaining > 0) {
      timer = setInterval(() => {
        setSimTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setSimSubmitted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [simActive, simSubmitted, simTimeRemaining]);

  const handleStartSim = () => {
    setSimActive(true);
    setSimSubmitted(false);
    setSimAnswers({});
    setSimCurrentQ(0);
    setSimTimeRemaining(certificationSimulator.durationMinutes * 60);
  };

  const handleSelectSimAnswer = (qId, optionIdx) => {
    if (simSubmitted) return;
    setSimAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateSimResult = () => {
    const questions = certificationSimulator.questions;
    let correctCount = 0;
    const domainBreakdown = {};

    questions.forEach(q => {
      const selected = simAnswers[q.id];
      const isCorrect = selected === q.answer;
      if (isCorrect) correctCount++;

      if (!domainBreakdown[q.domain]) {
        domainBreakdown[q.domain] = { total: 0, correct: 0 };
      }
      domainBreakdown[q.domain].total++;
      if (isCorrect) domainBreakdown[q.domain].correct++;
    });

    const total = questions.length;
    const percentage = Math.round((correctCount / total) * 100);
    const passed = percentage >= certificationSimulator.passingScore;

    return {
      total,
      correctCount,
      percentage,
      passed,
      domainBreakdown
    };
  };

  const simResult = calculateSimResult();

  const formatTimer = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Hero Banner: International Certificate in AI PM */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white p-8 md:p-12 shadow-2xl border border-indigo-700/50">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 -mb-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/40 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              {program.issuer}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
              Globally Recognized Certification
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            {program.title}
          </h1>

          <p className="text-lg md:text-xl font-medium text-indigo-200">
            {program.tagline}
          </p>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl">
            A comprehensive, project-based executive program for product managers to master 
            <strong> Prompt Engineering, Agent Workflows, Predictive ML, Model Evaluation, and Responsible AI Governance</strong>.
          </p>

          {/* Program Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
            <div>
              <span className="text-indigo-400 font-bold block text-sm">3 Months</span>
              <span className="text-slate-400">3 Core Courses + Electives</span>
            </div>
            <div>
              <span className="text-emerald-400 font-bold block text-sm">90+ Hours</span>
              <span className="text-slate-400">Projects & Live Cases</span>
            </div>
            <div>
              <span className="text-purple-400 font-bold block text-sm">1:1 Coaching</span>
              <span className="text-slate-400">Global Skill & Career Mentors</span>
            </div>
            <div>
              <span className="text-amber-400 font-bold block text-sm">4 Credentials</span>
              <span className="text-slate-400">3 Course + 1 Global Certificate</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => {
                setActiveCertSubTab('simulator');
                if (!simActive) handleStartSim();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 transition transform hover:-translate-y-0.5"
            >
              <Award className="w-4 h-4" />
              <span>Launch Official 25-Q Mock Exam</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button
              onClick={() => setActiveCertSubTab('courses')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition"
            >
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>Explore 3 Core Courses</span>
            </button>
          </div>
        </div>
      </div>

      {/* Market Urgency Callout */}
      <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900/40 border border-indigo-800/60 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Why AI Product Management Now?</span>
          <h3 className="text-lg font-bold text-slate-100 italic">
            "{program.marketUrgency.quote}"
          </h3>
          <p className="text-xs text-slate-400">
            Source: Microsoft and LinkedIn 2024 Work Trend Index
          </p>
        </div>

        <div className="flex items-center gap-6 shrink-0 text-center">
          <div className="bg-slate-900/80 border border-slate-700/60 px-5 py-3 rounded-xl">
            <span className="text-3xl font-black text-indigo-400 block">{program.marketUrgency.stat1.value}</span>
            <span className="text-[11px] text-slate-300 max-w-[140px] block leading-tight mt-1">{program.marketUrgency.stat1.label}</span>
          </div>
          <div className="bg-slate-900/80 border border-slate-700/60 px-5 py-3 rounded-xl">
            <span className="text-3xl font-black text-purple-400 block">{program.marketUrgency.stat2.value}</span>
            <span className="text-[11px] text-slate-300 max-w-[140px] block leading-tight mt-1">{program.marketUrgency.stat2.label}</span>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-200/80 flex flex-wrap gap-2 sticky top-2 z-20 backdrop-blur bg-white/95">
        {[
          { id: 'courses', label: '📚 3 Core Courses (Detailed Modules)', icon: BookOpen },
          { id: 'framework', label: '🎯 Adaptive Competency Framework™', icon: Target },
          { id: 'simulator', label: '🏆 Official 25-Q Certification Exam', icon: Award, highlight: true },
          { id: 'electives', label: '🌟 4 Elective Specializations', icon: Sparkles },
          { id: 'outcomes', label: '🚀 6 Outcomes & Target Audience', icon: Zap },
          { id: 'tools', label: '🛠️ Tools, Mentors & Career Impact', icon: Briefcase }
        ].map(tab => {
          const isActive = activeCertSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCertSubTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                isActive 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30' 
                  : tab.highlight
                    ? 'text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* SUB-TAB 1: 3 CORE COURSES (AIPM401F, AIPM402F, AIPM403F)                 */}
      {/* ========================================================================= */}
      {activeCertSubTab === 'courses' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Course Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {coreCourses.map((course, idx) => {
              const isSelected = selectedCourseIndex === idx;
              return (
                <button
                  key={course.code}
                  onClick={() => {
                    setSelectedCourseIndex(idx);
                    setExpandedModuleId(course.modules[0].id);
                  }}
                  className={`text-left p-5 rounded-2xl border-2 transition-all ${
                    isSelected
                      ? 'bg-indigo-50/70 border-indigo-600 shadow-md ring-1 ring-indigo-200'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className="uppercase text-indigo-700 bg-indigo-100/80 px-2.5 py-0.5 rounded-full">{course.code}</span>
                    <span className="text-slate-500">{course.month}</span>
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base mt-2">{course.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{course.tagline}</p>
                </button>
              );
            })}
          </div>

          {/* Active Course Detailed Breakdown */}
          {(() => {
            const course = coreCourses[selectedCourseIndex];
            return (
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-6">
                <div className="border-b border-slate-100 pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-md border border-indigo-100">
                      Course {selectedCourseIndex + 1} of 3 • {course.month}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{course.modules.length} Intensive Modules</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    {course.code}: {course.title}
                  </h2>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {course.overview}
                  </p>
                </div>

                {/* Search & Filter Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-indigo-600 shrink-0" />
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                        Complete Syllabus Modules & In-Depth Masterclasses
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        Full lecture notes, mathematical formulas, step-by-step playbooks & copyable templates
                      </p>
                    </div>
                  </div>

                  <div className="relative max-w-xs w-full">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={courseSearchQuery}
                      onChange={(e) => setCourseSearchQuery(e.target.value)}
                      placeholder="Search topics (e.g. RAG, Eval, MCP)..."
                      className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Modules Accordion / List */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    {course.modules
                      .filter(mod => {
                        if (!courseSearchQuery) return true;
                        const query = courseSearchQuery.toLowerCase();
                        const modMatch = mod.title.toLowerCase().includes(query) || (mod.overview && mod.overview.toLowerCase().includes(query));
                        const topicMatch = mod.detailedTopics && mod.detailedTopics.some(t => 
                          t.title.toLowerCase().includes(query) || 
                          (t.deepDive && t.deepDive.toLowerCase().includes(query)) ||
                          (t.enterpriseCaseStudy && t.enterpriseCaseStudy.toLowerCase().includes(query))
                        );
                        return modMatch || topicMatch;
                      })
                      .map((mod) => {
                        const isExpanded = expandedModuleId === mod.id;
                        const detailedTopics = mod.detailedTopics || [];

                        return (
                          <div 
                            key={mod.id}
                            className={`rounded-2xl border transition-all ${
                              isExpanded ? 'bg-slate-50/70 border-indigo-300 shadow-xs' : 'bg-white border-slate-200'
                            }`}
                          >
                            <button
                              onClick={() => setExpandedModuleId(isExpanded ? null : mod.id)}
                              className="w-full text-left p-5 flex items-center justify-between gap-4"
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm shadow-indigo-600/30">
                                  {mod.number}
                                </span>
                                <div>
                                  <h4 className="font-extrabold text-slate-900 text-base">{mod.title}</h4>
                                  <span className="text-xs text-indigo-700 font-semibold mt-0.5 inline-block">
                                    {detailedTopics.length} Comprehensive Masterclass Topics
                                  </span>
                                </div>
                              </div>
                              <div className="text-slate-400">
                                {isExpanded ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5" />}
                              </div>
                            </button>

                            {isExpanded && (
                              <div className="px-5 pb-6 pt-1 border-t border-slate-100 space-y-6">
                                {/* Module Overview */}
                                {mod.moduleOverview && (
                                  <div className="bg-white rounded-xl p-4 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
                                    <strong className="text-slate-900 block mb-1">Module Executive Summary:</strong>
                                    <span>{mod.moduleOverview}</span>
                                  </div>
                                )}

                                {/* Hands-on Exercise */}
                                {mod.practicalExercise && (
                                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-4 text-xs text-indigo-950 flex items-start gap-3 shadow-xs">
                                    <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                                      <Zap className="w-4 h-4 text-amber-300" />
                                    </div>
                                    <div>
                                      <strong className="block text-indigo-900 text-xs font-bold uppercase tracking-wider">
                                        Hands-on Capstone Lab Exercise:
                                      </strong>
                                      <span className="text-slate-700 mt-0.5 block leading-relaxed">{mod.practicalExercise}</span>
                                    </div>
                                  </div>
                                )}

                                {/* Detailed Masterclass Topics Header with Expand All Toggle */}
                                <div className="space-y-4 pt-2">
                                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                                    <div className="flex items-center gap-2">
                                      <Sparkles className="w-4 h-4 text-indigo-600" />
                                      <h5 className="text-xs font-black uppercase tracking-wider text-slate-900">
                                        Topic Masterclasses & Implementation Blueprints
                                      </h5>
                                    </div>
                                    <button
                                      onClick={() => toggleAllTopicsInModule(mod.id, detailedTopics)}
                                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-lg border border-indigo-200/80 transition"
                                    >
                                      {isEveryTopicExpanded(mod.id, detailedTopics) ? 'Collapse All Topics' : 'Expand All Topic Masterclasses'}
                                    </button>
                                  </div>

                                  {/* List of Detailed Topics */}
                                  <div className="space-y-3">
                                    {detailedTopics.map((topic, tIdx) => {
                                      const topicKey = `${mod.id}-${tIdx}`;
                                      const isTopicExpanded = !!expandedTopics[topicKey];

                                      return (
                                        <div 
                                          key={tIdx} 
                                          className={`rounded-xl border transition-all ${
                                            isTopicExpanded 
                                              ? 'bg-white border-indigo-300 shadow-md ring-1 ring-indigo-200' 
                                              : 'bg-white border-slate-200 hover:border-slate-300'
                                          }`}
                                        >
                                          {/* Topic Header Toggle */}
                                          <button
                                            onClick={() => toggleTopic(topicKey)}
                                            className="w-full text-left p-4 flex items-start justify-between gap-3"
                                          >
                                            <div className="flex items-start gap-3">
                                              <span className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-800 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                                                {mod.number}.{tIdx + 1}
                                              </span>
                                              <div>
                                                <h5 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                                                  {topic.title}
                                                </h5>
                                                {!isTopicExpanded && (
                                                  <span className="inline-block text-[11px] text-slate-500 mt-1 line-clamp-1">
                                                    Includes Lecture Notes, Formulas, Step-by-Step Playbook, Enterprise Case Study & Deliverable Template
                                                  </span>
                                                )}
                                              </div>
                                            </div>
                                            <div className="text-slate-400 mt-0.5 shrink-0">
                                              {isTopicExpanded ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5" />}
                                            </div>
                                          </button>

                                          {/* Topic Deep Dive Details */}
                                          {isTopicExpanded && (
                                            <div className="px-5 pb-6 pt-2 border-t border-slate-100 space-y-6 text-slate-800">
                                              {/* 1. Deep Concept / Lecture Notes */}
                                              <div className="space-y-2">
                                                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-900">
                                                  <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                                                  Conceptual Deep Dive & Lecture Notes
                                                </div>
                                                <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 text-slate-800">
                                                  {renderFormattedText(topic.deepDive)}
                                                </div>
                                              </div>

                                              {/* 2. Framework or Formula */}
                                              {topic.frameworkOrFormula && (
                                                <div className="space-y-2">
                                                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-900">
                                                    <Target className="w-3.5 h-3.5 text-purple-600" />
                                                    Framework, Mathematical Formula & Architecture
                                                  </div>
                                                  <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-indigo-200 p-4 sm:p-5 rounded-xl border border-indigo-900/60 font-mono text-xs overflow-x-auto shadow-inner">
                                                    {renderFormattedText(topic.frameworkOrFormula)}
                                                  </div>
                                                </div>
                                              )}

                                              {/* 3. Step-by-Step PM Implementation Playbook */}
                                              {topic.implementationPlaybook && topic.implementationPlaybook.length > 0 && (
                                                <div className="space-y-2">
                                                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                                    Tactical Step-by-Step PM Playbook
                                                  </div>
                                                  <div className="bg-emerald-50/60 rounded-xl p-4 sm:p-5 border border-emerald-200">
                                                    <ol className="space-y-3">
                                                      {topic.implementationPlaybook.map((step, sIdx) => (
                                                        <li key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                                                          <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                                                            {sIdx + 1}
                                                          </span>
                                                          <span className="leading-relaxed">{step}</span>
                                                        </li>
                                                      ))}
                                                    </ol>
                                                  </div>
                                                </div>
                                              )}

                                              {/* 4. Enterprise Case Study */}
                                              {topic.enterpriseCaseStudy && (
                                                <div className="space-y-2">
                                                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
                                                    <Building2 className="w-3.5 h-3.5 text-amber-600" />
                                                    Enterprise Case Study & Quantitative Results
                                                  </div>
                                                  <div className="bg-amber-50/70 rounded-xl p-4 sm:p-5 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed flex items-start gap-3.5">
                                                    <div className="w-8 h-8 rounded-lg bg-amber-200 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                                                      <Building2 className="w-4 h-4" />
                                                    </div>
                                                    <p>{topic.enterpriseCaseStudy}</p>
                                                  </div>
                                                </div>
                                              )}

                                              {/* 5. Enterprise Deliverable Template */}
                                              {topic.deliverableTemplate && (
                                                <div className="space-y-2">
                                                  <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-800">
                                                      <FileText className="w-3.5 h-3.5 text-slate-600" />
                                                      Production Deliverable Template
                                                    </div>
                                                    <button
                                                      onClick={() => handleCopyTemplate(topicKey, topic.deliverableTemplate)}
                                                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-200 transition shadow-xs"
                                                    >
                                                      {copiedTemplateKey === topicKey ? (
                                                        <>
                                                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                          <span className="text-emerald-700">Copied to Clipboard!</span>
                                                        </>
                                                      ) : (
                                                        <>
                                                          <Copy className="w-3.5 h-3.5 text-indigo-600" />
                                                          <span>Copy Template</span>
                                                        </>
                                                      )}
                                                    </button>
                                                  </div>
                                                  <pre className="bg-slate-900 text-slate-200 p-4 sm:p-5 rounded-xl text-xs font-mono overflow-x-auto border border-slate-800 whitespace-pre-wrap leading-relaxed shadow-inner">
                                                    <code>{topic.deliverableTemplate}</code>
                                                  </pre>
                                                </div>
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 2: ADAPTIVE COMPETENCY FRAMEWORK™ (VISUAL & INTERACTIVE)          */}
      {/* ========================================================================= */}
      {activeCertSubTab === 'framework' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-6">
            <div className="border-b border-slate-100 pb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2 border border-indigo-100">
                <Target className="w-3.5 h-3.5 text-indigo-600" />
                Proprietary Industry Standard
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {competencyFramework.name}
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-3xl">
                {competencyFramework.description}
              </p>
            </div>

            {/* 5 Core Practice Areas Banner */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                5 Core Practice Areas:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {competencyFramework.practiceAreas.map((pa, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl text-center">
                    <span className="text-xs font-extrabold text-slate-800 block">{pa}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Personas Interactive Cards */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                Select Persona to Inspect Competencies:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {competencyFramework.personaRings.map((pRing) => {
                  const isSelected = selectedFrameworkPersona === pRing.persona;
                  return (
                    <button
                      key={pRing.persona}
                      onClick={() => setSelectedFrameworkPersona(pRing.persona)}
                      className={`text-left p-5 rounded-2xl border-2 transition-all ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                          : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider block opacity-70">
                        {pRing.role}
                      </span>
                      <h4 className="font-extrabold text-base mt-1">{pRing.persona}</h4>
                      <span className="text-xs block mt-2 opacity-80">{pRing.competencies.length} Competencies</span>
                    </button>
                  );
                })}
              </div>

              {/* Display Selected Persona Competencies */}
              {(() => {
                const activePersona = competencyFramework.personaRings.find(p => p.persona === selectedFrameworkPersona) || competencyFramework.personaRings[0];
                return (
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                        <span>{activePersona.persona}</span>
                        <span className="text-xs font-normal text-slate-500">({activePersona.role})</span>
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activePersona.competencies.map((comp, cIdx) => (
                        <div key={cIdx} className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs space-y-1">
                          <h5 className="font-bold text-sm text-indigo-700">{comp.name}</h5>
                          <p className="text-xs text-slate-600 leading-relaxed">{comp.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* 3 AI Paradigms Ring */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                The 3 Underlying AI Paradigms:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {competencyFramework.aiPillars.map((pillar, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-indigo-50/60 to-purple-50/40 border border-indigo-100 p-4 rounded-xl space-y-1">
                    <span className="font-extrabold text-sm text-indigo-900 block">{pillar.name}</span>
                    <p className="text-xs text-slate-600 leading-snug">{pillar.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 3: OFFICIAL 25-Q CERTIFICATION SIMULATOR (INTERACTIVE & GRADED)   */}
      {/* ========================================================================= */}
      {activeCertSubTab === 'simulator' && (
        <div className="space-y-6 animate-fadeIn">
          {!simActive ? (
            /* Simulator Splash Screen */
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 text-center max-w-3xl mx-auto space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mx-auto shadow-sm">
                <Award className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  Official Replica Simulation
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {certificationSimulator.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                  Test your mastery across Generative AI (AIPM401F), Predictive ML (AIPM402F), Agent Workflows (AIPM403F), and Strategic Leadership electives.
                </p>
              </div>

              {/* Exam Parameters Grid */}
              <div className="grid grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 max-w-lg mx-auto text-xs">
                <div>
                  <span className="text-slate-400 block">Questions:</span>
                  <strong className="text-base text-slate-900">{certificationSimulator.totalQuestions}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Timebox:</span>
                  <strong className="text-base text-slate-900">{certificationSimulator.durationMinutes} min</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Passing Mark:</span>
                  <strong className="text-base text-emerald-600">{certificationSimulator.passingScore}%</strong>
                </div>
              </div>

              {/* Candidate Name Input */}
              <div className="max-w-xs mx-auto text-left space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Candidate Name for Certificate:</label>
                <input
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>

              <button
                onClick={handleStartSim}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-base shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5"
              >
                <Award className="w-5 h-5" />
                <span>Begin 25-Question Certification Exam</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ) : !simSubmitted ? (
            /* Active Exam In-Progress Screen */
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
              {/* Header with Timer and Progress */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                    Question {simCurrentQ + 1} of {certificationSimulator.questions.length}
                  </span>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Course: <strong className="text-slate-700">{certificationSimulator.questions[simCurrentQ].course}</strong> • Domain: <strong className="text-slate-700">{certificationSimulator.questions[simCurrentQ].domain}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-sm font-bold ${
                    simTimeRemaining < 300 ? 'bg-rose-50 text-rose-600 border border-rose-200' : 'bg-slate-100 text-slate-800'
                  }`}>
                    <Clock className="w-4 h-4" />
                    <span>{formatTimer(simTimeRemaining)}</span>
                  </div>
                  <button
                    onClick={() => setSimSubmitted(true)}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition"
                  >
                    Finish & Grade
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                  {certificationSimulator.questions[simCurrentQ].question}
                </h3>

                {/* Options List */}
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {certificationSimulator.questions[simCurrentQ].options.map((optionText, optIdx) => {
                    const isSelected = simAnswers[certificationSimulator.questions[simCurrentQ].id] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectSimAnswer(certificationSimulator.questions[simCurrentQ].id, optIdx)}
                        className={`text-left p-4 rounded-xl border text-xs sm:text-sm transition flex items-start gap-3 ${
                          isSelected
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                            : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 shrink-0 ${
                          isSelected ? 'bg-white text-indigo-600' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="leading-relaxed">{optionText}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  disabled={simCurrentQ === 0}
                  onClick={() => setSimCurrentQ(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40"
                >
                  Previous
                </button>

                {/* Question Grid Dots */}
                <div className="flex flex-wrap gap-1.5 max-w-md justify-center">
                  {certificationSimulator.questions.map((q, idx) => {
                    const isAnswered = simAnswers[q.id] !== undefined;
                    const isCurrent = simCurrentQ === idx;
                    return (
                      <button
                        key={q.id}
                        onClick={() => setSimCurrentQ(idx)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition ${
                          isCurrent
                            ? 'ring-2 ring-indigo-600 bg-indigo-50 text-indigo-800'
                            : isAnswered
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                <button
                  disabled={simCurrentQ === certificationSimulator.questions.length - 1}
                  onClick={() => setSimCurrentQ(prev => Math.min(certificationSimulator.questions.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            /* Simulator Results & Printable Certificate */
            <div className="space-y-6">
              {/* Score Summary Card */}
              <div className={`rounded-3xl p-6 sm:p-8 border-2 text-white shadow-xl ${
                simResult.passed 
                  ? 'bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-900 border-emerald-500' 
                  : 'bg-gradient-to-br from-rose-900 via-slate-900 to-slate-900 border-rose-500'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20">
                      {simResult.passed ? 'PASSED • OFFICIAL ACCREDITATION' : 'DID NOT PASS • RETAKE RECOMMENDED'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black mt-2">
                      {simResult.passed ? 'Congratulations, Certified AI Product Manager!' : 'Certification Score Benchmark'}
                    </h3>
                    <p className="text-sm opacity-90 mt-1 max-w-xl">
                      {simResult.passed 
                        ? `You have achieved ${simResult.percentage}% (Required: ${certificationSimulator.passingScore}%), demonstrating rigorous mastery across Generative, Predictive, and Agentic product workflows.`
                        : `You scored ${simResult.percentage}% (Passing threshold is ${certificationSimulator.passingScore}%). Review the domain diagnostic below and retake to earn your accreditation.`
                      }
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-2xl p-5 text-center shrink-0 border border-white/20">
                    <span className="text-xs uppercase font-bold opacity-80 block">Final Score</span>
                    <span className="text-4xl font-black block">{simResult.percentage}%</span>
                    <span className="text-xs opacity-90 block mt-1">{simResult.correctCount} / {simResult.total} Correct</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/20 flex flex-wrap gap-3">
                  <button
                    onClick={handleStartSim}
                    className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition shadow-sm flex items-center gap-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Exam</span>
                  </button>
                </div>
              </div>

              {/* Official Certificate Card (Rendered if Passed) */}
              {simResult.passed && (
                <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50/50 border-4 border-amber-300 rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-amber-200/40 rounded-full blur-2xl"></div>
                  
                  <div className="space-y-1">
                    <span className="text-xs font-black uppercase tracking-widest text-amber-700 block">
                      INSTITUTE OF PRODUCT LEADERSHIP
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-black text-slate-900">
                      INTERNATIONAL CERTIFICATE IN AI PRODUCT MANAGEMENT
                    </h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                      This is to certify that
                    </p>
                  </div>

                  <div className="py-2 border-b-2 border-slate-300 max-w-md mx-auto">
                    <span className="text-2xl sm:text-3xl font-black text-indigo-950 font-serif">
                      {candidateName}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                    has successfully demonstrated competencies across <strong>Generative AI (AIPM401F), Predictive ML (AIPM402F), and Agent-Driven Automation (AIPM403F)</strong> according to the Adaptive AI Product Management Competency Framework™.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 max-w-md mx-auto text-xs text-slate-500 border-t border-amber-200">
                    <div>
                      <span className="block font-bold text-slate-800">Date Issued</span>
                      <span>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-800">Score</span>
                      <span className="font-bold text-emerald-600">{simResult.percentage}% (Honors)</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="block font-bold text-slate-800">Certificate ID</span>
                      <span className="font-mono text-[10px]">IPL-AIPM-2026</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Detailed Question Review & Rationale */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
                <h3 className="text-lg font-black text-slate-900">
                  Comprehensive Question-by-Question Diagnostic & Rationales
                </h3>

                <div className="space-y-4">
                  {certificationSimulator.questions.map((q, idx) => {
                    const selected = simAnswers[q.id];
                    const isCorrect = selected === q.answer;
                    return (
                      <div 
                        key={q.id}
                        className={`p-5 rounded-2xl border ${
                          isCorrect ? 'bg-emerald-50/40 border-emerald-200' : 'bg-rose-50/40 border-rose-200'
                        } space-y-2 text-xs sm:text-sm`}
                      >
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                            Q{idx + 1}: {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                          </span>
                          <span className="text-slate-400">{q.course} • {q.domain}</span>
                        </div>

                        <p className="font-bold text-slate-900">{q.question}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                          <div className={`p-2.5 rounded-lg border ${
                            isCorrect ? 'bg-emerald-100/60 border-emerald-300 text-emerald-950 font-semibold' : 'bg-rose-100/60 border-rose-300 text-rose-950'
                          }`}>
                            <span className="block font-bold text-[10px] uppercase opacity-75">Your Answer:</span>
                            <span>{selected !== undefined ? q.options[selected] : 'Not Answered'}</span>
                          </div>

                          {!isCorrect && (
                            <div className="p-2.5 rounded-lg border bg-emerald-100/60 border-emerald-300 text-emerald-950 font-semibold">
                              <span className="block font-bold text-[10px] uppercase opacity-75">Correct Answer:</span>
                              <span>{q.options[q.answer]}</span>
                            </div>
                          )}
                        </div>

                        <div className="p-3 bg-white/80 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed mt-2">
                          <strong className="text-indigo-700 block mb-0.5">Syllabus Rationale:</strong>
                          <span>{q.explanation}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 4: 4 ELECTIVE COURSES (LDR401F, LDR402F, STG401F, DSN401F)        */}
      {/* ========================================================================= */}
      {activeCertSubTab === 'electives' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-6">
            <div className="border-b border-slate-100 pb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                Optional Micro-Certifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                4 Specialized Elective Courses
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Complement your AI PM technical core with high-impact communications, influence, digital strategy, and AI-powered product design.
              </p>
            </div>

            {/* Elective Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {electives.map((el, idx) => {
                const isSelected = selectedElectiveIndex === idx;
                return (
                  <button
                    key={el.code}
                    onClick={() => setSelectedElectiveIndex(idx)}
                    className={`text-left p-4 rounded-2xl border-2 transition-all ${
                      isSelected
                        ? 'bg-purple-50/70 border-purple-600 shadow-sm ring-1 ring-purple-200'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                      {el.code}
                    </span>
                    <h4 className="font-extrabold text-sm text-slate-900 mt-2">{el.title}</h4>
                    <span className="text-[11px] text-slate-500 block mt-1">{el.category}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Elective Details */}
            {(() => {
              const activeEl = electives[selectedElectiveIndex];
              return (
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6">
                  <div className="border-b border-slate-200/80 pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-md">
                        {activeEl.category}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{activeEl.modules.length} Specialized Modules</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">
                      {activeEl.code}: {activeEl.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {activeEl.overview}
                    </p>
                  </div>

                  {/* Modules Accordion with Topic Masterclasses */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-purple-600" />
                      Elective Modules & Detailed Masterclasses
                    </h4>

                    <div className="grid grid-cols-1 gap-4">
                      {activeEl.modules.map((m) => {
                        const isExpanded = expandedElectiveModuleId === m.id;
                        const detailedTopics = m.detailedTopics || [];

                        return (
                          <div 
                            key={m.id}
                            className={`rounded-2xl border transition-all ${
                              isExpanded ? 'bg-white border-purple-300 shadow-sm' : 'bg-white border-slate-200'
                            }`}
                          >
                            <button
                              onClick={() => setExpandedElectiveModuleId(isExpanded ? null : m.id)}
                              className="w-full text-left p-5 flex items-center justify-between gap-4"
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-purple-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                                  {m.number}
                                </span>
                                <div>
                                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{m.title}</h4>
                                  <span className="text-xs text-purple-700 font-semibold mt-0.5 inline-block">
                                    {detailedTopics.length} Detailed Masterclasses
                                  </span>
                                </div>
                              </div>
                              <div className="text-slate-400">
                                {isExpanded ? <ChevronUp className="w-5 h-5 text-purple-600" /> : <ChevronDown className="w-5 h-5" />}
                              </div>
                            </button>

                            {isExpanded && (
                              <div className="px-5 pb-6 pt-1 border-t border-slate-100 space-y-5">
                                {m.moduleOverview && (
                                  <div className="bg-purple-50/50 rounded-xl p-3.5 border border-purple-100 text-xs sm:text-sm text-purple-950 leading-relaxed">
                                    <strong>Module Focus: </strong>{m.moduleOverview}
                                  </div>
                                )}

                                {/* Header with Expand All Toggle */}
                                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                                  <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                                    Detailed Topic Masterclasses
                                  </span>
                                  <button
                                    onClick={() => toggleAllTopicsInModule(m.id, detailedTopics)}
                                    className="text-xs font-bold text-purple-600 hover:text-purple-800 bg-purple-50 hover:bg-purple-100 px-3 py-1 rounded-lg border border-purple-200 transition"
                                  >
                                    {isEveryTopicExpanded(m.id, detailedTopics) ? 'Collapse All Topics' : 'Expand All Topic Masterclasses'}
                                  </button>
                                </div>

                                {/* Detailed Topics List */}
                                <div className="space-y-3">
                                  {detailedTopics.map((topic, tIdx) => {
                                    const topicKey = `${m.id}-${tIdx}`;
                                    const isTopicExpanded = !!expandedTopics[topicKey];

                                    return (
                                      <div 
                                        key={tIdx}
                                        className={`rounded-xl border transition-all ${
                                          isTopicExpanded 
                                            ? 'bg-slate-50/70 border-purple-300 shadow-sm' 
                                            : 'bg-white border-slate-200 hover:border-slate-300'
                                        }`}
                                      >
                                        <button
                                          onClick={() => toggleTopic(topicKey)}
                                          className="w-full text-left p-4 flex items-start justify-between gap-3"
                                        >
                                          <div className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-md bg-purple-100 text-purple-800 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                                              {m.number}.{tIdx + 1}
                                            </span>
                                            <div>
                                              <h5 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                                                {topic.title}
                                              </h5>
                                              {!isTopicExpanded && (
                                                <span className="inline-block text-[11px] text-slate-500 mt-1 line-clamp-1">
                                                  Includes Conceptual Notes, Frameworks, Playbooks, Case Studies & Templates
                                                </span>
                                              )}
                                            </div>
                                          </div>
                                          <div className="text-slate-400 mt-0.5 shrink-0">
                                            {isTopicExpanded ? <ChevronUp className="w-5 h-5 text-purple-600" /> : <ChevronDown className="w-5 h-5" />}
                                          </div>
                                        </button>

                                        {isTopicExpanded && (
                                          <div className="px-5 pb-6 pt-2 border-t border-slate-100 space-y-5 text-slate-800">
                                            {/* 1. Deep Concept */}
                                            <div className="space-y-2">
                                              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-900">
                                                <BookOpen className="w-3.5 h-3.5 text-purple-600" />
                                                Conceptual Deep Dive
                                              </div>
                                              <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 text-slate-800">
                                                {renderFormattedText(topic.deepDive)}
                                              </div>
                                            </div>

                                            {/* 2. Framework or Formula */}
                                            {topic.frameworkOrFormula && (
                                              <div className="space-y-2">
                                                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900">
                                                  <Target className="w-3.5 h-3.5 text-indigo-600" />
                                                  Strategic Framework & Model
                                                </div>
                                                <div className="bg-slate-900 text-purple-200 p-4 sm:p-5 rounded-xl border border-purple-900/40 font-mono text-xs overflow-x-auto shadow-inner">
                                                  {renderFormattedText(topic.frameworkOrFormula)}
                                                </div>
                                              </div>
                                            )}

                                            {/* 3. Implementation Playbook */}
                                            {topic.implementationPlaybook && topic.implementationPlaybook.length > 0 && (
                                              <div className="space-y-2">
                                                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900">
                                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                                  Step-by-Step Leadership & Execution Playbook
                                                </div>
                                                <div className="bg-emerald-50/60 rounded-xl p-4 sm:p-5 border border-emerald-200">
                                                  <ol className="space-y-2.5">
                                                    {topic.implementationPlaybook.map((step, sIdx) => (
                                                      <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                                                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                                                          {sIdx + 1}
                                                        </span>
                                                        <span className="leading-relaxed">{step}</span>
                                                      </li>
                                                    ))}
                                                  </ol>
                                                </div>
                                              </div>
                                            )}

                                            {/* 4. Enterprise Case Study */}
                                            {topic.enterpriseCaseStudy && (
                                              <div className="space-y-2">
                                                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
                                                  <Building2 className="w-3.5 h-3.5 text-amber-600" />
                                                  Enterprise Case Study
                                                </div>
                                                <div className="bg-amber-50/70 rounded-xl p-4 sm:p-5 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed flex items-start gap-3">
                                                  <div className="w-8 h-8 rounded-lg bg-amber-200 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Building2 className="w-4 h-4" />
                                                  </div>
                                                  <p>{topic.enterpriseCaseStudy}</p>
                                                </div>
                                              </div>
                                            )}

                                            {/* 5. Deliverable Template */}
                                            {topic.deliverableTemplate && (
                                              <div className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-800">
                                                    <FileText className="w-3.5 h-3.5 text-slate-600" />
                                                    Executive Deliverable Template
                                                  </div>
                                                  <button
                                                    onClick={() => handleCopyTemplate(topicKey, topic.deliverableTemplate)}
                                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-lg border border-purple-200 transition"
                                                  >
                                                    {copiedTemplateKey === topicKey ? (
                                                      <>
                                                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                        <span className="text-emerald-700">Copied Template!</span>
                                                      </>
                                                    ) : (
                                                      <>
                                                        <Copy className="w-3.5 h-3.5 text-purple-600" />
                                                        <span>Copy Template</span>
                                                      </>
                                                    )}
                                                  </button>
                                                </div>
                                                <pre className="bg-slate-900 text-slate-200 p-4 sm:p-5 rounded-xl text-xs font-mono overflow-x-auto border border-slate-800 whitespace-pre-wrap leading-relaxed shadow-inner">
                                                  <code>{topic.deliverableTemplate}</code>
                                                </pre>
                                              </div>
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 5: 6 PROGRAM OUTCOMES & TARGET AUDIENCE                           */}
      {/* ========================================================================= */}
      {activeCertSubTab === 'outcomes' && (
        <div className="space-y-8 animate-fadeIn">
          {/* 6 Program Outcomes */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                Measurable Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                One Program & 6 Strategic Outcomes
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Every course module maps to six tangible leadership outcomes that distinguish elite AI Product Managers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {outcomes.map((o) => (
                <div key={o.number} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center">
                      {o.number}
                    </span>
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                      {o.title}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-sm pt-1">{o.summary}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{o.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-4">
            <h3 className="text-xl font-black text-slate-900">
              Who is this AI Product Management Certification for?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {program.targetAudience.map((aud, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-1">
                  <span className="font-extrabold text-sm text-slate-900 block text-indigo-700">{aud.role}</span>
                  <p className="text-xs text-slate-600 leading-relaxed">{aud.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 6: TOOLS, MENTORS & CAREER IMPACT                                */}
      {/* ========================================================================= */}
      {activeCertSubTab === 'tools' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Tools Covered Grid */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                Hands-On Stack
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">
                Production AI Tools & Protocols Covered
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Gain hands-on experience with modern foundation models, visual orchestration platforms, multi-agent frameworks, and MCP.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {toolsCovered.map((tool, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-sm transition space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-slate-900 text-sm">{tool.name}</h4>
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Coaches */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-6">
            <div>
              <h3 className="text-2xl font-black text-slate-900">
                Executive Faculty & Mentors
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Learn from practitioners who build and launch AI products at world-leading organizations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {executiveCoaches.map((coach, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center space-y-1">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center mx-auto mb-2">
                    {coach.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="font-bold text-xs text-slate-900 block leading-tight">{coach.name}</span>
                  <span className="text-[10px] text-slate-500 block leading-tight">{coach.role}</span>
                  <span className="text-[11px] font-semibold text-indigo-600 block">{coach.company}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring Partners */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Industry Trust</span>
              <h3 className="text-xl font-black text-white mt-1">
                Leading Companies Hiring AI Product Leaders
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {hiringCompanies.map((comp, idx) => (
                <span key={idx} className="bg-slate-800 text-slate-200 border border-slate-700 px-3.5 py-1.5 rounded-xl text-xs font-semibold">
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
