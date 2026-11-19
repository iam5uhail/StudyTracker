import React, { useState } from 'react';
import { X, Upload, FileText, CheckCircle2 } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function ImportModal({ onClose }) {
  const { importTrack } = useLearning();

  const [inputMode, setInputMode] = useState('text'); // 'text' or 'json'
  const [sheetName, setSheetName] = useState('');
  const [rawText, setRawText] = useState('');
  const [jsonText, setJsonText] = useState('');
  const [error, setError] = useState('');

  // Example text format helper
  const exampleFormat = `Arrays & Hashing:
Two Sum (Easy) - https://leetcode.com/problems/two-sum/
Group Anagrams (Medium) - https://leetcode.com/problems/group-anagrams/
Top K Frequent Elements (Medium)

Two Pointers:
Valid Palindrome (Easy)
3Sum (Medium)
Trapping Rain Water (Hard)`;

  const handleImportText = () => {
    if (!sheetName.trim()) {
      setError('Please provide a sheet name.');
      return;
    }
    if (!rawText.trim()) {
      setError('Please enter problem text.');
      return;
    }

    try {
      // Parse topic: items format
      const lines = rawText.split('\n');
      const topics = [];
      let currentTopic = null;

      lines.forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed) return;

        // If line ends with ':' or has no hyphens/links, treat as topic
        if (trimmed.endsWith(':') || (!trimmed.includes('-') && !trimmed.toLowerCase().includes('easy') && !trimmed.toLowerCase().includes('medium') && !trimmed.toLowerCase().includes('hard') && topics.length === 0)) {
          const tName = trimmed.replace(/:$/, '').trim();
          currentTopic = {
            name: tName,
            description: `Curated problems for ${tName}`,
            items: []
          };
          topics.push(currentTopic);
        } else {
          // If no topic yet, create a default one
          if (!currentTopic) {
            currentTopic = {
              name: 'General Problems',
              description: 'Imported questions',
              items: []
            };
            topics.push(currentTopic);
          }

          // Parse line for title, difficulty, link
          let difficulty = 'Medium';
          if (/easy/i.test(trimmed)) difficulty = 'Easy';
          if (/hard/i.test(trimmed)) difficulty = 'Hard';

          let link = '';
          const urlMatch = trimmed.match(/https?:\/\/[^\s)]+/);
          if (urlMatch) link = urlMatch[0];

          // Extract title
          let cleanTitle = trimmed
            .replace(/https?:\/\/[^\s)]+/, '')
            .replace(/\((easy|medium|hard)\)/i, '')
            .replace(/-(easy|medium|hard)/i, '')
            .replace(/^[-*•\d.]+\s*/, '')
            .replace(/[-–]+$/, '')
            .trim();

          if (cleanTitle) {
            currentTopic.items.push({
              title: cleanTitle,
              difficulty,
              platform: link.includes('leetcode') ? 'LeetCode' : (link ? 'External' : 'Custom'),
              link,
              tags: [currentTopic.name],
              isSolved: false,
              isRevision: false
            });
          }
        }
      });

      if (topics.length === 0 || topics.every(t => t.items.length === 0)) {
        setError('Could not parse any problems. Please check the format.');
        return;
      }

      importTrack({
        name: sheetName.trim(),
        subtitle: `Imported roadmap with ${topics.length} topics`,
        description: `Imported from mentor sheet on ${new Date().toLocaleDateString()}`,
        category: 'Imported',
        topics
      });

      onClose();
    } catch (e) {
      setError(e.message || 'Failed to parse text.');
    }
  };

  const handleImportJSON = () => {
    try {
      const parsed = JSON.parse(jsonText);
      if (Array.isArray(parsed)) {
        parsed.forEach(track => importTrack(track));
      } else {
        importTrack(parsed);
      }
      onClose();
    } catch (e) {
      setError('Invalid JSON syntax. Please check the JSON format.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0B120E] border border-[#16241D] rounded-2xl w-full max-w-xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-[#16241D] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Upload className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Import Mentor's Sheet / Roadmap</h3>
              <p className="text-xs text-gray-400">Import from simple text list or JSON backup</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="px-5 pt-3 pb-0 flex items-center space-x-2 border-b border-[#16241D] bg-[#070D0A]">
          <button
            onClick={() => { setInputMode('text'); setError(''); }}
            className={`flex items-center space-x-2 px-3 py-2 text-xs font-semibold border-b-2 transition-colors ${
              inputMode === 'text'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Paste Text List (Easy)</span>
          </button>

          <button
            onClick={() => { setInputMode('json'); setError(''); }}
            className={`flex items-center space-x-2 px-3 py-2 text-xs font-semibold border-b-2 transition-colors ${
              inputMode === 'json'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>JSON Backup</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400">
              {error}
            </div>
          )}

          {inputMode === 'text' ? (
            <>
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Sheet / Roadmap Name *
                </label>
                <input
                  type="text"
                  value={sheetName}
                  onChange={(e) => setSheetName(e.target.value)}
                  placeholder="e.g. Striver SDE Sheet, Love Babbar 450, My Mentor's List"
                  className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl px-3.5 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-medium text-gray-300">
                    Paste Topics and Questions:
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setRawText(exampleFormat);
                      if (!sheetName) setSheetName("Mentor's Curated DSA");
                    }}
                    className="text-[11px] text-emerald-400 hover:underline"
                  >
                    Load Example Format
                  </button>
                </div>
                <textarea
                  value={rawText}
                  onChange={(e) => setRawText(e.target.value)}
                  placeholder={exampleFormat}
                  rows={9}
                  className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl p-3 text-xs text-gray-200 font-mono placeholder-gray-600 focus:outline-none resize-none leading-relaxed"
                />
                <p className="text-[11px] text-gray-500 mt-1">
                  Format: <code className="text-gray-400">Topic: Problem Name (Easy/Medium/Hard) - Link</code>
                </p>
              </div>
            </>
          ) : (
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Paste JSON Array or Object:
              </label>
              <textarea
                value={jsonText}
                onChange={(e) => setJsonText(e.target.value)}
                placeholder='[ { "name": "Sheet", "topics": [...] } ]'
                rows={12}
                className="w-full bg-[#070D0A] border border-[#16241D] focus:border-emerald-500/60 rounded-xl p-3 text-xs text-emerald-300 font-mono placeholder-gray-600 focus:outline-none resize-none leading-relaxed"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#080D0A] border-t border-[#16241D] flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={inputMode === 'text' ? handleImportText : handleImportJSON}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)]"
          >
            Import Now
          </button>
        </div>
      </div>
    </div>
  );
}
