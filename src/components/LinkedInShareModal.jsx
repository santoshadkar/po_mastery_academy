import React, { useState } from 'react';
import { 
  X, 
  Award, 
  Share2, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function LinkedInShareModal({ isOpen, onClose, achievementTitle, score }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const portalUrl = 'https://po-mastery-academy.vercel.app/';
  
  const shareText = `🚀 Excited to announce that I've just earned the "${achievementTitle || 'Senior Product Owner'}" credential on PO Mastery Academy${score ? ` with a score of ${score}%` : ''}!\n\nCovering 11 in-depth chapters, 30 replica mock exams for PSPO I/II/III, SAFe POPM, and the AI Product Manager Suite.\n\nLevel up your product craft here: ${portalUrl}\n\n#ProductOwner #ProductManagement #Agile #Scrum #ContinuousLearning #POMasteryAcademy`;

  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(portalUrl)}`;

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(shareText);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenLinkedIn = () => {
    handleCopy();
    window.open(linkedInShareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto border border-blue-100 shadow-sm">
              <Share2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">
              Share Your Credential on LinkedIn
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Showcase your verifiable product ownership mastery to your professional network, peers, and recruiters.
            </p>
          </div>

          {/* LinkedIn Card Preview Mockup */}
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-2xl text-white space-y-4 border border-indigo-900/40 shadow-inner">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                PO Mastery Academy Credential
              </span>
              <span className="font-mono text-[10px] text-slate-400">ID: POM-2026-{Math.random().toString(36).substring(2, 7).toUpperCase()}</span>
            </div>

            <div className="border-t border-slate-800 pt-3">
              <span className="text-xs text-slate-400 block">Demonstrated Competency:</span>
              <h3 className="text-xl font-black text-white mt-0.5">{achievementTitle || 'Senior Product Owner'}</h3>
              {score && <span className="inline-block mt-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold font-mono">Score: {score}%</span>}
            </div>

            <p className="text-[11px] text-slate-300 leading-relaxed">
              Verified across Product Discovery, Backlog Management (INVEST/WSJF), Scrum Principles, Agile Execution, and AI Product Ownership.
            </p>
          </div>

          {/* Copyable LinkedIn Post Text Area */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700">
              <span>Formatted LinkedIn Post Text:</span>
              <button
                onClick={handleCopy}
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Post Text!' : 'Copy Text'}</span>
              </button>
            </div>
            <textarea
              readOnly
              rows={4}
              value={shareText}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-700 resize-none focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleOpenLinkedIn}
              className="flex-1 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#0A66C2]/30 transition"
            >
              <Share2 className="w-4 h-4" />
              <span>Launch LinkedIn with Post</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
