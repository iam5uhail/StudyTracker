import React from 'react';
import { Rocket } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function ProgressCard() {
  const { globalStats } = useLearning();

  // SVG Circular progress dimensions
  const size = 110;
  const strokeWidth = 9;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (globalStats.percent / 100) * circumference;

  return (
    <div className="glow-card rounded-2xl p-5 border border-[#16241D] bg-[#0A100D] flex flex-col justify-between w-full h-full shadow-lg">
      {/* Top Encouragement Box */}
      <div className="flex items-start space-x-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400 mt-0.5">
          <Rocket className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Keep pushing!</h4>
          <p className="text-xs text-gray-400 leading-snug mt-0.5">
            Building mastery one problem at a time — keep the momentum going!
          </p>
        </div>
      </div>

      {/* Middle Progress Ring + Stats */}
      <div className="flex items-center space-x-4 my-2">
        {/* SVG Circular Ring */}
        <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
          <svg className="w-full h-full -rotate-90 transform" viewBox={`0 0 ${size} ${size}`}>
            {/* Background Circle */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="#131F19"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* Active Emerald Progress */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="#10B981"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-700 ease-out"
            />
          </svg>

          {/* Centered Percentage */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xl font-bold text-white tracking-tight">{globalStats.percent}%</span>
            <span className="text-[10px] text-gray-400 font-mono mt-0.5">
              {globalStats.solvedProblems}/{globalStats.totalProblems}
            </span>
          </div>
        </div>

        {/* Text Details */}
        <div>
          <div className="text-sm font-bold text-white">Total progress</div>
          <div className="text-xs text-gray-400">across all sheets</div>
        </div>
      </div>

      {/* Bottom Difficulty Breakdown */}
      <div className="space-y-2 mt-4 pt-4 border-t border-[#131F19]">
        {/* Easy */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-emerald-400 font-medium">Easy</span>
            <span className="text-gray-400 font-mono text-[11px]">
              {globalStats.easy.solved}/{globalStats.easy.total} {globalStats.easy.percent}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#131F19] rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all duration-500" 
              style={{ width: `${globalStats.easy.percent}%` }}
            />
          </div>
        </div>

        {/* Medium */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-amber-400 font-medium">Medium</span>
            <span className="text-gray-400 font-mono text-[11px]">
              {globalStats.medium.solved}/{globalStats.medium.total} {globalStats.medium.percent}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#131F19] rounded-full overflow-hidden">
            <div 
              className="h-full bg-amber-500 rounded-full transition-all duration-500" 
              style={{ width: `${globalStats.medium.percent}%` }}
            />
          </div>
        </div>

        {/* Hard */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-rose-500 font-medium">Hard</span>
            <span className="text-gray-400 font-mono text-[11px]">
              {globalStats.hard.solved}/{globalStats.hard.total} {globalStats.hard.percent}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#131F19] rounded-full overflow-hidden">
            <div 
              className="h-full bg-rose-500 rounded-full transition-all duration-500" 
              style={{ width: `${globalStats.hard.percent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
