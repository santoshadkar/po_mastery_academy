import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Cpu, 
  Calculator, 
  Compass, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  HelpCircle, 
  BookOpen, 
  DollarSign, 
  Zap, 
  Database, 
  Award,
  RefreshCw,
  Sliders,
  ChevronDown,
  ChevronUp,
  Grid,
  Target,
  Check,
  AlertCircle,
  BarChart3,
  Filter,
  XCircle,
  FileText,
  ArrowUpRight
} from 'lucide-react';
import aiPmData from '../data/aiPm';

export default function AiProductManagerView({ onNavigateToChapter }) {
  const [activeSubTab, setActiveSubTab] = useState('feasibility'); // Default to Opportunity Feasibility Matrix so user sees it immediately!
  const [expandedStage, setExpandedStage] = useState('stage-1');
  const [allExpanded, setAllExpanded] = useState(false);
  const [selectedQuadrantFilter, setSelectedQuadrantFilter] = useState('all');
  const [selectedArchFilter, setSelectedArchFilter] = useState('all');

  // Calculator State
  const [dau, setDau] = useState(5000);
  const [queriesPerUser, setQueriesPerUser] = useState(8);
  const [inputTokens, setInputTokens] = useState(800);
  const [outputTokens, setOutputTokens] = useState(350);
  const [cacheHitRate, setCacheHitRate] = useState(25); // 25% cache hit
  const [subscriptionPrice, setSubscriptionPrice] = useState(30); // $30/user/month

  // Custom Initiative Evaluator State (Interactive Feasibility Matrix Sandbox)
  const [customInitName, setCustomInitName] = useState('My AI Customer Feature');
  const [feasDataReadiness, setFeasDataReadiness] = useState(80);
  const [feasErrorTolerance, setFeasErrorTolerance] = useState(70);
  const [feasModelMaturity, setFeasModelMaturity] = useState(85);
  const [feasLatencyBudget, setFeasLatencyBudget] = useState(75);

  const [valArrImpact, setValArrImpact] = useState(85);
  const [valHoursSaved, setValHoursSaved] = useState(75);
  const [valRetentionMoat, setValRetentionMoat] = useState(80);

  // Readiness Assessment State
  const [userAnswers, setUserAnswers] = useState({});
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);

  // Presets for Token Economics Calculator
  const applyCalculatorPreset = (preset) => {
    setDau(preset.dau);
    setQueriesPerUser(preset.queries);
    setInputTokens(preset.input);
    setOutputTokens(preset.output);
    setCacheHitRate(preset.cache);
    setSubscriptionPrice(preset.price);
  };

  const calculatorPresets = [
    {
      name: "Enterprise Support Co-Pilot",
      desc: "50k DAU, 12 queries/day, heavy RAG",
      dau: 50000,
      queries: 12,
      input: 1500,
      output: 450,
      cache: 35,
      price: 45
    },
    {
      name: "B2B Legal Contract Analyzer",
      desc: "2k DAU, 20 queries/day, massive context",
      dau: 2000,
      queries: 20,
      input: 4000,
      output: 800,
      cache: 15,
      price: 150
    },
    {
      name: "Developer Code Assistant",
      desc: "10k DAU, 30 queries/day, rapid suggestions",
      dau: 10000,
      queries: 30,
      input: 900,
      output: 250,
      cache: 40,
      price: 25
    },
    {
      name: "Inbound Lead Qualification Bot",
      desc: "100k DAU, 3 queries/day, lightweight JSON",
      dau: 100000,
      queries: 3,
      input: 500,
      output: 150,
      cache: 50,
      price: 15
    }
  ];

  // Calculate Token Economics
  const totalMonthlyQueries = dau * queriesPerUser * 30;
  const effectiveUncachedQueries = totalMonthlyQueries * (1 - cacheHitRate / 100);
  const effectiveCachedQueries = totalMonthlyQueries * (cacheHitRate / 100);

  const calculateModelCost = (model) => {
    const inputMillion = (effectiveUncachedQueries * inputTokens) / 1000000;
    const outputMillion = (effectiveUncachedQueries * outputTokens) / 1000000;
    const cachedInputMillion = (effectiveCachedQueries * inputTokens) / 1000000;

    const uncachedCost = (inputMillion * model.inputPerMillion) + (outputMillion * model.outputPerMillion);
    const cachedCost = (cachedInputMillion * model.cachedInputPerMillion);
    const totalCost = uncachedCost + cachedCost;
    const costPerUser = dau > 0 ? (totalCost / dau) : 0;
    const monthlyRevenue = dau * subscriptionPrice;
    const grossMargin = monthlyRevenue > 0 ? (((monthlyRevenue - totalCost) / monthlyRevenue) * 100) : 0;

    return {
      totalCost: Math.round(totalCost),
      costPerUser: costPerUser.toFixed(2),
      costPerQuery: totalMonthlyQueries > 0 ? ((totalCost / totalMonthlyQueries) * 100).toFixed(3) : 0,
      grossMargin: grossMargin.toFixed(1),
      isHealthyMargin: grossMargin >= 75
    };
  };

  // Calculate Custom Initiative Placement
  const customFeasibilityScore = Math.round((feasDataReadiness * 0.35) + (feasErrorTolerance * 0.25) + (feasModelMaturity * 0.25) + (feasLatencyBudget * 0.15));
  const customValueScore = Math.round((valArrImpact * 0.45) + (valHoursSaved * 0.30) + (valRetentionMoat * 0.25));

  const getCustomPlacement = () => {
    const isHighFeas = customFeasibilityScore >= 50;
    const isHighVal = customValueScore >= 50;

    if (isHighFeas && isHighVal) {
      return {
        quadrant: "Quick Wins (High Value, High Feasibility)",
        badge: "Highest Priority • Immediate Execution",
        color: "bg-emerald-500 text-white",
        bgLight: "bg-emerald-50 border-emerald-300 text-emerald-950",
        advice: "Greenlight for immediate sprint execution! High business ROI combined with proven technical feasibility gives this feature optimal risk-adjusted returns."
      };
    }
    if (!isHighFeas && isHighVal) {
      return {
        quadrant: "Strategic Bets (High Value, Low Feasibility)",
        badge: "Transformational R&D • Phased Slices",
        color: "bg-indigo-600 text-white",
        bgLight: "bg-indigo-50 border-indigo-300 text-indigo-950",
        advice: "High value justifies R&D, but technical uncertainty requires slicing into timeboxed proof-of-concept spikes with strict Human-in-the-Loop guardrails."
      };
    }
    if (isHighFeas && !isHighVal) {
      return {
        quadrant: "Low-Hanging Distractions (Low Value, High Feasibility)",
        badge: "Danger Trap • Deprioritize",
        color: "bg-amber-500 text-white",
        bgLight: "bg-amber-50 border-amber-300 text-amber-950",
        advice: "Caution: Easy to build with off-the-shelf APIs, but delivers minimal retention or commercial outcome. Avoid burning valuable engineering bandwidth on vanity features."
      };
    }
    return {
      quadrant: "Money Pits & AI Traps (Low Value, Low Feasibility)",
      badge: "Strictly Prohibited • High Risk",
      color: "bg-rose-600 text-white",
      bgLight: "bg-rose-50 border-rose-300 text-rose-950",
      advice: "Reject or redesign. High implementation friction paired with low customer utility creates an engineering money pit. Re-allocate resources to Quick Wins."
    };
  };

  const customPlacement = getCustomPlacement();

  // Handle Assessment Scoring
  const handleAnswerSelect = (qId, score) => {
    setUserAnswers(prev => ({ ...prev, [qId]: score }));
  };

  const calculateAssessmentScore = () => {
    const answeredCount = Object.keys(userAnswers).length;
    if (answeredCount === 0) return { score: 0, percentage: 0, level: 'Not Started', answeredCount: 0 };
    const totalScore = Object.values(userAnswers).reduce((acc, s) => acc + s, 0);
    const maxScore = aiPmData.readinessQuestions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);

    let level = 'AI Novice';
    let levelColor = 'text-amber-700 bg-amber-100 border-amber-300';
    let advice = 'Focus on Stage 1 & 2: Shift from deterministic logic to understanding probabilistic distributions, confusion matrices, and model evaluation metrics.';

    if (percentage >= 85) {
      level = 'Elite AI Product Leader';
      levelColor = 'text-emerald-700 bg-emerald-100 border-emerald-300';
      advice = 'Outstanding mastery! You have executive-level fluency across token unit economics, agentic architectures, automated CI/CD Evals, and EU AI Act compliance.';
    } else if (percentage >= 65) {
      level = 'Competent AI Product Manager';
      levelColor = 'text-blue-700 bg-blue-100 border-blue-300';
      advice = 'Solid foundational knowledge! Deepen your expertise in automated Evals pipelines, prompt caching economics, and multi-agent Human-in-the-Loop governance.';
    } else if (percentage >= 40) {
      level = 'Emerging AI Product Owner';
      levelColor = 'text-indigo-700 bg-indigo-100 border-indigo-300';
      advice = 'Good start. Transition from high-level GenAI concepts to practical RAG architecture, decision thresholds, and token unit economics.';
    }

    return { totalScore, maxScore, percentage, level, levelColor, advice, answeredCount };
  };

  const assessmentScore = calculateAssessmentScore();

  return (
    <div className="space-y-8 animate-fadeIn pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 md:p-12 shadow-2xl border border-indigo-800/40">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Executive Enablement Suite
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            AI Product Manager & AI PO Mastery Hub
          </h1>
          <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed mb-6">
            The definitive technical and strategic blueprint to transition from traditional deterministic backlog management to leading probabilistic machine learning, Foundation Models, RAG architectures, and Autonomous Agent systems.
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-2">
            <button
              onClick={() => onNavigateToChapter && onNavigateToChapter('ch-11')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
            >
              <BookOpen className="w-5 h-5" />
              Open Chapter 11 Masterclass (35-min Read)
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveSubTab('feasibility')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-indigo-700/60 font-semibold text-sm transition"
            >
              <Grid className="w-4 h-4 text-indigo-400" />
              Open Opportunity Feasibility Matrix
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-slate-800 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-indigo-400" />
              <span>16-Wk Transition Roadmap</span>
            </div>
            <div className="flex items-center gap-2">
              <Grid className="w-4 h-4 text-emerald-400" />
              <span>2x2 Feasibility Matrix</span>
            </div>
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-purple-400" />
              <span>Live Token Cost Calculator</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Senior AI PM Interview Prep</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-200/80 flex flex-wrap gap-2 sticky top-2 z-20 backdrop-blur bg-white/95">
        {[
          { id: 'feasibility', label: '📊 Opportunity Feasibility Matrix', icon: Grid, highlight: true },
          { id: 'roadmap', label: '🧭 16-Week Transition Roadmap', icon: Compass },
          { id: 'calculator', label: '💰 AI Token Cost & Margin Calculator', icon: Calculator },
          { id: 'architecture', label: '🏛️ Architecture Trade-Offs (7 Patterns)', icon: Layers },
          { id: 'assessment', label: '🛡️ AI PM Readiness Quiz (10 Qs)', icon: ShieldCheck },
          { id: 'interview', label: '🎯 Senior Interview Masterclass', icon: Sparkles }
        ].map(tab => {
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                isActive 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30' 
                  : tab.highlight
                    ? 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* SUB-TAB 1: OPPORTUNITY FEASIBILITY MATRIX (PROMINENT & INTERACTIVE)       */}
      {/* ========================================================================= */}
      {activeSubTab === 'feasibility' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Header Explanation */}
          <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-indigo-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-200 text-xs font-bold uppercase tracking-wider">
                  <Grid className="w-3.5 h-3.5" />
                  Executive Portfolio Prioritization
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  The AI Opportunity Feasibility & Impact Matrix (2x2 Grid)
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Never evaluate an AI initiative on "hype" alone. Seasoned AI Product Leaders plot every proposed AI feature on a 2x2 grid: 
                  <strong> Technical & Data Feasibility</strong> (X-axis) vs. <strong>Business Value & ROI Impact</strong> (Y-axis).
                </p>
              </div>

              {/* Portfolio Allocation Summary */}
              <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 text-xs space-y-2 shrink-0">
                <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px] block">Recommended Allocation:</span>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-emerald-400 font-semibold">Quick Wins</span>
                  <span className="font-bold text-white">70% Capacity</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-indigo-400 font-semibold">Strategic Bets</span>
                  <span className="font-bold text-white">20% Capacity</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-amber-400 font-semibold">Discovery Spikes</span>
                  <span className="font-bold text-white">10% Capacity</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-rose-400 font-semibold">Money Pits</span>
                  <span className="font-bold text-rose-300">0% (Veto)</span>
                </div>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-indigo-800/60 text-xs">
              <span className="text-slate-400 font-semibold">Filter Quadrant:</span>
              {[
                { id: 'all', label: 'Show All (12 Initiatives)' },
                { id: 'quick-wins', label: '🟢 Quick Wins' },
                { id: 'strategic-bets', label: '🟣 Strategic Bets' },
                { id: 'low-hanging-fruit', label: '🟡 Low-Hanging Distractions' },
                { id: 'money-pits', label: '🔴 Money Pits / Traps' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedQuadrantFilter(f.id)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition ${
                    selectedQuadrantFilter === f.id
                      ? 'bg-white text-indigo-950 shadow-sm'
                      : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2X2 VISUAL GRID CANVAS */}
          <div className="bg-slate-100 rounded-3xl p-6 sm:p-8 border border-slate-300 shadow-inner">
            {/* Axis Labels */}
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 px-2">
              <span className="flex items-center gap-1.5">
                <ArrowRight className="w-4 h-4 text-slate-400 -rotate-90" />
                <span>Y-Axis: Business Value & ROI Impact</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span>X-Axis: Technical & Data Feasibility</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiPmData.opportunityMatrix.quadrants
                .filter(q => selectedQuadrantFilter === 'all' || selectedQuadrantFilter === q.id)
                .map((quadrant) => (
                  <div
                    key={quadrant.id}
                    className={`rounded-2xl border-2 ${quadrant.color} p-5 sm:p-6 shadow-sm flex flex-col justify-between`}
                  >
                    <div>
                      {/* Quadrant Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${quadrant.headerColor}`}>
                          {quadrant.badge}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-600">
                          {quadrant.initiatives.length} Pre-plotted Initiatives
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black mb-2 text-slate-900">
                        {quadrant.name}
                      </h3>
                      <p className="text-xs text-slate-700 leading-relaxed mb-4 italic">
                        {quadrant.strategy}
                      </p>

                      {/* Initiative Cards within this Quadrant */}
                      <div className="space-y-3">
                        {quadrant.initiatives.map((init, idx) => (
                          <div 
                            key={idx}
                            className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition space-y-2"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="font-bold text-slate-900 text-sm">{init.name}</h4>
                              <div className="flex items-center gap-1 text-[11px] font-mono shrink-0">
                                <span className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-700 font-bold">F:{init.feasibilityScore}</span>
                                <span className="bg-slate-100 px-1.5 py-0.5 rounded text-emerald-700 font-bold">V:{init.valueScore}</span>
                              </div>
                            </div>

                            <div className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded inline-block">
                              Stack: {init.techStack}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                              <div>
                                <span className="font-bold text-slate-800 block text-[11px]">Expected ROI:</span>
                                <span>{init.roi}</span>
                              </div>
                              <div>
                                <span className="font-bold text-slate-800 block text-[11px]">Primary Risk:</span>
                                <span className="text-rose-600">{init.risk}</span>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-700 flex items-start gap-1.5 bg-slate-50 p-2 rounded-lg">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                              <span><strong>PO Recommendation:</strong> {init.recommendation}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* INTERACTIVE "EVALUATE YOUR INITIATIVE" SANDBOX */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Sliders className="w-6 h-6 text-indigo-600" />
                  Interactive Feasibility & Impact Sandbox
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Input your own proposed AI product idea and adjust the sliders to dynamically plot it into the 2x2 matrix!
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500">Feature Name:</span>
                <input
                  type="text"
                  value={customInitName}
                  onChange={(e) => setCustomInitName(e.target.value)}
                  className="px-3 py-1.5 text-sm font-bold text-slate-900 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feasibility Sliders */}
              <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                    <Database className="w-4 h-4 text-indigo-600" />
                    Feasibility Factors (0 - 100)
                  </h4>
                  <span className="text-sm font-extrabold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
                    Score: {customFeasibilityScore}/100
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between mb-1 font-semibold text-slate-700">
                      <span>1. Historical Labeled Data Availability</span>
                      <span className="font-bold text-indigo-600">{feasDataReadiness}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={feasDataReadiness}
                      onChange={(e) => setFeasDataReadiness(Number(e.target.value))}
                      className="w-full accent-indigo-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Unlabeled / messy</span>
                      <span>Verified ground truth</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 font-semibold text-slate-700">
                      <span>2. Tolerance for Model Errors / Hallucinations</span>
                      <span className="font-bold text-indigo-600">{feasErrorTolerance}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={feasErrorTolerance}
                      onChange={(e) => setFeasErrorTolerance(Number(e.target.value))}
                      className="w-full accent-indigo-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Zero tolerance (Legal/Med)</span>
                      <span>High tolerance (Creative/Drafts)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 font-semibold text-slate-700">
                      <span>3. Model Architecture Maturity & Tooling</span>
                      <span className="font-bold text-indigo-600">{feasModelMaturity}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={feasModelMaturity}
                      onChange={(e) => setFeasModelMaturity(Number(e.target.value))}
                      className="w-full accent-indigo-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Unsolved R&D</span>
                      <span>Standard RAG / SLM API</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 font-semibold text-slate-700">
                      <span>4. Latency Budget Flexibility</span>
                      <span className="font-bold text-indigo-600">{feasLatencyBudget}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={feasLatencyBudget}
                      onChange={(e) => setFeasLatencyBudget(Number(e.target.value))}
                      className="w-full accent-indigo-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Hard sub-10ms gate</span>
                      <span>Async batch / Streaming ok</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Value Sliders */}
              <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    Business Value & ROI Factors (0 - 100)
                  </h4>
                  <span className="text-sm font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Score: {customValueScore}/100
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between mb-1 font-semibold text-slate-700">
                      <span>1. Direct ARR / Revenue Expansion Potential</span>
                      <span className="font-bold text-emerald-600">{valArrImpact}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={valArrImpact}
                      onChange={(e) => setValArrImpact(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Marginal addon</span>
                      <span>Core revenue driver</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 font-semibold text-slate-700">
                      <span>2. Operational Hours Saved / Cost Reduction</span>
                      <span className="font-bold text-emerald-600">{valHoursSaved}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={valHoursSaved}
                      onChange={(e) => setValHoursSaved(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Saves 10m/week</span>
                      <span>Saves 15+ hrs/week per seat</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 font-semibold text-slate-700">
                      <span>3. Customer Retention & Competitive Moat</span>
                      <span className="font-bold text-emerald-600">{valRetentionMoat}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={valRetentionMoat}
                      onChange={(e) => setValRetentionMoat(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Easily copied</span>
                      <span>Defensible proprietary data moat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Result Card */}
            <div className={`rounded-2xl p-6 border-2 ${customPlacement.bgLight} transition-all`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md ${customPlacement.color}`}>
                  {customPlacement.badge}
                </span>
                <span className="text-xs font-mono font-bold">
                  Feasibility: {customFeasibilityScore}/100 • Value: {customValueScore}/100
                </span>
              </div>
              <h4 className="text-lg font-black text-slate-900 mt-2">
                Initiative "{customInitName}" Placed in: {customPlacement.quadrant}
              </h4>
              <p className="text-sm leading-relaxed mt-2 text-slate-800">
                {customPlacement.advice}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 2: 16-WEEK TRANSITION ROADMAP (DEEP DETAIL & EXPANDABLE)          */}
      {/* ========================================================================= */}
      {activeSubTab === 'roadmap' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Compass className="w-5 h-5 text-indigo-600" />
                From Scrum Product Owner to Senior AI PM: 16-Week Transition Blueprint
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A structured 6-stage progression complete with core mental models, mathematical formulas, enterprise toolkits, critical pitfalls, and real FAANG interview questions.
              </p>
            </div>
            <button
              onClick={() => {
                setAllExpanded(!allExpanded);
                setExpandedStage(allExpanded ? null : 'all');
              }}
              className="px-4 py-2 rounded-xl bg-white border border-indigo-200 text-indigo-700 font-bold text-xs hover:bg-indigo-50 transition shrink-0 shadow-sm"
            >
              {allExpanded ? 'Collapse All' : 'Expand All 6 Stages'}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {aiPmData.roadmapStages.map((stage) => {
              const isExpanded = allExpanded || expandedStage === stage.id || expandedStage === 'all';
              return (
                <div 
                  key={stage.id} 
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isExpanded ? 'bg-white border-indigo-300 shadow-md ring-1 ring-indigo-200' : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => {
                      if (allExpanded) setAllExpanded(false);
                      setExpandedStage(isExpanded ? null : stage.id);
                    }}
                    className="w-full text-left p-6 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-black text-lg flex items-center justify-center shadow-md">
                        {stage.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {stage.badge}
                          </span>
                          <span className="text-xs text-indigo-600 font-bold">{stage.timeframe}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{stage.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5 line-clamp-1">{stage.description}</p>
                      </div>
                    </div>
                    <div className="text-slate-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-6 text-slate-800">
                      <p className="text-slate-700 text-sm leading-relaxed">{stage.description}</p>

                      {/* Mathematical Formulas Card */}
                      {stage.mathematicalFormulas && (
                        <div className="bg-slate-900 text-slate-100 rounded-xl p-5 border border-slate-800 space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                            <BarChart3 className="w-4 h-4 text-purple-400" />
                            Essential Mathematical Formulas for Product Leaders
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                            {stage.mathematicalFormulas.map((formula, fIdx) => (
                              <div key={fIdx} className="bg-slate-800/80 rounded-lg p-3.5 border border-slate-700">
                                <span className="font-bold text-xs text-slate-200 block mb-1">{formula.name}</span>
                                <div className="font-mono text-xs text-indigo-300 bg-slate-950 p-2 rounded border border-slate-800 my-1 overflow-x-auto">
                                  {formula.formula}
                                </div>
                                <p className="text-[11px] text-slate-400 leading-tight mt-1">{formula.explanation}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Core Concepts */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                          <Zap className="w-4 h-4 text-amber-500" />
                          Core Conceptual Foundations & Mental Models
                        </h4>
                        <ul className="space-y-2">
                          {stage.keyConcepts.map((concept, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></span>
                              <span>{concept}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Enterprise Toolkits & Pitfalls Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Enterprise Toolkit */}
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
                            <Cpu className="w-4 h-4 text-indigo-600" />
                            Industry Production Toolkit
                          </h4>
                          <ul className="space-y-1.5">
                            {stage.enterpriseToolkit && stage.enterpriseToolkit.map((tool, idx) => (
                              <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-indigo-500"></span>
                                <span>{tool}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Critical Pitfalls to Avoid */}
                        <div className="bg-rose-50/60 rounded-xl p-4 border border-rose-200">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900 mb-2.5 flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4 text-rose-600" />
                            3 Critical Traps to Avoid
                          </h4>
                          <ul className="space-y-1.5">
                            {stage.commonPitfalls && stage.commonPitfalls.map((pitfall, idx) => (
                              <li key={idx} className="text-xs text-rose-800 flex items-start gap-2">
                                <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                                <span>{pitfall}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Items */}
                      <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                          Tactical Action Items for Sprints
                        </h4>
                        <ul className="space-y-1.5">
                          {stage.actionItems.map((item, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                              <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Sample User Story with Acceptance Criteria */}
                      <div className="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-xs border border-slate-800">
                        <div className="text-indigo-400 uppercase tracking-widest text-[10px] font-bold mb-2 flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5" />
                          Real-World AI User Story & Given/When/Then Criteria
                        </div>
                        <pre className="whitespace-pre-wrap font-sans text-xs text-slate-200 leading-relaxed">
                          {stage.sampleUserStory}
                        </pre>
                      </div>

                      {/* Interview Question Callout */}
                      {stage.interviewQuestion && (
                        <div className="bg-amber-50 rounded-xl p-3.5 border border-amber-200 flex items-start gap-2 text-xs text-amber-900">
                          <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold">FAANG Interview Question for this Stage: </span>
                            <span>"{stage.interviewQuestion}"</span>
                          </div>
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

      {/* ========================================================================= */}
      {/* SUB-TAB 3: TOKEN COST & GROSS MARGIN CALCULATOR                          */}
      {/* ========================================================================= */}
      {activeSubTab === 'calculator' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-indigo-600" />
                  Interactive AI Unit Economics & Gross Margin Calculator
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Model your feature's monthly inference costs, per-user economics, and SaaS Gross Margins across frontier vs small language models.
                </p>
              </div>

              {/* Live Run Rate Pill */}
              <div className="bg-indigo-50 border border-indigo-200 px-4 py-2.5 rounded-xl shrink-0 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 block">Total Monthly Inquiries</span>
                <span className="text-lg font-black text-indigo-900">{totalMonthlyQueries.toLocaleString()}</span>
              </div>
            </div>

            {/* Quick Enterprise Presets */}
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                Quick Enterprise Scenarios:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {calculatorPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => applyCalculatorPreset(preset)}
                    className="p-3 text-left rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/50 transition bg-white shadow-xs group"
                  >
                    <span className="font-bold text-xs text-slate-900 group-hover:text-indigo-600 block">{preset.name}</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{preset.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Sliders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {/* DAU */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Daily Active Users (DAU)</span>
                  <span className="text-sm font-extrabold text-indigo-600">{dau.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={dau}
                  onChange={(e) => setDau(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="text-[10px] text-slate-400">Scale from 500 to 100k users</div>
              </div>

              {/* Queries Per User */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Queries / User / Day</span>
                  <span className="text-sm font-extrabold text-indigo-600">{queriesPerUser}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={queriesPerUser}
                  onChange={(e) => setQueriesPerUser(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="text-[10px] text-slate-400">Average interactions per day</div>
              </div>

              {/* Semantic Cache Hit Rate */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Semantic Vector Cache Hit Rate</span>
                  <span className="text-sm font-extrabold text-emerald-600">{cacheHitRate}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  step="5"
                  value={cacheHitRate}
                  onChange={(e) => setCacheHitRate(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="text-[10px] text-slate-400">Repeated queries resolved at $0 compute</div>
              </div>

              {/* Input Tokens */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Input Tokens / Query</span>
                  <span className="text-sm font-extrabold text-indigo-600">{inputTokens}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="6000"
                  step="100"
                  value={inputTokens}
                  onChange={(e) => setInputTokens(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="text-[10px] text-slate-400">System prompt + RAG chunks + user query</div>
              </div>

              {/* Output Tokens */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Output Tokens / Query</span>
                  <span className="text-sm font-extrabold text-indigo-600">{outputTokens}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={outputTokens}
                  onChange={(e) => setOutputTokens(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="text-[10px] text-slate-400">Generated answer size (~4 chars/token)</div>
              </div>

              {/* Subscription Price per User */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>SaaS Price / User / Month</span>
                  <span className="text-sm font-extrabold text-purple-600">${subscriptionPrice}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={subscriptionPrice}
                  onChange={(e) => setSubscriptionPrice(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
                <div className="text-[10px] text-slate-400">Used to benchmark SaaS Gross Margin %</div>
              </div>
            </div>

            {/* Model Comparison Cards */}
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
              Monthly Inference Cost & Gross Margin Breakdown Across Models
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiPmData.modelPricingBenchmarks.map(model => {
                const costs = calculateModelCost(model);
                const isSmallModel = model.id === 'gpt-4o-mini';
                return (
                  <div
                    key={model.id}
                    className={`rounded-2xl p-5 border transition-all ${
                      isSmallModel 
                        ? 'bg-emerald-50/50 border-emerald-300 ring-1 ring-emerald-200 shadow-sm' 
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{model.provider}</span>
                        <h4 className="font-bold text-slate-900 text-base">{model.name}</h4>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {model.tier}
                      </span>
                    </div>

                    <div className="my-3 py-3 border-y border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Monthly Cloud Bill</span>
                        <span className="text-xl font-black text-slate-900">${costs.totalCost.toLocaleString()}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Feature Margin</span>
                        <span className={`text-sm font-extrabold ${costs.isHealthyMargin ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {costs.grossMargin}%
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 mb-3">
                      <div>
                        <span className="text-slate-400 block">Cost / User:</span>
                        <strong className="text-slate-800">${costs.costPerUser}/mo</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Cost / Query:</span>
                        <strong className="text-slate-800">{costs.costPerQuery}¢</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Latency (P50):</span>
                        <span className="text-slate-700 font-mono font-semibold">{model.latencyP50}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Context:</span>
                        <span className="text-slate-700 font-mono font-semibold">{model.contextWindow}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 line-clamp-2">
                      <strong>Best For:</strong> {model.bestFor}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Strategic PO Takeaway */}
            <div className="mt-8 bg-amber-50/80 border border-amber-200 rounded-xl p-5 text-amber-900 text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-bold mb-1">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Senior AI PM Unit Economics Rule of Thumb:
              </div>
              <p className="text-xs leading-relaxed text-amber-800">
                Notice the dramatic <strong>16x price disparity</strong> between <strong>OpenAI GPT-4o ($2.50/M)</strong> and <strong>GPT-4o-mini ($0.15/M)</strong>. An experienced AI PM never sends 100% of user queries to a frontier model. By implementing an intelligent router that delegates 80% of lightweight tasks to small models and reserves frontier models for complex edge cases, you maintain a <strong>75%+ SaaS gross margin</strong> and avoid the negative margin trap!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 4: ARCHITECTURE TRADE-OFFS (7 PATTERNS)                           */}
      {/* ========================================================================= */}
      {activeSubTab === 'architecture' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-indigo-600" />
                  The AI Architecture Trade-Off Explorer (7 Enterprise Patterns)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Detailed side-by-side comparison across setup time, implementation budget, data requirements, hallucination risk, and maintenance overhead.
                </p>
              </div>

              {/* Filter */}
              <div className="flex items-center gap-2 text-xs">
                <Filter className="w-4 h-4 text-slate-400" />
                <select
                  value={selectedArchFilter}
                  onChange={(e) => setSelectedArchFilter(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-semibold text-slate-700"
                >
                  <option value="all">All 7 Architectures</option>
                  <option value="rag">RAG / Knowledge Search</option>
                  <option value="agent">Autonomous Agents</option>
                  <option value="cache">Caching & Cascading</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50/70">
                    <th className="py-3 px-4">Architecture Strategy</th>
                    <th className="py-3 px-4">Setup Time</th>
                    <th className="py-3 px-4">Estimated Cost</th>
                    <th className="py-3 px-4">Data Requirement</th>
                    <th className="py-3 px-4">Hallucination Risk</th>
                    <th className="py-3 px-4">Engineering Complexity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {aiPmData.architectureTradeoffs.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900">
                        <div className="text-sm font-bold text-slate-900">{item.dimension}</div>
                        <div className="text-[11px] font-normal text-slate-500 mt-1">
                          <strong className="text-indigo-600">Best for:</strong> {item.bestUseCases}
                        </div>
                      </td>
                      <td className="py-4 px-4 font-medium text-xs">{item.setupTime}</td>
                      <td className="py-4 px-4 font-semibold text-xs text-slate-900">{item.cost}</td>
                      <td className="py-4 px-4 text-xs">{item.dataRequirement}</td>
                      <td className="py-4 px-4 text-xs">
                        <span className={`px-2 py-0.5 rounded font-semibold text-[11px] ${
                          item.hallucinationRisk.includes('Zero') || item.hallucinationRisk.includes('Very Low')
                            ? 'bg-emerald-100 text-emerald-800'
                            : item.hallucinationRisk.includes('High')
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.hallucinationRisk}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-xs font-medium">{item.engineeringComplexity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 5: 10-QUESTION AI PM READINESS QUIZ                               */}
      {/* ========================================================================= */}
      {activeSubTab === 'assessment' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-indigo-600" />
                  10-Question AI Product Manager Readiness Diagnostic
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Assess your technical and strategic readiness across problem formulation, probabilistic error tolerance, unit economics, and EU AI Act governance.
                </p>
              </div>

              {/* Real-time score pill */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="bg-slate-100 px-4 py-2 rounded-xl text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Progress</span>
                  <span className="text-base font-extrabold text-slate-800">
                    {Object.keys(userAnswers).length} / {aiPmData.readinessQuestions.length} Answered
                  </span>
                </div>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {aiPmData.readinessQuestions.map((q, qIdx) => (
                <div key={q.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                      {q.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400">Question {qIdx + 1} of 10</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {q.question}
                  </h3>

                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = userAnswers[q.id] === opt.score;
                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleAnswerSelect(q.id, opt.score)}
                          className={`text-left p-3 rounded-xl border text-xs transition flex items-start gap-3 ${
                            isSelected
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0 ${
                            isSelected ? 'bg-white text-indigo-600' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span className="leading-relaxed">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Score & Evaluation Result */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">Your Diagnostic Assessment Result:</span>
                    <h3 className="text-2xl font-black text-white">{assessmentScore.level}</h3>
                  </div>
                  <div className="bg-white/10 px-6 py-3 rounded-xl text-center shrink-0">
                    <span className="text-xs font-bold text-slate-300 block">Overall Score</span>
                    <span className="text-3xl font-black text-white">{assessmentScore.percentage}%</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
                  <strong>Assessment Recommendation:</strong> {assessmentScore.advice}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 6: SENIOR AI PM INTERVIEW MASTERCLASS                             */}
      {/* ========================================================================= */}
      {activeSubTab === 'interview' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80">
            <div className="mb-6 pb-6 border-b border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-indigo-600" />
                Senior AI PM & Director Interview Masterclass (6 Executive Challenges)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Deconstruct real executive interview questions. Learn why 80% of candidates fail with "vibes-based" answers, and study Director-level model responses.
              </p>
            </div>

            <div className="space-y-8">
              {aiPmData.interviewMasterclass.map((item, idx) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="bg-slate-900 text-white p-5 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">
                      "{item.question}"
                    </h3>
                  </div>

                  <div className="p-6 space-y-5 bg-white">
                    {/* The Candidate Trap Answer */}
                    <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-800">
                        <XCircle className="w-4 h-4 text-rose-600" />
                        Common Candidate Trap Answer (Why 80% Fail):
                      </div>
                      <p className="text-xs text-rose-950 italic">"{item.trapAnswer}"</p>
                      <div className="text-[11px] text-rose-700 bg-white/70 p-2 rounded-lg border border-rose-200">
                        <strong>Critique:</strong> {item.trapCritique}
                      </div>
                    </div>

                    {/* The Model Director-Level Answer */}
                    <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Elite Director-Level Response:
                      </div>
                      <pre className="whitespace-pre-wrap font-sans text-xs text-slate-800 leading-relaxed">
                        {item.modelAnswer}
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
