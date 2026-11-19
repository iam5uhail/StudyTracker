import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function AddProblemModal({ trackId, topicId, topicName, onClose }) {
  const { addItem } = useLearning();

  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('Medium');
  const [platform, setPlatform] = useState('LeetCode');
  const [link, setLink] = useState('');
  const [tags, setTags] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addItem(trackId, topicId, {
      title: title.trim(),
      difficulty,
      platform,
      link: link.trim(),
      tags: tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : [],
      notes: notes.trim()
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0B120E] border border-[#16241D] rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        <div className="p-5 border-b border-[#16241D] flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Add Problem</h3>
            <p className="text-xs text-gray-400 mt-0.5">Topic: <strong className="text-emerald-400">{topicName}</strong></p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-3.5">
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              Problem / Question Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Trapping Rain Water"
              className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl px-3.5 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Difficulty
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl px-3 py-2 text-xs text-gray-200 focus:outline-none"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Platform / Type
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl px-3 py-2 text-xs text-gray-200 focus:outline-none"
              >
                <option value="LeetCode">LeetCode</option>
                <option value="GeeksforGeeks">GeeksforGeeks</option>
                <option value="CodeStudio">CodeStudio</option>
                <option value="Java Concept">Java Concept</option>
                <option value="Interview">Interview Question</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              Link URL (Optional)
            </label>
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://leetcode.com/problems/..."
              className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl px-3.5 py-2 text-xs text-gray-200 placeholder-gray-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              Tags (comma separated)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Two Pointers, Array, Stack"
              className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl px-3.5 py-2 text-xs text-gray-200 placeholder-gray-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              Initial Note / Approach
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Key pattern or trick..."
              rows={3}
              className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl p-2.5 text-xs text-gray-200 placeholder-gray-600 focus:outline-none resize-none"
            />
          </div>

          <div className="pt-3 border-t border-[#16241D] flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)]"
            >
              Add Problem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
