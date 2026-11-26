import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Code2,
  CheckCircle2,
  Circle,
  Sparkles,
  BookOpen,
  HelpCircle,
  Eye,
  EyeOff,
  Copy,
  Check,
  RotateCcw,
  Play,
  Terminal,
  Search,
  Plus,
  Coffee,
  Flame,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Layers,
  X,
  LayoutGrid,
  List,
  Target,
  Trophy
} from 'lucide-react';
import { JAVA_PRACTICE_LEVELS, JAVA_PRACTICE_QUESTIONS } from '../data/javaPracticeData';
import CodeEditor from './CodeEditor';
import { executeJavaProgram } from '../utils/javaRunner';
import confetti from 'canvas-confetti';
import { useLearning } from '../context/LearningContext';

const STORAGE_KEY_COMPLETED = 'study_tracker_java_completed_ids_v1';
const STORAGE_KEY_SELECTED_ID = 'study_tracker_java_selected_id_v1';
const STORAGE_KEY_CUSTOM_QUESTIONS = 'study_tracker_java_custom_questions_v1';

export default function JavaPracticeView() {
  // 1. Custom Questions loaded from localStorage
  const [customQuestions, setCustomQuestions] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CUSTOM_QUESTIONS);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // All questions combined
  const allQuestions = useMemo(() => {
    return [...JAVA_PRACTICE_QUESTIONS, ...customQuestions];
  }, [customQuestions]);

  // 2. Filters & View Mode
  const [selectedLevelId, setSelectedLevelId] = useState('all'); // 'all', 'level-1', 'level-2', 'custom'
  const [selectedStatus, setSelectedStatus] = useState('all'); // 'all', 'unsolved', 'solved'
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grouped'); // 'grouped' | 'table'

  // 3. Completed Problems Set
  const [completedIds, setCompletedIds] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMPLETED) || localStorage.getItem('java_practice_completed_ids_v1');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const learningCtx = useLearning();

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedIds));
      localStorage.setItem('java_practice_completed_ids_v1', JSON.stringify(completedIds));
    } catch (e) {}
  }, [completedIds]);

  const toggleProblemCompletion = (qId) => {
    const isDone = completedIds.includes(qId);
    let updated;
    if (isDone) {
      updated = completedIds.filter(id => id !== qId);
    } else {
      updated = [...completedIds, qId];
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 }
        });
      } catch (err) {}
    }
    setCompletedIds(updated);

    // Sync with LearningContext plan days
    if (learningCtx && learningCtx.days && learningCtx.toggleTask) {
      for (const d of learningCtx.days) {
        const match = (d.tasks || []).find(t => t.type === 'practice' && (t.questionId === qId || t.id === qId));
        if (match && match.completed === isDone) {
          learningCtx.toggleTask(d.dayNumber, match.id);
          break;
        }
      }
    }
  };

  // 4. Selected Question & Active Workbench State
  const [selectedQuestionId, setSelectedQuestionId] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SELECTED_ID);
      if (saved && allQuestions.some(q => q.id === saved)) {
        return saved;
      }
    } catch (e) {}
    return allQuestions[0]?.id || 'l1_q1';
  });

  const [showWorkbench, setShowWorkbench] = useState(false);
  const [workbenchTab, setWorkbenchTab] = useState('description'); // 'description' | 'hints' | 'solution'
  const [showSolution, setShowSolution] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SELECTED_ID, selectedQuestionId);
    } catch (e) {}
  }, [selectedQuestionId]);

  // Current question object
  const currentQuestion = useMemo(() => {
    return allQuestions.find(q => q.id === selectedQuestionId) || allQuestions[0];
  }, [allQuestions, selectedQuestionId]);

  // 5. Code State for the active question (auto-saved per question)
  const [userCode, setUserCode] = useState(() => {
    if (!currentQuestion) return '';
    try {
      const saved = localStorage.getItem(`study_tracker_java_code_${currentQuestion.id}`);
      return saved !== null ? saved : currentQuestion.starterCode;
    } catch (e) {
      return currentQuestion.starterCode;
    }
  });

  // Custom standard input for Scanner
  const [customStdin, setCustomStdin] = useState(() => currentQuestion?.sampleInput || '');

  // When selected question changes, load its saved code or starter code
  useEffect(() => {
    if (!currentQuestion) return;
    try {
      const saved = localStorage.getItem(`study_tracker_java_code_${currentQuestion.id}`);
      setUserCode(saved !== null ? saved : currentQuestion.starterCode);
    } catch (e) {
      setUserCode(currentQuestion.starterCode);
    }
    setCustomStdin(currentQuestion.sampleInput || '');
    setWorkbenchTab('description');
    setShowSolution(false);
    setTerminalOutput(null);
  }, [currentQuestion?.id]);

  // Save code changes to localStorage
  const handleCodeChange = (newVal) => {
    setUserCode(newVal);
    if (currentQuestion) {
      try {
        localStorage.setItem(`study_tracker_java_code_${currentQuestion.id}`, newVal);
      } catch (e) {}
    }
  };

  // Reset code to starter template
  const handleResetCode = () => {
    if (!currentQuestion) return;
    setUserCode(currentQuestion.starterCode);
    try {
      localStorage.setItem(`study_tracker_java_code_${currentQuestion.id}`, currentQuestion.starterCode);
    } catch (e) {}
    setTerminalOutput(null);
  };

  // Copy code helper
  const handleCopyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Run Java Program dynamically via javaRunner
  const handleRunJavaCheck = () => {
    const code = userCode;
    const errors = [];
    const warnings = [];

    if (!code || !code.trim()) {
      setTerminalOutput({
        success: false,
        message: 'Compilation Error: The editor is empty.',
        errors: ['Please write your Java code before clicking Run.']
      });
      return;
    }

    // 1. Basic Java Syntax Verification (braces, class, main method)
    const hasClass = /class\s+[A-Za-z0-9_$]+/.test(code);
    if (!hasClass) {
      errors.push("Missing Java Class: Every Java program must define a class (e.g., 'public class Main { ... }').");
    }

    const hasMain = /public\s+static\s+void\s+main\s*\(\s*String\s*(\[\s*\]\s+[A-Za-z0-9_$]+|[A-Za-z0-9_$]+\s*\[\s*\]|\.\.\.\s*[A-Za-z0-9_$]+)\s*\)/.test(code);
    if (!hasMain) {
      errors.push("Missing main method: Java execution starts in 'public static void main(String[] args)'.");
    }

    // Bracket balance check
    let braceBalance = 0;
    let parenBalance = 0;
    let bracketBalance = 0;
    for (let char of code) {
      if (char === '{') braceBalance++;
      else if (char === '}') braceBalance--;
      else if (char === '(') parenBalance++;
      else if (char === ')') parenBalance--;
      else if (char === '[') bracketBalance++;
      else if (char === ']') bracketBalance--;
      if (braceBalance < 0 || parenBalance < 0 || bracketBalance < 0) break;
    }
    if (braceBalance !== 0 || parenBalance !== 0 || bracketBalance !== 0) {
      errors.push("Bracket Mismatch: Ensure all '{ }', '( )', and '[ ]' are properly balanced and closed.");
    }

    if (errors.length === 0) {
      const runResult = executeJavaProgram(code, customStdin);
      if (runResult.success) {
        setTerminalOutput({
          success: true,
          output: runResult.output,
          warnings: warnings.length > 0 ? warnings : null
        });
      } else {
        setTerminalOutput({
          success: false,
          message: 'Runtime Exception:',
          errors: [runResult.error]
        });
      }
    } else {
      setTerminalOutput({
        success: false,
        message: `Compilation Error (${errors.length}):`,
        errors: errors
      });
    }
  };

  // 6. Metrics Calculations
  const totalCount = allQuestions.length;
  const completedCount = completedIds.filter(id => allQuestions.some(q => q.id === id)).length;
  const completionPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const activeLevels = useMemo(() => {
    return JAVA_PRACTICE_LEVELS.filter(lvl => !lvl.upcoming || allQuestions.some(q => q.levelId === lvl.id));
  }, [allQuestions]);

  // 7. Filtered Questions
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter(q => {
      if (selectedLevelId === 'custom' && !q.id.startsWith('custom_')) return false;
      if (selectedLevelId !== 'all' && selectedLevelId !== 'custom' && q.levelId !== selectedLevelId) return false;

      if (selectedStatus === 'solved' && !completedIds.includes(q.id)) return false;
      if (selectedStatus === 'unsolved' && completedIds.includes(q.id)) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = q.title.toLowerCase().includes(query);
        const matchDesc = q.description.toLowerCase().includes(query);
        const matchConcept = (q.concepts || '').toLowerCase().includes(query);
        const matchTags = (q.tags || []).some(t => t.toLowerCase().includes(query));
        if (!matchTitle && !matchDesc && !matchConcept && !matchTags) return false;
      }

      return true;
    });
  }, [allQuestions, selectedLevelId, selectedStatus, searchQuery, completedIds]);

  // Group filtered questions by Level (Level-wise accordions just like DSA page)
  const groupedByLevel = useMemo(() => {
    const groups = activeLevels.map(lvl => ({
      id: lvl.id,
      title: `${lvl.title} — ${lvl.subtitle}`,
      subtitle: lvl.subtitle,
      items: filteredQuestions.filter(q => q.levelId === lvl.id),
      allCount: allQuestions.filter(q => q.levelId === lvl.id).length,
      doneCount: allQuestions.filter(q => q.levelId === lvl.id && completedIds.includes(q.id)).length
    }));

    const customItems = filteredQuestions.filter(q => q.id.startsWith('custom_'));
    if (customItems.length > 0 || selectedLevelId === 'custom') {
      const allCustom = allQuestions.filter(q => q.id.startsWith('custom_'));
      groups.push({
        id: 'custom',
        title: 'Custom Practice Drills',
        subtitle: 'User-added problem drills from Claude / Online compiler',
        items: customItems,
        allCount: allCustom.length,
        doneCount: allCustom.filter(q => completedIds.includes(q.id)).length
      });
    }

    return groups.filter(g => g.items.length > 0 || (selectedLevelId === 'all' && !searchQuery && selectedStatus === 'all'));
  }, [activeLevels, filteredQuestions, allQuestions, completedIds, selectedLevelId, searchQuery, selectedStatus]);

  // Accordion open state: { [levelId]: boolean } - ALL DEFAULT CLOSED!
  const [openLevels, setOpenLevels] = useState({});

  const toggleLevelAccordion = (lvlId) => {
    setOpenLevels(prev => ({
      ...prev,
      [lvlId]: !prev[lvlId]
    }));
  };

  // Open IDE workbench for problem
  const handleOpenWorkbench = (q) => {
    setSelectedQuestionId(q.id);
    setShowWorkbench(true);
    setWorkbenchTab('description');
    setTerminalOutput(null);
    setTimeout(() => {
      const el = document.getElementById('java-workbench-section');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  // 8. Custom Question Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customLevel, setCustomLevel] = useState('level-1');
  const [customDesc, setCustomDesc] = useState('');
  const [customStarter, setCustomStarter] = useState(`public class Main {
    public static void main(String[] args) {
        // Write your solution here
        
    }
}`);
  const [customSolution, setCustomSolution] = useState('');

  const handleSaveCustomQuestion = (e) => {
    e.preventDefault();
    if (!customTitle.trim()) return;

    const newQ = {
      id: `custom_${Date.now()}`,
      levelId: customLevel,
      levelTitle: (JAVA_PRACTICE_LEVELS.find(l => l.id === customLevel)?.title) || 'Custom Drill',
      index: allQuestions.length + 1,
      title: customTitle.trim(),
      badge: 'Custom Drill',
      tags: ['Custom', 'User Added'],
      description: customDesc.trim() || 'Custom practice question added by user.',
      sampleInput: 'Provided by user',
      sampleOutput: 'Verified by user',
      starterCode: customStarter,
      solutionCode: customSolution.trim() || customStarter,
      hints: ['Review your logic carefully step-by-step.'],
      concepts: 'Custom practice drill from Claude / Online compiler.'
    };

    const updated = [...customQuestions, newQ];
    setCustomQuestions(updated);
    try {
      localStorage.setItem(STORAGE_KEY_CUSTOM_QUESTIONS, JSON.stringify(updated));
    } catch (err) {}

    setSelectedQuestionId(newQ.id);
    setShowAddModal(false);
    setCustomTitle('');
    setCustomDesc('');
    setCustomSolution('');
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Banner & Progress Analytics (Matching DSA Page) */}
      <div className="relative overflow-hidden rounded-3xl border border-theme-border bg-theme-card p-6 sm:p-8 shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-28 -mt-28" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 flex-1 min-w-0 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/30">
                <Coffee className="w-3.5 h-3.5 text-amber-500" />
                <span>Core Java Practice Lab</span>
              </span>

              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-theme-cardSub text-theme-secondary border border-theme-border">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                <span>{allQuestions.length} Drills • All Levels</span>
              </span>

              <button
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/40 transition-all"
              >
                <Plus className="w-3 h-3" />
                <span>Add Question</span>
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight">
              Java Syntax & Core Practice
            </h1>

            <p className="text-sm text-theme-muted max-w-2xl leading-relaxed">
              Step through progressive Core Java problem levels curated by Claude. Write standalone programs with Scanner input, run real code live in the in-browser Java 17 IDE, and master Java fundamentals.
            </p>
          </div>

          {/* Aggregate Progress Ring Card */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-theme-cardSub border border-theme-border rounded-2xl p-4 sm:p-5 flex-shrink-0 shadow-sm">
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
                  strokeDashoffset={2 * Math.PI * 26 - (completionPct / 100) * (2 * Math.PI * 26)}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-sm font-mono text-amber-500 dark:text-amber-400">
                {completionPct}%
              </div>
            </div>

            <div className="space-y-1.5 text-center sm:text-left min-w-[180px]">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-theme-muted font-medium">Practice Solved:</span>
                <span className="text-base font-extrabold font-mono text-theme-text">
                  {completedCount} / {totalCount}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-theme-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${completionPct}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-theme-muted font-mono">
                <span>{completedCount === totalCount ? 'All Completed! 🎉' : `${totalCount - completedCount} drills left`}</span>
                <span className="text-amber-500 font-semibold">
                  {activeLevels.filter(lvl => allQuestions.filter(q => q.levelId === lvl.id && completedIds.includes(q.id)).length === allQuestions.filter(q => q.levelId === lvl.id).length && allQuestions.filter(q => q.levelId === lvl.id).length > 0).length} / {activeLevels.length} Lvls
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Level Filter Tabs (Matching DSA Topic Pills) */}
        <div className="mt-6 pt-5 border-t border-theme-border flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 max-w-full scrollbar-thin">
            {[
              { id: 'all', label: 'All Levels', count: allQuestions.length },
              ...activeLevels.map(lvl => ({
                id: lvl.id,
                label: lvl.title,
                count: allQuestions.filter(q => q.levelId === lvl.id).length
              })),
              ...(customQuestions.length > 0 ? [{ id: 'custom', label: 'Custom Drills', count: customQuestions.length }] : [])
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedLevelId(tab.id)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  selectedLevelId === tab.id
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm'
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
          <div className="flex items-center space-x-1 bg-theme-cardSub border border-theme-border p-1 rounded-xl text-xs flex-shrink-0 self-end md:self-auto">
            <button
              onClick={() => setViewMode('grouped')}
              className={`p-1.5 rounded-lg flex items-center space-x-1 transition-colors ${
                viewMode === 'grouped'
                  ? 'bg-amber-500/20 text-amber-400 font-bold'
                  : 'text-theme-muted hover:text-theme-text'
              }`}
              title="Level-wise Accordion View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden sm:inline">Level Groups</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg flex items-center space-x-1 transition-colors ${
                viewMode === 'table'
                  ? 'bg-amber-500/20 text-amber-400 font-bold'
                  : 'text-theme-muted hover:text-theme-text'
              }`}
              title="Table List View"
            >
              <List className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden sm:inline">Table List</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Secondary Filter Toolbar (Search + Status + Add Modal Trigger) */}
      <div className="bg-theme-card border border-theme-border rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[220px] max-w-md">
          <Search className="w-4 h-4 text-theme-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Java questions, concepts, tags..."
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

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Status select */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-theme-cardSub border border-theme-border rounded-xl px-2.5 py-1.5 text-xs text-theme-text focus:outline-none focus:border-amber-500"
          >
            <option value="all">All Status</option>
            <option value="unsolved">Unsolved Only</option>
            <option value="solved">Solved Only</option>
          </select>

          {/* Reset Filters */}
          {(searchQuery || selectedLevelId !== 'all' || selectedStatus !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLevelId('all');
                setSelectedStatus('all');
              }}
              className="text-xs text-theme-muted hover:text-theme-text underline px-1"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* 3. Main Problem List Area: Level-Grouped Accordions or Table Matrix */}
      {viewMode === 'grouped' ? (
        /* LEVEL-WISE ACCORDION VIEW (Matching DSA page) */
        <div className="space-y-4">
          {groupedByLevel.length === 0 ? (
            <div className="bg-theme-card border border-theme-border rounded-3xl p-10 text-center text-xs text-theme-muted space-y-2">
              <Coffee className="w-8 h-8 mx-auto text-theme-muted/50" />
              <div>No Java practice questions match the current filter selection.</div>
            </div>
          ) : (
            groupedByLevel.map(group => {
              const isOpen = Boolean(openLevels[group.id]);
              const groupPct = group.allCount > 0 ? Math.round((group.doneCount / group.allCount) * 100) : 0;

              return (
                <div
                  key={group.id}
                  className="bg-theme-card border border-theme-border rounded-3xl overflow-hidden shadow-sm"
                >
                  {/* Level Header Accordion Trigger */}
                  <div
                    onClick={() => toggleLevelAccordion(group.id)}
                    className="p-4 sm:p-5 bg-theme-cardSub/60 hover:bg-theme-cardSub border-b border-theme-border cursor-pointer transition-colors flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500 flex-shrink-0">
                        <Coffee className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-sm sm:text-base font-bold text-theme-text truncate">
                            {group.title}
                          </h3>
                        </div>
                        <div className="text-xs text-theme-muted truncate mt-0.5">
                          {group.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 flex-shrink-0">
                      <div className="text-right hidden sm:block">
                        <div className="text-xs font-mono font-bold text-theme-text">
                          {group.doneCount} / {group.allCount}
                        </div>
                        <div className="text-[10px] text-theme-muted font-mono">
                          {groupPct}% solved
                        </div>
                      </div>

                      <div className="w-20 sm:w-28 bg-theme-border h-2 rounded-full overflow-hidden hidden xs:block">
                        <div
                          className="bg-amber-500 h-full rounded-full transition-all duration-500"
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

                  {/* Level Problems List (CLOSED BY DEFAULT) */}
                  {isOpen && (
                    <div className="divide-y divide-theme-border">
                      {group.items.map(question => {
                        const isDone = completedIds.includes(question.id);
                        const isSelected = selectedQuestionId === question.id;

                        return (
                          <div
                            key={question.id}
                            className={`p-3.5 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 transition-colors ${
                              isSelected
                                ? 'bg-amber-500/5 dark:bg-amber-950/15'
                                : 'hover:bg-theme-cardSub/40'
                            }`}
                          >
                            {/* Left: Checkbox + Title + Badges */}
                            <div className="flex items-start space-x-3 flex-1 min-w-0">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleProblemCompletion(question.id);
                                }}
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
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-theme-muted border border-theme-border font-bold">
                                    #{question.index < 10 ? `0${question.index}` : question.index}
                                  </span>

                                  <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                                    {question.badge}
                                  </span>

                                  {(question.tags || []).slice(0, 3).map((tag, idx) => (
                                    <span
                                      key={idx}
                                      className="text-[10px] px-1.5 py-0.2 rounded bg-theme-cardSub text-theme-muted border border-theme-border"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                <div className="flex items-center space-x-2">
                                  <h4
                                    className={`text-sm font-semibold transition-colors ${
                                      isDone ? 'line-through text-theme-muted' : 'text-theme-text'
                                    }`}
                                  >
                                    {question.title}
                                  </h4>
                                </div>
                              </div>
                            </div>

                            {/* Right: Solve in IDE Action */}
                            <div className="flex items-center space-x-2 pl-8 md:pl-0">
                              <button
                                onClick={() => handleOpenWorkbench(question)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                                  isSelected && showWorkbench
                                    ? 'bg-amber-500 text-black shadow-md'
                                    : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 border border-amber-500/30'
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
                  )}
                </div>
              );
            })
          )}
        </div>
      ) : (
        /* TABLE LIST VIEW */
        <div className="bg-theme-card border border-theme-border rounded-3xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-theme-cardSub/70 text-theme-muted uppercase tracking-wider text-[10px] border-b border-theme-border">
                <tr>
                  <th className="py-3 px-4 w-12 text-center">Status</th>
                  <th className="py-3 px-3 w-16">No.</th>
                  <th className="py-3 px-4">Problem Drill</th>
                  <th className="py-3 px-3">Level</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-3">Key Concepts</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-theme-border font-mono text-xs">
                {filteredQuestions.map(q => {
                  const isDone = completedIds.includes(q.id);

                  return (
                    <tr
                      key={q.id}
                      className="hover:bg-theme-cardSub/40 transition-colors font-sans"
                    >
                      <td className="py-3 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => toggleProblemCompletion(q.id)}
                          className="transition-transform active:scale-95"
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto" />
                          ) : (
                            <Circle className="w-4 h-4 text-theme-muted hover:text-amber-400 mx-auto" />
                          )}
                        </button>
                      </td>

                      <td className="py-3 px-3 font-mono text-theme-muted">
                        #{q.index < 10 ? `0${q.index}` : q.index}
                      </td>

                      <td className="py-3 px-4 font-semibold text-theme-text">
                        <span className={isDone ? 'line-through text-theme-muted' : ''}>
                          {q.title}
                        </span>
                      </td>

                      <td className="py-3 px-3 text-amber-400">
                        {q.levelTitle.split(':')[0]}
                      </td>

                      <td className="py-3 px-4">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                          {q.badge}
                        </span>
                      </td>

                      <td className="py-3 px-3 text-theme-muted text-[11px] truncate max-w-xs">
                        {(q.tags || []).join(', ')}
                      </td>

                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => handleOpenWorkbench(q)}
                          className="px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 border border-amber-500/30 font-bold text-xs"
                        >
                          Solve
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. Interactive Java IDE Workbench (Opens on problem click) */}
      {showWorkbench && currentQuestion && (
        <div id="java-workbench-section" className="space-y-4 pt-4 border-t border-theme-border">
          {/* Workbench Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-theme-card border border-theme-border rounded-3xl p-5 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500 flex-shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-theme-muted border border-theme-border">
                    #{currentQuestion.index < 10 ? `0${currentQuestion.index}` : currentQuestion.index}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    {currentQuestion.levelTitle}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {currentQuestion.badge}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-theme-text mt-1">
                  {currentQuestion.title}
                </h2>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => toggleProblemCompletion(currentQuestion.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  completedIds.includes(currentQuestion.id)
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-theme-cardSub text-theme-muted hover:text-theme-text border border-theme-border'
                }`}
              >
                {completedIds.includes(currentQuestion.id) ? (
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

              <button
                onClick={() => setShowWorkbench(false)}
                className="p-1.5 rounded-xl bg-theme-cardSub hover:bg-theme-cardSub/80 text-theme-muted hover:text-theme-text border border-theme-border"
                title="Close Workbench"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Workbench Grid: Left Description + Right Java IDE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Col: Problem Description, Sample I/O, Hints, Solution (lg:col-span-5) */}
            <div className="lg:col-span-5 bg-theme-card border border-theme-border rounded-3xl p-5 sm:p-6 space-y-4 shadow-sm">
              {/* Tab Navigation */}
              <div className="flex items-center space-x-1 border-b border-theme-border pb-3 text-xs">
                <button
                  onClick={() => setWorkbenchTab('description')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center space-x-1.5 ${
                    workbenchTab === 'description'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
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
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'text-theme-muted hover:text-theme-text'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Hints ({currentQuestion.hints?.length || 0})</span>
                </button>

                <button
                  onClick={() => setWorkbenchTab('solution')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center space-x-1.5 ${
                    workbenchTab === 'solution'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'text-theme-muted hover:text-theme-text'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Model Solution</span>
                </button>
              </div>

              {/* Tab 1: Description */}
              {workbenchTab === 'description' && (
                <div className="space-y-4 text-xs sm:text-sm text-theme-text leading-relaxed">
                  <div className="whitespace-pre-line text-theme-text/90">
                    {currentQuestion.description}
                  </div>

                  {/* Sample I/O */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="bg-[#090d13] border border-[#21262d] rounded-2xl p-3 font-mono text-xs">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                        Sample Input
                      </div>
                      <pre className="text-zinc-300 whitespace-pre-wrap">{currentQuestion.sampleInput}</pre>
                    </div>

                    <div className="bg-[#090d13] border border-[#21262d] rounded-2xl p-3 font-mono text-xs">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                        Expected Output
                      </div>
                      <pre className="text-emerald-300 whitespace-pre-wrap">{currentQuestion.sampleOutput}</pre>
                    </div>
                  </div>

                  {/* Core Concepts */}
                  {currentQuestion.concepts && (
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-3 text-xs text-amber-300 flex items-start space-x-2">
                      <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold text-amber-200">Core Concept: </strong>
                        {currentQuestion.concepts}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Hints */}
              {workbenchTab === 'hints' && (
                <div className="space-y-3 text-xs sm:text-sm">
                  {currentQuestion.hints?.map((h, i) => (
                    <div key={i} className="bg-theme-cardSub border border-theme-border rounded-2xl p-3 text-theme-text flex items-start space-x-2.5">
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Model Solution */}
              {workbenchTab === 'solution' && (
                <div className="space-y-3">
                  {!showSolution ? (
                    <div className="text-center py-6 bg-theme-cardSub border border-dashed border-theme-border rounded-2xl space-y-3">
                      <div className="text-xs text-theme-muted max-w-sm mx-auto">
                        Try writing your own solution in the IDE first! If you are stuck or want to cross-check, reveal the model solution.
                      </div>
                      <button
                        onClick={() => setShowSolution(true)}
                        className="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/40 font-bold text-xs inline-flex items-center space-x-2 transition-all shadow-sm"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Reveal Model Solution</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-amber-400 flex items-center space-x-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Official Solution</span>
                        </span>
                        <button
                          onClick={() => handleCopyCode(currentQuestion.solutionCode)}
                          className="text-theme-muted hover:text-theme-text text-[11px] underline"
                        >
                          Copy solution
                        </button>
                      </div>
                      <div className="bg-[#0d1117] border border-[#21262d] rounded-2xl p-4 font-mono text-xs overflow-x-auto text-zinc-200">
                        <pre className="whitespace-pre">{currentQuestion.solutionCode}</pre>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Col: Interactive Java IDE Canvas (lg:col-span-7) */}
            <div className="lg:col-span-7 bg-theme-card border border-theme-border rounded-3xl overflow-hidden shadow-md">
              {/* IDE Top Action Bar */}
              <div className="px-4 py-2.5 bg-[#090d13] border-b border-[#21262d] flex items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center space-x-2 truncate">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-zinc-400 font-semibold ml-2">Main.java</span>
                  <span className="text-[10px] text-zinc-500 uppercase px-1.5 py-0.5 rounded bg-zinc-800">
                    Java 17
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleCopyCode(userCode)}
                    className="px-2.5 py-1 rounded-lg bg-[#161b22] hover:bg-[#21262d] text-zinc-300 text-xs font-mono flex items-center space-x-1.5 transition-colors border border-[#30363d]"
                    title="Copy Java code"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
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

              {/* CodeEditor */}
              <CodeEditor
                value={userCode}
                onChange={handleCodeChange}
                placeholder="// Write your Java solution here..."
                minRows={16}
              />

              {/* Stdin Input Bar & Run Java Action */}
              <div className="px-4 py-2.5 bg-[#0d1117] border-t border-[#21262d] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center space-x-2 text-zinc-300 flex-1 min-w-[240px]">
                  <span className="text-[11px] font-bold text-zinc-400 flex items-center space-x-1 flex-shrink-0">
                    <Terminal className="w-3.5 h-3.5 text-amber-400" />
                    <span>Input (stdin):</span>
                  </span>
                  <input
                    type="text"
                    value={customStdin}
                    onChange={(e) => setCustomStdin(e.target.value)}
                    placeholder="Enter input for Scanner (e.g. 10 10 10 or 25.0)"
                    className="flex-1 bg-[#161b22] border border-[#30363d] focus:border-amber-500/60 rounded-lg px-2.5 py-1 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none transition-colors"
                  />
                  {currentQuestion?.sampleInput && (
                    <button
                      type="button"
                      onClick={() => setCustomStdin(currentQuestion.sampleInput)}
                      className="text-[11px] text-zinc-500 hover:text-zinc-300 underline transition-colors whitespace-nowrap"
                      title="Reset input to sample input"
                    >
                      Reset to sample
                    </button>
                  )}
                </div>

                <button
                  onClick={handleRunJavaCheck}
                  className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs flex items-center space-x-1.5 border border-amber-400 transition-all shadow-sm active:scale-95 flex-shrink-0"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Java</span>
                </button>
              </div>

              {/* Console Output Terminal */}
              {terminalOutput && (
                <div className="border-t border-[#21262d] bg-[#070a0e] p-4 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-zinc-400" />
                      <span className="font-bold text-zinc-300 uppercase tracking-wider text-[11px]">
                        Console Terminal
                      </span>
                    </div>
                    <button
                      onClick={() => setTerminalOutput(null)}
                      className="text-zinc-500 hover:text-zinc-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {terminalOutput.success ? (
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-1.5 text-emerald-400 font-bold text-[11px] uppercase tracking-wider">
                        <Check className="w-3.5 h-3.5" />
                        <span>Output:</span>
                      </div>
                      <pre className="text-emerald-300 bg-black/60 p-3 rounded-xl border border-emerald-500/20 leading-relaxed overflow-x-auto whitespace-pre-wrap font-mono">
                        {terminalOutput.output}
                      </pre>
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl border bg-rose-950/20 border-rose-500/30 text-rose-300 space-y-1.5">
                      <div className="font-bold text-rose-400 flex items-center space-x-1.5">
                        <X className="w-3.5 h-3.5" />
                        <span>{terminalOutput.message}</span>
                      </div>
                      <ul className="space-y-1 text-[11px]">
                        {terminalOutput.errors?.map((err, idx) => (
                          <li key={idx} className="flex items-start space-x-1.5">
                            <span className="text-rose-500 font-bold">•</span>
                            <span>{err}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 5. Add Custom Question Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0d1117] border border-[#21262d] rounded-3xl p-6 max-w-xl w-full shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#21262d] pb-3">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
                <Plus className="w-4 h-4" />
                <span>Add Custom Java Practice Question</span>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-zinc-500 hover:text-zinc-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveCustomQuestion} className="space-y-3.5 text-xs font-sans">
              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Problem Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Reverse a number or Check Palindrome"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className="w-full bg-[#161b22] border border-[#30363d] rounded-xl px-3 py-2 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Level Group</label>
                <select
                  value={customLevel}
                  onChange={(e) => setCustomLevel(e.target.value)}
                  className="w-full bg-[#161b22] border border-[#30363d] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-amber-500 text-xs"
                >
                  {activeLevels.map(lvl => (
                    <option key={lvl.id} value={lvl.id}>{lvl.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Problem Description</label>
                <textarea
                  rows={3}
                  placeholder="Describe requirements, inputs, outputs, etc."
                  value={customDesc}
                  onChange={(e) => setCustomDesc(e.target.value)}
                  className="w-full bg-[#161b22] border border-[#30363d] rounded-xl px-3 py-2 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Starter Template Code</label>
                <textarea
                  rows={4}
                  value={customStarter}
                  onChange={(e) => setCustomStarter(e.target.value)}
                  className="w-full bg-[#161b22] border border-[#30363d] rounded-xl px-3 py-2 text-zinc-200 font-mono text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2 border-t border-[#21262d]">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-zinc-400 hover:text-zinc-200 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs shadow-sm transition-all"
                >
                  Save Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
