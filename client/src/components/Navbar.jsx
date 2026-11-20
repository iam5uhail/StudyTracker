import React from 'react';
import { GraduationCap, Flame, Clock, Plus, RotateCcw } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function Navbar({ onOpenLogModal, onOpenAddSubject }) {
  const { stats, resetToDefaults } = useLearning();

  // Format today's date
  const todayStr = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <header className="border-b border-gray-800 bg-[#0F172A]/90 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand & Date */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-sm">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-base font-bold text-white tracking-tight">StudyTracker</h1>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Daily Learning
              </span>
            </div>
            <p className="text-xs text-gray-400 font-medium">{todayStr}</p>
          </div>
        </div>

        {/* Center / Right Badges & Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Daily Streak */}
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold" title="Days active">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>{stats.streak} {stats.streak === 1 ? 'Day' : 'Days'} Streak</span>
          </div>

          {/* Total Study Hours */}
          <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-gray-300 text-xs font-medium">
            <Clock className="w-4 h-4 text-indigo-400" />
            <span><strong>{stats.totalHours}</strong> hrs studied</span>
          </div>

          {/* Log Study Session Button */}
          <button
            onClick={onOpenLogModal}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden xs:inline">Log Study Session</span>
            <span className="xs:hidden">Log</span>
          </button>

          {/* Reset button */}
          <button
            onClick={resetToDefaults}
            className="p-2 text-gray-500 hover:text-gray-300 transition-colors"
            title="Reset to sample data"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
