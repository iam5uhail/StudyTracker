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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-theme-card border border-theme-border rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-theme-border flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-theme-accentSub border border-theme-accentBorder flex items-center justify-center text-theme-accentText">
              <FileText className="w-4 h-4 text-theme-accent" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-theme-accentText">
                Day {dayNumber} â€¢ {task.type === 'java' ? 'Java Topic' : 'DSA Problem'}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-theme-text truncate max-w-xs sm:max-w-md">
                {task.title}
              </h3>
            </div>
          </div>
          <button onClick={onClose} className="text-theme-muted hover:text-theme-text p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Textarea */}
        <div className="p-4 sm:p-5 space-y-3">
          <label className="block text-xs font-semibold text-theme-secondary">
            Personal Notes & Key Concepts:
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write key syntax, concepts, tricks, or edge cases..."
            rows={8}
            className="w-full bg-theme-cardSub border border-theme-border focus:border-theme-accent rounded-2xl p-3 text-xs sm:text-sm text-theme-text placeholder-theme-muted focus:outline-none resize-none leading-relaxed font-sans shadow-inner"
          />
        </div>

        {/* Footer */}
        <div className="p-4 bg-theme-cardSub border-t border-theme-border flex items-center justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs text-theme-muted hover:text-theme-text"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-theme-accent text-theme-accentBtnText shadow-theme-glow hover:opacity-90"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Notes</span>
          </button>
        </div>
      </div>
    </div>
  );
}
