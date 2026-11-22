import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  ExternalLink, 
  FileText, 
  Code2, 
  Brain, 
  ChevronRight, 
  ChevronLeft, 
  CheckCheck, 
  Video 
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import DSAPracticeCard from './DSAPracticeCard';

export default function DayTargetCard({ onOpenNotes }) {
  const { activeDay, activeDayNumber, setActiveDayNumber, toggleTask, toggleAllDayTasks, days } = useLearning();

  if (!activeDay) return null;

  const javaTasks = activeDay.tasks.filter(t => t.type === 'java');
  const dsaTasks = activeDay.tasks.filter(t => t.type === 'dsa');
  const isAllComplete = activeDay.isDayComplete;

  return (
    <div className="bg-[#0D1411] border border-[#16241D] rounded-2xl p-5 sm:p-6 shadow-sm space-y-6">
      {/* Day Header with Navigation arrows */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#16241D] pb-4">
        <div className="flex items-center space-x-3.5">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col items-center justify-center text-emerald-400 font-mono shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]">
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
              Scheduled Date: <strong className="text-emerald-300 font-medium">{activeDay.dateDisplay}</strong> • {activeDay.completedTasks} of {activeDay.totalTasks} goals completed
            </p>
          </div>
        </div>

        {/* Prev / Next & Mark All button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => toggleAllDayTasks(activeDay.dayNumber, !isAllComplete)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              isAllComplete
                ? 'bg-[#14201A] border-[#1E3127] text-gray-400 hover:text-white'
                : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25'
            }`}
          >
            <CheckCheck className="w-3.5 h-3.5" />
            <span>{isAllComplete ? 'Uncheck All' : 'Mark Day Complete'}</span>
          </button>

          <div className="flex items-center space-x-1 pl-2 border-l border-[#16241D]">
            <button
              disabled={activeDayNumber <= 1}
              onClick={() => setActiveDayNumber(activeDayNumber - 1)}
              className="p-1.5 rounded-xl border border-[#16241D] bg-[#080D0A] text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Previous Day"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={activeDayNumber >= days.length}
              onClick={() => setActiveDayNumber(activeDayNumber + 1)}
              className="p-1.5 rounded-xl border border-[#16241D] bg-[#080D0A] text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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
          <span>Target 1: 2 Core Java Topics (From Video Course)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {javaTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => toggleTask(activeDay.dayNumber, task.id)}
              className={`group flex items-start justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                task.completed
                  ? 'bg-emerald-950/20 border-emerald-500/30 text-gray-400'
                  : 'bg-[#080D0A] border-[#16241D] hover:border-amber-400/50 text-gray-100'
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
                  <span className="text-[11px] text-gray-500 mt-0.5 flex items-center space-x-1 font-mono">
                    <Video className="w-3 h-3 text-amber-400/80" />
                    <span>Core Java Course Video</span>
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
                    : 'bg-[#14201A] border-[#1E3127] text-gray-400 hover:text-white'
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

      {/* Target 2: Daily LeetCode-Style DSA Problem in JavaScript */}
      <DSAPracticeCard />
    </div>
  );
}
