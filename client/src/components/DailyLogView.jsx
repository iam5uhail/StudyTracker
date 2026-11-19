import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, Trash2, Plus, Sparkles, Filter } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function DailyLogView({ onOpenLogModal }) {
  const { dailyLogs, deleteDailyLog } = useLearning();
  const [subjectFilter, setSubjectFilter] = useState('All');

  // Filter logs
  const filteredLogs = dailyLogs.filter(log => {
    if (subjectFilter !== 'All' && log.subjectName !== subjectFilter) return false;
    return true;
  });

  // Extract unique subjects
  const subjectNames = ['All', ...new Set(dailyLogs.map(l => l.subjectName).filter(Boolean))];

  return (
    <div className="bg-[#1E293B]/70 border border-slate-700/80 rounded-2xl p-5 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">Day-by-Day Learning Log</h2>
            <p className="text-xs text-gray-400">Your journal of daily study sessions and key takeaways</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Filter */}
          <div className="relative">
            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-xs text-gray-300 rounded-xl px-3 py-1.5 focus:outline-none"
            >
              {subjectNames.map(name => (
                <option key={name} value={name}>{name === 'All' ? 'All Subjects' : name}</option>
              ))}
            </select>
          </div>

          <button
            onClick={onOpenLogModal}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Log Today's Session</span>
          </button>
        </div>
      </div>

      {/* Timeline Entries */}
      <div className="space-y-3">
        {filteredLogs.length === 0 ? (
          <div className="p-8 text-center text-xs text-gray-500 bg-slate-900/40 rounded-xl border border-slate-800">
            No study sessions logged yet. Click "Log Today's Session" to record what you studied today!
          </div>
        ) : (
          filteredLogs.map((log) => {
            // Format log date
            const dateObj = new Date(log.date);
            const dateDisplay = dateObj.toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric'
            });

            return (
              <div
                key={log.id}
                className="group bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl p-4 transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Date Tag */}
                    <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-md bg-slate-800 text-indigo-300 border border-slate-700">
                      {dateDisplay}
                    </span>

                    {/* Subject Tag */}
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {log.subjectName}
                    </span>

                    {/* Duration */}
                    <span className="text-xs font-mono text-gray-400 flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{log.durationMinutes} mins</span>
                    </span>

                    {/* Rating badge */}
                    {log.rating && (
                      <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                        {log.rating}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      if (confirm('Delete this study log entry?')) deleteDailyLog(log.id);
                    }}
                    className="p-1 text-gray-600 hover:text-rose-400 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Delete log"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Topic Title */}
                <h4 className="text-sm font-semibold text-white mt-1">
                  {log.topicTitle}
                </h4>

                {/* Summary / Notes */}
                {log.summary && (
                  <p className="text-xs text-gray-300 mt-1.5 leading-relaxed bg-slate-800/40 p-2.5 rounded-lg border border-slate-800">
                    "{log.summary}"
                  </p>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
