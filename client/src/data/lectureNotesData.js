// Comprehensive Lecture Notes for StudyTracker (Days 1 to 7 - Topics 01 to 14)
// Based directly on student handwritten lecture notes with enhanced diagrams, code snippets & corrections.

export const lectureNotesData = {
  // ==========================================
  // DAY 1 - TOPIC 01
  // ==========================================
  "d1-j1": `# 01. Introduction to Languages & Software Classification

## 1. Overview & Classification of Languages
Computers communicate strictly in binary (0s and 1s). Programming, markup, and scripting languages provide human-readable abstractions that translate logical intentions into machine operations.

\`\`\`
+-----------------------------------------------------------------------------------+
|                        SOFTWARE & LANGUAGE ECOSYSTEM                              |
+---------------------+---------------------+-------------------+-------------------+
| Programming Langs   | Query Languages     | Markup Langs      | Scripting Langs   |
| (C, C++, Java,      | (SQL, PL/SQL,       | (HTML, XML,       | (JS, PHP,         |
|  Python, C#)        |  Oracle SQL)        |  XHTML)           |  Python, VBScript)|
+---------------------+---------------------+-------------------+-------------------+
| Core logic, backend | Database queries,   | UI document       | Form validation,  |
| apps, system code,  | data retrieval,     | structure, web    | client/server     |
| hardware algorithms | transaction control | presentation      | dynamic logic     |
+---------------------+---------------------+-------------------+-------------------+
\`\`\`

---

## 2. Detailed Language Categories
* **Programming Languages** (\`C\`, \`C++\`, \`Java\`, \`Python\`, \`C#\`):
  * **Primary Purpose**: Backend development, desktop applications, operating system kernels, game engines, and performance-critical software.
  * **Execution**: Translated into bytecode or native machine code for direct execution.
* **Query Languages** (\`SQL\`, \`PL/SQL\`, \`Oracle SQL\`, \`T-SQL\`):
  * **Primary Purpose**: Database creation, querying, updating, and transactional management (ACID properties).
* **Markup Languages** (\`HTML\`, \`XHTML\`, \`DHTML\`, \`XML\`):
  * **Primary Purpose**: Defining front-end structure and document representation.
  * **Key Distinction**: Markup languages are **not** programming languages—they contain no variables, conditional branching, or loops.
* **Scripting Languages**:
  * **Client-Side** (\`JavaScript\`, \`VBScript\`): Executed inside the browser for client logic, input validation, and dynamic UI updates.
  * **Server-Side** (\`PHP\`, \`Node.js\`, \`Python\`, \`Advanced Java Servlets\`): Executed on the server for handling HTTP requests, session management, and database interactions.

---

## 3. Technologies vs Frameworks

### Web Technologies:
* \`CSS\`: Visual styling, responsive layout (Flexbox/Grid), animations.
* \`jQuery\`: Cross-browser DOM manipulation library.
* \`AJAX\` (*Asynchronous JavaScript and XML*): Enables background data exchange with the server without reloading the web page.

### Popular Frameworks by Language:
* **Java**: \`Spring\`, \`Spring Boot\` (Microservices), \`Hibernate\` (ORM), \`Struts\`, \`JSF\`.
* **PHP**: \`Laravel\`, \`CodeIgniter\`, \`CakePHP\`.
* **JavaScript / TypeScript**: \`React\`, \`Next.js\`, \`Angular\`, \`Express.js\`, \`Vue.js\`.
* **Python**: \`Django\` (full-stack), \`Flask\` (microframework), \`FastAPI\`.

---

## 4. Platforms & Operating Systems (OS)
* **Desktop / Server Operating Systems**: \`Windows\`, \`Linux (Ubuntu, CentOS, Debian)\`, \`Unix\`, \`macOS\`.
  * *Purpose*: General computing, enterprise servers, cloud infrastructure.
* **Mobile Operating Systems**: \`Android\` (Linux kernel + ART), \`iOS\` (Darwin kernel), \`BlackBerry OS\` (legacy).
  * *Purpose*: Smartphones, tablets, wearable and handheld embedded devices.

---

## 💡 Key Takeaway
Every language is engineered for a specific trade-off: **C/C++** for hardware control and raw speed, **Java** for platform-independent enterprise scalability, **Python** for rapid prototyping and AI/ML, and **JavaScript** for universal interactive web clients.`,

  // ==========================================
  // DAY 1 - TOPIC 02
  // ==========================================
  "d1-j2": `# 02. Introduction to Java, History & Architecture

## 1. What is Java?
Java is a high-level, class-based, object-oriented, secure, robust, and platform-independent programming language.
* **Core Philosophy**: **WORA** (*Write Once, Run Anywhere*).
* **Why Platform-Independent?** Because Java source code is compiled into an intermediate form called **Bytecode** (\`.class\` file). The Bytecode is not tied to any physical hardware architecture—it runs on any device that has a **Java Virtual Machine (JVM)**.

---

## 2. Java History & Key Facts
* **Origin**: Developed in **1991** at Sun Microsystems (acquired by Oracle in 2010).
* **The Green Team**: Led by **James Gosling** (*"Father of Java"*), Mike Sheridan, and Patrick Naughton.
* **Evolution of Name**:
  * Originally named **"Oak"** (named after an oak tree outside Gosling's office).
  * Renamed to **"Java"** in **1995** (inspired by Java coffee beans from Indonesia).
* **Official Release**: May 23, **1995** (Java 1.0).
* **Symbol / Mascot**: A steaming cup of coffee and the friendly mascot "Duke".

---

## 3. The 3 Primary Java Editions

\`\`\`
+--------------------------------------------------------------------------+
|                            JAVA PLATFORMS                                |
+----------------------+--------------------------+------------------------+
| 1. J2SE / Java SE    | 2. J2EE / Jakarta EE     | 3. J2ME / Java ME      |
| (Standard Edition)   | (Enterprise Edition)     | (Micro Edition)        |
+----------------------+--------------------------+------------------------+
| Core Java            | Advanced / Enterprise    | Embedded & Mobile      |
| Fundamentals, OOP,   | Servlets, JSP, EJB,      | Micro-devices, SIMs,   |
| Collections, I/O,    | REST APIs, Microservices,| legacy feature phones  |
| Streams, Concurrency | Spring / Hibernate       | (largely replaced by   |
| Desktop Applications | Distributed Web Systems  |  modern Android SDK)   |
+----------------------+--------------------------+------------------------+
\`\`\`

---

## 4. Comprehensive Feature Comparison: C vs Java

| Feature | C Language | Java Language |
| :--- | :--- | :--- |
| **Programming Paradigm** | Procedural / Function-driven | Object-Oriented (OOP) |
| **Abstraction Level** | Middle-level (direct hardware access) | High-level language |
| **Platform Independence** | ❌ No (Platform dependent, compiled to machine code) | ✅ Yes (Platform independent via Bytecode on JVM) |
| **Compilation Pipeline** | Source -> Preprocessor -> Machine binary | Source (\`.java\`) -> Compiler (\`javac\`) -> Bytecode (\`.class\`) -> JVM |
| **Memory Management** | Manual via \`malloc()\`, \`calloc()\`, \`free()\` | Automatic Garbage Collection (GC) |
| **Pointers & Security** | Direct memory pointers (risk of memory corruption) | No explicit pointers; verified and memory-safe |
| **Multithreading** | No built-in language primitives | Built-in multithreading (\`Thread\`, \`Runnable\`, \`java.util.concurrent\`) |
| **GUI Support** | No standard library for GUI | Built-in standard GUI libraries (AWT, Swing, JavaFX) |
| **Method Overloading** | ❌ Not supported | ✅ Supported (Overloading & Overriding) |

---

## 💡 Key Takeaway
Java is platform-independent because of Bytecode; the JVM itself is platform-dependent (built specifically for Windows, Linux, Mac), which creates a universal layer over any operating system.`,

  // ==========================================
  // DAY 2 - TOPIC 03
  // ==========================================
  "d2-j1": `# 03. Comprehensive Comparison: Java vs Python

## 1. Architectural & Execution Comparison

\`\`\`
JAVA (Compiled-Interpreted Hybrid):
[ Source (.java) ] ──> [ javac Compiler ] ──> [ Bytecode (.class) ] ──> [ JVM (JIT + Interpreter) ] ──> Fast Machine Code

PYTHON (Interpreted Pipeline):
[ Source (.py) ]   ──> [ CPython Bytecode ] ──> [ Python Virtual Machine (PVM) ] ──> Interpreted Line-by-Line
\`\`\`

---

## 2. Feature-by-Feature Comparison Matrix

| Feature | Python | Java |
| :--- | :--- | :--- |
| **Language Paradigm** | Multi-paradigm (OOP, Functional, Scripting) | Class-based, Strictly Object-Oriented |
| **Typing Discipline** | **Dynamically Typed** (types checked at runtime) | **Statically Typed** (types declared and checked at compile time) |
| **Execution Speed** | Slower (runtime type lookups, line-by-line interpretation) | Significantly faster (optimized Bytecode + JIT machine compilation) |
| **Multithreading** | Constrained by **GIL (Global Interpreter Lock)** in CPython | True multi-core OS-level multithreading with full concurrency APIs |
| **Code Verbosity** | Ultra-concise, whitespace indentation | Explicit, robust, requires class and type declarations |
| **Error Detection** | Runtime errors (bugs appear when line is hit) | Compile-time errors (catches type mismatches before execution) |
| **Memory Management** | Reference counting + Cyclic Garbage Collector | Multi-generational JVM Garbage Collection (G1, ZGC, Parallel) |
| **GUI Frameworks** | \`Tkinter\`, \`PyQt\`, \`Kivy\`, \`CustomTkinter\` | \`Swing\`, \`JavaFX\`, \`AWT\` |
| **Primary Industry Use** | Data Science, AI/ML, automation, quick scripts | Enterprise backends, high-frequency finance, Android, distributed clouds |

---

## 3. Code Syntax Comparison

### Java (Explicit & Statically Typed):
\`\`\`java
public class LoopDemo {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            System.out.println("Step: " + i);
        }
    }
}
\`\`\`

### Python (Concise & Dynamically Typed):
\`\`\`python
for i in range(1, 4):
    print(f"Step: {i}")
\`\`\`

---

## 💡 Key Takeaway
* Choose **Python** for fast time-to-market, scientific computing, AI/ML, and automation.
* Choose **Java** for mission-critical enterprise systems, microservices, massive multi-threaded scale, and long-term code maintainability.`,

  // ==========================================
  // DAY 2 - TOPIC 04
  // ==========================================
  "d2-j2": `# 04. Java Environment: JDK, JRE, JVM & System Setup

## 1. The Core Trinity: JDK vs JRE vs JVM

\`\`\`
+---------------------------------------------------------------------------------+
|                                 JDK (Java Development Kit)                      |
|                                                                                 |
|   Development Tools:                                                            |
|   [ javac (compiler) ]  [ jdb (debugger) ]  [ jar (archiver) ]  [ javadoc ]     |
|                                                                                 |
|   +-------------------------------------------------------------------------+   |
|   |                         JRE (Java Runtime Environment)                  |   |
|   |                                                                         |   |
|   |   Runtime Libraries & Class Packages:                                   |   |
|   |   [ java.lang, java.util, java.io, rt.jar, Base Standard APIs ]         |   |
|   |                                                                         |   |
|   |   +-----------------------------------------------------------------+   |   |
|   |   |                     JVM (Java Virtual Machine)                  |   |   |
|   |   |                                                                 |   |   |
|   |   |   [ ClassLoader ]  [ Bytecode Verifier ]  [ JIT Compiler ]      |   |   |
|   |   |   [ Interpreter ]  [ Garbage Collector ]  [ Runtime Memory ]    |   |   |
|   |   +-----------------------------------------------------------------+   |   |
|   +-------------------------------------------------------------------------+   |
+---------------------------------------------------------------------------------+
\`\`\`

* **JDK (Java Development Kit)**: Complete toolkit for developers. Includes compiler (\`javac\`), debugger (\`jdb\`), packager (\`jar\`), plus the JRE.
* **JRE (Java Runtime Environment)**: Intended for users who only need to run Java apps. Contains runtime standard libraries and the JVM.
* **JVM (Java Virtual Machine)**: The engine that executes Bytecode on the physical CPU.

---

## 2. Types of Virtual Machines (VMs)
Virtual Machines abstract hardware into software layers. There are two major categories:

1. **Hardware-Based VM (System VM)**:
   * Emulates an entire physical computer, including virtual CPU, RAM, and hardware peripherals.
   * Can run a complete guest OS on top of host OS.
   * **Examples**: VMware Workstation, Oracle VirtualBox, Microsoft Hyper-V, KVM.
2. **Application-Based VM (Process VM)**:
   * Runs a single application or process inside an abstracted execution environment.
   * Does not emulate hardware; abstracts the OS for language portability.
   * **Examples**: **JVM** (Java Virtual Machine), CLR (.NET), Dalvik / ART (Android).

---

## 3. Step-by-Step Installation & Configuration
1. **Download JDK**:
   * Modern distributions: Eclipse Temurin (Adoptium), Oracle OpenJDK, Amazon Corretto.
2. **Set \`JAVA_HOME\` Environment Variable**:
   * Value: Root folder of JDK (e.g., \`C:\\Program Files\\Eclipse Adoptium\\jdk-21.0.x\`).
3. **Update System \`PATH\`**:
   * Append \`%JAVA_HOME%\\bin\` (Windows) or \`$JAVA_HOME/bin\` (Linux/Mac).
4. **Terminal Verification**:
   \`\`\`bash
   java -version    # Verifies JVM Runtime version
   javac -version   # Verifies Java Compiler version
   \`\`\`

---

## 💡 Key Takeaway
Developers install the **JDK** to write and compile code (\`javac\`). End-users only need the **JRE** or embedded **JVM** to execute pre-compiled software (\`java\`).`,

  // ==========================================
  // DAY 3 - TOPIC 05
  // ==========================================
  "d3-j1": `# 05. Steps to Create First Java Program & Naming Conventions

## 1. End-to-End Program Creation Lifecycle

\`\`\`
[ Step 1: Write Code ]  --> Text editor / IDE (Demo.java)
          │
[ Step 2: Save File ]   --> Save strictly with ".java" extension
          │
[ Step 3: Compile ]     --> Command: javac Demo.java
          │                     │
          │             (Syntax error?) ──> Fix code
          ▼                     ▼
[ Step 4: Bytecode ]    --> Generates Demo.class file
          │
[ Step 5: Execute ]     --> Command: java Demo  (Do NOT append .class!)
          ▼
[ Step 6: Console ]     --> Output printed on screen!
\`\`\`

---

## 2. Java Naming Conventions (Industry Standard)

| Identifier Type | Standard Casing Rule | Valid Example | Invalid / Anti-Pattern Example |
| :--- | :--- | :--- | :--- |
| **Class Name** | **PascalCase** (UpperCamelCase) | \`StudentRecord\`, \`MyJavaDemo\` | \`studentRecord\`, \`my_java_demo\` |
| **Interface Name** | **PascalCase** (often adjective) | \`Runnable\`, \`Serializable\`, \`Printable\` | \`runnable\`, \`MY_INTERFACE\` |
| **Method Name** | **camelCase** (verb-led) | \`calculateTotal()\`, \`getStudentName()\` | \`CalculateTotal()\`, \`GET_DATA()\` |
| **Variable Name** | **camelCase** (meaningful noun) | \`studentAge\`, \`totalAccountBalance\` | \`student-age\`, \`123Age\`, \`st_age\` |
| **Package Name** | **lowercase only**, reverse domain | \`com.google.analytics\`, \`org.apache.commons\` | \`Com.Google\`, \`my package\` |
| **Constant (\`final static\`)** | **ALL_UPPERCASE** with underscores | \`MAX_CAPACITY\`, \`PI\`, \`DEFAULT_TIMEOUT\` | \`maxCapacity\`, \`pi_value\` |

---

## 3. Strict Rules for Identifiers
An **identifier** is a name given to a class, method, variable, or package.

1. **Permitted Characters**:
   * Letters (\`a-z\`, \`A-Z\`), digits (\`0-9\`), underscore (\`_\`), and dollar sign (\`$\`).
2. **Cannot Start With a Digit**:
   * \`int 1stVar = 10;\` ❌ **COMPILE ERROR!**
   * \`int var1 = 10;\`   ✅ **VALID**
3. **Case Sensitivity**:
   * Java is strictly case-sensitive.
   * \`int a = 10;\` and \`int A = 20;\` are treated as **two completely distinct variables**!
4. **Cannot Use Reserved Keywords**:
   * \`int class = 5;\` ❌ **ILLEGAL!** (\`class\` is a keyword).
5. **No Spaces or Special Operators**:
   * \`int total-score;\` ❌ (Hyphen is parsed as minus subtraction operator!)
   * \`int total score;\` ❌ (Spaces forbidden)
   * \`int total_score;\` ✅ (Valid)

---

## 4. Complete First Program Code
\`\`\`java
// File: HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java World!");
    }
}
\`\`\`

\`\`\`bash
# Compilation:
javac HelloWorld.java

# Execution:
java HelloWorld
\`\`\`

---

## 💡 Key Takeaway
Always name your files to match your \`public class\` exactly, and follow PascalCase for classes and camelCase for methods and variables.`,

  // ==========================================
  // DAY 3 - TOPIC 06
  // ==========================================
  "d3-j2": `# 06. Java Program Structure & Line-by-Line Anatomy

## 1. Standard Java Source File Structure (In Order)

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│ 1. Documentation Section                                    │
│    // Single line comment                                   │
│    /* Multi-line comment */                                 │
│    /** Javadoc documentation comment */                     │
├─────────────────────────────────────────────────────────────┤
│ 2. Package Statement (Optional, max 1 per file)             │
│    package com.example.demo;                                │
├─────────────────────────────────────────────────────────────┤
│ 3. Import Statements (Zero, one, or multiple)               │
│    import java.util.Scanner;                                │
│    import java.io.*;                                        │
├─────────────────────────────────────────────────────────────┤
│ 4. Class / Interface Declarations                           │
│    public class StudentPortal {                             │
│        // Fields, Constructors, Methods, main()             │
│    }                                                        │
└─────────────────────────────────────────────────────────────┘
\`\`\`

* **Package Rules**:
  * Must be the **first non-comment line** of code.
  * A single \`.java\` file can contain at most **one package declaration**.
  * Packages avoid namespace collisions in enterprise projects.
* **Import Rules**:
  * Placed between \`package\` and \`class\` declaration.
  * Note: \`java.lang.*\` is **automatically imported by default** in every Java program (provides \`System\`, \`String\`, \`Math\`, \`Integer\`, etc.).

---

## 2. Line-by-Line Anatomy of \`public static void main\`

\`\`\`
  public static void main(String[] args)
    │      │    │    │      │       │
    │      │    │    │      │       └─> args: Parameter variable name (can be any identifier)
    │      │    │    │      └─────────> String[]: Array of String objects (command line arguments)
    │      │    │    └────────────────> main: Predefined entry-point method name searched by JVM
    │      │    └─────────────────────> void: Return type (method returns no value to JVM)
    │      └──────────────────────────> static: Can be called without creating an object instance
    └─────────────────────────────────> public: Access modifier (accessible everywhere by JVM launcher)
\`\`\`

---

## 3. Anatomy of \`System.out.println("Hello");\`

\`\`\`
  System . out . println ( "Hello" ) ;
    │       │       │         │      │
    │       │       │         │      └─> Semicolon: Statement terminator
    │       │       │         └────────> Argument: String literal data passed into method
    │       │       └──────────────────> println(): Overloaded method of PrintStream class
    │       └──────────────────────────> out: static final PrintStream reference in System class
    └──────────────────────────────────> System: Predefined final class in java.lang package
\`\`\`

* **Why is \`System\` capitalized?** Because it is a class name (\`java.lang.System\`) following PascalCase.
* **What is \`out\`?** It is a \`public static final PrintStream\` variable inside \`System\`. Because it is \`static\`, we access it via class name: \`System.out\`.
* **What is \`println\`?** It is an instance method of \`java.io.PrintStream\`. It outputs data and automatically appends a newline.

---

## 💡 Key Takeaway
\`System.out.println()\` translates directly to: *"Access the \`System\` class, take its static \`out\` stream object, and call its \`println()\` method to output text."*`,

  // ==========================================
  // DAY 4 - TOPIC 07
  // ==========================================
  "d4-j1": `# 07. Java Compilation & The 5 Critical Class Naming Rules

## 1. Compilation & Execution Pipeline

\`\`\`
Demo.java (Source Code)
       │
   [ javac ]  ---> Compiler validates syntax, types, and generates bytecode
       │
Demo.class (Bytecode - Independent of hardware CPU)
       │
    [ java ]  ---> JVM loads bytecode, verifies security, and executes on CPU
       ▼
Console Output
\`\`\`

---

## 2. The 5 Rules of Class Names vs File Names

### Case 1: File Name and Class Name are Different (Non-Public Class)
* If \`Demo.java\` contains \`class Test { ... }\`:
  * Compilation command: \`javac Demo.java\`
  * Result: The compiler generates **\`Test.class\`** (named after the class, NOT the file!).
  * Execution command: \`java Test\` (must run the class name, \`java Demo\` will fail!).

### Case 2: Multiple Classes in a Single \`.java\` File
* If \`Sample.java\` contains:
  \`\`\`java
  class A {}
  class B {}
  class C {}
  \`\`\`
* Output upon \`javac Sample.java\`:
  * Generates **three separate files**: \`A.class\`, \`B.class\`, and \`C.class\`!
  * **Rule**: Number of generated \`.class\` files = Number of classes defined in the source file.

### Case 3: Public Class Rule
* If a class is declared \`public\`:
  \`\`\`java
  public class Student {}
  \`\`\`
* **Strict Rule**: The \`.java\` file name **MUST exactly match** the public class name (case-sensitive):
  * Allowed: \`Student.java\`
  * Forbidden: \`student.java\` or \`Demo.java\` ❌ (*Compile Error: class Student is public, should be declared in a file named Student.java*).

### Case 4: No Public Class Present
* If no class in the file is marked \`public\`:
  * The file can be saved with **any valid filename** (e.g., \`App.java\`, \`Main.java\`, \`Demo.java\`).

### Case 5: More Than One Public Class (Strictly Forbidden!)
* A single \`.java\` source file can have **AT MOST ONE \`public\` top-level class**.
  \`\`\`java
  // In Demo.java
  public class A {}
  public class B {} // ❌ COMPILE ERROR!
  \`\`\`
* **Why?** Because each public class requires a source file matching its exact name, which would create an impossible file-naming paradox.

---

## 💡 Quick Summary Table

| Scenario | Allowed? | Resulting \`.class\` files |
| :--- | :--- | :--- |
| \`class A\` in \`Demo.java\` | ✅ Yes | \`A.class\` |
| \`class A\`, \`class B\` in \`Demo.java\` | ✅ Yes | \`A.class\`, \`B.class\` |
| \`public class A\` in \`A.java\` | ✅ Yes | \`A.class\` |
| \`public class A\` in \`B.java\` | ❌ No | Compile-time Error |
| \`public class A\` & \`public class B\` in one file | ❌ No | Compile-time Error |`,

  // ==========================================
  // DAY 4 - TOPIC 08
  // ==========================================
  "d4-j2": `# 08. Deep Dive: The \`main()\` Method Explained

## 1. Why Each Keyword is Mandatory

* \`public\`:
  * **Why?** The JVM launcher initiates execution from outside the package. If \`main()\` were \`private\` or \`protected\`, the JVM would throw \`IllegalAccessException\` or \`NoSuchMethodError\`.
* \`static\`:
  * **Why?** If \`main()\` were not \`static\`, the JVM would have to instantiate the class before calling \`main()\`. This would raise ambiguities: *Which constructor to call? What arguments to pass? What if the constructor is private?* Making it \`static\` allows direct invocation: \`ClassName.main()\`.
* \`void\`:
  * **Why?** Once \`main()\` completes, the Java application terminates. The JVM does not inspect a return value. Application exit codes are communicated via \`System.exit(int status)\`.
* \`main\`:
  * **Why?** This exact identifier is hardcoded into the JVM specification as the entry point.
* \`String[] args\`:
  * **Why?** Accepts command-line arguments passed from the console (e.g., \`java App Hello 123\`). \`args[0]\` will be \`"Hello"\` and \`args[1]\` will be \`"123"\`.

---

## 2. Valid vs Invalid \`main()\` Signatures

### ✅ Legal Syntaxes (Accepted by JVM):
\`\`\`java
// 1. Standard
public static void main(String[] args)

// 2. Modifiers interchanged
static public void main(String[] args)

// 3. C-style bracket placement
public static void main(String args[])

// 4. Bracket spacing variation
public static void main(String []args)

// 5. Varargs (Variable Arguments - Java 5+)
public static void main(String... args)

// 6. Custom argument identifier
public static void main(String[] customName)

// 7. Extra legal modifiers
final public static void main(String[] args)
strictfp public static void main(String[] args)
\`\`\`

### ❌ Illegal Syntaxes (Fails to Compile or Won't Run):
\`\`\`java
// Compile error: Return type must precede method name
public void static main(String[] args) ❌

// Runtime error: JVM searches specifically for 'main'
public static void myMain(String[] args) ❌

// Runtime error: JVM only passes String[]
public static void main(int[] args) ❌

// Runtime error: Main method is not static
public void main(String[] args) ❌

// Runtime error: Must return void
public static int main(String[] args) ❌
\`\`\`

---

## 3. Command-Line Arguments Example
\`\`\`java
public class CmdDemo {
    public static void main(String[] args) {
        System.out.println("Argument count: " + args.length);
        for (int i = 0; i < args.length; i++) {
            System.out.println("Arg[" + i + "]: " + args[i]);
        }
    }
}
\`\`\`

\`\`\`bash
# Running with arguments:
java CmdDemo Alpha Beta Gamma
# Output:
# Argument count: 3
# Arg[0]: Alpha
# Arg[1]: Beta
# Arg[2]: Gamma
\`\`\`

---

## 💡 Key Takeaway
The signature \`public static void main(String[] args)\` is the strict universal gateway between the host operating system shell and the JVM runtime.`,

  // ==========================================
  // DAY 5 - TOPIC 09
  // ==========================================
  "d5-j1": `# 09. Compilation & Execution Architecture (JVM Internals)

## 1. Complete Architecture Diagram

\`\`\`
[ Java Source Code (.java) ]
              │
        [ javac Compiler ]
        ├─ 1. Syntax Validation
        ├─ 2. Type Checking
        ├─ 3. Comment Stripping
        └─ 4. Bytecode Generation
              │
       [ Bytecode (.class) ]
              │
              ▼
╔═══════════════════════════════════════════════════════════════════════╗
║                      JAVA VIRTUAL MACHINE (JVM)                       ║
║                                                                       ║
║  1. CLASS LOADER SUBSYSTEM                                            ║
║     [ Loading (Bootstrap, Platform, App) ]                            ║
║     [ Linking (Verify, Prepare, Resolve) ]                            ║
║     [ Initialization (Static blocks & fields) ]                       ║
║                                                                       ║
║  2. RUNTIME DATA AREAS (MEMORY)                                       ║
║     ┌──────────────┬──────────────┬──────────────┬─────────┬────────┐ ║
║     │ Method Area  │  Heap Area   │ Stack Area   │   PC    │ Native │ ║
║     │ (Class data, │  (Objects,   │ (Local vars, │Register │ Stack  │ ║
║     │  static vars)│   arrays)    │ stack frames)│         │        │ ║
║     │  [SHARED]    │  [SHARED]    │ [PER THREAD] │ [THREAD]│[THREAD]║ ║
║     └──────────────┴──────────────┴──────────────┴─────────┴────────┘ ║
║                                                                       ║
║  3. EXECUTION ENGINE                                                  ║
║     [ Interpreter ] ────> Executes bytecode instructions sequentially ║
║     [ JIT Compiler ] ───> Compiles hot code to direct Machine Code    ║
║     [ Garbage Collector ] > Automatically frees unreferenced heap RAM ║
╚═══════════════════════════════════════════════════════════════════════╝
              │
              ▼
   [ Native OS & Hardware CPU ]
\`\`\`

---

## 2. The 4 Responsibilities of the Java Compiler (\`javac\`)
1. **Syntax Checking**: Ensures braces match, keywords are valid, statements end with semicolons.
2. **Type Checking**: Validates that assigned expressions match declared variable types at compile time.
3. **Comment Stripping**: Removes all single-line (\`//\`), multi-line (\`/* */\`), and doc comments (\`/** */\`) so they occupy zero bytes in \`.class\` files.
4. **Bytecode Generation**: Emits compact, platform-neutral JVM opcodes into the \`.class\` file.

---

## 3. The 4 Phases of JVM Execution
1. **Class Loading**: Loads \`.class\` bytes into JVM memory via class loaders.
2. **Bytecode Verification**: Security check ensuring bytecode does not violate stack limits, perform unauthorized pointer manipulation, or breach security constraints.
3. **Memory Allocation**: JVM partitions memory into Method Area, Heap, Stack, PC Registers, and Native Stack.
4. **Execution**:
   * **Interpreter**: Fast startup, executes bytecode line-by-line.
   * **JIT (Just-In-Time) Compiler**: Identifies frequently executed loops/methods ("hotspots") and compiles them into direct CPU native code to achieve near-C++ speeds!

---

## 💡 Key Takeaway
Bytecode is portable; the JVM translates that portable bytecode into hardware-specific machine instructions on the fly.`,

  // ==========================================
  // DAY 5 - TOPIC 10
  // ==========================================
  "d5-j2": `# 10. Data Types in Java (Primitive vs Non-Primitive)

## 1. What is a Data Type?
A data type specifies the category of data a variable can store, its memory allocation size, and the legal operations that can be performed on it.

\`\`\`
                                  DATA TYPES IN JAVA
                                          │
            ┌─────────────────────────────┴─────────────────────────────┐
            ▼                                                           ▼
  PRIMITIVE DATA TYPES                                      NON-PRIMITIVE DATA TYPES
  (8 Built-in types)                                        (Reference types)
  Fixed size, value stored directly                         Created by programmer, holds reference (address)
  ┌───────────────┬────────────────┐                        ┌───────────────┬───────────────┐
  │ Numeric       │ Non-Numeric    │                        │ Classes       │ Interfaces    │
  ├───────────────┼────────────────┤                        │ Arrays        │ Strings       │
  │ Integral:     │ char (2 bytes) │                        │ Enums         │ Collections   │
  │  byte (1B)    │ boolean (1 bit)│                        └───────────────┴───────────────┘
  │  short (2B)   └────────────────┘
  │  int (4B)
  │  long (8B)
  │ Floating Point:
  │  float (4B)
  │  double (8B)
  └───────────────┘
\`\`\`

---

## 2. Complete Primitive Data Types Reference Table

| Type | Size | Default Value | Min Value | Max Value | Example Literal |
| :--- | :--- | :--- | :--- | :--- | :--- |
| \`byte\` | 1 byte (8 bits) | \`0\` | \`-128\` | \`127\` | \`byte b = 100;\` |
| \`short\` | 2 bytes (16 bits) | \`0\` | \`-32,768\` | \`32,767\` | \`short s = 5000;\` |
| \`int\` | 4 bytes (32 bits) | \`0\` | \`-2,147,483,648\` | \`2,147,483,647\` | \`int i = 70000;\` |
| \`long\` | 8 bytes (64 bits) | \`0L\` | \`-2^63\` | \`2^63 - 1\` | \`long l = 10000000000L;\` |
| \`float\` | 4 bytes (32 bits) | \`0.0f\` | \`~1.4E-45\` | \`~3.4E+38\` (6-7 digits precision) | \`float f = 5.75f;\` |
| \`double\`| 8 bytes (64 bits) | \`0.0d\` | \`~4.9E-324\`| \`~1.7E+308\` (15 digits precision) | \`double d = 19.99;\` |
| \`char\` | 2 bytes (16 bits) | \`'\\u0000'\` (null) | \`0\` | \`65,535\` (Unicode characters) | \`char c = 'A';\` |
| \`boolean\`| 1 bit (JVM dependent)| \`false\` | Only \`false\` | Only \`true\` | \`boolean flag = true;\` |

* **Notice**: In Java, \`boolean\` can **NEVER** be converted to \`0\` or \`1\`, unlike C/C++! \`if (1)\` is a compile-time error in Java.

---

## 3. Statically Typed vs Dynamically Typed Languages
* **Statically Typed (Java, C, C++, Go)**:
  * Variable types must be declared at write-time: \`int score = 95;\`.
  * Checked by compiler before program runs; catches bugs before deployment.
* **Dynamically Typed (Python, JavaScript, Ruby)**:
  * Variable type is tied to the runtime value: \`score = 95; score = "Ninety Five";\`.
  * Checked at runtime; faster prototyping but potential runtime crashes.

---

## 💡 Key Takeaway
Primitives store values directly in Stack memory for maximum performance. Non-primitives store object instances on the Heap with their memory references held in the Stack.`,

  // ==========================================
  // DAY 6 - TOPIC 11
  // ==========================================
  "d6-j1": `# 11. Type Casting, Wrapper Classes & Autoboxing

## 1. What is Type Casting?
Type casting is the process of converting a variable from one data type into another compatible data type.

\`\`\`
WIDENING (Implicit - Automatic by Compiler):
byte ──> short ──> int ──> long ──> float ──> double
         char ─────┘
(Safe, smaller container to larger container, no data loss)

NARROWING (Explicit - Manual by Programmer):
double ──> float ──> long ──> int ──> short ──> byte
(Risk of truncation and overflow! Requires cast syntax: (type) value)
\`\`\`

---

## 2. Widening vs Narrowing Code Examples

### Widening (Implicit):
\`\`\`java
int myInt = 100;
double myDouble = myInt; // Automatic conversion: 100.0
System.out.println(myDouble); // 100.0
\`\`\`

### Narrowing (Explicit):
\`\`\`java
double myDouble = 9.78;
int myInt = (int) myDouble; // Manual cast: truncates decimals!
System.out.println(myInt); // 9 (Fractional part .78 lost!)

// Overflow Example:
int bigNumber = 130;
byte smallByte = (byte) bigNumber; 
System.out.println(smallByte); // -126 (Byte range is -128 to 127; wraps around!)
\`\`\`

---

## 3. Why is Java Not a 100% Pure Object-Oriented Language?
1. **Supports 8 Primitive Types**: \`int\`, \`char\`, \`float\`, etc., are primitive values, not object instances.
2. **Static Methods & Variables**: Can be called without creating an object (\`Math.sqrt()\`).
3. In a 100% pure OOP language (like Smalltalk), everything—even numbers—must be an object.

---

## 4. The 8 Wrapper Classes (\`java.lang\`)
Wrapper classes wrap primitive types into object instances.

| Primitive | Wrapper Class | Utility Parse Method |
| :--- | :--- | :--- |
| \`byte\` | \`Byte\` | \`Byte.parseByte("10")\` |
| \`short\` | \`Short\` | \`Short.parseShort("20")\` |
| \`int\` | \`Integer\` | \`Integer.parseInt("123")\` |
| \`long\` | \`Long\` | \`Long.parseLong("100000")\` |
| \`float\` | \`Float\` | \`Float.parseFloat("3.14")\` |
| \`double\` | \`Double\` | \`Double.parseDouble("99.99")\` |
| \`char\` | \`Character\` | \`Character.isLetter('A')\` |
| \`boolean\` | \`Boolean\` | \`Boolean.parseBoolean("true")\` |

* **Why Wrapper Classes are Essential**:
  * Java Collections (\`ArrayList\`, \`HashMap\`) can **only store objects**, not primitives (\`ArrayList<Integer>\` is valid, \`ArrayList<int>\` is illegal).

---

## 5. Autoboxing & Unboxing (Introduced in Java 5)
* **Autoboxing**: Automatic conversion of primitive to wrapper object:
  \`\`\`java
  int a = 50;
  Integer obj = a; // Compiler converts to Integer.valueOf(a)
  \`\`\`
* **Unboxing**: Automatic conversion of wrapper object to primitive:
  \`\`\`java
  Integer obj = 100;
  int b = obj;     // Compiler converts to obj.intValue()
  \`\`\`

---

## 💡 Key Takeaway
Widening is safe and automatic; Narrowing requires explicit casting and can lose decimal precision or overflow.`,

  // ==========================================
  // DAY 6 - TOPIC 12
  // ==========================================
  "d6-j2": `# 12. Number Systems in Java (Binary, Octal, Decimal, Hex)

## 1. Overview of Number Systems
Computers process data purely using numeric bits. Characters in Java use **16-bit Unicode** (\`char ch = 'A'\` has Unicode value 65). Java supports 4 distinct numeric radix bases:

\`\`\`
+-------------------------------------------------------------------------+
|                         JAVA NUMBER SYSTEMS                             |
+-------------------+---------+-----------------------+-------------------+
| System            | Base    | Digits Allowed        | Java Prefix       |
+-------------------+---------+-----------------------+-------------------+
| 1. Binary         | Base 2  | 0, 1                  | 0b or 0B (Java 7+)|
| 2. Octal          | Base 8  | 0 - 7                 | Leading 0         |
| 3. Decimal        | Base 10 | 0 - 9                 | None (Default)    |
| 4. Hexadecimal    | Base 16 | 0 - 9, A - F (a - f)  | 0x or 0X          |
+-------------------+---------+-----------------------+-------------------+
\`\`\`

---

## 2. Java Code Demonstration for All 4 Bases

\`\`\`java
public class NumberSystemDemo {
    public static void main(String[] args) {
        // All represent the decimal value 123:
        int dec = 123;           // Decimal (Base 10)
        int bin = 0b1111011;     // Binary (Base 2: 64+32+16+8+2+1 = 123)
        int oct = 0173;          // Octal (Base 8: 1*64 + 7*8 + 3 = 123)
        int hex = 0x7B;          // Hexadecimal (Base 16: 7*16 + 11 = 123)

        System.out.println("Decimal: " + dec); // 123
        System.out.println("Binary:  " + bin); // 123
        System.out.println("Octal:   " + oct); // 123
        System.out.println("Hex:     " + hex); // 123

        // Built-in Conversion Methods:
        System.out.println("123 to Binary: " + Integer.toBinaryString(123)); // 1111011
        System.out.println("123 to Octal:  " + Integer.toOctalString(123));  // 173
        System.out.println("123 to Hex:    " + Integer.toHexString(123));    // 7b
    }
}
\`\`\`

---

## 3. Common Pitfalls & Traps ⚠️
* **The Octal Trap**:
  \`\`\`java
  int x = 025; // Leading 0 makes it OCTAL! (2*8 + 5 = 21 in decimal)
  System.out.println(x); // Prints 21, NOT 25!
  
  int y = 089; // ❌ COMPILE ERROR! Digits 8 and 9 do not exist in Base 8!
  \`\`\`
* **Digit Separator (\`_\` in numeric literals - Java 7+)**:
  \`\`\`java
  int creditCard = 1234_5678_9012L;
  int million = 1_000_000;
  // Underscores improve visual readability and are ignored by javac compiler.
  \`\`\`

---

## 💡 Key Takeaway
Never put a leading zero on integer literals unless you intentionally want Octal numbers!`,

  // ==========================================
  // DAY 7 - TOPIC 13
  // ==========================================
  "d7-j1": `# 13. Variables in Java: Local vs Instance vs Static

## 1. What is a Variable?
A variable is a named storage location in computer memory that holds data during program execution.

\`\`\`
┌──────────────────────────────────────────────────────────┐
│                      MEMORY ARCHITECTURE                 │
├──────────────────────────┬───────────────────────────────┤
│ METHOD AREA (METASPACE)  │ HEAP MEMORY                   │
│ • Static Variables       │ • Objects instances           │
│ • Class bytecode metadata│ • Instance Variables          │
├──────────────────────────┴───────────────────────────────┤
│ THREAD CALL STACK                                        │
│ • Stack Frames (Methods)                                 │
│ • Local Variables (Must be explicitly initialized!)      │
└──────────────────────────────────────────────────────────┘
\`\`\`

---

## 2. The 3 Types of Variables in Java

### 1. Local Variables:
* **Declared**: Inside methods, constructors, or block brackets \`{ ... }\`.
* **Scope**: Only accessible inside the enclosing block.
* **Storage**: Allocated on the **Stack**.
* **Default Values**: **NO DEFAULT VALUE**. Must be initialized before use or compiler throws: \`variable x might not have been initialized\`.

### 2. Instance Variables:
* **Declared**: Inside a class, but outside all methods.
* **Scope**: Accessible throughout the class and externally via object instance (\`obj.field\`).
* **Storage**: Allocated in **Heap Memory** inside the object.
* **Default Values**: Initialized automatically (\`0\`, \`0.0\`, \`false\`, \`null\`).

### 3. Static Variables (Class Variables):
* **Declared**: With the \`static\` keyword inside a class.
* **Scope**: Shared by **all objects** of the class; accessible via \`ClassName.varName\`.
* **Storage**: Allocated in **Method Area (Metaspace)**.
* **Default Values**: Initialized automatically same as instance variables.

---

## 3. Comparison Matrix: Local vs Instance vs Static

| Feature | Local Variable | Instance Variable | Static Variable |
| :--- | :--- | :--- | :--- |
| **Declaration Scope** | Inside method/block | Inside class, outside methods | Inside class with \`static\` keyword |
| **Memory Location** | Thread Stack | Heap (inside object) | Method Area (Metaspace) |
| **Creation Time** | When method/block starts | When object is created (\`new\`) | When class is loaded by JVM |
| **Destruction Time** | When method returns | When object is Garbage Collected | When class is unloaded |
| **Default Value?** | ❌ None (Must initialize) | ✅ Yes (\`0\`, \`null\`, \`false\`) | ✅ Yes (\`0\`, \`null\`, \`false\`) |
| **Copies in Memory** | Created per method call | One copy per object instance | **Exactly one shared copy** across entire JVM |
| **Access Syntax** | Direct name only | \`objectRef.variable\` | \`ClassName.variable\` |

---

## 4. Code Example Demonstrating All Three
\`\`\`java
public class VariableDemo {
    // 1. Static Variable (shared across all instances)
    static int companyId = 5001;

    // 2. Instance Variable (each object gets its own copy)
    String employeeName;

    public void calculateSalary(int bonus) {
        // 3. Local Variable (lives only inside this method call)
        int baseSalary = 60000;
        int total = baseSalary + bonus;
        System.out.println(employeeName + " total: " + total);
    }
}
\`\`\`

---

## 💡 Key Takeaway
Local variables live on the Stack and must be manually initialized. Instance variables live on the Heap inside objects. Static variables live once in Metaspace and are shared across all instances.`,

  // ==========================================
  // DAY 7 - TOPIC 14
  // ==========================================
  "d7-j2": `# 14. Java Tokens: Literals & Operators Deep Dive

## 1. What is a Token?
A **token** is the smallest individual meaningful unit (building block) recognized by the Java compiler.

\`\`\`
System . out . println ( "Hello" ) ;
  │    │  │  │    │    │    │    │ │
  │    │  │  │    │    │    │    │ └─> Separator (Semicolon)
  │    │  │  │    │    │    │    └───> Separator (Closing paren)
  │    │  │  │    │    │    └────────> Literal (String)
  │    │  │  │    │    └─────────────> Separator (Opening paren)
  │    │  │  │    └──────────────────> Identifier (Method name)
  │    │  │  └───────────────────────> Separator (Dot)
  │    │  └──────────────────────────> Identifier (Field name)
  │    └─────────────────────────────> Separator (Dot)
  └──────────────────────────────────> Identifier (Class name)
\`\`\`

---

## 2. The 6 Types of Tokens in Java
1. **Keywords**: Reserved words with fixed semantics (\`class\`, \`public\`, \`static\`, \`void\`, \`if\`, \`while\`, \`return\`).
2. **Identifiers**: Programmer-defined names for classes, variables, methods, packages.
3. **Literals**: Constant data values typed directly in code (\`10\`, \`3.14f\`, \`'Z'\`, \`"Java"\`, \`true\`, \`null\`).
4. **Operators**: Symbols performing calculations and logical operations (\`+\`, \`-\`, \`*\`, \`&&\`, \`||\`, \`==\`).
5. **Separators (Punctuators)**: Punctuation symbols structuring code (\`()\`, \`{}\`, \`[]\`, \`;\`, \`,\`, \`.\`).
6. **Comments**: Human annotations stripped out during compilation (\`//\`, \`/* */\`, \`/** */\`).

---

## 3. Comprehensive Breakdown of Operators

| Operator Category | Symbols | Description / Example |
| :--- | :--- | :--- |
| **Arithmetic** | \`+\`, \`-\`, \`*\`, \`/\`, \`%\` | \`10 % 3\` returns remainder \`1\` |
| **Relational** | \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\` | \`5 > 3\` returns \`true\` |
| **Logical** | \`&&\` (AND), \`||\` (OR), \`!\` (NOT) | Short-circuit evaluation |
| **Bitwise** | \`&\`, \`|\`, \`^\`, \`~\`, \`<<\`, \`>>\`, \`>>>\` | Operates on individual binary bits |
| **Assignment** | \`=\`, \`+=\`, \`-=\`, \`*=\`, \`/=\`, \`%=\` | \`x += 5\` is \`x = x + 5\` |
| **Unary** | \`++\` (inc), \`--\` (dec), \`+\`, \`-\` | Pre-increment \`++x\` vs Post-increment \`x++\` |
| **Ternary (Conditional)** | \`? :\` | \`condition ? trueVal : falseVal\` |
| **Type Comparison** | \`instanceof\` | \`obj instanceof String\` returns boolean |

---

## 4. Pre-Increment vs Post-Increment Gotcha
\`\`\`java
public class OperatorTrap {
    public static void main(String[] args) {
        int a = 5;
        int b = ++a; // Pre-increment: 'a' incremented to 6 first, then assigned to b.
        System.out.println("a=" + a + ", b=" + b); // a=6, b=6

        int x = 5;
        int y = x++; // Post-increment: current value 5 assigned to y first, then x becomes 6.
        System.out.println("x=" + x + ", y=" + y); // x=6, y=5
    }
}
\`\`\`

---

## 💡 Key Takeaway
Tokens are the atomic units of Java syntax. Understanding operator precedence and evaluation order prevents subtle logic bugs.`
};

export function getLectureNote(taskId) {
  return lectureNotesData[taskId] || null;
}
