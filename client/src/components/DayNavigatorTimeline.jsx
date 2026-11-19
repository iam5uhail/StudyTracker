import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function DayNavigatorTimeline() {
  const { days, activeDayNumber, setActiveDayNumber } = useLearning();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-gray-400 px-1">
        <span className="font-semibold uppercase tracking-wider text-[11px] text-gray-300">
          Day-by-Day Schedule (24 Days)
        </span>
        <span>Click any day to view its targets</span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-slate-700">
        {days.map((d) => {
          const isActive = d.dayNumber === activeDayNumber;

          return (
            <button
              key={d.dayNumber}
              onClick={() => setActiveDayNumber(d.dayNumber)}
              className={`flex-shrink-0 flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all min-w-[76px] select-none ${
                isActive
                  ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30 scale-105'
                  : d.isDayComplete
                  ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300 hover:border-emerald-400'
                  : d.isDayInProgress
                  ? 'bg-amber-950/30 border-amber-500/40 text-amber-300 hover:border-amber-400'
                  : 'bg-[#131B2E] border-slate-700/80 text-gray-400 hover:text-gray-200 hover:border-slate-600'
              }`}
            >
              {/* Day Number */}
              <div className="flex items-center space-x-1">
                <span className="text-xs font-bold font-mono">Day {d.dayNumber}</span>
                {d.isDayComplete && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
              </div>

              {/* Date */}
              <span className={`text-[10px] mt-0.5 font-medium ${isActive ? 'text-indigo-200' : 'text-gray-400'}`}>
                {d.dateDisplay}
              </span>

              {/* Progress mini indicator */}
              <div className="w-full h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    d.isDayComplete ? 'bg-emerald-400' : isActive ? 'bg-white' : 'bg-amber-400'
                  }`}
                  style={{ width: `${(d.completedTasks / d.totalTasks) * 100}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
