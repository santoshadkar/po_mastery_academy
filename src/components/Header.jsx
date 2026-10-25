import React from 'react';
import { 
  Award, 
  BookOpen, 
  Compass, 
  Flame, 
  GraduationCap, 
  Library, 
  Timer, 
  CheckCircle2,
  Sparkles,
  Bot
} from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  streak, 
  completedChaptersCount, 
  completedExamsCount 
}) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Compass },
    { id: 'chapters', label: 'Learning Academy', icon: BookOpen, badge: `${completedChaptersCount}/11` },
    { id: 'aiPm', label: 'AI PM Hub', icon: Bot, isAi: true },
    { id: 'aiCert', label: 'AI PM Certification', icon: Award, badge: 'IPL 3 Courses', isCert: true },
    { id: 'certifications', label: '30 Mock Exams', icon: Timer, badge: `${completedExamsCount}/30` },
    { id: 'dailyByte', label: 'PO Daily Byte', icon: Sparkles, highlight: true },
    { id: 'resources', label: 'Media Library', icon: Library }
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setActiveTab('dashboard')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-200">
                  PO Mastery Academy
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Enterprise
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                From Basics to Executive Product Leadership
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? item.isCert
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30 font-semibold'
                        : item.isAi 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                        : 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                      : item.isCert
                      ? 'text-emerald-300 hover:bg-slate-800 hover:text-emerald-200 bg-emerald-500/10 border border-emerald-500/30'
                      : item.isAi
                      ? 'text-indigo-300 hover:bg-slate-800 hover:text-indigo-200 bg-indigo-500/10 border border-indigo-500/20'
                      : item.highlight
                      ? 'text-amber-300 hover:bg-slate-800 hover:text-amber-200 bg-amber-500/10 border border-amber-500/20'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : item.isCert ? 'text-emerald-400' : item.isAi ? 'text-indigo-400' : item.highlight ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive 
                        ? 'bg-black/30 text-white' 
                        : item.isCert
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : item.isAi 
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Status Badges */}
          <div className="flex items-center space-x-3">
            {/* Daily Streak */}
            <div 
              className="flex items-center space-x-1.5 bg-slate-800/80 border border-amber-500/30 px-3 py-1.5 rounded-full cursor-pointer hover:bg-slate-800 transition"
              title="Daily PO Learning Streak"
              onClick={() => setActiveTab('dailyByte')}
            >
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
              <span className="text-xs font-bold text-amber-300">{streak} Day Streak</span>
            </div>

            {/* Quick Readiness Pill */}
            <div className="hidden lg:flex items-center space-x-1.5 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-full">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-300">
                {Math.round(((completedChaptersCount / 11) * 0.4 + (completedExamsCount / 30) * 0.6) * 100)}% PO Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sub-Navigation */}
      <div className="md:hidden flex overflow-x-auto py-2 px-4 space-x-2 border-t border-slate-800 bg-slate-900/90 text-xs">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg flex items-center space-x-1 ${
              activeTab === item.id ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300 bg-slate-800'
            }`}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </header>
  );
}
