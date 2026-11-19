import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  ExternalLink, 
  Code2, 
  Brain, 
  Search,
  Filter
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function AllTargetsTableView({ onOpenNotes }) {
  const { days, toggleTask, setActiveDayNumber } = useLearning();
  const [filterType, setFilterType] = useState('all'); // 'all', 'pending', 'completed', 'java', 'dsa'
  const [search, setSearch] = useState('');

  // Flatten tasks with day metadata
  const allTasks = [];
  days.forEach(day => {
    day.tasks.forEach(task => {
      allTasks.push({
        ...task,
        dayNumber: day.dayNumber,
        dateDisplay: day.dateDisplay
      });
    });
  });

  const filteredTasks = allTasks.filter(item => {
    if (filterType === 'pending' && item.completed) return false;
    if (filterType === 'completed' && !item.completed) return false;
    if (filterType === 'java' && item.type !== 'java') return false;
    if (filterType === 'dsa' && item.type !== 'dsa') return false;

    if (search.trim()) {
      const q = search.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchPattern = (item.pattern || '').toLowerCase().includes(q);
      if (!matchTitle && !matchPattern) return false;
    }

    return true;
  });

  return (
    <div className="bg-[#131B2E] border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-base font-bold text-white">Full 24-Day Target Plan</h2>
          <p className="text-xs text-gray-400">All 48 Java Topics + 24 DSA Pattern Questions at a glance</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search topic or pattern..."
              className="pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl text-xs text-gray-200 placeholder-gray-500 focus:outline-none w-44"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-1 bg-slate-900 border border-slate-700 p-1 rounded-xl text-xs">
            {['all', 'pending', 'completed', 'java', 'dsa'].map(f => (
              <button
                key={f}
                onClick={() => setFilterType(f)}
                className={`px-2.5 py-1 rounded-lg font-medium capitalize transition-colors ${
                  filterType === f
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table list */}
      <div className="space-y-2 max-h-[550px] overflow-y-auto pr-1">
        {filteredTasks.length === 0 ? (
          <div className="py-8 text-center text-xs text-gray-500">
            No targets match the current filter.
          </div>
        ) : (
          filteredTasks.map(task => (
            <div
              key={`${task.dayNumber}-${task.id}`}
              onClick={() => toggleTask(task.dayNumber, task.id)}
              className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                task.completed
                  ? 'bg-slate-950/40 border-slate-800/80 text-gray-500'
                  : 'bg-slate-900/80 border-slate-700/80 hover:border-slate-600 text-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0 mr-3">
                <button
                  type="button"
                  className="flex-shrink-0"
                >
                  {task.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Circle className="w-4 h-4 text-gray-500 hover:text-indigo-400" />
                  )}
                </button>

                {/* Day pill */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDayNumber(task.dayNumber);
                  }}
                  className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono font-bold text-indigo-300 border border-slate-700 hover:bg-indigo-600 hover:text-white transition-colors"
                  title="Go to this day"
                >
                  Day {task.dayNumber}
                </button>

                {/* Type icon */}
                {task.type === 'java' ? (
                  <span className="text-amber-400 text-xs flex items-center space-x-1 flex-shrink-0">
                    <Code2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline font-mono">Java</span>
                  </span>
                ) : (
                  <span className="text-emerald-400 text-xs flex items-center space-x-1 flex-shrink-0">
                    <Brain className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline font-mono">DSA</span>
                  </span>
                )}

                <span className={`text-xs font-medium truncate ${task.completed ? 'line-through text-gray-500' : 'text-gray-100'}`}>
                  {task.title}
                </span>
              </div>

              {/* Right side info & link */}
              <div className="flex items-center space-x-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                {task.pattern && (
                  <span className="text-[10px] text-gray-400 font-mono hidden md:inline">
                    {task.pattern}
                  </span>
                )}

                {task.link && (
                  <a
                    href={task.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-gray-400 hover:text-emerald-400 rounded"
                    title="Open on LeetCode"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
