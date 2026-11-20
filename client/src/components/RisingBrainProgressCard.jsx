import React from 'react';
import { Rocket } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function RisingBrainProgressCard() {
  const { progressStats } = useLearning();

  // SVG Circular progress ring calculations
  const size = 110;
  const strokeWidth = 9;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progressStats.dsaPercent / 100) * circumference;

  return (
    <div className="rounded-3xl p-5 sm:p-6 border border-theme-border bg-theme-card flex flex-col justify-between w-full shadow-sm">
      {/* Top Banner Box */}
      <div className="flex items-start space-x-3 mb-3">
        <div className="w-8 h-8 rounded-xl bg-theme-accentSub border border-theme-accentBorder flex items-center justify-center flex-shrink-0 text-theme-accentText mt-0.5">
          <Rocket className="w-4 h-4 text-theme-accent" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-theme-text">Keep pushing!</h4>
          <p className="text-xs text-theme-muted leading-snug mt-0.5">
            Building mastery one problem at a time â€” keep the momentum going!
          </p>
        </div>
      </div>

      {/* Center: Circular Progress Ring + Stats */}
      <div className="flex items-center space-x-4 my-2">
        <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
          <svg className="w-full h-full -rotate-90 transform" viewBox={`0 0 ${size} ${size}`}>
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="var(--border-sub)"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="var(--accent)"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-700 ease-out"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xl font-bold text-theme-text tracking-tight font-mono">{progressStats.dsaPercent}%</span>
            <span className="text-[10px] text-theme-muted font-mono mt-0.5">
              {progressStats.dsaCompleted}/{progressStats.dsaTotal}
            </span>
          </div>
        </div>

        <div>
          <div className="text-sm font-bold text-theme-text">Total progress</div>
          <div className="text-xs text-theme-muted">across all pattern sheets</div>
        </div>
      </div>

      {/* Difficulty Breakdown (Easy, Medium, Hard) */}
      <div className="space-y-2 mt-3 pt-3 border-t border-theme-border">
        {/* Easy */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-emerald-500 font-medium">Easy</span>
            <span className="text-theme-muted font-mono text-[11px]">
              {progressStats.easySolved}/{progressStats.easyTotal} {progressStats.easyPercent}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-theme-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all duration-500" 
              style={{ width: `${progressStats.easyPercent}%` }}
            />
          </div>
        </div>

        {/* Medium */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-amber-500 font-medium">Medium</span>
            <span className="text-theme-muted font-mono text-[11px]">
              {progressStats.medSolved}/{progressStats.medTotal} {progressStats.medPercent}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-theme-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-amber-500 rounded-full transition-all duration-500" 
              style={{ width: `${progressStats.medPercent}%` }}
            />
          </div>
        </div>

        {/* Hard */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-rose-500 font-medium">Hard</span>
            <span className="text-theme-muted font-mono text-[11px]">
              {progressStats.hardSolved}/{progressStats.hardTotal} {progressStats.hardPercent}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-theme-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-rose-500 rounded-full transition-all duration-500" 
              style={{ width: `${progressStats.hardPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
