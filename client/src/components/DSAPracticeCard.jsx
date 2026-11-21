import React, { useState } from 'react';
import {
  Brain,
  Lightbulb,
  CheckCircle2,
  Code2,
  ExternalLink,
  Save,
  BookOpen,
  Layers,
  FileText,
  Play,
  RotateCcw,
  Check,
  ChevronRight,
  Terminal,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { dsaGuideByTitle } from '../data/practiceHelper';

// Concept Theory for DSA Topics & Patterns
const topicTheories = {
  "Array": {
    badge: "Topic Theory",
    title: "Array Data Structure Fundamentals",
    content: `• Memory Layout: Elements stored in contiguous physical memory addresses.
• Indexing: 0-indexed with instant O(1) random access: arr[i].
• Time Complexity:
  - Access / Update: O(1)
  - Search (Unsorted): O(n)
  - Search (Sorted / Binary Search): O(log n)
  - Insertion / Deletion at end: O(1) amortized
  - Insertion / Deletion at start/middle: O(n) (requires shifting elements)`
  },
  "Strings": {
    badge: "Topic Theory",
    title: "Strings Fundamentals",
    content: `• In JavaScript, Strings are immutable primitive values.
• Common Techniques: Two-pointer palindromes, Sliding window for substrings, Frequency maps.
• Time Complexity: charAt() / index access is O(1).`
  },
  "Binary Search": {
    badge: "Topic Theory",
    title: "Binary Search Mastery",
    content: `• Condition: Search space must be monotonic (sorted or divided into two clear halves).
• Formula: mid = Math.floor(left + (right - left) / 2).
• Halves search space each step: O(log n) time complexity.`
  },
  "Stack": {
    badge: "Topic Theory",
    title: "Stack (LIFO - Last In, First Out)",
    content: `• Operations: push(val), pop(), peek() - all run in O(1) time.
• Patterns: Monotonic stack (Next Greater Element), Parentheses matching, Undo operations.`
  }
};

const patternTheories = {
  "Two-Pointer": {
    badge: "Approach Guide",
    title: "Two-Pointer Technique Core Approach",
    content: `• When to use: Sorted arrays, searching for pairs/triplets, reversing, partitions.
• Opposing Direction Pointers:
  - Place left = 0, right = n - 1.
  - Adjust inward based on condition:
    * sum < target  ->  left++ (increase sum)
    * sum > target  ->  right-- (decrease sum)
• Same Direction (Fast & Slow):
  - Slow pointer marks valid boundary, fast pointer scans items.
• Achieves O(n) linear time with O(1) auxiliary space!`
  },
  "Sliding Window": {
    badge: "Approach Guide",
    title: "Sliding Window Pattern",
    content: `• When to use: Subarray / substring problems with contiguous constraint.
• Expand right pointer to grow window, shrink left pointer when condition is violated.`
  }
};

export default function DSAPracticeCard() {
  const { activeDay, toggleTask, updateTaskCodeSolution } = useLearning();
  const [activeLeftTab, setActiveLeftTab] = useState({}); // { [taskId]: 'problem' | 'topic-theory' | 'approach-theory' | 'hint' }
  const [answers, setAnswers] = useState({});
  const [saved, setSaved] = useState({});
  const [consoleOutput, setConsoleOutput] = useState({});

  if (!activeDay) return null;
  const dsaTasks = activeDay.tasks.filter(t => t.type === 'dsa');
  if (dsaTasks.length === 0) return null;

  const handleSave = (taskId) => {
    const ans = answers[taskId] ?? '';
    updateTaskCodeSolution(activeDay.dayNumber, taskId, ans);
    setSaved(s => ({ ...s, [taskId]: true }));
    setTimeout(() => setSaved(s => ({ ...s, [taskId]: false })), 1800);
  };

  const handleClear = (taskId) => {
    setAnswers(s => ({ ...s, [taskId]: '' }));
    updateTaskCodeSolution(activeDay.dayNumber, taskId, '');
  };

  const handleRunCode = (taskId, code) => {
    try {
      // Safe dry run evaluation
      let logs = [];
      const customConsole = {
        log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '))
      };
      
      const runner = new Function('console', `${code}`);
      runner(customConsole);

      setConsoleOutput(c => ({
        ...c,
        [taskId]: logs.length > 0 ? logs.join('\n') : "Code executed with 0 syntax errors! (No console.log outputs)"
      }));
    } catch (err) {
      setConsoleOutput(c => ({
        ...c,
        [taskId]: `Execution Error: ${err.message}`
      }));
    }
  };

  return (
    <div className="space-y-4 pt-2">
      {/* Target Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-theme-accentText">
          <Brain className="w-4 h-4 text-theme-accent" />
          <span>Target 3: Daily LeetCode-Style DSA Problem (JavaScript)</span>
        </div>
        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-theme-accentSub border border-theme-accentBorder text-theme-accentText font-semibold">
          LeetCode Two-Pane Layout • JS Canvas
        </span>
      </div>

      {dsaTasks.map(task => {
        const guide = dsaGuideByTitle[task.title] || {
          questionTitle: task.title,
          desc: task.desc || "Solve the problem using the required pattern.",
          inputExample: "numbers = [2, 7, 11, 15], target = 9",
          outputExample: "[1, 2]",
          explanation: "Return indices of elements adding up to target.",
          constraints: "Check constraints on LeetCode.",
          hint: task.hint || "Review the pattern approach guide."
        };

        const leftTab = activeLeftTab[task.id] || 'problem';
        // Clean blank code canvas: only user's written code, otherwise empty string ""
        const rawCode = answers[task.id] !== undefined ? answers[task.id] : (task.codeSolution || "");
        const isOldBoilerplate = typeof rawCode === 'string' && (
          rawCode.includes("Write your Two-Pointer logic") ||
          rawCode.includes("Two-Pointer logic here") ||
          rawCode.includes("@param {number[]}") ||
          rawCode.includes("function solve(input)") ||
          rawCode.includes("function twoSum") ||
          rawCode.includes("# Array Data Structure & Two-Pointer Pattern")
        );
        const userCode = isOldBoilerplate ? "" : rawCode;
        const isSaved = saved[task.id];
        const output = consoleOutput[task.id];

        const topicTheory = topicTheories[task.topic] || topicTheories["Array"];
        const patternTheory = patternTheories[task.pattern] || patternTheories["Two-Pointer"];

        return (
          <div
            key={task.id}
            className={`rounded-3xl border transition-all overflow-hidden p-5 sm:p-6 shadow-sm space-y-4 ${
              task.completed
                ? 'bg-theme-cardSub/60 border-theme-border opacity-90'
                : 'bg-theme-card border-theme-border hover:border-theme-borderSub'
            }`}
          >
            {/* Top Bar: Title, Tags & LeetCode Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-theme-border pb-3.5">
              <div 
                className="flex items-start space-x-3 cursor-pointer flex-1"
                onClick={() => toggleTask(activeDay.dayNumber, task.id)}
              >
                <button type="button" className="mt-0.5 flex-shrink-0">
                  {task.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-theme-accent" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-theme-muted hover:border-theme-accent transition-colors" />
                  )}
                </button>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className={`text-base font-bold ${task.completed ? 'line-through text-theme-muted' : 'text-theme-text'}`}>
                      {guide.questionTitle || task.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-theme-cardSub border border-theme-border text-theme-secondary">
                      {task.difficulty || 'Medium'}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-theme-accentSub border border-theme-accentBorder text-theme-accentText">
                      {task.pattern}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-theme-cardSub border border-theme-border text-theme-muted">
                      {task.topic}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {task.link && (
                  <a
                    href={task.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-theme-cardSub border border-theme-border text-theme-secondary hover:text-theme-text hover:bg-theme-cardHover text-xs font-semibold transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-theme-accent" />
                    <span>LeetCode</span>
                  </a>
                )}

                <button
                  onClick={() => toggleTask(activeDay.dayNumber, task.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-xl border font-bold transition-all ${
                    task.completed
                      ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow border-theme-accent'
                      : 'bg-theme-cardSub border-theme-border text-theme-secondary hover:text-theme-text hover:bg-theme-cardHover'
                  }`}
                >
                  {task.completed ? 'Completed ✓' : 'Mark Done'}
                </button>
              </div>
            </div>

            {/* LEETCODE TWO-PANE LAYOUT: Left Pane (Problem / Topic Theory / Approach / Hint) | Right Pane (Code Editor) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              {/* LEFT PANE (col-span-5): Tabs for Description, Topic Theory, Approach, and Hint */}
              <div className="lg:col-span-5 flex flex-col rounded-2xl border border-theme-border bg-theme-cardSub overflow-hidden">
                {/* Left Tabs Bar */}
                <div className="p-2 border-b border-theme-border bg-theme-card/60 flex items-center space-x-1 overflow-x-auto no-scrollbar text-xs">
                  <button
                    onClick={() => setActiveLeftTab(t => ({ ...t, [task.id]: 'problem' }))}
                    className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                      leftTab === 'problem'
                        ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow'
                        : 'text-theme-secondary hover:text-theme-text hover:bg-theme-cardHover'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Description</span>
                  </button>

                  <button
                    onClick={() => setActiveLeftTab(t => ({ ...t, [task.id]: 'approach-theory' }))}
                    className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                      leftTab === 'approach-theory'
                        ? 'bg-theme-accentSub text-theme-accentText border border-theme-accentBorder font-bold'
                        : 'text-theme-secondary hover:text-theme-text hover:bg-theme-cardHover'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-theme-accent" />
                    <span>{task.pattern}</span>
                  </button>

                  <button
                    onClick={() => setActiveLeftTab(t => ({ ...t, [task.id]: 'topic-theory' }))}
                    className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                      leftTab === 'topic-theory'
                        ? 'bg-theme-accentSub text-theme-accentText border border-theme-accentBorder font-bold'
                        : 'text-theme-secondary hover:text-theme-text hover:bg-theme-cardHover'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5 text-theme-accent" />
                    <span>{task.topic}</span>
                  </button>

                  <button
                    onClick={() => setActiveLeftTab(t => ({ ...t, [task.id]: 'hint' }))}
                    className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                      leftTab === 'hint'
                        ? 'bg-theme-accentSub text-theme-accentText border border-theme-accentBorder font-bold'
                        : 'text-theme-secondary hover:text-theme-text hover:bg-theme-cardHover'
                    }`}
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-theme-accent" />
                    <span>Hint</span>
                  </button>
                </div>

                {/* Left Content Area */}
                <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-4 max-h-[540px]">
                  {/* TAB 1: Problem Description (LeetCode style) */}
                  {leftTab === 'problem' && (
                    <div className="space-y-4 text-xs sm:text-sm">
                      <div>
                        <h4 className="font-bold text-theme-text text-sm mb-1.5">Problem Statement</h4>
                        <p className="text-theme-secondary leading-relaxed">
                          {guide.desc}
                        </p>
                      </div>

                      {/* Example Box */}
                      <div className="p-3.5 rounded-xl bg-theme-bg border border-theme-border font-mono text-xs space-y-2">
                        <span className="font-bold text-theme-text block uppercase text-[10px] tracking-wider">Example 1:</span>
                        <div className="space-y-1">
                          <p><strong className="text-theme-muted">Input: </strong><span className="text-theme-accentText font-semibold">{guide.inputExample}</span></p>
                          <p><strong className="text-theme-muted">Output: </strong><span className="text-emerald-400 font-semibold">{guide.outputExample}</span></p>
                        </div>
                        {guide.explanation && (
                          <p className="text-theme-muted text-[11px] pt-1.5 border-t border-theme-border font-sans leading-relaxed">
                            <strong className="text-theme-secondary">Explanation: </strong>{guide.explanation}
                          </p>
                        )}
                      </div>

                      {/* Constraints */}
                      {guide.constraints && (
                        <div className="space-y-1 text-xs">
                          <h5 className="font-bold text-theme-text">Constraints:</h5>
                          <pre className="font-mono text-[11px] text-theme-muted whitespace-pre-line leading-relaxed">
                            {guide.constraints}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 2: Pattern Approach Theory (e.g. Two-Pointer) */}
                  {leftTab === 'approach-theory' && (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-theme-accentText font-bold text-sm">
                        <Layers className="w-4 h-4 text-theme-accent" />
                        <span>{patternTheory.title}</span>
                      </div>
                      <pre className="font-mono text-xs sm:text-sm text-theme-secondary whitespace-pre-wrap leading-relaxed">
                        {patternTheory.content}
                      </pre>
                    </div>
                  )}

                  {/* TAB 3: Topic Theory (e.g. Array Data Structure) */}
                  {leftTab === 'topic-theory' && (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-theme-accentText font-bold text-sm">
                        <BookOpen className="w-4 h-4 text-theme-accent" />
                        <span>{topicTheory.title}</span>
                      </div>
                      <pre className="font-mono text-xs sm:text-sm text-theme-secondary whitespace-pre-wrap leading-relaxed">
                        {topicTheory.content}
                      </pre>
                    </div>
                  )}

                  {/* TAB 4: Approach Hint */}
                  {leftTab === 'hint' && (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-theme-accentText font-bold text-sm">
                        <Lightbulb className="w-4 h-4 text-theme-accent" />
                        <span>Approach Hint & Logic:</span>
                      </div>
                      <pre className="font-mono text-xs sm:text-sm text-theme-secondary whitespace-pre-line leading-relaxed">
                        {guide.hint}
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT PANE (col-span-7): Dedicated Code Editor (LeetCode IDE style) */}
              <div className="lg:col-span-7 flex flex-col rounded-2xl border border-theme-border bg-theme-bg overflow-hidden shadow-inner">
                {/* Code Editor Header Bar */}
                <div className="px-4 py-2.5 bg-theme-cardSub border-b border-theme-border flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-theme-accent" />
                    <span className="font-semibold text-theme-text">{task.title.replace(/\s+/g, '')}.js</span>
                    <span className="text-[10px] text-theme-muted uppercase px-1.5 py-0.5 rounded bg-theme-card border border-theme-border font-bold">JavaScript</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleClear(task.id)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold text-theme-muted hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all"
                      title="Clear code canvas"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Clear</span>
                    </button>

                    <button
                      onClick={() => handleSave(task.id)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold border transition-all ${
                        isSaved
                          ? 'bg-theme-accent text-theme-accentBtnText border-theme-accent shadow-theme-glow'
                          : 'bg-theme-card border-theme-border text-theme-secondary hover:text-theme-text hover:bg-theme-cardHover'
                      }`}
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>{isSaved ? 'Saved ✓' : 'Save'}</span>
                    </button>
                  </div>
                </div>

                {/* Textarea Code Canvas - Completely clean placeholder */}
                <textarea
                  rows={16}
                  spellCheck={false}
                  className="w-full p-4 font-mono text-xs sm:text-sm bg-transparent text-theme-text placeholder:text-theme-muted/50 focus:outline-none resize-y leading-relaxed flex-1"
                  placeholder={`// Write your JavaScript solution here...\n// (Start typing to write your solution - this canvas is completely blank)`}
                  value={userCode}
                  onChange={e => setAnswers(a => ({ ...a, [task.id]: e.target.value }))}
                />

                {/* Console Output Bar / Run button */}
                <div className="p-3 bg-theme-cardSub border-t border-theme-border flex items-center justify-between">
                  <span className="text-[11px] text-theme-muted font-mono">
                    Auto-saved to browser
                  </span>

                  <button
                    onClick={() => handleRunCode(task.id, userCode)}
                    className="flex items-center space-x-1.5 px-4 py-1.5 rounded-xl font-bold text-xs bg-theme-accent text-theme-accentBtnText shadow-theme-glow hover:opacity-90 transition-all active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run JS Check</span>
                  </button>
                </div>

                {/* Console Output Panel (if code was run) */}
                {output && (
                  <div className="p-3 bg-theme-card border-t border-theme-border font-mono text-xs text-theme-text">
                    <div className="flex items-center space-x-1.5 text-theme-muted mb-1 text-[10px] uppercase font-bold">
                      <Terminal className="w-3 h-3 text-theme-accent" />
                      <span>Console Result:</span>
                    </div>
                    <pre className="whitespace-pre-wrap text-theme-secondary leading-relaxed">{output}</pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
