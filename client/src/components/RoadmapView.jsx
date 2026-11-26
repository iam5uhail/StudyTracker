import React, { useState } from 'react';
import { 
  Map, 
  BookOpen, 
  Brain, 
  Code2, 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Search, 
  Filter, 
  ExternalLink, 
  FileText,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import allJavaTopicsList from '../data/allJavaTopics.json';
import AllTargetsTableView from './AllTargetsTableView';

export default function RoadmapView({ onOpenNotes }) {
  const { days, toggleTask, setActiveDayNumber } = useLearning();
  const [curriculumTab, setCurriculumTab] = useState('70days'); // '70days', 'java140'
  const [javaSearch, setJavaSearch] = useState('');

  // 9 Modules of Core Java 140 Topics
  const javaModules = [
    {
      id: 1,
      title: "Module 1: Java Basics & Fundamentals",
      range: "Topics 01 - 20",
      description: "Language intro, JVM, JDK, Compilation, Data Types, Type Casting, Variables, Literals, Control Flow & Star Patterns",
      topics: allJavaTopicsList.slice(0, 20)
    },
    {
      id: 2,
      title: "Module 2: Object-Oriented Programming (OOP)",
      range: "Topics 21 - 36",
      description: "Classes, Objects, Constructors, Relationships, Polymorphism, Abstraction, Interfaces, Encapsulation & Keywords",
      topics: allJavaTopicsList.slice(20, 36)
    },
    {
      id: 3,
      title: "Module 3: Advanced OOP, Nested Classes & Packages",
      range: "Topics 37 - 43",
      description: "Super, final, static, nested classes, static methods & packages deep dive",
      topics: allJavaTopicsList.slice(36, 43)
    },
    {
      id: 4,
      title: "Module 4: GUI, AWT & Mini Projects",
      range: "Topics 44 - 49",
      description: "AWT GUI, Event Handling in AWT, Tic Tac Toe Game project implementation",
      topics: allJavaTopicsList.slice(43, 49)
    },
    {
      id: 5,
      title: "Module 5: Exception Handling & Strings",
      range: "Topics 50 - 59",
      description: "Error vs Exception, try-catch blocks, throws, throw, String class, StringBuffer & StringBuilder",
      topics: allJavaTopicsList.slice(49, 59)
    },
    {
      id: 6,
      title: "Module 6: Multithreading & Concurrency",
      range: "Topics 60 - 70",
      description: "Thread creation, lifecycle, synchronization, thread group, thread pool, Callable & Future",
      topics: allJavaTopicsList.slice(59, 70)
    },
    {
      id: 7,
      title: "Module 7: Java I/O Streams, Serialization & Networking",
      range: "Topics 71 - 84",
      description: "Byte stream, Character stream, File Handling, Serialization, Socket programming, RMI & Chat project",
      topics: allJavaTopicsList.slice(70, 84)
    },
    {
      id: 8,
      title: "Module 8: Collections Framework & Generics",
      range: "Topics 85 - 112",
      description: "Arrays (1D, 2D, 3D), List, ArrayList, LinkedList, Set, Map, HashMap, TreeMap, Comparator, Generics",
      topics: allJavaTopicsList.slice(84, 112)
    },
    {
      id: 9,
      title: "Module 9: Java 8 Features, JDBC & Real-World Projects",
      range: "Topics 113 - 140",
      description: "Lambda expressions, Stream API, Date-Time API, SQL Queries, JDBC connection, Billing Software Project (1-15) & Applets",
      topics: allJavaTopicsList.slice(112, 140)
    }
  ];

  // Helper to find corresponding java task in plan
  const findJavaTask = (topicNum) => {
    if (topicNum === undefined || topicNum === null) return null;
    for (const day of days) {
      for (const t of day.tasks) {
        if (t.type === 'java' && (t.num === topicNum || t.videoNum === topicNum)) {
          return { dayNumber: day.dayNumber, task: t };
        }
      }
    }
    return null;
  };

  // Helper to check if a java topic is completed in the plan
  const isJavaTopicDone = (topicNum) => {
    if (topicNum === undefined || topicNum === null) return false;
    const match = findJavaTask(topicNum);
    return match ? Boolean(match.task.completed) : false;
  };

  // Helper to find matching DSA task in plan
  const findDsaTask = (probName) => {
    if (!probName) return null;
    for (const day of days) {
      for (const t of day.tasks) {
        if (t.type === 'dsa' && t.title.toLowerCase().trim() === probName.toLowerCase().trim()) {
          return { dayNumber: day.dayNumber, task: t };
        }
      }
    }
    return null;
  };

  // Rising Brain DSA Pattern curriculum structure
  const dsaPatterns = [
    {
      category: "Array (24 Problems)",
      patterns: [
        {
          name: "Two-Pointer (6 Problems)",
          desc: "Pairs, sorted arrays, triplets, opposite-end traversal",
          problems: [
            { name: "Two Sum II", diff: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
            { name: "3Sum", diff: "Medium", companies: ["Facebook", "Microsoft", "Amazon"] },
            { name: "Sort Colors", diff: "Medium", companies: ["Microsoft", "Adobe", "Amazon"] },
            { name: "Move Zeroes", diff: "Easy", companies: ["Amazon", "Google", "Facebook"] },
            { name: "Container With Most Water", diff: "Medium", companies: ["Amazon", "Apple", "Google"] },
            { name: "Trapping Rain Water", diff: "Hard", companies: ["Google", "Goldman Sachs", "Bloomberg"] }
          ]
        },
        {
          name: "Sliding Window (8 Problems)",
          desc: "Fixed size or dynamic expanding/shrinking window",
          problems: [
            { name: "Maximum Sum Subarray of Size K", diff: "Easy", companies: ["Amazon", "Microsoft"] },
            { name: "Smallest Subarray with a given sum", diff: "Medium", companies: ["Google"] },
            { name: "Longest Substring Without Repeating Characters", diff: "Medium", companies: ["Amazon", "Microsoft", "Bloomberg"] },
            { name: "Minimum Window Substring", diff: "Hard", companies: ["Facebook", "Uber", "Amazon"] },
            { name: "Subarray Product Less Than K", diff: "Medium", companies: ["Apple"] },
            { name: "Permutation in String", diff: "Medium", companies: ["Microsoft"] }
          ]
        },
        {
          name: "Prefix Sum & Kadane's (5 Problems)",
          desc: "Cumulative sums, contiguous subarray maximums",
          problems: [
            { name: "Maximum Subarray (Kadane's)", diff: "Medium", companies: ["Amazon", "Apple", "Microsoft"] },
            { name: "Subarray Sum Equals K", diff: "Medium", companies: ["Facebook", "Google"] },
            { name: "Product of Array Except Self", diff: "Medium", companies: ["Amazon", "Apple", "Facebook"] },
            { name: "Find Pivot Index", diff: "Easy", companies: ["Amazon"] }
          ]
        },
        {
          name: "Matrix & Simulation (5 Problems)",
          desc: "2D Grid manipulations, spiral traversals, rotations",
          problems: [
            { name: "Spiral Matrix", diff: "Medium", companies: ["Microsoft", "Amazon", "Apple"] },
            { name: "Rotate Image 90 Degrees", diff: "Medium", companies: ["Amazon", "Bloomberg"] },
            { name: "Set Matrix Zeroes", diff: "Medium", companies: ["Facebook", "Microsoft"] },
            { name: "Valid Sudoku", diff: "Medium", companies: ["Apple", "Uber"] }
          ]
        }
      ]
    },
    {
      category: "Strings (11 Problems)",
      patterns: [
        {
          name: "Palindrome & Two-Pointer (4 Problems)",
          desc: "Verification and longest palindromic substring",
          problems: [
            { name: "Valid Palindrome", diff: "Easy", companies: ["Facebook", "Microsoft"] },
            { name: "Longest Palindromic Substring", diff: "Medium", companies: ["Amazon", "Google", "Adobe"] },
            { name: "Palindromic Substrings", diff: "Medium", companies: ["Facebook"] }
          ]
        },
        {
          name: "Anagrams & Frequency (4 Problems)",
          desc: "Hash map character counting, sorting, grouped anagrams",
          problems: [
            { name: "Valid Anagram", diff: "Easy", companies: ["Amazon", "Facebook"] },
            { name: "Group Anagrams", diff: "Medium", companies: ["Amazon", "Apple", "Uber"] },
            { name: "Find All Anagrams in a String", diff: "Medium", companies: ["Microsoft"] }
          ]
        },
        {
          name: "String Parsing & Matching (3 Problems)",
          desc: "Roman numerals, string matching, longest common prefix",
          problems: [
            { name: "Longest Common Prefix", diff: "Easy", companies: ["Amazon", "Google"] },
            { name: "String to Integer (atoi)", diff: "Medium", companies: ["Microsoft", "Amazon"] },
            { name: "Roman to Integer", diff: "Easy", companies: ["Apple"] }
          ]
        }
      ]
    },
    {
      category: "Binary Search (23 Problems)",
      patterns: [
        {
          name: "Standard Binary Search (5 Problems)",
          desc: "Search in sorted arrays, bounds, insert positions",
          problems: [
            { name: "Binary Search", diff: "Easy", companies: ["Google", "Amazon"] },
            { name: "Search Insert Position", diff: "Easy", companies: ["Apple"] },
            { name: "First and Last Position of Element in Sorted Array", diff: "Medium", companies: ["Facebook", "Microsoft"] },
            { name: "Find Minimum in Rotated Sorted Array", diff: "Medium", companies: ["Amazon", "Microsoft"] },
            { name: "Search in Rotated Sorted Array", diff: "Medium", companies: ["Google", "Bloomberg"] }
          ]
        },
        {
          name: "Binary Search on Answer Space (10 Problems)",
          desc: "Monotonic predicates, allocation, capacity, eating bananas",
          problems: [
            { name: "Koko Eating Bananas", diff: "Medium", companies: ["Airbnb", "Google"] },
            { name: "Capacity To Ship Packages Within D Days", diff: "Medium", companies: ["Amazon"] },
            { name: "Split Array Largest Sum", diff: "Hard", companies: ["Google", "Amazon"] },
            { name: "Aggressive Cows / Magnetic Force", diff: "Medium", companies: ["Facebook"] },
            { name: "Book Allocation Problem", diff: "Hard", companies: ["Flipkart", "Google"] }
          ]
        },
        {
          name: "2D Matrix Binary Search (4 Problems)",
          desc: "Row-sorted and column-sorted matrices",
          problems: [
            { name: "Search a 2D Matrix", diff: "Medium", companies: ["Microsoft", "Amazon"] },
            { name: "Search a 2D Matrix II", diff: "Medium", companies: ["Google", "Amazon"] },
            { name: "Find Peak Element II", diff: "Medium", companies: ["Google"] }
          ]
        },
        {
          name: "Peak & Specialized Binary Search (4 Problems)",
          desc: "Local maxima, mountain arrays, single non-duplicate",
          problems: [
            { name: "Find Peak Element", diff: "Medium", companies: ["Facebook", "Google"] },
            { name: "Peak Index in a Mountain Array", diff: "Medium", companies: ["Bloomberg"] },
            { name: "Single Element in a Sorted Array", diff: "Medium", companies: ["Amazon"] }
          ]
        }
      ]
    },
    {
      category: "Stack & Queue (12 Problems)",
      patterns: [
        {
          name: "Parentheses & Monotonic Stack (6 Problems)",
          desc: "Bracket validation, next greater element, temperatures",
          problems: [
            { name: "Valid Parentheses", diff: "Easy", companies: ["Amazon", "Microsoft", "Bloomberg"] },
            { name: "Next Greater Element I", diff: "Easy", companies: ["Amazon"] },
            { name: "Next Greater Element II", diff: "Medium", companies: ["Google"] },
            { name: "Daily Temperatures", diff: "Medium", companies: ["Amazon", "Facebook"] },
            { name: "Largest Rectangle in Histogram", diff: "Hard", companies: ["Google", "Amazon", "Uber"] },
            { name: "Maximal Rectangle", diff: "Hard", companies: ["Apple"] }
          ]
        },
        {
          name: "Expression Evaluation & Min Stack (6 Problems)",
          desc: "RPN, infix/postfix, basic calculator, O(1) min stack",
          problems: [
            { name: "Min Stack", diff: "Medium", companies: ["Amazon", "Bloomberg"] },
            { name: "Evaluate Reverse Polish Notation", diff: "Medium", companies: ["Google", "Apple"] },
            { name: "Basic Calculator II", diff: "Medium", companies: ["Facebook", "Amazon"] },
            { name: "Sliding Window Maximum (Monotonic Queue)", diff: "Hard", companies: ["Amazon", "Google"] }
          ]
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* 1. Header Banner */}
      <div className="rounded-3xl border border-theme-border bg-theme-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center space-x-2 text-theme-accentText mb-2">
            <BookOpen className="w-5 h-5 text-theme-accent" />
            <span className="text-xs font-bold uppercase tracking-wider">Complete Curriculum & Syllabus</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight">
            Master Learning Roadmap
          </h1>
          <p className="text-sm text-theme-muted mt-1 max-w-2xl">
            Explore the complete syllabus: <strong>140 Core Java Topics</strong> (9 modules) and <strong>140 Core Java Practice Drills</strong> spanning 70 dedicated days.
          </p>
        </div>

        {/* 3 View Tabs Switcher */}
        <div className="flex items-center space-x-1 bg-theme-cardSub border border-theme-border p-1 rounded-2xl text-xs flex-shrink-0 shadow-sm">
          <button
            onClick={() => setCurriculumTab('70days')}
            className={`px-3 sm:px-4 py-2 rounded-xl font-bold transition-all ${
              curriculumTab === '70days'
                ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow'
                : 'text-theme-muted hover:text-theme-text hover:bg-theme-cardHover'
            }`}
          >
            70-Day Schedule
          </button>

          <button
            onClick={() => setCurriculumTab('java140')}
            className={`px-3 sm:px-4 py-2 rounded-xl font-bold transition-all ${
              curriculumTab === 'java140'
                ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow'
                : 'text-theme-muted hover:text-theme-text hover:bg-theme-cardHover'
            }`}
          >
            140 Java Topics
          </button>
        </div>
      </div>

      {/* 2. Content based on tab */}
      {curriculumTab === '70days' && (
        <AllTargetsTableView onOpenNotes={onOpenNotes} />
      )}

      {curriculumTab === 'java140' && (
        <div className="space-y-6">
          {/* Search bar for Java topics */}
          <div className="flex items-center justify-between gap-3 bg-theme-card border border-theme-border rounded-2xl p-4 shadow-sm">
            <div className="flex items-center space-x-2 text-xs text-theme-muted">
              <Code2 className="w-4 h-4 text-amber-500" />
              <span>Browsing all <strong>140 Core Java Video Topics</strong> divided across 9 comprehensive modules</span>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-theme-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={javaSearch}
                onChange={(e) => setJavaSearch(e.target.value)}
                placeholder="Search topics (e.g. OOP, Stream, Thread)..."
                className="pl-8 pr-3 py-1.5 bg-theme-cardSub border border-theme-border focus:border-theme-accent rounded-xl text-xs text-theme-text placeholder-theme-muted focus:outline-none w-64 shadow-inner"
              />
            </div>
          </div>

          {/* 9 Modules list */}
          <div className="space-y-5">
            {javaModules.map((mod) => {
              const filteredModTopics = mod.topics.filter(t => 
                !javaSearch.trim() || t.Title.toLowerCase().includes(javaSearch.toLowerCase())
              );

              if (javaSearch.trim() && filteredModTopics.length === 0) return null;

              return (
                <div key={mod.id} className="bg-theme-card border border-theme-border rounded-3xl p-6 space-y-4 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-theme-border pb-3">
                    <div>
                      <h3 className="text-base font-bold text-theme-text flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span>{mod.title}</span>
                      </h3>
                      <p className="text-xs text-theme-muted mt-0.5">{mod.description}</p>
                    </div>

                    <span className="text-xs font-mono font-semibold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-xl border border-amber-500/20 self-start sm:self-auto">
                      {mod.range}
                    </span>
                  </div>

                  {/* Grid of topic badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {filteredModTopics.map((topic) => {
                      const topicNumber = topic.Num ?? topic.Video;
                      const taskMatch = findJavaTask(topicNumber);
                      const done = taskMatch ? Boolean(taskMatch.task.completed) : false;

                      return (
                        <div
                          key={topicNumber || topic.Title}
                          onClick={() => {
                            if (taskMatch && onOpenNotes) {
                              onOpenNotes(taskMatch.dayNumber, taskMatch.task);
                            }
                          }}
                          className={`flex items-start justify-between p-3 rounded-2xl border text-xs transition-all cursor-pointer group ${
                            done 
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold' 
                              : 'bg-theme-cardSub border-theme-border text-theme-secondary hover:border-theme-borderSub hover:bg-theme-card'
                          }`}
                        >
                          <div className="flex items-start space-x-2.5 min-w-0 pr-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (taskMatch) {
                                  toggleTask(taskMatch.dayNumber, taskMatch.task.id);
                                }
                              }}
                              className="flex-shrink-0 mt-0.5 hover:scale-110 transition-transform"
                              title={done ? "Mark Incomplete" : "Mark Complete"}
                            >
                              {done ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                              ) : (
                                <Circle className="w-4 h-4 text-theme-muted group-hover:text-theme-text" />
                              )}
                            </button>
                            <span className="font-medium text-theme-text leading-snug">
                              {topic.Title}
                            </span>
                          </div>
                          {taskMatch && taskMatch.task.notes && (
                            <span className="flex-shrink-0 ml-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-theme-accentSub text-theme-accentText border border-theme-accentBorder">
                              Notes
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
