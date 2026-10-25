import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DashboardView from './components/DashboardView';
import LearningAcademyView from './components/LearningAcademyView';
import CertificationSimulatorView from './components/CertificationSimulatorView';
import DailyByteView from './components/DailyByteView';
import ResourceHubView from './components/ResourceHubView';
import AiProductManagerView from './components/AiProductManagerView';

import chaptersData from './data/chapters';
import certificationsData from './data/certifications';
import dailyBytesData from './data/dailyBytes';
import resourcesData from './data/resources';

const STORAGE_KEY = 'po_mastery_academy_user_progress_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedChapterId, setSelectedChapterId] = useState('ch-01');
  const [selectedTrackId, setSelectedTrackId] = useState('pspo-1');

  // Load User Progress from localStorage
  const [userProgress, setUserProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      streak: 1,
      lastVisitDate: new Date().toDateString(),
      completedChapters: {},
      completedExams: {},
      completedDailyBytes: {}
    };
  });

  // Save Progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
    } catch (e) {}
  }, [userProgress]);

  // Daily Streak Logic
  useEffect(() => {
    const today = new Date().toDateString();
    if (userProgress.lastVisitDate !== today) {
      setUserProgress(prev => ({
        ...prev,
        lastVisitDate: today,
        // increment streak if visited on consecutive days
        streak: (prev.streak || 0) + 1
      }));
    }
  }, []);

  const handleSaveChapterQuiz = (chapterId, result) => {
    setUserProgress(prev => ({
      ...prev,
      completedChapters: {
        ...prev.completedChapters,
        [chapterId]: result
      }
    }));
  };

  const handleSaveExamResult = (examId, report) => {
    setUserProgress(prev => ({
      ...prev,
      completedExams: {
        ...prev.completedExams,
        [examId]: report
      }
    }));
  };

  const handleCompleteDailyByte = (dayNumber) => {
    setUserProgress(prev => ({
      ...prev,
      completedDailyBytes: {
        ...prev.completedDailyBytes,
        [dayNumber]: true
      },
      streak: (prev.streak || 0) + 1
    }));
  };

  const completedChaptersCount = Object.keys(userProgress.completedChapters || {}).length;
  const completedExamsCount = Object.keys(userProgress.completedExams || {}).length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        streak={userProgress.streak || 1}
        completedChaptersCount={completedChaptersCount}
        completedExamsCount={completedExamsCount}
      />

      <main className="flex-1">
        {activeTab === 'dashboard' && (
          <DashboardView
            chapters={chaptersData}
            certifications={certificationsData}
            dailyByte={dailyBytesData[0]}
            userProgress={userProgress}
            setActiveTab={setActiveTab}
            setSelectedChapter={setSelectedChapterId}
            setSelectedCertTrack={setSelectedTrackId}
          />
        )}

        {activeTab === 'chapters' && (
          <LearningAcademyView
            chapters={chaptersData}
            selectedChapterId={selectedChapterId}
            setSelectedChapterId={setSelectedChapterId}
            userProgress={userProgress}
            onSaveChapterQuiz={handleSaveChapterQuiz}
          />
        )}

        {activeTab === 'certifications' && (
          <CertificationSimulatorView
            certifications={certificationsData}
            selectedTrackId={selectedTrackId}
            setSelectedTrackId={setSelectedTrackId}
            userProgress={userProgress}
            onSaveExamResult={handleSaveExamResult}
          />
        )}

        {activeTab === 'dailyByte' && (
          <DailyByteView
            dailyBytes={dailyBytesData}
            userProgress={userProgress}
            onCompleteDailyByte={handleCompleteDailyByte}
          />
        )}

        {activeTab === 'aiPm' && (
          <AiProductManagerView
            onNavigateToChapter={(chId) => {
              setSelectedChapterId(chId || 'ch-11');
              setActiveTab('chapters');
            }}
          />
        )}

        {activeTab === 'resources' && (
          <ResourceHubView
            resources={resourcesData}
          />
        )}
      </main>

      {/* Global Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-10 mt-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="font-bold text-white text-sm">PO Mastery Academy</span>
            <p className="text-slate-500">
              Enterprise Product Owner & AI Product Manager Enablement Portal • Aligned to Scrum Guide 2020, EBM, SAFe 6.0, and Generative AI Architectures.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <span className="hover:text-white cursor-pointer" onClick={() => setActiveTab('chapters')}>11 Chapters</span>
            <span>•</span>
            <span className="hover:text-purple-400 font-semibold cursor-pointer text-purple-300" onClick={() => setActiveTab('aiPm')}>🤖 AI PM Suite</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" onClick={() => setActiveTab('certifications')}>30 Mock Exams</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" onClick={() => setActiveTab('dailyByte')}>PO Daily Byte</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" onClick={() => setActiveTab('resources')}>Media Library</span>
          </div>
          <p className="text-slate-500">
            © 2026 Enterprise Agile Train. Zero-Hardcoding & 100% Test Automated.
          </p>
        </div>
      </footer>
    </div>
  );
}
