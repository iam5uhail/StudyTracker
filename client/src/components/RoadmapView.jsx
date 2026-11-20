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
  const [curriculumTab, setCurriculumTab] = useState('70days'); // '70days', 'java140', 'dsaPatterns'
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

  // Helper to check if a java topic is completed in the plan
  const isJavaTopicDone = (topicNum) => {
    for (const day of days) {
      for (const t of day.tasks) {
        if (t.type === 'java' && t.videoNum === topicNum) {
          return Boolean(t.completed);
        }
      }
    }
    return false;
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
            { name: "Max Consecutive Ones", diff: "Easy", companies: ["Amazon", "Google"] },
            { name: "Max Consecutive Ones III", diff: "Medium", companies: ["Google", "Microsoft"] },
            { name: "Subarray Product Less Than K", diff: "Medium", companies: ["Amazon", "Google"] },
            { name: "Sliding Window Maximum", diff: "Hard", companies: ["Google", "Uber", "Amazon"] },
            { name: "Subarray with k distinct Integers", diff: "Hard", companies: ["Google", "Amazon"] },
            { name: "Fruits Into Baskets", diff: "Medium", companies: ["Amazon", "Google"] },
            { name: "Minimum Size Subarray Sum", diff: "Medium", companies: ["Amazon", "Adobe"] }
          ]
        },
        {
          name: "Prefix Sum (6 Problems)",
          desc: "Range sum, subarray sum, cumulative sum queries",
          problems: [
            { name: "Subarray Sum Equals K", diff: "Medium", companies: ["Facebook", "Amazon"] },
            { name: "Matrix Block Sum (Running Sum of 2D Array)", diff: "Medium", companies: ["Google", "Adobe"] },
            { name: "Product of Array Except Self", diff: "Medium", companies: ["Amazon", "Apple", "Facebook"] },
            { name: "Continuous Subarray Sum", diff: "Medium", companies: ["Facebook", "Amazon"] },
            { name: "Subarray Sum Divisible by K", diff: "Medium", companies: ["Microsoft", "Amazon"] },
            { name: "Find Pivot Index", diff: "Easy", companies: ["Amazon", "Apple"] }
          ]
        },
        {
          name: "Kadane's Algorithm (4 Problems)",
          desc: "Maximum/minimum sum or product of contiguous subarray",
          problems: [
            { name: "Maximum Subarray", diff: "Medium", companies: ["Amazon", "Apple", "Google"] },
            { name: "Maximum Sum Circular Subarray", diff: "Medium", companies: ["Amazon", "Google"] },
            { name: "Maximum Product Subarray", diff: "Medium", companies: ["Amazon", "Google"] },
            { name: "Best Time to Buy and Sell Stock", diff: "Easy", companies: ["Amazon", "Apple", "Google"] }
          ]
        }
      ]
    },
    {
      category: "Strings (11 Problems)",
      patterns: [
        {
          name: "String Manipulation & Frequency",
          desc: "Palindromes, anagrams, substring patterns",
          problems: [
            { name: "Valid Anagram", diff: "Easy", companies: ["Amazon", "Google", "Facebook"] },
            { name: "Group Anagrams", diff: "Medium", companies: ["Amazon", "Apple", "Microsoft"] },
            { name: "Longest Substring Without Repeating Characters", diff: "Medium", companies: ["Amazon", "Google"] },
            { name: "Valid Palindrome", diff: "Easy", companies: ["Facebook", "Microsoft"] },
            { name: "Longest Palindromic Substring", diff: "Medium", companies: ["Amazon", "Microsoft"] },
            { name: "Palindromic Substrings", diff: "Medium", companies: ["Google", "Facebook"] },
            { name: "Encode and Decode Strings", diff: "Medium", companies: ["Google", "Facebook"] },
            { name: "Minimum Window Substring", diff: "Hard", companies: ["Facebook", "Amazon"] },
            { name: "Longest Repeating Character Replacement", diff: "Medium", companies: ["Amazon", "Google"] },
            { name: "String to Integer (atoi)", diff: "Medium", companies: ["Amazon", "Microsoft"] },
            { name: "Find All Anagrams in a String", diff: "Medium", companies: ["Amazon", "Microsoft"] }
          ]
        }
      ]
    },
    {
      category: "Binary Search (23 Problems)",
      patterns: [
        {
          name: "Sorted Array Search & Bounds",
          desc: "Search space reduction, lower/upper bounds, rotated arrays",
          problems: [
            { name: "Binary Search", diff: "Easy", companies: ["Amazon", "Apple", "Google"] },
            { name: "Search in Rotated Sorted Array", diff: "Medium", companies: ["Amazon", "Google", "Facebook"] },
            { name: "Find Minimum in Rotated Sorted Array", diff: "Medium", companies: ["Amazon", "Microsoft"] },
            { name: "Search a 2D Matrix", diff: "Medium", companies: ["Amazon", "Microsoft"] },
            { name: "Search a 2D Matrix II", diff: "Medium", companies: ["Amazon", "Google"] },
            { name: "First and Last Position of Element in Sorted Array", diff: "Medium", companies: ["Facebook", "Amazon"] },
            { name: "Peak Index in a Mountain Array", diff: "Medium", companies: ["Google", "Amazon"] },
            { name: "Find Peak Element", diff: "Medium", companies: ["Google", "Facebook"] },
            { name: "Koko Eating Bananas", diff: "Medium", companies: ["Google", "Amazon"] },
            { name: "Capacity to Ship Packages Within D Days", diff: "Medium", companies: ["Google", "Amazon"] },
            { name: "Split Array Largest Sum", diff: "Hard", companies: ["Google", "Amazon"] },
            { name: "Median of Two Sorted Arrays", diff: "Hard", companies: ["Google", "Amazon", "Apple"] }
          ]
        }
      ]
    },
    {
      category: "Stacks & Queues (12 Problems)",
      patterns: [
        {
          name: "Monotonic Stack & Expression Evaluation",
          desc: "Parentheses, next greater element, histogram, stack evaluation",
          problems: [
            { name: "Valid Parentheses", diff: "Easy", companies: ["Amazon", "Google", "Facebook"] },
            { name: "Min Stack", diff: "Medium", companies: ["Amazon", "Microsoft", "Bloomberg"] },
            { name: "Evaluate Reverse Polish Notation", diff: "Medium", companies: ["Amazon", "LinkedIn"] },
            { name: "Daily Temperatures", diff: "Medium", companies: ["Amazon", "Google"] },
            { name: "Next Greater Element I", diff: "Easy", companies: ["Amazon", "Google"] },
            { name: "Next Greater Element II", diff: "Medium", companies: ["Amazon", "Google"] },
            { name: "Largest Rectangle in Histogram", diff: "Hard", companies: ["Amazon", "Google"] },
            { name: "Asteroid Collision", diff: "Medium", companies: ["Google", "Amazon"] },
            { name: "Implement Queue using Stacks", diff: "Easy", companies: ["Amazon", "Microsoft"] },
            { name: "Trapping Rain Water (Stack Approach)", diff: "Hard", companies: ["Google", "Goldman Sachs"] },
            { name: "Online Stock Span", diff: "Medium", companies: ["Amazon", "Adobe"] },
            { name: "Remove K Digits", diff: "Medium", companies: ["Google", "Amazon"] }
          ]
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* 1. Header Banner */}
      <div className="rounded-3xl border border-[#16241D] bg-gradient-to-r from-[#080E0A] via-[#0B150F] to-[#080D0A] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-emerald-400 mb-2">
            <Map className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Curriculum & Syllabus</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Full Learning Roadmap
          </h1>
          <p className="text-sm text-gray-400 mt-1 max-w-2xl">
            Browse the complete <strong className="text-emerald-300">140 Core Java Topics</strong> curriculum and <strong className="text-emerald-300">Rising Brain Pattern-Wise DSA</strong> syllabus.
          </p>
        </div>

        {/* Sub-view switcher */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#060A08] border border-[#16241D] p-1.5 rounded-2xl text-xs flex-shrink-0">
          <button
            onClick={() => setCurriculumTab('70days')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl font-bold transition-all ${
              curriculumTab === '70days'
                ? 'bg-emerald-500 text-black shadow-[0_0_12px_#10B981]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>70-Day Schedule</span>
          </button>

          <button
            onClick={() => setCurriculumTab('java140')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl font-bold transition-all ${
              curriculumTab === 'java140'
                ? 'bg-amber-400 text-black shadow-[0_0_12px_#FBBF24]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Core Java (140 Topics)</span>
          </button>

          <button
            onClick={() => setCurriculumTab('dsaPatterns')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl font-bold transition-all ${
              curriculumTab === 'dsaPatterns'
                ? 'bg-emerald-400 text-black shadow-[0_0_12px_#34D399]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>DSA Patterns (70 Problems)</span>
          </button>
        </div>
      </div>

      {/* 2. Switchable Tab Content */}
      {curriculumTab === '70days' && (
        <AllTargetsTableView onOpenNotes={onOpenNotes} />
      )}

      {curriculumTab === 'java140' && (
        <div className="space-y-5">
          {/* Search bar for Java topics */}
          <div className="bg-[#0A100D] border border-[#16241D] rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">140 Core Java Video Topics Curriculum</h3>
                <p className="text-xs text-gray-400">From Introduction to JDBC, Multithreading, and Billing Software Projects</p>
              </div>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics (e.g. static, thread)..."
                value={javaSearch}
                onChange={(e) => setJavaSearch(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-xl bg-[#060A08] border border-[#192A20] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 w-full sm:w-64"
              />
            </div>
          </div>

          {/* 9 Modules Accordion / Cards */}
          <div className="grid grid-cols-1 gap-4">
            {javaModules.map(module => {
              const matchingTopics = module.topics.filter(t => 
                !javaSearch.trim() || t.Title.toLowerCase().includes(javaSearch.toLowerCase())
              );

              if (javaSearch.trim() && matchingTopics.length === 0) return null;

              return (
                <div key={module.id} className="bg-[#0A100D] border border-[#16241D] rounded-2xl p-5 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#16241D] pb-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                          {module.range}
                        </span>
                        <span className="text-gray-600">•</span>
                        <h4 className="text-base font-bold text-white">{module.title}</h4>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{module.description}</p>
                    </div>
                    <span className="text-xs text-gray-500 font-mono self-start sm:self-auto">
                      {matchingTopics.length} topics
                    </span>
                  </div>

                  {/* Topics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {matchingTopics.map(topic => {
                      const done = isJavaTopicDone(topic.Num);
                      return (
                        <div
                          key={topic.Num}
                          className={`flex items-start space-x-2.5 p-3 rounded-xl border text-xs transition-colors ${
                            done 
                              ? 'bg-[#0B1510] border-emerald-500/30 text-gray-300' 
                              : 'bg-[#0D1411] border-[#18261F] text-gray-400'
                          }`}
                        >
                          <span className="flex-shrink-0 mt-0.5">
                            {done ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Circle className="w-4 h-4 text-gray-600" />
                            )}
                          </span>
                          <span className={`font-medium ${done ? 'line-through text-gray-500' : 'text-gray-200'}`}>
                            {topic.Title}
                          </span>
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

      {curriculumTab === 'dsaPatterns' && (
        <div className="space-y-6">
          {dsaPatterns.map((cat, cIdx) => (
            <div key={cIdx} className="bg-[#0A100D] border border-[#16241D] rounded-3xl p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-[#16241D] pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cat.category}</h3>
                    <p className="text-xs text-gray-400">Pattern-wise questions curated from Rising Brain sheet</p>
                  </div>
                </div>
              </div>

              {/* Patterns inside this Category */}
              <div className="space-y-4">
                {cat.patterns.map((pat, pIdx) => (
                  <div key={pIdx} className="bg-[#0D1411] border border-[#18261F] rounded-2xl p-4 sm:p-5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#18261F] pb-2.5">
                      <div>
                        <h4 className="text-sm font-bold text-emerald-300 flex items-center space-x-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{pat.name}</span>
                        </h4>
                        <p className="text-xs text-gray-400 mt-0.5">{pat.desc}</p>
                      </div>
                      <span className="text-[11px] text-gray-500 font-mono">
                        {pat.problems.length} Problems
                      </span>
                    </div>

                    {/* Problem list */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {pat.problems.map((prob, prIdx) => (
                        <div
                          key={prIdx}
                          className="flex items-center justify-between p-3 rounded-xl bg-[#09100C] border border-[#14231B] text-xs hover:border-[#1E3327] transition-colors"
                        >
                          <div className="space-y-1 flex-1 pr-2">
                            <span className="font-semibold text-gray-200 block truncate">
                              {prob.name}
                            </span>
                            <div className="flex flex-wrap items-center gap-1">
                              {prob.companies.slice(0, 2).map((comp, compIdx) => (
                                <span key={compIdx} className="text-[9px] px-1.5 py-0.5 rounded bg-[#121B16] text-gray-400">
                                  {comp}
                                </span>
                              ))}
                            </div>
                          </div>

                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md flex-shrink-0 ${
                            prob.diff.toLowerCase() === 'easy'
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                              : prob.diff.toLowerCase() === 'hard'
                              ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                              : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                          }`}>
                            {prob.diff}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
