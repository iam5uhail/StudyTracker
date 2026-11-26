import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Flame, 
  Layers, 
  BarChart3,
  Sparkles,
  Map,
  BookOpen,
  Terminal,
  Clock,
  Calendar
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { JAVA_PRACTICE_LEVELS, JAVA_PRACTICE_QUESTIONS } from '../data/javaPracticeData';
import RoadmapView from './RoadmapView';
import DayWiseProgressBarGraph from './DayWiseProgressBarGraph';

export default function ProgressView({ onOpenNotes }) {
  const { progressStats, days, activeDayNumber } = useLearning();
  const [activeSubTab, setActiveSubTab] = useState('analytics'); // 'analytics' | 'records'

  const totalDays = days.length || 47;
  const isAllMastered = progressStats.overallPercent === 100;

  return (
    <div className="space-y-6">
      {/* 1. Hero Completion & Velocity Banner (Animated) */}
      <div className="relative overflow-hidden rounded-3xl border border-theme-border bg-theme-card p-6 sm:p-8 shadow-sm">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-28 -mt-28" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 flex-1 min-w-0 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Daily Goal: 3 Lectures + 3 Practice Drills</span>
              </span>

              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-theme-cardSub text-theme-secondary border border-theme-border">
                <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                <span>47-Day Sprint • Starts 21 Nov 2026</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight">
              Progress & Mastery Dashboard
            </h1>

            <p className="text-sm text-theme-muted leading-relaxed">
              Focused sprint covering all <strong className="text-theme-text">140 Core Java Lectures</strong> and <strong className="text-theme-text">140 Hands-on Java Drills</strong> (280 total targets). Complete 3 lectures + 3 drills daily to finish on schedule.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-theme-cardSub border border-theme-border">
                <Flame className="w-4 h-4 text-amber-500" />
                <span className="text-theme-muted">Streak:</span>
                <span className="font-bold text-amber-500 font-mono">{progressStats.streak} Days</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-theme-cardSub border border-theme-border">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-theme-muted">100% Days:</span>
                <span className="font-bold text-emerald-400 font-mono">{progressStats.daysCompleted} / {totalDays}</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-theme-cardSub border border-theme-border">
                <Clock className="w-4 h-4 text-sky-400" />
                <span className="text-theme-muted">Daily Target:</span>
                <span className="font-bold text-theme-text font-mono">6 Goals / Day</span>
              </div>
            </div>
          </div>

          {/* Radial Progress Ring Card */}
          <div className="flex flex-col sm:flex-row items-center gap-5 bg-theme-cardSub border border-theme-border rounded-2xl p-5 flex-shrink-0 shadow-sm">
            <div className="relative w-20 h-20 flex-shrink-0">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  stroke="var(--border-sub)"
                  strokeWidth="5.5"
                  fill="transparent"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  stroke={isAllMastered ? '#10b981' : '#f59e0b'}
                  strokeWidth="5.5"
                  strokeDasharray={2 * Math.PI * 26}
                  strokeDashoffset={2 * Math.PI * 26 * (1 - (progressStats.overallPercent || 0) / 100)}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-base font-mono text-theme-text">
                <span className={isAllMastered ? 'text-emerald-400' : 'text-amber-500'}>
                  {progressStats.overallPercent}%
                </span>
                <span className="text-[9px] uppercase tracking-wider text-theme-muted -mt-1 font-semibold">Done</span>
              </div>
            </div>

            <div className="space-y-2 text-center sm:text-left min-w-[190px]">
              <div>
                <div className="text-xs text-theme-muted font-medium">Curriculum Solved</div>
                <div className="text-lg font-extrabold font-mono text-theme-text mt-0.5">
                  {progressStats.completedTasks} <span className="text-xs text-theme-muted font-normal">/ {progressStats.totalTasks} Targets</span>
                </div>
              </div>

              {/* Smooth animated progress line */}
              <div className="w-full h-2 bg-theme-border rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isAllMastered ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]' : 'bg-gradient-to-r from-amber-500 to-emerald-500'
                  }`}
                  style={{ width: `${progressStats.overallPercent}%` }}
                />
              </div>

              <div className="text-[11px] text-theme-muted font-mono flex items-center justify-between">
                <span>{progressStats.remainingTasks} left to master</span>
                <span className="text-emerald-400 font-semibold">{progressStats.overallPercent >= 100 ? 'Goal Met! 🎉' : `${progressStats.daysPercent}% Sprint`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Switcher (Analytics vs 47-Day Schedule) */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-theme-border pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSubTab('analytics')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeSubTab === 'analytics'
                ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow'
                : 'bg-theme-cardSub text-theme-muted hover:text-theme-text border border-theme-border'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Progress Analytics</span>
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
            <span>47-Day Sprint Roadmap</span>
          </button>
        </div>

        <span className="text-xs text-theme-muted font-mono hidden sm:inline">
          3 Lectures + 3 Practice Drills Daily
        </span>
      </div>

      {activeSubTab === 'records' ? (
        <RoadmapView onOpenNotes={onOpenNotes} />
      ) : (
        <>
          {/* 2. Two Primary Track Cards (Side-by-Side: Lectures vs Practice) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1: Core Java Lectures */}
            <div className={`border rounded-2xl p-5 shadow-sm space-y-3 transition-all ${
              progressStats.javaPercent === 100
                ? 'bg-emerald-500/10 border-emerald-500/30'
                : 'bg-theme-card border-theme-border'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500">
                    <BookOpen className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-theme-text">Core Java Syllabus</h3>
                    <p className="text-xs text-theme-muted">140 Topics across 9 Level Modules</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`text-base font-extrabold font-mono ${
                    progressStats.javaPercent === 100 ? 'text-emerald-400' : 'text-amber-500'
                  }`}>
                    {progressStats.javaPercent}%
                  </div>
                  <div className="text-[10px] text-theme-muted font-mono">
                    {progressStats.javaCompleted} / 140 Topics
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
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

              <div className="flex items-center justify-between text-xs text-theme-muted font-mono pt-1">
                <span>{progressStats.javaRemaining} topics remaining</span>
                <span className={progressStats.javaPercent === 100 ? 'text-emerald-400 font-semibold' : ''}>
                  {progressStats.javaPercent === 100 ? 'All 140 Finished! 🎉' : '3 Topics / Day'}
                </span>
              </div>
            </div>

            {/* Card 2: Java Practice Lab */}
            <div className={`border rounded-2xl p-5 shadow-sm space-y-3 transition-all ${
              (progressStats.practicePercent || 0) === 100
                ? 'bg-emerald-500/10 border-emerald-500/30'
                : 'bg-theme-card border-theme-border'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Terminal className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-theme-text">Java Practice Lab</h3>
                    <p className="text-xs text-theme-muted">140 Hands-on Java 17 problem drills</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`text-base font-extrabold font-mono ${
                    (progressStats.practicePercent || 0) === 100 ? 'text-emerald-400' : 'text-amber-500'
                  }`}>
                    {progressStats.practicePercent || 0}%
                  </div>
                  <div className="text-[10px] text-theme-muted font-mono">
                    {progressStats.practiceCompleted || 0} / 140 Drills
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
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

              <div className="flex items-center justify-between text-xs text-theme-muted font-mono pt-1">
                <span>{progressStats.practiceRemaining || 0} drills remaining</span>
                <span className={(progressStats.practicePercent || 0) === 100 ? 'text-emerald-400 font-semibold' : ''}>
                  {(progressStats.practicePercent || 0) === 100 ? 'All 140 Mastered! 🎉' : '3 Drills / Day'}
                </span>
              </div>
            </div>
          </div>

          {/* 3. Day-Wise Activity & Work Accomplished Bar Graph */}
          <DayWiseProgressBarGraph />

          {/* 4. Java Practice Level Breakdown Grid */}
          <div className="bg-theme-card border border-theme-border rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-theme-border pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Layers className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-theme-text">Java Practice Levels Breakdown</h3>
                  <p className="text-xs text-theme-muted">14 Curated Levels • 140 Hands-on Java 17 problem drills</p>
                </div>
              </div>
              <span className="text-xs text-theme-accentText font-mono font-bold">
                {progressStats.practiceCompleted || 0} of {progressStats.practiceTotal || 140} Solved
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {JAVA_PRACTICE_LEVELS.map((lvl, idx) => {
                const lvlTasks = [];
                (days || []).forEach(d => {
                  (d.tasks || []).forEach(t => {
                    if (t.type === 'practice') {
                      const matches = t.levelId === lvl.id ||
                        (t.questionId && JAVA_PRACTICE_QUESTIONS.find(q => q.id === t.questionId)?.levelId === lvl.id) ||
                        (t.levelTitle && (
                          t.levelTitle.startsWith(`Level ${idx + 1}:`) ||
                          t.levelTitle.startsWith(`Level ${idx + 1} `)
                        ));
                      if (matches) {
                        lvlTasks.push(t);
                      }
                    }
                  });
                });
                const total = lvlTasks.length || 10;
                const done = lvlTasks.filter(t => t.completed).length;
                const pct = total > 0 ? Math.round((done / total) * 100) : 0;
                const isComplete = pct === 100;

                return (
                  <div 
                    key={lvl.id} 
                    className={`border rounded-2xl p-4 space-y-2.5 transition-all ${
                      isComplete 
                        ? 'bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.08)]' 
                        : 'bg-theme-cardSub border-theme-border'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`text-xs font-bold truncate max-w-[170px] ${isComplete ? 'text-emerald-400' : 'text-theme-text'}`} title={lvl.title}>
                        {lvl.title}
                      </span>
                      <span className={`text-xs font-mono font-bold ${isComplete ? 'text-emerald-400' : 'text-amber-500'}`}>
                        {pct}%
                      </span>
                    </div>
                    <p className="text-[10px] text-theme-muted truncate" title={lvl.subtitle}>
                      {lvl.subtitle}
                    </p>
                    <div className="w-full bg-theme-border h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          isComplete ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]' : 'bg-amber-500'
                        }`} 
                        style={{ width: `${pct}%` }} 
                      />
                    </div>
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className={isComplete ? 'text-emerald-400 font-semibold' : 'text-theme-muted'}>
                        Solved: {done} / {total} {isComplete && '✓'}
                      </span>
                      <span className={isComplete ? 'text-emerald-400 font-semibold' : 'text-theme-muted'}>
                        {isComplete ? 'Mastered 🎉' : '10 Drills'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
