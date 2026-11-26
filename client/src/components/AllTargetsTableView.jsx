import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  ExternalLink, 
  Code2, 
  Coffee, 
  Search,
  Filter
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function AllTargetsTableView({ onOpenNotes }) {
  const { days, toggleTask, setActiveDayNumber } = useLearning();
  const [filterType, setFilterType] = useState('all'); // 'all', 'pending', 'completed', 'java', 'practice'
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
    if (filterType === 'practice' && item.type !== 'practice') return false;

    if (search.trim()) {
      const q = search.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchPattern = (item.pattern || '').toLowerCase().includes(q);
      if (!matchTitle && !matchPattern) return false;
    }

    return true;
  });

  return (
    <div className="bg-theme-card border border-theme-border rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-theme-border pb-4">
        <div>
          <h2 className="text-base font-bold text-theme-text">Full 70-Day Target Plan (140 Java Topics + 140 Java Practice Drills)</h2>
          <p className="text-xs text-theme-muted">Search or filter any topic across the complete roadmap</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-theme-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search topic or pattern..."
              className="pl-8 pr-3 py-1.5 bg-theme-cardSub border border-theme-border focus:border-theme-accent rounded-xl text-xs text-theme-text placeholder-theme-muted focus:outline-none w-48 shadow-inner"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-1 bg-theme-cardSub border border-theme-border p-1 rounded-xl text-xs shadow-sm">
            {['all', 'pending', 'completed', 'java', 'practice'].map(f => (
              <button
                key={f}
                onClick={() => setFilterType(f)}
                className={`px-2.5 py-1 rounded-lg font-medium capitalize transition-colors ${
                  filterType === f
                    ? 'bg-theme-accent text-theme-accentBtnText font-bold shadow-theme-glow'
                    : 'text-theme-muted hover:text-theme-text'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table list */}
      <div className="space-y-2 max-h-[550px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-theme-borderSub">
        {filteredTasks.length === 0 ? (
          <div className="py-8 text-center text-xs text-theme-muted">
            No targets match the current filter.
          </div>
        ) : (
          filteredTasks.map(task => (
            <div
              key={`${task.dayNumber}-${task.id}`}
              onClick={() => toggleTask(task.dayNumber, task.id)}
              className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-all ${
                task.completed
                  ? 'bg-emerald-500/5 dark:bg-emerald-950/15 border-emerald-500/25 opacity-90'
                  : 'bg-theme-cardSub border-theme-border hover:border-theme-borderSub text-theme-text shadow-sm'
              }`}
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0 mr-3">
                <button
                  type="button"
                  className="flex-shrink-0"
                >
                  {task.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Circle className="w-4 h-4 text-theme-muted hover:text-emerald-500" />
                  )}
                </button>

                {/* Day pill */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDayNumber(task.dayNumber);
                  }}
                  className="px-2 py-0.5 rounded-lg bg-theme-accentSub text-[11px] font-mono font-bold text-theme-accentText border border-theme-accentBorder hover:bg-theme-accent hover:text-theme-accentBtnText transition-colors"
                  title="Go to this day"
                >
                  Day {task.dayNumber}
                </button>

                {/* Type icon */}
                {task.type === 'java' ? (
                  <span className="text-amber-500 text-xs flex items-center space-x-1 flex-shrink-0">
                    <Code2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline font-mono">Java</span>
                  </span>
                ) : (
                  <span className="text-amber-400 text-xs flex items-center space-x-1 flex-shrink-0">
                    <Coffee className="w-3.5 h-3.5 text-amber-400" />
                    <span className="hidden sm:inline font-mono">Practice</span>
                  </span>
                )}

                <span className={`text-xs font-medium truncate ${task.completed ? 'line-through text-theme-muted' : 'text-theme-text'}`}>
                  {task.title}
                </span>
              </div>

              {/* Right side info & link */}
              <div className="flex items-center space-x-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                {task.pattern && (
                  <span className="text-[10px] text-theme-muted font-mono hidden md:inline">
                    {task.pattern}
                  </span>
                )}

                {task.link && (
                  <a
                    href={task.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-theme-muted hover:text-theme-accentText rounded"
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
