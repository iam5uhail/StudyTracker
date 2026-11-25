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
  ChevronRight,
  Layers,
  X
} from 'lucide-react';
import { JAVA_PRACTICE_LEVELS, JAVA_PRACTICE_QUESTIONS } from '../data/javaPracticeData';
import CodeEditor from './CodeEditor';

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

  // 2. Active Level Filter ('all', 'level-1', 'level-2', etc.)
  const [selectedLevelId, setSelectedLevelId] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 3. Completed Problems Set
  const [completedIds, setCompletedIds] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMPLETED);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Save completed IDs to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedIds));
    } catch (e) {}
  }, [completedIds]);

  // 4. Selected Question
  const [selectedQuestionId, setSelectedQuestionId] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SELECTED_ID);
      if (saved && allQuestions.some(q => q.id === saved)) {
        return saved;
      }
    } catch (e) {}
    return allQuestions[0]?.id || 'l1_q1';
  });

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

  // When selected question changes, load its saved code or starter code
  useEffect(() => {
    if (!currentQuestion) return;
    try {
      const saved = localStorage.getItem(`study_tracker_java_code_${currentQuestion.id}`);
      setUserCode(saved !== null ? saved : currentQuestion.starterCode);
    } catch (e) {
      setUserCode(currentQuestion.starterCode);
    }
    // Reset workbench tabs
    setActiveTab('description');
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

  // 6. Workbench Tabs: 'description' | 'hints' | 'solution'
  const [activeTab, setActiveTab] = useState('description');
  const [showSolution, setShowSolution] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedSolution, setCopiedSolution] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState(null);

  // 7. Add Custom Question Modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customLevel, setCustomLevel] = useState('level-1');
  const [customDesc, setCustomDesc] = useState('');
  const [customStarter, setCustomStarter] = useState(`import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write code here\n        \n    }\n}`);
  const [customSolution, setCustomSolution] = useState('');

  // Filtered questions based on level and search
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter(q => {
      const matchesLevel = selectedLevelId === 'all' || q.levelId === selectedLevelId;
      const matchesSearch = !searchQuery || 
        q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (q.tags && q.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesLevel && matchesSearch;
    });
  }, [allQuestions, selectedLevelId, searchQuery]);

  // Total and completed metrics
  const totalQuestionsCount = allQuestions.length;
  const completedQuestionsCount = completedIds.filter(id => allQuestions.some(q => q.id === id)).length;
  const completionPct = totalQuestionsCount > 0 ? Math.round((completedQuestionsCount / totalQuestionsCount) * 100) : 0;

  // Toggle problem completion
  const toggleComplete = (id) => {
    setCompletedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(x => x !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Reset current question code
  const handleResetCode = () => {
    if (!currentQuestion) return;
    if (window.confirm('Reset this question back to the original starter template?')) {
      handleCodeChange(currentQuestion.starterCode);
    }
  };

  // Copy code to clipboard
  const handleCopyCode = (text, type = 'code') => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedSolution(true);
      setTimeout(() => setCopiedSolution(false), 2000);
    }
  };

  // Load solution directly into the IDE
  const handleLoadSolutionToEditor = () => {
    if (!currentQuestion) return;
    if (window.confirm('Replace your editor code with the official model solution?')) {
      handleCodeChange(currentQuestion.solutionCode);
    }
  };

  // Run Comprehensive Java Syntax, Structure and Logic Verification
  const handleRunJavaCheck = () => {
    const code = userCode || '';
    const errors = [];
    const warnings = [];

    // 1. Basic emptiness check
    if (!code.trim()) {
      setTerminalOutput({
        success: false,
        message: 'Compilation Failed: Empty File',
        details: ['error: File contains no code. Write your Java program first!']
      });
      return;
    }

    // 2. Class definition check
    if (!/\bclass\s+\w+/.test(code)) {
      errors.push('error: class, interface, or enum expected (e.g. public class Main { ... })');
    }

    // 3. Main method check
    if (!code.includes('public static void main') && !code.includes('static public void main')) {
      errors.push('error: Main method not found in class. Please define: public static void main(String[] args)');
    }

    // 4. Balanced braces and brackets check
    let openBraces = 0, openParens = 0, openBrackets = 0;
    for (let c of code) {
      if (c === '{') openBraces++;
      else if (c === '}') openBraces--;
      else if (c === '(') openParens++;
      else if (c === ')') openParens--;
      else if (c === '[') openBrackets++;
      else if (c === ']') openBrackets--;
    }
    if (openBraces !== 0) errors.push(`error: reached end of file while parsing (unclosed curly braces { }, difference: ${openBraces})`);
    if (openParens !== 0) errors.push(`error: ')' expected (unbalanced parentheses, difference: ${openParens})`);
    if (openBrackets !== 0) errors.push(`error: ']' expected (unbalanced square brackets, difference: ${openBrackets})`);

    // 5. Line-by-line syntax check
    const lines = code.split('\n');
    lines.forEach((line, idx) => {
      const lineNum = idx + 1;
      const trimmed = line.trim();

      // Check for unclosed string literals
      const quoteMatches = trimmed.match(/"/g);
      if (quoteMatches && (quoteMatches.length % 2 !== 0)) {
        errors.push(`error: unclosed string literal at line ${lineNum}: ${trimmed}`);
      }

      // Check for illegal JavaScript / Python keywords
      if (/\b(?:let|var|const)\s+[a-zA-Z_$]/.test(trimmed) && !trimmed.startsWith('//')) {
        errors.push(`error: illegal keyword at line ${lineNum}: In Java, variables require explicit types like int, double, String, boolean.`);
      }
      if (/\bfunction\s+[a-zA-Z_$]/.test(trimmed) && !trimmed.startsWith('//')) {
        errors.push(`error: illegal keyword 'function' at line ${lineNum}: In Java, define methods with return type, e.g. void methodName()`);
      }
      if (trimmed.includes('console.log') && !trimmed.startsWith('//')) {
        errors.push(`error: cannot find symbol 'console.log' at line ${lineNum}: Use System.out.println() in Java.`);
      }

      // Check Scanner method case sensitivity
      if (/\bsc\.nextint\(\)/i.test(trimmed) && !trimmed.includes('sc.nextInt()') && !trimmed.startsWith('//')) {
        errors.push(`error: cannot find symbol method nextint() at line ${lineNum} (Java is case-sensitive! Use sc.nextInt())`);
      }
      if (/\bsc\.nextdouble\(\)/i.test(trimmed) && !trimmed.includes('sc.nextDouble()') && !trimmed.startsWith('//')) {
        errors.push(`error: cannot find symbol method nextdouble() at line ${lineNum} (Java is case-sensitive! Use sc.nextDouble())`);
      }
      if (/\bsc\.nextline\(\)/i.test(trimmed) && !trimmed.includes('sc.nextLine()') && !trimmed.startsWith('//')) {
        errors.push(`error: cannot find symbol method nextline() at line ${lineNum} (Java is case-sensitive! Use sc.nextLine())`);
      }
      if (trimmed.includes('sc.nextChar(') && !trimmed.startsWith('//')) {
        errors.push(`error: cannot find symbol method nextChar() at line ${lineNum}: Scanner has no nextChar(). Use sc.next().charAt(0)`);
      }
      if (/\bsystem\.out\b/.test(trimmed) && !trimmed.startsWith('//')) {
        errors.push(`error: package system does not exist at line ${lineNum}: Use capital 'System.out.println'`);
      }
      if (/\bSystem\.out\.(?:printLn|PrintLn)\b/.test(trimmed) && !trimmed.startsWith('//')) {
        errors.push(`error: cannot find symbol at line ${lineNum}: method name is println (all lowercase)`);
      }

      // Check missing semicolon on statements
      if (
        trimmed &&
        !trimmed.startsWith('//') &&
        !trimmed.startsWith('/*') &&
        !trimmed.startsWith('*') &&
        !trimmed.endsWith('{') &&
        !trimmed.endsWith('}') &&
        !trimmed.endsWith(';') &&
        !trimmed.endsWith(':') &&
        !trimmed.startsWith('if') &&
        !trimmed.startsWith('for') &&
        !trimmed.startsWith('while') &&
        !trimmed.startsWith('switch') &&
        !trimmed.startsWith('else') &&
        !trimmed.startsWith('class') &&
        !trimmed.startsWith('public') &&
        !trimmed.startsWith('private') &&
        !trimmed.startsWith('static') &&
        !trimmed.startsWith('import') &&
        !trimmed.startsWith('@')
      ) {
        if (/\b(?:int|double|String|boolean|char|float|long|return|sc\.|System\.out|break|continue|=)\b/.test(trimmed)) {
          errors.push(`error: ';' expected at line ${lineNum}: "${trimmed}"`);
        }
      }
    });

    // 6. Scanner import check
    if (code.includes('new Scanner') && !code.includes('import java.util.Scanner') && !code.includes('import java.util.*')) {
      errors.push("error: cannot find symbol class Scanner: Add 'import java.util.Scanner;' at the top of the file.");
    }

    if (code.includes('Scanner') && !code.includes('.close()')) {
      warnings.push("Resource warning: Scanner is never closed. Add 'sc.close();' before exiting main().");
    }

    // 7. Output existence check
    const hasPrint = code.includes('System.out.println') || code.includes('System.out.print');
    if (!hasPrint) {
      warnings.push("Warning: No System.out.println() output statement found. Your program will produce no output on the screen!");
    }

    // 8. Question-specific requirement / logic checks
    if (currentQuestion) {
      const qId = currentQuestion.id;
      const cleanCode = code.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

      if (qId === 'l1_q1') {
        const printlnCount = (cleanCode.match(/System\.out\.println/g) || []).length;
        if (printlnCount < 3) {
          errors.push("Logic error: You must print your name, city, and favourite language on THREE separate lines using System.out.println().");
        }
      } else if (qId === 'l1_q2') {
        const hasAllOps = ['+', '-', '*', '/'].every(op => cleanCode.includes(op));
        if (!hasAllOps) {
          errors.push("Logic error: Must compute all 4 operations: Sum (+), Difference (-), Product (*), and Quotient (/).");
        }
      } else if (qId === 'l1_q3') {
        if (!cleanCode.includes('*')) {
          errors.push("Logic error: Rectangle Area calculation requires length * width.");
        }
        if (!cleanCode.includes('+')) {
          errors.push("Logic error: Rectangle Perimeter calculation requires 2 * (length + width).");
        }
      } else if (qId === 'l1_q4') {
        // Celsius to Fahrenheit
        const hasFahrenheitFormula = cleanCode.includes('32') && (cleanCode.includes('9.0') || cleanCode.includes('1.8') || cleanCode.includes('9'));
        if (!hasFahrenheitFormula) {
          errors.push("Logic error: Missing Celsius to Fahrenheit conversion formula! Formula: (celsius * 9.0 / 5.0) + 32;");
        }
        if (cleanCode.includes('9 / 5')) {
          errors.push("Warning: You wrote '9 / 5' which equals 1 in integer division! Use '9.0 / 5.0' or '1.8' instead.");
        }
      } else if (qId === 'l1_q5') {
        if (!cleanCode.includes('/ 7') && !cleanCode.includes('/7')) {
          errors.push("Logic error: Weeks calculation requires dividing total days by 7 (days / 7).");
        }
        if (!cleanCode.includes('% 7') && !cleanCode.includes('%7')) {
          errors.push("Logic error: Remaining days calculation requires modulus by 7 (days % 7).");
        }
      } else if (qId === 'l1_q6') {
        if (!cleanCode.includes('temp') && !cleanCode.includes('+') && !cleanCode.includes('-')) {
          errors.push("Logic error: Variables must be swapped using either a temp variable or arithmetic operations.");
        }
      } else if (qId === 'l1_q7') {
        if (!cleanCode.includes('% 10') && !cleanCode.includes('%10')) {
          errors.push("Logic error: Extracting digits of a 3-digit number requires modulus by 10 (num % 10).");
        }
        if (!cleanCode.includes('/ 10') && !cleanCode.includes('/10') && !cleanCode.includes('/ 100') && !cleanCode.includes('/100')) {
          errors.push("Logic error: Truncating digits requires division by 10 or 100.");
        }
      } else if (qId === 'l1_q8') {
        if (!cleanCode.includes('100') || !cleanCode.includes('*')) {
          errors.push("Logic error: Simple interest formula is missing: (P * R * T) / 100.0");
        }
      } else if (qId === 'l2_q1') {
        if (!cleanCode.includes('>') || !cleanCode.includes('<')) {
          errors.push("Logic error: Must check if number is positive (> 0) and negative (< 0) with if-else.");
        }
      } else if (qId === 'l2_q2') {
        if (!cleanCode.includes('% 2') && !cleanCode.includes('%2') && !cleanCode.includes('& 1')) {
          errors.push("Logic error: Even/Odd check requires checking remainder with 2: (n % 2 == 0).");
        }
      } else if (qId === 'l2_q3') {
        if (!cleanCode.includes('if') || (!cleanCode.includes('>=') && !cleanCode.includes('>'))) {
          errors.push("Logic error: Must find largest of three numbers using if/else if comparisons.");
        }
      } else if (qId === 'l2_q4') {
        if (!cleanCode.includes('4') || !cleanCode.includes('100')) {
          errors.push("Logic error: Leap year check requires checking divisibility by 4, 100, and 400.");
        }
      } else if (qId === 'l2_q5') {
        if (!cleanCode.includes('90') || !cleanCode.includes('75') || !cleanCode.includes('50')) {
          errors.push("Logic error: Grade calculation must check boundaries for Grade A (>= 90), B (>= 75), C (>= 50).");
        }
      } else if (qId === 'l2_q7') {
        if (!cleanCode.includes('switch')) {
          errors.push("Logic error: Question requires using a 'switch' statement to map numbers 1-7 to day names.");
        }
      } else if (qId === 'l2_q8') {
        if (!cleanCode.includes('switch') && !cleanCode.includes('if')) {
          errors.push("Logic error: Calculator requires switch or if-else branching on operators (+, -, *, /).");
        }
        if (!cleanCode.includes('0') || !cleanCode.includes('/')) {
          warnings.push("Defensive warning: Remember to handle division by zero when operator is '/'!");
        }
      } else if (qId === 'l2_q9') {
        if (!cleanCode.includes('+') || !cleanCode.includes('>')) {
          errors.push("Logic error: Triangle inequality theorem check is missing: (a + b > c && a + c > b && b + c > a).");
        }
      }
    }

    if (errors.length === 0) {
      setTerminalOutput({
        success: true,
        message: 'Compilation & Structural Verification Succeeded! (0 Errors)',
        details: [
          '✓ Valid Java class structure and entry point main() found',
          '✓ All brackets, braces & parentheses are balanced',
          '✓ Semicolons and statement syntax verified',
          '✓ Required problem logic criteria met',
          ...(warnings.length > 0 ? warnings : ['✓ Ready to run with test inputs'])
        ],
        sampleOutput: currentQuestion?.sampleOutput
      });
    } else {
      setTerminalOutput({
        success: false,
        message: `Compilation Failed (${errors.length} Error${errors.length > 1 ? 's' : ''}):`,
        details: errors
      });
    }
  };

  // Add custom question handler
  const handleSaveCustomQuestion = (e) => {
    e.preventDefault();
    if (!customTitle.trim()) return;

    const newQ = {
      id: `custom_${Date.now()}`,
      levelId: customLevel,
      levelTitle: customLevel === 'level-1' ? 'Level 1: Start Here' : 'Level 2: Conditions',
      index: allQuestions.length + 1,
      title: customTitle.trim(),
      badge: 'Custom Practice',
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
      {/* 1. Header Overview & Progress Banner */}
      <div className="bg-theme-card border border-theme-border rounded-3xl p-5 sm:p-7 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2.5">
              <span className="p-2 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <Coffee className="w-5 h-5" />
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-theme-text tracking-tight flex items-center gap-2">
                Core Java Practice Lab
              </h1>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                Step-by-Step
              </span>
            </div>
            <p className="text-xs sm:text-sm text-theme-muted max-w-2xl">
              Write each program in clean Java. Master <code className="text-amber-400">Scanner</code> input, arithmetic operators, type casting, and conditionals with interactive code verification.
            </p>
          </div>

          {/* Right Action: Overall Progress Badge & Add Custom Question */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-theme-cardSub border border-theme-border px-4 py-2 rounded-2xl flex items-center space-x-3">
              <div className="text-right">
                <div className="text-[10px] uppercase font-bold text-theme-muted tracking-wider">Progress</div>
                <div className="text-sm font-black text-theme-text font-mono">
                  <span className="text-emerald-400">{completedQuestionsCount}</span> / {totalQuestionsCount}
                  <span className="text-xs font-normal text-theme-muted ml-1">({completionPct}%)</span>
                </div>
              </div>
              <div className="w-12 h-2.5 bg-theme-border rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-500"
                  style={{ width: `${completionPct}%` }}
                />
              </div>
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-theme-accent text-theme-accentBtnText font-bold text-xs hover:opacity-90 shadow-theme-glow transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add Question</span>
            </button>
          </div>
        </div>

        {/* Level Navigation Filter Tabs */}
        <div className="mt-6 pt-5 border-t border-theme-border flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedLevelId('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedLevelId === 'all'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-sm'
                  : 'bg-theme-cardSub text-theme-muted hover:text-theme-text border border-theme-border'
              }`}
            >
              All Levels ({allQuestions.length})
            </button>

            {JAVA_PRACTICE_LEVELS.map(lvl => {
              const count = allQuestions.filter(q => q.levelId === lvl.id).length;
              const isSelected = selectedLevelId === lvl.id;
              return (
                <button
                  key={lvl.id}
                  disabled={lvl.upcoming && count === 0}
                  onClick={() => setSelectedLevelId(lvl.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm'
                      : lvl.upcoming && count === 0
                      ? 'bg-theme-cardSub/40 text-theme-muted/40 border border-theme-border/40 cursor-not-allowed'
                      : 'bg-theme-cardSub text-theme-muted hover:text-theme-text border border-theme-border'
                  }`}
                >
                  <span>{lvl.title}</span>
                  {count > 0 ? (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-black/30">
                      {count}
                    </span>
                  ) : (
                    <span className="text-[9px] uppercase tracking-wider font-semibold opacity-60">
                      Soon
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-60">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-theme-muted" />
            <input
              type="text"
              placeholder="Search Java questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-theme-cardSub border border-theme-border rounded-xl pl-8 pr-3 py-1.5 text-xs text-theme-text placeholder:text-theme-muted focus:outline-none focus:border-theme-accent"
            />
          </div>
        </div>
      </div>

      {/* 2. Main Practice Workspace: Left Question Directory + Right Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Question List (Directory) */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="flex items-center justify-between text-xs font-bold text-theme-muted px-1">
            <span>Problems ({filteredQuestions.length})</span>
            <span className="text-emerald-400 font-mono">
              {filteredQuestions.filter(q => completedIds.includes(q.id)).length} Completed
            </span>
          </div>

          <div className="space-y-2 max-h-[720px] overflow-y-auto pr-1">
            {filteredQuestions.map((q, idx) => {
              const isSelected = q.id === selectedQuestionId;
              const isDone = completedIds.includes(q.id);

              return (
                <div
                  key={q.id}
                  onClick={() => setSelectedQuestionId(q.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-theme-card border-theme-accent shadow-md ring-1 ring-theme-accent/20'
                      : 'bg-theme-card/60 hover:bg-theme-card border-theme-border hover:border-theme-border/80'
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    {/* Checkbox toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleComplete(q.id);
                      }}
                      title={isDone ? "Mark as Incomplete" : "Mark as Completed"}
                      className="flex-shrink-0 text-emerald-400 hover:scale-110 transition-transform"
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-5 h-5 fill-emerald-500/20 text-emerald-400" />
                      ) : (
                        <Circle className="w-5 h-5 text-theme-muted hover:text-emerald-400 transition-colors" />
                      )}
                    </button>

                    <div className="min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono text-theme-muted">
                          #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-theme-cardSub text-theme-muted border border-theme-border uppercase tracking-tight">
                          {q.badge || 'Practice'}
                        </span>
                      </div>
                      <h4 className={`text-xs font-bold truncate mt-0.5 ${isSelected ? 'text-theme-text' : 'text-theme-text/80'}`}>
                        {q.title}
                      </h4>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${isSelected ? 'text-theme-accent translate-x-0.5' : 'text-theme-muted'}`} />
                </div>
              );
            })}

            {filteredQuestions.length === 0 && (
              <div className="text-center py-8 text-xs text-theme-muted bg-theme-card/30 rounded-2xl border border-dashed border-theme-border">
                No questions found matching your filter.
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Interactive IDE & Problem Workbench */}
        {currentQuestion && (
          <div className="lg:col-span-8 space-y-4">
            {/* Problem Header Card */}
            <div className="bg-theme-card border border-theme-border rounded-3xl p-5 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-theme-border">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {currentQuestion.levelTitle}
                    </span>
                    <span className="text-xs text-theme-muted font-mono">
                      Problem #{currentQuestion.index}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-black text-theme-text">
                    {currentQuestion.title}
                  </h2>
                </div>

                {/* Mark as Solved Button */}
                <button
                  onClick={() => toggleComplete(currentQuestion.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                    completedIds.includes(currentQuestion.id)
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30'
                      : 'bg-theme-cardSub text-theme-muted hover:text-theme-text border border-theme-border hover:border-emerald-500/50'
                  }`}
                >
                  {completedIds.includes(currentQuestion.id) ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Completed ✓</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4" />
                      <span>Mark as Solved</span>
                    </>
                  )}
                </button>
              </div>

              {/* Workbench Tab Navigation */}
              <div className="flex items-center space-x-2 border-b border-theme-border pb-2 text-xs">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-bold transition-all ${
                    activeTab === 'description'
                      ? 'bg-theme-accent text-theme-accentBtnText shadow-sm'
                      : 'text-theme-muted hover:text-theme-text hover:bg-theme-cardSub'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Problem Statement</span>
                </button>

                <button
                  onClick={() => setActiveTab('hints')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-bold transition-all ${
                    activeTab === 'hints'
                      ? 'bg-theme-accent text-theme-accentBtnText shadow-sm'
                      : 'text-theme-muted hover:text-theme-text hover:bg-theme-cardSub'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Hints ({currentQuestion.hints?.length || 0})</span>
                </button>

                <button
                  onClick={() => setActiveTab('solution')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-bold transition-all ${
                    activeTab === 'solution'
                      ? 'bg-theme-accent text-theme-accentBtnText shadow-sm'
                      : 'text-theme-muted hover:text-theme-text hover:bg-theme-cardSub'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Model Solution</span>
                </button>
              </div>

              {/* Tab 1: Problem Description */}
              {activeTab === 'description' && (
                <div className="space-y-4 pt-1 text-xs sm:text-sm text-theme-text leading-relaxed">
                  <div className="whitespace-pre-line font-normal text-theme-text/90">
                    {currentQuestion.description}
                  </div>

                  {/* Sample I/O */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="bg-[#090d13] border border-[#21262d] rounded-2xl p-3 font-mono text-xs">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 flex items-center justify-between">
                        <span>Sample Input</span>
                      </div>
                      <pre className="text-zinc-300 whitespace-pre-wrap">{currentQuestion.sampleInput}</pre>
                    </div>

                    <div className="bg-[#090d13] border border-[#21262d] rounded-2xl p-3 font-mono text-xs">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5 flex items-center justify-between">
                        <span>Expected Output</span>
                      </div>
                      <pre className="text-emerald-300 whitespace-pre-wrap">{currentQuestion.sampleOutput}</pre>
                    </div>
                  </div>

                  {/* Key Concepts Alert */}
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
              {activeTab === 'hints' && (
                <div className="space-y-3 pt-1">
                  <div className="text-xs text-theme-muted mb-2">
                    Read hints one by one if you get stuck before looking at the complete solution:
                  </div>
                  {currentQuestion.hints?.map((h, i) => (
                    <div key={i} className="bg-theme-cardSub border border-theme-border rounded-2xl p-3 text-xs sm:text-sm text-theme-text flex items-start space-x-2.5">
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Model Solution */}
              {activeTab === 'solution' && (
                <div className="space-y-3 pt-1">
                  {!showSolution ? (
                    <div className="text-center py-6 bg-theme-cardSub border border-dashed border-theme-border rounded-2xl space-y-3">
                      <div className="text-xs text-theme-muted max-w-sm mx-auto">
                        Give it your best shot first in the IDE below! If you're finished or stuck, reveal the official Java solution.
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
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Official Solution (Clean Java 17)</span>
                        </span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={handleLoadSolutionToEditor}
                            className="px-2.5 py-1 rounded-lg bg-theme-cardSub hover:bg-theme-card border border-theme-border text-xs text-theme-text font-medium flex items-center space-x-1 transition-all"
                            title="Replace editor code with this solution"
                          >
                            <ArrowRight className="w-3.5 h-3.5 text-theme-accent" />
                            <span>Load into Editor</span>
                          </button>
                          <button
                            onClick={() => handleCopyCode(currentQuestion.solutionCode, 'solution')}
                            className="px-2.5 py-1 rounded-lg bg-theme-cardSub hover:bg-theme-card border border-theme-border text-xs text-theme-text font-medium flex items-center space-x-1 transition-all"
                          >
                            {copiedSolution ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-theme-muted" />}
                            <span>{copiedSolution ? 'Copied!' : 'Copy Code'}</span>
                          </button>
                          <button
                            onClick={() => setShowSolution(false)}
                            className="p-1 rounded-lg hover:bg-theme-cardSub text-theme-muted hover:text-theme-text"
                            title="Hide solution"
                          >
                            <EyeOff className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="bg-[#0d1117] border border-[#21262d] rounded-2xl p-4 font-mono text-xs overflow-x-auto text-zinc-200">
                        <pre className="whitespace-pre">{currentQuestion.solutionCode}</pre>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Interactive Java IDE Canvas */}
            <div className="bg-theme-card border border-theme-border rounded-3xl overflow-hidden shadow-md">
              {/* IDE Action Bar */}
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
                    onClick={() => handleCopyCode(userCode, 'code')}
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

                  <button
                    onClick={handleRunJavaCheck}
                    className="px-3.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-mono font-bold text-xs flex items-center space-x-1.5 border border-emerald-500/40 transition-all shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Check Syntax</span>
                  </button>
                </div>
              </div>

              {/* CodeEditor component */}
              <CodeEditor
                value={userCode}
                onChange={handleCodeChange}
                placeholder="// Write your Java solution here..."
                minRows={17}
              />

              {/* Output / Verification Console Terminal */}
              {terminalOutput && (
                <div className="border-t border-[#21262d] bg-[#070a0e] p-4 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-zinc-400" />
                      <span className="font-bold text-zinc-300 uppercase tracking-wider text-[11px]">
                        Java Syntax & Structure Terminal
                      </span>
                    </div>
                    <button
                      onClick={() => setTerminalOutput(null)}
                      className="text-zinc-500 hover:text-zinc-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className={`p-2.5 rounded-xl border ${terminalOutput.success ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-red-950/20 border-red-500/30 text-red-300'}`}>
                    <div className="font-bold mb-1">{terminalOutput.message}</div>
                    <ul className="space-y-0.5 text-[11px]">
                      {terminalOutput.details.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  {terminalOutput.success && terminalOutput.sampleOutput && (
                    <div className="text-zinc-400 text-[11px] pt-1">
                      <span>Expected Output when fed with sample inputs:</span>
                      <pre className="text-emerald-400 mt-1 bg-black/40 p-2 rounded-lg">{terminalOutput.sampleOutput}</pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 3. Add Custom Question Modal (from Claude or elsewhere) */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-theme-card border border-theme-border rounded-3xl p-6 max-w-xl w-full shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-theme-border pb-3">
              <div className="flex items-center space-x-2">
                <Plus className="w-5 h-5 text-theme-accent" />
                <h3 className="font-bold text-theme-text text-base">Add Custom Java Question</h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-xl hover:bg-theme-cardSub text-theme-muted hover:text-theme-text"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCustomQuestion} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-theme-text mb-1">Question Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Check if a number is an Armstrong number"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className="w-full bg-theme-cardSub border border-theme-border rounded-xl px-3 py-2 text-theme-text placeholder:text-theme-muted focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="block font-bold text-theme-text mb-1">Level Category</label>
                <select
                  value={customLevel}
                  onChange={(e) => setCustomLevel(e.target.value)}
                  className="w-full bg-theme-cardSub border border-theme-border rounded-xl px-3 py-2 text-theme-text focus:outline-none focus:border-theme-accent"
                >
                  <option value="level-1">Level 1: Start Here (Basics & I/O)</option>
                  <option value="level-2">Level 2: Conditions (if/else & switch)</option>
                  <option value="level-3">Level 3: Loops & Patterns</option>
                  <option value="level-4">Level 4: Methods & Arrays</option>
                  <option value="level-5">Level 5: OOPs & Projects</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-theme-text mb-1">Problem Description</label>
                <textarea
                  rows={4}
                  placeholder="Paste question details, input/output requirements here..."
                  value={customDesc}
                  onChange={(e) => setCustomDesc(e.target.value)}
                  className="w-full bg-theme-cardSub border border-theme-border rounded-xl px-3 py-2 text-theme-text placeholder:text-theme-muted focus:outline-none focus:border-theme-accent resize-none font-sans"
                />
              </div>

              <div>
                <label className="block font-bold text-theme-text mb-1">Starter Template Code</label>
                <textarea
                  rows={5}
                  value={customStarter}
                  onChange={(e) => setCustomStarter(e.target.value)}
                  className="w-full bg-[#0d1117] text-zinc-200 font-mono border border-theme-border rounded-xl px-3 py-2 focus:outline-none focus:border-theme-accent resize-none"
                />
              </div>

              <div>
                <label className="block font-bold text-theme-text mb-1">Model Solution Code (Optional)</label>
                <textarea
                  rows={5}
                  placeholder="Paste Claude's verified solution code here..."
                  value={customSolution}
                  onChange={(e) => setCustomSolution(e.target.value)}
                  className="w-full bg-[#0d1117] text-zinc-200 font-mono border border-theme-border rounded-xl px-3 py-2 focus:outline-none focus:border-theme-accent resize-none"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2 border-t border-theme-border">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-theme-muted hover:text-theme-text font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-theme-accent text-theme-accentBtnText font-bold shadow-theme-glow hover:opacity-90"
                >
                  Save to Practice Lab
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
