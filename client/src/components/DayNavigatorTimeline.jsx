import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function DayNavigatorTimeline() {
  const { days, activeDayNumber, setActiveDayNumber } = useLearning();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-gray-400 px-1">
        <span className="font-semibold uppercase tracking-wider text-[11px] text-emerald-400">
          70-Day Schedule Timeline (Starting 21 Nov 2026)
        </span>
        <span className="text-gray-400">Click any day to jump to its targets</span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-[#16241D]">
        {days.map((d) => {
          const isActive = d.dayNumber === activeDayNumber;

          return (
            <button
              key={d.dayNumber}
              onClick={() => setActiveDayNumber(d.dayNumber)}
              className={`flex-shrink-0 flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all min-w-[80px] select-none ${
                isActive
                  ? 'bg-[#0E2017] border-emerald-500/80 text-white shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)] scale-105'
                  : d.isDayComplete
                  ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300 hover:border-emerald-400'
                  : d.isDayInProgress
                  ? 'bg-amber-950/20 border-amber-500/30 text-amber-300 hover:border-amber-400'
                  : 'bg-[#0A100D] border-[#16241D] text-gray-400 hover:text-gray-200 hover:border-[#1E3127]'
              }`}
            >
              {/* Day Number */}
              <div className="flex items-center space-x-1">
                <span className="text-xs font-bold font-mono">Day {d.dayNumber}</span>
                {d.isDayComplete && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
              </div>

              {/* Date */}
              <span className={`text-[10px] mt-0.5 font-medium ${isActive ? 'text-emerald-300' : 'text-gray-400'}`}>
                {d.dateShort}
              </span>

              {/* Progress mini indicator */}
              <div className="w-full h-1 bg-[#14201A] rounded-full mt-1.5 overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    d.isDayComplete ? 'bg-emerald-400' : isActive ? 'bg-emerald-500' : 'bg-amber-400'
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
