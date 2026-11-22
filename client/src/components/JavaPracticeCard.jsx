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
  HelpCircle,
  Check,
  X,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { getSyntaxExerciseForDay } from '../data/syntaxDrills';

export default function JavaPracticeCard() {
  const { activeDay, toggleTask } = useLearning();

  // Load persistent MCQ answers
  const [selectedAnswers, setSelectedAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem('study_mcq_answers');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {};
  });

  const [showExplanation, setShowExplanation] = useState({});

  // Mini IDE state dynamically loaded for ANY active day (1 to 70)
  const exercise = getSyntaxExerciseForDay(activeDay?.dayNumber || 1, activeDay?.title || "");

  // Load persistent Java syntax code per day
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
        if (json.data.selectedMcqAnswers) {
          setSelectedAnswers(prev => ({ ...json.data.selectedMcqAnswers, ...prev }));
        }
        if (json.data.syntaxCodeByDay) {
          setCodeByDay(prev => ({ ...json.data.syntaxCodeByDay, ...prev }));
        }
      })
      .catch(() => {});
    return () => { isMounted = false; };
  }, []);

  // Auto-save MCQ answers locally and to cloud
  useEffect(() => {
    try {
      localStorage.setItem('study_mcq_answers', JSON.stringify(selectedAnswers));
    } catch (e) {}
  }, [selectedAnswers]);

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

  const currentCode = codeByDay[activeDay?.dayNumber] ?? exercise.initialCode;
  const [output, setOutput] = useState(null);
  const [errorHint, setErrorHint] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [activeHintIndex, setActiveHintIndex] = useState(0);

  if (!activeDay) return null;

  // Find task
  const practiceTask = activeDay.tasks.find(t => t.type === 'practice') || {
    id: `d${activeDay.dayNumber}-practice`,
    completed: false
  };

  const handleSelectOption = (taskId, qIndex, optionIndex) => {
    setSelectedAnswers(prev => {
      const updated = {
        ...prev,
        [`${taskId}-${qIndex}`]: optionIndex
      };
      // Send to MongoDB
      fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedMcqAnswers: updated })
      }).catch(() => {});
      return updated;
    });
  };

  const toggleExp = (key) => {
    setShowExplanation(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const runCode = () => {
    setErrorHint(null);
    setOutput(null);

    const res = exercise.check(currentCode);
    if (res.ok) {
      setOutput(res.output);
    } else {
      setErrorHint(res.err);
    }
  };

  const resetCode = () => {
    setCodeByDay(prev => ({ ...prev, [activeDay?.dayNumber]: exercise.initialCode }));
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
          <span>Target 2: Java Syntax Practice & Mini IDE</span>
        </div>
        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-theme-accentSub border border-theme-accentBorder text-theme-accentText font-semibold">
          Syntax Checklist & Interactive Drills
        </span>
      </div>

      <div className="rounded-3xl border border-theme-border bg-theme-card p-5 sm:p-6 shadow-sm space-y-6">
        {/* Header and Toggle Done */}
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
              <h3 className={`text-base font-bold ${practiceTask.completed ? 'line-through text-theme-muted' : 'text-theme-text'}`}>
                {exercise.title}
              </h3>
              <p className="text-xs text-theme-muted mt-1 leading-relaxed">
                {exercise.prompt}
              </p>
            </div>
          </div>

          <button
            onClick={() => toggleTask(activeDay.dayNumber, practiceTask.id)}
            className={`text-xs px-3 py-1.5 rounded-xl border font-bold transition-all ${
              practiceTask.completed
                ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow border-theme-accent'
                : 'bg-theme-cardSub border-theme-border text-theme-secondary hover:text-theme-text hover:bg-theme-cardHover'
            }`}
          >
            {practiceTask.completed ? 'Completed ✓' : 'Mark Complete'}
          </button>
        </div>

        {/* 1. Mini Integrated IDE with Error Hints */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-theme-secondary flex items-center space-x-1.5">
              <Terminal className="w-3.5 h-3.5 text-theme-accent" />
              <span>Interactive Java Syntax Editor</span>
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
            {/* Editor header bar */}
            <div className="px-4 py-2 bg-theme-cardSub border-b border-theme-border flex items-center justify-between text-xs font-mono text-theme-muted">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-theme-secondary font-semibold">Solution.java</span>
              </div>
              <span className="text-[11px]">Java 17 (Syntax Checker)</span>
            </div>

            <textarea
              value={currentCode}
              onChange={(e) => setCodeByDay(prev => ({ ...prev, [activeDay?.dayNumber]: e.target.value }))}
              rows={8}
              spellCheck={false}
              className="w-full p-4 font-mono text-xs sm:text-sm bg-transparent text-theme-text focus:outline-none resize-y leading-relaxed"
              placeholder="// Write your Java syntax here..."
            />

            {/* Run button & Action bar */}
            <div className="p-3 bg-theme-cardSub border-t border-theme-border flex items-center justify-between">
              <span className="text-[11px] text-theme-muted">
                Press Run to check syntax & structure
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

          {/* Solution toggle view */}
          {showSolution && (
            <div className="p-4 rounded-2xl bg-theme-cardSub border border-theme-accentBorder text-theme-text text-xs font-mono space-y-1.5">
              <span className="block font-bold text-[11px] uppercase tracking-wider text-theme-accentText">
                Reference Java Syntax:
              </span>
              <pre className="whitespace-pre-wrap text-theme-secondary leading-relaxed">{exercise.solutionSnippet}</pre>
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

              {/* Instant Guided Hint */}
              <div className="mt-2 pt-2 border-t border-rose-500/20 text-xs text-theme-secondary flex items-start space-x-2">
                <Lightbulb className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-theme-text">Syntax Tip: </strong>
                  <span className="text-theme-secondary">{exercise.hints[activeHintIndex % exercise.hints.length]}</span>
                  <button
                    onClick={() => setActiveHintIndex(i => i + 1)}
                    className="ml-2 text-[11px] text-theme-accentText underline font-semibold"
                  >
                    Next Hint
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Output box with high contrast theme-matching colors */}
          {output && (
            <div className="rounded-2xl bg-theme-cardSub border border-emerald-500/40 p-4 space-y-2 font-mono text-xs shadow-sm">
              <div className="flex items-center space-x-2 font-bold text-emerald-500">
                <CheckCircle2 className="w-4 h-4" />
                <span>Program Compiled & Executed Successfully!</span>
              </div>
              <div className="p-3 rounded-xl bg-theme-bg border border-theme-border">
                <pre className="whitespace-pre-wrap text-theme-text font-semibold">{output}</pre>
              </div>
            </div>
          )}
        </div>

        {/* 2. Objective Multiple-Choice Questions (MCQs) */}
        {practiceTask.questions && practiceTask.questions.length > 0 && (
          <div className="space-y-3 pt-3 border-t border-theme-border">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-theme-secondary flex items-center space-x-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-theme-accent" />
                <span>Chapter Concept Check (MCQs)</span>
              </span>
              <span className="text-[11px] text-theme-muted font-mono">
                {practiceTask.questions.length} questions
              </span>
            </div>

            <div className="space-y-3">
              {practiceTask.questions.map((q, qIdx) => {
                const qKey = `${practiceTask.id}-${qIdx}`;
                const selectedOpt = selectedAnswers[qKey];
                const hasAnswered = selectedOpt !== undefined;
                const isCorrect = hasAnswered && selectedOpt === q.correctAnswer;
                const showExp = showExplanation[qKey];

                return (
                  <div 
                    key={qIdx}
                    className="rounded-2xl bg-theme-cardSub border border-theme-border p-4 space-y-3"
                  >
                    <p className="text-xs sm:text-sm font-semibold text-theme-text">
                      <span className="text-theme-accent font-mono mr-1.5 font-bold">Q{qIdx + 1}.</span>
                      {q.question}
                    </p>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map((opt, oIdx) => {
                        const isThisSelected = selectedOpt === oIdx;
                        const isThisCorrect = q.correctAnswer === oIdx;

                        let styleClasses = "border-theme-border bg-theme-card text-theme-secondary hover:border-theme-borderSub hover:text-theme-text";
                        if (hasAnswered) {
                          if (isThisCorrect) {
                            styleClasses = "border-emerald-500/50 bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 font-bold";
                          } else if (isThisSelected && !isThisCorrect) {
                            styleClasses = "border-rose-500/50 bg-rose-500/15 text-rose-600 dark:text-rose-300";
                          } else {
                            styleClasses = "border-theme-border opacity-40 text-theme-muted";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleSelectOption(practiceTask.id, qIdx, oIdx)}
                            className={`flex items-center justify-between text-left p-3 rounded-xl border text-xs transition-all ${styleClasses}`}
                          >
                            <span className="flex-1 pr-2">{opt}</span>
                            {hasAnswered && isThisCorrect && (
                              <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            )}
                            {hasAnswered && isThisSelected && !isThisCorrect && (
                              <X className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation toggle */}
                    {hasAnswered && (
                      <div className="pt-1 text-xs">
                        <button
                          onClick={() => toggleExp(qKey)}
                          className="flex items-center space-x-1 text-theme-accentText hover:opacity-80 font-semibold text-[11px]"
                        >
                          <span>{showExp ? 'Hide Explanation' : 'Why this answer?'}</span>
                          {showExp ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                        </button>
                        {showExp && (
                          <div className="mt-2 p-3 rounded-xl bg-theme-card border border-theme-border text-theme-secondary text-xs leading-relaxed">
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
