import React from 'react';
import { 
  TrendingUp, 
  Brain, 
  Code2, 
  Calendar, 
  CheckCircle2, 
  Flame, 
  Layers, 
  Award, 
  BarChart3,
  Sparkles
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import ProgressOverviewBars from './ProgressOverviewBars';
import RisingBrainProgressCard from './RisingBrainProgressCard';

export default function ProgressView() {
  const { progressStats, days } = useLearning();

  return (
    <div className="space-y-6">
      {/* 1. Header Banner */}
      <div className="rounded-3xl border border-[#16241D] bg-gradient-to-r from-[#0A120E] via-[#0D1813] to-[#0A100D] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-emerald-400 mb-2">
            <BarChart3 className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Analytics & Progress Data</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Comprehensive Progress Tracking
          </h1>
          <p className="text-sm text-gray-400 mt-1 max-w-2xl">
            Live metrics and breakdown across all <strong className="text-emerald-300">140 Core Java Topics</strong> and <strong className="text-emerald-300">70 Pattern-Wise DSA Problems</strong>.
          </p>
        </div>

        <div className="flex items-center space-x-3 bg-[#060A08] border border-[#16241D] rounded-2xl p-3 px-4 flex-shrink-0">
          <div className="text-center">
            <div className="text-xl font-extrabold text-emerald-400 font-mono">{progressStats.overallPercent}%</div>
            <div className="text-[10px] text-gray-400 uppercase font-semibold">Total Done</div>
          </div>
          <div className="h-8 w-px bg-[#18261F]" />
          <div className="text-center">
            <div className="text-xl font-extrabold text-white font-mono">{progressStats.daysCompleted} / 70</div>
            <div className="text-[10px] text-gray-400 uppercase font-semibold">Days Finished</div>
          </div>
          <div className="h-8 w-px bg-[#18261F]" />
          <div className="text-center">
            <div className="text-xl font-extrabold text-amber-400 font-mono">{progressStats.streak}</div>
            <div className="text-[10px] text-gray-400 uppercase font-semibold">Day Streak</div>
          </div>
        </div>
      </div>

      {/* 2. Top Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Tasks Done */}
        <div className="bg-[#0A100D] border border-[#16241D] rounded-2xl p-5 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 font-medium">Completed Items</span>
            <div className="text-2xl font-bold text-white font-mono mt-1">
              {progressStats.completedTasks} <span className="text-xs text-gray-500 font-normal">/ {progressStats.totalTasks}</span>
            </div>
            <span className="text-[11px] text-emerald-400 font-medium">
              {progressStats.overallPercent}% curriculum covered
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        {/* Java Progress */}
        <div className="bg-[#0A100D] border border-[#16241D] rounded-2xl p-5 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 font-medium">Core Java Topics</span>
            <div className="text-2xl font-bold text-amber-300 font-mono mt-1">
              {progressStats.javaCompleted} <span className="text-xs text-gray-500 font-normal">/ {progressStats.javaTotal}</span>
            </div>
            <span className="text-[11px] text-amber-400 font-medium">
              {progressStats.javaPercent}% topics finished
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Code2 className="w-6 h-6" />
          </div>
        </div>

        {/* DSA Progress */}
        <div className="bg-[#0A100D] border border-[#16241D] rounded-2xl p-5 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 font-medium">Rising Brain DSA</span>
            <div className="text-2xl font-bold text-emerald-300 font-mono mt-1">
              {progressStats.dsaCompleted} <span className="text-xs text-gray-500 font-normal">/ {progressStats.dsaTotal}</span>
            </div>
            <span className="text-[11px] text-emerald-400 font-medium">
              {progressStats.dsaPercent}% problems solved
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Brain className="w-6 h-6" />
          </div>
        </div>

        {/* Consistency Streak */}
        <div className="bg-[#0A100D] border border-[#16241D] rounded-2xl p-5 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 font-medium">Consistency Streak</span>
            <div className="text-2xl font-bold text-rose-400 font-mono mt-1">
              {progressStats.streak} <span className="text-xs text-gray-500 font-normal">Days</span>
            </div>
            <span className="text-[11px] text-rose-400 font-medium">
              Target plan starts 21 Nov 2026
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
            <Flame className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* 3. Deep Breakdown: Left 2 Cols (ProgressOverviewBars) + Right 1 Col (RisingBrainProgressCard) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
        <div className="lg:col-span-2">
          <ProgressOverviewBars />
        </div>
        <div className="lg:col-span-1">
          <RisingBrainProgressCard />
        </div>
      </div>

      {/* 4. Pattern Mastery Cards Grid */}
      <div className="bg-[#0A100D] border border-[#16241D] rounded-3xl p-6 sm:p-8 space-y-5">
        <div className="flex items-center justify-between border-b border-[#16241D] pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">DSA Pattern Breakdown</h3>
              <p className="text-xs text-gray-400">Target problems aligned exactly with Rising Brain categories</p>
            </div>
          </div>
          <span className="text-xs text-emerald-400 font-mono font-bold">
            {progressStats.dsaCompleted} of 70 Solved
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Array */}
          <div className="bg-[#080D0A] border border-[#16241D] rounded-2xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white">Array</span>
              <span className="text-xs text-emerald-400 font-mono font-bold">{progressStats.arrayPercent}%</span>
            </div>
            <div className="w-full bg-[#131F19] h-2 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${progressStats.arrayPercent}%` }} 
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Solved: {progressStats.arraySolved} / {progressStats.arrayTotal}</span>
              <span className="text-[10px] text-gray-500">4 Patterns</span>
            </div>
          </div>

          {/* Strings */}
          <div className="bg-[#080D0A] border border-[#16241D] rounded-2xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white">Strings</span>
              <span className="text-xs text-sky-400 font-mono font-bold">{progressStats.stringsPercent}%</span>
            </div>
            <div className="w-full bg-[#131F19] h-2 rounded-full overflow-hidden">
              <div 
                className="bg-sky-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${progressStats.stringsPercent}%` }} 
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Solved: {progressStats.stringsSolved} / {progressStats.stringsTotal}</span>
              <span className="text-[10px] text-gray-500">Core Patterns</span>
            </div>
          </div>

          {/* Binary Search */}
          <div className="bg-[#080D0A] border border-[#16241D] rounded-2xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white">Binary Search</span>
              <span className="text-xs text-purple-400 font-mono font-bold">{progressStats.bsPercent}%</span>
            </div>
            <div className="w-full bg-[#131F19] h-2 rounded-full overflow-hidden">
              <div 
                className="bg-purple-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${progressStats.bsPercent}%` }} 
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Solved: {progressStats.bsSolved} / {progressStats.bsTotal}</span>
              <span className="text-[10px] text-gray-500">23 Problems</span>
            </div>
          </div>

          {/* Stacks & Queues */}
          <div className="bg-[#080D0A] border border-[#16241D] rounded-2xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white">Stacks & Queues</span>
              <span className="text-xs text-amber-400 font-mono font-bold">{progressStats.stackPercent}%</span>
            </div>
            <div className="w-full bg-[#131F19] h-2 rounded-full overflow-hidden">
              <div 
                className="bg-amber-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${progressStats.stackPercent}%` }} 
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Solved: {progressStats.stackSolved} / {progressStats.stackTotal}</span>
              <span className="text-[10px] text-gray-500">12 Problems</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
