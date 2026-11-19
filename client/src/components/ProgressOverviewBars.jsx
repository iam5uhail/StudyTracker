import React from 'react';
import { 
  CheckCircle2, 
  Code2, 
  Brain, 
  Calendar, 
  RotateCcw,
  Sparkles,
  Layers
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function ProgressOverviewBars() {
  const { progressStats, startDateStr, setStartDateStr, resetAllProgress } = useLearning();

  return (
    <div className="bg-[#0D1411] border border-[#16241D] rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#16241D] pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Day-by-Day Learning Roadmap
            </h1>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Daily Goal: <strong>2 Core Java Topics</strong> (from Video Course) + <strong>1 DSA Pattern Question</strong> (from Rising Brain)
          </p>
        </div>

        {/* Start Date & Actions */}
        <div className="flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-1.5 bg-[#060A08] border border-[#16241D] rounded-xl px-3 py-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-gray-400">Plan Start:</span>
            <input
              type="date"
              value={startDateStr}
              onChange={(e) => setStartDateStr(e.target.value)}
              className="bg-transparent text-emerald-300 font-bold focus:outline-none cursor-pointer font-mono text-xs"
            />
          </div>

          <button
            onClick={resetAllProgress}
            className="p-2 text-gray-500 hover:text-rose-400 hover:bg-[#16241D]/50 rounded-xl transition-colors"
            title="Reset All Progress to 0%"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3 Primary Progress Bars: Overall, Java, DSA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1. Overall Completion */}
        <div className="bg-[#080D0A] border border-[#16241D] rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-gray-300 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Overall Completion</span>
              </span>
              <span className="text-sm font-extrabold text-emerald-400 font-mono">
                {progressStats.overallPercent}%
              </span>
            </div>
            <div className="flex justify-between text-[11px] text-gray-400 mb-2 font-mono">
              <span>{progressStats.completedTasks} completed</span>
              <span className="text-gray-500">{progressStats.remainingTasks} left</span>
            </div>
          </div>
          <div className="w-full h-2.5 bg-[#14201A] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-500 shadow-[0_0_10px_#10B981]" 
              style={{ width: `${progressStats.overallPercent}%` }}
            />
          </div>
        </div>

        {/* 2. Core Java Topics (140 Topics) */}
        <div className="bg-[#080D0A] border border-[#16241D] rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-amber-300 flex items-center space-x-1.5">
                <Code2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Core Java Topics</span>
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
          <div className="w-full h-2.5 bg-[#14201A] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-500" 
              style={{ width: `${progressStats.javaPercent}%` }}
            />
          </div>
        </div>

        {/* 3. DSA Pattern Questions (70 Questions) */}
        <div className="bg-[#080D0A] border border-[#16241D] rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-emerald-300 flex items-center space-x-1.5">
                <Brain className="w-3.5 h-3.5 text-emerald-400" />
                <span>Rising Brain Pattern DSA</span>
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
          <div className="w-full h-2.5 bg-[#14201A] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500" 
              style={{ width: `${progressStats.dsaPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Rising Brain DSA Topic Breakdown Mini Bars (Array 24, Strings 11, Binary Search 23, Stack 12) */}
      <div className="pt-2 border-t border-[#16241D]">
        <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
          <span>DSA Topics Breakdown (Exact Rising Brain Sequence)</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {/* Array */}
          <div className="bg-[#080D0A] border border-[#16241D] rounded-xl p-2.5">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-gray-300 font-medium">Array</span>
              <span className="text-emerald-400 font-mono text-[11px]">
                {progressStats.arraySolved}/{progressStats.arrayTotal}
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#14201A] rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progressStats.arrayTotal ? (progressStats.arraySolved / progressStats.arrayTotal) * 100 : 0}%` }}
              />
            </div>
          </div>

          {/* Strings */}
          <div className="bg-[#080D0A] border border-[#16241D] rounded-xl p-2.5">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-gray-300 font-medium">Strings</span>
              <span className="text-emerald-400 font-mono text-[11px]">
                {progressStats.stringsSolved}/{progressStats.stringsTotal}
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#14201A] rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progressStats.stringsTotal ? (progressStats.stringsSolved / progressStats.stringsTotal) * 100 : 0}%` }}
              />
            </div>
          </div>

          {/* Binary Search */}
          <div className="bg-[#080D0A] border border-[#16241D] rounded-xl p-2.5">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-gray-300 font-medium">Binary Search</span>
              <span className="text-emerald-400 font-mono text-[11px]">
                {progressStats.bsSolved}/{progressStats.bsTotal}
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#14201A] rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progressStats.bsTotal ? (progressStats.bsSolved / progressStats.bsTotal) * 100 : 0}%` }}
              />
            </div>
          </div>

          {/* Stack */}
          <div className="bg-[#080D0A] border border-[#16241D] rounded-xl p-2.5">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-gray-300 font-medium">Stack</span>
              <span className="text-emerald-400 font-mono text-[11px]">
                {progressStats.stackSolved}/{progressStats.stackTotal}
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#14201A] rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progressStats.stackTotal ? (progressStats.stackSolved / progressStats.stackTotal) * 100 : 0}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
