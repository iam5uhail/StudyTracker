import React from 'react';
import { Plus, Trash2, RotateCcw } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function SheetTabs({ onOpenAddTrack }) {
  const { tracks, activeTrackId, setActiveTrackId, deleteTrack, resetTrack } = useLearning();

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-6">
      {tracks.map((track, idx) => {
        const isActive = track.id === activeTrackId;
        
        // Calculate solved count for this sheet
        let total = 0;
        let solved = 0;
        (track.topics || []).forEach(top => {
          (top.items || []).forEach(item => {
            total++;
            if (item.isSolved) solved++;
          });
        });

        return (
          <div
            key={track.id}
            onClick={() => setActiveTrackId(track.id)}
            className={`group relative flex items-center space-x-3 px-4 py-2.5 rounded-xl cursor-pointer border transition-all duration-200 select-none whitespace-nowrap ${
              isActive
                ? 'bg-[#0E2017] border-emerald-500/60 shadow-[0_0_20px_-3px_rgba(16,185,129,0.25)]'
                : 'bg-[#0A100D] border-[#16241D] hover:border-[#1E3127] text-gray-400 hover:text-gray-200'
            }`}
          >
            {/* Number Badge */}
            <div
              className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                isActive
                  ? 'bg-emerald-500 text-black'
                  : 'bg-[#14201A] text-gray-400 group-hover:text-gray-200'
              }`}
            >
              {idx + 1}
            </div>

            {/* Title & Solved Counter */}
            <div className="flex flex-col text-left">
              <span className={`text-sm font-semibold leading-tight ${isActive ? 'text-white' : 'text-gray-300'}`}>
                {track.name}
              </span>
              <span className="text-[11px] font-mono text-gray-500 mt-0.5">
                {solved}/{total} solved
              </span>
            </div>

            {/* Quick Actions (only on custom tracks or when hovered) */}
            {tracks.length > 1 && (
              <div 
                className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 flex items-center space-x-1"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => {
                    if (confirm(`Reset progress for "${track.name}"?`)) resetTrack(track.id);
                  }}
                  title="Reset progress"
                  className="p-1 hover:text-amber-400 text-gray-500 rounded"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete "${track.name}" sheet?`)) deleteTrack(track.id);
                  }}
                  title="Delete sheet"
                  className="p-1 hover:text-rose-400 text-gray-500 rounded"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        );
      })}

      {/* Add Custom Sheet Button */}
      <button
        onClick={onOpenAddTrack}
        className="flex items-center space-x-2 px-3.5 py-2.5 rounded-xl border border-dashed border-[#1E3127] hover:border-emerald-500/60 text-gray-400 hover:text-emerald-400 bg-[#080D0A] hover:bg-[#0E2017]/40 transition-all text-xs font-semibold whitespace-nowrap"
      >
        <Plus className="w-4 h-4" />
        <span>Add Sheet</span>
      </button>
    </div>
  );
}
