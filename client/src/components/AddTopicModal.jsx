import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function AddTopicModal({ subjectId, subjectName, onClose }) {
  const { addTopic } = useLearning();

  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [confidence, setConfidence] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTopic(subjectId, {
      title: title.trim(),
      notes: notes.trim(),
      confidence
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1E293B] border border-slate-700 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        <div className="p-5 border-b border-slate-700/80 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Add Topic / Chapter</h3>
            <p className="text-xs text-gray-400">To: <strong className="text-indigo-400">{subjectName}</strong></p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Topic / Chapter Name *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Chapter 2: Inheritance & Abstract Classes"
              className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-gray-200 placeholder-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Initial Notes or Key Formulas (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Key concepts or what to cover..."
              rows={3}
              className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl p-2.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Current Confidence Level
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'low', label: '🌱 Learning' },
                { id: 'medium', label: '💡 Understood' },
                { id: 'high', label: '🏆 Mastered' }
              ].map(c => (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => setConfidence(c.id)}
                  className={`py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    confidence === c.id
                      ? 'bg-indigo-600/30 border-indigo-500 text-indigo-300'
                      : 'bg-slate-900 border-slate-700 text-gray-400 hover:text-white'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-700/80 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs text-gray-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30"
            >
              Add Topic
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
