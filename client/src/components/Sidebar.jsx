import React from 'react';
import { 
  Brain, 
  Layers, 
  BookMarked, 
  FileCode2, 
  PlusCircle, 
  Upload, 
  Download, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function Sidebar({ onOpenAddTrack, onOpenImport, activeView, setActiveView }) {
  const { exportData, restoreDefaults } = useLearning();

  return (
    <aside className="w-16 min-h-screen bg-[#080D0A] border-r border-[#16241D] flex flex-col items-center py-5 fixed left-0 top-0 bottom-0 z-30 select-none">
      {/* Brand Logo */}
      <div className="mb-8">
        <button 
          onClick={() => setActiveView('all')}
          className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:scale-105 hover:bg-emerald-500/25 transition-all shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]"
          title="LearnTracker"
        >
          <Brain className="w-5 h-5 text-emerald-400" />
        </button>
      </div>

      {/* Navigation Icons */}
      <div className="flex-1 flex flex-col items-center space-y-4 w-full">
        <button
          onClick={() => setActiveView('all')}
          className={`w-full py-2.5 flex items-center justify-center relative transition-colors ${
            activeView === 'all' 
              ? 'text-emerald-400' 
              : 'text-gray-400 hover:text-gray-200'
          }`}
          title="All Sheets & Problems"
        >
          {activeView === 'all' && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-emerald-500 rounded-r-full shadow-[0_0_10px_#10B981]" />
          )}
          <Layers className="w-5 h-5" />
        </button>

        <button
          onClick={() => setActiveView('revision')}
          className={`w-full py-2.5 flex items-center justify-center relative transition-colors ${
            activeView === 'revision' 
              ? 'text-emerald-400' 
              : 'text-gray-400 hover:text-gray-200'
          }`}
          title="Revision Starred (Important for interviews)"
        >
          {activeView === 'revision' && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-emerald-500 rounded-r-full shadow-[0_0_10px_#10B981]" />
          )}
          <BookMarked className="w-5 h-5" />
        </button>

        <button
          onClick={onOpenAddTrack}
          className="w-full py-2.5 flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-colors"
          title="Create Custom Sheet (Universal Roadmap)"
        >
          <PlusCircle className="w-5 h-5" />
        </button>

        <button
          onClick={onOpenImport}
          className="w-full py-2.5 flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-colors"
          title="Import Sheet / Mentor's Sheet"
        >
          <Upload className="w-5 h-5" />
        </button>

        <button
          onClick={exportData}
          className="w-full py-2.5 flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-colors"
          title="Export Backup (JSON)"
        >
          <Download className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col items-center space-y-4 w-full pt-4 border-t border-[#16241D]">
        <button
          onClick={restoreDefaults}
          className="text-gray-500 hover:text-red-400 transition-colors p-2 rounded-lg"
          title="Restore Default Templates"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
