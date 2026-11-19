import React, { useState } from 'react';
import { 
  ProgressOverviewBars, 
  DayNavigatorTimeline, 
  DayTargetCard, 
  AllTargetsTableView, 
  SimpleNotesModal 
} from './components';
import { Calendar, ListChecks } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dayView'); // 'dayView' or 'allView'
  const [activeNotesData, setActiveNotesData] = useState(null); // { dayNumber, task }

  const handleOpenNotes = (dayNumber, task) => {
    setActiveNotesData({ dayNumber, task });
  };

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-gray-100 flex flex-col font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Navbar Header */}
      <header className="border-b border-slate-800 bg-[#0F172A]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 text-lg font-black">
              2+1
            </div>
            <div>
              <h1 className="text-base font-bold text-white tracking-tight flex items-center space-x-2">
                <span>Daily Learning Tracker</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Target: 2 Java + 1 DSA
                </span>
              </h1>
              <p className="text-xs text-gray-400">Day-wise & Date-wise Structured Roadmap</p>
            </div>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center space-x-1 bg-slate-900 border border-slate-700 p-1 rounded-xl text-xs">
            <button
              onClick={() => setActiveTab('dayView')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                activeTab === 'dayView'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Day-by-Day</span>
            </button>
            <button
              onClick={() => setActiveTab('allView')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                activeTab === 'allView'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <ListChecks className="w-3.5 h-3.5" />
              <span>All 24 Days</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* 1. Progress Overview with 3 Dedicated Progress Bars */}
        <ProgressOverviewBars />

        {/* 2. Switchable Content */}
        {activeTab === 'dayView' ? (
          <>
            {/* Horizontal 24-day timeline slider */}
            <DayNavigatorTimeline />

            {/* Target card for the active day */}
            <DayTargetCard onOpenNotes={handleOpenNotes} />
          </>
        ) : (
          /* Full Table / List view of all 24 days */
          <AllTargetsTableView onOpenNotes={handleOpenNotes} />
        )}
      </main>

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
