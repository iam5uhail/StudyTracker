import React, { useState, useMemo, useEffect } from 'react';
import {
  Code2,
  BookOpen,
  CheckCircle2,
  Circle,
  Search,
  Filter,
  ChevronDown,
  ChevronRight,
  Layers,
  Sparkles,
  Calendar,
  ArrowLeft,
  ArrowRight,
  LayoutGrid,
  List,
  FileText,
  Check,
  Award,
  Flame,
  Target,
  Trophy,
  X
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import allJavaTopicsList from '../data/allJavaTopics.json';
import LectureNotesAccordion from './LectureNotesAccordion';
import DayNavigatorTimeline from './DayNavigatorTimeline';
import confetti from 'canvas-confetti';

// 9 Progressive Levels / Modules of Core Java 140 Topics
const JAVA_LEVEL_MODULES = [
  {
    id: 'level-1',
    levelNum: 1,
    title: "Level 1: Java Basics & Fundamentals",
    range: "Topics 01 - 20",
    description: "Language intro, JVM, JDK, Compilation, Data Types, Type Casting, Variables, Literals, Control Flow & Star Patterns",
    topicStart: 1,
    topicEnd: 20
  },
  {
    id: 'level-2',
    levelNum: 2,
    title: "Level 2: Object-Oriented Programming (OOP)",
    range: "Topics 21 - 36",
    description: "Classes, Objects, Constructors, Relationships, Polymorphism, Abstraction, Interfaces, Encapsulation & Keywords",
    topicStart: 21,
    topicEnd: 36
  },
  {
    id: 'level-3',
    levelNum: 3,
    title: "Level 3: Advanced OOP, Nested Classes & Packages",
    range: "Topics 37 - 43",
    description: "Super, final, static, nested classes, static methods & packages deep dive",
    topicStart: 37,
    topicEnd: 43
  },
  {
    id: 'level-4',
    levelNum: 4,
    title: "Level 4: GUI, AWT & Mini Projects",
    range: "Topics 44 - 49",
    description: "AWT GUI, Event Handling in AWT, Tic Tac Toe Game project implementation",
    topicStart: 44,
    topicEnd: 49
  },
  {
    id: 'level-5',
    levelNum: 5,
    title: "Level 5: Exception Handling & Strings",
    range: "Topics 50 - 59",
    description: "Error vs Exception, try-catch blocks, throws, throw, String class, StringBuffer & StringBuilder",
    topicStart: 50,
    topicEnd: 59
  },
  {
    id: 'level-6',
    levelNum: 6,
    title: "Level 6: Multithreading & Concurrency",
    range: "Topics 60 - 70",
    description: "Thread creation, lifecycle, synchronization, thread group, thread pool, Callable & Future",
    topicStart: 60,
    topicEnd: 70
  },
  {
    id: 'level-7',
    levelNum: 7,
    title: "Level 7: Java I/O Streams, Serialization & Networking",
    range: "Topics 71 - 84",
    description: "Byte stream, Character stream, File Handling, Serialization, Socket programming, RMI & Chat project",
    topicStart: 71,
    topicEnd: 84
  },
  {
    id: 'level-8',
    levelNum: 8,
    title: "Level 8: Collections Framework & Generics",
    range: "Topics 85 - 112",
    description: "Arrays (1D, 2D, 3D), List, ArrayList, LinkedList, Set, Map, HashMap, TreeMap, Comparator, Generics",
    topicStart: 85,
    topicEnd: 112
  },
  {
    id: 'level-9',
    levelNum: 9,
    title: "Level 9: Java 8 Features, JDBC & Projects",
    range: "Topics 113 - 140",
    description: "Lambda expressions, Stream API, Date-Time API, SQL Queries, JDBC connection, Billing Software Project & Applets",
    topicStart: 113,
    topicEnd: 140
  }
];

export default function JavaLecturesView({ openAccordionTaskId, onClearOpenAccordionTaskId }) {
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

  // 1. Flatten all Java lecture tasks with metadata
  const allJavaLectureTasks = useMemo(() => {
    const list = [];
    (days || []).forEach(day => {
      (day.tasks || []).forEach(task => {
        if (task.type === 'java') {
          const num = task.num || task.videoNum || parseInt(task.title.match(/^\d+/)?.[0] || '0', 10);
          list.push({
            ...task,
            topicNum: num,
            dayNumber: day.dayNumber,
            dateDisplay: day.dateDisplay
          });
        }
      });
    });
    // Sort by topic number
    list.sort((a, b) => a.topicNum - b.topicNum);
    return list;
  }, [days]);

  // View Mode: 'level-accordions' | 'day-timeline'
  const [viewMode, setViewMode] = useState('level-accordions');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModuleId, setSelectedModuleId] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all'); // 'all', 'pending', 'completed'

  // Expanded notes state: { [taskId]: boolean } - DEFAULT CLOSED
  const [expandedNotes, setExpandedNotes] = useState({});

  // Accordion open state for Level modules: { [moduleId]: boolean } - ALL DEFAULT CLOSED!
  const [openModules, setOpenModules] = useState({});

  const toggleModuleAccordion = (modId) => {
    setOpenModules(prev => ({
      ...prev,
      [modId]: !prev[modId]
    }));
  };

  const toggleNoteAccordion = (taskId) => {
    setExpandedNotes(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  // Expand note if directed via openAccordionTaskId prop
  useEffect(() => {
    if (openAccordionTaskId) {
      setExpandedNotes(prev => ({ ...prev, [openAccordionTaskId]: true }));
      const el = document.getElementById(`lecture-card-${openAccordionTaskId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (onClearOpenAccordionTaskId) onClearOpenAccordionTaskId();
    }
  }, [openAccordionTaskId]);

  // Toggle task completion
  const handleToggleTask = (dayNum, taskId, currentStatus) => {
    toggleTask(dayNum, taskId);
    if (!currentStatus) {
      try {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.8 }
        });
      } catch (e) {}
    }
  };

  // Metrics
  const totalTopics = allJavaLectureTasks.length || 140;
  const completedTopics = allJavaLectureTasks.filter(t => t.completed).length;
  const javaCompletionPct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  // Filtered tasks
  const filteredTasks = useMemo(() => {
    return allJavaLectureTasks.filter(task => {
      if (selectedStatus === 'completed' && !task.completed) return false;
      if (selectedStatus === 'pending' && task.completed) return false;

      if (selectedModuleId !== 'all') {
        const mod = JAVA_LEVEL_MODULES.find(m => m.id === selectedModuleId);
        if (mod && (task.topicNum < mod.topicStart || task.topicNum > mod.topicEnd)) {
          return false;
        }
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = (task.title || '').toLowerCase().includes(q);
        const matchNotes = (task.notes || '').toLowerCase().includes(q);
        const matchNum = String(task.topicNum).includes(q);
        if (!matchTitle && !matchNotes && !matchNum) return false;
      }

      return true;
    });
  }, [allJavaLectureTasks, selectedStatus, selectedModuleId, searchQuery]);

  // Group filtered tasks by Level Module
  const groupedByModule = useMemo(() => {
    return JAVA_LEVEL_MODULES.map(mod => {
      const items = filteredTasks.filter(t => t.topicNum >= mod.topicStart && t.topicNum <= mod.topicEnd);
      const allModItems = allJavaLectureTasks.filter(t => t.topicNum >= mod.topicStart && t.topicNum <= mod.topicEnd);
      const modTotal = allModItems.length;
      const modCompleted = allModItems.filter(t => t.completed).length;
      const modPct = modTotal > 0 ? Math.round((modCompleted / modTotal) * 100) : 0;

      return {
        ...mod,
        items,
        total: modTotal,
        completed: modCompleted,
        pct: modPct
      };
    }).filter(m => m.items.length > 0 || (selectedModuleId === 'all' && !searchQuery && selectedStatus === 'all'));
  }, [filteredTasks, allJavaLectureTasks, selectedModuleId, searchQuery, selectedStatus]);

  if (!activeDay) return null;

  // Today's day metrics for day-timeline view
  const currentDayJavaTasks = activeDay.tasks.filter(t => t.type === 'java');
  const dayCompletedCount = currentDayJavaTasks.filter(t => t.completed).length;
  const isDayDone = currentDayJavaTasks.length > 0 && dayCompletedCount === currentDayJavaTasks.length;
  const dayPct = currentDayJavaTasks.length > 0 ? Math.round((dayCompletedCount / currentDayJavaTasks.length) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* 1. Header Banner & Core Java Syllabus Analytics */}
      <div className="relative overflow-hidden rounded-3xl border border-theme-border bg-theme-card p-6 sm:p-8 shadow-sm">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-28 -mt-28" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/30">
                <Code2 className="w-3.5 h-3.5" />
                <span>Core Java Lectures & Syllabus</span>
              </span>

              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-theme-cardSub text-theme-secondary border border-theme-border">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>140 Topics • 9 Level Modules</span>
              </span>

              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-theme-cardSub text-theme-secondary border border-theme-border">
                <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                <span>Day {activeDay.dayNumber} of 70</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight">
              Core Java Curriculum & Notes
            </h1>

            <p className="text-sm text-theme-muted max-w-2xl leading-relaxed">
              Step through all 140 topics organized level-by-level from basics to advanced OOP, multithreading, collections, and streams. Expand any lecture to access comprehensive notes and code walkthroughs.
            </p>
          </div>

          {/* Aggregate Progress Ring Card */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-theme-cardSub border border-theme-border rounded-2xl p-4 sm:p-5 flex-shrink-0 shadow-sm">
            {/* Circular Ring */}
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
                  stroke="#f59e0b"
                  strokeWidth="6"
                  strokeDasharray={2 * Math.PI * 26}
                  strokeDashoffset={2 * Math.PI * 26 - (javaCompletionPct / 100) * (2 * Math.PI * 26)}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-sm font-mono text-amber-500 dark:text-amber-400">
                {javaCompletionPct}%
              </div>
            </div>

            {/* Counts */}
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-theme-muted font-medium">Lectures Covered:</span>
                <span className="text-base font-extrabold font-mono text-theme-text">
                  {completedTopics} / {totalTopics}
                </span>
              </div>
              <div className="text-[11px] text-theme-muted font-mono">
                {totalTopics - completedTopics} topics remaining
              </div>
            </div>
          </div>
        </div>

        {/* View Mode & Filter Tabs */}
        <div className="mt-6 pt-5 border-t border-theme-border flex flex-wrap items-center justify-between gap-3">
          {/* Level Module Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setSelectedModuleId('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                selectedModuleId === 'all'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm'
                  : 'bg-theme-cardSub text-theme-muted hover:text-theme-text border border-theme-border'
              }`}
            >
              <span>All Modules (140)</span>
            </button>

            {JAVA_LEVEL_MODULES.slice(0, 4).map(mod => (
              <button
                key={mod.id}
                onClick={() => setSelectedModuleId(mod.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all hidden md:flex items-center space-x-1.5 ${
                  selectedModuleId === mod.id
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm'
                    : 'bg-theme-cardSub text-theme-muted hover:text-theme-text border border-theme-border'
                }`}
              >
                <span>Level {mod.levelNum}</span>
              </button>
            ))}
          </div>

          {/* View Mode Toggle: Level Accordions vs Day-by-Day Timeline */}
          <div className="flex items-center space-x-1 bg-theme-cardSub border border-theme-border p-1 rounded-xl text-xs">
            <button
              onClick={() => setViewMode('level-accordions')}
              className={`p-1.5 rounded-lg flex items-center space-x-1.5 transition-colors ${
                viewMode === 'level-accordions'
                  ? 'bg-amber-500/20 text-amber-400 font-bold'
                  : 'text-theme-muted hover:text-theme-text'
              }`}
              title="Level-wise Module Accordions"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden sm:inline">Level Accordions</span>
            </button>

            <button
              onClick={() => setViewMode('day-timeline')}
              className={`p-1.5 rounded-lg flex items-center space-x-1.5 transition-colors ${
                viewMode === 'day-timeline'
                  ? 'bg-amber-500/20 text-amber-400 font-bold'
                  : 'text-theme-muted hover:text-theme-text'
              }`}
              title="Day-by-Day 70-Day Timeline"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden sm:inline">Day Timeline</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Secondary Filter Toolbar (Search + Module Select + Status) */}
      <div className="bg-theme-card border border-theme-border rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[220px] max-w-md">
          <Search className="w-4 h-4 text-theme-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Java topics, concepts, notes..."
            className="w-full bg-theme-cardSub border border-theme-border focus:border-amber-500/60 rounded-xl pl-9 pr-3 py-1.5 text-xs text-theme-text placeholder-theme-muted focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-theme-muted hover:text-theme-text"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filters Group */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Module Select */}
          <select
            value={selectedModuleId}
            onChange={(e) => setSelectedModuleId(e.target.value)}
            className="bg-theme-cardSub border border-theme-border rounded-xl px-2.5 py-1.5 text-xs text-theme-text focus:outline-none focus:border-amber-500"
          >
            <option value="all">All 9 Levels (140 Topics)</option>
            {JAVA_LEVEL_MODULES.map(m => (
              <option key={m.id} value={m.id}>
                {m.title} ({m.range})
              </option>
            ))}
          </select>

          {/* Status Select */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-theme-cardSub border border-theme-border rounded-xl px-2.5 py-1.5 text-xs text-theme-text focus:outline-none focus:border-amber-500"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending Only</option>
            <option value="completed">Completed Only</option>
          </select>

          {/* Reset button */}
          {(searchQuery || selectedModuleId !== 'all' || selectedStatus !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedModuleId('all');
                setSelectedStatus('all');
              }}
              className="text-xs text-theme-muted hover:text-theme-text underline px-1"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* 3. Main Content: Level-Wise Accordions (Default) OR Day Timeline */}
      {viewMode === 'level-accordions' ? (
        /* LEVEL-WISE ACCORDIONS */
        <div className="space-y-4">
          {groupedByModule.length === 0 ? (
            <div className="bg-theme-card border border-theme-border rounded-3xl p-10 text-center text-xs text-theme-muted space-y-2">
              <Code2 className="w-8 h-8 mx-auto text-theme-muted/50" />
              <div>No Java lecture topics match your current filter.</div>
            </div>
          ) : (
            groupedByModule.map(mod => {
              const isOpen = Boolean(openModules[mod.id]);

              return (
                <div
                  key={mod.id}
                  className="bg-theme-card border border-theme-border rounded-3xl overflow-hidden shadow-sm"
                >
                  {/* Module Level Accordion Header Trigger */}
                  <div
                    onClick={() => toggleModuleAccordion(mod.id)}
                    className="p-4 sm:p-5 bg-theme-cardSub/60 hover:bg-theme-cardSub border-b border-theme-border cursor-pointer transition-colors flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500 flex-shrink-0">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm sm:text-base font-bold text-theme-text truncate">
                            {mod.title}
                          </h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            {mod.range}
                          </span>
                        </div>
                        <p className="text-xs text-theme-muted truncate mt-0.5">
                          {mod.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 flex-shrink-0">
                      {/* Completion count & mini bar */}
                      <div className="text-right hidden sm:block">
                        <div className="text-xs font-mono font-bold text-theme-text">
                          {mod.completed} / {mod.total}
                        </div>
                        <div className="text-[10px] text-theme-muted font-mono">
                          {mod.pct}% done
                        </div>
                      </div>

                      <div className="w-20 sm:w-28 bg-theme-border h-2 rounded-full overflow-hidden hidden xs:block">
                        <div
                          className="bg-amber-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${mod.pct}%` }}
                        />
                      </div>

                      <ChevronDown
                        className={`w-4 h-4 text-theme-muted transition-transform duration-300 ${
                          isOpen ? '' : '-rotate-90'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Module Topics List (Animated Smooth Accordion) */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="divide-y divide-theme-border">
                      {mod.items.map(task => {
                        const isDone = Boolean(task.completed);
                        const isExpanded = Boolean(expandedNotes[task.id]);

                        return (
                          <div
                            key={task.id}
                            id={`lecture-card-${task.id}`}
                            className={`p-4 transition-colors ${
                              isDone
                                ? 'bg-emerald-500/5 dark:bg-emerald-950/15'
                                : 'hover:bg-theme-cardSub/40'
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              {/* Left: Checkbox + Topic Details */}
                              <div
                                className="flex items-start space-x-3 flex-1 min-w-0 cursor-pointer"
                                onClick={() => handleToggleTask(task.dayNumber, task.id, isDone)}
                              >
                                <button
                                  type="button"
                                  className="mt-0.5 flex-shrink-0 transition-transform active:scale-95"
                                  title={isDone ? 'Mark uncompleted' : 'Mark completed'}
                                >
                                  {isDone ? (
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                  ) : (
                                    <Circle className="w-5 h-5 text-theme-muted hover:text-amber-400" />
                                  )}
                                </button>

                                <div className="space-y-1 min-w-0 flex-1">
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                                      #{task.topicNum < 10 ? `0${task.topicNum}` : task.topicNum}
                                    </span>

                                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-theme-muted border border-theme-border">
                                      Day {task.dayNumber}
                                    </span>

                                    {task.notes && (
                                      <span className="text-[10px] text-emerald-400 font-semibold flex items-center space-x-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                                        <span>Notes Included</span>
                                      </span>
                                    )}
                                  </div>

                                  <h4
                                    className={`text-sm sm:text-base font-semibold transition-colors ${
                                      isDone ? 'line-through text-theme-muted' : 'text-theme-text'
                                    }`}
                                  >
                                    {task.title}
                                  </h4>
                                </div>
                              </div>

                              {/* Right: Notes Toggle Button */}
                              <div className="flex items-center space-x-2 pl-8 sm:pl-0">
                                <button
                                  type="button"
                                  onClick={() => toggleNoteAccordion(task.id)}
                                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center space-x-1.5 transition-all ${
                                    isExpanded
                                      ? 'bg-amber-500 text-black border-amber-500 font-bold shadow-sm'
                                      : task.notes
                                      ? 'bg-amber-500/15 text-amber-400 border-amber-500/30 hover:bg-amber-500/25'
                                      : 'bg-theme-cardSub hover:bg-theme-cardHover text-theme-secondary hover:text-theme-text border-theme-border'
                                  }`}
                                >
                                  <FileText className="w-3.5 h-3.5" />
                                  <span>{isExpanded ? 'Hide Notes' : (task.notes ? 'View Notes' : 'Notes')}</span>
                                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                </button>
                              </div>
                            </div>

                            {/* Embedded Smooth Lecture Notes Accordion */}
                            <LectureNotesAccordion
                              task={task}
                              dayNumber={task.dayNumber}
                              isOpen={isExpanded}
                            />
                          </div>
                        );
                      })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      ) : (
        /* DAY-BY-DAY 70-DAY TIMELINE VIEW */
        <div className="space-y-6">
          {/* 70-Day Timeline Navigator Bar */}
          <DayNavigatorTimeline />

          {/* Today's Lecture Target Card */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-theme-text">Day {activeDay.dayNumber} Lecture Targets</h3>
                  <p className="text-xs text-theme-muted">{activeDay.title} • {activeDay.dateDisplay}</p>
                </div>
              </div>

              {/* Prev / Next Day controls */}
              <div className="flex items-center space-x-2 text-xs">
                <button
                  disabled={activeDay.dayNumber <= 1}
                  onClick={() => setActiveDayNumber(activeDay.dayNumber - 1)}
                  className="px-3 py-1.5 rounded-xl border border-theme-border bg-theme-cardSub text-theme-secondary hover:text-theme-text disabled:opacity-40 transition-colors flex items-center space-x-1"
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
                  className="px-3 py-1.5 rounded-xl border border-theme-border bg-theme-cardSub text-theme-secondary hover:text-theme-text disabled:opacity-40 transition-colors flex items-center space-x-1"
                >
                  <span className="hidden sm:inline">Next Day</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Daily Java Chapters */}
            <div className="space-y-3">
              {currentDayJavaTasks.map((task) => {
                const isDone = Boolean(task.completed);
                const isExpanded = Boolean(expandedNotes[task.id]);

                return (
                  <div
                    key={task.id}
                    id={`lecture-card-${task.id}`}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                      isDone
                        ? 'bg-emerald-500/5 dark:bg-emerald-950/15 border-emerald-500/25 opacity-95'
                        : 'bg-theme-card border-theme-border hover:border-theme-borderSub shadow-sm'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div
                        className="flex items-start space-x-3.5 flex-1 cursor-pointer"
                        onClick={() => handleToggleTask(activeDay.dayNumber, task.id, isDone)}
                      >
                        <button type="button" className="mt-0.5 flex-shrink-0 transition-transform active:scale-95">
                          {isDone ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          ) : (
                            <Circle className="w-5 h-5 text-theme-muted hover:text-amber-400" />
                          )}
                        </button>

                        <div className="space-y-1.5 flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-500 border border-amber-500/30">
                              <Code2 className="w-3 h-3" />
                              <span>Core Java Video #{task.num || 1}</span>
                            </span>

                            {task.notes && (
                              <span className="text-[10px] text-emerald-400 font-semibold flex items-center space-x-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                <span>Notes Available</span>
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

                      <div className="flex items-center space-x-2 pt-2 sm:pt-0 pl-8 sm:pl-0 border-t sm:border-t-0 border-theme-border">
                        <button
                          type="button"
                          onClick={() => toggleNoteAccordion(task.id)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center space-x-1.5 transition-all ${
                            isExpanded
                              ? 'bg-amber-500 text-black border-amber-500 font-bold shadow-sm'
                              : task.notes
                              ? 'bg-amber-500/15 text-amber-400 border-amber-500/30 hover:bg-amber-500/25'
                              : 'bg-theme-cardSub hover:bg-theme-cardHover text-theme-secondary hover:text-theme-text border-theme-border'
                          }`}
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>{isExpanded ? 'Hide Notes' : (task.notes ? 'View Notes' : 'Notes')}</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Inline Smooth Notes Accordion */}
                    <LectureNotesAccordion
                      task={task}
                      dayNumber={activeDay.dayNumber}
                      isOpen={isExpanded}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
