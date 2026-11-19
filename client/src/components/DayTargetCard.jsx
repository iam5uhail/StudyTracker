import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  ExternalLink, 
  FileText, 
  Code2, 
  Brain, 
  ChevronRight, 
  ChevronLeft,
  CheckCheck
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function DayTargetCard({ onOpenNotes }) {
  const { activeDay, activeDayNumber, setActiveDayNumber, toggleTask, toggleAllDayTasks, days } = useLearning();

  if (!activeDay) return null;

  const javaTasks = activeDay.tasks.filter(t => t.type === 'java');
  const dsaTasks = activeDay.tasks.filter(t => t.type === 'dsa');
  const isAllComplete = activeDay.isDayComplete;

  return (
    <div className="bg-[#131B2E] border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-sm space-y-6">
      {/* Day Header with Navigation arrows */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex flex-col items-center justify-center text-indigo-400 font-mono">
            <span className="text-[10px] uppercase font-bold text-gray-400">Day</span>
            <span className="text-lg font-extrabold text-white leading-none">{activeDay.dayNumber}</span>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-bold text-white tracking-tight">{activeDay.title}</h2>
              {isAllComplete && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Target Finished ✓
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              Scheduled Date: <strong className="text-indigo-300">{activeDay.dateDisplay}</strong> • {activeDay.completedTasks} of {activeDay.totalTasks} goals completed
            </p>
          </div>
        </div>

        {/* Prev / Next & Mark All button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => toggleAllDayTasks(activeDay.dayNumber, !isAllComplete)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              isAllComplete
                ? 'bg-slate-800 border-slate-700 text-gray-400 hover:text-white'
                : 'bg-emerald-600/20 border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30'
            }`}
          >
            <CheckCheck className="w-3.5 h-3.5" />
            <span>{isAllComplete ? 'Uncheck All' : 'Mark Day Complete'}</span>
          </button>

          <div className="flex items-center space-x-1 pl-2 border-l border-slate-800">
            <button
              disabled={activeDayNumber <= 1}
              onClick={() => setActiveDayNumber(activeDayNumber - 1)}
              className="p-1.5 rounded-xl border border-slate-700 bg-slate-900 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
              title="Previous Day"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={activeDayNumber >= days.length}
              onClick={() => setActiveDayNumber(activeDayNumber + 1)}
              className="p-1.5 rounded-xl border border-slate-700 bg-slate-900 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
              title="Next Day"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 1. Target: 2 Java Topics */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-300">
          <Code2 className="w-4 h-4 text-amber-400" />
          <span>Target 1: 2 Core Java Topics (From Course Folder)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {javaTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => toggleTask(activeDay.dayNumber, task.id)}
              className={`group flex items-start justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                task.completed
                  ? 'bg-emerald-950/20 border-emerald-500/30 text-gray-400'
                  : 'bg-slate-900/90 border-slate-700/80 hover:border-amber-400/50 text-gray-100'
              }`}
            >
              <div className="flex items-start space-x-3 flex-1 min-w-0 mr-2">
                <button
                  type="button"
                  className="mt-0.5 text-amber-400 flex-shrink-0"
                >
                  {task.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-500 group-hover:text-amber-400" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <span className={`text-xs sm:text-sm font-semibold leading-snug block ${
                    task.completed ? 'line-through text-gray-500' : 'text-gray-100'
                  }`}>
                    {task.title}
                  </span>
                  <span className="text-[11px] text-gray-500 mt-0.5 block font-mono">
                    Video & Notes Topic
                  </span>
                </div>
              </div>

              {/* Notes button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenNotes(activeDay.dayNumber, task);
                }}
                className={`p-1.5 rounded-lg border text-xs flex items-center space-x-1 flex-shrink-0 transition-colors ${
                  task.notes
                    ? 'bg-amber-500/15 border-amber-500/30 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-gray-400 hover:text-white'
                }`}
                title="Personal notes for this topic"
              >
                <FileText className="w-3.5 h-3.5" />
                {task.notes && <span className="text-[10px] font-bold">Notes</span>}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Target: 1 Daily DSA Question */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
          <Brain className="w-4 h-4 text-emerald-400" />
          <span>Target 2: 1 Daily Problem (Rising Brain Pattern-Wise Sheet)</span>
        </div>

        {dsaTasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(activeDay.dayNumber, task.id)}
            className={`group flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
              task.completed
                ? 'bg-emerald-950/20 border-emerald-500/30 text-gray-400'
                : 'bg-slate-900/90 border-slate-700/80 hover:border-emerald-500/50 text-gray-100'
            }`}
          >
            <div className="flex items-center space-x-3 flex-1 min-w-0 mr-3">
              <button
                type="button"
                className="text-emerald-400 flex-shrink-0"
              >
                {task.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-500 group-hover:text-emerald-400" />
                )}
              </button>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-semibold truncate ${
                    task.completed ? 'line-through text-gray-500' : 'text-gray-100'
                  }`}>
                    {task.title}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${
                    task.difficulty === 'Easy'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      : task.difficulty === 'Hard'
                      ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                      : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                  }`}>
                    {task.difficulty}
                  </span>
                </div>

                <span className="text-[11px] text-gray-400 mt-0.5 font-mono">
                  Pattern: <strong className="text-gray-300">{task.pattern}</strong>
                </span>
              </div>
            </div>

            {/* Right side: External LeetCode link + Notes button */}
            <div className="flex items-center space-x-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => onOpenNotes(activeDay.dayNumber, task)}
                className={`p-1.5 rounded-lg border text-xs flex items-center space-x-1 transition-colors ${
                  task.notes
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                    : 'bg-slate-800 border-slate-700 text-gray-400 hover:text-white'
                }`}
                title="Notes / approach"
              >
                <FileText className="w-3.5 h-3.5" />
                {task.notes && <span className="text-[10px] font-bold">Notes</span>}
              </button>

              {task.link && (
                <a
                  href={task.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30 text-xs font-semibold transition-colors"
                >
                  <span>Solve</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
