import React, { useState } from 'react';
import { 
  ProgressOverviewBars, 
  RisingBrainProgressCard, 
  DayNavigatorTimeline, 
  DayTargetCard, 
  AllTargetsTableView, 
  SimpleNotesModal 
} from './components';
import { Calendar, ListChecks, Brain, Code2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dayView'); // 'dayView' or 'allView'
  const [activeNotesData, setActiveNotesData] = useState(null); // { dayNumber, task }

  const handleOpenNotes = (dayNumber, task) => {
    setActiveNotesData({ dayNumber, task });
  };

  return (
    <div className="min-h-screen bg-[#060A08] text-gray-100 flex flex-col font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Navbar Header matching Rising Brain dark theme */}
      <header className="border-b border-[#16241D] bg-[#080D0A]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]">
              <Brain className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-base font-bold text-white tracking-tight">Mastery Tracker</h1>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Target: 2 Java + 1 DSA
                </span>
              </div>
              <p className="text-xs text-gray-400">All 140 Core Java Topics + Rising Brain Pattern DSA • Starts 21 Nov 2026</p>
            </div>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center space-x-1 bg-[#0D1411] border border-[#16241D] p-1 rounded-xl text-xs">
            <button
              onClick={() => setActiveTab('dayView')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                activeTab === 'dayView'
                  ? 'bg-emerald-500 text-black font-bold shadow-[0_0_10px_#10B981]'
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
                  ? 'bg-emerald-500 text-black font-bold shadow-[0_0_10px_#10B981]'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <ListChecks className="w-3.5 h-3.5" />
              <span>All 70 Days</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Top Split Section: Progress Overview Bars (left 2 cols) + Rising Brain Circular Ring Card (right 1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          <div className="lg:col-span-2">
            <ProgressOverviewBars />
          </div>
          <div className="lg:col-span-1">
            <RisingBrainProgressCard />
          </div>
        </div>

        {/* Switchable Content */}
        {activeTab === 'dayView' ? (
          <>
            {/* Horizontal 70-day timeline slider */}
            <DayNavigatorTimeline />

            {/* Target card for the active day */}
            <DayTargetCard onOpenNotes={handleOpenNotes} />
          </>
        ) : (
          /* Full Table / List view of all 70 days */
          <AllTargetsTableView onOpenNotes={handleOpenNotes} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#16241D] py-4 text-center text-xs text-gray-500">
        Mastery Tracker — Starting 21 Nov 2026 • 2 Core Java Topics + 1 Rising Brain DSA Question Daily
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
