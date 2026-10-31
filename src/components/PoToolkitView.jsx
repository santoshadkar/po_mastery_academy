import React, { useState } from 'react';
import { 
  Calculator, 
  Layers, 
  FileText, 
  Copy, 
  Check, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import poGrowthData from '../data/poGrowthFeatures';

export default function PoToolkitView({ onNavigateToChapter }) {
  const [activeTab, setActiveTab] = useState('wsjf');
  const [copiedKey, setCopiedKey] = useState(null);

  // WSJF Calculator State
  const [wsjfParams, setWsjfParams] = useState({
    userValue: 8,
    timeCriticality: 5,
    riskReduction: 5,
    jobSize: 3
  });

  // RICE Calculator State
  const [riceParams, setRiceParams] = useState({
    reach: 5000,
    impact: 2,
    confidence: 80,
    effort: 2
  });

  // Interactive Slicing Tool State
  const [expandedSlicingIdx, setExpandedSlicingIdx] = useState(0);

  const { toolkitHub } = poGrowthData;
  const { calculators, storySlicingGuide, productionTemplates } = toolkitHub;

  // Calculate WSJF: (UV + TC + RR) / JobSize
  const costOfDelay = Number(wsjfParams.userValue) + Number(wsjfParams.timeCriticality) + Number(wsjfParams.riskReduction);
  const wsjfScore = wsjfParams.jobSize > 0 ? (costOfDelay / Number(wsjfParams.jobSize)).toFixed(2) : 0;

  // Calculate RICE: (Reach * Impact * (Confidence/100)) / Effort
  const riceScore = riceParams.effort > 0 ? Math.round((riceParams.reach * riceParams.impact * (riceParams.confidence / 100)) / riceParams.effort) : 0;

  const handleCopy = (key, text) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 p-8 text-white shadow-xl border border-blue-800/40">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
            <Zap className="w-3.5 h-3.5" />
            <span>Job-Ready Product Management Utilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            PO Artifact & Interactive Toolkit Hub
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Eliminate guesswork from your day job. Calculate prioritization economics with interactive <strong>WSJF & RICE engines</strong>, master <strong>INVEST story-slicing</strong>, and copy production-grade <strong>PRD and User Story templates</strong> directly to your clipboard.
          </p>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('wsjf')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'wsjf'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>WSJF Calculator</span>
        </button>
        <button
          onClick={() => setActiveTab('rice')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'rice'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>RICE Scoring Model</span>
        </button>
        <button
          onClick={() => setActiveTab('slicing')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'slicing'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Story Slicing Guide</span>
        </button>
        <button
          onClick={() => setActiveTab('templates')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'templates'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>PRD & Story Templates</span>
        </button>
      </div>

      {/* ===================================================================== */}
      {/* 1. WSJF CALCULATOR                                                    */}
      {/* ===================================================================== */}
      {activeTab === 'wsjf' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
          {/* Controls */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">SAFe 6.0 Industry Standard</span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">Weighted Shortest Job First (WSJF)</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Prioritize features delivering the highest Cost of Delay per unit of development duration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* User Value */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>User-Business Value</span>
                  <span className="text-blue-600 font-mono text-sm">{wsjfParams.userValue} pts</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={wsjfParams.userValue}
                  onChange={(e) => setWsjfParams({ ...wsjfParams, userValue: Number(e.target.value) })}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <span className="text-[11px] text-slate-400 block">Relative financial or user impact</span>
              </div>

              {/* Time Criticality */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Time Criticality</span>
                  <span className="text-blue-600 font-mono text-sm">{wsjfParams.timeCriticality} pts</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={wsjfParams.timeCriticality}
                  onChange={(e) => setWsjfParams({ ...wsjfParams, timeCriticality: Number(e.target.value) })}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <span className="text-[11px] text-slate-400 block">Regulatory, seasonal, or decay urgency</span>
              </div>

              {/* Risk Reduction / Opportunity */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Risk Reduction / Opp Enablement</span>
                  <span className="text-blue-600 font-mono text-sm">{wsjfParams.riskReduction} pts</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={wsjfParams.riskReduction}
                  onChange={(e) => setWsjfParams({ ...wsjfParams, riskReduction: Number(e.target.value) })}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <span className="text-[11px] text-slate-400 block">De-risks architecture or opens new TAM</span>
              </div>

              {/* Job Size / Duration */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-amber-900">
                  <span>Job Size / Duration (Denominator)</span>
                  <span className="text-amber-700 font-mono text-sm">{wsjfParams.jobSize} pts</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={wsjfParams.jobSize}
                  onChange={(e) => setWsjfParams({ ...wsjfParams, jobSize: Number(e.target.value) })}
                  className="w-full accent-amber-600 cursor-pointer"
                />
                <span className="text-[11px] text-amber-600 block">Estimated sprint effort or lead time</span>
              </div>
            </div>

            <div className="p-4 bg-slate-900 text-blue-200 rounded-2xl text-xs font-mono space-y-1">
              <span className="text-slate-400 block font-sans font-bold">Economic Formula Breakdown:</span>
              <p>Cost of Delay (CoD) = {wsjfParams.userValue} + {wsjfParams.timeCriticality} + {wsjfParams.riskReduction} = <span className="text-white font-bold">{costOfDelay}</span></p>
              <p>WSJF Score = {costOfDelay} / {wsjfParams.jobSize} = <span className="text-emerald-400 font-bold">{wsjfScore}</span></p>
            </div>
          </div>

          {/* Results Score Card */}
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-lg border border-indigo-900/50">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Calculated WSJF Result
              </span>
              <div>
                <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  {wsjfScore}
                </span>
                <span className="text-xs text-slate-400 block mt-1">Relative Economic Rank Score</span>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Cost of Delay:</span>
                  <strong className="text-white">{costOfDelay} pts</strong>
                </div>
                <div className="flex justify-between">
                  <span>Job Duration:</span>
                  <strong className="text-white">{wsjfParams.jobSize} pts</strong>
                </div>
                <div className="flex justify-between">
                  <span>Economic Efficiency:</span>
                  <strong className="text-emerald-400">
                    {wsjfScore > 5 ? 'High ROI (Schedule Now)' : wsjfScore > 2.5 ? 'Moderate Priority' : 'Low Velocity Return'}
                  </strong>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => handleCopy('wsjf-res', `Feature WSJF: ${wsjfScore} (CoD: ${costOfDelay}, Size: ${wsjfParams.jobSize})`)}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition"
              >
                {copiedKey === 'wsjf-res' ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedKey === 'wsjf-res' ? 'Copied Calculation!' : 'Copy WSJF Score for Jira'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 2. RICE CALCULATOR                                                    */}
      {/* ===================================================================== */}
      {activeTab === 'rice' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Intercom Prioritization Framework</span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">RICE Scoring Model</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Score candidate initiatives objectively by multiplying Reach, Impact, and Confidence, divided by Person-Months Effort.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Reach */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Reach (Users or Accounts / Quarter)</span>
                  <span className="text-purple-600 font-mono text-sm">{riceParams.reach.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={riceParams.reach}
                  onChange={(e) => setRiceParams({ ...riceParams, reach: Number(e.target.value) })}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>

              {/* Impact */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Impact Factor</span>
                  <span className="text-purple-600 font-mono text-sm">{riceParams.impact}x</span>
                </div>
                <select
                  value={riceParams.impact}
                  onChange={(e) => setRiceParams({ ...riceParams, impact: Number(e.target.value) })}
                  className="w-full p-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value={0.25}>Minimal (0.25x)</option>
                  <option value={0.5}>Low (0.5x)</option>
                  <option value={1}>Medium (1x)</option>
                  <option value={2}>High (2x)</option>
                  <option value={3}>Massive (3x)</option>
                </select>
              </div>

              {/* Confidence */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Confidence Level</span>
                  <span className="text-purple-600 font-mono text-sm">{riceParams.confidence}%</span>
                </div>
                <select
                  value={riceParams.confidence}
                  onChange={(e) => setRiceParams({ ...riceParams, confidence: Number(e.target.value) })}
                  className="w-full p-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value={50}>Moonshot / Low Data (50%)</option>
                  <option value={80}>Medium / Customer Interviews (80%)</option>
                  <option value={100}>High / Telemetry Validated (100%)</option>
                </select>
              </div>

              {/* Effort */}
              <div className="bg-rose-50/60 p-4 rounded-2xl border border-rose-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-rose-900">
                  <span>Effort (Person-Months)</span>
                  <span className="text-rose-700 font-mono text-sm">{riceParams.effort} mo</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="12"
                  step="0.5"
                  value={riceParams.effort}
                  onChange={(e) => setRiceParams({ ...riceParams, effort: Number(e.target.value) })}
                  className="w-full accent-rose-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Results Score Card */}
          <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-lg border border-purple-900/50">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                Calculated RICE Score
              </span>
              <div>
                <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                  {riceScore.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 block mt-1">Total Normalized Impact Points</span>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Gross Reach:</span>
                  <strong className="text-white">{riceParams.reach.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Confidence Penalty:</span>
                  <strong className="text-purple-300">{riceParams.confidence}%</strong>
                </div>
                <div className="flex justify-between">
                  <span>Effort Cost:</span>
                  <strong className="text-rose-300">{riceParams.effort} person-months</strong>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => handleCopy('rice-res', `Feature RICE Score: ${riceScore} (Reach: ${riceParams.reach}, Impact: ${riceParams.impact}, Conf: ${riceParams.confidence}%, Effort: ${riceParams.effort})`)}
                className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition"
              >
                {copiedKey === 'rice-res' ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedKey === 'rice-res' ? 'Copied Calculation!' : 'Copy RICE Score'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 3. STORY SLICING GUIDE (INVEST)                                       */}
      {/* ===================================================================== */}
      {activeTab === 'slicing' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6 animate-fadeIn">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">INVEST Quality Framework</span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">10 Patterns for Vertical Story Slicing</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
              Never slice stories horizontally (database vs backend vs UI). Learn how high-performing POs slice epics vertically into shippable value increments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {storySlicingGuide.map((guide, idx) => {
              const isExpanded = expandedSlicingIdx === idx;
              return (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isExpanded ? 'bg-blue-50/50 border-blue-300 shadow-sm' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                  onClick={() => setExpandedSlicingIdx(isExpanded ? null : idx)}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h3 className="font-extrabold text-slate-900 text-sm">{guide.pattern}</h3>
                    </div>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-blue-600" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{guide.description}</p>

                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-blue-200/60 space-y-2 text-xs">
                      <div className="bg-white p-3 rounded-xl border border-slate-200 text-slate-800">
                        <strong className="text-blue-700 block mb-1">Real-World Slicing Example:</strong>
                        <span>{guide.example}</span>
                      </div>
                      <span className="inline-block px-2.5 py-1 rounded bg-blue-100 text-blue-800 font-semibold text-[11px]">
                        ★ {guide.investRating}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 4. PRODUCTION PRD & USER STORY TEMPLATES                              */}
      {/* ===================================================================== */}
      {activeTab === 'templates' && (
        <div className="space-y-6 animate-fadeIn">
          {productionTemplates.map((tmpl) => (
            <div key={tmpl.id} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{tmpl.category}</span>
                  <h3 className="text-xl font-black text-slate-900 mt-0.5">{tmpl.title}</h3>
                </div>
                <button
                  onClick={() => handleCopy(tmpl.id, tmpl.template)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-sm"
                >
                  {copiedKey === tmpl.id ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKey === tmpl.id ? 'Copied Template!' : 'Copy Markdown'}</span>
                </button>
              </div>

              <pre className="bg-slate-900 text-slate-200 p-5 rounded-2xl text-xs font-mono overflow-x-auto border border-slate-800 whitespace-pre-wrap leading-relaxed shadow-inner">
                <code>{tmpl.template}</code>
              </pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
