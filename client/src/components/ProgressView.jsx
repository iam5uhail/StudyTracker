import React, { useState } from 'react';
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
  Sparkles,
  Map,
  ListFilter
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import ProgressOverviewBars from './ProgressOverviewBars';
import RisingBrainProgressCard from './RisingBrainProgressCard';
import RoadmapView from './RoadmapView';
import DayWiseProgressBarGraph from './DayWiseProgressBarGraph';

export default function ProgressView({ onOpenNotes }) {
  const { progressStats, days } = useLearning();
  const [activeSubTab, setActiveSubTab] = useState('analytics'); // 'analytics' | 'records'

  return (
    <div className="space-y-6">
      {/* 1. Header Banner */}
      <div className="rounded-3xl border border-theme-border bg-theme-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center space-x-2 text-theme-accentText mb-2">
            <BarChart3 className="w-5 h-5 text-theme-accent" />
            <span className="text-xs font-bold uppercase tracking-wider">Analytics & Progress Data</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight">
            Comprehensive Progress Tracking
          </h1>
          <p className="text-sm text-theme-muted mt-1 max-w-2xl">
            Live metrics and breakdown across all <strong className="text-theme-accentText">140 Core Java Topics</strong> and <strong className="text-theme-accentText">70 Pattern-Wise DSA Problems</strong>.
          </p>
        </div>

        <div className="flex items-center space-x-3 bg-theme-cardSub border border-theme-border rounded-2xl p-3 px-4 flex-shrink-0 shadow-sm">
          <div className="text-center">
            <div className="text-xl font-extrabold text-emerald-500 font-mono">{progressStats.overallPercent}%</div>
            <div className="text-[10px] text-theme-muted uppercase font-semibold">Total Done</div>
          </div>
          <div className="h-8 w-px bg-theme-border" />
          <div className="text-center">
            <div className="text-xl font-extrabold text-theme-text font-mono">{progressStats.daysCompleted} / 70</div>
            <div className="text-[10px] text-theme-muted uppercase font-semibold">Days Finished</div>
          </div>
          <div className="h-8 w-px bg-theme-border" />
          <div className="text-center">
            <div className="text-xl font-extrabold text-amber-500 font-mono">{progressStats.streak}</div>
            <div className="text-[10px] text-theme-muted uppercase font-semibold">Day Streak</div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation: Switch between Analytics Charts and 70-Day Roadmap Records */}
      <div className="flex flex-wrap items-center gap-2 border-b border-theme-border pb-3">
        <button
          onClick={() => setActiveSubTab('analytics')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
            activeSubTab === 'analytics'
              ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow'
              : 'bg-theme-cardSub text-theme-muted hover:text-theme-text border border-theme-border'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Progress Analytics & Metrics</span>
        </button>

        <button
          onClick={() => setActiveSubTab('records')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
            activeSubTab === 'records'
              ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow'
              : 'bg-theme-cardSub text-theme-muted hover:text-theme-text border border-theme-border'
          }`}
        >
          <Map className="w-4 h-4" />
          <span>70-Day Tracking Records & Roadmap</span>
        </button>
      </div>

      {activeSubTab === 'records' ? (
        <RoadmapView onOpenNotes={onOpenNotes} />
      ) : (
        <>
          {/* 2. Top Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Tasks Done - Emerald Green */}
            <div className="bg-theme-card border border-theme-border rounded-2xl p-5 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-xs text-theme-muted font-medium">Completed Items</span>
                <div className="text-2xl font-bold text-theme-text font-mono mt-1">
                  {progressStats.completedTasks} <span className="text-xs text-theme-muted font-normal">/ {progressStats.totalTasks}</span>
                </div>
                <span className="text-[11px] text-emerald-500 dark:text-emerald-400 font-medium">
                  {progressStats.overallPercent}% curriculum covered
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              </div>
            </div>

            {/* Java Progress - Warm Amber */}
            <div className="bg-theme-card border border-theme-border rounded-2xl p-5 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-xs text-theme-muted font-medium">Core Java Topics</span>
                <div className="text-2xl font-bold text-amber-500 font-mono mt-1">
                  {progressStats.javaCompleted} <span className="text-xs text-theme-muted font-normal">/ {progressStats.javaTotal}</span>
                </div>
                <span className="text-[11px] text-amber-500 font-medium">
                  {progressStats.javaPercent}% topics finished
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                <Code2 className="w-6 h-6" />
              </div>
            </div>

            {/* DSA Progress - Distinct Electric Cyan */}
            <div className="bg-theme-card border border-theme-border rounded-2xl p-5 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-xs text-theme-muted font-medium">Rising Brain DSA</span>
                <div className="text-2xl font-bold text-cyan-500 dark:text-cyan-400 font-mono mt-1">
                  {progressStats.dsaCompleted} <span className="text-xs text-theme-muted font-normal">/ {progressStats.dsaTotal}</span>
                </div>
                <span className="text-[11px] text-cyan-500 dark:text-cyan-400 font-medium">
                  {progressStats.dsaPercent}% problems solved
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-500 dark:text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                <Brain className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
              </div>
            </div>

            {/* Consistency Streak */}
            <div className="bg-theme-card border border-theme-border rounded-2xl p-5 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-xs text-theme-muted font-medium">Current Streak</span>
                <div className="text-2xl font-bold text-amber-500 font-mono mt-1">
                  {progressStats.streak} <span className="text-xs text-theme-muted font-normal">Days</span>
                </div>
                <span className="text-[11px] text-theme-muted font-medium">
                  Target plan starts 21 Nov 2026
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500">
                <Flame className="w-6 h-6 text-amber-500" />
              </div>
            </div>
          </div>

          {/* 3. Day-Wise Activity & Work Accomplished Bar Graph */}
          <DayWiseProgressBarGraph />

          {/* 4. Detailed Progress Bars + Rising Brain Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ProgressOverviewBars />
            </div>
            <div className="lg:col-span-1">
              <RisingBrainProgressCard />
            </div>
          </div>

          {/* 4. Pattern Mastery Cards Grid */}
          <div className="bg-theme-card border border-theme-border rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-theme-border pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-theme-accentSub border border-theme-accentBorder flex items-center justify-center text-theme-accentText">
                  <Layers className="w-5 h-5 text-theme-accent" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-theme-text">DSA Pattern Breakdown</h3>
                  <p className="text-xs text-theme-muted">Target problems aligned exactly with Rising Brain categories</p>
                </div>
              </div>
              <span className="text-xs text-theme-accentText font-mono font-bold">
                {progressStats.dsaCompleted} of 70 Solved
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Array */}
              <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-theme-text">Array</span>
                  <span className="text-xs text-theme-accentText font-mono font-bold">
                    {progressStats.arrayTotal ? Math.round((progressStats.arraySolved / progressStats.arrayTotal) * 100) : 0}%
                  </span>
                </div>
                <div className="w-full bg-theme-border h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-theme-accent h-full rounded-full transition-all duration-500" 
                    style={{ width: `${progressStats.arrayTotal ? (progressStats.arraySolved / progressStats.arrayTotal) * 100 : 0}%` }} 
                  />
                </div>
                <div className="flex justify-between text-xs text-theme-muted">
                  <span>Solved: {progressStats.arraySolved} / {progressStats.arrayTotal}</span>
                  <span className="text-[10px]">4 Patterns</span>
                </div>
              </div>

              {/* Strings */}
              <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-theme-text">Strings</span>
                  <span className="text-xs text-sky-500 font-mono font-bold">
                    {progressStats.stringsTotal ? Math.round((progressStats.stringsSolved / progressStats.stringsTotal) * 100) : 0}%
                  </span>
                </div>
                <div className="w-full bg-theme-border h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-sky-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${progressStats.stringsTotal ? (progressStats.stringsSolved / progressStats.stringsTotal) * 100 : 0}%` }} 
                  />
                </div>
                <div className="flex justify-between text-xs text-theme-muted">
                  <span>Solved: {progressStats.stringsSolved} / {progressStats.stringsTotal}</span>
                  <span className="text-[10px]">Core Patterns</span>
                </div>
              </div>

              {/* Binary Search */}
              <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-theme-text">Binary Search</span>
                  <span className="text-xs text-purple-500 font-mono font-bold">
                    {progressStats.bsTotal ? Math.round((progressStats.bsSolved / progressStats.bsTotal) * 100) : 0}%
                  </span>
                </div>
                <div className="w-full bg-theme-border h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-purple-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${progressStats.bsTotal ? (progressStats.bsSolved / progressStats.bsTotal) * 100 : 0}%` }} 
                  />
                </div>
                <div className="flex justify-between text-xs text-theme-muted">
                  <span>Solved: {progressStats.bsSolved} / {progressStats.bsTotal}</span>
                  <span className="text-[10px]">23 Problems</span>
                </div>
              </div>

              {/* Stacks & Queues */}
              <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-theme-text">Stacks & Queues</span>
                  <span className="text-xs text-amber-500 font-mono font-bold">
                    {progressStats.stackTotal ? Math.round((progressStats.stackSolved / progressStats.stackTotal) * 100) : 0}%
                  </span>
                </div>
                <div className="w-full bg-theme-border h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-amber-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${progressStats.stackTotal ? (progressStats.stackSolved / progressStats.stackTotal) * 100 : 0}%` }} 
                  />
                </div>
                <div className="flex justify-between text-xs text-theme-muted">
                  <span>Solved: {progressStats.stackSolved} / {progressStats.stackTotal}</span>
                  <span className="text-[10px]">12 Problems</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
