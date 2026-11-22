import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { initialPlanDays, DEFAULT_START_DATE } from '../data/planData';

const LearningContext = createContext(null);
const PLAN_STORAGE_KEY = 'study_daywise_plan_v13_namaste_black';
const START_DATE_KEY = 'study_plan_start_date_v13_namaste_black';

export function LearningProvider({ children }) {
  // Plan days
  const [days, setDays] = useState(() => {
    try {
      const saved = localStorage.getItem(PLAN_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Automatically inject lecture notes for tasks where default notes exist and current note is empty
        return parsed.map(day => {
          const initDay = initialPlanDays.find(d => d.dayNumber === day.dayNumber);
          const cleanTasks = (day.tasks || []).filter(t => t.type !== 'practice');
          if (!initDay) return { ...day, tasks: cleanTasks };
          return {
            ...day,
            tasks: cleanTasks.map(t => {
              if (t.type === 'dsa') {
                return { ...t, notes: "", codeSolution: t.codeSolution || "" };
              }
              const initTask = initDay.tasks.find(it => it.id === t.id);
              if (initTask && initTask.notes && (!t.notes || t.notes.trim() === '')) {
                return { ...t, notes: initTask.notes };
              }
              return t;
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

  // Selected Day number (1 to 70)
  const [activeDayNumber, setActiveDayNumber] = useState(1);

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
                const cleanTasks = (d.tasks || []).filter(t => t.type !== 'practice');
                return {
                  ...d,
                  tasks: cleanTasks.map(t => {
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

  // Overall Statistics & Progress Bar metrics (Matching Rising Brain Card)
  const progressStats = useMemo(() => {
    let totalTasks = 0;
    let completedTasks = 0;

    let javaTotal = 0;
    let javaCompleted = 0;

    let dsaTotal = 0;
    let dsaCompleted = 0;

    let easyTotal = 0;
    let easySolved = 0;
    let medTotal = 0;
    let medSolved = 0;
    let hardTotal = 0;
    let hardSolved = 0;

    let arrayTotal = 0;
    let arraySolved = 0;
    let stringsTotal = 0;
    let stringsSolved = 0;
    let bsTotal = 0;
    let bsSolved = 0;
    let stackTotal = 0;
    let stackSolved = 0;

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
        } else if (task.type === 'dsa') {
          dsaTotal++;
          const isDone = Boolean(task.completed);
          if (isDone) dsaCompleted++;

          // Difficulty breakdown
          const diff = (task.difficulty || 'Medium').toLowerCase();
          if (diff === 'easy') {
            easyTotal++;
            if (isDone) easySolved++;
          } else if (diff === 'hard') {
            hardTotal++;
            if (isDone) hardSolved++;
          } else {
            medTotal++;
            if (isDone) medSolved++;
          }

          // Topic breakdown (Array 24, Strings 11, Binary Search 23, Stack 12)
          if (task.topic === 'Array') {
            arrayTotal++;
            if (isDone) arraySolved++;
          } else if (task.topic === 'Strings') {
            stringsTotal++;
            if (isDone) stringsSolved++;
          } else if (task.topic === 'Binary Search') {
            bsTotal++;
            if (isDone) bsSolved++;
          } else if (task.topic === 'Stack') {
            stackTotal++;
            if (isDone) stackSolved++;
          }
        }
      });
      if (allDayDone && day.tasks.length > 0) daysCompleted++;
    });

    const overallPercent = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    const javaPercent = javaTotal === 0 ? 0 : Math.round((javaCompleted / javaTotal) * 100);
    const dsaPercent = dsaTotal === 0 ? 0 : Math.round((dsaCompleted / dsaTotal) * 100);
    const daysPercent = days.length === 0 ? 0 : Math.round((daysCompleted / days.length) * 100);

    const easyPercent = easyTotal === 0 ? 0 : Math.round((easySolved / easyTotal) * 100);
    const medPercent = medTotal === 0 ? 0 : Math.round((medSolved / medTotal) * 100);
    const hardPercent = hardTotal === 0 ? 0 : Math.round((hardSolved / hardTotal) * 100);

    return {
      totalTasks,
      completedTasks,
      remainingTasks: totalTasks - completedTasks,
      overallPercent,
      // Java metrics
      javaTotal,
      javaCompleted,
      javaRemaining: javaTotal - javaCompleted,
      javaPercent,
      // DSA metrics
      dsaTotal,
      dsaCompleted,
      dsaRemaining: dsaTotal - dsaCompleted,
      dsaPercent,
      // Section breakdown (Rising Brain)
      arrayTotal,
      arraySolved,
      stringsTotal,
      stringsSolved,
      bsTotal,
      bsSolved,
      stackTotal,
      stackSolved,
      // Difficulty breakdown (from Rising Brain)
      easyTotal,
      easySolved,
      easyPercent,
      medTotal,
      medSolved,
      medPercent,
      hardTotal,
      hardSolved,
      hardPercent,
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

  // Toggle Task Completed
  const toggleTask = (dayNumber, taskId) => {
    setDays(prev => prev.map(d => {
      if (d.dayNumber !== dayNumber) return d;
      return {
        ...d,
        tasks: d.tasks.map(t => {
          if (t.id !== taskId) return t;
          const nextCompleted = !t.completed;
          if (nextCompleted) {
            try {
              confetti({
                particleCount: 40,
                spread: 60,
                origin: { y: 0.8 },
                colors: ['#10B981', '#34D399', '#6EE7B7', '#F59E0B']
              });
            } catch (e) {}
          }
          return { ...t, completed: nextCompleted };
        })
      };
    }));
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
