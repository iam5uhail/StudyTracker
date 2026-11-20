import React, { useState } from 'react';
import { 
  DashboardView,
  ProgressView,
  RoadmapView,
  SimpleNotesModal
} from './components';
import { 
  Target, 
  TrendingUp, 
  Map, 
  Brain, 
  Sparkles,
  Calendar,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { useLearning } from './context/LearningContext';

export default function App() {
  const [activeNav, setActiveNav] = useState('dashboard'); // 'dashboard', 'progress', 'roadmap'
  const [activeNotesData, setActiveNotesData] = useState(null); // { dayNumber, task }
  const { activeDayNumber, progressStats } = useLearning();

  const handleOpenNotes = (dayNumber, task) => {
    setActiveNotesData({ dayNumber, task });
  };

  return (
    <div className="min-h-screen bg-[#060A08] text-gray-100 flex flex-col font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Navbar Header */}
      <header className="border-b border-[#16241D] bg-[#080D0A]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]">
              <Brain className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-base font-bold text-white tracking-tight">StudyTracker</h1>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Daily Goal
                </span>
              </div>
              <p className="text-xs text-gray-400 hidden sm:block">
                140 Core Java Topics + Rising Brain DSA • Starts 21 Nov 2026
              </p>
            </div>
          </div>

          {/* 3 Main Navigation Tabs: Dashboard, Progress, Roadmap */}
          <nav className="flex items-center space-x-1 bg-[#0D1411] border border-[#16241D] p-1 rounded-2xl text-xs sm:text-sm">
            <button
              onClick={() => setActiveNav('dashboard')}
              className={`flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded-xl font-bold transition-all ${
                activeNav === 'dashboard'
                  ? 'bg-emerald-500 text-black shadow-[0_0_12px_#10B981]'
                  : 'text-gray-400 hover:text-white hover:bg-[#131F19]'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveNav('progress')}
              className={`flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded-xl font-bold transition-all ${
                activeNav === 'progress'
                  ? 'bg-emerald-500 text-black shadow-[0_0_12px_#10B981]'
                  : 'text-gray-400 hover:text-white hover:bg-[#131F19]'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Progress</span>
            </button>

            <button
              onClick={() => setActiveNav('roadmap')}
              className={`flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded-xl font-bold transition-all ${
                activeNav === 'roadmap'
                  ? 'bg-emerald-500 text-black shadow-[0_0_12px_#10B981]'
                  : 'text-gray-400 hover:text-white hover:bg-[#131F19]'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>Roadmap</span>
            </button>
          </nav>

          {/* Right Indicator Pill */}
          <div className="hidden md:flex items-center space-x-3 text-xs">
            <div className="flex items-center space-x-2 bg-[#0C1410] border border-[#16241D] px-3 py-1.5 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-400">Active:</span>
              <strong className="text-white font-mono">Day {activeDayNumber}</strong>
            </div>

            <div className="flex items-center space-x-1.5 bg-[#0C1410] border border-[#16241D] px-3 py-1.5 rounded-xl text-emerald-400">
              <Flame className="w-3.5 h-3.5" />
              <span className="font-mono font-bold">{progressStats.streak}d Streak</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeNav === 'dashboard' && (
          <DashboardView onOpenNotes={handleOpenNotes} />
        )}

        {activeNav === 'progress' && (
          <ProgressView />
        )}

        {activeNav === 'roadmap' && (
          <RoadmapView onOpenNotes={handleOpenNotes} />
        )}
      </main>

      {/* Modern Footer */}
      <footer className="border-t border-[#16241D] py-5 text-center text-xs text-gray-500 bg-[#080D0A]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>StudyTracker • 70-Day Target Plan Starting 21 Nov 2026</span>
          <span className="text-emerald-400 font-medium">Daily Goal: 2 Core Java Topics + 1 Rising Brain DSA Problem</span>
        </div>
      </footer>

      {/* Simple Notes Modal */}
      {activeNotesData && (
        <SimpleNotesModal
          taskData={activeNotesData}
          onClose={() => setActiveNotesData(null)}
        />
      )}
    </div>
  );
}
