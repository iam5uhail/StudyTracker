import React, { useState } from 'react';
import { X, Clock, BookOpen, Sparkles } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function LogSessionModal({ onClose }) {
  const { subjects, addDailyLog } = useLearning();

  const [subjectName, setSubjectName] = useState(subjects[0]?.name || 'Java Programming');
  const [topicTitle, setTopicTitle] = useState('');
  const [durationMinutes, setDurationMinutes] = useState(45);
  const [summary, setSummary] = useState('');
  const [rating, setRating] = useState('Solid Progress');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topicTitle.trim()) return;

    addDailyLog({
      subjectName,
      topicTitle: topicTitle.trim(),
      durationMinutes,
      summary: summary.trim(),
      rating
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1E293B] border border-slate-700 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Log Today's Study Session</h3>
              <p className="text-xs text-gray-400">Record what you learned to build your daily streak</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Subject / Course
            </label>
            <select
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-gray-200 focus:outline-none"
            >
              {subjects.map(s => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
              <option value="General Study">General Study / Self Learning</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Topic or Chapter Studied *
            </label>
            <input
              type="text"
              required
              value={topicTitle}
              onChange={(e) => setTopicTitle(e.target.value)}
              placeholder="e.g. Chapter 3: OOP Polymorphism or SQL Joins"
              className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-gray-200 placeholder-gray-500 focus:outline-none"
            />
          </div>

          {/* Quick Duration Buttons */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Study Time: <strong className="text-amber-400 font-mono">{durationMinutes} mins</strong>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[25, 45, 60, 90].map(mins => (
                <button
                  type="button"
                  key={mins}
                  onClick={() => setDurationMinutes(mins)}
                  className={`py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    durationMinutes === mins
                      ? 'bg-indigo-600 border-indigo-500 text-white'
                      : 'bg-slate-900 border-slate-700 text-gray-400 hover:text-white'
                  }`}
                >
                  {mins} min
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              What did you learn? (Key Takeaway)
            </label>
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="e.g. Understood difference between abstract class and interface, solved 2 practice questions..."
              rows={3}
              className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl p-2.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Session Rating
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Need Review', 'Solid Progress', 'Mastered'].map(r => (
                <button
                  type="button"
                  key={r}
                  onClick={() => setRating(r)}
                  className={`py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    rating === r
                      ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                      : 'bg-slate-900 border-slate-700 text-gray-400 hover:text-white'
                  }`}
                >
                  {r}
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
              Save to Daily Log
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
