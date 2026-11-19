import React from 'react';
import { 
  CheckCircle2, 
  Code2, 
  Brain, 
  Calendar, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function ProgressOverviewBars() {
  const { progressStats, startDateStr, setStartDateStr, resetAllProgress } = useLearning();

  return (
    <div className="bg-[#131B2E] border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
      {/* Top Header: Title + Start Date Picker + Reset */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xl">🎯</span>
            <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Day-by-Day Java & DSA Target Tracker
            </h1>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">
            Daily goal: <strong>2 Java topics</strong> + <strong>1 DSA question</strong> per day
          </p>
        </div>

        {/* Start Date & Actions */}
        <div className="flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-1.5 bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5">
            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-gray-400">Plan Start:</span>
            <input
              type="date"
              value={startDateStr}
              onChange={(e) => setStartDateStr(e.target.value)}
              className="bg-transparent text-gray-200 focus:outline-none cursor-pointer font-mono text-xs"
            />
          </div>

          <button
            onClick={resetAllProgress}
            className="p-2 text-gray-500 hover:text-rose-400 hover:bg-slate-800/80 rounded-xl transition-colors"
            title="Reset All Progress to 0%"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3 Dedicated Progress Bars: Overall, Java Topics, DSA Questions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1. Overall Progress Bar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-gray-300 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Overall Progress</span>
              </span>
              <span className="text-sm font-extrabold text-indigo-400 font-mono">
                {progressStats.overallPercent}%
              </span>
            </div>
            <div className="flex justify-between text-[11px] text-gray-400 mb-2 font-mono">
              <span>{progressStats.completedTasks} completed</span>
              <span className="text-gray-500">{progressStats.remainingTasks} left</span>
            </div>
          </div>
          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${progressStats.overallPercent}%` }}
            />
          </div>
        </div>

        {/* 2. Java Topics Progress Bar (from screenshot) */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-amber-300 flex items-center space-x-1.5">
                <Code2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Java Core Topics</span>
              </span>
              <span className="text-sm font-extrabold text-amber-400 font-mono">
                {progressStats.javaPercent}%
              </span>
            </div>
            <div className="flex justify-between text-[11px] text-gray-400 mb-2 font-mono">
              <span>{progressStats.javaCompleted} / {progressStats.javaTotal} topics</span>
              <span className="text-gray-500">{progressStats.javaRemaining} left</span>
            </div>
          </div>
          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full transition-all duration-500"
              style={{ width: `${progressStats.javaPercent}%` }}
            />
          </div>
        </div>

        {/* 3. DSA Questions Progress Bar (from Rising Brain) */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-emerald-300 flex items-center space-x-1.5">
                <Brain className="w-3.5 h-3.5 text-emerald-400" />
                <span>DSA Pattern Questions</span>
              </span>
              <span className="text-sm font-extrabold text-emerald-400 font-mono">
                {progressStats.dsaPercent}%
              </span>
            </div>
            <div className="flex justify-between text-[11px] text-gray-400 mb-2 font-mono">
              <span>{progressStats.dsaCompleted} / {progressStats.dsaTotal} solved</span>
              <span className="text-gray-500">{progressStats.dsaRemaining} left</span>
            </div>
          </div>
          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
              style={{ width: `${progressStats.dsaPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4. Days Completed Summary Pill Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs pt-2">
        <div className="flex items-center space-x-2 text-gray-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>
            Days Finished: <strong className="text-white font-mono">{progressStats.daysCompleted}</strong> of <span className="font-mono">{progressStats.totalDays}</span> days ({progressStats.daysPercent}%)
          </span>
        </div>
        <div className="text-gray-400 text-xs font-mono">
          {progressStats.daysRemaining > 0 ? `${progressStats.daysRemaining} days remaining to finish all 48 topics & 24 questions` : '🎉 All 24 Days Completed!'}
        </div>
      </div>
    </div>
  );
}
