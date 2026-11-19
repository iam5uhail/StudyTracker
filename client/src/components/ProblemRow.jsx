import React from 'react';
import { Check, Star, ExternalLink, FileText, Trash2 } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function ProblemRow({ item, trackId, topicId, onOpenNotes }) {
  const { toggleSolved, toggleRevision, deleteItem } = useLearning();

  // Difficulty badge styling
  const diff = (item.difficulty || 'Medium').toLowerCase();
  let diffBadgeClass = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
  if (diff === 'easy') {
    diffBadgeClass = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
  } else if (diff === 'hard') {
    diffBadgeClass = 'text-rose-400 bg-rose-500/10 border-rose-500/20';
  }

  return (
    <div className={`group flex items-center justify-between py-3 px-4 rounded-xl border transition-all ${
      item.isSolved 
        ? 'bg-[#080D0A]/70 border-[#121E18] text-gray-400' 
        : 'bg-[#0A110E] border-[#16241D] hover:border-[#1E3127] text-gray-200'
    }`}>
      {/* Left side: Checkbox + Title + Tags */}
      <div className="flex items-center space-x-3.5 flex-1 min-w-0 mr-4">
        {/* Custom Checkbox */}
        <button
          onClick={() => toggleSolved(trackId, item.id)}
          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all flex-shrink-0 ${
            item.isSolved
              ? 'bg-emerald-500 border-emerald-500 text-black shadow-[0_0_8px_rgba(16,185,129,0.5)]'
              : 'border-[#22352B] bg-[#0C1511] hover:border-emerald-500/60'
          }`}
          title={item.isSolved ? "Mark as unsolved" : "Mark as solved"}
        >
          {item.isSolved && <Check className="w-3.5 h-3.5 stroke-[3]" />}
        </button>

        {/* Title */}
        <div className="flex flex-col min-w-0">
          <div className="flex items-center space-x-2">
            <span className={`text-sm font-medium truncate transition-colors ${
              item.isSolved ? 'line-through text-gray-500' : 'text-gray-100 group-hover:text-emerald-300'
            }`}>
              {item.title}
            </span>

            {/* Revision star */}
            <button
              onClick={() => toggleRevision(trackId, item.id)}
              className={`p-0.5 rounded transition-colors ${
                item.isRevision 
                  ? 'text-yellow-400' 
                  : 'text-gray-600 hover:text-yellow-400 opacity-0 group-hover:opacity-100'
              }`}
              title={item.isRevision ? "Revision starred (Click to unstar)" : "Star for interview revision"}
            >
              <Star className={`w-3.5 h-3.5 ${item.isRevision ? 'fill-yellow-400 text-yellow-400' : ''}`} />
            </button>
          </div>

          {/* Tags / Sub-info */}
          <div className="flex flex-wrap items-center gap-1.5 mt-1">
            {item.platform && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#131F19] text-gray-400 border border-[#1A2A22]">
                {item.platform}
              </span>
            )}
            {(item.tags || []).slice(0, 3).map((tag, i) => (
              <span key={i} className="text-[10px] text-gray-500">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right side: Difficulty Badge + Notes button + Link */}
      <div className="flex items-center space-x-2 flex-shrink-0">
        {/* Difficulty Badge */}
        <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${diffBadgeClass}`}>
          {item.difficulty || 'Medium'}
        </span>

        {/* Notes / Solution modal button */}
        <button
          onClick={() => onOpenNotes(item, trackId)}
          className={`p-1.5 rounded-lg border transition-colors flex items-center space-x-1 ${
            (item.notes || item.codeSnippet)
              ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
              : 'border-[#1B2C23] bg-[#0D1612] text-gray-400 hover:text-gray-200 hover:border-gray-600'
          }`}
          title="Notes & Code Solution"
        >
          <FileText className="w-3.5 h-3.5" />
          {(item.notes || item.codeSnippet) && (
            <span className="text-[10px] font-bold text-emerald-400 hidden sm:inline">Notes</span>
          )}
        </button>

        {/* External Link */}
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg border border-[#1B2C23] bg-[#0D1612] text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            title="Open Problem Link"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : null}

        {/* Delete item button */}
        <button
          onClick={() => {
            if (confirm(`Remove "${item.title}"?`)) deleteItem(trackId, topicId, item.id);
          }}
          className="p-1.5 text-gray-600 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"
          title="Delete problem"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
