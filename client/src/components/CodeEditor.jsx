import React, { useRef, useMemo, useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { Sparkles, Code2, Check, ArrowUpDown, HelpCircle } from 'lucide-react';

// Tokenizer regex for JavaScript and Java syntax coloring
const TOKEN_REGEX = new RegExp(
  [
    '(?<comment>//.*$|/\\*[\\s\\S]*?\\*/)',
    '(?<string>"(\\\\.|[^"\\\\])*"|\'(\\\\.|[^\'\\\\])*\'|`(\\\\.|[^`\\\\])*`)',
    '(?<keyword>\\b(?:function|return|if|else|while|for|let|const|var|class|new|this|typeof|instanceof|import|export|from|public|private|static|void|int|boolean|String|char|double|float|long|true|false|null|undefined|try|catch|finally|throw|break|continue|switch|case|default|async|await|yield)\\b)',
    '(?<number>\\b\\d+(?:\\.\\d+)?\\b)',
    '(?<fn>\\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\\s*\\())',
    '(?<bracket>[{}()\\[\\]])',
    '(?<op>===|!==|==|!=|<=|>=|=>|&&|\\|\\||\\+\\+|--|<<|>>|[=+\\-*/%&|!<>?:;^~])',
    '(?<other>[^\\s\\w])'
  ].join('|'),
  'gm'
);

// Built-in intelligent auto-suggestions tailored specifically for Java coding & DSA
const BASE_SUGGESTIONS = [
  { label: 'System.out.println', kind: 'method', insert: 'System.out.println();' },
  { label: 'System.out.print', kind: 'method', insert: 'System.out.print();' },
  { label: 'Scanner sc = new Scanner(System.in);', kind: 'snippet', insert: 'Scanner sc = new Scanner(System.in);' },
  { label: 'public static void main', kind: 'snippet', insert: 'public static void main(String[] args) {\n    \n}' },
  { label: 'public class', kind: 'snippet', insert: 'public class Solution {\n    \n}' },
  { label: 'public', kind: 'keyword', insert: 'public ' },
  { label: 'private', kind: 'keyword', insert: 'private ' },
  { label: 'static', kind: 'keyword', insert: 'static ' },
  { label: 'void', kind: 'keyword', insert: 'void ' },
  { label: 'int', kind: 'type', insert: 'int ' },
  { label: 'String', kind: 'type', insert: 'String ' },
  { label: 'boolean', kind: 'type', insert: 'boolean ' },
  { label: 'char', kind: 'type', insert: 'char ' },
  { label: 'double', kind: 'type', insert: 'double ' },
  { label: 'float', kind: 'type', insert: 'float ' },
  { label: 'long', kind: 'type', insert: 'long ' },
  { label: 'if', kind: 'snippet', insert: 'if () {\n    \n}' },
  { label: 'if...else', kind: 'snippet', insert: 'if () {\n    \n} else {\n    \n}' },
  { label: 'for (int i = 0; i < n; i++)', kind: 'snippet', insert: 'for (int i = 0; i < ; i++) {\n    \n}' },
  { label: 'for (int x : arr)', kind: 'snippet', insert: 'for (int x : ) {\n    \n}' },
  { label: 'while', kind: 'snippet', insert: 'while () {\n    \n}' },
  { label: 'sc.nextInt()', kind: 'method', insert: 'sc.nextInt()' },
  { label: 'sc.nextDouble()', kind: 'method', insert: 'sc.nextDouble()' },
  { label: 'sc.nextLine()', kind: 'method', insert: 'sc.nextLine()' },
  { label: 'sc.next()', kind: 'method', insert: 'sc.next()' },
  { label: 'sc.nextBoolean()', kind: 'method', insert: 'sc.nextBoolean()' },
  { label: 'sc.close()', kind: 'method', insert: 'sc.close();' },
  { label: 'Character.isLetter', kind: 'method', insert: 'Character.isLetter()' },
  { label: 'Character.toLowerCase', kind: 'method', insert: 'Character.toLowerCase()' },
  { label: 'Character.toUpperCase', kind: 'method', insert: 'Character.toUpperCase()' },
  { label: 'length()', kind: 'method', insert: 'length()' },
  { label: 'charAt()', kind: 'method', insert: 'charAt()' },
  { label: 'substring()', kind: 'method', insert: 'substring()' },
  { label: 'equals()', kind: 'method', insert: 'equals()' },
  { label: 'toCharArray()', kind: 'method', insert: 'toCharArray()' },
  { label: 'Math.max', kind: 'method', insert: 'Math.max()' },
  { label: 'Math.min', kind: 'method', insert: 'Math.min()' },
  { label: 'Math.floor', kind: 'method', insert: 'Math.floor()' },
  { label: 'Math.ceil', kind: 'method', insert: 'Math.ceil()' },
  { label: 'Math.abs', kind: 'method', insert: 'Math.abs()' },
  { label: 'Math.sqrt', kind: 'method', insert: 'Math.sqrt()' },
  { label: 'Math.pow', kind: 'method', insert: 'Math.pow()' },
  { label: 'Arrays.sort', kind: 'method', insert: 'Arrays.sort()' },
  { label: 'Arrays.toString', kind: 'method', insert: 'Arrays.toString()' },
  { label: 'ArrayList<Integer>', kind: 'snippet', insert: 'ArrayList<Integer> list = new ArrayList<>();' },
  { label: 'class', kind: 'keyword', insert: 'class ' },
  { label: 'return', kind: 'keyword', insert: 'return ' },
  { label: 'true', kind: 'literal', insert: 'true' },
  { label: 'false', kind: 'literal', insert: 'false' },
  { label: 'null', kind: 'literal', insert: 'null' },
  { label: 'break', kind: 'keyword', insert: 'break;' },
  { label: 'continue', kind: 'keyword', insert: 'continue;' },
  { label: 'switch', kind: 'snippet', insert: 'switch () {\n    case :\n        break;\n    default:\n        break;\n}' },
  { label: 'try...catch', kind: 'snippet', insert: 'try {\n    \n} catch (Exception e) {\n    \n}' }
];

// Bracket pair definitions
const BRACKET_PAIRS = {
  '(': ')',
  '[': ']',
  '{': '}',
  ')': '(',
  ']': '[',
  '}': '{'
};

const OPENING_BRACKETS = new Set(['(', '[', '{']);
const CLOSING_BRACKETS = new Set([')', ']', '}']);

// Find matching bracket position (forward or backward)
function findMatchingBracket(text, cursorIndex) {
  if (!text || cursorIndex < 0 || cursorIndex > text.length) return null;

  let targetIdx = -1;
  if (BRACKET_PAIRS[text[cursorIndex]]) {
    targetIdx = cursorIndex;
  } else if (cursorIndex > 0 && BRACKET_PAIRS[text[cursorIndex - 1]]) {
    targetIdx = cursorIndex - 1;
  }

  if (targetIdx === -1) return null;

  const targetChar = text[targetIdx];
  const matchChar = BRACKET_PAIRS[targetChar];

  const getLine = (idx) => text.slice(0, idx).split('\n').length;

  if (OPENING_BRACKETS.has(targetChar)) {
    let depth = 0;
    for (let i = targetIdx; i < text.length; i++) {
      if (text[i] === targetChar) depth++;
      else if (text[i] === matchChar) {
        depth--;
        if (depth === 0) {
          return {
            targetIdx,
            matchIdx: i,
            targetChar,
            matchChar,
            targetLine: getLine(targetIdx),
            matchLine: getLine(i),
            found: true
          };
        }
      }
    }
    return {
      targetIdx,
      matchIdx: -1,
      targetChar,
      matchChar,
      targetLine: getLine(targetIdx),
      matchLine: null,
      found: false
    };
  } else if (CLOSING_BRACKETS.has(targetChar)) {
    let depth = 0;
    for (let i = targetIdx; i >= 0; i--) {
      if (text[i] === targetChar) depth++;
      else if (text[i] === matchChar) {
        depth--;
        if (depth === 0) {
          return {
            targetIdx,
            matchIdx: i,
            targetChar,
            matchChar,
            targetLine: getLine(targetIdx),
            matchLine: getLine(i),
            found: true
          };
        }
      }
    }
    return {
      targetIdx,
      matchIdx: -1,
      targetChar,
      matchChar,
      targetLine: getLine(targetIdx),
      matchLine: null,
      found: false
    };
  }

  return null;
}

// Full code auto-formatter (fixes and standardizes indentation across entire document)
export function formatCode(text) {
  if (!text) return '';
  const lines = text.split('\n');
  let indentLevel = 0;
  const indentStr = '  '; // 2 spaces standard
  const formatted = [];

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i].trim();
    if (!rawLine) {
      formatted.push('');
      continue;
    }

    let leadingClosers = 0;
    const match = rawLine.match(/^([}\])]+)/);
    if (match) {
      leadingClosers = match[1].length;
    }

    const currentIndent = Math.max(0, indentLevel - leadingClosers);
    formatted.push(indentStr.repeat(currentIndent) + rawLine);

    let opens = 0;
    let closes = 0;
    let inString = false;
    let stringChar = '';

    for (let c = 0; c < rawLine.length; c++) {
      const ch = rawLine[c];
      const prev = c > 0 ? rawLine[c - 1] : '';

      if (!inString && ch === '/' && rawLine[c + 1] === '/') {
        break;
      }

      if (inString) {
        if (ch === stringChar && prev !== '\\') {
          inString = false;
        }
      } else {
        if (ch === '"' || ch === "'" || ch === '`') {
          inString = true;
          stringChar = ch;
        } else if (ch === '{' || ch === '[' || ch === '(') {
          opens++;
        } else if (ch === '}' || ch === ']' || ch === ')') {
          closes++;
        }
      }
    }

    indentLevel = Math.max(0, indentLevel + opens - closes);
  }

  return formatted.join('\n');
}

// Move lines up or down (Alt + ArrowUp / Alt + ArrowDown)
function moveLines(text, selStart, selEnd, direction) {
  const lines = text.split('\n');

  let charCount = 0;
  let startLine = 0;
  let endLine = 0;

  for (let i = 0; i < lines.length; i++) {
    const nextCount = charCount + lines[i].length + 1;
    if (selStart >= charCount && selStart < nextCount) {
      startLine = i;
    }
    if (selEnd >= charCount && selEnd < nextCount) {
      endLine = i;
    }
    charCount = nextCount;
  }
  if (selEnd >= charCount) {
    endLine = lines.length - 1;
  }

  if (direction === 'up' && startLine === 0) {
    return { text, newStart: selStart, newEnd: selEnd };
  }
  if (direction === 'down' && endLine === lines.length - 1) {
    return { text, newStart: selStart, newEnd: selEnd };
  }

  const selectedCount = endLine - startLine + 1;

  if (direction === 'up') {
    const targetLine = lines[startLine - 1];
    const block = lines.splice(startLine, selectedCount);
    lines.splice(startLine - 1, 0, ...block);

    const shiftOffset = targetLine.length + 1;
    return {
      text: lines.join('\n'),
      newStart: selStart - shiftOffset,
      newEnd: selEnd - shiftOffset
    };
  } else {
    const targetLine = lines[endLine + 1];
    const block = lines.splice(startLine, selectedCount);
    lines.splice(startLine + 1, 0, ...block);

    const shiftOffset = targetLine.length + 1;
    return {
      text: lines.join('\n'),
      newStart: selStart + shiftOffset,
      newEnd: selEnd + shiftOffset
    };
  }
}

// Highlight syntax with bracket match illumination
function highlightSyntaxWithBrackets(code, bracketInfo) {
  if (!code) return '';

  const matchedSet = new Set();
  if (bracketInfo) {
    if (bracketInfo.targetIdx !== undefined && bracketInfo.targetIdx >= 0) {
      matchedSet.add(bracketInfo.targetIdx);
    }
    if (bracketInfo.matchIdx !== undefined && bracketInfo.matchIdx >= 0) {
      matchedSet.add(bracketInfo.matchIdx);
    }
  }

  return code.replace(TOKEN_REGEX, (match, ...args) => {
    const offset = args[args.length - 3];
    const groups = args[args.length - 1] || {};

    const safe = match
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    if (groups.bracket) {
      const isMatched = matchedSet.has(offset);
      if (isMatched) {
        return `<span class="bg-amber-400/35 text-amber-300 ring-1 ring-amber-400 rounded-sm font-extrabold shadow-[0_0_10px_rgba(251,191,36,0.8)] px-0.5">${safe}</span>`;
      }
      return `<span class="text-yellow-300 font-bold">${safe}</span>`;
    }

    if (groups.comment) return `<span class="text-zinc-500 italic font-normal">${safe}</span>`;
    if (groups.string) return `<span class="text-emerald-400 font-medium">${safe}</span>`;
    if (groups.keyword) return `<span class="text-purple-400 font-semibold">${safe}</span>`;
    if (groups.number) return `<span class="text-amber-400 font-medium">${safe}</span>`;
    if (groups.fn) return `<span class="text-sky-400 font-semibold">${safe}</span>`;
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
  const selectedSuggestionRef = useRef(null);
  const suggestionsListRef = useRef(null);
  const pendingSelectionRef = useRef(null);
  const lastPrefixRef = useRef('');
  const selectedSuggestionIdxRef = useRef(0);

  // Caret position & cursor coordinates for bracket matching & auto-complete
  const [cursorPos, setCursorPos] = useState(0);
  const [cursorCoords, setCursorCoords] = useState({ line: 1, col: 1 });

  // Auto-suggestions dropdown state
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestionIdx, setSelectedSuggestionIdx] = useState(0);
  const [suggestionMenuPos, setSuggestionMenuPos] = useState(null); // { top, left, prefix }
  const [formatNotice, setFormatNotice] = useState(false);

  // Line count for gutter
  const lineCount = useMemo(() => {
    const lines = value.split('\n').length;
    return Math.max(lines, minRows);
  }, [value, minRows]);

  // Compute matching bracket
  const bracketInfo = useMemo(() => {
    return findMatchingBracket(value, cursorPos);
  }, [value, cursorPos]);

  // Ensure cursor is placed exactly where intended after React re-renders value
  useLayoutEffect(() => {
    if (pendingSelectionRef.current !== null && textareaRef.current) {
      const sel = pendingSelectionRef.current;
      if (typeof sel === 'number') {
        textareaRef.current.selectionStart = sel;
        textareaRef.current.selectionEnd = sel;
        setCursorPos(sel);
      } else if (typeof sel === 'object' && sel !== null) {
        textareaRef.current.selectionStart = sel.start;
        textareaRef.current.selectionEnd = sel.end;
        setCursorPos(sel.start);
      }
      pendingSelectionRef.current = null;
    }
  }, [value]);

  // Scroll active suggestion into view within the dropdown container WITHOUT scrolling the parent window
  useEffect(() => {
    if (suggestionsListRef.current && selectedSuggestionRef.current) {
      const container = suggestionsListRef.current;
      const item = selectedSuggestionRef.current;
      const itemTop = item.offsetTop;
      const itemBottom = itemTop + item.offsetHeight;
      const containerTop = container.scrollTop;
      const containerBottom = containerTop + container.clientHeight;

      if (itemTop < containerTop) {
        container.scrollTop = itemTop;
      } else if (itemBottom > containerBottom) {
        container.scrollTop = itemBottom - container.clientHeight;
      }
    }
  }, [selectedSuggestionIdx]);

  // Update cursor position and line/col indicator
  const updateCursorInfo = useCallback((forceResetIndex = false) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const pos = textarea.selectionStart;
    setCursorPos(pos);

    const currentVal = textarea ? textarea.value : value;
    const textBefore = currentVal.slice(0, pos);
    const lines = textBefore.split('\n');
    const line = lines.length;
    const col = lines[lines.length - 1].length + 1;
    setCursorCoords({ line, col });

    // Inspect word prefix before cursor for autocomplete suggestions
    const prefixMatch = textBefore.match(/([a-zA-Z_$][a-zA-Z0-9_$]*)$/);
    if (prefixMatch && prefixMatch[1] && prefixMatch[1].length >= 1) {
      const prefix = prefixMatch[1];

      // Dynamic words from current code
      const dynamicWords = Array.from(new Set(currentVal.match(/\b[a-zA-Z_$][a-zA-Z0-9_$]{2,}\b/g) || []))
        .filter(w => !BASE_SUGGESTIONS.some(s => s.label === w))
        .map(w => ({ label: w, kind: 'variable', insert: w }));

      const allList = [...BASE_SUGGESTIONS, ...dynamicWords];
      const filtered = allList.filter(item =>
        item.label.toLowerCase().startsWith(prefix.toLowerCase()) && item.label !== prefix
      ).slice(0, 8);

      if (filtered.length > 0) {
        setSuggestions(filtered);

        // ONLY reset index to 0 if the prefix changed or explicitly requested!
        if (prefix !== lastPrefixRef.current || forceResetIndex) {
          lastPrefixRef.current = prefix;
          selectedSuggestionIdxRef.current = 0;
          setSelectedSuggestionIdx(0);
        }

        // Position suggestions box near cursor
        const lineHeight = 22;
        const charWidth = 7.8;
        const top = Math.min((line * lineHeight) + 6, Math.max(lineCount * lineHeight, 300));
        const left = Math.min(Math.max((col * charWidth) + 38, 48), 350);
        setSuggestionMenuPos({ top, left, prefix });
      } else {
        setSuggestions([]);
        setSuggestionMenuPos(null);
        lastPrefixRef.current = '';
        selectedSuggestionIdxRef.current = 0;
        setSelectedSuggestionIdx(0);
      }
    } else {
      setSuggestions([]);
      setSuggestionMenuPos(null);
      lastPrefixRef.current = '';
      selectedSuggestionIdxRef.current = 0;
      setSelectedSuggestionIdx(0);
    }
  }, [value, lineCount]);

  // Handle format document
  const handleFormatDocument = () => {
    const formatted = formatCode(value);
    onChange(formatted);
    setFormatNotice(true);
    setTimeout(() => setFormatNotice(false), 1800);
  };

  // Synchronize scrolling between textarea, pre, and gutter
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

  // Insert a selected auto-suggestion with robust cursor-inside-brackets placement
  const applySuggestion = (item) => {
    const textarea = textareaRef.current;
    if (!textarea || !suggestionMenuPos) return;

    const start = textarea.selectionStart;
    const prefix = suggestionMenuPos.prefix;
    const prefixStart = start - prefix.length;

    const newVal = value.substring(0, prefixStart) + item.insert + value.substring(start);

    // Calculate exact target cursor position inside parentheses or quotes
    let targetCursor = prefixStart + item.insert.length;
    if (item.insert.endsWith('()')) {
      targetCursor = prefixStart + item.insert.length - 1; // exactly inside ()
    } else if (item.insert.endsWith('();')) {
      targetCursor = prefixStart + item.insert.length - 2; // exactly inside ()
    } else if (item.insert.endsWith('("")')) {
      targetCursor = prefixStart + item.insert.length - 2; // inside ""
    } else if (item.insert.includes('() {\n  \n}')) {
      const openParenIdx = item.insert.indexOf('(');
      if (openParenIdx !== -1) {
        targetCursor = prefixStart + openParenIdx + 1;
      }
    }

    // Crucial: Set pendingSelectionRef so useLayoutEffect sets it the moment React commits DOM!
    pendingSelectionRef.current = targetCursor;

    // Immediately update DOM elements directly
    textarea.value = newVal;
    textarea.selectionStart = targetCursor;
    textarea.selectionEnd = targetCursor;
    setCursorPos(targetCursor);

    // Close suggestions
    setSuggestions([]);
    setSuggestionMenuPos(null);
    lastPrefixRef.current = '';
    selectedSuggestionIdxRef.current = 0;
    setSelectedSuggestionIdx(0);

    // Notify parent
    onChange(newVal);

    requestAnimationFrame(() => {
      if (textareaRef.current) {
        textareaRef.current.selectionStart = targetCursor;
        textareaRef.current.selectionEnd = targetCursor;
        textareaRef.current.focus();
      }
    });
  };

  // KeyUp handler: do NOT recalculate suggestions or reset index on arrow keys or navigation
  const handleKeyUp = (e) => {
    const ignored = [
      'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
      'Up', 'Down', 'Left', 'Right',
      'Tab', 'Enter', 'Escape', 'Esc',
      'Shift', 'Alt', 'Control', 'Meta',
      'PageUp', 'PageDown', 'Home', 'End'
    ];
    if (ignored.includes(e.key)) {
      const textarea = textareaRef.current;
      if (textarea) {
        setCursorPos(textarea.selectionStart);
      }
      return;
    }
    updateCursorInfo(false);
  };

  // Keyboard enhancements:
  // 1. Suggestion navigation (ArrowDown, ArrowUp, Tab, Enter, Escape)
  // 2. Alt + Up / Alt + Down (Move sentence/line up and down)
  // 3. Tab / Shift+Tab (Indent / Unindent line or selection)
  // 4. Auto-closing pairs & Backspace pair deletion
  // 5. Smart Enter key (Auto-indent + block expansion)
  // 6. Shift + Alt + F (Format Code shortcut)
  const handleKeyDown = (e) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    // 1. Handle suggestion menu keyboard navigation first
    if (suggestions.length > 0 && suggestionMenuPos) {
      if (e.key === 'ArrowDown' || e.key === 'Down') {
        e.preventDefault();
        e.stopPropagation();
        const nextIdx = (selectedSuggestionIdxRef.current + 1) % suggestions.length;
        selectedSuggestionIdxRef.current = nextIdx;
        setSelectedSuggestionIdx(nextIdx);
        return;
      }
      if (e.key === 'ArrowUp' || e.key === 'Up') {
        e.preventDefault();
        e.stopPropagation();
        const prevIdx = (selectedSuggestionIdxRef.current - 1 + suggestions.length) % suggestions.length;
        selectedSuggestionIdxRef.current = prevIdx;
        setSelectedSuggestionIdx(prevIdx);
        return;
      }
      if (e.key === 'Tab' || e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        const chosen = suggestions[selectedSuggestionIdxRef.current] || suggestions[selectedSuggestionIdx] || suggestions[0];
        if (chosen) {
          applySuggestion(chosen);
        }
        return;
      }
      if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault();
        e.stopPropagation();
        setSuggestions([]);
        setSuggestionMenuPos(null);
        lastPrefixRef.current = '';
        selectedSuggestionIdxRef.current = 0;
        setSelectedSuggestionIdx(0);
        return;
      }
    }

    // 2. Shift + Alt + F -> Format document
    if (e.shiftKey && e.altKey && e.key.toLowerCase() === 'f') {
      e.preventDefault();
      handleFormatDocument();
      return;
    }

    // 3. Alt + ArrowUp / Alt + ArrowDown -> Move line(s) up / down
    if (e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      e.preventDefault();
      const direction = e.key === 'ArrowUp' ? 'up' : 'down';
      const result = moveLines(value, start, end, direction);
      if (result.text !== value) {
        pendingSelectionRef.current = { start: result.newStart, end: result.newEnd };
        onChange(result.text);
      }
      return;
    }

    // 4. Tab key -> Indent 2 spaces (Shift+Tab -> Unindent 2 spaces)
    if (e.key === 'Tab') {
      e.preventDefault();
      if (start !== end) {
        // Multi-line selection indentation
        const firstLineStart = value.lastIndexOf('\n', start - 1) + 1;
        const lastLineEnd = value.indexOf('\n', end);
        const actualEnd = lastLineEnd === -1 ? value.length : lastLineEnd;
        const selectedBlock = value.substring(firstLineStart, actualEnd);
        const lines = selectedBlock.split('\n');

        let modifiedLines;
        let delta = 0;

        if (e.shiftKey) {
          // Unindent
          modifiedLines = lines.map(line => {
            if (line.startsWith('  ')) {
              delta -= 2;
              return line.slice(2);
            } else if (line.startsWith(' ')) {
              delta -= 1;
              return line.slice(1);
            }
            return line;
          });
        } else {
          // Indent
          modifiedLines = lines.map(line => {
            delta += 2;
            return '  ' + line;
          });
        }

        const newBlock = modifiedLines.join('\n');
        const newVal = value.substring(0, firstLineStart) + newBlock + value.substring(actualEnd);
        pendingSelectionRef.current = { start: firstLineStart, end: actualEnd + delta };
        onChange(newVal);
      } else {
        // Single cursor indentation
        if (e.shiftKey) {
          const lineStart = value.lastIndexOf('\n', start - 1) + 1;
          if (value.slice(lineStart, lineStart + 2) === '  ') {
            const newVal = value.slice(0, lineStart) + value.slice(lineStart + 2);
            const targetPos = Math.max(lineStart, start - 2);
            pendingSelectionRef.current = targetPos;
            onChange(newVal);
          }
        } else {
          const newVal = value.substring(0, start) + '  ' + value.substring(end);
          const targetPos = start + 2;
          pendingSelectionRef.current = targetPos;
          onChange(newVal);
        }
      }
      return;
    }

    // 5. Auto-closing pairs: { }, ( ), [ ], " ", ' ', ` `
    const pairs = {
      '{': '}',
      '(': ')',
      '[': ']',
      '"': '"',
      "'": "'",
      '`': '`'
    };

    // If user types closing bracket when next char is that closing bracket -> skip over it
    const closingChars = [')', ']', '}', '"', "'", '`'];
    if (closingChars.includes(e.key) && start === end && value[start] === e.key) {
      e.preventDefault();
      textarea.selectionStart = textarea.selectionEnd = start + 1;
      setCursorPos(start + 1);
      return;
    }

    // Auto-insert closing pair
    if (pairs[e.key]) {
      e.preventDefault();
      const openChar = e.key;
      const closeChar = pairs[openChar];
      const selected = value.substring(start, end);
      const newVal = value.substring(0, start) + openChar + selected + closeChar + value.substring(end);
      const targetPos = start + 1 + selected.length;
      pendingSelectionRef.current = targetPos;
      onChange(newVal);
      return;
    }

    // 6. Backspace pair deletion: {|} -> backspace -> removes both
    if (e.key === 'Backspace' && start === end && start > 0) {
      const prevChar = value[start - 1];
      const nextChar = value[start];
      if (pairs[prevChar] && pairs[prevChar] === nextChar) {
        e.preventDefault();
        const newVal = value.substring(0, start - 1) + value.substring(start + 1);
        const targetPos = start - 1;
        pendingSelectionRef.current = targetPos;
        onChange(newVal);
        return;
      }
    }

    // 7. Smart Enter key with block indentation & bracket expansion
    if (e.key === 'Enter') {
      e.preventDefault();
      const lineStart = value.lastIndexOf('\n', start - 1) + 1;
      const currentLine = value.slice(lineStart, start);
      const indentMatch = currentLine.match(/^\s*/);
      const currentIndent = indentMatch ? indentMatch[0] : '';

      const isAfterOpenBrace = /[{([][\s]*$/.test(currentLine);
      const isBeforeCloseBrace = /^[\s]*[})\]]/.test(value.slice(start));

      if (isAfterOpenBrace && isBeforeCloseBrace) {
        // Expand:
        // {
        //   |
        // }
        const extraIndent = '  ';
        const insert = '\n' + currentIndent + extraIndent + '\n' + currentIndent;
        const newVal = value.substring(0, start) + insert + value.substring(end);
        const targetPos = start + 1 + currentIndent.length + extraIndent.length;
        pendingSelectionRef.current = targetPos;
        onChange(newVal);
      } else if (isAfterOpenBrace) {
        const extraIndent = '  ';
        const insert = '\n' + currentIndent + extraIndent;
        const newVal = value.substring(0, start) + insert + value.substring(end);
        const targetPos = start + insert.length;
        pendingSelectionRef.current = targetPos;
        onChange(newVal);
      } else {
        const insert = '\n' + currentIndent;
        const newVal = value.substring(0, start) + insert + value.substring(end);
        const targetPos = start + insert.length;
        pendingSelectionRef.current = targetPos;
        onChange(newVal);
      }
    }
  };

  // Highlight syntax with bracket match illumination
  const highlightedHtml = useMemo(() => {
    return highlightSyntaxWithBrackets(value, bracketInfo);
  }, [value, bracketInfo]);

  return (
    <div className={`relative flex flex-col rounded-b-2xl overflow-hidden font-mono text-xs sm:text-sm bg-[#0d1117] border border-[#21262d] ${className}`}>
      {/* 1. Main Editor Canvas: Line Numbers + Pre Highlighting + Textarea */}
      <div className="relative flex flex-1 overflow-hidden" style={{ minHeight: `${minRows * 22 + 24}px` }}>
        {/* Line Numbers Gutter */}
        <div
          ref={gutterRef}
          aria-hidden="true"
          className="select-none py-3 px-3 bg-[#090d13] border-r border-[#21262d] text-zinc-500/50 text-right font-mono text-xs leading-[22px] overflow-hidden flex-shrink-0"
          style={{ minWidth: '42px' }}
        >
          {Array.from({ length: lineCount }).map((_, i) => (
            <div
              key={i}
              className={`tabular-nums transition-colors ${
                cursorCoords.line === i + 1 ? 'text-amber-400 font-bold' : ''
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code Canvas Container */}
        <div className="relative flex-1 overflow-hidden">
          {/* Syntax Highlighted Visual Layer */}
          <pre
            ref={preRef}
            aria-hidden="true"
            className="absolute inset-0 m-0 py-3 px-4 font-mono text-xs sm:text-sm leading-[22px] whitespace-pre overflow-hidden pointer-events-none text-zinc-200 select-none z-10"
            dangerouslySetInnerHTML={{ __html: highlightedHtml + (value.endsWith('\n') ? ' ' : '') }}
          />

          {/* User Input Layer */}
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              requestAnimationFrame(() => updateCursorInfo(false));
            }}
            onClick={() => updateCursorInfo(false)}
            onKeyUp={handleKeyUp}
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

          {/* 3. Floating Auto-Suggestions / IntelliSense Dropdown */}
          {suggestions.length > 0 && suggestionMenuPos && (
            <div
              ref={suggestionsListRef}
              className="absolute z-30 bg-[#161b22] border border-[#30363d] rounded-xl shadow-2xl overflow-hidden py-1 w-64 max-h-56 overflow-y-auto backdrop-blur-md"
              style={{
                top: `${suggestionMenuPos.top}px`,
                left: `${suggestionMenuPos.left}px`
              }}
            >
              <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 border-b border-[#21262d] flex justify-between items-center bg-[#0d1117]/60">
                <span>Suggestions</span>
                <span className="font-normal lowercase text-[9px] text-zinc-500">↑/↓ navigate • Tab/Enter pick</span>
              </div>
              {suggestions.map((item, idx) => (
                <div
                  key={idx}
                  ref={idx === selectedSuggestionIdx ? selectedSuggestionRef : null}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    applySuggestion(item);
                  }}
                  onMouseEnter={() => {
                    selectedSuggestionIdxRef.current = idx;
                    setSelectedSuggestionIdx(idx);
                  }}
                  className={`px-3 py-1.5 flex items-center justify-between text-xs cursor-pointer transition-colors ${
                    idx === selectedSuggestionIdx
                      ? 'bg-amber-500/25 text-amber-300 font-semibold border-l-2 border-amber-400'
                      : 'text-zinc-300 hover:bg-[#21262d]'
                  }`}
                >
                  <div className="flex items-center space-x-2 truncate">
                    <span
                      className={`text-[9px] font-bold px-1 py-0.5 rounded uppercase font-mono ${
                        item.kind === 'keyword'
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          : item.kind === 'snippet'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : item.kind === 'method'
                          ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                          : item.kind === 'type'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-zinc-700/50 text-zinc-400'
                      }`}
                    >
                      {item.kind.slice(0, 3)}
                    </span>
                    <span className="truncate">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 2. Professional IDE Status Bar & Action Toolbar */}
      <div className="px-3 py-1.5 bg-[#090d13] border-t border-[#21262d] flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-400 font-mono select-none">
        {/* Left: Position & Matching Bracket info */}
        <div className="flex items-center space-x-3">
          <span className="text-zinc-400 font-medium">
            Ln <strong className="text-zinc-200">{cursorCoords.line}</strong>, Col <strong className="text-zinc-200">{cursorCoords.col}</strong>
          </span>

          <span className="text-zinc-600">|</span>

          {/* Bracket Matching Indicator */}
          {bracketInfo ? (
            bracketInfo.found ? (
              <span className="inline-flex items-center space-x-1 text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 text-[10px] font-semibold">
                <span>Bracket</span>
                <span>{bracketInfo.targetChar} (Ln {bracketInfo.targetLine}) ↔ {bracketInfo.matchChar} (Ln {bracketInfo.matchLine})</span>
              </span>
            ) : (
              <span className="inline-flex items-center space-x-1 text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30 text-[10px] font-bold animate-pulse">
                <span>Unmatched: {bracketInfo.targetChar}</span>
              </span>
            )
          ) : (
            <span className="text-zinc-500 hidden sm:inline text-[10px]">
              Brackets matched
            </span>
          )}
        </div>

        {/* Right: Format Document & Keyboard shortcut helpers */}
        <div className="flex items-center space-x-2 text-[10px]">
          {/* Format Code button */}
          <button
            type="button"
            onClick={handleFormatDocument}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-[#161b22] hover:bg-[#21262d] text-zinc-300 hover:text-white border border-[#30363d] transition-all active:scale-95 shadow-sm"
            title="Auto-format and fix code indentation (Shift + Alt + F)"
          >
            {formatNotice ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Indented ✓</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Format Indentation</span>
              </>
            )}
          </button>

          <span className="hidden md:inline text-zinc-500">
            <span className="text-zinc-400 font-semibold">Alt+↑/↓</span> Move Line • <span className="text-zinc-400 font-semibold">Tab</span> Indent
          </span>
        </div>
      </div>
    </div>
  );
}
