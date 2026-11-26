import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Brain,
  CheckCircle2,
  Circle,
  ExternalLink,
  Code2,
  Play,
  RotateCcw,
  Copy,
  Check,
  Search,
  Filter,
  Sparkles,
  BookOpen,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Layers,
  Flame,
  Trophy,
  Terminal,
  Eye,
  EyeOff,
  X,
  ArrowUpRight,
  Award,
  Target,
  Rocket,
  ListFilter,
  LayoutGrid,
  List
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { allDsaGuidesByTitle } from '../data/dsaQuestionsData';
import CodeEditor from './CodeEditor';
import confetti from 'canvas-confetti';

// Company interview tag mapping for curated RisingBrain LeetCode problems
const COMPANY_TAGS_MAP = {
  "Two Sum II": ["Amazon", "Google", "Apple"],
  "3Sum": ["Meta", "Amazon", "Microsoft"],
  "Sort Colors": ["Microsoft", "Google", "Adobe"],
  "Move Zeroes": ["Meta", "Bloomberg", "Apple"],
  "Container With Most Water": ["Google", "Amazon", "Goldman Sachs"],
  "Trapping Rain Water": ["Google", "Amazon", "Microsoft", "Goldman Sachs"],
  "Maximum Sum Subarray of Size K": ["Amazon", "Microsoft"],
  "Longest Substring Without Repeating Characters": ["Amazon", "Google", "Bloomberg", "Meta"],
  "Max Consecutive Ones III": ["Meta", "Google"],
  "Fruit Into Baskets": ["Google", "Amazon"],
  "Minimum Size Subarray Sum": ["Goldman Sachs", "Amazon"],
  "Find All Anagrams in a String": ["Amazon", "Microsoft"],
  "Subarray Product Less Than K": ["Amazon", "Uber"],
  "Maximum Average Subarray I": ["Google", "Meta"],
  "Subarray Sum Equals K": ["Meta", "Google", "Amazon"],
  "Subarray Sums Divisible by K": ["Amazon", "Microsoft"],
  "Contiguous Array": ["Google", "Amazon"],
  "Product of Array Except Self": ["Amazon", "Apple", "Microsoft", "Meta"],
  "Next Permutation": ["Google", "Amazon", "Meta"],
  "Merge Intervals": ["Google", "Meta", "Amazon", "Microsoft"],
  "Insert Interval": ["Google", "Amazon", "LinkedIn"],
  "Non-overlapping Intervals": ["Google", "Amazon"],
  "Rotate Image": ["Amazon", "Microsoft"],
  "Spiral Matrix": ["Microsoft", "Google", "Apple"],
  "Valid Palindrome": ["Meta", "Microsoft"],
  "Valid Anagram": ["Bloomberg", "Amazon"],
  "Group Anagrams": ["Amazon", "Microsoft", "Meta"],
  "Longest Common Prefix": ["Google", "Amazon"],
  "String to Integer (atoi)": ["Amazon", "Microsoft", "Meta"],
  "Longest Palindromic Substring": ["Amazon", "Microsoft", "Google"],
  "Valid Parentheses": ["Amazon", "Google", "Meta", "Bloomberg"],
  "Min Stack": ["Amazon", "Bloomberg"],
  "Evaluate Reverse Polish Notation": ["Amazon", "LinkedIn"],
  "Daily Temperatures": ["Amazon", "Meta", "Google"],
  "Next Greater Element I": ["Amazon", "Adobe"],
  "Next Greater Element II": ["Amazon", "Google"],
  "Online Stock Span": ["Amazon", "Microsoft"],
  "Largest Rectangle in Histogram": ["Google", "Amazon", "Meta"],
  "Asteroid Collision": ["Amazon", "Google"],
  "Remove All Adjacent Duplicates In String": ["Meta", "Amazon"],
  "Simplify Path": ["Meta", "Google"],
  "Backspace String Compare": ["Google", "Meta"],
  "Binary Search": ["Apple", "Amazon", "Google"],
  "Search Insert Position": ["Google", "Amazon"],
  "Find First and Last Position of Element in Sorted Array": ["Google", "LinkedIn", "Amazon"],
  "Search in Rotated Sorted Array": ["Amazon", "Microsoft", "Meta"],
  "Find Minimum in Rotated Sorted Array": ["Microsoft", "Amazon"],
  "Search a 2D Matrix": ["Amazon", "Apple"],
  "Find Peak Element": ["Meta", "Amazon", "Google"],
  "Koko Eating Bananas": ["Google", "Airbnb"],
  "Capacity To Ship Packages Within D Days": ["Google", "Amazon"],
  "Split Array Largest Sum": ["Google", "Amazon"],
  "Aggressive Cows": ["Amazon", "Flipkart"],
  "Book Allocation Problem": ["Google", "Amazon", "Infosys"],
  "Single Element in a Sorted Array": ["Amazon", "Microsoft"],
  "Median of Two Sorted Arrays": ["Google", "Amazon", "Microsoft", "Apple"]
};

export default function DSAPracticeSheetView() {
  const { days, toggleTask, updateTaskCodeSolution } = useLearning();

  // 1. Flatten all 70 DSA tasks with day numbers and metadata
  const allDsaProblems = useMemo(() => {
    const list = [];
    (days || []).forEach(day => {
      (day.tasks || []).forEach(task => {
        if (task.type === 'dsa') {
          const guide = allDsaGuidesByTitle[task.title] || {};
          list.push({
            ...task,
            dayNumber: day.dayNumber,
            dateDisplay: day.dateDisplay,
            desc: guide.desc || task.desc || `Solve ${task.title} using the ${task.pattern || 'core'} pattern.`,
            inputExample: guide.inputExample || task.example || 'Provided in problem statement',
            outputExample: guide.outputExample || 'Expected result',
            explanation: guide.explanation || '',
            constraints: guide.constraints || 'Standard LeetCode constraints',
            hint: guide.hint || task.hint || 'Analyze the input characteristics and apply the optimal pattern.',
            companies: COMPANY_TAGS_MAP[task.title] || ["Product Based", "Top Tech"]
          });
        }
      });
    });
    return list;
  }, [days]);

  // 2. Filters & Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all'); // 'all', 'Array', 'Strings', 'Binary Search', 'Stack'
  const [selectedPattern, setSelectedPattern] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all'); // 'all', 'Easy', 'Medium', 'Hard'
  const [selectedStatus, setSelectedStatus] = useState('all'); // 'all', 'unsolved', 'solved'
  const [viewMode, setViewMode] = useState('grouped'); // 'grouped' | 'table'

  // 3. Active Problem for the Interactive Workbench / IDE Drawer
  const [activeProblemId, setActiveProblemId] = useState(() => allDsaProblems[0]?.id || null);
  const [showWorkbench, setShowWorkbench] = useState(false);
  const [workbenchTab, setWorkbenchTab] = useState('problem'); // 'problem' | 'hints' | 'solution'

  // Code state per task
  const [codeAnswers, setCodeAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem('study_dsa_solutions_sheet_v1');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const [consoleOutput, setConsoleOutput] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Active problem object
  const activeProblem = useMemo(() => {
    return allDsaProblems.find(p => p.id === activeProblemId) || allDsaProblems[0] || null;
  }, [allDsaProblems, activeProblemId]);

  // Current code in editor: clean canvas by default, showing 2-line placeholder comments
  const currentCode = useMemo(() => {
    if (!activeProblem) return '';
    const raw = codeAnswers[activeProblem.id] !== undefined
      ? codeAnswers[activeProblem.id]
      : (activeProblem.codeSolution || '');

    // Strip legacy generated boilerplate so the clean placeholder appears
    if (typeof raw === 'string' && (
      raw.startsWith('// RisingBrain Problem:') ||
      raw.trim() === '// Write your JavaScript solution here...' ||
      raw.trim() === '// Write your Two-Pointer logic here...' ||
      raw.trim() === '// Write your Java solution here...'
    )) {
      return '';
    }
    return raw;
  }, [activeProblem, codeAnswers]);

  // Metrics summary
  const totalCount = allDsaProblems.length;
  const solvedCount = allDsaProblems.filter(p => p.completed).length;
  const solvedPct = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  const easyTotal = allDsaProblems.filter(p => p.difficulty === 'Easy').length;
  const easySolved = allDsaProblems.filter(p => p.difficulty === 'Easy' && p.completed).length;

  const mediumTotal = allDsaProblems.filter(p => p.difficulty === 'Medium').length;
  const mediumSolved = allDsaProblems.filter(p => p.difficulty === 'Medium' && p.completed).length;

  const hardTotal = allDsaProblems.filter(p => p.difficulty === 'Hard').length;
  const hardSolved = allDsaProblems.filter(p => p.difficulty === 'Hard' && p.completed).length;

  // Extract all unique patterns
  const allPatterns = useMemo(() => {
    const set = new Set();
    allDsaProblems.forEach(p => {
      if (p.pattern) set.add(p.pattern.trim());
    });
    return Array.from(set);
  }, [allDsaProblems]);

  // Filtered problems list
  const filteredProblems = useMemo(() => {
    return allDsaProblems.filter(item => {
      if (selectedTopic !== 'all' && item.topic !== selectedTopic) return false;
      if (selectedPattern !== 'all' && item.pattern !== selectedPattern) return false;
      if (selectedDifficulty !== 'all' && item.difficulty !== selectedDifficulty) return false;
      if (selectedStatus === 'solved' && !item.completed) return false;
      if (selectedStatus === 'unsolved' && item.completed) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchPattern = (item.pattern || '').toLowerCase().includes(q);
        const matchTopic = (item.topic || '').toLowerCase().includes(q);
        const matchCompanies = (item.companies || []).some(c => c.toLowerCase().includes(q));
        if (!matchTitle && !matchPattern && !matchTopic && !matchCompanies) return false;
      }

      return true;
    });
  }, [allDsaProblems, selectedTopic, selectedPattern, selectedDifficulty, selectedStatus, searchQuery]);

  // Problems grouped by Pattern (RisingBrain accordion structure)
  const groupedByPattern = useMemo(() => {
    const groups = {};
    filteredProblems.forEach(item => {
      const pat = item.pattern || 'General Patterns';
      if (!groups[pat]) {
        groups[pat] = {
          patternName: pat,
          topic: item.topic || 'Data Structures',
          items: []
        };
      }
      groups[pat].items.push(item);
    });
    return Object.values(groups);
  }, [filteredProblems]);

  // Accordion open state for pattern groups - ALL DEFAULT CLOSED!
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (patName) => {
    setOpenGroups(prev => ({
      ...prev,
      [patName]: !prev[patName]
    }));
  };

  // Toggle problem completion
  const handleToggleTask = (e, problem) => {
    e.stopPropagation();
    toggleTask(problem.dayNumber, problem.id);
    if (!problem.completed) {
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 }
        });
      } catch (err) {}
    }
  };

  // Open IDE workbench for problem
  const handleOpenWorkbench = (problem) => {
    setActiveProblemId(problem.id);
    setShowWorkbench(true);
    setWorkbenchTab('problem');
    setConsoleOutput('');
    // Smooth scroll down to workbench if desired
    setTimeout(() => {
      const el = document.getElementById('dsa-workbench-section');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  // Code editor updates
  const handleCodeChange = (newVal) => {
    if (!activeProblem) return;
    const updated = { ...codeAnswers, [activeProblem.id]: newVal };
    setCodeAnswers(updated);
    try {
      localStorage.setItem('study_dsa_solutions_sheet_v1', JSON.stringify(updated));
    } catch (e) {}
    updateTaskCodeSolution(activeProblem.dayNumber, activeProblem.id, newVal);
  };

  // Run JavaScript code in browser
  const handleRunJS = () => {
    if (!currentCode || !currentCode.trim()) {
      setConsoleOutput("Code canvas is empty. Write your JavaScript solution first!");
      return;
    }

    try {
      const logs = [];
      const customConsole = {
        log: (...args) => {
          logs.push(
            args.map(a => {
              if (a === null) return 'null';
              if (a === undefined) return 'undefined';
              if (typeof a === 'object') {
                try {
                  return JSON.stringify(a);
                } catch (e) {
                  return String(a);
                }
              }
              return String(a);
            }).join(' ')
          );
        },
        warn: (...args) => logs.push('[WARN] ' + args.join(' ')),
        error: (...args) => logs.push('[ERROR] ' + args.join(' '))
      };

      const runner = new Function('console', `
        "use strict";
        ${currentCode}
      `);

      const result = runner(customConsole);

      if (logs.length > 0) {
        setConsoleOutput(logs.join('\n'));
      } else if (result !== undefined) {
        setConsoleOutput(typeof result === 'object' ? JSON.stringify(result) : String(result));
      } else {
        setConsoleOutput("✓ Code executed successfully with 0 errors.\n(Tip: Call console.log(...) to see your return values printed here)");
      }
    } catch (err) {
      setConsoleOutput(`Execution Error: ${err.message}`);
    }
  };

  // Copy code
  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Reset code to blank canvas
  const handleResetCode = () => {
    if (!activeProblem) return;
    handleCodeChange('');
    setConsoleOutput('');
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Banner & RisingBrain Progress Metrics */}
      <div className="relative overflow-hidden rounded-3xl border border-theme-border bg-theme-card p-6 sm:p-8 shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-28 -mt-28" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                <Brain className="w-3.5 h-3.5" />
                <span>RisingBrain Pattern-Wise Sheet</span>
              </span>

              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-theme-cardSub text-theme-secondary border border-theme-border">
                <Target className="w-3.5 h-3.5 text-cyan-400" />
                <span>70 Problems • 12 Patterns</span>
              </span>

              <a
                href="https://www.risingbrain.org/sheet"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold text-theme-muted hover:text-cyan-400 hover:border-cyan-500/40 border border-theme-border transition-colors"
                title="Open official risingbrain.org sheet"
              >
                <span>Official Sheet</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight">
              DSA Practice & Pattern Sheet
            </h1>

            <p className="text-sm text-theme-muted max-w-2xl leading-relaxed">
              Master product & service-based interview algorithms pattern by pattern. Solve each problem directly in the interactive JavaScript IDE or open on LeetCode.
            </p>
          </div>

          {/* Aggregate Metrics Card with Ring */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-theme-cardSub border border-theme-border rounded-2xl p-4 sm:p-5 flex-shrink-0 shadow-sm">
            {/* Circular Progress Ring */}
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
                  stroke="#06b6d4"
                  strokeWidth="6"
                  strokeDasharray={2 * Math.PI * 26}
                  strokeDashoffset={2 * Math.PI * 26 - (solvedPct / 100) * (2 * Math.PI * 26)}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-sm font-mono text-cyan-400">
                {solvedPct}%
              </div>
            </div>

            {/* Counts & Breakdown */}
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-theme-muted font-medium">Sheet Solved:</span>
                <span className="text-base font-extrabold font-mono text-theme-text">
                  {solvedCount} / {totalCount}
                </span>
              </div>

              {/* Difficulty Badges */}
              <div className="flex items-center gap-1.5 text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  Easy: {easySolved}/{easyTotal}
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  Med: {mediumSolved}/{mediumTotal}
                </span>
                <span className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400">
                  Hard: {hardSolved}/{hardTotal}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Topic Filter Pills */}
        <div className="mt-6 pt-5 border-t border-theme-border flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { id: 'all', label: 'All Topics', count: allDsaProblems.length },
              { id: 'Array', label: 'Arrays', count: allDsaProblems.filter(p => p.topic === 'Array').length },
              { id: 'Strings', label: 'Strings', count: allDsaProblems.filter(p => p.topic === 'Strings').length },
              { id: 'Binary Search', label: 'Binary Search', count: allDsaProblems.filter(p => p.topic === 'Binary Search').length },
              { id: 'Stack', label: 'Stack & Queue', count: allDsaProblems.filter(p => p.topic === 'Stack').length }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTopic(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  selectedTopic === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'bg-theme-cardSub text-theme-muted hover:text-theme-text border border-theme-border'
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-black/30">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-1 bg-theme-cardSub border border-theme-border p-1 rounded-xl text-xs">
            <button
              onClick={() => setViewMode('grouped')}
              className={`p-1.5 rounded-lg flex items-center space-x-1 transition-colors ${
                viewMode === 'grouped'
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                  : 'text-theme-muted hover:text-theme-text'
              }`}
              title="Pattern Grouped View (RisingBrain Accordion)"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden sm:inline">Pattern Groups</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg flex items-center space-x-1 transition-colors ${
                viewMode === 'table'
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                  : 'text-theme-muted hover:text-theme-text'
              }`}
              title="Flat Table Matrix View"
            >
              <List className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden sm:inline">Table List</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Secondary Filter Toolbar (Search + Difficulty + Status + Pattern dropdown) */}
      <div className="bg-theme-card border border-theme-border rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[220px] max-w-md">
          <Search className="w-4 h-4 text-theme-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search problems, patterns, companies..."
            className="w-full bg-theme-cardSub border border-theme-border focus:border-cyan-500/60 rounded-xl pl-9 pr-3 py-1.5 text-xs text-theme-text placeholder-theme-muted focus:outline-none transition-colors"
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
          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="bg-theme-cardSub border border-theme-border rounded-xl px-2.5 py-1.5 text-xs text-theme-text focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-theme-cardSub border border-theme-border rounded-xl px-2.5 py-1.5 text-xs text-theme-text focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Status</option>
            <option value="unsolved">Unsolved Only</option>
            <option value="solved">Solved Only</option>
          </select>

          {/* Reset Filters Button */}
          {(searchQuery || selectedTopic !== 'all' || selectedPattern !== 'all' || selectedDifficulty !== 'all' || selectedStatus !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTopic('all');
                setSelectedPattern('all');
                setSelectedDifficulty('all');
                setSelectedStatus('all');
              }}
              className="text-xs text-theme-muted hover:text-theme-text underline px-1"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* 3. Main Problem List Area: Pattern-Grouped or Table Matrix */}
      {viewMode === 'grouped' ? (
        /* Pattern Grouped Accordion (RisingBrain Style) */
        <div className="space-y-4">
          {groupedByPattern.length === 0 ? (
            <div className="bg-theme-card border border-theme-border rounded-3xl p-10 text-center text-xs text-theme-muted space-y-2">
              <Brain className="w-8 h-8 mx-auto text-theme-muted/50" />
              <div>No problems match the current filter selection.</div>
            </div>
          ) : (
            groupedByPattern.map(group => {
              const isOpen = Boolean(openGroups[group.patternName]);
              const groupTotal = group.items.length;
              const groupSolved = group.items.filter(i => i.completed).length;
              const groupPct = groupTotal > 0 ? Math.round((groupSolved / groupTotal) * 100) : 0;

              return (
                <div
                  key={group.patternName}
                  className="bg-theme-card border border-theme-border rounded-3xl overflow-hidden shadow-sm"
                >
                  {/* Pattern Header Accordion Trigger */}
                  <div
                    onClick={() => toggleGroup(group.patternName)}
                    className="p-4 sm:p-5 bg-theme-cardSub/60 hover:bg-theme-cardSub border-b border-theme-border cursor-pointer transition-colors flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-sm sm:text-base font-bold text-theme-text truncate">
                            {group.patternName}
                          </h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                            {group.topic}
                          </span>
                        </div>
                        <div className="text-xs text-theme-muted truncate mt-0.5">
                          {groupSolved} of {groupTotal} completed ({groupPct}%)
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 flex-shrink-0">
                      {/* Mini progress bar */}
                      <div className="w-20 sm:w-28 bg-theme-border h-2 rounded-full overflow-hidden hidden xs:block">
                        <div
                          className="bg-cyan-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${groupPct}%` }}
                        />
                      </div>

                      <ChevronDown
                        className={`w-4 h-4 text-theme-muted transition-transform duration-300 ${
                          isOpen ? '' : '-rotate-90'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Pattern Problems List (Animated Smooth Accordion) */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="divide-y divide-theme-border">
                      {group.items.map(problem => {
                        const isSelected = activeProblemId === problem.id;

                        return (
                          <div
                            key={problem.id}
                            className={`p-3.5 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 transition-colors ${
                              isSelected
                                ? 'bg-cyan-500/5 dark:bg-cyan-950/15'
                                : 'hover:bg-theme-cardSub/40'
                            }`}
                          >
                            {/* Left: Checkbox + Title + Badges */}
                            <div className="flex items-start space-x-3 flex-1 min-w-0">
                              <button
                                type="button"
                                onClick={(e) => handleToggleTask(e, problem)}
                                className="mt-0.5 flex-shrink-0 transition-transform active:scale-95"
                                title={problem.completed ? 'Mark unsolved' : 'Mark solved'}
                              >
                                {problem.completed ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                ) : (
                                  <Circle className="w-5 h-5 text-theme-muted hover:text-cyan-400" />
                                )}
                              </button>

                              <div className="space-y-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-1.5">
                                  {/* Day pill */}
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-theme-muted border border-theme-border">
                                    Day {problem.dayNumber}
                                  </span>

                                  {/* Difficulty */}
                                  <span
                                    className={`text-[10px] font-bold px-2 py-0.2 rounded-full ${
                                      problem.difficulty === 'Easy'
                                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                                        : problem.difficulty === 'Medium'
                                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                                        : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                                    }`}
                                  >
                                    {problem.difficulty}
                                  </span>

                                  {/* Company tags */}
                                  {(problem.companies || []).slice(0, 3).map((comp, idx) => (
                                    <span
                                      key={idx}
                                      className="text-[10px] px-1.5 py-0.2 rounded bg-theme-cardSub text-theme-muted border border-theme-border"
                                    >
                                      {comp}
                                    </span>
                                  ))}
                                </div>

                                <div className="flex items-center space-x-2">
                                  <h4
                                    className={`text-sm font-semibold transition-colors ${
                                      problem.completed
                                        ? 'line-through text-theme-muted'
                                        : 'text-theme-text'
                                    }`}
                                  >
                                    {problem.title}
                                  </h4>

                                  {problem.link && (
                                    <a
                                      href={problem.link}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="text-theme-muted hover:text-cyan-400 transition-colors"
                                      title="Open on LeetCode"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Right Action: Solve in IDE button */}
                            <div className="flex items-center space-x-2 pl-8 md:pl-0">
                              <button
                                onClick={() => handleOpenWorkbench(problem)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                                  isSelected && showWorkbench
                                    ? 'bg-cyan-500 text-black shadow-md'
                                    : 'bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-400 border border-cyan-500/30'
                                }`}
                              >
                                <Code2 className="w-3.5 h-3.5" />
                                <span>Solve in IDE</span>
                              </button>
                            </div>
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
        /* Flat Table Matrix View */
        <div className="bg-theme-card border border-theme-border rounded-3xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-theme-cardSub/70 text-theme-muted uppercase tracking-wider text-[10px] border-b border-theme-border">
                <tr>
                  <th className="py-3 px-4 w-12 text-center">Status</th>
                  <th className="py-3 px-3 w-16">Day</th>
                  <th className="py-3 px-4">Problem Title</th>
                  <th className="py-3 px-3">Difficulty</th>
                  <th className="py-3 px-4">Pattern</th>
                  <th className="py-3 px-3">Companies</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-theme-border font-mono text-xs">
                {filteredProblems.map(problem => (
                  <tr
                    key={problem.id}
                    className="hover:bg-theme-cardSub/40 transition-colors font-sans"
                  >
                    <td className="py-3 px-4 text-center">
                      <button
                        type="button"
                        onClick={(e) => handleToggleTask(e, problem)}
                        className="transition-transform active:scale-95"
                      >
                        {problem.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto" />
                        ) : (
                          <Circle className="w-4 h-4 text-theme-muted hover:text-cyan-400 mx-auto" />
                        )}
                      </button>
                    </td>

                    <td className="py-3 px-3 font-mono text-theme-muted">
                      Day {problem.dayNumber}
                    </td>

                    <td className="py-3 px-4 font-semibold text-theme-text">
                      <div className="flex items-center space-x-1.5">
                        <span className={problem.completed ? 'line-through text-theme-muted' : ''}>
                          {problem.title}
                        </span>
                        {problem.link && (
                          <a
                            href={problem.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-theme-muted hover:text-cyan-400"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </td>

                    <td className="py-3 px-3">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          problem.difficulty === 'Easy'
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : problem.difficulty === 'Medium'
                            ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                            : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                        }`}
                      >
                        {problem.difficulty}
                      </span>
                    </td>

                    <td className="py-3 px-4 text-cyan-400 text-xs">
                      {problem.pattern}
                    </td>

                    <td className="py-3 px-3 text-theme-muted text-[11px]">
                      {(problem.companies || []).slice(0, 2).join(', ')}
                    </td>

                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleOpenWorkbench(problem)}
                        className="px-2.5 py-1 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-400 border border-cyan-500/30 font-bold text-xs"
                      >
                        Solve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. Interactive DSA IDE Workbench (Opens on problem click or toggle) */}
      {showWorkbench && activeProblem && (
        <div id="dsa-workbench-section" className="space-y-4 pt-4 border-t border-theme-border">
          {/* Workbench Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-theme-card border border-theme-border rounded-3xl p-5 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-theme-muted border border-theme-border">
                    Day {activeProblem.dayNumber}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    {activeProblem.pattern}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      activeProblem.difficulty === 'Easy'
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : activeProblem.difficulty === 'Medium'
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                        : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                    }`}
                  >
                    {activeProblem.difficulty}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-theme-text mt-1">
                  {activeProblem.title}
                </h2>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={(e) => handleToggleTask(e, activeProblem)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  activeProblem.completed
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-theme-cardSub text-theme-muted hover:text-theme-text border border-theme-border'
                }`}
              >
                {activeProblem.completed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Solved ✓</span>
                  </>
                ) : (
                  <>
                    <Circle className="w-4 h-4" />
                    <span>Mark as Solved</span>
                  </>
                )}
              </button>

              {activeProblem.link && (
                <a
                  href={activeProblem.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-theme-cardSub hover:bg-theme-cardSub/80 text-theme-muted hover:text-cyan-400 border border-theme-border text-xs font-bold inline-flex items-center space-x-1"
                >
                  <span>LeetCode</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={() => setShowWorkbench(false)}
                className="p-1.5 rounded-xl bg-theme-cardSub hover:bg-theme-cardSub/80 text-theme-muted hover:text-theme-text border border-theme-border"
                title="Close Workbench"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Workbench Grid: Left Description + Right Code Editor */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Col: Problem Description & Hint (lg:col-span-5) */}
            <div className="lg:col-span-5 bg-theme-card border border-theme-border rounded-3xl p-5 sm:p-6 space-y-4 shadow-sm">
              {/* Tab selector */}
              <div className="flex items-center space-x-1 border-b border-theme-border pb-3 text-xs">
                <button
                  onClick={() => setWorkbenchTab('problem')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center space-x-1.5 ${
                    workbenchTab === 'problem'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-theme-muted hover:text-theme-text'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Problem</span>
                </button>

                <button
                  onClick={() => setWorkbenchTab('hints')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center space-x-1.5 ${
                    workbenchTab === 'hints'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-theme-muted hover:text-theme-text'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Pattern Approach</span>
                </button>
              </div>

              {workbenchTab === 'problem' ? (
                <div className="space-y-4 text-xs sm:text-sm text-theme-text leading-relaxed">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-theme-muted mb-1.5">
                      Description
                    </h4>
                    <p className="whitespace-pre-line text-theme-text/90">
                      {activeProblem.desc}
                    </p>
                  </div>

                  {/* Examples */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-theme-muted">
                      Example
                    </h4>
                    <div className="bg-[#090d13] border border-[#21262d] rounded-2xl p-3 font-mono text-xs space-y-1.5">
                      <div>
                        <span className="text-zinc-500">Input: </span>
                        <span className="text-zinc-300">{activeProblem.inputExample}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500">Output: </span>
                        <span className="text-emerald-400">{activeProblem.outputExample}</span>
                      </div>
                      {activeProblem.explanation && (
                        <div className="pt-1 text-[11px] text-zinc-400 font-sans border-t border-zinc-800">
                          {activeProblem.explanation}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Constraints */}
                  {activeProblem.constraints && (
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-theme-muted">
                        Constraints
                      </h4>
                      <pre className="bg-[#090d13] border border-[#21262d] rounded-2xl p-3 font-mono text-xs text-zinc-400 whitespace-pre-wrap">
                        {activeProblem.constraints}
                      </pre>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3 text-xs sm:text-sm text-theme-text leading-relaxed">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs flex items-start space-x-2">
                    <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-cyan-200">Optimal Pattern: </strong>
                      {activeProblem.pattern}
                    </div>
                  </div>

                  <div className="bg-[#090d13] border border-[#21262d] rounded-2xl p-4 font-mono text-xs text-zinc-300 whitespace-pre-wrap leading-relaxed">
                    {activeProblem.hint}
                  </div>
                </div>
              )}
            </div>

            {/* Right Col: Interactive JavaScript Code Editor (lg:col-span-7) */}
            <div className="lg:col-span-7 bg-theme-card border border-theme-border rounded-3xl overflow-hidden shadow-md">
              {/* Editor Top Bar */}
              <div className="px-4 py-2.5 bg-[#090d13] border-b border-[#21262d] flex items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center space-x-2 truncate">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-zinc-400 font-semibold ml-2">solution.js</span>
                  <span className="text-[10px] text-zinc-500 uppercase px-1.5 py-0.5 rounded bg-zinc-800">
                    JavaScript
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleCopyCode}
                    className="px-2.5 py-1 rounded-lg bg-[#161b22] hover:bg-[#21262d] text-zinc-300 text-xs font-mono flex items-center space-x-1.5 transition-colors border border-[#30363d]"
                    title="Copy code"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                    <span>{isCopied ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={handleResetCode}
                    className="px-2.5 py-1 rounded-lg bg-[#161b22] hover:bg-[#21262d] text-zinc-300 text-xs font-mono flex items-center space-x-1.5 transition-colors border border-[#30363d]"
                    title="Reset to starter template"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Code Editor */}
              <CodeEditor
                value={currentCode}
                onChange={handleCodeChange}
                placeholder={`// Write your JavaScript solution here...\n// (Start typing to write your solution - this canvas is completely blank)`}
                minRows={16}
              />

              {/* Bottom Action Bar: Auto-saved indicator & Run JS Button */}
              <div className="px-4 py-2.5 bg-[#0d1117] border-t border-[#21262d] flex items-center justify-between gap-2">
                <span className="text-[11px] text-zinc-500 font-mono flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Auto-saved to browser</span>
                </span>

                <button
                  onClick={handleRunJS}
                  className="flex items-center space-x-1.5 px-4 py-1.5 rounded-xl font-mono font-bold text-xs bg-cyan-500 hover:bg-cyan-400 text-black shadow-sm transition-all active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run JS Check</span>
                </button>
              </div>

              {/* Console Output Terminal */}
              {consoleOutput && (
                <div className="border-t border-[#21262d] bg-[#070a0e] p-4 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-zinc-400">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span className="font-bold uppercase tracking-wider text-[11px] text-zinc-300">
                        Console Output
                      </span>
                    </div>
                    <button
                      onClick={() => setConsoleOutput('')}
                      className="text-zinc-500 hover:text-zinc-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="text-zinc-200 bg-black/60 p-3 rounded-xl border border-zinc-800 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                    {consoleOutput}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
