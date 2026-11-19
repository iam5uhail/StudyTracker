import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { initialSubjects, initialDailyGoals, initialDailyLogs } from '../data/fallbackData';

const LearningContext = createContext(null);
const SUBJECTS_KEY = 'studytrack_subjects_v2';
const GOALS_KEY = 'studytrack_goals_v2';
const LOGS_KEY = 'studytrack_logs_v2';

export function LearningProvider({ children }) {
  const [subjects, setSubjects] = useState(() => {
    try {
      const saved = localStorage.getItem(SUBJECTS_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return initialSubjects;
  });

  const [dailyGoals, setDailyGoals] = useState(() => {
    try {
      const saved = localStorage.getItem(GOALS_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return initialDailyGoals;
  });

  const [dailyLogs, setDailyLogs] = useState(() => {
    try {
      const saved = localStorage.getItem(LOGS_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return initialDailyLogs;
  });

  const [selectedSubjectId, setSelectedSubjectId] = useState(subjects[0]?.id || 'sub-java');
  const [searchQuery, setSearchQuery] = useState('');

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(SUBJECTS_KEY, JSON.stringify(subjects));
    } catch (e) {}
  }, [subjects]);

  useEffect(() => {
    try {
      localStorage.setItem(GOALS_KEY, JSON.stringify(dailyGoals));
    } catch (e) {}
  }, [dailyGoals]);

  useEffect(() => {
    try {
      localStorage.setItem(LOGS_KEY, JSON.stringify(dailyLogs));
    } catch (e) {}
  }, [dailyLogs]);

  // Active Subject
  const activeSubject = useMemo(() => {
    return subjects.find(s => s.id === selectedSubjectId) || subjects[0] || null;
  }, [subjects, selectedSubjectId]);

  // Overall Learning Stats
  const stats = useMemo(() => {
    let totalTopics = 0;
    let completedTopics = 0;
    let inProgressTopics = 0;
    let totalMinutes = 0;

    subjects.forEach(sub => {
      (sub.topics || []).forEach(top => {
        totalTopics++;
        if (top.status === 'completed') completedTopics++;
        if (top.status === 'in_progress') inProgressTopics++;
        totalMinutes += Number(top.minutesSpent) || 0;
      });
    });

    // Also add minutes from daily study logs
    dailyLogs.forEach(log => {
      totalMinutes += Number(log.durationMinutes) || 0;
    });

    const percent = totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);
    const totalHours = (totalMinutes / 60).toFixed(1);

    // Calculate streak from unique consecutive log dates
    const logDates = [...new Set(dailyLogs.map(l => l.date))].sort().reverse();
    let streak = 0;
    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

    if (logDates.includes(today) || logDates.includes(yesterday)) {
      streak = 1;
      let checkDate = new Date(logDates[0]);
      for (let i = 1; i < logDates.length; i++) {
        const prev = new Date(logDates[i]);
        const diffDays = Math.round((checkDate - prev) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          streak++;
          checkDate = prev;
        } else {
          break;
        }
      }
    }

    return {
      totalSubjects: subjects.length,
      totalTopics,
      completedTopics,
      inProgressTopics,
      percent,
      totalHours,
      streak: Math.max(streak, 1) // default encouraging 1 day minimum
    };
  }, [subjects, dailyLogs]);

  // Cycle topic status: todo -> in_progress -> completed -> todo
  const toggleTopicStatus = (subjectId, topicId) => {
    setSubjects(prev => prev.map(sub => {
      if (sub.id !== subjectId) return sub;
      return {
        ...sub,
        topics: (sub.topics || []).map(top => {
          if (top.id !== topicId) return top;
          let nextStatus = 'in_progress';
          if (top.status === 'todo') nextStatus = 'in_progress';
          else if (top.status === 'in_progress') {
            nextStatus = 'completed';
            // Celebration confetti!
            try {
              confetti({
                particleCount: 40,
                spread: 60,
                origin: { y: 0.8 },
                colors: ['#3B82F6', '#6366F1', '#10B981', '#F59E0B']
              });
            } catch (e) {}
          } else {
            nextStatus = 'todo';
          }
          return { ...top, status: nextStatus };
        })
      };
    }));
  };

  // Update Topic details (notes, confidence, title)
  const updateTopic = (subjectId, topicId, updates) => {
    setSubjects(prev => prev.map(sub => {
      if (sub.id !== subjectId) return sub;
      return {
        ...sub,
        topics: (sub.topics || []).map(top => {
          if (top.id !== topicId) return top;
          return { ...top, ...updates };
        })
      };
    }));
  };

  // Add Subject
  const addSubject = ({ name, category, color, description }) => {
    const newSub = {
      id: 'sub-' + Date.now().toString(36),
      name,
      category: category || 'Course',
      color: color || 'blue',
      icon: 'BookOpen',
      description: description || 'Study goals and syllabus',
      topics: [
        {
          id: 'top-' + Date.now(),
          title: 'Introduction & Foundations',
          status: 'todo',
          notes: '',
          minutesSpent: 0,
          confidence: 'medium'
        }
      ]
    };
    setSubjects(prev => [...prev, newSub]);
    setSelectedSubjectId(newSub.id);
  };

  // Delete Subject
  const deleteSubject = (subjectId) => {
    if (subjects.length <= 1) {
      alert('You should keep at least one subject to track.');
      return;
    }
    const next = subjects.filter(s => s.id !== subjectId);
    setSubjects(next);
    if (selectedSubjectId === subjectId) {
      setSelectedSubjectId(next[0].id);
    }
  };

  // Add Topic to a Subject
  const addTopic = (subjectId, { title, notes, confidence }) => {
    const newTop = {
      id: 'top-' + Date.now(),
      title: title || 'New Chapter / Topic',
      status: 'todo',
      notes: notes || '',
      minutesSpent: 0,
      confidence: confidence || 'medium'
    };
    setSubjects(prev => prev.map(sub => {
      if (sub.id !== subjectId) return sub;
      return {
        ...sub,
        topics: [...(sub.topics || []), newTop]
      };
    }));
  };

  // Delete Topic
  const deleteTopic = (subjectId, topicId) => {
    setSubjects(prev => prev.map(sub => {
      if (sub.id !== subjectId) return sub;
      return {
        ...sub,
        topics: (sub.topics || []).filter(t => t.id !== topicId)
      };
    }));
  };

  // Toggle Daily Goal Checkbox
  const toggleGoal = (goalId) => {
    setDailyGoals(prev => prev.map(g => {
      if (g.id !== goalId) return g;
      const nextDone = !g.isCompleted;
      if (nextDone) {
        try {
          confetti({
            particleCount: 30,
            spread: 50,
            origin: { y: 0.85 }
          });
        } catch (e) {}
      }
      return { ...g, isCompleted: nextDone };
    }));
  };

  // Add Daily Goal
  const addGoal = ({ title, subjectName, estimatedMinutes }) => {
    const newGoal = {
      id: 'g-' + Date.now(),
      title,
      subjectName: subjectName || 'General',
      isCompleted: false,
      estimatedMinutes: Number(estimatedMinutes) || 30
    };
    setDailyGoals(prev => [newGoal, ...prev]);
  };

  // Delete Daily Goal
  const deleteGoal = (goalId) => {
    setDailyGoals(prev => prev.filter(g => g.id !== goalId));
  };

  // Add Day-by-Day Study Session Log
  const addDailyLog = ({ subjectName, topicTitle, durationMinutes, summary, rating }) => {
    const newLog = {
      id: 'log-' + Date.now(),
      date: new Date().toISOString().slice(0, 10),
      subjectName: subjectName || 'General Study',
      topicTitle: topicTitle || 'Study Session',
      durationMinutes: Number(durationMinutes) || 45,
      summary: summary || '',
      rating: rating || 'Solid Progress'
    };
    setDailyLogs(prev => [newLog, ...prev]);

    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {}
  };

  // Delete Study Log
  const deleteDailyLog = (logId) => {
    setDailyLogs(prev => prev.filter(l => l.id !== logId));
  };

  // Reset all to sample defaults
  const resetToDefaults = () => {
    if (confirm('Reset to starter subjects and study data?')) {
      setSubjects(initialSubjects);
      setDailyGoals(initialDailyGoals);
      setDailyLogs(initialDailyLogs);
      setSelectedSubjectId(initialSubjects[0].id);
      localStorage.removeItem(SUBJECTS_KEY);
      localStorage.removeItem(GOALS_KEY);
      localStorage.removeItem(LOGS_KEY);
    }
  };

  return (
    <LearningContext.Provider
      value={{
        subjects,
        activeSubject,
        selectedSubjectId,
        setSelectedSubjectId,
        dailyGoals,
        dailyLogs,
        stats,
        searchQuery,
        setSearchQuery,
        toggleTopicStatus,
        updateTopic,
        addSubject,
        deleteSubject,
        addTopic,
        deleteTopic,
        toggleGoal,
        addGoal,
        deleteGoal,
        addDailyLog,
        deleteDailyLog,
        resetToDefaults
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
