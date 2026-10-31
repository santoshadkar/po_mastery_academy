import React, { useState } from 'react';
import { 
  Gamepad2, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Users, 
  TrendingUp,
  Flame,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import poGrowthData from '../data/poGrowthFeatures';

export default function PoSimulatorView({ onOpenLinkedInShare }) {
  const { scenarioSimulator } = poGrowthData;
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [unlockedBadges, setUnlockedBadges] = useState([]);
  const [sessionScore, setSessionScore] = useState(100);

  const activeScenario = scenarioSimulator.scenarios[selectedScenarioIdx];
  const chosenOption = activeScenario.options.find(o => o.id === selectedOptionId);

  const handleSelectOption = (opt) => {
    setSelectedOptionId(opt.id);
    setSessionScore(prev => Math.max(0, prev + opt.scoreDelta));

    if (opt.badgeUnlock && !unlockedBadges.some(b => b.id === opt.badgeUnlock.id)) {
      setUnlockedBadges(prev => [...prev, opt.badgeUnlock]);
    }
  };

  const handleNextScenario = () => {
    setSelectedOptionId(null);
    setSelectedScenarioIdx(prev => (prev + 1) % scenarioSimulator.scenarios.length);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 p-8 text-white shadow-xl border border-purple-800/40">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/30">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Gamified Agile Decision Lab</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            {scenarioSimulator.title}
          </h1>
          <p className="text-purple-200 text-sm sm:text-base leading-relaxed">
            {scenarioSimulator.subtitle}
          </p>
        </div>

        {/* Live Simulator Status Bar */}
        <div className="mt-6 pt-6 border-t border-purple-800/50 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-purple-300 block">Scenario:</span>
              <strong className="text-white text-sm">{selectedScenarioIdx + 1} of {scenarioSimulator.scenarios.length}</strong>
            </div>
            <div>
              <span className="text-purple-300 block">Team Alignment Index:</span>
              <strong className="text-emerald-400 text-sm">{sessionScore}%</strong>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-purple-300 font-semibold">Earned Badges:</span>
            {unlockedBadges.length === 0 ? (
              <span className="text-slate-400 italic">None yet (Solve dilemmas wisely!)</span>
            ) : (
              <div className="flex items-center gap-1.5">
                {unlockedBadges.map(b => (
                  <span key={b.id} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[11px] shadow-sm">
                    <Award className="w-3 h-3" />
                    {b.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scenario Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
        {/* Scenario Header */}
        <div className="border-b border-slate-100 pb-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Role: {activeScenario.characterRole}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {activeScenario.title}
          </h2>
          <div className="mt-3 p-4 bg-purple-50/70 border border-purple-100 rounded-2xl text-slate-800 text-sm sm:text-base leading-relaxed">
            <strong className="text-purple-950 block mb-1">The Dilemma Context:</strong>
            {activeScenario.dilemmaContext}
          </div>
        </div>

        {/* Action Choices */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            What is your decision as Product Owner?
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {activeScenario.options.map((opt, idx) => {
              const isSelected = selectedOptionId === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt)}
                  className={`text-left p-5 rounded-2xl border-2 transition-all ${
                    isSelected
                      ? 'bg-purple-50/90 border-purple-600 shadow-md ring-1 ring-purple-200'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-purple-100 text-purple-800 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base leading-relaxed">
                      {opt.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Instant Impact & Coaching Review */}
        {chosenOption && (
          <div className="mt-6 p-6 rounded-2xl bg-slate-900 text-white space-y-5 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                chosenOption.scoreDelta > 0 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
              }`}>
                {chosenOption.verdict} ({chosenOption.scoreDelta > 0 ? `+${chosenOption.scoreDelta}` : chosenOption.scoreDelta} Alignment Pts)
              </span>

              {chosenOption.badgeUnlock && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs">
                  <Award className="w-4 h-4" />
                  <span>Unlocked Badge: {chosenOption.badgeUnlock.name}!</span>
                </div>
              )}
            </div>

            {/* Impact Triple Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400 block font-bold">Team Morale:</span>
                <span className="text-slate-200 mt-1 block">{chosenOption.impact.morale}</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400 block font-bold">Delivery Predictability:</span>
                <span className="text-slate-200 mt-1 block">{chosenOption.impact.predictability}</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400 block font-bold">Stakeholder Trust:</span>
                <span className="text-slate-200 mt-1 block">{chosenOption.impact.trust}</span>
              </div>
            </div>

            {/* Scrum Coaching Wisdom */}
            <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-purple-300 block mb-1">Scrum Master Coaching Note:</strong>
              {chosenOption.feedback}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setSelectedOptionId(null)}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry this Scenario</span>
              </button>

              <div className="flex items-center gap-3">
                {chosenOption.badgeUnlock && onOpenLinkedInShare && (
                  <button
                    onClick={() => onOpenLinkedInShare(chosenOption.badgeUnlock.name)}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/30 transition"
                  >
                    Share Badge on LinkedIn
                  </button>
                )}
                <button
                  onClick={handleNextScenario}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-purple-600/30 transition"
                >
                  <span>Next Dilemma</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
