import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function ActiveSheetOverview() {
  const { activeTrack, activeTrackStats } = useLearning();

  if (!activeTrack) return null;

  return (
    <div className="glow-card rounded-2xl p-5 border border-[#16241D] bg-[#0A100D] mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center space-x-2.5">
            <h2 className="text-xl font-bold text-white tracking-tight">{activeTrack.name}</h2>
            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-semibold text-emerald-400">
              <Layers className="w-3 h-3" />
              <span>{activeTrackStats.topicsCount} topics</span>
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1 max-w-2xl">
            {activeTrack.subtitle || activeTrack.description}
          </p>
        </div>

        {/* Solved Metric */}
        <div className="flex items-center space-x-2 font-mono text-sm">
          <span className="text-gray-400">
            <strong className="text-white">{activeTrackStats.solved}</strong> / {activeTrackStats.total}
          </span>
          <span className="text-emerald-400 font-bold">
            {activeTrackStats.percent}%
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-[#131F19] rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-500 shadow-[0_0_10px_#10B981]" 
          style={{ width: `${activeTrackStats.percent}%` }}
        />
      </div>
    </div>
  );
}
