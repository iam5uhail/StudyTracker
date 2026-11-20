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
    daysWithDates,
    progressStats
  } = useLearning();

  if (!activeDay) return null;

  const currentIdx = activeDayNumber - 1;
  const tomorrowDay = daysWithDates[currentIdx + 1] || null;

  const totalTasks = activeDay.tasks.length;
  const completedTasks = activeDay.tasks.filter(t => t.completed).length;
  const isDayDone = totalTasks > 0 && completedTasks === totalTasks;
  const dayPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* 1. Hero Goal Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-[#16241D] bg-gradient-to-br from-[#0B1510] via-[#09110D] to-[#060A08] p-6 sm:p-8 shadow-xl">
        {/* Ambient glow accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <Target className="w-3.5 h-3.5" />
                <span>Today's Target</span>
              </span>

              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#121E18] text-gray-300 border border-[#1B2F25]">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>Day {activeDay.dayNumber} of 70</span>
              </span>

              <span className="text-xs text-gray-400 font-mono">
                {activeDay.dateDisplay}
              </span>

              {isDayDone && (
                <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500 text-black shadow-[0_0_12px_#10B981]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Target Completed!</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {activeDay.title}
            </h1>

            <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
              Master <strong className="text-emerald-300">2 Core Java Topics</strong> + solve <strong className="text-emerald-300">1 Rising Brain Pattern DSA Problem</strong>. Check off each goal as you finish your study session today.
            </p>
          </div>

          {/* Quick Progress Ring & Day Completion Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#0D1813]/80 border border-[#1B2F25] rounded-2xl p-4 sm:p-5 flex-shrink-0">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    stroke="#14241C"
                    strokeWidth="6"
                    fill="transparent"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    stroke="#10B981"
                    strokeWidth="6"
                    strokeDasharray={2 * Math.PI * 26}
                    strokeDashoffset={2 * Math.PI * 26 - (dayPercent / 100) * (2 * Math.PI * 26)}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-500 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-sm text-white font-mono">
                  {completedTasks}/{totalTasks}
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-400 font-medium">Day Progress</div>
                <div className="text-lg font-bold text-white font-mono">{dayPercent}%</div>
                <div className="text-[11px] text-emerald-400 font-medium">
                  {isDayDone ? 'All goals done 🎉' : `${totalTasks - completedTasks} left for today`}
                </div>
              </div>
            </div>

            <button
              onClick={() => toggleDayComplete(activeDay.dayNumber)}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all ${
                isDayDone
                  ? 'bg-[#15231C] text-emerald-400 border border-emerald-500/30 hover:bg-[#1B2F25]'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold shadow-[0_0_15px_rgba(16,185,129,0.35)]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isDayDone ? 'Reopen Day' : 'Mark Day Complete'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Interactive Day Timeline Navigator */}
      <DayNavigatorTimeline />

      {/* 3. Today's Specific Goals (Java Topics + DSA Problem) */}
      <div className="bg-[#0A100D] border border-[#16241D] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#16241D] pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Daily Tasks & Checklist</h2>
              <p className="text-xs text-gray-400">Day {activeDay.dayNumber} Targets • Check off to record your daily progress</p>
            </div>
          </div>

          {/* Day Switcher Controls */}
          <div className="flex items-center space-x-2 text-xs">
            <button
              onClick={() => setActiveDayNumber(prev => Math.max(1, prev - 1))}
              disabled={activeDayNumber === 1}
              className="px-3 py-1.5 rounded-xl bg-[#0F1713] border border-[#192A20] text-gray-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center space-x-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev Day</span>
            </button>

            <span className="font-mono text-gray-400 px-1">
              {activeDayNumber} / 70
            </span>

            <button
              onClick={() => setActiveDayNumber(prev => Math.min(70, prev + 1))}
              disabled={activeDayNumber === 70}
              className="px-3 py-1.5 rounded-xl bg-[#0F1713] border border-[#192A20] text-gray-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center space-x-1"
            >
              <span>Next Day</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Task Cards Grid */}
        <div className="grid grid-cols-1 gap-4">
          {activeDay.tasks.map((task, idx) => {
            const isJava = task.type === 'java';
            const isDsa = task.type === 'dsa';
            const isDone = Boolean(task.completed);

            return (
              <div
                key={task.id || idx}
                className={`group relative rounded-2xl p-5 border transition-all duration-200 ${
                  isDone
                    ? 'bg-[#0B1510] border-emerald-500/30'
                    : 'bg-[#0D1411] border-[#18261F] hover:border-[#22362C]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left: Checkbox + Title + Meta */}
                  <div className="flex items-start space-x-4 flex-1">
                    <button
                      onClick={() => toggleTask(activeDay.dayNumber, task.id)}
                      className="mt-0.5 flex-shrink-0 focus:outline-none"
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-transform active:scale-90" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-600 hover:text-gray-400 transition-colors" />
                      )}
                    </button>

                    <div className="space-y-1.5 flex-1">
                      {/* Badges row */}
                      <div className="flex flex-wrap items-center gap-2">
                        {isJava && (
                          <span className="inline-flex items-center space-x-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30">
                            <Code2 className="w-3 h-3" />
                            <span>Core Java • Video #{task.videoNum || idx + 1}</span>
                          </span>
                        )}

                        {isDsa && (
                          <>
                            <span className="inline-flex items-center space-x-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                              <Brain className="w-3 h-3" />
                              <span>Rising Brain DSA</span>
                            </span>

                            {task.pattern && (
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#162720] text-emerald-400 border border-[#213A2F]">
                                {task.pattern}
                              </span>
                            )}

                            {task.difficulty && (
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                                task.difficulty.toLowerCase() === 'easy'
                                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                                  : task.difficulty.toLowerCase() === 'hard'
                                  ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                                  : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                              }`}>
                                {task.difficulty}
                              </span>
                            )}
                          </>
                        )}

                        <span className="inline-flex items-center space-x-1 text-[10px] text-gray-500 font-mono">
                          <Clock className="w-3 h-3" />
                          <span>~45 mins</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-base font-bold transition-colors ${
                        isDone ? 'text-gray-400 line-through' : 'text-white'
                      }`}>
                        {task.title}
                      </h3>

                      {/* DSA Company tags & info */}
                      {isDsa && task.companies && task.companies.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <span className="text-[10px] text-gray-500">Asked in:</span>
                          {task.companies.map((company, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-[10px] px-2 py-0.5 rounded bg-[#131D18] text-gray-400 border border-[#1E2E26]"
                            >
                              {company}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center space-x-2 pt-2 sm:pt-0 pl-10 sm:pl-0 border-t sm:border-t-0 border-[#16241D]">
                    {isDsa && task.url && (
                      <a
                        href={task.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#111C16] hover:bg-[#182820] text-gray-300 hover:text-white border border-[#1D2E25] flex items-center space-x-1.5 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Solve</span>
                      </a>
                    )}

                    <button
                      onClick={() => onOpenNotes(activeDay.dayNumber, task)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center space-x-1.5 transition-colors ${
                        task.notes
                          ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                          : 'bg-[#111C16] hover:bg-[#182820] text-gray-400 hover:text-white border-[#1D2E25]'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5 text-emerald-400" />
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
          <div className="bg-[#0A100D] border border-[#16241D] rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Upcoming Tomorrow • Day {tomorrowDay.dayNumber}
                </span>
              </div>
              <span className="text-xs text-gray-500 font-mono">{tomorrowDay.dateDisplay}</span>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white">{tomorrowDay.title}</h4>
              <div className="space-y-1.5 text-xs text-gray-400">
                {tomorrowDay.tasks.map((t, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                    <span className="truncate">{t.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setActiveDayNumber(tomorrowDay.dayNumber)}
              className="text-xs text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center space-x-1 pt-2"
            >
              <span>Preview Day {tomorrowDay.dayNumber}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="bg-[#0A100D] border border-[#16241D] rounded-2xl p-5 sm:p-6 flex items-center justify-center text-center">
            <div>
              <Trophy className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-white">Final Day of 70-Day Target!</h4>
              <p className="text-xs text-gray-400 mt-1">You have reached the end of the full curriculum roadmap.</p>
            </div>
          </div>
        )}

        {/* Motivational / Discipline Card */}
        <div className="bg-[#0A100D] border border-[#16241D] rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-3">
          <div className="flex items-center space-x-2 text-emerald-400">
            <Flame className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Discipline & Consistency
            </span>
          </div>

          <p className="text-sm text-gray-300 italic leading-relaxed">
            "You do not rise to the level of your goals. You fall to the level of your systems. Study 2 topics and 1 DSA question today without fail."
          </p>

          <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-[#16241D]">
            <span>Current Streak: <strong className="text-emerald-400 font-mono">{progressStats.streak} Days</strong></span>
            <span>Completed Days: <strong className="text-white font-mono">{progressStats.daysCompleted} / 70</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
