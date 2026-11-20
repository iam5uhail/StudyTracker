import React, { useRef, useEffect } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function DayNavigatorTimeline() {
  const { days, activeDayNumber, setActiveDayNumber } = useLearning();
  const scrollContainerRef = useRef(null);
  const activeBtnRef = useRef(null);

  // Auto-scroll the active day button into the center of the viewport smoothly
  useEffect(() => {
    if (activeBtnRef.current && scrollContainerRef.current) {
      activeBtnRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [activeDayNumber]);

  // Smooth scroll left and right handlers
  const scrollTimeline = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-theme-card border border-theme-border rounded-3xl p-4 sm:p-5 shadow-sm space-y-3">
      {/* Top Header Row with title, instructions, and navigation arrows */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-theme-accent animate-pulse" />
          <span className="font-bold uppercase tracking-wider text-xs text-theme-accentText">
            70-Day Schedule Timeline
          </span>
          <span className="hidden sm:inline text-xs text-theme-muted">
            â€¢ Starts 21 Nov 2026
          </span>
        </div>

        {/* Scroll Controls & Indicator */}
        <div className="flex items-center space-x-2">
          <span className="text-[11px] text-theme-muted hidden md:inline">
            Click any day to jump
          </span>

          <div className="flex items-center space-x-1">
            <button
              onClick={() => scrollTimeline('left')}
              className="p-1.5 rounded-xl border border-theme-border bg-theme-cardSub text-theme-secondary hover:text-theme-text hover:bg-theme-cardHover transition-colors"
              title="Scroll Left"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTimeline('right')}
              className="p-1.5 rounded-xl border border-theme-border bg-theme-cardSub text-theme-secondary hover:text-theme-text hover:bg-theme-cardHover transition-colors"
              title="Scroll Right"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Area with generous vertical padding to prevent ANY card border clipping */}
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-2.5 overflow-x-auto py-3.5 px-1.5 scrollbar-thin scrollbar-thumb-theme-borderSub scrollbar-track-theme-card"
      >
        {days.map((d) => {
          const isActive = d.dayNumber === activeDayNumber;
          const pct = d.totalTasks > 0 ? (d.completedTasks / d.totalTasks) * 100 : 0;

          return (
            <button
              key={d.dayNumber}
              ref={isActive ? activeBtnRef : null}
              onClick={() => setActiveDayNumber(d.dayNumber)}
              className={`flex-shrink-0 flex flex-col justify-between w-[92px] sm:w-[98px] h-[78px] p-2.5 rounded-2xl border transition-all text-left select-none relative group ${
                isActive
                  ? 'bg-theme-cardSub border-2 border-theme-accent text-theme-text shadow-theme-glow ring-2 ring-theme-accent/30'
                  : d.isDayComplete
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 hover:border-emerald-400'
                  : d.isDayInProgress
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-400 hover:border-amber-400'
                  : 'bg-theme-cardSub/60 border-theme-border text-theme-muted hover:text-theme-text hover:border-theme-borderSub hover:bg-theme-cardSub'
              }`}
            >
              {/* Day Label & Completed Badge */}
              <div className="flex items-center justify-between w-full">
                <span className={`text-xs font-bold font-mono ${isActive ? 'text-theme-text' : ''}`}>
                  Day {d.dayNumber}
                </span>

                {d.isDayComplete ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                ) : d.isDayInProgress ? (
                  <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                ) : null}
              </div>

              {/* Short Date */}
              <div className={`text-[10px] font-semibold ${isActive ? 'text-theme-accentText' : 'text-theme-muted'}`}>
                {d.dateShort}
              </div>

              {/* Mini Progress Bar inside the card with clean breathing room */}
              <div className="w-full h-1.5 bg-theme-border rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    d.isDayComplete 
                      ? 'bg-emerald-400' 
                      : isActive 
                      ? 'bg-theme-accent' 
                      : d.isDayInProgress 
                      ? 'bg-amber-400' 
                      : 'bg-transparent'
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
