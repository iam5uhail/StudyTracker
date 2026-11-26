import React, { useState, useMemo } from 'react';
import {
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  Flame,
  Sparkles,
  Target,
  Layers,
  Code2,
  Brain
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function DayWiseProgressBarGraph() {
  const { days, activeDayNumber, setActiveDayNumber } = useLearning();

  // Active view chunk / range: 'chunk-1' (1-14), 'chunk-2' (15-28), 'chunk-3' (29-42), 'chunk-4' (43-56), 'chunk-5' (57-70), or 'all'
  const [selectedRange, setSelectedRange] = useState('all');
  const [hoveredDay, setHoveredDay] = useState(null);

  // Prepare 70 days data with exact task counts and breakdown (2 Lectures + 2 Practice Drills per day)
  const dailyData = useMemo(() => {
    return (days || []).map(day => {
      const tasks = day.tasks || [];
      const total = tasks.length || 4;
      const completed = tasks.filter(t => t.completed).length;
      const javaDone = tasks.filter(t => t.type === 'java' && t.completed).length;
      const practiceDone = tasks.filter(t => t.type === 'practice' && t.completed).length;
      const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
      const isFull = total > 0 && completed === total;

      return {
        dayNumber: day.dayNumber,
        dateDisplay: day.dateDisplay,
        title: day.title,
        tasks,
        total,
        completed,
        javaDone,
        practiceDone,
        pct,
        isFull
      };
    });
  }, [days]);

  // Overall counts for summary
  const fullyDoneDays = dailyData.filter(d => d.isFull).length;
  const partiallyDoneDays = dailyData.filter(d => d.completed > 0 && !d.isFull).length;
  const untouchedDays = dailyData.filter(d => d.completed === 0).length;

  // Filter days based on selected range
  const displayedDays = useMemo(() => {
    if (selectedRange === 'chunk-1') return dailyData.slice(0, 14);
    if (selectedRange === 'chunk-2') return dailyData.slice(14, 28);
    if (selectedRange === 'chunk-3') return dailyData.slice(28, 42);
    if (selectedRange === 'chunk-4') return dailyData.slice(42, 56);
    if (selectedRange === 'chunk-5') return dailyData.slice(56, 70);
    return dailyData; // 'all' 70 days
  }, [dailyData, selectedRange]);

  // Active or hovered day preview details
  const previewDay = hoveredDay || dailyData.find(d => d.dayNumber === activeDayNumber) || dailyData[0];

  return (
    <div className="bg-theme-card border border-theme-border rounded-3xl p-5 sm:p-7 shadow-sm space-y-6">
      {/* Header & Range Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-theme-border pb-5">
        <div>
          <div className="flex items-center space-x-2 text-theme-accentText mb-1.5">
            <BarChart3 className="w-5 h-5 text-theme-accent" />
            <span className="text-xs font-bold uppercase tracking-wider">Daily Activity & Work Accomplished</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-theme-text tracking-tight">
            Day-Wise Learning Progress Bar Graph
          </h2>
          <p className="text-xs text-theme-muted mt-0.5">
            Visual breakdown of completed Core Java lectures and Java practice drills across each of the 70 days (4 daily goals).
          </p>
        </div>

        {/* Range Selector Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-theme-cardSub border border-theme-border p-1 rounded-2xl text-xs">
          {[
            { id: 'all', label: 'All 70 Days' },
            { id: 'chunk-1', label: 'Days 1-14' },
            { id: 'chunk-2', label: 'Days 15-28' },
            { id: 'chunk-3', label: 'Days 29-42' },
            { id: 'chunk-4', label: 'Days 43-56' },
            { id: 'chunk-5', label: 'Days 57-70' }
          ].map(r => (
            <button
              key={r.id}
              onClick={() => setSelectedRange(r.id)}
              className={`px-2.5 py-1 rounded-xl font-bold transition-all ${
                selectedRange === r.id
                  ? 'bg-theme-accent text-theme-accentBtnText shadow-sm'
                  : 'text-theme-muted hover:text-theme-text'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Summary KPI Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-3 flex items-center justify-between">
          <div>
            <div className="text-[11px] text-theme-muted font-medium">100% Complete Days</div>
            <div className="text-lg font-bold font-mono text-emerald-500">{fullyDoneDays} <span className="text-xs text-theme-muted font-normal">Days</span></div>
          </div>
          <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-3 flex items-center justify-between">
          <div>
            <div className="text-[11px] text-theme-muted font-medium">Partially Done Days</div>
            <div className="text-lg font-bold font-mono text-amber-500">{partiallyDoneDays} <span className="text-xs text-theme-muted font-normal">Days</span></div>
          </div>
          <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500">
            <Clock className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-3 flex items-center justify-between">
          <div>
            <div className="text-[11px] text-theme-muted font-medium">Untouched Days</div>
            <div className="text-lg font-bold font-mono text-theme-text">{untouchedDays} <span className="text-xs text-theme-muted font-normal">Days</span></div>
          </div>
          <div className="w-8 h-8 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400">
            <Calendar className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-3 flex items-center justify-between">
          <div>
            <div className="text-[11px] text-theme-muted font-medium">Curriculum Target</div>
            <div className="text-lg font-bold font-mono text-theme-accentText">70 <span className="text-xs text-theme-muted font-normal">Days</span></div>
          </div>
          <div className="w-8 h-8 rounded-xl bg-theme-accentSub border border-theme-accentBorder flex items-center justify-center text-theme-accentText">
            <Target className="w-4 h-4 text-theme-accent" />
          </div>
        </div>
      </div>

      {/* Main Interactive Bar Graph */}
      <div className="space-y-3">
        {/* Graph Legend & Tip */}
        <div className="flex flex-wrap items-center justify-between text-xs text-theme-muted">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-md bg-emerald-500" />
              <span>Full Day Complete (4/4 Goals: 2 Lectures + 2 Practice)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-md bg-amber-500" />
              <span>Partial Progress (1-3 Goals)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-md bg-zinc-800" />
              <span>0% Done</span>
            </div>
          </div>
          <span className="text-[11px] text-theme-muted hidden sm:inline">
            Hover over any bar to inspect daily targets • Click to jump to that day
          </span>
        </div>

        {/* The Bars Container (Scrollable on mobile/large view) */}
        <div className="bg-[#090d13] border border-[#21262d] rounded-2xl p-4 sm:p-6 overflow-x-auto">
          <div className="min-w-[650px] flex items-end justify-between gap-1 sm:gap-1.5 h-48 pt-6 pb-2">
            {displayedDays.map(day => {
              const isActive = day.dayNumber === activeDayNumber;
              const isHovered = hoveredDay?.dayNumber === day.dayNumber;

              // Compute bar height percentage (0% to 100%)
              const barHeightPct = day.completed === 0 ? 6 : Math.max(day.pct, 18);

              // Bar color
              const barColor = day.isFull
                ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.4)]'
                : day.completed > 0
                ? 'bg-gradient-to-t from-amber-600 to-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.3)]'
                : 'bg-zinc-800/80 hover:bg-zinc-700';

              return (
                <div
                  key={day.dayNumber}
                  className="flex-1 flex flex-col items-center h-full justify-end cursor-pointer group"
                  onMouseEnter={() => setHoveredDay(day)}
                  onMouseLeave={() => setHoveredDay(null)}
                  onClick={() => setActiveDayNumber(day.dayNumber)}
                >
                  {/* Tooltip on active hover */}
                  <div className="h-6 flex items-center justify-center">
                    {(isHovered || (isActive && !hoveredDay)) && (
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/90 text-white border border-zinc-700 whitespace-nowrap shadow-md -translate-y-1">
                        {day.completed}/{day.total}
                      </span>
                    )}
                  </div>

                  {/* Vertical Progress Bar */}
                  <div className="w-full max-w-[18px] bg-zinc-900 rounded-t-lg h-36 flex items-end overflow-hidden p-0.5">
                    <div
                      className={`w-full rounded-t-md transition-all duration-300 ${barColor} ${
                        isActive ? 'ring-2 ring-white/80' : ''
                      } ${isHovered ? 'scale-105 brightness-125' : ''}`}
                      style={{ height: `${barHeightPct}%` }}
                    />
                  </div>

                  {/* Day Label below */}
                  <span
                    className={`text-[10px] font-mono mt-2 transition-colors ${
                      isActive
                        ? 'text-white font-bold'
                        : isHovered
                        ? 'text-cyan-400 font-bold'
                        : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}
                  >
                    D{day.dayNumber}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected / Hovered Day Inspection Drawer Card */}
      {previewDay && (
        <div className="bg-theme-cardSub border border-theme-border rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-lg bg-theme-accent text-theme-accentBtnText">
                Day {previewDay.dayNumber} of 70
              </span>
              <span className="text-xs text-theme-muted font-mono">
                {previewDay.dateDisplay}
              </span>
              {previewDay.isFull ? (
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Day Fully Complete!</span>
                </span>
              ) : previewDay.completed > 0 ? (
                <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                  {previewDay.completed} of {previewDay.total} Targets Done ({previewDay.pct}%)
                </span>
              ) : (
                <span className="text-[11px] text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-md">
                  Not Started
                </span>
              )}
            </div>

            <h4 className="text-sm sm:text-base font-bold text-theme-text truncate">
              {previewDay.title}
            </h4>

            {/* Tasks list preview */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              {previewDay.tasks.map((task, idx) => (
                <span
                  key={task.id || idx}
                  className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl border text-[11px] ${
                    task.completed
                      ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400 font-medium'
                      : 'bg-theme-card border-theme-border text-theme-muted'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${task.completed ? 'bg-emerald-400' : 'bg-zinc-600'}`} />
                  <span className="truncate max-w-[180px] sm:max-w-[260px]">{task.title}</span>
                  {task.completed && <span>✓</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={() => setActiveDayNumber(previewDay.dayNumber)}
              className="px-3.5 py-1.5 rounded-xl bg-theme-accent hover:opacity-90 text-theme-accentBtnText font-bold text-xs transition-all shadow-sm"
            >
              Go to Day {previewDay.dayNumber} Targets
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
