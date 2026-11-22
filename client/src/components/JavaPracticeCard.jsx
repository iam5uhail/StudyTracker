import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Sparkles, 
  Code2, 
  Terminal,
  Layers,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { getJavaTasksForDay } from '../data/syntaxTasksData';
import CodeEditor from './CodeEditor';

export default function JavaPracticeCard() {
  const { activeDay, toggleTask } = useLearning();

  // Multi-task state for active day
  const tasks = getJavaTasksForDay(activeDay?.dayNumber || 1, activeDay?.title || "");
  const [activeTaskId, setActiveTaskId] = useState(1);

  // Persistent Java code per day and task: { [dayNumber]: { 1: code1, 2: code2 } }
  const [codeByDay, setCodeByDay] = useState(() => {
    try {
      const saved = localStorage.getItem('study_syntax_code');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {};
  });

  // Pull cloud answers if available
  useEffect(() => {
    let isMounted = true;
    fetch('/api/progress')
      .then(res => res.json())
      .then(json => {
        if (!isMounted || !json.data) return;
        if (json.data.syntaxCodeByDay) {
          setCodeByDay(prev => ({ ...json.data.syntaxCodeByDay, ...prev }));
        }
      })
      .catch(() => {});
    return () => { isMounted = false; };
  }, []);

  // Auto-save code per day locally and to cloud
  useEffect(() => {
    try {
      localStorage.setItem('study_syntax_code', JSON.stringify(codeByDay));
    } catch (e) {}

    const timer = setTimeout(() => {
      fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ syntaxCodeByDay: codeByDay })
      }).catch(() => {});
    }, 1500);

    return () => clearTimeout(timer);
  }, [codeByDay]);

  // Current task resolution
  const currentTask = tasks.find(t => t.id === activeTaskId) || tasks[0];

  // Helper to get code for current active day and task
  const getCurrentCode = () => {
    if (!activeDay) return currentTask?.initialCode || '';
    const dayData = codeByDay[activeDay.dayNumber];
    if (!dayData) return currentTask?.initialCode || '';
    if (typeof dayData === 'object' && dayData !== null) {
      return dayData[activeTaskId] ?? currentTask?.initialCode ?? '';
    }
    // Backward compatibility if previously stored as string
    if (typeof dayData === 'string' && activeTaskId === 1) {
      return dayData;
    }
    return currentTask?.initialCode || '';
  };

  const handleCodeChange = (newCode) => {
    if (!activeDay) return;
    setCodeByDay(prev => {
      const dayData = typeof prev[activeDay.dayNumber] === 'object' && prev[activeDay.dayNumber] !== null
        ? prev[activeDay.dayNumber]
        : (typeof prev[activeDay.dayNumber] === 'string' ? { 1: prev[activeDay.dayNumber] } : {});
      return {
        ...prev,
        [activeDay.dayNumber]: {
          ...dayData,
          [activeTaskId]: newCode
        }
      };
    });
  };

  const [output, setOutput] = useState(null);
  const [errorHint, setErrorHint] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [activeHintIndex, setActiveHintIndex] = useState(0);

  // Switch task tab
  const switchTask = (id) => {
    setActiveTaskId(id);
    setOutput(null);
    setErrorHint(null);
    setShowSolution(false);
    setActiveHintIndex(0);
  };

  if (!activeDay) return null;

  // Find practice task for day completion
  const practiceTask = activeDay.tasks.find(t => t.type === 'practice') || {
    id: `d${activeDay.dayNumber}-practice`,
    completed: false
  };

  const runCode = () => {
    setErrorHint(null);
    setOutput(null);

    const currentCode = getCurrentCode();
    if (!currentTask || !currentTask.check) return;
    const res = currentTask.check(currentCode);
    if (res.ok) {
      setOutput(res.output);
    } else {
      setErrorHint(res.err);
    }
  };

  const resetCode = () => {
    if (!activeDay) return;
    handleCodeChange(currentTask.initialCode);
    setOutput(null);
    setErrorHint(null);
    setShowSolution(false);
  };

  return (
    <div className="space-y-4 pt-2">
      {/* Target 2 Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-theme-accentText">
          <Code2 className="w-4 h-4 text-theme-accent" />
          <span>Target 2: Java Syntax Drills & Hands-on Coding</span>
        </div>
        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-theme-accentSub border border-theme-accentBorder text-theme-accentText font-semibold">
          2 Practical Tasks · Real-time Syntax Validation
        </span>
      </div>

      <div className="rounded-3xl border border-theme-border bg-theme-card p-5 sm:p-6 shadow-sm space-y-6">
        {/* Main Target 2 Completion Bar */}
        <div className="flex items-start justify-between gap-3 border-b border-theme-border pb-4">
          <div className="flex items-start space-x-3 cursor-pointer" onClick={() => toggleTask(activeDay.dayNumber, practiceTask.id)}>
            <button type="button" className="mt-0.5 flex-shrink-0">
              {practiceTask.completed ? (
                <CheckCircle2 className="w-5 h-5 text-theme-accent" />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-theme-muted hover:border-theme-accent transition-colors" />
              )}
            </button>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className={`text-base font-bold ${practiceTask.completed ? 'line-through text-theme-muted' : 'text-theme-text'}`}>
                  Daily Java Syntax Practice
                </h3>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-theme-cardSub border border-theme-border text-theme-secondary font-mono">
                  Day {activeDay.dayNumber}
                </span>
              </div>
              <p className="text-xs text-theme-muted mt-1 leading-relaxed">
                Complete the two hands-on Java exercises below to build syntax muscle memory and reinforce today's core lectures.
              </p>
            </div>
          </div>

          <button
            onClick={() => toggleTask(activeDay.dayNumber, practiceTask.id)}
            className={`text-xs px-3 py-1.5 rounded-xl border font-bold transition-all flex-shrink-0 ${
              practiceTask.completed
                ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow border-theme-accent'
                : 'bg-theme-cardSub border-theme-border text-theme-secondary hover:text-theme-text hover:bg-theme-cardHover'
            }`}
          >
            {practiceTask.completed ? 'Completed ✓' : 'Mark Target 2 Complete'}
          </button>
        </div>

        {/* Task Selection Tabs */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 border-b border-theme-border pb-3">
            {tasks.map((task, idx) => {
              const isActive = task.id === activeTaskId;
              return (
                <button
                  key={task.id}
                  onClick={() => switchTask(task.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow font-bold'
                      : 'bg-theme-cardSub text-theme-secondary hover:text-theme-text hover:bg-theme-cardHover border border-theme-border'
                  }`}
                >
                  <Layers className={`w-3.5 h-3.5 ${isActive ? 'text-theme-accentBtnText' : 'text-theme-muted'}`} />
                  <span>{task.title || `Task ${idx + 1}`}</span>
                </button>
              );
            })}
          </div>

          {/* Active Task Details & Prompt */}
          <div className="p-4 rounded-2xl bg-theme-cardSub border border-theme-border space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs sm:text-sm font-bold text-theme-text flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-theme-accent" />
                <span>{currentTask.title}</span>
              </h4>
              {currentTask.expectedOutput && (
                <div className="flex items-center space-x-1.5 text-[11px] font-mono text-theme-secondary">
                  <span className="text-theme-muted">Expected:</span>
                  <span className="px-2 py-0.5 rounded-md bg-theme-bg border border-theme-border text-theme-accent font-semibold">
                    {currentTask.expectedOutput}
                  </span>
                </div>
              )}
            </div>
            <p className="text-xs text-theme-secondary leading-relaxed">
              {currentTask.prompt}
            </p>
          </div>

          {/* Integrated Java IDE Editor */}
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-theme-secondary flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5 text-theme-accent" />
                <span>Java 17 Code Editor</span>
              </span>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="text-[11px] font-semibold text-theme-accentText hover:opacity-80 flex items-center space-x-1"
                >
                  <Sparkles className="w-3 h-3 text-theme-accent" />
                  <span>{showSolution ? 'Hide Solution' : 'View Correct Syntax'}</span>
                </button>

                <button
                  onClick={resetCode}
                  className="p-1 rounded-lg text-theme-muted hover:text-theme-text hover:bg-theme-cardSub transition-colors"
                  title="Reset Code"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* IDE Editor Box */}
            <div className="rounded-2xl border border-theme-border overflow-hidden bg-theme-bg shadow-inner">
              <div className="px-4 py-2 bg-theme-cardSub border-b border-theme-border flex items-center justify-between text-xs font-mono text-theme-muted">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-theme-secondary font-semibold">
                    {activeTaskId === 1 ? 'SyntaxDrill.java' : 'Solution.java'}
                  </span>
                </div>
                <span className="text-[11px]">OpenJDK 17 (Syntax & Structure Checker)</span>
              </div>

              <CodeEditor
                value={getCurrentCode()}
                onChange={handleCodeChange}
                minRows={9}
                placeholder="// Write your Java syntax here..."
              />

              {/* Action bar */}
              <div className="p-3 bg-theme-cardSub border-t border-theme-border flex items-center justify-between">
                <span className="text-[11px] text-theme-muted">
                  Use Tab for indent, auto-closing brackets (), {}, [] supported
                </span>

                <button
                  onClick={runCode}
                  className="flex items-center space-x-1.5 px-4 py-1.5 rounded-xl font-bold text-xs bg-theme-accent text-theme-accentBtnText shadow-theme-glow hover:opacity-90 transition-all active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Syntax Check</span>
                </button>
              </div>
            </div>

            {/* Solution Drawer */}
            {showSolution && (
              <div className="p-4 rounded-2xl bg-theme-cardSub border border-theme-accentBorder text-theme-text text-xs font-mono space-y-1.5 animate-fadeIn">
                <span className="block font-bold text-[11px] uppercase tracking-wider text-theme-accentText">
                  Reference Java Syntax:
                </span>
                <pre className="whitespace-pre-wrap text-theme-secondary leading-relaxed font-mono">
                  {currentTask.solutionSnippet}
                </pre>
              </div>
            )}

            {/* Compilation Result or Smart Error Hint */}
            {errorHint && (
              <div className="rounded-2xl bg-rose-500/10 border border-rose-500/30 p-4 space-y-2">
                <div className="flex items-center space-x-2 text-rose-500 font-bold text-xs">
                  <AlertCircle className="w-4 h-4" />
                  <span>Compilation / Syntax Error</span>
                </div>
                <p className="font-mono text-xs text-theme-text font-semibold bg-theme-card p-2.5 rounded-xl border border-rose-500/20">
                  {errorHint}
                </p>

                {currentTask.hints && currentTask.hints.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-rose-500/20 text-xs text-theme-secondary flex items-start space-x-2">
                    <Lightbulb className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-theme-text">Syntax Tip: </strong>
                      <span className="text-theme-secondary">
                        {currentTask.hints[activeHintIndex % currentTask.hints.length]}
                      </span>
                      {currentTask.hints.length > 1 && (
                        <button
                          onClick={() => setActiveHintIndex(i => i + 1)}
                          className="ml-2 text-[11px] text-theme-accentText underline font-semibold"
                        >
                          Next Hint
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Output Box */}
            {output && (
              <div className="rounded-2xl bg-theme-cardSub border border-emerald-500/40 p-4 space-y-2 font-mono text-xs shadow-sm">
                <div className="flex items-center space-x-2 font-bold text-emerald-500">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Code Verified & Executed Successfully!</span>
                </div>
                <div className="p-3 rounded-xl bg-theme-bg border border-theme-border">
                  <pre className="whitespace-pre-wrap text-theme-text font-semibold">{output}</pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
