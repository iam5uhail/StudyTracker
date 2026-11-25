// Interactive In-Browser Java Execution Engine & Compiler Simulator
// Transpiles and executes Core Java 17 programs (Scanner I/O, System.out, types, math, loops, logic)

class MockScanner {
  constructor(inputStr = '') {
    this.rawInput = String(inputStr || '');
    // Extract tokens by whitespace
    this.tokens = this.rawInput.trim().split(/\s+/).filter(Boolean);
    this.tokenIndex = 0;
    this.lines = this.rawInput.split(/\r?\n/);
    this.lineIndex = 0;
  }

  next() {
    if (this.tokenIndex >= this.tokens.length) return '';
    return this.tokens[this.tokenIndex++];
  }

  nextInt() {
    const t = this.next();
    const val = parseInt(t, 10);
    return isNaN(val) ? 0 : val;
  }

  nextDouble() {
    const t = this.next();
    const val = parseFloat(t);
    return isNaN(val) ? 0.0 : val;
  }

  nextFloat() {
    return this.nextDouble();
  }

  nextLong() {
    return this.nextInt();
  }

  nextLine() {
    if (this.lineIndex >= this.lines.length) return '';
    return this.lines[this.lineIndex++];
  }

  nextBoolean() {
    const t = this.next().toLowerCase();
    return t === 'true';
  }

  hasNext() {
    return this.tokenIndex < this.tokens.length;
  }

  hasNextInt() {
    if (!this.hasNext()) return false;
    return !isNaN(parseInt(this.tokens[this.tokenIndex], 10));
  }

  hasNextDouble() {
    if (!this.hasNext()) return false;
    return !isNaN(parseFloat(this.tokens[this.tokenIndex]));
  }

  close() {}
}

/**
 * Transpile standard Java main() body into runnable modern JavaScript
 */
function transpileJavaToJS(javaCode) {
  // 1. Remove comments
  let code = javaCode
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '');

  // 2. Extract code inside main method if present
  const mainMatch = code.match(/public\s+static\s+void\s+main\s*\([^)]*\)\s*\{([\s\S]*)\}/);
  let body = mainMatch ? mainMatch[1] : code;

  // If there's an outer class, take the inner content
  const classMatch = body.match(/class\s+\w+\s*\{([\s\S]*)\}/);
  if (classMatch && !mainMatch) {
    body = classMatch[1];
  }

  // Trim trailing closing brace if it closed the class
  if (mainMatch) {
    // If the body ends with extra closing braces for the class, balance them
    let depth = 0;
    let cleanBody = '';
    for (let i = 0; i < body.length; i++) {
      const ch = body[i];
      if (ch === '{') depth++;
      else if (ch === '}') {
        if (depth === 0) break;
        depth--;
      }
      cleanBody += ch;
    }
    body = cleanBody;
  }

  // 3. Transform Java types and variable declarations
  // e.g., "int a = 10, b = 20;" -> "let a = 10, b = 20;"
  // e.g., "double Celsius=sc.nextDouble();" -> "let Celsius=sc.nextDouble();"
  body = body.replace(
    /\b(?:int|double|float|long|short|byte|boolean|String|char)\s+(?=[a-zA-Z_$])/g,
    'let '
  );

  // Arrays: int[] arr = new int[5]; -> let arr = new Array(5).fill(0);
  body = body.replace(
    /\b(?:int|double|float|long|String|boolean|char)\s*\[\s*\]\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*new\s+(?:int|double|float|long|String|boolean|char)\s*\[([^\]]+)\]/g,
    'let $1 = new Array($2).fill(0)'
  );

  // Array literals: int[] arr = {1, 2, 3}; -> let arr = [1, 2, 3];
  body = body.replace(
    /\b(?:int|double|float|long|String|boolean|char)\s*\[\s*\]\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*\{([^}]+)\}/g,
    'let $1 = [$2]'
  );

  // Type casts:
  // (double) expr -> Number(expr)
  body = body.replace(/\(double\)\s*([a-zA-Z0-9_$.()]+)/g, 'Number($1)');
  // (int) expr -> Math.trunc(expr)
  body = body.replace(/\(int\)\s*([a-zA-Z0-9_$.()]+)/g, 'Math.trunc($1)');

  // Scanner instantiation:
  // Scanner sc = new Scanner(System.in); -> let sc = new Scanner(stdinInput);
  body = body.replace(
    /\b(?:Scanner\s+)?([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*new\s+Scanner\s*\([^)]*\);?/g,
    'let $1 = new Scanner(stdinInput);'
  );

  // String equals:
  // str1.equals(str2) -> (str1 === str2)
  body = body.replace(/([a-zA-Z0-9_$.()]+)\.equals\(([^)]+)\)/g, '($1 === $2)');
  // str1.equalsIgnoreCase(str2)
  body = body.replace(/([a-zA-Z0-9_$.()]+)\.equalsIgnoreCase\(([^)]+)\)/g, '(String($1).toLowerCase() === String($2).toLowerCase())');

  // Java integer division simulation for standalone integer literals:
  // e.g. "10 / 3" -> "Math.trunc(10 / 3)", but NOT "c * 9 / 5"
  body = body.replace(/(?<![*\/%]\s*)\b(\d+)\s*\/\s*(\d+)\b(?!\s*[*\/%])/g, (match, n1, n2) => {
    return `Math.trunc(${n1} / ${n2})`;
  });

  return body;
}

/**
 * Execute Java code in the browser with given standard input
 * Returns { success: boolean, output: string, error?: string }
 */
export function executeJavaProgram(javaCode, stdinInput = '') {
  if (!javaCode || !javaCode.trim()) {
    return {
      success: false,
      output: '',
      error: 'Code canvas is empty. Write your Java program first!'
    };
  }

  // Capture stdout
  const outputLines = [];
  let currentLine = '';

  const System = {
    out: {
      print: (...args) => {
        const text = args.map(a => (a === null ? 'null' : String(a))).join('');
        currentLine += text;
      },
      println: (...args) => {
        const text = args.length === 0 ? '' : args.map(a => (a === null ? 'null' : String(a))).join('');
        currentLine += text;
        outputLines.push(currentLine);
        currentLine = '';
      },
      printf: (formatStr, ...args) => {
        let i = 0;
        const formatted = String(formatStr).replace(/%([0-9.]*)?[dfs]/g, (match, spec) => {
          const arg = args[i++];
          if (arg === undefined) return match;
          if (match.endsWith('f')) {
            const precision = spec && spec.includes('.') ? parseInt(spec.split('.')[1], 10) : 6;
            return Number(arg).toFixed(precision);
          }
          if (match.endsWith('d')) {
            return Math.trunc(Number(arg));
          }
          return String(arg);
        });
        currentLine += formatted;
      }
    }
  };

  const Character = {
    isLetter: (c) => typeof c === 'string' && /^[a-zA-Z]$/.test(c),
    isDigit: (c) => typeof c === 'string' && /^[0-9]$/.test(c),
    isWhitespace: (c) => typeof c === 'string' && /^\s$/.test(c),
    toLowerCase: (c) => (typeof c === 'string' ? c.toLowerCase() : c),
    toUpperCase: (c) => (typeof c === 'string' ? c.toUpperCase() : c)
  };

  try {
    const jsCode = transpileJavaToJS(javaCode);

    // Create execution scope with safely sandboxed runner
    const runner = new Function(
      'System',
      'Scanner',
      'Character',
      'Math',
      'stdinInput',
      `
      "use strict";
      try {
        ${jsCode}
      } catch (e) {
        throw e;
      }
    `
    );

    runner(System, MockScanner, Character, Math, stdinInput);

    if (currentLine.length > 0) {
      outputLines.push(currentLine);
    }

    const finalOutput = outputLines.join('\n');

    return {
      success: true,
      output: finalOutput || '(Program finished with 0 output statements)'
    };
  } catch (err) {
    return {
      success: false,
      output: '',
      error: `Runtime Exception: ${err.message}`
    };
  }
}
