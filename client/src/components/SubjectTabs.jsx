import React from 'react';
import { Plus, BookOpen, Trash2 } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function SubjectTabs({ onOpenAddSubject }) {
  const { subjects, selectedSubjectId, setSelectedSubjectId, deleteSubject } = useLearning();

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-6">
      {subjects.map((sub) => {
        const isSelected = sub.id === selectedSubjectId;
        const total = (sub.topics || []).length;
        const completed = (sub.topics || []).filter(t => t.status === 'completed').length;
        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

        return (
          <div
            key={sub.id}
            onClick={() => setSelectedSubjectId(sub.id)}
            className={`group relative flex items-center space-x-3 px-4 py-2.5 rounded-xl cursor-pointer border transition-all duration-200 select-none whitespace-nowrap ${
              isSelected
                ? 'bg-indigo-600/15 border-indigo-500/60 shadow-sm text-white'
                : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-600 text-gray-300 hover:text-white'
            }`}
          >
            {/* Color Indicator */}
            <div className={`w-2.5 h-2.5 rounded-full ${
              sub.color === 'emerald' ? 'bg-emerald-400' :
              sub.color === 'violet' ? 'bg-violet-400' :
              sub.color === 'amber' ? 'bg-amber-400' :
              sub.color === 'rose' ? 'bg-rose-400' :
              'bg-blue-400'
            }`} />

            {/* Subject Title & Progress */}
            <div className="flex flex-col text-left">
              <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-gray-200'}`}>
                {sub.name}
              </span>
              <span className="text-[10px] text-gray-400 font-medium">
                {completed}/{total} topics ({percent}%)
              </span>
            </div>

            {/* Delete button (if more than 1 subject) */}
            {subjects.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (confirm(`Delete subject "${sub.name}"?`)) deleteSubject(sub.id);
                }}
                className="opacity-0 group-hover:opacity-100 p-1 text-gray-500 hover:text-rose-400 rounded transition-opacity"
                title="Delete subject"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            )}
          </div>
        );
      })}

      {/* Add New Subject Button */}
      <button
        onClick={onOpenAddSubject}
        className="flex items-center space-x-1.5 px-3 py-2.5 rounded-xl border border-dashed border-slate-700 hover:border-indigo-400 text-gray-400 hover:text-indigo-400 bg-slate-900/40 hover:bg-indigo-500/5 text-xs font-semibold whitespace-nowrap transition-colors"
      >
        <Plus className="w-3.5 h-3.5" />
        <span>Add Subject</span>
      </button>
    </div>
  );
}
