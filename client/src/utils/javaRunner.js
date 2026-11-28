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

  // 2. Extract code inside class or main method
  const hasMain = /public\s+static\s+void\s+main\s*\([^)]*\)\s*\{/.test(code);
  const classMatch = code.match(/class\s+\w+\s*\{([\s\S]*)\}/);

  let body = code;
  let hasTranspiledMain = false;

  if (classMatch && hasMain) {
    body = classMatch[1];
    // Transform all methods into functions with Java Method Overloading Support
    const methodRegex = /(?:public\s+|private\s+|protected\s+)?(?:static\s+)?(?:int|double|float|long|short|byte|boolean|void|String|char|int\[\]|String\[\]|[A-Z][a-zA-Z0-9_]*)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(([^)]*)\)\s*\{/g;
    const methods = [];
    let m;
    while ((m = methodRegex.exec(body)) !== null) {
      const fnName = m[1];
      const rawParams = m[2];
      const fullMatch = m[0];
      const paramList = rawParams.trim() ? rawParams.split(',').map(p => {
        const parts = p.trim().split(/\s+/);
        const type = parts.slice(0, -1).join(' ');
        const name = parts[parts.length - 1];
        return { type, name };
      }) : [];
      methods.push({ fullMatch, fnName, paramList, rawParams });
    }

    const counts = {};
    for (const item of methods) {
      counts[item.fnName] = (counts[item.fnName] || 0) + 1;
    }

    const dispatchers = [];
    const overloadTrackers = {};

    for (const item of methods) {
      const { fullMatch, fnName, paramList, rawParams } = item;
      const cleanParams = rawParams.replace(/\b(?:int|double|float|long|short|byte|boolean|String|char)(?:\[\s*\])?\s+/g, '');
      if (counts[fnName] > 1 && fnName !== 'main') {
        const idx = overloadTrackers[fnName] || 0;
        overloadTrackers[fnName] = idx + 1;
        const internalName = `__ovld_${fnName}_${idx}`;
        body = body.replace(fullMatch, `function ${internalName}(${cleanParams}) {`);
        let d = dispatchers.find(x => x.fnName === fnName);
        if (!d) {
          d = { fnName, overloads: [] };
          dispatchers.push(d);
        }
        d.overloads.push({
          internalName,
          paramTypes: paramList.map(p => p.type),
          arity: paramList.length
        });
      } else {
        body = body.replace(fullMatch, `function ${fnName}(${cleanParams}) {`);
      }
    }

    for (const d of dispatchers) {
      const { fnName, overloads } = d;
      let dispatcherCode = `\nfunction ${fnName}(...__args) {\n`;
      for (const ov of overloads) {
        if (ov.paramTypes.length === 1 && (ov.paramTypes[0] === 'String' || ov.paramTypes[0] === 'boolean')) {
          const typeCheck = ov.paramTypes[0] === 'String' ? `typeof __args[0] === 'string'` : `typeof __args[0] === 'boolean'`;
          dispatcherCode += `  if (__args.length === ${ov.arity} && ${typeCheck}) return ${ov.internalName}(...__args);\n`;
        } else {
          dispatcherCode += `  if (__args.length === ${ov.arity}) return ${ov.internalName}(...__args);\n`;
        }
      }
      dispatcherCode += `  return ${overloads[0].internalName}(...__args);\n}\n`;
      body += dispatcherCode;
    }

    hasTranspiledMain = true;
  } else if (hasMain) {
    const mainMatch = code.match(/public\s+static\s+void\s+main\s*\([^)]*\)\s*\{([\s\S]*)\}/);
    body = mainMatch[1];
  } else if (classMatch) {
    body = classMatch[1];
  }

  // 3. Shelter string literals from modifications
  const stringLiterals = [];
  body = body.replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, (m) => {
    const placeholder = `__STR_${stringLiterals.length}__`;
    stringLiterals.push(m);
    return placeholder;
  });

  // 4. Collect declared double/float variables
  const floatVars = new Set();
  const floatDeclRegex = /\b(?:double|float)\s+([^;(){]+)[;)]/g;
  let fMatch;
  while ((fMatch = floatDeclRegex.exec(body)) !== null) {
    const declList = fMatch[1];
    const parts = declList.split(',');
    for (const part of parts) {
      const vm = part.trim().match(/^([a-zA-Z_$][a-zA-Z0-9_$]*)/);
      if (vm) floatVars.add(vm[1]);
    }
  }

  // Helper to check if an expression snippet involves floats/doubles
  const hasFloat = (str) => {
    if (/\d+\.\d+|\.\d+/.test(str)) return true;
    if (/\b(?:double|float|nextDouble|nextFloat|Number)\b/.test(str)) return true;
    for (const fv of floatVars) {
      if (new RegExp(`\\b${fv}\\b`).test(str)) return true;
    }
    return false;
  };

  // 5. Type casts: (double) expr -> Number(expr), (int) expr -> Math.trunc(expr)
  body = body.replace(/\(double\)\s*([a-zA-Z0-9_$.]+(?:\[[^\]]+\])?)/g, 'Number($1)');
  body = body.replace(/\(double\)\s*\(([^)]+)\)/g, 'Number($1)');
  body = body.replace(/\(int\)\s*([a-zA-Z0-9_$.]+(?:\[[^\]]+\])?)/g, 'Math.trunc($1)');
  body = body.replace(/\(int\)\s*\(([^)]+)\)/g, 'Math.trunc($1)');

  // 6. Compound assignment /=
  // e.g. "n /= 10;" -> "n = Math.trunc(n / 10);"
  body = body.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\/=\s*([^;\n]+)/g, (match, v, expr) => {
    if (floatVars.has(v) || hasFloat(expr)) {
      return `${v} /= (${expr})`;
    }
    return `${v} = Math.trunc(${v} / (${expr}))`;
  });

  // 7. Atomic operand term: parenthesized expr, identifier with optional .prop / [idx], or integer literal
  const TERM = '(?:\\([^()]+\\)|[a-zA-Z_$][a-zA-Z0-9_$]*(?:\\.[a-zA-Z_$][a-zA-Z0-9_$]*|\\[[^\\]]+\\])*|\\d+)';

  // 8. Multiplication chain before division: e.g. price * 20 / arr.length or a * b * c / d
  body = body.replace(new RegExp(`(?<![.*\\/%\\w$]\\s*)((?:${TERM})(?:\\s*[*]\\s*(?:${TERM}))+)\\s*\\/\\s*(${TERM})`, 'g'), (match, leftChain, right) => {
    if (hasFloat(leftChain) || hasFloat(right)) return match;
    return `Math.trunc((${leftChain}) / ${right})`;
  });

  // 9. Java integer division between two terms: e.g. sum / arr.length, a / b, n / 10, arr[i] / 2
  body = body.replace(new RegExp(`(?<![.*\\/%\\w$]\\s*)(${TERM})\\s*\\/\\s*(${TERM})`, 'g'), (match, left, right) => {
    if (hasFloat(left) || hasFloat(right)) return match;
    return `Math.trunc(${left} / ${right})`;
  });

  // 10. Collect declared integer variables (int, long, short, byte) to enforce Java integer semantics
  const intVars = new Set();
  const intDeclRegex = /\b(?:int|long|short|byte)\s+([^;(){]+)[;)]/g;
  let iMatch;
  while ((iMatch = intDeclRegex.exec(body)) !== null) {
    const declList = iMatch[1];
    const parts = declList.split(',');
    for (const part of parts) {
      const vm = part.trim().match(/^([a-zA-Z_$][a-zA-Z0-9_$]*)/);
      if (vm) intVars.add(vm[1]);
    }
  }

  // Force integer variable initializations to Math.trunc if assigned a value (e.g. int average = sum/arr.length;)
  body = body.replace(/\b(?:int|long|short|byte)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^;]+);/g, (match, v, expr) => {
    if (/^\s*(?:new\s+|\[)/.test(expr)) return match;
    return `let ${v} = Math.trunc(${expr});`;
  });

  // Force subsequent assignments to integer variables to Math.trunc
  for (const iv of intVars) {
    const assignRegex = new RegExp(`(?<![a-zA-Z0-9_$.])(${iv})\\s*=\\s*([^;]+);`, 'g');
    body = body.replace(assignRegex, (match, v, expr) => {
      if (/^\s*(?:Math\.trunc|new\s+|\[)/.test(expr)) return match;
      return `${v} = Math.trunc(${expr});`;
    });
  }

  // 11. Transform Java types and variable declarations to let
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

  // Scanner instantiation:
  body = body.replace(
    /\b(?:Scanner\s+)?([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*new\s+Scanner\s*\([^)]*\);?/g,
    'let $1 = new Scanner(stdinInput);'
  );

  // String equals:
  body = body.replace(/([a-zA-Z0-9_$.()]+)\.equals\(([^)]+)\)/g, '($1 === $2)');
  body = body.replace(/([a-zA-Z0-9_$.()]+)\.equalsIgnoreCase\(([^)]+)\)/g, '(String($1).toLowerCase() === String($2).toLowerCase())');

  // 10. Restore string literals
  body = body.replace(/__STR_(\d+)__/g, (_, idx) => stringLiterals[Number(idx)]);

  if (hasTranspiledMain) {
    body += '\nif (typeof main === "function") { main([]); }\n';
  }

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
