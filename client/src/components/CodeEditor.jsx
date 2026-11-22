import React, { useRef, useMemo, useEffect } from 'react';

// Tokenizer regex for JavaScript and Java syntax coloring
const TOKEN_REGEX = new RegExp(
  [
    '(?<comment>//.*$|/\\*[\\s\\S]*?\\*/)',
    '(?<string>"(\\\\.|[^"\\\\])*"|\'(\\\\.|[^\'\\\\])*\'|`(\\\\.|[^`\\\\])*`)',
    '(?<keyword>\\b(?:function|return|if|else|while|for|let|const|var|class|new|this|typeof|instanceof|import|export|from|public|private|static|void|int|boolean|String|char|double|float|long|true|false|null|undefined|try|catch|finally|throw|break|continue|switch|case|default)\\b)',
    '(?<number>\\b\\d+(?:\\.\\d+)?\\b)',
    '(?<fn>\\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\\s*\\())',
    '(?<bracket>[{}()\\[\\]])',
    '(?<op>===|!==|==|!=|<=|>=|=>|&&|\\|\\||\\+\\+|--|<<|>>|[=+\\-*/%&|!<>?:;^~])',
    '(?<other>[^\\s\\w])'
  ].join('|'),
  'gm'
);

function highlightSyntax(code) {
  if (!code) return '';
  return code.replace(TOKEN_REGEX, (match, ...args) => {
    const groups = args[args.length - 1] || {};
    // Escape HTML entities for the matched token
    const safe = match
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    if (groups.comment) return `<span class="text-zinc-500 italic font-normal">${safe}</span>`;
    if (groups.string) return `<span class="text-emerald-400 font-medium">${safe}</span>`;
    if (groups.keyword) return `<span class="text-purple-400 font-semibold">${safe}</span>`;
    if (groups.number) return `<span class="text-amber-400 font-medium">${safe}</span>`;
    if (groups.fn) return `<span class="text-sky-400 font-semibold">${safe}</span>`;
    if (groups.bracket) return `<span class="text-yellow-300 font-bold">${safe}</span>`;
    if (groups.op) return `<span class="text-pink-400">${safe}</span>`;
    return safe;
  });
}

export default function CodeEditor({
  value = '',
  onChange,
  placeholder = '// Write your code here...',
  minRows = 14,
  className = ''
}) {
  const textareaRef = useRef(null);
  const preRef = useRef(null);
  const gutterRef = useRef(null);

  // Compute total lines for line numbers gutter
  const lineCount = useMemo(() => {
    const lines = value.split('\n').length;
    return Math.max(lines, minRows);
  }, [value, minRows]);

  // Synchronize scrolling between textarea, pre syntax layer, and line number gutter
  const handleScroll = (e) => {
    const { scrollTop, scrollLeft } = e.currentTarget;
    if (preRef.current) {
      preRef.current.scrollTop = scrollTop;
      preRef.current.scrollLeft = scrollLeft;
    }
    if (gutterRef.current) {
      gutterRef.current.scrollTop = scrollTop;
    }
  };

  // Keyboard enhancements: Auto-indent, Tab insertion, Auto-bracket closing & pair deletion
  const handleKeyDown = (e) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    // 1. Tab key -> Insert 2 spaces (Shift+Tab -> unindent)
    if (e.key === 'Tab') {
      e.preventDefault();
      if (e.shiftKey) {
        const lineStart = value.lastIndexOf('\n', start - 1) + 1;
        if (value.slice(lineStart, lineStart + 2) === '  ') {
          const newVal = value.slice(0, lineStart) + value.slice(lineStart + 2);
          onChange(newVal);
          requestAnimationFrame(() => {
            textarea.selectionStart = textarea.selectionEnd = Math.max(lineStart, start - 2);
          });
        }
      } else {
        const newVal = value.substring(0, start) + '  ' + value.substring(end);
        onChange(newVal);
        requestAnimationFrame(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 2;
        });
      }
      return;
    }

    // 2. Auto-closing pairs: { }, ( ), [ ], " ", ' ', ` `
    const pairs = {
      '{': '}',
      '(': ')',
      '[': ']',
      '"': '"',
      "'": "'",
      '`': '`'
    };

    // If user types closing bracket when next char is that closing bracket -> skip over it
    const closingBrackets = ['}', ')', ']', '"', "'", '`'];
    if (closingBrackets.includes(e.key) && start === end && value[start] === e.key) {
      e.preventDefault();
      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1;
      });
      return;
    }

    // Auto-insert pair
    if (pairs[e.key]) {
      e.preventDefault();
      const openChar = e.key;
      const closeChar = pairs[openChar];
      const selected = value.substring(start, end);
      const newVal = value.substring(0, start) + openChar + selected + closeChar + value.substring(end);
      onChange(newVal);
      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1 + selected.length;
      });
      return;
    }

    // 3. Backspace pair deletion: {|} -> backspace -> removes both
    if (e.key === 'Backspace' && start === end && start > 0) {
      const prevChar = value[start - 1];
      const nextChar = value[start];
      if (pairs[prevChar] && pairs[prevChar] === nextChar) {
        e.preventDefault();
        const newVal = value.substring(0, start - 1) + value.substring(start + 1);
        onChange(newVal);
        requestAnimationFrame(() => {
          textarea.selectionStart = textarea.selectionEnd = start - 1;
        });
        return;
      }
    }

    // 4. Enter key -> Smart Auto-Indentation & Bracket Splitting
    if (e.key === 'Enter') {
      e.preventDefault();
      const lineStart = value.lastIndexOf('\n', start - 1) + 1;
      const currentLine = value.slice(lineStart, start);
      const indentMatch = currentLine.match(/^\s*/);
      const currentIndent = indentMatch ? indentMatch[0] : '';

      const isAfterOpenBrace = /[{([][\s]*$/.test(currentLine);
      const isBeforeCloseBrace = /^[\s]*[})\]]/.test(value.slice(start));

      if (isAfterOpenBrace && isBeforeCloseBrace) {
        // Split:
        // {\n  |\n}
        const extraIndent = '  ';
        const insert = '\n' + currentIndent + extraIndent + '\n' + currentIndent;
        const newVal = value.substring(0, start) + insert + value.substring(end);
        onChange(newVal);
        requestAnimationFrame(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 1 + currentIndent.length + extraIndent.length;
        });
      } else if (isAfterOpenBrace) {
        const extraIndent = '  ';
        const insert = '\n' + currentIndent + extraIndent;
        const newVal = value.substring(0, start) + insert + value.substring(end);
        onChange(newVal);
        requestAnimationFrame(() => {
          textarea.selectionStart = textarea.selectionEnd = start + insert.length;
        });
      } else {
        const insert = '\n' + currentIndent;
        const newVal = value.substring(0, start) + insert + value.substring(end);
        onChange(newVal);
        requestAnimationFrame(() => {
          textarea.selectionStart = textarea.selectionEnd = start + insert.length;
        });
      }
    }
  };

  const highlightedHtml = useMemo(() => highlightSyntax(value), [value]);

  return (
    <div className={`relative flex rounded-b-2xl overflow-hidden font-mono text-xs sm:text-sm bg-[#0d1117] ${className}`}>
      {/* 1. Line Numbers Gutter */}
      <div
        ref={gutterRef}
        aria-hidden="true"
        className="select-none py-3 px-3 bg-[#090d13] border-r border-[#21262d] text-zinc-500/50 text-right font-mono text-xs leading-[22px] overflow-hidden flex-shrink-0"
        style={{ minWidth: '40px' }}
      >
        {Array.from({ length: lineCount }).map((_, i) => (
          <div key={i} className="tabular-nums">
            {i + 1}
          </div>
        ))}
      </div>

      {/* 2. Code Canvas: Pre (Colored Syntax Layer) + Textarea (Input Layer) */}
      <div className="relative flex-1 overflow-hidden">
        {/* Preformatted Syntax Highlighting Overlay (Visual Layer) */}
        <pre
          ref={preRef}
          aria-hidden="true"
          className="absolute inset-0 m-0 py-3 px-4 font-mono text-xs sm:text-sm leading-[22px] whitespace-pre overflow-hidden pointer-events-none text-zinc-200 select-none z-10"
          dangerouslySetInnerHTML={{ __html: highlightedHtml + (value.endsWith('\n') ? ' ' : '') }}
        />

        {/* User Interaction Layer: Transparent Textarea with Visible Caret */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onScroll={handleScroll}
          placeholder={placeholder}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          rows={minRows}
          className="relative z-20 w-full h-full m-0 py-3 px-4 font-mono text-xs sm:text-sm leading-[22px] whitespace-pre bg-transparent text-transparent caret-theme-accent placeholder:text-zinc-600 focus:outline-none resize-none overflow-auto"
          style={{ minHeight: `${minRows * 22 + 24}px` }}
        />
      </div>
    </div>
  );
}
