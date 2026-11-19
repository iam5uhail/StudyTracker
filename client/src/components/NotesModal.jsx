import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Code, FileText, ExternalLink } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function NotesModal({ item, trackId, onClose }) {
  const { updateItemNotes } = useLearning();

  const [activeTab, setActiveTab] = useState('notes'); // 'notes' or 'code'
  const [notes, setNotes] = useState(item?.notes || '');
  const [codeSnippet, setCodeSnippet] = useState(item?.codeSnippet || '');
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setNotes(item?.notes || '');
    setCodeSnippet(item?.codeSnippet || '');
  }, [item]);

  if (!item) return null;

  const handleSave = () => {
    updateItemNotes(trackId, item.id, { notes, codeSnippet });
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 600);
  };

  const handleCopyCode = () => {
    if (!codeSnippet) return;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0B120E] border border-[#16241D] rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-[#16241D] flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {item.difficulty || 'Medium'}
              </span>
              <span className="text-xs text-gray-500 font-mono">{item.platform}</span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1.5 flex items-center space-x-2">
              <span>{item.title}</span>
              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-500 hover:text-emerald-400"
                  title="Open Problem"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-300 p-1.5 rounded-lg hover:bg-[#131F19] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-5 pt-3 pb-0 flex items-center space-x-2 border-b border-[#16241D] bg-[#070D0A]">
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex items-center space-x-2 px-3 py-2 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'notes'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>My Notes & Strategy</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center space-x-2 px-3 py-2 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'code'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>Solution Code (Java / C++)</span>
          </button>
        </div>

        {/* Body content */}
        <div className="flex-1 p-5 overflow-y-auto">
          {activeTab === 'notes' ? (
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">
                Personal Notes, Intuition, and Edge Cases:
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Write your intuition, time/space complexity, common pitfalls, or interview talking points..."
                rows={12}
                className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl p-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none resize-none font-sans"
              />
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-medium text-gray-400">
                  Clean Solution Code:
                </label>
                {codeSnippet && (
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center space-x-1 text-xs text-gray-400 hover:text-emerald-400"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                )}
              </div>
              <textarea
                value={codeSnippet}
                onChange={(e) => setCodeSnippet(e.target.value)}
                placeholder="// Paste your clean Java / Python / C++ solution here..."
                rows={12}
                className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl p-3 text-xs text-emerald-300 font-mono placeholder-gray-600 focus:outline-none resize-none leading-relaxed"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#080D0A] border-t border-[#16241D] flex items-center justify-between">
          <span className="text-xs text-gray-500">Auto-saved to your local browser storage</span>
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-[#131F19] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-black transition-all shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)]"
            >
              {saved ? 'Saved!' : 'Save Notes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
