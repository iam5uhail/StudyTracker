import React from 'react';
import { 
  CheckCircle2, 
  Code2, 
  Coffee, 
  Calendar, 
  RotateCcw,
  Sparkles,
  Layers
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function ProgressOverviewBars() {
  const { progressStats, startDateStr, setStartDateStr, resetAllProgress } = useLearning();

  return (
    <div className="bg-theme-card border border-theme-border rounded-3xl p-5 sm:p-6 shadow-sm space-y-5">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-theme-border pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-theme-accent animate-pulse" />
            <h2 className="text-lg sm:text-xl font-bold text-theme-text tracking-tight">
              Day-by-Day Learning Roadmap
            </h2>
          </div>
          <p className="text-xs text-theme-muted mt-1">
            Daily Goal: <strong>2 Core Java Topics</strong> (from Video Course) + <strong>2 Java Practice Drills</strong> (from Hands-on Lab)
          </p>
        </div>

        {/* Start Date & Actions */}
        <div className="flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-1.5 bg-theme-cardSub border border-theme-border rounded-xl px-3 py-1.5 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-theme-accent" />
            <span className="text-theme-muted">Plan Start:</span>
            <input
              type="date"
              value={startDateStr}
              onChange={(e) => setStartDateStr(e.target.value)}
              className="bg-transparent text-theme-accentText font-bold focus:outline-none cursor-pointer font-mono text-xs"
            />
          </div>

          <button
            onClick={resetAllProgress}
            className="p-2 text-theme-muted hover:text-rose-500 hover:bg-theme-cardSub rounded-xl transition-colors"
            title="Reset All Progress to 0%"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3 Primary Progress Bars: Overall, Java, DSA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1. Overall Completion - Vibrant Emerald Green */}
        <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-4 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-emerald-500 dark:text-emerald-400 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                <span>Overall Completion</span>
              </span>
              <span className="text-sm font-extrabold text-emerald-500 dark:text-emerald-400 font-mono">
                {progressStats.overallPercent}%
              </span>
            </div>
            <div className="flex justify-between text-[11px] text-theme-muted mb-2 font-mono">
              <span>{progressStats.completedTasks} completed</span>
              <span>{progressStats.remainingTasks} left</span>
            </div>
          </div>
          <div className="w-full h-2.5 bg-theme-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(16,185,129,0.3)]" 
              style={{ width: `${progressStats.overallPercent}%` }}
            />
          </div>
        </div>

        {/* 2. Core Java Topics (140 Topics) */}
        <div className={`border rounded-2xl p-4 flex flex-col justify-between shadow-sm transition-all ${
          progressStats.javaPercent === 100 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-theme-cardSub border-theme-border'
        }`}>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className={`text-xs font-semibold flex items-center space-x-1.5 ${
                progressStats.javaPercent === 100 ? 'text-emerald-400' : 'text-amber-500'
              }`}>
                <Code2 className={`w-3.5 h-3.5 ${progressStats.javaPercent === 100 ? 'text-emerald-400' : 'text-amber-500'}`} />
                <span>Core Java Topics</span>
              </span>
              <span className={`text-sm font-extrabold font-mono ${
                progressStats.javaPercent === 100 ? 'text-emerald-400' : 'text-amber-500'
              }`}>
                {progressStats.javaPercent}%
              </span>
            </div>
            <div className="flex justify-between text-[11px] text-theme-muted mb-2 font-mono">
              <span>{progressStats.javaCompleted} / {progressStats.javaTotal} topics</span>
              <span>{progressStats.javaRemaining} left</span>
            </div>
          </div>
          <div className="w-full h-2.5 bg-theme-border rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${
                progressStats.javaPercent === 100 
                  ? 'bg-gradient-to-r from-emerald-500 to-green-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]' 
                  : 'bg-gradient-to-r from-amber-500 to-yellow-400'
              }`} 
              style={{ width: `${progressStats.javaPercent}%` }}
            />
          </div>
        </div>

        {/* 3. Java Practice Drills (140 Drills) */}
        <div className={`border rounded-2xl p-4 flex flex-col justify-between shadow-sm transition-all ${
          (progressStats.practicePercent || 0) === 100 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-theme-cardSub border-theme-border'
        }`}>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className={`text-xs font-semibold flex items-center space-x-1.5 ${
                (progressStats.practicePercent || 0) === 100 ? 'text-emerald-400' : 'text-amber-500'
              }`}>
                <Coffee className={`w-3.5 h-3.5 ${(progressStats.practicePercent || 0) === 100 ? 'text-emerald-400' : 'text-amber-500'}`} />
                <span>Java Practice Drills</span>
              </span>
              <span className={`text-sm font-extrabold font-mono ${
                (progressStats.practicePercent || 0) === 100 ? 'text-emerald-400' : 'text-amber-500'
              }`}>
                {progressStats.practicePercent || 0}%
              </span>
            </div>
            <div className="flex justify-between text-[11px] text-theme-muted mb-2 font-mono">
              <span>{progressStats.practiceCompleted || 0} / {progressStats.practiceTotal || 140} drills</span>
              <span>{progressStats.practiceRemaining || 0} left</span>
            </div>
          </div>
          <div className="w-full h-2.5 bg-theme-border rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${
                (progressStats.practicePercent || 0) === 100 
                  ? 'bg-gradient-to-r from-emerald-500 to-green-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]' 
                  : 'bg-gradient-to-r from-amber-500 to-orange-400 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
              }`} 
              style={{ width: `${progressStats.practicePercent || 0}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4. Target DSA Pattern Breakdown Sub-Bars */}
      <div className="pt-2">
        <div className="flex items-center justify-between text-xs text-theme-muted mb-3 font-semibold">
          <span className="flex items-center space-x-1.5 text-theme-secondary">
            <Layers className="w-3.5 h-3.5 text-theme-accent" />
            <span>DSA Topic Progress Breakdown</span>
          </span>
          <span className="text-theme-muted">Array (24) • Strings (11) • Binary Search (23) • Stack (12)</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Array */}
          <div className="bg-theme-cardSub border border-theme-border rounded-xl p-2.5">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-theme-secondary font-medium">Array</span>
              <span className="text-theme-accentText font-mono text-[11px]">
                {progressStats.arraySolved}/{progressStats.arrayTotal}
              </span>
            </div>
            <div className="w-full h-1.5 bg-theme-border rounded-full overflow-hidden">
              <div 
                className="h-full bg-theme-accent rounded-full transition-all duration-300"
                style={{ width: `${progressStats.arrayTotal ? (progressStats.arraySolved / progressStats.arrayTotal) * 100 : 0}%` }}
              />
            </div>
          </div>

          {/* Strings */}
          <div className="bg-theme-cardSub border border-theme-border rounded-xl p-2.5">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-theme-secondary font-medium">Strings</span>
              <span className="text-sky-500 font-mono text-[11px]">
                {progressStats.stringsSolved}/{progressStats.stringsTotal}
              </span>
            </div>
            <div className="w-full h-1.5 bg-theme-border rounded-full overflow-hidden">
              <div 
                className="h-full bg-sky-500 rounded-full transition-all duration-300"
                style={{ width: `${progressStats.stringsTotal ? (progressStats.stringsSolved / progressStats.stringsTotal) * 100 : 0}%` }}
              />
            </div>
          </div>

          {/* Binary Search */}
          <div className="bg-theme-cardSub border border-theme-border rounded-xl p-2.5">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-theme-secondary font-medium">Binary Search</span>
              <span className="text-purple-500 font-mono text-[11px]">
                {progressStats.bsSolved}/{progressStats.bsTotal}
              </span>
            </div>
            <div className="w-full h-1.5 bg-theme-border rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-500 rounded-full transition-all duration-300"
                style={{ width: `${progressStats.bsTotal ? (progressStats.bsSolved / progressStats.bsTotal) * 100 : 0}%` }}
              />
            </div>
          </div>

          {/* Stack */}
          <div className="bg-theme-cardSub border border-theme-border rounded-xl p-2.5">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-theme-secondary font-medium">Stack</span>
              <span className="text-amber-500 font-mono text-[11px]">
                {progressStats.stackSolved}/{progressStats.stackTotal}
              </span>
            </div>
            <div className="w-full h-1.5 bg-theme-border rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-500 rounded-full transition-all duration-300"
                style={{ width: `${progressStats.stackTotal ? (progressStats.stackSolved / progressStats.stackTotal) * 100 : 0}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
