import React, { useState } from 'react';
import { X, Sparkles, BookOpen } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function AddTrackModal({ onClose }) {
  const { createTrack } = useLearning();

  const [name, setName] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Custom');
  const [initialTopics, setInitialTopics] = useState('Foundations, Core Concepts, Advanced Problems');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Parse topics comma-separated
    const topicList = initialTopics
      .split(',')
      .map(t => t.trim())
      .filter(Boolean)
      .map((tName, idx) => ({
        id: `topic-${Date.now()}-${idx}`,
        name: tName,
        description: `Questions and concepts for ${tName}`,
        items: []
      }));

    createTrack({
      name: name.trim(),
      subtitle: subtitle.trim() || 'Custom curated learning roadmap',
      description: description.trim() || `Daily progress tracker for ${name}`,
      category,
      topics: topicList.length > 0 ? topicList : undefined
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0B120E] border border-[#16241D] rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
        <div className="p-5 border-b border-[#16241D] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Create Custom Sheet</h3>
              <p className="text-xs text-gray-400">Track any topic, mentor sheet, or skill</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              Sheet Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. System Design Mastery, Spring Boot 3, NeetCode 150"
              className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl px-3.5 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl px-3.5 py-2.5 text-sm text-gray-200 focus:outline-none"
            >
              <option value="DSA">DSA (Algorithms)</option>
              <option value="Java">Java & Concurrency</option>
              <option value="Backend">Backend & Systems</option>
              <option value="Frontend">Frontend / Fullstack</option>
              <option value="Custom">Custom Learning</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              Subtitle / Goal
            </label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="e.g. Master microservices and concurrency for Senior Eng interviews"
              className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl px-3.5 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              Initial Topics (comma-separated)
            </label>
            <input
              type="text"
              value={initialTopics}
              onChange={(e) => setInitialTopics(e.target.value)}
              placeholder="e.g. Arrays, Trees, Dynamic Programming, Graphs"
              className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl px-3.5 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none"
            />
            <p className="text-[11px] text-gray-500 mt-1">
              You can easily add more topics and questions later.
            </p>
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
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)]"
            >
              Create Sheet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
