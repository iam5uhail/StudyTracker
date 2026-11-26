import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Plus, FolderCheck } from 'lucide-react';
import ProblemRow from './ProblemRow';
import { useLearning } from '../context/LearningContext';

export default function TopicAccordion({ topic, trackId, onOpenNotes, onOpenAddProblem }) {
  const [isOpen, setIsOpen] = useState(true);
  const { searchQuery, selectedDifficulty, selectedStatus } = useLearning();

  const allItems = topic.items || [];

  // Filter items based on search, difficulty and status
  const filteredItems = allItems.filter(item => {
    // Search query filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = (item.title || '').toLowerCase().includes(q);
      const matchTags = (item.tags || []).some(t => t.toLowerCase().includes(q));
      const matchPlatform = (item.platform || '').toLowerCase().includes(q);
      if (!matchTitle && !matchTags && !matchPlatform) return false;
    }

    // Difficulty filter
    if (selectedDifficulty !== 'All') {
      if ((item.difficulty || 'Medium').toLowerCase() !== selectedDifficulty.toLowerCase()) {
        return false;
      }
    }

    // Status filter
    if (selectedStatus === 'Solved' && !item.isSolved) return false;
    if (selectedStatus === 'Unsolved' && item.isSolved) return false;
    if (selectedStatus === 'Revision' && !item.isRevision) return false;

    return true;
  });

  const total = allItems.length;
  const solved = allItems.filter(i => i.isSolved).length;
  const percent = total === 0 ? 0 : Math.round((solved / total) * 100);

  // If search/filter active and no items match in this topic, hide topic
  if (filteredItems.length === 0 && (searchQuery || selectedDifficulty !== 'All' || selectedStatus !== 'All')) {
    return null;
  }

  return (
    <div className="glow-card rounded-2xl border border-[#16241D] bg-[#0A100D] overflow-hidden mb-4 transition-all">
      {/* Header bar */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-[#0E1712]/80 transition-colors select-none"
      >
        <div className="flex items-center space-x-3">
          <button className="text-gray-400 hover:text-emerald-400 transition-colors">
            {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
          <div>
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <span>{topic.name}</span>
              {percent === 100 && total > 0 && (
                <span className="text-emerald-400 text-xs font-normal flex items-center space-x-1">
                  <FolderCheck className="w-3.5 h-3.5" />
                  <span>Done</span>
                </span>
              )}
            </h3>
            {topic.description && (
              <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{topic.description}</p>
            )}
          </div>
        </div>

        {/* Progress Metric & Add button */}
        <div className="flex items-center space-x-4">
          <div className="text-right hidden sm:block">
            <span className="text-xs font-mono text-gray-400">
              <strong className="text-white">{solved}</strong>/{total} solved
            </span>
            <div className="w-24 h-1.5 bg-[#14201A] rounded-full overflow-hidden mt-1">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenAddProblem(topic.id, topic.name);
            }}
            className="p-1.5 rounded-lg bg-[#0E1B15] border border-[#1A2E24] hover:border-emerald-500/50 text-gray-400 hover:text-emerald-400 text-xs flex items-center space-x-1 transition-colors"
            title="Add problem to this topic"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="text-[11px] font-medium hidden md:inline">Add</span>
          </button>
        </div>
      </div>

      {/* Accordion Content with smooth animation */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 pt-0 border-t border-[#131F19] bg-[#070C09]/60">
            {filteredItems.length === 0 ? (
              <div className="py-6 text-center text-xs text-gray-500">
                No problems match current filters.
              </div>
            ) : (
              <div className="space-y-2.5 mt-3">
                {filteredItems.map(item => (
                  <ProblemRow
                    key={item.id}
                    item={item}
                    trackId={trackId}
                    topicId={topic.id}
                    onOpenNotes={onOpenNotes}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
