import React, { useState } from 'react';
import { X, Save, FileText } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function SimpleNotesModal({ taskData, onClose }) {
  const { updateTaskNotes } = useLearning();
  const [notes, setNotes] = useState(taskData?.task?.notes || '');

  if (!taskData || !taskData.task) return null;
  const { dayNumber, task } = taskData;

  const handleSave = () => {
    updateTaskNotes(dayNumber, task.id, notes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1E293B] border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">
                Day {dayNumber} • {task.type === 'java' ? 'Java Topic' : 'DSA Problem'}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-xs sm:max-w-md">
                {task.title}
              </h3>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Textarea */}
        <div className="p-4 sm:p-5 space-y-3">
          <label className="block text-xs font-semibold text-gray-300">
            Personal Notes & Key Concepts:
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write key syntax, concepts, tricks, or edge cases..."
            rows={8}
            className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl p-3 text-xs sm:text-sm text-gray-200 placeholder-gray-500 focus:outline-none resize-none leading-relaxed font-sans"
          />
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs text-gray-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Notes</span>
          </button>
        </div>
      </div>
    </div>
  );
}
