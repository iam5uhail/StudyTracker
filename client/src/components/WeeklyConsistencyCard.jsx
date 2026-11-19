import React from 'react';
import { BookOpen, CheckCircle, Clock, CalendarDays } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function WeeklyConsistencyCard() {
  const { stats, dailyLogs } = useLearning();

  // Generate last 7 days (Mon to Sun or last 7 days window)
  const today = new Date();
  const days = [];
  const logDateSet = new Set(dailyLogs.map(l => l.date));

  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    const dateStr = d.toISOString().slice(0, 10);
    const dayName = d.toLocaleDateString('en-US', { weekday: 'narrow' }); // M, T, W...
    const isToday = i === 0;
    const hasStudied = logDateSet.has(dateStr);
    days.push({ dayName, dateStr, isToday, hasStudied });
  }

  return (
    <div className="bg-[#1E293B]/70 border border-slate-700/80 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
      {/* Top: Weekly Activity Rings */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CalendarDays className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Daily Consistency</h3>
              <p className="text-xs text-gray-400">Study activity over the past 7 days</p>
            </div>
          </div>
          <span className="text-xs text-emerald-400 font-semibold">Active Streak</span>
        </div>

        {/* 7-day Bubbles */}
        <div className="flex items-center justify-between my-4 px-2">
          {days.map((d, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-1.5">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  d.hasStudied
                    ? 'bg-emerald-500 text-black shadow-sm shadow-emerald-500/30'
                    : d.isToday
                    ? 'border-2 border-dashed border-indigo-400 text-indigo-300 bg-indigo-500/10'
                    : 'bg-slate-800 text-gray-500 border border-slate-700'
                }`}
                title={d.hasStudied ? `Studied on ${d.dateStr}` : `No session on ${d.dateStr}`}
              >
                {d.hasStudied ? '✓' : d.dayName}
              </div>
              <span className={`text-[10px] ${d.isToday ? 'text-indigo-400 font-bold' : 'text-gray-400'}`}>
                {d.dayName}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Overview Stat Chips */}
      <div className="grid grid-cols-3 gap-2 mt-2 pt-3 border-t border-slate-800 text-center">
        <div className="bg-slate-900/60 rounded-xl p-2.5 border border-slate-800">
          <div className="flex items-center justify-center space-x-1 text-gray-400 text-[11px] mb-1">
            <BookOpen className="w-3 h-3 text-indigo-400" />
            <span>Subjects</span>
          </div>
          <span className="text-base font-extrabold text-white">{stats.totalSubjects}</span>
        </div>

        <div className="bg-slate-900/60 rounded-xl p-2.5 border border-slate-800">
          <div className="flex items-center justify-center space-x-1 text-gray-400 text-[11px] mb-1">
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            <span>Topics Done</span>
          </div>
          <span className="text-base font-extrabold text-white">
            {stats.completedTopics} <span className="text-xs text-gray-400 font-normal">/ {stats.totalTopics}</span>
          </span>
        </div>

        <div className="bg-slate-900/60 rounded-xl p-2.5 border border-slate-800">
          <div className="flex items-center justify-center space-x-1 text-gray-400 text-[11px] mb-1">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>Hours</span>
          </div>
          <span className="text-base font-extrabold text-white">{stats.totalHours}</span>
        </div>
      </div>
    </div>
  );
}
