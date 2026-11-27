import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { initialPlanDays, DEFAULT_START_DATE } from '../data/planData';

const LearningContext = createContext(null);
const PLAN_STORAGE_KEY = 'study_daywise_plan_v14_java_focus';
const LEGACY_STORAGE_KEY = 'study_daywise_plan_v13_namaste_black';
const START_DATE_KEY = 'study_plan_start_date_v13_namaste_black';
const JAVA_PRACTICE_COMPLETED_KEY = 'java_practice_completed_ids_v1';

export function LearningProvider({ children }) {
  // Plan days: 70 Days with 2 Core Java Lectures + 2 Java Practice Drills per Day
  const [days, setDays] = useState(() => {
    try {
      const saved = localStorage.getItem(PLAN_STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
      let practiceCompletedIds = [];
      try {
        const rawP = localStorage.getItem('study_tracker_java_completed_ids_v1') || localStorage.getItem(JAVA_PRACTICE_COMPLETED_KEY);
        if (rawP) practiceCompletedIds = JSON.parse(rawP);
      } catch (e) {}

      if (saved) {
        const parsed = JSON.parse(saved);
        // Flatten all saved tasks across all saved days for seamless topic matching
        const allSavedTasks = Array.isArray(parsed) ? parsed.flatMap(d => d.tasks || []) : [];

        return initialPlanDays.map(initDay => {
          return {
            ...initDay,
            tasks: initDay.tasks.map(initTask => {
              if (initTask.type === 'java') {
                const sTask = allSavedTasks.find(t => 
                  t.type === 'java' && (
                    (t.num && initTask.num && Number(t.num) === Number(initTask.num)) ||
                    (t.title && initTask.title && t.title.toLowerCase().trim() === initTask.title.toLowerCase().trim())
                  )
                );
                if (sTask) {
                  let restoredNotes = (sTask.notes && sTask.notes.trim()) ? sTask.notes : initTask.notes;
                  // Self-healing: if an old cached bug gave Topic 25 loops or Topic 24 if-else or Topic 23 keywords, heal it!
                  if (initTask.num === 25 && (restoredNotes.includes('Iteration & Looping') || restoredNotes.includes('While & Do-While'))) {
                    restoredNotes = initTask.notes;
                  }
                  if (initTask.num === 24 && (restoredNotes.includes('Selection Statements') || restoredNotes.includes('Conditional Branching'))) {
                    restoredNotes = initTask.notes;
                  }
                  if (initTask.num === 23 && restoredNotes.includes('Keywords and Identifiers')) {
                    restoredNotes = initTask.notes;
                  }
                  return {
                    ...initTask,
                    completed: Boolean(sTask.completed),
                    notes: restoredNotes
                  };
                }
              }
              if (initTask.type === 'practice') {
                const sTask = allSavedTasks.find(t => 
                  t.type === 'practice' && (
                    (initTask.questionId && t.questionId === initTask.questionId) ||
                    t.id === initTask.id ||
                    t.title === initTask.title
                  )
                );
                const isDoneViaPracticeView = initTask.questionId && practiceCompletedIds.includes(initTask.questionId);
                const isDone = Boolean(sTask?.completed || isDoneViaPracticeView);
                return {
                  ...initTask,
                  levelId: initTask.levelId || (sTask && sTask.levelId),
                  completed: isDone
                };
              }
              return initTask;
            })
          };
        });
      }
    } catch (e) {}
    return initialPlanDays;
  });

  // Start date (starts 21 Nov 2026 as explicitly requested!)
  const [startDateStr, setStartDateStr] = useState(() => {
    try {
      const saved = localStorage.getItem(START_DATE_KEY);
      if (saved) return saved;
    } catch (e) {}
    return DEFAULT_START_DATE || "2026-11-21";
  });

  const ACTIVE_DAY_STORAGE_KEY = 'study_tracker_active_day_v1';

  // Selected Day number (1 to 47) with localStorage persistence across refreshes
  const [activeDayNumber, setActiveDayNumber] = useState(() => {
    try {
      const saved = localStorage.getItem(ACTIVE_DAY_STORAGE_KEY);
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed >= 1 && parsed <= 47) {
        return parsed;
      }
    } catch (e) {}
    return 1;
  });

  useEffect(() => {
    try {
      localStorage.setItem(ACTIVE_DAY_STORAGE_KEY, String(activeDayNumber));
    } catch (e) {}
  }, [activeDayNumber]);

  // Search query
  const [searchQuery, setSearchQuery] = useState('');

  // Cloud sync status ('synced' | 'saving' | 'offline')
  const [syncStatus, setSyncStatus] = useState('synced');
  // Guard: prevents auto-saving uninitialized default state to MongoDB
  const [isInitialLoadDone, setIsInitialLoadDone] = useState(false);

  // Load from MongoDB on initial mount
  useEffect(() => {
    let isMounted = true;
    async function fetchMongoProgress() {
      try {
        const res = await fetch('/api/progress');
        if (!res.ok) {
          if (isMounted) setSyncStatus('offline');
          return;
        }
        const json = await res.json();
        if (json.success && json.exists && json.data) {
          if (!isMounted) return;
          const mongo = json.data;
          if (mongo.startDate) setStartDateStr(mongo.startDate);
          if (mongo.days && Array.isArray(mongo.days) && mongo.days.length > 0) {
            setDays(prevDays => {
              return prevDays.map(d => {
                const mDay = mongo.days.find(md => md.dayNumber === d.dayNumber);
                if (!mDay) return d;
                return {
                  ...d,
                  tasks: d.tasks.map(t => {
                    const mTask = mDay.tasks ? mDay.tasks.find(mt => mt.id === t.id) : null;
                    if (!mTask) return t;
                    // Safely preserve completed status, code solution, and notes (never overwrite with blank)
                    const isDone = mTask.completed || t.completed;
                    const code = (mTask.codeSolution && mTask.codeSolution.trim()) ? mTask.codeSolution : (t.codeSolution || '');
                    const note = (mTask.notes && mTask.notes.trim()) ? mTask.notes : (t.notes || '');
                    return {
                      ...t,
                      completed: Boolean(isDone),
                      codeSolution: code,
                      notes: note
                    };
                  })
                };
              });
            });
          }
          setSyncStatus('synced');
        } else {
          if (isMounted) setSyncStatus('synced');
        }
      } catch (err) {
        if (isMounted) setSyncStatus('offline');
      } finally {
        if (isMounted) setIsInitialLoadDone(true);
      }
    }
    fetchMongoProgress();
    return () => { isMounted = false; };
  }, []);

  // Persist plan locally
  useEffect(() => {
    try {
      localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(days));
    } catch (e) {}
  }, [days]);

  // Persist start date locally
  useEffect(() => {
    try {
      localStorage.setItem(START_DATE_KEY, startDateStr);
    } catch (e) {}
  }, [startDateStr]);

  // Auto-save to MongoDB (debounced, ONLY after initial load is complete)
  useEffect(() => {
    if (!isInitialLoadDone) return; // Prevent race conditions on page load

    setSyncStatus('saving');
    const timer = setTimeout(async () => {
      try {
        const res = await fetch('/api/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            startDate: startDateStr,
            days: days.map(d => ({
              dayNumber: d.dayNumber,
              tasks: d.tasks.map(t => ({
                id: t.id,
                completed: Boolean(t.completed),
                codeSolution: t.codeSolution || "",
                notes: t.notes || ""
              }))
            }))
          })
        });
        if (res.ok) {
          setSyncStatus('synced');
        } else {
          setSyncStatus('offline');
        }
      } catch (e) {
        setSyncStatus('offline');
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [days, startDateStr, isInitialLoadDone]);

  // Compute calendar dates for all days based on startDateStr
  const daysWithDates = useMemo(() => {
    const baseDate = new Date(startDateStr);
    return days.map((day, idx) => {
      const dayDate = new Date(baseDate.getTime() + idx * 86400000);
      const dateDisplay = dayDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      const dateShort = dayDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });
      const dateIso = dayDate.toISOString().slice(0, 10);

      // Status of day
      const totalTasks = day.tasks.length;
      const completedTasks = day.tasks.filter(t => t.completed).length;
      const isDayComplete = completedTasks === totalTasks && totalTasks > 0;
      const isDayInProgress = completedTasks > 0 && !isDayComplete;

      return {
        ...day,
        dateDisplay,
        dateShort,
        dateIso,
        totalTasks,
        completedTasks,
        isDayComplete,
        isDayInProgress
      };
    });
  }, [days, startDateStr]);

  // Overall Statistics & Progress Bar metrics (Core Java Lectures & Java Practice Drills)
  const progressStats = useMemo(() => {
    let totalTasks = 0;
    let completedTasks = 0;

    let javaTotal = 0;
    let javaCompleted = 0;

    let practiceTotal = 0;
    let practiceCompleted = 0;

    let daysCompleted = 0;

    days.forEach(day => {
      let allDayDone = true;
      day.tasks.forEach(task => {
        totalTasks++;
        if (task.completed) completedTasks++;
        else allDayDone = false;

        if (task.type === 'java') {
          javaTotal++;
          if (task.completed) javaCompleted++;
        } else if (task.type === 'practice') {
          practiceTotal++;
          if (task.completed) practiceCompleted++;
        }
      });
      if (allDayDone && day.tasks.length > 0) daysCompleted++;
    });

    const overallPercent = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    const javaPercent = javaTotal === 0 ? 0 : Math.round((javaCompleted / javaTotal) * 100);
    const practicePercent = practiceTotal === 0 ? 0 : Math.round((practiceCompleted / practiceTotal) * 100);
    const daysPercent = days.length === 0 ? 0 : Math.round((daysCompleted / days.length) * 100);

    return {
      totalTasks,
      completedTasks,
      remainingTasks: totalTasks - completedTasks,
      overallPercent,
      // Java Lectures metrics (140)
      javaTotal,
      javaCompleted,
      javaRemaining: javaTotal - javaCompleted,
      javaPercent,
      // Java Practice metrics (140)
      practiceTotal,
      practiceCompleted,
      practiceRemaining: practiceTotal - practiceCompleted,
      practicePercent,
      // Compatibility alias
      dsaTotal: practiceTotal,
      dsaCompleted: practiceCompleted,
      dsaRemaining: practiceTotal - practiceCompleted,
      dsaPercent: practicePercent,
      // Days completed
      totalDays: days.length,
      daysCompleted,
      daysRemaining: days.length - daysCompleted,
      daysPercent,
      streak: daysCompleted > 0 ? daysCompleted : 1
    };
  }, [days]);

  // Active Day Object
  const activeDay = useMemo(() => {
    return daysWithDates.find(d => d.dayNumber === activeDayNumber) || daysWithDates[0];
  }, [daysWithDates, activeDayNumber]);

  // Toggle Task Completed (with automatic two-way sync for practice questions)
  const toggleTask = (dayNumber, taskId) => {
    setDays(prev => {
      let toggledQuestionId = null;
      let newDoneStatus = false;

      const nextDays = prev.map(d => {
        if (d.dayNumber !== dayNumber) return d;
        return {
          ...d,
          tasks: d.tasks.map(t => {
            if (t.id !== taskId) return t;
            newDoneStatus = !t.completed;
            if (t.type === 'practice' && t.questionId) {
              toggledQuestionId = t.questionId;
            }
            if (newDoneStatus) {
              try {
                confetti({
                  particleCount: 40,
                  spread: 60,
                  origin: { y: 0.8 },
                  colors: ['#10B981', '#34D399', '#6EE7B7', '#F59E0B']
                });
              } catch (e) {}
            }
            return { ...t, completed: newDoneStatus };
          })
        };
      });

      // Synchronize with java_practice_completed_ids_v1
      if (toggledQuestionId) {
        try {
          const raw = localStorage.getItem('java_practice_completed_ids_v1');
          let currentList = raw ? JSON.parse(raw) : [];
          if (newDoneStatus) {
            if (!currentList.includes(toggledQuestionId)) {
              currentList.push(toggledQuestionId);
            }
          } else {
            currentList = currentList.filter(id => id !== toggledQuestionId);
          }
          localStorage.setItem('java_practice_completed_ids_v1', JSON.stringify(currentList));
          localStorage.setItem('study_tracker_java_completed_ids_v1', JSON.stringify(currentList));
        } catch (e) {}
      }

      return nextDays;
    });
  };

  // Update Task Notes
  const updateTaskNotes = (dayNumber, taskId, notes) => {
    setDays(prev => prev.map(d => {
      if (d.dayNumber !== dayNumber) return d;
      return {
        ...d,
        tasks: d.tasks.map(t => {
          if (t.id !== taskId) return t;
          return { ...t, notes };
        })
      };
    }));
  };

  // Update Task Code Solution (strictly separated from lecture notes)
  const updateTaskCodeSolution = (dayNumber, taskId, codeSolution) => {
    setDays(prev => prev.map(d => {
      if (d.dayNumber !== dayNumber) return d;
      return {
        ...d,
        tasks: d.tasks.map(t => {
          if (t.id !== taskId) return t;
          return { ...t, codeSolution };
        })
      };
    }));
  };

  // Mark entire day complete or reset
  const toggleAllDayTasks = (dayNumber, markCompleted) => {
    setDays(prev => prev.map(d => {
      if (d.dayNumber !== dayNumber) return d;
      if (markCompleted) {
        try {
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.75 }
          });
        } catch (e) {}
      }
      return {
        ...d,
        tasks: d.tasks.map(t => ({ ...t, completed: markCompleted }))
      };
    }));
  };

  // Reset all progress
  const resetAllProgress = () => {
    if (confirm("Reset all targets back to uncompleted (0%)?")) {
      setDays(initialPlanDays);
      setStartDateStr(DEFAULT_START_DATE);
      localStorage.removeItem(PLAN_STORAGE_KEY);
      localStorage.removeItem(START_DATE_KEY);
    }
  };

  return (
    <LearningContext.Provider
      value={{
        days: daysWithDates,
        daysWithDates,
        activeDay,
        activeDayNumber,
        setActiveDayNumber,
        progressStats,
        startDateStr,
        setStartDateStr,
        searchQuery,
        setSearchQuery,
        syncStatus,
        toggleTask,
        updateTaskNotes,
        updateTaskCodeSolution,
        toggleAllDayTasks,
        toggleDayComplete: (dayNum) => {
          const targetDay = daysWithDates.find(d => d.dayNumber === dayNum);
          const isAllDone = targetDay ? targetDay.completedTasks === targetDay.totalTasks : false;
          toggleAllDayTasks(dayNum, !isAllDone);
        },
        resetAllProgress
      }}
    >
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) throw new Error('useLearning must be used within LearningProvider');
  return context;
}
