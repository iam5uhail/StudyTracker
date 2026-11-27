import React, { useState } from 'react';
import { 
  X, 
  Save, 
  FileText, 
  BookOpen, 
  Edit3, 
  Copy, 
  Check, 
  RotateCcw, 
  Code2, 
  Sparkles
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { getLectureNote } from '../data/lectureNotesData';

// Simple Markdown & Study Notes Viewer Component
function FormattedStudyViewer({ content }) {
  if (!content || !content.trim()) {
    return (
      <div className="py-12 text-center text-theme-muted">
        <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-40 text-theme-muted" />
        <p className="text-sm">No notes recorded yet for this topic.</p>
        <p className="text-xs mt-1">Switch to the "Edit Notes" tab to add your notes or summary.</p>
      </div>
    );
  }

  // Parse lines into structured blocks (Headers, Tables, Code Blocks, Diagrams, Lists, Paragraphs)
  const blocks = [];
  const lines = content.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // 1. Code Block / Diagram
    if (line.trim().startsWith('```')) {
      const lang = line.trim().slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      blocks.push({
        type: 'code',
        lang: lang || 'text',
        code: codeLines.join('\n')
      });
      i++;
      continue;
    }

    // 2. Table Block
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      if (tableLines.length >= 2) {
        const headerRow = tableLines[0].split('|').slice(1, -1).map(c => c.trim());
        const bodyRows = tableLines.slice(2).map(row => row.split('|').slice(1, -1).map(c => c.trim()));
        blocks.push({
          type: 'table',
          headers: headerRow,
          rows: bodyRows
        });
      }
      continue;
    }

    // 3. Headings
    if (line.startsWith('# ')) {
      blocks.push({ type: 'h1', text: line.replace('# ', '').trim() });
      i++;
      continue;
    }
    if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', text: line.replace('## ', '').trim() });
      i++;
      continue;
    }
    if (line.startsWith('### ')) {
      blocks.push({ type: 'h3', text: line.replace('### ', '').trim() });
      i++;
      continue;
    }

    // 4. Horizontal Rule
    if (line.trim() === '---' || line.trim() === '***') {
      blocks.push({ type: 'hr' });
      i++;
      continue;
    }

    // 5. Callouts / Takeaways
    if (line.trim().startsWith('## 💡 Key Takeaway') || line.trim().startsWith('💡')) {
      blocks.push({ type: 'takeaway', text: line.trim() });
      i++;
      continue;
    }

    // 6. Bullet lists
    if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
      blocks.push({ type: 'bullet', text: line.trim().replace(/^[\*\-]\s+/, '') });
      i++;
      continue;
    }

    // 7. Empty line
    if (!line.trim()) {
      i++;
      continue;
    }

    // 8. Normal paragraph
    blocks.push({ type: 'p', text: line.trim() });
    i++;
  }

  // Helper to format inline bold, inline code, and colors
  const formatInline = (text) => {
    if (!text) return '';
    // Format bold `**text**` and code `` `code` ``
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="font-bold text-theme-text">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={idx} className="bg-theme-cardSub border border-theme-border text-theme-accent px-1.5 py-0.5 rounded text-[11px] font-mono mx-0.5">
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <div className="space-y-4 text-xs sm:text-sm text-theme-secondary leading-relaxed">
      {blocks.map((block, idx) => {
        if (block.type === 'h1') {
          return (
            <div key={idx} className="pt-1 pb-2 border-b border-theme-border">
              <h1 className="text-base sm:text-lg font-extrabold text-theme-text tracking-tight flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-theme-accent inline-block"></span>
                <span>{block.text}</span>
              </h1>
            </div>
          );
        }

        if (block.type === 'h2') {
          return (
            <div key={idx} className="pt-3 pb-1 border-b border-theme-border/50">
              <h2 className="text-sm sm:text-base font-bold text-theme-text flex items-center space-x-2">
                <span className="text-theme-accent font-mono text-xs">#</span>
                <span>{block.text}</span>
              </h2>
            </div>
          );
        }

        if (block.type === 'h3') {
          return (
            <h3 key={idx} className="text-xs sm:text-sm font-bold text-theme-accentText pt-2">
              {block.text}
            </h3>
          );
        }

        if (block.type === 'hr') {
          return <hr key={idx} className="border-t border-theme-border my-3" />;
        }

        if (block.type === 'bullet') {
          return (
            <div key={idx} className="flex items-start space-x-2 pl-2 sm:pl-3">
              <span className="w-1.5 h-1.5 rounded-full bg-theme-accent mt-2 flex-shrink-0"></span>
              <p className="flex-1 text-theme-secondary">{formatInline(block.text)}</p>
            </div>
          );
        }

        if (block.type === 'code') {
          const isDiagram = block.code.includes('+--') || block.code.includes('┌') || block.code.includes('──') || block.code.includes('│');
          return (
            <div key={idx} className="rounded-2xl border border-theme-border overflow-hidden bg-theme-cardSub shadow-sm my-2">
              <div className="px-3 py-1.5 bg-theme-header border-b border-theme-border flex items-center justify-between text-[11px] font-mono text-theme-muted">
                <div className="flex items-center space-x-1.5">
                  <Code2 className="w-3.5 h-3.5 text-theme-accent" />
                  <span>{isDiagram ? 'Architecture Diagram' : (block.lang || 'code')}</span>
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(block.code)}
                  className="hover:text-theme-text flex items-center space-x-1 transition-colors px-1.5 py-0.5 rounded"
                  title="Copy code"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </button>
              </div>
              <pre className={`p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-xs font-mono leading-relaxed ${isDiagram ? 'text-theme-accentText font-semibold' : 'text-theme-text'}`}>
                <code>{block.code}</code>
              </pre>
            </div>
          );
        }

        if (block.type === 'table') {
          return (
            <div key={idx} className="overflow-x-auto rounded-2xl border border-theme-border shadow-sm my-3">
              <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
                <thead>
                  <tr className="bg-theme-cardSub border-b border-theme-border text-theme-text font-bold">
                    {block.headers.map((h, hIdx) => (
                      <th key={hIdx} className="py-2.5 px-3">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-theme-border">
                  {block.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-theme-cardSub/40 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="py-2.5 px-3 text-theme-secondary align-top">
                          {formatInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (block.type === 'takeaway') {
          return (
            <div key={idx} className="p-3 sm:p-4 rounded-2xl bg-theme-accentSub border border-theme-accentBorder text-theme-accentText my-3">
              <div className="flex items-center space-x-2 font-bold text-xs sm:text-sm">
                <Sparkles className="w-4 h-4 text-theme-accent flex-shrink-0" />
                <span>{block.text}</span>
              </div>
            </div>
          );
        }

        return (
          <p key={idx} className="text-theme-secondary">
            {formatInline(block.text)}
          </p>
        );
      })}
    </div>
  );
}

export default function SimpleNotesModal({ taskData, onClose }) {
  const { updateTaskNotes } = useLearning();

  if (!taskData || !taskData.task) return null;
  const { dayNumber, task } = taskData;

  // Resolve default lecture note by topic number first, then task object
  const defaultLectureNotes = task ? getLectureNote(task.num || task.topicNum || task.id, task) : null;
  const initialNotes = task?.notes || defaultLectureNotes || '';

  const [notes, setNotes] = useState(initialNotes);
  const [activeTab, setActiveTab] = useState(initialNotes ? 'study' : 'edit'); // 'study' or 'edit'
  const [copied, setCopied] = useState(false);
  const [restoredToast, setRestoredToast] = useState(false);

  const handleSave = () => {
    updateTaskNotes(dayNumber, task.id, notes);
    onClose();
  };

  const handleCopyNotes = () => {
    if (!notes) return;
    navigator.clipboard.writeText(notes);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRestoreDefault = () => {
    const defaultNote = getLectureNote(task?.num || task?.topicNum || task?.id, task);
    if (!defaultNote) return;
    if (window.confirm("Restore the complete original lecture notes for this topic? Any custom changes you typed will be replaced.")) {
      setNotes(defaultNote);
      updateTaskNotes(dayNumber, task.id, defaultNote);
      setRestoredToast(true);
      setTimeout(() => setRestoredToast(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fade-in">
      <div 
        className="bg-theme-card border border-theme-border rounded-3xl w-full max-w-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden transition-all duration-200"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
        }}
      >
        {/* Top Header */}
        <div className="p-3.5 sm:p-5 border-b border-theme-border flex items-center justify-between gap-3 bg-theme-header flex-shrink-0">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-9 h-9 rounded-2xl bg-theme-accentSub border border-theme-accentBorder flex items-center justify-center text-theme-accentText flex-shrink-0 shadow-theme-glow">
              <FileText className="w-4 h-4 text-theme-accent" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-theme-accentSub text-theme-accentText border border-theme-accentBorder">
                  Day {dayNumber} • {task.type === 'java' ? `Core Java #${task.num || 1}` : 'DSA Target'}
                </span>
                {defaultLectureNotes && (
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 hidden xs:inline-block">
                    Lecture Notes Available
                  </span>
                )}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-theme-text truncate max-w-sm sm:max-w-lg mt-0.5">
                {task.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-1.5 flex-shrink-0">
            {/* Copy button */}
            <button
              onClick={handleCopyNotes}
              className="p-2 text-theme-muted hover:text-theme-text hover:bg-theme-cardSub rounded-xl transition-colors border border-transparent hover:border-theme-border"
              title="Copy all notes to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>

            {/* Close button */}
            <button 
              onClick={onClose} 
              className="p-2 text-theme-muted hover:text-theme-text hover:bg-theme-cardSub rounded-xl transition-colors border border-transparent hover:border-theme-border"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Mode Bar (Study vs Edit) */}
        <div className="px-4 sm:px-5 py-2.5 bg-theme-cardSub border-b border-theme-border flex items-center justify-between flex-shrink-0 gap-2">
          {/* Tabs */}
          <div className="flex items-center space-x-1 bg-theme-card border border-theme-border p-1 rounded-2xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab('study')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'study'
                  ? 'bg-theme-accent text-theme-accentBtnText font-bold shadow-theme-glow'
                  : 'text-theme-muted hover:text-theme-text'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Study Mode</span>
            </button>

            <button
              onClick={() => setActiveTab('edit')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'edit'
                  ? 'bg-theme-accent text-theme-accentBtnText font-bold shadow-theme-glow'
                  : 'text-theme-muted hover:text-theme-text'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Notes</span>
            </button>
          </div>

          {/* Restore / Helper button */}
          <div className="flex items-center space-x-2">
            {restoredToast && (
              <span className="text-[11px] text-emerald-400 font-semibold animate-fade-in">
                Restored!
              </span>
            )}
            {defaultLectureNotes && (
              <button
                onClick={handleRestoreDefault}
                className="text-[11px] font-semibold text-theme-muted hover:text-theme-accent flex items-center space-x-1 px-2.5 py-1.5 rounded-xl border border-theme-border hover:border-theme-accentBorder bg-theme-card transition-all"
                title="Restore default lecture notes from class"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Reset to Lecture Notes</span>
              </button>
            )}
          </div>
        </div>

        {/* Content Body Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {activeTab === 'study' ? (
            <FormattedStudyViewer content={notes} />
          ) : (
            <div className="space-y-3 h-full flex flex-col">
              <div className="flex items-center justify-between text-xs text-theme-muted">
                <span>Personal study notes, Markdown, syntax & edge cases:</span>
                <span>{notes.length} characters</span>
              </div>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Write your study notes, key takeaways, code examples, or exam tips here..."
                className="w-full flex-1 min-h-[300px] sm:min-h-[400px] bg-theme-cardSub border border-theme-border focus:border-theme-accent rounded-2xl p-3.5 text-xs sm:text-sm text-theme-text placeholder-theme-muted focus:outline-none resize-none leading-relaxed font-mono shadow-inner"
              />
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 bg-theme-header border-t border-theme-border flex items-center justify-between flex-shrink-0">
          <div className="text-[11px] text-theme-muted hidden sm:flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-theme-accent"></span>
            <span>All notes save locally in your browser storage</span>
          </div>

          <div className="flex items-center space-x-2 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-theme-muted hover:text-theme-text border border-transparent hover:border-theme-border transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleSave}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-theme-accent text-theme-accentBtnText shadow-theme-glow hover:opacity-90 transition-all"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Notes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
