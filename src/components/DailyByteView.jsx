import React, { useState } from 'react';
import { 
  Sparkles, 
  Flame, 
  Lightbulb, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ArrowRight, 
  Calendar,
  Award,
  Check,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DailyByteView({ 
  dailyBytes, 
  userProgress, 
  onCompleteDailyByte 
}) {
  const [selectedDayNumber, setSelectedDayNumber] = useState(1);
  const currentByte = dailyBytes.find(b => b.dayNumber === selectedDayNumber) || dailyBytes[0];
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  const isTodayCompleted = !!userProgress.completedDailyBytes?.[currentByte.dayNumber];

  const handleSelectOption = (optionId) => {
    setSelectedOption(optionId);
    setHasRevealed(true);
  };

  const handleComplete = () => {
    onCompleteDailyByte(currentByte.dayNumber);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  const handleDayChange = (dayNum) => {
    setSelectedDayNumber(dayNum);
    setSelectedOption(null);
    setHasRevealed(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-2xl p-6 sm:p-8 text-slate-950 shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-slate-950/15 px-3 py-1 rounded-full text-xs font-black tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CONTINUOUS MICRO-LEARNING FEED</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              PO Daily Byte: 5-Minute Practical Scenario
            </h1>
            <p className="text-xs sm:text-sm text-slate-900/80 max-w-xl font-medium">
              One distinct real-world Product Owner insight, situational challenge, and trade-off analysis every single day.
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-white/90 backdrop-blur rounded-2xl p-4 border border-white/40 shadow-sm shrink-0">
            <Flame className="w-8 h-8 text-amber-500 fill-amber-500 animate-pulse" />
            <div>
              <span className="text-2xl font-black text-slate-900 block leading-none">
                {userProgress.streak || 1}
              </span>
              <span className="text-[11px] font-bold text-slate-600">Day Streak</span>
            </div>
          </div>
        </div>
      </div>

      {/* Day Selector Ribbon */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm flex items-center space-x-2 overflow-x-auto scrollbar-none">
        <span className="text-xs font-bold text-slate-400 pl-2 shrink-0 flex items-center space-x-1">
          <Calendar className="w-3.5 h-3.5" />
          <span>Timeline:</span>
        </span>
        {dailyBytes.map(d => {
          const isSelected = d.dayNumber === currentByte.dayNumber;
          const isDone = !!userProgress.completedDailyBytes?.[d.dayNumber];
          return (
            <button
              key={d.dayNumber}
              onClick={() => handleDayChange(d.dayNumber)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-xs'
                  : isDone
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>Day {d.dayNumber}</span>
              {isDone && <CheckCircle2 className="w-3 h-3 text-amber-600" />}
            </button>
          );
        })}
      </div>

      {/* Main Daily Byte Content */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        {/* Title and Category */}
        <div className="space-y-2 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              {currentByte.category} • Day {currentByte.dayNumber}
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            {currentByte.title}
          </h2>
        </div>

        {/* Core Concept Breakdown */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Today's Core Principle</span>
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
            {currentByte.coreConcept}
          </p>
        </div>

        {/* Pro Tip Box */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 flex items-start space-x-3">
          <Lightbulb className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-blue-950 space-y-1">
            <strong className="block text-blue-900 font-bold">PO Enterprise Pro-Tip:</strong>
            <p className="leading-relaxed">{currentByte.proTip}</p>
          </div>
        </div>

        {/* Interactive Dilemma: "What Would You Do?" */}
        {currentByte.dilemma && (
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
                Interactive Situational Challenge
              </span>
              <h3 className="text-base font-bold text-slate-900 pt-2">
                Scenario:
              </h3>
              <p className="text-sm text-slate-800 leading-relaxed italic bg-slate-50/80 p-4 rounded-xl border border-slate-200">
                "{currentByte.dilemma.scenario}"
              </p>
              <p className="text-sm font-bold text-slate-900 pt-2">
                {currentByte.dilemma.question}
              </p>
            </div>

            {/* Dilemma Options */}
            <div className="space-y-3 pt-2">
              {currentByte.dilemma.options.map((opt) => {
                const isSelected = selectedOption === opt.id;
                let optionStyle = 'bg-white border-slate-200 hover:border-slate-300 text-slate-800';

                if (hasRevealed) {
                  if (opt.isRecommended) {
                    optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                  } else if (isSelected && !opt.isRecommended) {
                    optionStyle = 'bg-red-50 border-red-400 text-red-950';
                  } else {
                    optionStyle = 'bg-slate-50 border-slate-200 text-slate-400';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-blue-50 border-blue-600 text-blue-950 font-semibold';
                }

                return (
                  <div
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`p-4 rounded-xl border text-xs sm:text-sm cursor-pointer transition space-y-2 ${optionStyle}`}
                  >
                    <div className="flex items-start space-x-3">
                      <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                        isSelected ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300 text-slate-500'
                      }`}>
                        {opt.id}
                      </span>
                      <span className="leading-snug">{opt.text}</span>
                    </div>

                    {/* Reveal Feedback */}
                    {hasRevealed && (
                      <div className={`mt-2 ml-8 p-3 rounded-lg text-xs leading-relaxed border ${
                        opt.isRecommended 
                          ? 'bg-emerald-100/60 border-emerald-300 text-emerald-950 font-medium' 
                          : 'bg-red-100/50 border-red-200 text-red-950'
                      }`}>
                        <div className="flex items-center space-x-1 font-bold mb-1">
                          {opt.isRecommended ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-700" />
                              <span className="text-emerald-800">Recommended Stance:</span>
                            </>
                          ) : (
                            <>
                              <X className="w-3.5 h-3.5 text-red-700" />
                              <span className="text-red-800">Anti-Pattern Trade-Off:</span>
                            </>
                          )}
                        </div>
                        <p>{opt.feedback}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Daily Completion Action */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            {isTodayCompleted ? (
              <span className="text-emerald-700 font-bold flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>You completed Day {currentByte.dayNumber}! Streak maintained.</span>
              </span>
            ) : (
              <span>Solve the dilemma and claim your daily learning credit.</span>
            )}
          </div>

          <button
            onClick={handleComplete}
            disabled={isTodayCompleted || !hasRevealed}
            className={`inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition ${
              isTodayCompleted
                ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-default'
                : hasRevealed
                ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 hover:scale-105 transform'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Flame className="w-4 h-4 fill-current" />
            <span>{isTodayCompleted ? 'Completed Today' : 'Complete Today & Add to Streak'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
