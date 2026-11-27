import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, 
  Edit3, 
  Copy, 
  Check, 
  RotateCcw, 
  Code2, 
  Sparkles, 
  Save, 
  FileText
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { getLectureNote } from '../data/lectureNotesData';

// Markdown & Study Notes Formatter
function FormattedStudyViewer({ content }) {
  if (!content || !content.trim()) {
    return (
      <div className="py-8 text-center text-theme-muted">
        <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-40 text-theme-muted" />
        <p className="text-xs sm:text-sm">No notes recorded yet for this topic.</p>
        <p className="text-[11px] mt-1 text-theme-muted">Switch to the "Edit Notes" tab above to write your own summary.</p>
      </div>
    );
  }

  // Parse lines into structured blocks
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

  // Format inline bold and code
  const formatInline = (text) => {
    if (!text) return '';
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
          <code key={idx} className="bg-theme-card border border-theme-border text-theme-accent px-1.5 py-0.5 rounded text-[11px] font-mono mx-0.5">
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <div className="space-y-3.5 text-xs sm:text-sm text-theme-secondary leading-relaxed">
      {blocks.map((block, idx) => {
        if (block.type === 'h1') {
          return (
            <div key={idx} className="pt-1 pb-1.5 border-b border-theme-border">
              <h1 className="text-sm sm:text-base font-extrabold text-theme-text tracking-tight flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-theme-accent inline-block"></span>
                <span>{block.text}</span>
              </h1>
            </div>
          );
        }

        if (block.type === 'h2') {
          return (
            <div key={idx} className="pt-2.5 pb-1 border-b border-theme-border/50">
              <h2 className="text-xs sm:text-sm font-bold text-theme-text flex items-center space-x-1.5">
                <span className="text-theme-accent font-mono text-xs">#</span>
                <span>{block.text}</span>
              </h2>
            </div>
          );
        }

        if (block.type === 'h3') {
          return (
            <h3 key={idx} className="text-xs font-bold text-theme-accentText pt-1.5">
              {block.text}
            </h3>
          );
        }

        if (block.type === 'hr') {
          return <hr key={idx} className="border-t border-theme-border my-2.5" />;
        }

        if (block.type === 'bullet') {
          return (
            <div key={idx} className="flex items-start space-x-2 pl-2">
              <span className="w-1.5 h-1.5 rounded-full bg-theme-accent mt-1.5 flex-shrink-0"></span>
              <p className="flex-1 text-theme-secondary">{formatInline(block.text)}</p>
            </div>
          );
        }

        if (block.type === 'code') {
          const isDiagram = block.code.includes('+--') || block.code.includes('┌') || block.code.includes('──') || block.code.includes('│');
          return (
            <div key={idx} className="rounded-xl border border-theme-border overflow-hidden bg-theme-bg shadow-inner my-2">
              <div className="px-3 py-1.5 bg-theme-cardSub border-b border-theme-border flex items-center justify-between text-[11px] font-mono text-theme-muted">
                <div className="flex items-center space-x-1.5">
                  <Code2 className="w-3.5 h-3.5 text-theme-accent" />
                  <span>{isDiagram ? 'Architecture Diagram' : (block.lang || 'code')}</span>
                </div>
                <button
                  type="button"
                  onClick={() => navigator.clipboard.writeText(block.code)}
                  className="hover:text-theme-text flex items-center space-x-1 transition-colors px-1.5 py-0.5 rounded text-[10px]"
                  title="Copy code"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </button>
              </div>
              <pre className={`p-3 overflow-x-auto text-[11px] font-mono leading-relaxed ${isDiagram ? 'text-amber-400 font-semibold' : 'text-theme-text'}`}>
                <code>{block.code}</code>
              </pre>
            </div>
          );
        }

        if (block.type === 'table') {
          return (
            <div key={idx} className="overflow-x-auto rounded-xl border border-theme-border shadow-sm my-2.5">
              <table className="w-full text-left border-collapse text-[11px]">
                <thead>
                  <tr className="bg-theme-cardSub border-b border-theme-border text-theme-text font-bold">
                    {block.headers.map((h, hIdx) => (
                      <th key={hIdx} className="py-2 px-3">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-theme-border">
                  {block.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-theme-cardSub/40 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="py-2 px-3 text-theme-secondary align-top">
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
            <div key={idx} className="p-3 rounded-xl bg-theme-accentSub border border-theme-accentBorder text-theme-accentText my-2.5">
              <div className="flex items-center space-x-2 font-bold text-xs">
                <Sparkles className="w-3.5 h-3.5 text-theme-accent flex-shrink-0" />
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

export default function LectureNotesAccordion({ task, dayNumber, isOpen }) {
  const { updateTaskNotes } = useLearning();

  // Canonical lecture note for this specific topic
  const defaultLectureNotes = task ? getLectureNote(task.num || task.topicNum || task.id, task) : null;

  // Detect if task.notes is corrupted by an old mismatched topic (e.g. Note starts with # 17. but task is Topic 25)
  const isMismatched = useMemo(() => {
    if (!task?.notes) return false;
    const match = task.notes.match(/^#\s*0?(\d+)[\.\s]/);
    const currentNum = task?.num || task?.topicNum;
    if (match && currentNum && parseInt(match[1], 10) !== parseInt(currentNum, 10)) {
      return true;
    }
    return false;
  }, [task?.notes, task?.num, task?.topicNum]);

  // If task.notes is mismatched or empty, ALWAYS use the official defaultLectureNotes!
  const effectiveNotes = (!isMismatched && task?.notes) ? task.notes : (defaultLectureNotes || '');

  const [notes, setNotes] = useState(effectiveNotes);
  const [activeTab, setActiveTab] = useState(effectiveNotes ? 'study' : 'edit');
  const [copied, setCopied] = useState(false);
  const [savedToast, setSavedToast] = useState(false);

  // Sync internal state and self-heal in context if mismatched
  useEffect(() => {
    if (defaultLectureNotes && isMismatched) {
      setNotes(defaultLectureNotes);
      if (dayNumber && task?.id) {
        updateTaskNotes(dayNumber, task.id, defaultLectureNotes);
      }
    } else if (task?.notes && !isMismatched) {
      setNotes(task.notes);
    } else if (defaultLectureNotes) {
      setNotes(defaultLectureNotes);
    }
  }, [task?.notes, defaultLectureNotes, isMismatched, dayNumber, task?.id]);

  const handleCopy = () => {
    if (!notes) return;
    navigator.clipboard.writeText(notes);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveNotes = () => {
    updateTaskNotes(dayNumber, task.id, notes);
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2000);
  };

  const handleRestoreDefault = () => {
    const defaultNote = getLectureNote(task?.num || task?.topicNum || task?.id, task);
    if (!defaultNote) return;
    if (window.confirm("Restore original complete lecture notes for this topic? Any manual edits will be overwritten.")) {
      setNotes(defaultNote);
      updateTaskNotes(dayNumber, task.id, defaultNote);
      setSavedToast(true);
      setTimeout(() => setSavedToast(false), 2000);
    }
  };

  return (
    <div 
      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
      }`}
    >
      <div className="overflow-hidden">
        <div className="pt-4 border-t border-theme-border mt-3.5 space-y-3.5">
          {/* Accordion Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-theme-cardSub p-2 sm:p-2.5 rounded-xl border border-theme-border">
            {/* View Switcher: Study Mode vs Edit Notes */}
            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={() => setActiveTab('study')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  activeTab === 'study'
                    ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow font-bold'
                    : 'text-theme-secondary hover:text-theme-text hover:bg-theme-card'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Study Mode</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('edit')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  activeTab === 'edit'
                    ? 'bg-theme-accent text-theme-accentBtnText shadow-theme-glow font-bold'
                    : 'text-theme-secondary hover:text-theme-text hover:bg-theme-card'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Notes</span>
              </button>
            </div>

            {/* Utility Actions */}
            <div className="flex items-center space-x-2 text-xs">
              {defaultLectureNotes && (
                <button
                  type="button"
                  onClick={handleRestoreDefault}
                  className="px-2.5 py-1 text-theme-muted hover:text-theme-text hover:bg-theme-card rounded-lg transition-colors flex items-center space-x-1 text-[11px]"
                  title="Reset to default lecture notes"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span className="hidden sm:inline">Reset to Default</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleCopy}
                className="px-2.5 py-1 text-theme-muted hover:text-theme-text hover:bg-theme-card rounded-lg transition-colors flex items-center space-x-1 text-[11px]"
                title="Copy notes to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              {activeTab === 'edit' && (
                <button
                  type="button"
                  onClick={handleSaveNotes}
                  className="px-3 py-1 bg-theme-accent text-theme-accentBtnText rounded-lg font-bold flex items-center space-x-1 hover:opacity-90 transition-all text-xs shadow-theme-glow"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save</span>
                </button>
              )}

              {savedToast && (
                <span className="text-[11px] text-emerald-400 font-semibold animate-pulse">
                  Saved ✓
                </span>
              )}
            </div>
          </div>

          {/* Body Content Area */}
          <div className="bg-theme-bg border border-theme-border rounded-2xl p-4 sm:p-5 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-theme-borderSub scrollbar-track-transparent">
            {activeTab === 'study' ? (
              <FormattedStudyViewer content={notes} />
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-theme-muted font-mono">
                  <span>Markdown formatting supported (headings, code blocks, tables)</span>
                  <span>{notes.length} characters</span>
                </div>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add your lecture notes, key takeaways, code snippets or explanations here..."
                  rows={14}
                  className="w-full bg-theme-card border border-theme-border rounded-xl p-3 text-xs sm:text-sm font-mono text-theme-text placeholder:text-theme-muted focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all resize-y"
                />
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleSaveNotes}
                    className="px-4 py-2 bg-theme-accent text-theme-accentBtnText rounded-xl font-bold text-xs flex items-center space-x-1.5 hover:opacity-90 shadow-theme-glow transition-all"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
