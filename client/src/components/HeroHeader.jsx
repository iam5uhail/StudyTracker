import React from 'react';
import { BookOpen, FolderGit2, CheckCircle2 } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function HeroHeader() {
  const { globalStats, activeTrack } = useLearning();

  return (
    <div className="mb-6">
      {/* Category / Badge tag */}
      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-[#0F1B15] border border-[#162E22] text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-3">
        <span>{activeTrack?.category || 'DSA & Java'} Sheet</span>
      </div>

      {/* Hero Headline matching risingbrain */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-3">
        Learn patterns, <br className="hidden sm:inline" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500">
          not the problem
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed mb-5">
        Pattern Wise goes topic by topic. Last Minute 100 is the short version for when the interview is close. Track any custom learning roadmap seamlessly.
      </p>

      {/* Metric Counters Chips */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300 font-medium">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#0C1410] border border-[#16241D]">
          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
          <span><strong className="text-white">{globalStats.sheetsCount}</strong> sheets</span>
        </div>

        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#0C1410] border border-[#16241D]">
          <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
          <span><strong className="text-white">{globalStats.topicsCount}</strong> topics</span>
        </div>

        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#0C1410] border border-[#16241D]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span><strong className="text-white">{globalStats.totalProblems}</strong> problems</span>
        </div>
      </div>
    </div>
  );
}
