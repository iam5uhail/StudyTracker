import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { initialPlanDays, DEFAULT_START_DATE } from '../data/planData';

const LearningContext = createContext(null);
const PLAN_STORAGE_KEY = 'study_daywise_plan_v4';
const START_DATE_KEY = 'study_plan_start_date_v4';

export function LearningProvider({ children }) {
  // Plan days
  const [days, setDays] = useState(() => {
    try {
      const saved = localStorage.getItem(PLAN_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
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

  // Filter: 'all', 'pending', 'completed'
  const [filterMode, setFilterMode] = useState('all');

  // Search query
  const [searchQuery, setSearchQuery] = useState('');

  // Persist plan
  useEffect(() => {
    try {
      localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(days));
    } catch (e) {}
  }, [days]);

  // Persist start date
  useEffect(() => {
    try {
      localStorage.setItem(START_DATE_KEY, startDateStr);
    } catch (e) {}
  }, [startDateStr]);

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
      daysPercent
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
        activeDay,
        activeDayNumber,
        setActiveDayNumber,
        progressStats,
        startDateStr,
        setStartDateStr,
        filterMode,
        setFilterMode,
        searchQuery,
        setSearchQuery,
        toggleTask,
        updateTaskNotes,
        toggleAllDayTasks,
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
