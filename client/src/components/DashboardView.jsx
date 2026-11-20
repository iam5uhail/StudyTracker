import React from 'react';
import { 
  Target, 
  Calendar, 
  CheckCircle2, 
  Circle, 
  FileText, 
  ExternalLink, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Flame, 
  Code2, 
  Brain,
  Clock,
  ChevronRight,
  Trophy
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import DayNavigatorTimeline from './DayNavigatorTimeline';

export default function DashboardView({ onOpenNotes }) {
  const { 
    activeDay, 
    activeDayNumber, 
    setActiveDayNumber, 
    toggleTask, 
    toggleDayComplete, 
    days,
    daysWithDates,
    progressStats
  } = useLearning();

  if (!activeDay) return null;

  const allDaysList = daysWithDates || days || [];
  const currentIdx = (activeDayNumber || 1) - 1;
  const tomorrowDay = allDaysList[currentIdx + 1] || null;

  const totalTasks = activeDay.tasks.length;
  const completedTasks = activeDay.tasks.filter(t => t.completed).length;
  const isDayDone = totalTasks > 0 && completedTasks === totalTasks;
  const dayPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* 1. Hero Goal Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-theme-border bg-theme-card p-6 sm:p-8 shadow-sm">
        {/* Ambient glow accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-theme-accent/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-theme-accentSub text-theme-accentText border border-theme-accentBorder">
                <Target className="w-3.5 h-3.5" />
                <span>Today's Target</span>
              </span>

              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-theme-cardSub text-theme-secondary border border-theme-border">
                <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                <span>Day {activeDay.dayNumber} of 70</span>
              </span>

              <span className="text-xs text-theme-muted font-mono">
                {activeDay.dateDisplay}
              </span>

              {isDayDone && (
                <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-theme-accent text-theme-accentBtnText shadow-theme-glow">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Target Completed!</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight">
              {activeDay.title}
            </h1>

            <p className="text-sm text-theme-muted max-w-2xl leading-relaxed">
              Master <strong className="text-theme-accentText">2 Core Java Topics</strong> + solve <strong className="text-theme-accentText">1 Rising Brain Pattern DSA Problem</strong>. Check off each goal as you finish your study session today.
            </p>
          </div>

          {/* Quick Progress Ring & Day Completion Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-theme-cardSub border border-theme-border rounded-2xl p-4 sm:p-5 flex-shrink-0 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    stroke="var(--border-sub)"
                    strokeWidth="6"
                    fill="transparent"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    stroke="var(--accent)"
                    strokeWidth="6"
                    strokeDasharray={2 * Math.PI * 26}
                    strokeDashoffset={2 * Math.PI * 26 - (dayPercent / 100) * (2 * Math.PI * 26)}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-500 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-sm text-theme-text font-mono">
                  {completedTasks}/{totalTasks}
                </div>
              </div>

              <div>
                <div className="text-xs text-theme-muted font-medium">Day Progress</div>
                <div className="text-lg font-extrabold text-theme-text font-mono">{dayPercent}%</div>
                <div className="text-[11px] text-theme-muted">
                  {totalTasks - completedTasks === 0 ? 'All done!' : `${totalTasks - completedTasks} left for today`}
                </div>
              </div>
            </div>

            <button
              onClick={() => toggleDayComplete(activeDay.dayNumber)}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
                isDayDone
                  ? 'bg-theme-card border border-theme-border text-theme-muted hover:text-theme-text'
                  : 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow hover:opacity-90'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isDayDone ? 'Mark as Incomplete' : 'Mark Day Complete'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Sleek 70-Day Timeline Navigator (No box cutting, generous padding, smooth slide) */}
      <DayNavigatorTimeline />

      {/* 3. Daily Targets Checklist */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-theme-accentSub border border-theme-accentBorder flex items-center justify-center text-theme-accentText">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-theme-text">Daily Tasks & Checklist</h3>
              <p className="text-xs text-theme-muted">Day {activeDay.dayNumber} Targets â€¢ Check off to record your daily progress</p>
            </div>
          </div>

          {/* Quick Prev / Next Day navigation */}
          <div className="flex items-center space-x-2 text-xs">
            <button
              disabled={activeDay.dayNumber <= 1}
              onClick={() => setActiveDayNumber(activeDay.dayNumber - 1)}
              className="px-3 py-1.5 rounded-xl border border-theme-border bg-theme-cardSub text-theme-secondary hover:text-theme-text hover:bg-theme-cardHover disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center space-x-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Prev Day</span>
            </button>

            <span className="font-mono text-theme-muted px-1 font-semibold">
              {activeDay.dayNumber} / 70
            </span>

            <button
              disabled={activeDay.dayNumber >= 70}
              onClick={() => setActiveDayNumber(activeDay.dayNumber + 1)}
              className="px-3 py-1.5 rounded-xl border border-theme-border bg-theme-cardSub text-theme-secondary hover:text-theme-text hover:bg-theme-cardHover disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center space-x-1"
            >
              <span className="hidden sm:inline">Next Day</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Task Cards List */}
        <div className="space-y-3">
          {activeDay.tasks.map((task) => {
            const isDone = Boolean(task.completed);
            const isJava = task.type === 'java';
            const isDsa = task.type === 'dsa';

            return (
              <div
                key={task.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all select-none ${
                  isDone
                    ? 'bg-theme-cardSub/60 border-theme-border opacity-90'
                    : 'bg-theme-card border-theme-border hover:border-theme-borderSub shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  {/* Left: Checkbox + Badges + Title */}
                  <div className="flex items-start space-x-3.5 flex-1 cursor-pointer" onClick={() => toggleTask(activeDay.dayNumber, task.id)}>
                    <button
                      type="button"
                      className="mt-0.5 flex-shrink-0 transition-transform active:scale-95"
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-5 h-5 text-theme-accent" />
                      ) : (
                        <Circle className="w-5 h-5 text-theme-muted hover:text-theme-text" />
                      )}
                    </button>

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        {isJava && (
                          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-500 border border-amber-500/30">
                            <Code2 className="w-3 h-3" />
                            <span>Core Java â€¢ Video #{task.videoNumber || 1}</span>
                          </span>
                        )}

                        {isDsa && (
                          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-theme-accentSub text-theme-accentText border border-theme-accentBorder">
                            <Brain className="w-3 h-3" />
                            <span>Rising Brain DSA â€¢ {task.topic}</span>
                          </span>
                        )}

                        {isDsa && task.difficulty && (
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                            task.difficulty.toLowerCase() === 'easy'
                              ? 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30'
                              : task.difficulty.toLowerCase() === 'hard'
                              ? 'bg-rose-500/15 text-rose-500 border border-rose-500/30'
                              : 'bg-amber-500/15 text-amber-500 border border-amber-500/30'
                          }`}>
                            {task.difficulty}
                          </span>
                        )}

                        {isJava && task.duration && (
                          <span className="text-[11px] text-theme-muted font-mono flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>~{task.duration} mins</span>
                          </span>
                        )}
                      </div>

                      <h4 className={`text-sm sm:text-base font-semibold leading-snug ${
                        isDone ? 'line-through text-theme-muted' : 'text-theme-text'
                      }`}>
                        {task.title}
                      </h4>
                    </div>
                  </div>

                  {/* Right: Actions (Solve link & Notes Modal) */}
                  <div className="flex items-center space-x-2 pt-2 sm:pt-0 pl-8 sm:pl-0 border-t sm:border-t-0 border-theme-border">
                    {isDsa && task.url && (
                      <a
                        href={task.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-theme-cardSub hover:bg-theme-cardHover text-theme-secondary hover:text-theme-text border border-theme-border flex items-center space-x-1.5 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-theme-accent" />
                        <span>Solve</span>
                      </a>
                    )}

                    <button
                      onClick={() => onOpenNotes(activeDay.dayNumber, task)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center space-x-1.5 transition-colors ${
                        task.notes
                          ? 'bg-theme-accentSub text-theme-accentText border-theme-accentBorder'
                          : 'bg-theme-cardSub hover:bg-theme-cardHover text-theme-secondary hover:text-theme-text border-theme-border'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5 text-theme-accent" />
                      <span>{task.notes ? 'View Notes' : 'Notes'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Bottom Grid: Tomorrow's Goal Sneak Peek + Study Consistency Tips */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Tomorrow Preview */}
        {tomorrowDay ? (
          <div className="bg-theme-card border border-theme-border rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-theme-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-theme-secondary">
                  Upcoming Tomorrow â€¢ Day {tomorrowDay.dayNumber}
                </span>
              </div>
              <span className="text-xs text-theme-muted font-mono">{tomorrowDay.dateDisplay}</span>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-theme-text">{tomorrowDay.title}</h4>
              <div className="space-y-1.5 text-xs text-theme-muted">
                {tomorrowDay.tasks.map((t, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" />
                    <span className="truncate">{t.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setActiveDayNumber(tomorrowDay.dayNumber)}
              className="text-xs text-theme-accentText hover:opacity-80 font-bold inline-flex items-center space-x-1 pt-2"
            >
              <span>Preview Day {tomorrowDay.dayNumber}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="bg-theme-card border border-theme-border rounded-3xl p-5 sm:p-6 flex items-center justify-center text-center shadow-sm">
            <div>
              <Trophy className="w-8 h-8 text-theme-accent mx-auto mb-2" />
              <h4 className="text-sm font-bold text-theme-text">Final Day of 70-Day Target!</h4>
              <p className="text-xs text-theme-muted mt-1">You have reached the end of the full curriculum roadmap.</p>
            </div>
          </div>
        )}

        {/* Motivational / Discipline Card */}
        <div className="bg-theme-card border border-theme-border rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-3 shadow-sm">
          <div className="flex items-center space-x-2 text-theme-accentText">
            <Flame className="w-4 h-4 text-theme-accent" />
            <span className="text-xs font-bold uppercase tracking-wider text-theme-accentText">
              Discipline & Consistency
            </span>
          </div>

          <p className="text-sm text-theme-secondary italic leading-relaxed">
            "You do not rise to the level of your goals. You fall to the level of your systems. Study 2 topics and 1 DSA question today without fail."
          </p>

          <div className="flex items-center justify-between text-xs text-theme-muted pt-2 border-t border-theme-border">
            <span>Current Streak: <strong className="text-theme-accentText font-mono">{progressStats.streak} Days</strong></span>
            <span>Completed Days: <strong className="text-theme-text font-mono">{progressStats.daysCompleted} / 70</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
