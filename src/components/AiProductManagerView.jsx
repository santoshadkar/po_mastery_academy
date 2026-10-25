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
  ChevronUp
} from 'lucide-react';
import aiPmData from '../data/aiPm';

export default function AiProductManagerView({ onNavigateToChapter }) {
  const [activeSubTab, setActiveSubTab] = useState('roadmap');
  const [expandedStage, setExpandedStage] = useState('stage-1');
  const [expandedFaq, setExpandedFaq] = useState(0);

  // Calculator State
  const [dau, setDau] = useState(5000);
  const [queriesPerUser, setQueriesPerUser] = useState(8);
  const [inputTokens, setInputTokens] = useState(800);
  const [outputTokens, setOutputTokens] = useState(350);
  const [cacheHitRate, setCacheHitRate] = useState(25); // 25% cache hit

  // Feasibility Evaluator State
  const [feasProblemType, setFeasProblemType] = useState('knowledge');
  const [feasDataQuality, setFeasDataQuality] = useState('high');
  const [feasErrorTolerance, setFeasErrorTolerance] = useState('moderate');
  const [feasLatency, setFeasLatency] = useState('streaming');

  // Readiness Assessment State
  const [userAnswers, setUserAnswers] = useState({});
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);

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

    return {
      totalCost: Math.round(totalCost),
      costPerUser: costPerUser.toFixed(2),
      costPerQuery: totalMonthlyQueries > 0 ? ((totalCost / totalMonthlyQueries) * 100).toFixed(3) : 0
    };
  };

  // Evaluate Feasibility Recommendation
  const getFeasibilityRecommendation = () => {
    if (feasProblemType === 'deterministic') {
      return {
        title: "Deterministic Rule Engine / SQL Business Logic",
        badge: "Rule Engine (No AI Needed)",
        color: "bg-emerald-50 border-emerald-200 text-emerald-800",
        summary: "Do NOT use AI here! Your problem has fixed logic and low tolerance for error. A deterministic SQL view, regex, or Python rule engine will execute in <5ms, cost $0 in inference, and guarantee 100% predictable accuracy.",
        stack: "PostgreSQL / Redis / Node.js Heuristics"
      };
    }
    if (feasProblemType === 'predictive') {
      return {
        title: "Classical Predictive Machine Learning (Supervised)",
        badge: "Classical ML (XGBoost / LightGBM)",
        color: "bg-blue-50 border-blue-200 text-blue-800",
        summary: "Use tabular predictive modeling. Train an XGBoost or Random Forest classifier on historical feature data. Focus your PO efforts on the Confusion Matrix, calibrating decision threshold T to optimize Precision vs Recall.",
        stack: "Scikit-Learn / XGBoost / MLflow / Feast Feature Store"
      };
    }
    if (feasProblemType === 'knowledge') {
      return {
        title: "Production Retrieval-Augmented Generation (RAG)",
        badge: "Production RAG Pipeline",
        color: "bg-purple-50 border-purple-200 text-purple-800",
        summary: "Deploy an enterprise RAG pipeline. Index your proprietary documents in a vector database, perform semantic search, and ground an LLM with exact source citations. Do NOT fine-tune for dynamic facts.",
        stack: "Pinecone / pgvector + LangChain / LlamaIndex + Claude 3.5 Sonnet / GPT-4o"
      };
    }
    if (feasProblemType === 'agentic') {
      return {
        title: "Autonomous Agent with Tool Execution & HITL Guardrails",
        badge: "Agentic AI with Human-in-the-Loop",
        color: "bg-amber-50 border-amber-200 text-amber-800",
        summary: "Implement a ReAct agentic workflow. Connect the LLM to external REST APIs via strict JSON function schemas. Implement Tier 3 Human-in-the-Loop approval cards for any irreversible or financial actions.",
        stack: "LangGraph / CrewAI + OpenAI Function Calling + Llama Guard Safety"
      };
    }
    return {
      title: "Model Cascading Architecture (SLM + Frontier LLM)",
      badge: "Hybrid Cascading System",
      color: "bg-indigo-50 border-indigo-200 text-indigo-800",
      summary: "Route 80% of lightweight classification/extraction queries to a cheap Small Language Model (GPT-4o-mini), reserving the frontier model for complex edge cases.",
      stack: "Intelligent Semantic Router + Small Model + Frontier Fallback"
    };
  };

  const feasibilityResult = getFeasibilityRecommendation();

  // Handle Assessment Scoring
  const handleAnswerSelect = (qId, score) => {
    setUserAnswers(prev => ({ ...prev, [qId]: score }));
  };

  const calculateAssessmentScore = () => {
    const answeredCount = Object.keys(userAnswers).length;
    if (answeredCount === 0) return { score: 0, percentage: 0, level: 'Not Started' };
    const totalScore = Object.values(userAnswers).reduce((acc, s) => acc + s, 0);
    const maxScore = aiPmData.readinessQuestions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);

    let level = 'AI Novice';
    let levelColor = 'text-amber-600 bg-amber-50 border-amber-200';
    let advice = 'Focus on Stage 1 & 2: Shift from deterministic logic to understanding probabilistic distributions and ML evaluation metrics.';

    if (percentage >= 85) {
      level = 'Elite AI Product Leader';
      levelColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
      advice = 'Outstanding mastery! You have executive-level fluency across token economics, agentic architectures, automated Evals, and governance.';
    } else if (percentage >= 65) {
      level = 'Competent AI Product Manager';
      levelColor = 'text-blue-600 bg-blue-50 border-blue-200';
      advice = 'Solid foundational knowledge! Deepen your expertise in automated Evals pipelines, prompt caching economics, and multi-agent governance.';
    } else if (percentage >= 40) {
      level = 'Emerging AI Product Owner';
      levelColor = 'text-indigo-600 bg-indigo-50 border-indigo-200';
      advice = 'Good start. Transition from high-level GenAI concepts to practical RAG architecture, decision thresholds, and token unit economics.';
    }

    return { totalScore, maxScore, percentage, level, levelColor, advice };
  };

  const assessmentScore = calculateAssessmentScore();

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Top Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 md:p-12 shadow-2xl border border-indigo-800/40">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Executive Specialization Track
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            The AI Product Manager & AI Product Owner Mastery Hub
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-6">
            The definitive blueprint to transition from traditional deterministic backlog management to leading probabilistic machine learning, Foundation Models, RAG architectures, and Autonomous Agent systems.
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-2">
            <button
              onClick={() => onNavigateToChapter && onNavigateToChapter('ch-11')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
            >
              <BookOpen className="w-5 h-5" />
              Open Curriculum Chapter 11
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-4 text-xs md:text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 6 Transition Stages
              </span>
              <span className="flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-purple-400" /> Live Token Cost Calculator
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" /> Senior Interview Masterclass
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-200/80 flex flex-wrap gap-2">
        {[
          { id: 'roadmap', label: 'Transition Roadmap', icon: Compass },
          { id: 'calculator', label: 'AI Token Cost Calculator', icon: Calculator },
          { id: 'feasibility', label: 'Opportunity Feasibility Matrix', icon: Sliders },
          { id: 'architecture', label: 'Architecture Explorer', icon: Layers },
          { id: 'assessment', label: 'AI PM Readiness Quiz', icon: ShieldCheck },
          { id: 'interview', label: 'Interview Masterclass', icon: Sparkles }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                isActive 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* TAB 1: TRANSITION ROADMAP */}
      {activeSubTab === 'roadmap' && (
        <div className="space-y-6">
          <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Compass className="w-5 h-5 text-indigo-600" />
              From Traditional PO to Senior AI Product Leader: 6-Stage Roadmap
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Click into each stage to uncover foundational mental models, high-impact tactical actions, technical toolkits, and sample user stories designed for AI teams.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {aiPmData.roadmapStages.map((stage) => {
              const isExpanded = expandedStage === stage.id;
              return (
                <div 
                  key={stage.id} 
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isExpanded ? 'bg-white border-indigo-300 shadow-md ring-1 ring-indigo-200' : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setExpandedStage(isExpanded ? null : stage.id)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 font-black text-lg flex items-center justify-center">
                        {stage.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {stage.badge}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">{stage.timeframe}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{stage.title}</h3>
                        <p className="text-sm text-slate-500 mt-0.5 line-clamp-1">{stage.description}</p>
                      </div>
                    </div>
                    <div className="text-slate-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-6">
                      <p className="text-slate-700 text-sm leading-relaxed">{stage.description}</p>

                      {/* Key Concepts */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                          <Zap className="w-4 h-4 text-amber-500" />
                          Core Conceptual Foundations & Mental Models
                        </h4>
                        <ul className="space-y-2">
                          {stage.keyConcepts.map((concept, idx) => (
                            <li key={idx} className="text-sm text-slate-700 flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></span>
                              <span>{concept}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Items */}
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          Tactical Action Items for Product Owners & Managers
                        </h4>
                        <ul className="space-y-1.5">
                          {stage.actionItems.map((item, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                              <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Sample User Story */}
                      <div className="bg-indigo-950 text-indigo-100 rounded-xl p-4 font-mono text-xs border border-indigo-900">
                        <div className="text-indigo-400 uppercase tracking-widest text-[10px] font-bold mb-2">
                          Sample AI Acceptance Criteria / User Story
                        </div>
                        <pre className="whitespace-pre-wrap font-sans text-sm text-slate-200">
                          {stage.sampleUserStory}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: TOKEN COST CALCULATOR */}
      {activeSubTab === 'calculator' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-indigo-600" />
                  Interactive AI Unit Economics & Token Cost Calculator
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Model your feature's monthly inference costs, per-user economics, and gross margins across leading frontier and open-weights models.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-xl border border-indigo-100 text-indigo-800 text-xs font-semibold">
                <DollarSign className="w-4 h-4 text-indigo-600" />
                Total Monthly Volume: {totalMonthlyQueries.toLocaleString()} Queries
              </div>
            </div>

            {/* Sliders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Daily Active Users */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-700">Daily Active Users (DAU)</span>
                  <span className="font-bold text-indigo-600">{dau.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={dau}
                  onChange={(e) => setDau(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="text-[11px] text-slate-400">500 to 50,000 active users</div>
              </div>

              {/* Queries Per User */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-700">Queries / User / Day</span>
                  <span className="font-bold text-indigo-600">{queriesPerUser}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={queriesPerUser}
                  onChange={(e) => setQueriesPerUser(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="text-[11px] text-slate-400">1 to 50 AI interactions daily</div>
              </div>

              {/* Input Tokens */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-700">Input Tokens / Query</span>
                  <span className="font-bold text-indigo-600">{inputTokens}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={inputTokens}
                  onChange={(e) => setInputTokens(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="text-[11px] text-slate-400">System prompt + RAG chunks + user prompt</div>
              </div>

              {/* Output Tokens */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-700">Output Tokens / Query</span>
                  <span className="font-bold text-indigo-600">{outputTokens}</span>
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
                <div className="text-[11px] text-slate-400">Generated text response size (~4 chars/token)</div>
              </div>
            </div>

            {/* Model Comparison Cards */}
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
              Monthly Inference Cost Breakdown Across Foundation Models
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
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {model.tier}
                      </span>
                    </div>

                    <div className="my-4 pt-3 border-t border-slate-100 space-y-1.5">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs text-slate-500">Monthly Inference:</span>
                        <span className="text-xl font-black text-slate-900">${costs.totalCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-baseline text-xs">
                        <span className="text-slate-500">Cost / Active User / Mo:</span>
                        <span className="font-bold text-indigo-600">${costs.costPerUser}</span>
                      </div>
                      <div className="flex justify-between items-baseline text-xs">
                        <span className="text-slate-500">Cost / 100 Queries:</span>
                        <span className="font-semibold text-slate-700">${costs.costPerQuery}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 italic border-t border-slate-100 pt-3">
                      Best For: {model.bestFor}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Strategic PO Takeaway */}
            <div className="mt-8 bg-amber-50/80 border border-amber-200 rounded-xl p-5 text-amber-900 text-sm">
              <div className="flex items-center gap-2 font-bold mb-1">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Senior AI PM Unit Economics Takeaway:
              </div>
              <p className="text-xs leading-relaxed text-amber-800">
                Notice the 15x cost differential between <strong>GPT-4o ($2.50/M)</strong> and <strong>GPT-4o-mini ($0.15/M)</strong>. An elite AI PM never routes 100% of traffic to a frontier model. By implementing an intelligent router that routes 80% of lightweight tasks to small models and reserves frontier models for complex edge cases, you save up to 85% in inference costs and safeguard SaaS gross margins!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: FEASIBILITY MATRIX */}
      {activeSubTab === 'feasibility' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80">
            <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-2">
              <Sliders className="w-6 h-6 text-indigo-600" />
              AI Opportunity Feasibility & Architecture Evaluator
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Input your proposed product requirements to determine whether your problem requires deterministic logic, classical ML, RAG, or autonomous agents.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Question 1: Problem Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">1. Problem Category</label>
                <select
                  value={feasProblemType}
                  onChange={(e) => setFeasProblemType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white font-medium text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="deterministic">Fixed Logic / Calculations / Heuristic Rules</option>
                  <option value="predictive">Predictive Scoring (Churn, Fraud, Lead Ranking)</option>
                  <option value="knowledge">Question Answering on Proprietary Knowledge / Docs</option>
                  <option value="agentic">Multi-Step Task Execution (Calling APIs & booking)</option>
                  <option value="hybrid">High-Volume Content Extraction & Synthesis</option>
                </select>
              </div>

              {/* Question 2: Error Tolerance */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">2. Business Tolerance for Errors / Hallucinations</label>
                <select
                  value={feasErrorTolerance}
                  onChange={(e) => setFeasErrorTolerance(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white font-medium text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="zero">Zero Tolerance (Financial transfers, legal liability)</option>
                  <option value="moderate">Moderate Tolerance (Customer support with human escalation)</option>
                  <option value="high">High Tolerance (Creative copywriting, brainstorming)</option>
                </select>
              </div>

              {/* Question 3: Data Quality */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">3. Proprietary Data Freshness & Quality</label>
                <select
                  value={feasDataQuality}
                  onChange={(e) => setFeasDataQuality(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white font-medium text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="high">High: Verified documents, clean schemas, labeled ground truth</option>
                  <option value="medium">Medium: Unstructured wiki, mixed PDFs, partially updated</option>
                  <option value="low">Low: Unlabeled data, scattered notes, no ground truth</option>
                </select>
              </div>

              {/* Question 4: Latency Need */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">4. Latency Expectation</label>
                <select
                  value={feasLatency}
                  onChange={(e) => setFeasLatency(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white font-medium text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="instant">Sub-10ms (Real-time fraud checkout gate)</option>
                  <option value="streaming">Streaming 1-2s (Conversational chatbot)</option>
                  <option value="batch">Asynchronous Batch (Nightly report generation)</option>
                </select>
              </div>
            </div>

            {/* Recommendation Card */}
            <div className={`rounded-2xl p-6 border ${feasResult.color} space-y-3`}>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider">{feasResult.badge}</span>
                <span className="text-xs font-mono font-semibold bg-white/70 px-2.5 py-1 rounded-md">
                  Recommended Stack: {feasResult.stack}
                </span>
              </div>
              <h3 className="text-xl font-bold">{feasResult.title}</h3>
              <p className="text-sm leading-relaxed">{feasResult.summary}</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: ARCHITECTURE EXPLORER */}
      {activeSubTab === 'architecture' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80">
            <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-2">
              <Layers className="w-6 h-6 text-indigo-600" />
              The AI Architecture Trade-Off Explorer
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Compare Prompt Engineering vs RAG vs Fine-Tuning vs Autonomous Agents across costs, setup times, and data requirements.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50/70">
                    <th className="py-3 px-4">Architecture Strategy</th>
                    <th className="py-3 px-4">Setup Time</th>
                    <th className="py-3 px-4">Implementation Cost</th>
                    <th className="py-3 px-4">Data Requirement</th>
                    <th className="py-3 px-4">Accuracy on Dynamic Data</th>
                    <th className="py-3 px-4">Maintenance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {aiPmData.architectureTradeoffs.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900">
                        {item.dimension}
                        <div className="text-xs font-normal text-slate-500 mt-0.5">
                          Best for: {item.bestUseCases}
                        </div>
                      </td>
                      <td className="py-4 px-4 font-medium">{item.setupTime}</td>
                      <td className="py-4 px-4 font-medium">{item.cost}</td>
                      <td className="py-4 px-4 text-xs">{item.dataRequirement}</td>
                      <td className="py-4 px-4 text-xs font-semibold">{item.accuracyOnDynamicData}</td>
                      <td className="py-4 px-4 text-xs">{item.maintenance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: READINESS ASSESSMENT */}
      {activeSubTab === 'assessment' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-indigo-600" />
                  AI Product Manager Readiness Diagnostic (10 Questions)
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Assess your technical and strategic readiness across problem formulation, statistical literacy, GenAI architectures, and responsible AI.
                </p>
              </div>

              {assessmentSubmitted && (
                <div className={`px-4 py-2 rounded-xl border text-sm font-bold ${assessmentScore.levelColor}`}>
                  {assessmentScore.level} ({assessmentScore.percentage}%)
                </div>
              )}
            </div>

            {/* Questions List */}
            <div className="space-y-6 mb-8">
              {aiPmData.readinessQuestions.map((q, idx) => (
                <div key={q.id} className="p-5 rounded-xl border border-slate-200/80 bg-slate-50/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                      {q.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Question {idx + 1} of 10</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{q.question}</h4>

                  <div className="space-y-2 pt-1">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = userAnswers[q.id] === opt.score;
                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleAnswerSelect(q.id, opt.score)}
                          className={`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all ${
                            isSelected 
                              ? 'bg-indigo-600 text-white border-indigo-600 font-medium shadow-sm' 
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {opt.text}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Score Results Card */}
            {assessmentSubmitted && (
              <div className="bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-200 rounded-2xl p-6 space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-slate-900">Your AI PM Competency Profile</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${assessmentScore.levelColor}`}>
                    {assessmentScore.level} ({assessmentScore.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${assessmentScore.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {assessmentScore.advice}
                </p>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setUserAnswers({});
                  setAssessmentSubmitted(false);
                }}
                className="text-xs text-slate-500 hover:text-slate-800 font-medium flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset Quiz
              </button>
              <button
                onClick={() => setAssessmentSubmitted(true)}
                disabled={Object.keys(userAnswers).length < 5}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-bold text-sm transition-all shadow-md shadow-indigo-600/20"
              >
                Calculate Readiness Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: INTERVIEW MASTERCLASS */}
      {activeSubTab === 'interview' && (
        <div className="space-y-6">
          <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              Senior AI Product Manager Interview Masterclass
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Real-world scenario questions asked in senior enterprise AI PM interviews (Google, Meta, OpenAI, Stripe, Amazon). Deconstruct why naive answers fail, and master the exact structured verbal responses that win offers.
            </p>
          </div>

          <div className="space-y-6">
            {aiPmData.interviewMasterclass.map((item, idx) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">{item.question}</h3>
                </div>

                {/* Trap Answer */}
                <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    The Trap Answer (Why Naive Candidates Fail)
                  </div>
                  <p className="text-sm text-rose-900 italic font-mono bg-white/60 p-2.5 rounded-lg border border-rose-100">
                    "{item.trapAnswer}"
                  </p>
                  <p className="text-xs text-rose-700 font-medium">
                    <strong>Critique:</strong> {item.trapCritique}
                  </p>
                </div>

                {/* Model Answer */}
                <div className="bg-slate-900 text-slate-100 rounded-xl p-5 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    The Senior AI PM Model Answer (Executive Articulation)
                  </div>
                  <pre className="whitespace-pre-wrap font-sans text-sm text-slate-200 leading-relaxed">
                    {item.modelAnswer}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
