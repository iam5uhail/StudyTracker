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
,
  // ==========================================
  // DAY 1 - DSA: TWO SUM II - INPUT ARRAY IS SORTED
  // ==========================================
  "d1-dsa": `# Array Data Structure & Two-Pointer Pattern: Two Sum II

## 1. Deep Dive: Array Data Structure Fundamentals
An **Array** is a linear data structure containing contiguous memory locations that store elements of the same data type.

\`\`\`
ARRAY IN MEMORY (Index 0 to 4):
Address:  1000   1004   1008   1012   1016
Element: [  2  |   7  |  11  |  15  |  19  ]
Index:      0      1      2      3      4
\`\`\`

* **Memory Address Calculation**:
  * Address(i) = Base Address + i * (Size of Data Type)
* **Why Arrays are Ultra-Fast**:
  * **O(1) Random Access**: Calculating the exact memory address is a single CPU arithmetic step.
  * **Hardware Cache Locality**: Elements are contiguously stored in physical RAM, allowing CPU hardware prefetchers to cache adjacent elements directly into high-speed L1/L2 cache.
* **Limitations**:
  * Fixed capacity once allocated.
  * Insertions and deletions at the front or middle require shifting trailing elements (O(N)).

---

## 2. The Two-Pointers Pattern Explained
Instead of checking every pair with nested loops (O(N^2) brute force), the **Two-Pointer technique** uses two indices moving strategically across the array to solve the problem in **linear O(N) time** and **O(1) extra space**.

\`\`\`
CONVERGING TWO-POINTERS:
  Left (0) ───────────────────>   <─────────────────── Right (n - 1)
  (Starts at smallest element)                        (Starts at largest element)
\`\`\`

* **When to use Two-Pointers?**
  1. The array is **sorted** (or can be sorted).
  2. We are searching for pairs, triplets, palindromes, or subsegments.
  3. Monotonic decision: Moving left increases the sum; moving right decreases the sum.

---

## 3. What is the Question Asking? (LeetCode 167: Two Sum II)
* **Problem**: You are given a **1-indexed sorted array** of integers \`numbers\` and a target value \`target\`.
* **Goal**: Find two numbers whose sum equals \`target\`. Return their 1-based indices \`[index1, index2]\`.
* **Rules & Constraints**:
  * Exactly **one unique solution** exists.
  * You cannot reuse the same element twice.
  * You must use **O(1) auxiliary space** (cannot allocate a HashMap!).
* **Example**:
  * Input: \`numbers = [2, 7, 11, 15], target = 9\`
  * Pair: \`2 + 7 = 9\`
  * 1-based indices: \`[1, 2]\`

---

## 4. Visual Dry Run / Pointer Movement

\`\`\`
numbers = [2, 7, 11, 15], target = 9

Step 1:
  [ 2 ,  7 , 11 , 15 ]
    ▲              ▲
   Left          Right
  Current Sum = 2 + 15 = 17
  17 > 9 (Too large!). 15 is too big to pair with anything.
  Action: Move Right inward (right--).

Step 2:
  [ 2 ,  7 , 11 , 15 ]
    ▲         ▲
   Left     Right
  Current Sum = 2 + 11 = 13
  13 > 9 (Still too large!).
  Action: Move Right inward (right--).

Step 3:
  [ 2 ,  7 , 11 , 15 ]
    ▲    ▲
   Left Right
  Current Sum = 2 + 7 = 9
  9 == target! MATCH FOUND!
  Output: [left + 1, right + 1] -> [1, 2]
\`\`\`

---

## 5. Optimal Java Solution

\`\`\`java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int left = 0;
        int right = numbers.length - 1;

        while (left < right) {
            int currentSum = numbers[left] + numbers[right];

            if (currentSum == target) {
                // Return 1-based indices
                return new int[] { left + 1, right + 1 };
            } else if (currentSum < target) {
                // Sum too small -> move left pointer right to increase value
                left++;
            } else {
                // Sum too big -> move right pointer left to decrease value
                right--;
            }
        }

        return new int[] { -1, -1 };
    }
}
\`\`\`

---

## 6. Complexity Analysis
* **Time Complexity**: **O(N)** — At each step, either left advances or right retreats. The array is traversed at most once.
* **Space Complexity**: **O(1)** — Zero extra data structures allocated.

---

## 💡 Key Takeaway
Sorted order enables **monotonicity**. Because the array is ordered, if the sum is too small, the only way to increase it is \`left++\`; if the sum is too large, the only way to decrease it is \`right--\`.`,

  // ==========================================
  // DAY 2 - DSA: 3SUM
  // ==========================================
  "d2-dsa": `# Two-Pointer Pattern: 3Sum (Triplet Sum to Zero)

## 1. What is the Question Asking? (LeetCode 15)
* **Problem**: Given an integer array \`nums\`, return all unique triplets \`[nums[i], nums[j], nums[k]]\` such that:
  1. \`i != j != k\` (all 3 indices are distinct).
  2. \`nums[i] + nums[j] + nums[k] == 0\`.
* **The Critical Trap**: The solution set **must not contain duplicate triplets**!
* **Example**:
  * Input: \`nums = [-1, 0, 1, 2, -1, -4]\`
  * Valid unique triplets: \`[[-1, -1, 2], [-1, 0, 1]]\`
  * Notice: Even though \`-1\` appears twice, we only output \`[-1, 0, 1]\` once!

---

## 2. Intuition: Reducing 3Sum to 2Sum
* Brute force checks all triplets with 3 nested loops: **O(N^3)** (Time Limit Exceeded).
* **Two-Pointer Reduction**:
  1. **Sort the array first**: Sorting takes O(N log N) time and lets us control duplicates and apply Two-Pointers.
  2. **Fix the first element \`nums[i]\`**: Loop \`i\` from \`0\` to \`n - 3\`.
  3. Now we need to find two numbers from \`i + 1\` to \`n - 1\` whose sum is \`-nums[i]\`!
     nums[j] + nums[k] = -nums[i]
  4. Use converging Two-Pointers (\`left = i + 1\`, \`right = n - 1\`).

\`\`\`
SORTED ARRAY:
[ -4 , -1 , -1 ,  0 ,  1 ,  2 ]
   ▲    ▲                   ▲
   i   left               right
Fix i  ───> Two-Pointer search for target: -nums[i]
\`\`\`

---

## 3. How to Eliminate Duplicates (The Crucial Step!)
1. **For the fixed \`i\`**:
   * If \`i > 0 && nums[i] == nums[i - 1]\`, skip with \`continue\`.
2. **For \`left\` and \`right\` when a triplet is found**:
   * Skip identical adjacent elements:
     \`\`\`java
     while (left < right && nums[left] == nums[left + 1]) left++;
     while (left < right && nums[right] == nums[right - 1]) right--;
     left++;
     right--;
     \`\`\`

---

## 4. Optimal Java Solution

\`\`\`java
import java.util.*;

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || nums.length < 3) return result;

        // Step 1: Sort the array
        Arrays.sort(nums);

        for (int i = 0; i < nums.length - 2; i++) {
            // Optimization: If smallest element > 0, sum can never be 0
            if (nums[i] > 0) break;

            // Skip duplicate fixed elements
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int left = i + 1;
            int right = nums.length - 1;
            int target = -nums[i];

            while (left < right) {
                int sum = nums[left] + nums[right];

                if (sum == target) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));

                    // Skip duplicate left values
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    // Skip duplicate right values
                    while (left < right && nums[right] == nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }
}
\`\`\`

---

## 5. Complexity Analysis
* **Time Complexity**: **O(N^2)** — Sorting is O(N log N). The outer loop runs N times, and the inner two-pointer loop runs O(N). Total = O(N^2).
* **Space Complexity**: **O(1)** auxiliary space.

---

## 💡 Key Takeaway
3Sum = Fix 1 element + Run Two-Pointer 2Sum on the remaining sorted suffix. Skip duplicates at every pointer to prevent duplicate results.`,

  // ==========================================
  // DAY 3 - DSA: SORT COLORS
  // ==========================================
  "d3-dsa": `# Two-Pointer Pattern: Sort Colors (Dutch National Flag)

## 1. What is the Question Asking? (LeetCode 75)
* **Problem**: Given an array \`nums\` containing \`n\` objects colored red (0), white (1), and blue (2), sort them **in-place** so that objects of the same color are adjacent, with the colors in the order 0, 1, and 2.
* **Strict Constraints**:
  * You cannot use the library's \`Arrays.sort()\`.
  * Must solve in **one single pass** using **O(1) constant extra space**.
* **Example**:
  * Input: \`nums = [2, 0, 2, 1, 1, 0]\`
  * Output: \`[0, 0, 1, 1, 2, 2]\`

---

## 2. Intuition: Dutch National Flag Algorithm
Designed by computer scientist **Edsger W. Dijkstra**, this algorithm partitions an array into 3 sections using 3 pointers:

\`\`\`
DUTCH NATIONAL FLAG PARTITIONS:
[   0s Region   |   1s Region   |   Unsorted ?   |   2s Region   ]
0            low-1             mid-1            high           n-1
\`\`\`

* **The 3 Pointers**:
  * \`low\`: Boundary for \`0\`s (Everything before \`low\` is \`0\`). Starts at \`0\`.
  * \`mid\`: Current element being inspected. Starts at \`0\`.
  * \`high\`: Boundary for \`2\`s (Everything after \`high\` is \`2\`). Starts at \`n - 1\`.

---

## 3. The 3 Transition Rules
As we iterate while \`mid <= high\`:
1. **If \`nums[mid] == 0\`**:
   * Belongs in the 0s region! Swap \`nums[low]\` and \`nums[mid]\`.
   * Increment both: \`low++\`, \`mid++\`.
2. **If \`nums[mid] == 1\`**:
   * Belongs in the 1s region! Already in the middle, so leave it.
   * Increment: \`mid++\`.
3. **If \`nums[mid] == 2\`**:
   * Belongs in the 2s region! Swap \`nums[mid]\` and \`nums[high]\`.
   * Decrement: \`high--\`.
   * ⚠️ **CRUCIAL**: Do **NOT** increment \`mid\` here! The value swapped from \`high\` has not been inspected yet and must be checked on the next iteration!

---

## 4. Visual Dry Run

\`\`\`
nums = [2, 0, 2, 1, 1, 0]
Initial: low = 0, mid = 0, high = 5

1. nums[mid] is 2 -> swap(nums[0], nums[5]), high becomes 4
   [0, 0, 2, 1, 1, 2]  (mid still 0)

2. nums[mid] is 0 -> swap(nums[0], nums[0]), low=1, mid=1
   [0, 0, 2, 1, 1, 2]

3. nums[mid] is 0 -> swap(nums[1], nums[1]), low=2, mid=2
   [0, 0, 2, 1, 1, 2]

4. nums[mid] is 2 -> swap(nums[2], nums[4]), high=3
   [0, 0, 1, 1, 2, 2]  (mid still 2)

5. nums[mid] is 1 -> mid=3
6. nums[mid] is 1 -> mid=4. Now mid > high -> TERMINATE!
Final: [0, 0, 1, 1, 2, 2] ✅
\`\`\`

---

## 5. Optimal Java Solution

\`\`\`java
class Solution {
    public void sortColors(int[] nums) {
        int low = 0;
        int mid = 0;
        int high = nums.length - 1;

        while (mid <= high) {
            if (nums[mid] == 0) {
                swap(nums, low, mid);
                low++;
                mid++;
            } else if (nums[mid] == 1) {
                mid++;
            } else {
                // nums[mid] == 2
                swap(nums, mid, high);
                high--;
                // Note: Do NOT advance mid here!
            }
        }
    }

    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
\`\`\`

---

## 6. Complexity Analysis
* **Time Complexity**: **O(N)** — Single pass over the array with 3 pointers.
* **Space Complexity**: **O(1)** — In-place element swaps.

---

## 💡 Key Takeaway
Whenever you need to partition an array into 3 categories (low, mid, high), use Dijkstra's Dutch National Flag 3-pointer technique!`,

  // ==========================================
  // DAY 4 - DSA: MOVE ZEROES
  // ==========================================
  "d4-dsa": `# Two-Pointer Pattern: Move Zeroes (Fast & Slow Reader/Writer)

## 1. What is the Question Asking? (LeetCode 283)
* **Problem**: Given an integer array \`nums\`, move all \`0\`s to the end of it while maintaining the relative order of the non-zero elements.
* **Constraints**:
  * You must do this **in-place** without making a copy of the array.
  * Minimize the total number of operations.
* **Example**:
  * Input: \`nums = [0, 1, 0, 3, 12]\`
  * Output: \`[1, 3, 12, 0, 0]\`

---

## 2. Intuition: Reader & Writer Pointers
Instead of shifting elements on every zero (which is O(N^2)), we use **two pointers moving in the same direction**:
* **Writer Pointer (\`slow\`)**: Marks the destination index where the next non-zero element should be placed.
* **Reader Pointer (\`fast\`)**: Scans through every element of the array.

\`\`\`
FAST & SLOW POINTER TRAVERSAL:
[ 0 , 1 , 0 , 3 , 12 ]
  ▲   ▲
slow fast (scans forward looking for non-zero)
\`\`\`

---

## 3. The Swap Technique
Whenever \`nums[fast] != 0\`:
1. Swap \`nums[slow]\` with \`nums[fast]\`.
2. Advance \`slow++\`.
* If \`slow == fast\` (no zeros encountered yet), swapping an element with itself is a no-op.
* Once a zero is encountered, \`slow\` stays at the zero while \`fast\` moves forward to find the next non-zero number to swap into \`slow\`'s position!

---

## 4. Visual Dry Run

\`\`\`
nums = [0, 1, 0, 3, 12]

Init: slow = 0, fast = 0
fast = 0: nums[0] is 0 -> do nothing, fast advances

fast = 1: nums[1] is 1 (!= 0)
  swap(nums[slow=0], nums[fast=1])
  Array becomes: [1, 0, 0, 3, 12]
  slow becomes 1

fast = 2: nums[2] is 0 -> do nothing

fast = 3: nums[3] is 3 (!= 0)
  swap(nums[slow=1], nums[fast=3])
  Array becomes: [1, 3, 0, 0, 12]
  slow becomes 2

fast = 4: nums[4] is 12 (!= 0)
  swap(nums[slow=2], nums[fast=4])
  Array becomes: [1, 3, 12, 0, 0]
  slow becomes 3

Result: [1, 3, 12, 0, 0] ✅
\`\`\`

---

## 5. Optimal Java Solution

\`\`\`java
class Solution {
    public void moveZeroes(int[] nums) {
        int slow = 0;

        for (int fast = 0; fast < nums.length; fast++) {
            if (nums[fast] != 0) {
                // Swap non-zero element forward to slow pointer
                int temp = nums[slow];
                nums[slow] = nums[fast];
                nums[fast] = temp;

                slow++;
            }
        }
    }
}
\`\`\`

---

## 6. Complexity Analysis
* **Time Complexity**: **O(N)** — Fast pointer touches each element exactly once.
* **Space Complexity**: **O(1)** — In-place array modification.

---

## 💡 Key Takeaway
The Reader/Writer pattern is the standard way to partition arrays in-place while preserving relative order (used in removing duplicates, moving zeroes, and compacting streams).`,

  // ==========================================
  // DAY 5 - DSA: CONTAINER WITH MOST WATER
  // ==========================================
  "d5-dsa": `# Two-Pointer Pattern: Container With Most Water

## 1. What is the Question Asking? (LeetCode 11)
* **Problem**: You are given an integer array \`height\` of length \`n\`. There are \`n\` vertical lines drawn such that the two endpoints of the \`i\`-th line are \`(i, 0)\` and \`(i, height[i])\`.
* **Goal**: Find two lines that together with the x-axis form a container, such that the container contains the **most water**.
* **Formula for Water Volume (Area)**:
  Area = min(height[left], height[right]) * (right - left)
* **Example**:
  * Input: \`height = [1, 8, 6, 2, 5, 4, 8, 3, 7]\`
  * Optimal pair: Index 1 (height 8) and Index 8 (height 7)
  * Area: \`min(8, 7) * (8 - 1) = 7 * 7 = 49\`
  * Output: \`49\`

---

## 2. Why Brute Force Fails
* Brute force evaluates all pairs: **O(N^2)**. For N = 100,000, N^2 = 10^10 operations (Time Limit Exceeded).

---

## 3. Two-Pointer Greedy Shrinking Intuition
1. **Start with maximum width**:
   * \`left = 0\`, \`right = n - 1\`.
2. **How to move pointers?**
   * The height of the water is **strictly constrained by the shorter line**:
     Height = min(height[left], height[right])
   * As we move pointers inward, the width (right - left) ALWAYS decreases by 1!
   * If we move the **taller line**, the bottleneck remains the shorter line, and the width is smaller, so area **CAN NEVER INCREASE**!
   * The **ONLY CHANCE** to find a larger area is to move the **shorter line**, hoping to find a much taller line that compensates for the lost width!

\`\`\`
GREEDY CONVERGENCE:
  h[left] = 1, h[right] = 7
  Width = 8, Area = 1 * 8 = 8
  Since h[left] is shorter, moving right inward CANNOT improve area.
  Must advance: left++
\`\`\`

---

## 4. Optimal Java Solution

\`\`\`java
class Solution {
    public int maxArea(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int maxWater = 0;

        while (left < right) {
            int width = right - left;
            int h = Math.min(height[left], height[right]);
            int currentArea = width * h;

            maxWater = Math.max(maxWater, currentArea);

            // Move the pointer pointing to the shorter bar
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxWater;
    }
}
\`\`\`

---

## 5. Complexity Analysis
* **Time Complexity**: **O(N)** — Left and right pointers start at ends and meet in the middle; each element visited at most once.
* **Space Complexity**: **O(1)** — Only integer variables for width, height, and max.

---

## 💡 Key Takeaway
Always eliminate the bottleneck! When width is shrinking, the only hope for a bigger area is finding a taller height, so you must abandon the shorter line.`,

  // ==========================================
  // DAY 6 - DSA: TRAPPING RAIN WATER
  // ==========================================
  "d6-dsa": `# Two-Pointer Pattern: Trapping Rain Water

## 1. What is the Question Asking? (LeetCode 42)
* **Problem**: Given \`n\` non-negative integers representing an elevation map where the width of each bar is \`1\`, compute how much water it can trap after raining.
* **Core Insight**: How much water can sit directly on top of bar \`i\`?
  Water at i = max(0, min(leftMax, rightMax) - height[i])
  Water above any bar is determined by the minimum of the highest wall to its left and the highest wall to its right, minus its own height!

\`\`\`
ELEVATION MAP & TRAPPED WATER:
        █
    █~~~█~█
  █~█~█~███
[ 0,1,0,2,1,0,1,3,2,1,2,1 ]
Water trapped (represented by ~) = 6 units
\`\`\`

---

## 2. Why Two-Pointers is Optimal (O(1) Space)
* Traditional Prefix Max approach uses two auxiliary arrays (\`leftMax[]\` and \`rightMax[]\`) taking **O(N) space**.
* **Two-Pointer Breakthrough**:
  * Maintain \`left = 0\`, \`right = n - 1\`, \`leftMax = 0\`, \`rightMax = 0\`.
  * If \`height[left] < height[right]\`:
    * We know for certain that \`leftMax < height[right] <= rightMax\`.
    * Therefore, the bottleneck is guaranteed to be \`leftMax\`! We don't even need to know the exact \`rightMax\`!
    * Water at \`left\` = \`leftMax - height[left]\`. Advance \`left++\`.
  * Else (\`height[right] <= height[left]\`):
    * The bottleneck is guaranteed to be \`rightMax\`!
    * Water at \`right\` = \`rightMax - height[right]\`. Retreat \`right--\`.

---

## 3. Optimal Java Solution

\`\`\`java
class Solution {
    public int trap(int[] height) {
        if (height == null || height.length < 3) return 0;

        int left = 0;
        int right = height.length - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    totalWater += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    totalWater += rightMax - height[right];
                }
                right--;
            }
        }

        return totalWater;
    }
}
\`\`\`

---

## 4. Complexity Analysis
* **Time Complexity**: **O(N)** — Single pass from both ends.
* **Space Complexity**: **O(1)** — Replaces two O(N) arrays with four integer pointers.

---

## 💡 Key Takeaway
You don't need both maxes to calculate trapped water—you only need to know which side has the smaller max, because the smaller max is the true bottleneck!`,

  // ==========================================
  // DAY 7 - DSA: MAXIMUM SUM SUBARRAY OF SIZE K
  // ==========================================
  "d7-dsa": `# Sliding Window Pattern: Maximum Sum Subarray of Size K

## 1. What is the Question Asking? (LeetCode 643 / Classic Pattern)
* **Problem**: Given an array of integers \`nums\` and an integer \`k\`, find the contiguous subarray of fixed length \`k\` that has the maximum sum (or average).
* **Example**:
  * Input: \`nums = [1, 12, -5, -6, 50, 3], k = 4\`
  * Subarrays of size 4:
    * \`[1, 12, -5, -6]\` -> Sum = 2
    * \`[12, -5, -6, 50]\` -> Sum = 51
    * \`[-5, -6, 50, 3]\` -> Sum = 42
  * Maximum sum is \`51\` (Subarray: \`[12, -5, -6, 50]\`).

---

## 2. Sliding Window Technique Explained
Instead of recalculating the sum of all \`k\` elements from scratch every time (which takes O(N * K)), we use a **Sliding Window**:

\`\`\`
SLIDING WINDOW (Size k = 4):
[ 1 , 12 , -5 , -6 , 50 , 3 ]
  └───────┬──────┘
       Window 1: sum = 2

Slide window 1 step to the right:
[ 1 , 12 , -5 , -6 , 50 , 3 ]
      └───────┬──────┘
  Subtract outgoing (1) + Add incoming (50):
  new_sum = 2 - 1 + 50 = 51! (Takes O(1) time!)
\`\`\`

* **The O(1) Window Transition Formula**:
  Current Sum = Previous Sum - nums[i - k] + nums[i]

---

## 3. Optimal Java Solution

\`\`\`java
class Solution {
    public double findMaxAverage(int[] nums, int k) {
        // Step 1: Calculate sum of first window of size k
        double windowSum = 0;
        for (int i = 0; i < k; i++) {
            windowSum += nums[i];
        }

        double maxSum = windowSum;

        // Step 2: Slide the window across the remaining elements
        for (int i = k; i < nums.length; i++) {
            // Add incoming element at i, subtract outgoing element at i - k
            windowSum += nums[i] - nums[i - k];
            maxSum = Math.max(maxSum, windowSum);
        }

        return maxSum / k;
    }
}
\`\`\`

---

## 4. Complexity Analysis
* **Time Complexity**: **O(N)** — Every element is added once and subtracted once.
* **Space Complexity**: **O(1)** — Only a few primitive scalar variables.

---

## 💡 Key Takeaway
Whenever you see "contiguous subarray of fixed size K", use a Fixed-Size Sliding Window to achieve O(N) time with O(1) math transitions!`

,

  // d8-j1
  "d8-j1": `# 15. Keywords and Identifiers in Java

## 1. Core Concept: Words in Java
Every word written in Java source code belongs to one of two categories:

\`\`\`
+---------------------------------------------------------------------------------+
|                       JAVA VOCABULARY & NAMING CONCEPTS                         |
+---------------------------------------+-----------------------------------------+
| KEYWORDS (Reserved Words)             | IDENTIFIERS (Programmer-Defined Names)  |
+---------------------------------------+-----------------------------------------+
| • Fixed meaning built into compiler   | • Names invented by you (the programmer)|
| • Written entirely in LOWERCASE       | • Used for: Classes, Variables, Methods |
| • Cannot be used as variable names    | • Must obey 5 strict language rules     |
| • Examples: class, public, if, return | • Examples: StudentScore, totalMarks    |
+---------------------------------------+-----------------------------------------+
\`\`\`

---

## 2. Java Reserved Keywords (Grouped by Purpose)
Java has **53 reserved words** (50 active keywords + 3 literal values: \`true\`, \`false\`, \`null\`).

| Purpose | Keywords |
| :--- | :--- |
| **Data Types** | \`byte\`, \`short\`, \`int\`, \`long\`, \`float\`, \`double\`, \`char\`, \`boolean\` |
| **Flow Control** | \`if\`, \`else\`, \`switch\`, \`case\`, \`default\`, \`while\`, \`do\`, \`for\`, \`break\`, \`continue\`, \`return\` |
| **Access Modifiers** | \`public\`, \`private\`, \`protected\` |
| **Non-Access Modifiers** | \`static\`, \`final\`, \`abstract\`, \`synchronized\`, \`volatile\`, \`transient\`, \`native\`, \`strictfp\` |
| **OOP & Packages** | \`class\`, \`interface\`, \`extends\`, \`implements\`, \`package\`, \`import\`, \`new\`, \`this\`, \`super\` |
| **Exception Handling** | \`try\`, \`catch\`, \`finally\`, \`throw\`, \`throws\`, \`assert\` |
| **Unused / Reserved** | \`goto\`, \`const\` *(cannot be used as identifiers)* |
| **Special Built-in** | \`void\`, \`instanceof\`, \`enum\` |

---

## 3. The 5 Strict Rules for Identifiers

\`\`\`
RULE 1: Allowed Characters  ───> Letters (A-Z, a-z), Digits (0-9), Underscore (_), Dollar ($)
RULE 2: No Digits at Start  ───> Cannot begin with 0-9. (e.g. 1stRank ❌, rank1 ✅)
RULE 3: Case-Sensitive      ───> myAge, MyAge, and MYAGE are 3 completely different variables!
RULE 4: No Reserved Words   ───> Cannot use keywords like 'class', 'int', 'while' as names.
RULE 5: No Whitespace       ───> No spaces or punctuation (!, @, #, %, ^, &, *) allowed.
\`\`\`

---

## 4. Code Example: Valid vs Invalid Identifiers

\`\`\`java
public class IdentifierRulesDemo {
    public static void main(String[] args) {
        // VALID Identifiers:
        int totalScore = 95;      // Standard camelCase
        int _privateCounter = 1;  // Starting with underscore is legal
        int $dollarAmount = 500;  // Starting with dollar is legal
        int student1 = 101;       // Number inside/at end is legal

        // INVALID Identifiers (will cause COMPILE-TIME ERRORS):
        // int 1stRank = 1;       // ❌ Error: cannot start with a digit
        // int total score = 50;  // ❌ Error: no spaces allowed
        // int class = 10;        // ❌ Error: 'class' is a reserved keyword
        // int my-age = 25;       // ❌ Error: hyphen (-) is minus operator
        // int user#id = 999;     // ❌ Error: special character # not allowed

        System.out.println("Total Score: " + totalScore);
    }
}
\`\`\`

---

## 5. Official Java Naming Conventions (Industry Best Practices)
* **Classes & Interfaces**: **PascalCase** -> \`StudentManager\`, \`ArrayList\`.
* **Methods & Variables**: **camelCase** -> \`calculateTotal()\`, \`studentAge\`.
* **Constants**: **ALL_CAPS_SNAKE_CASE** -> \`MAX_VALUE\`, \`PI\`, \`DEFAULT_TIMEOUT\`.
* **Packages**: **all_lowercase** -> \`com.company.project.util\`.

---

## 💡 Key Takeaway
Keywords are the reserved grammar of Java, while Identifiers are your custom building blocks. Always stick to meaningful, descriptive camelCase names to write clean, industry-standard code.`,

  // d8-j2
  "d8-j2": `# 16. Selection Statements (Conditional Branching)

## 1. What are Selection Statements?
Selection statements control the flow of program execution based on **Boolean conditions** (\`true\` or \`false\`).

\`\`\`
                     [ Condition Check ]
                            │
               ┌────────────┴────────────┐
             true                      false
               │                         │
     [ Execute Branch A ]      [ Execute Branch B ]
               │                         │
               └────────────┬────────────┘
                            │
                   [ Continue Program ]
\`\`\`

Java provides two primary decision-making mechanisms:
1. **if / if-else / if-else-if Ladder** (Condition-based branching)
2. **switch-case** (Value-based multi-way jump)

---

## 2. The Four \`if\` Statement Variations

### 1. Simple \`if\`:
Executes code block only if condition evaluates to \`true\`.
\`\`\`java
if (age >= 18) {
    System.out.println("Eligible to vote");
}
\`\`\`

### 2. \`if-else\`:
Provides an alternative branch when condition is \`false\`.
\`\`\`java
if (number % 2 == 0) {
    System.out.println(number + " is Even");
} else {
    System.out.println(number + " is Odd");
}
\`\`\`

### 3. \`if-else-if\` Ladder:
Evaluates multiple sequential conditions from top to bottom.
\`\`\`java
if (marks >= 90) {
    grade = 'A';
} else if (marks >= 75) {
    grade = 'B';
} else if (marks >= 50) {
    grade = 'C';
} else {
    grade = 'F';
}
\`\`\`

### 4. Nested \`if\`:
An \`if\` statement nested inside another \`if\` block for secondary validation.

---

## 3. The \`switch-case\` Statement Deep Dive

\`switch\` evaluates an expression once and directly jumps to the matching \`case\` label.

\`\`\`
Expression: [ dayNumber = 3 ] ──> Direct Jump to ──> [ case 3: "Wednesday" ]
\`\`\`

* **Supported Data Types in Switch**:
  * \`byte\`, \`short\`, \`char\`, \`int\` (and their wrappers).
  * \`String\` (since Java 7).
  * \`enum\` types (since Java 5).
  * *Note*: \`float\`, \`double\`, and \`boolean\` are **NOT allowed** in switch!

### Crucial Concept: The \`break\` Statement & Fall-Through:
Without a \`break\`, execution continues straight into the next case regardless of whether the condition matches!

\`\`\`java
public class SwitchDemo {
    public static void main(String[] args) {
        int day = 2;

        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday"); // Matches!
                break; // Exits switch block
            case 3:
                System.out.println("Wednesday");
                break;
            default:
                System.out.println("Invalid day");
                break;
        }
    }
}
\`\`\`

---

## 4. Enhanced Switch Expression (Java 14+)
Modern Java provides arrow (\`->\`) syntax that eliminates tedious \`break\` statements and prevents accidental fall-through bugs:

\`\`\`java
String dayName = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    case 4, 5 -> "Weekday";
    case 6, 7 -> "Weekend";
    default -> "Invalid Day";
};
\`\`\`

---

## 💡 Key Takeaway
Use **if-else** for range comparisons (\`x >= 10 && x <= 50\`) or complex boolean logic. Use **switch-case** when comparing a single variable against multiple discrete constant values.`,

  // d8-dsa
  "d8-dsa": `# Array Pattern: Max Consecutive Ones

## 1. What is the Question Asking? (LeetCode 485)
* **Problem**: Given a binary array \`nums\` containing only \`0\`s and \`1\`s, return the maximum number of consecutive \`1\`s in the array.
* **Example**:
  * Input: \`nums = [1, 1, 0, 1, 1, 1]\`
  * First sequence: Two 1s -> length = 2
  * Second sequence: Three 1s -> length = 3
  * Output: \`3\`

---

## 2. Intuition & State Tracking Diagram

\`\`\`
nums = [ 1 , 1 , 0 , 1 , 1 , 1 ]
         ▲   ▲   ▲   ▲   ▲   ▲
count:   1   2   0   1   2   3
max:     1   2   2   2   2   3
\`\`\`

* Maintain two integer variables:
  * \`currentCount\`: Tracks the length of the current running streak of \`1\`s.
  * \`maxCount\`: Records the global maximum streak seen so far.
* When we hit \`1\`: Increment \`currentCount++\`, then update \`maxCount = Math.max(maxCount, currentCount)\`.
* When we hit \`0\`: The streak is broken! Reset \`currentCount = 0\`.

---

## 3. Optimal Java Solution

\`\`\`java
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int currentCount = 0;
        int maxCount = 0;

        for (int num : nums) {
            if (num == 1) {
                currentCount++;
                if (currentCount > maxCount) {
                    maxCount = currentCount;
                }
            } else {
                currentCount = 0; // Streak broken by zero
            }
        }

        return maxCount;
    }
}
\`\`\`

---

## 4. Complexity Analysis
* **Time Complexity**: **O(N)** — Single pass through the array.
* **Space Complexity**: **O(1)** — Only two integer counter variables used.

---

## 💡 Key Takeaway
A running counter + a global maximum variable is the fundamental pattern for tracking streaks in arrays.`,

  // d9-j1
  "d9-j1": `# 17. Iteration & Looping - Part 1 (While & Do-While)

## 1. Why Do We Need Loops?
In programming, **iteration (looping)** allows us to execute a block of statements repeatedly as long as a specified condition remains \`true\`. Without loops, printing numbers 1 to 1000 would require 1000 separate print lines!

---

## 2. Entry-Controlled vs Exit-Controlled Loops

\`\`\`
+------------------------------------+------------------------------------+
| ENTRY-CONTROLLED (while loop)      | EXIT-CONTROLLED (do-while loop)    |
+------------------------------------+------------------------------------+
|           [ Start ]                |             [ Start ]              |
|               │                    |                 │                  |
|     [ Check Condition ]            |         [ Execute Body ]           |
|         /           \\              |                 │                  |
|     (true)        (false)          |       [ Check Condition ]          |
|       │              │             |           /           \\            |
| [ Execute Body ]     │             |       (true)        (false)        |
|       │              │             |         │              │           |
|       └──> Recheck ──┘             |         └──> Repeat    │           |
|                      │             |                        │           |
|                   [ Exit ]         |                     [ Exit ]       |
+------------------------------------+------------------------------------+
| Condition checked BEFORE body.     | Condition checked AFTER body.      |
| Might execute ZERO times!          | GUARANTEED to execute at least ONCE|
+------------------------------------+------------------------------------+
\`\`\`

---

## 3. The 4 Essential Parts of Every Loop
1. **Initialization**: Setting the starting value of loop control variable (\`int i = 1\`).
2. **Condition**: Boolean expression checked every round (\`i <= 5\`).
3. **Loop Body**: Statements executed repeatedly.
4. **Update Expression (Increment/Decrement)**: Modifies variable so loop eventually terminates (\`i++\`).

---

## 4. The \`while\` Loop Syntax & Example

\`\`\`java
public class WhileLoopDemo {
    public static void main(String[] args) {
        int count = 1; // 1. Initialization

        while (count <= 5) { // 2. Condition
            System.out.println("Count is: " + count); // 3. Body
            count++; // 4. Update
        }

        System.out.println("Loop finished. Final count: " + count);
    }
}
\`\`\`

### Practical Real-World Example: Counting Digits in a Number
\`\`\`java
int n = 7492;
int digitCount = 0;

while (n > 0) {
    n = n / 10; // Drops the last digit
    digitCount++;
}
System.out.println("Total Digits: " + digitCount); // 4
\`\`\`

---

## 5. The \`do-while\` Loop Syntax & Example

The \`do-while\` loop executes its block first, and then checks the condition at the end. Note the required semicolon \`;\` after \`while(condition);\`.

\`\`\`java
public class DoWhileDemo {
    public static void main(String[] args) {
        int x = 10;

        // Even though 10 > 5 is false, body runs ONCE!
        do {
            System.out.println("This prints at least once, x = " + x);
            x++;
        } while (x < 5);
    }
}
\`\`\`

### Classic Use Case: Menu-Driven CLI Program
\`\`\`java
import java.util.Scanner;

public class MenuProgram {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice;

        do {
            System.out.println("\\n--- MENU ---");
            System.out.println("1. Balance Check");
            System.out.println("2. Withdraw");
            System.out.println("3. Exit");
            System.out.print("Enter choice: ");
            choice = sc.nextInt();
        } while (choice != 3);

        System.out.println("Thank you for banking with us!");
    }
}
\`\`\`

---

## 💡 Key Takeaway
Use a **while loop** when you don't know the exact iteration count in advance and might run zero times. Use a **do-while loop** when the action must happen at least once before checking (such as asking for user input or displaying a menu).`,

  // d9-j2
  "d9-j2": `# 18. Iteration & Looping - Part 2 (For Loop & Nested Loops)

## 1. Anatomy of the Standard \`for\` Loop
The \`for\` loop is the most widely used loop in software engineering because it packages **initialization**, **condition**, and **update** into one compact line.

\`\`\`
         ┌── 1. Init (runs ONCE at start)
         │           ┌── 2. Condition (checked before each iteration)
         │           │             ┌── 4. Update (runs after body)
         ▼           ▼             ▼
    for (int i = 1 ; i <= 5     ; i++ ) {
        System.out.println(i);   // ◄── 3. Loop Body
    }
\`\`\`

### Execution Cycle Order:
1. \`int i = 1\` (Initialized once).
2. Check \`i <= 5\` -> \`true\`.
3. Execute loop body -> Prints \`1\`.
4. Run update \`i++\` -> \`i\` becomes \`2\`.
5. Repeat steps 2 -> 3 -> 4 until condition becomes \`false\`.

---

## 2. Advanced Variations of \`for\` Loop

### A. Multiple Variables in Init & Update:
\`\`\`java
for (int i = 1, j = 10; i < j; i++, j--) {
    System.out.println("i=" + i + ", j=" + j);
}
\`\`\`

### B. Infinite \`for\` Loop:
\`\`\`java
for (;;) {
    System.out.println("Runs forever until break is hit");
    break; // Exits loop
}
\`\`\`

---

## 3. Nested \`for\` Loops (Row & Column Grid Processing)
A loop placed inside the body of another loop is called a **nested loop**.
* The **Outer Loop** controls the **Rows**.
* The **Inner Loop** controls the **Columns**.

\`\`\`
OUTER LOOP (Row i = 1 to 3)
  └── INNER LOOP (Column j = 1 to 3)
        Prints matrix coordinates: (i, j)

(1,1)  (1,2)  (1,3)
(2,1)  (2,2)  (2,3)
(3,1)  (3,2)  (3,3)
\`\`\`

\`\`\`java
public class NestedLoopDemo {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.print("(" + i + "," + j + ") ");
            }
            System.out.println(); // Line break after finishing each row
        }
    }
}
\`\`\`

---

## 4. The Enhanced \`for-each\` Loop (Arrays & Collections)
Introduced in Java 5 to iterate over arrays and collections without needing manual index manipulation:

\`\`\`java
public class ForEachDemo {
    public static void main(String[] args) {
        String[] fruits = {"Apple", "Banana", "Cherry", "Mango"};

        for (String fruit : fruits) {
            System.out.println("Fruit: " + fruit);
        }
    }
}
\`\`\`
* **Advantage**: Prevents \`ArrayIndexOutOfBoundsException\`.
* **Limitation**: Read-only iteration; does not give access to the index (\`i\`).

---

## 💡 Key Takeaway
Use the standard **for loop** when the number of iterations is known beforehand or index manipulation is required. Use the **for-each loop** for clean, readable traversals of arrays and collections.`,

  // d9-dsa
  "d9-dsa": `# Sliding Window Pattern: Max Consecutive Ones III

## 1. What is the Question Asking? (LeetCode 1004)
* **Problem**: Given a binary array \`nums\` and an integer \`k\`, return the maximum number of consecutive \`1\`s in the array if you can flip at most \`k\` \`0\`s to \`1\`s.
* **Example**:
  * Input: \`nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2\`
  * If we flip the two \`0\`s at indices 5 and 10 (or 3 and 4), the longest contiguous segment of 1s has length **6**.
  * Output: \`6\`

---

## 2. Problem Rephrasing: The Sliding Window Intuition
Instead of physically flipping zeros, rephrase the problem:
> **"Find the longest contiguous subarray that contains AT MOST k zeros!"**

\`\`\`
SLIDING WINDOW WITH ZERO BUDGET (k = 2):
[ 1 , 1 , 1 , 0 , 0 , 0 , 1 , 1 , 1 , 1 , 0 ]
  └───────┬───────┘
  Window has 2 zeros (valid!). Size = 5

Expand right:
[ 1 , 1 , 1 , 0 , 0 , 0 , 1 , 1 , 1 , 1 , 0 ]
  └─────────┬─────────┘
  Window has 3 zeros (EXCEEDED k=2!).
  Shrink left pointer until zeros count <= 2!
\`\`\`

---

## 3. Optimal Java Solution (Dynamic Sliding Window)

\`\`\`java
class Solution {
    public int longestOnes(int[] nums, int k) {
        int left = 0;
        int zeroCount = 0;
        int maxLength = 0;

        for (int right = 0; right < nums.length; right++) {
            // Expand window by including nums[right]
            if (nums[right] == 0) {
                zeroCount++;
            }

            // If zeros exceed budget k, shrink window from left
            while (zeroCount > k) {
                if (nums[left] == 0) {
                    zeroCount--;
                }
                left++;
            }

            // Window [left...right] is valid with <= k zeros
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
\`\`\`

---

## 4. Complexity Analysis
* **Time Complexity**: **O(N)** — Each element is visited at most twice (once by \`right\`, once by \`left\`).
* **Space Complexity**: **O(1)** — No extra memory allocated.

---

## 💡 Key Takeaway
Whenever a problem asks for "maximum subarray length with at most K replacements", translate it into a dynamic sliding window tracking the count of violating elements.`,

  // d10-j1
  "d10-j1": `# 19. Jump Statements in Java (break, continue, return)

## 1. Overview of Jump Statements
Jump (transfer) statements unconditionally alter the normal linear execution flow of a program.

\`\`\`
+---------------------------------------------------------------------------------+
|                           JAVA JUMP STATEMENTS                                  |
+----------------------+---------------------------+------------------------------+
| 1. break             | 2. continue               | 3. return                    |
+----------------------+---------------------------+------------------------------+
| • Exits the loop or  | • Skips remaining code in | • Exits the entire method    |
|   switch immediately |   current iteration       | • Optionally returns a value |
| • Jumps to code      | • Jumps to next iteration | • Transfers control back to  |
|   AFTER the block    |   update expression       |   the caller                 |
+----------------------+---------------------------+------------------------------+
\`\`\`

---

## 2. The \`break\` Statement

### Used inside a loop:
Terminates the loop immediately upon meeting a condition.
\`\`\`java
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break; // Stops loop when i reaches 5
    }
    System.out.print(i + " "); // Prints: 1 2 3 4
}
\`\`\`

### Labeled \`break\` (Breaking Outer Nested Loops):
In nested loops, a normal \`break\` only terminates the innermost loop. A **labeled break** can terminate the outer loop directly!

\`\`\`java
public class LabeledBreakDemo {
    public static void main(String[] args) {
        outerLoop: // Label
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    System.out.println("Breaking outer loop at i=" + i + ", j=" + j);
                    break outerLoop; // Exits BOTH loops!
                }
                System.out.println("i=" + i + ", j=" + j);
            }
        }
    }
}
\`\`\`

---

## 3. The \`continue\` Statement

Skips the rest of the current iteration and jumps directly to the update step (\`i++\`).

\`\`\`java
for (int i = 1; i <= 6; i++) {
    if (i % 2 == 0) {
        continue; // Skip even numbers!
    }
    System.out.print(i + " "); // Prints: 1 3 5
}
\`\`\`

### Labeled \`continue\`:
Directly skips to the next iteration of the outer labeled loop.

\`\`\`java
outer:
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) continue outer; // Skips to next i
        System.out.println("i=" + i + ", j=" + j);
    }
}
\`\`\`

---

## 4. The \`return\` Statement
Terminates execution of the current method and optionally passes back a value to the caller.

\`\`\`java
public class ReturnDemo {
    public static int findFirstNegative(int[] nums) {
        for (int n : nums) {
            if (n < 0) {
                return n; // Exits method immediately with result
            }
        }
        return 0; // Default if no negative found
    }

    public static void main(String[] args) {
        int[] arr = {5, 8, -3, 9};
        System.out.println("Found: " + findFirstNegative(arr)); // -3
    }
}
\`\`\`

---

## 💡 Key Takeaway
* \`break\` says: *"I am done with this loop entirely—get me out."*
* \`continue\` says: *"Skip this round and proceed directly to the next."*
* \`return\` says: *"I am done with this entire method—hand control back to caller."*`,

  // d10-j2
  "d10-j2": `# 20. Essential Control Statement Programs (Interview Classics)

## 1. Number Extraction Technique (The Engine of Digit Programs)
Almost all number-manipulation programs rely on two fundamental arithmetic operators:
* \`num % 10\` -> Extracts the **last digit**.
* \`num / 10\` -> Removes/chops off the **last digit**.

\`\`\`
Original Number: 458
  458 % 10  ───> 8  (Last digit extracted)
  458 / 10  ───> 45 (Number reduced)
\`\`\`

---

## 2. Classic Program 1: Prime Number Check
A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
* **Optimization**: Check divisors only up to \`Math.sqrt(n)\` (or \`i * i <= n\`).

\`\`\`java
public class PrimeCheck {
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n == 2) return true;
        if (n % 2 == 0) return false;

        for (int i = 3; i * i <= n; i += 2) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println("Is 29 prime? " + isPrime(29)); // true
        System.out.println("Is 49 prime? " + isPrime(49)); // false
    }
}
\`\`\`

---

## 3. Classic Program 2: Fibonacci Series
0, 1, 1, 2, 3, 5, 8, 13, 21... (Each number is sum of preceding two).

\`\`\`java
public class Fibonacci {
    public static void printFibonacci(int count) {
        int a = 0, b = 1;
        System.out.print(a + " " + b + " ");

        for (int i = 2; i < count; i++) {
            int c = a + b;
            System.out.print(c + " ");
            a = b;
            b = c;
        }
        System.out.println();
    }
}
\`\`\`

---

## 4. Classic Program 3: Palindrome Number Check
A number that reads the same backwards as forwards (e.g., 121, 1331).

\`\`\`java
public class PalindromeNumber {
    public static boolean isPalindrome(int num) {
        if (num < 0) return false; // Negatives like -121 are not palindromes
        int original = num;
        int reversed = 0;

        while (num > 0) {
            int digit = num % 10;
            reversed = (reversed * 10) + digit;
            num = num / 10;
        }

        return original == reversed;
    }
}
\`\`\`

---

## 5. Classic Program 4: Armstrong Number Check
A number equal to the sum of its own digits each raised to the power of number of digits.
* Example: \`153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153\`!

\`\`\`java
public class ArmstrongNumber {
    public static boolean isArmstrong(int n) {
        int original = n;
        int temp = n;
        int digits = 0;

        // Step 1: Count digits
        while (temp > 0) {
            digits++;
            temp /= 10;
        }

        // Step 2: Compute sum of powers
        temp = n;
        int sum = 0;
        while (temp > 0) {
            int digit = temp % 10;
            sum += Math.pow(digit, digits);
            temp /= 10;
        }

        return sum == original;
    }
}
\`\`\`

---

## 6. Classic Program 5: Factorial of a Number
\`n! = n * (n - 1) * ... * 1\`. Note: \`0! = 1\`.

\`\`\`java
public class Factorial {
    public static long getFactorial(int n) {
        long fact = 1;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
}
\`\`\`

---

## 💡 Key Takeaway
Mastering digit extraction (\`% 10\`), reduction (\`/ 10\`), and mathematical bounds (\`i * i <= n\`) builds the analytical muscle required for all coding assessments.`,

  // d10-dsa
  "d10-dsa": `# Sliding Window Pattern: Subarray Product Less Than K

## 1. What is the Question Asking? (LeetCode 713)
* **Problem**: Given an array of positive integers \`nums\` and an integer \`k\`, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than \`k\`.
* **Example**:
  * Input: \`nums = [10, 5, 2, 6], k = 100\`
  * Valid subarrays:
    * Length 1: \`[10]\`, \`[5]\`, \`[2]\`, \`[6]\` (4)
    * Length 2: \`[10, 5]\` (50), \`[5, 2]\` (10), \`[2, 6]\` (12) (3)
    * Length 3: \`[5, 2, 6]\` (60) (1)
  * Total count = \`4 + 3 + 1 = 8\`.
  * Output: \`8\`

---

## 2. The Counting Insight in Sliding Window
When our sliding window \`[left...right]\` has \`product < k\`, **how many new valid subarrays end at index \`right\`**?

\`\`\`
For window [5, 2, 6] (left=1, right=3):
All valid subarrays ending at 6:
  1. [6]
  2. [2, 6]
  3. [5, 2, 6]
Number of new subarrays = (right - left + 1) = (3 - 1 + 1) = 3!
\`\`\`

Every time the right pointer expands and the window is valid, the number of new subarrays ending at \`right\` is exactly \`(right - left + 1)\`!

---

## 3. Optimal Java Solution

\`\`\`java
class Solution {
    public int numSubarrayProductLessThanK(int[] nums, int k) {
        if (k <= 1) return 0; // Since nums elements are positive integers >= 1

        int left = 0;
        int currentProduct = 1;
        int totalCount = 0;

        for (int right = 0; right < nums.length; right++) {
            currentProduct *= nums[right];

            // If product violates condition, shrink from left
            while (currentProduct >= k && left <= right) {
                currentProduct /= nums[left];
                left++;
            }

            // Add all subarrays ending at right
            totalCount += (right - left + 1);
        }

        return totalCount;
    }
}
\`\`\`

---

## 4. Complexity Analysis
* **Time Complexity**: **O(N)** — Left and right pointers advance monotonically.
* **Space Complexity**: **O(1)** — Scalar state variables only.

---

## 💡 Key Takeaway
For counting subarrays ending at the right pointer in a valid sliding window of size L, always add \`right - left + 1\`.`,

  // d11-j1
  "d11-j1": `# 21. Star Patterns (Nested Loops Visual Logic)

## 1. The Universal 3-Step Pattern Formula
Every pattern problem on a 2D console follows the exact same 3 steps:

\`\`\`
STEP 1: Outer Loop (Rows)    ───> for (int i = 1; i <= n; i++)
STEP 2: Inner Loop (Columns) ───> for (int j = 1; j <= ?; j++)
STEP 3: Print & Line Break   ───> System.out.print("*");
                                  System.out.println(); // at end of row
\`\`\`

---

## 2. Pattern 1: Solid Square Matrix (n x n)
\`\`\`
* * * *
* * * *
* * * *
* * * *
\`\`\`
* **Logic**: For every row \`i\` from 1 to \`n\`, print \`n\` stars.
\`\`\`java
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
\`\`\`

---

## 3. Pattern 2: Right-Angled Triangle
\`\`\`
*
* *
* * *
* * * *
\`\`\`
* **Logic**: Row 1 has 1 star, Row 2 has 2 stars... Row \`i\` has \`i\` stars!
* Inner loop runs: \`j <= i\`.
\`\`\`java
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
\`\`\`

---

## 4. Pattern 3: Inverted Right-Angled Triangle
\`\`\`
* * * *
* * *
* *
*
\`\`\`
* **Logic**: Row 1 has \`n\` stars, Row 2 has \`n - 1\`... Row \`i\` has \`n - i + 1\` stars!
\`\`\`java
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i + 1; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
\`\`\`

---

## 5. Pattern 4: Mirrored Right-Angled Triangle (Spaces + Stars)
\`\`\`
      *
    * *
  * * *
* * * *
\`\`\`
* **Logic**: Two inner loops:
  1. Print \`n - i\` spaces.
  2. Print \`i\` stars.
\`\`\`java
for (int i = 1; i <= n; i++) {
    // Print leading spaces
    for (int s = 1; s <= n - i; s++) {
        System.out.print("  ");
    }
    // Print stars
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
\`\`\`

---

## 6. Pattern 5: Centered Full Pyramid
\`\`\`
   *
  * *
 * * *
* * * *
\`\`\`
* **Logic**: Same as mirrored triangle, but with single space in between stars:
\`\`\`java
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) {
        System.out.print(" ");
    }
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
\`\`\`

---

## 💡 Key Takeaway
Break every 2D pattern into mathematical relationships: count of spaces as a function of \`i\` and count of stars as a function of \`i\`.`,

  // d11-j2
  "d11-j2": `# 22. Number & Alphabet Patterns

## 1. Character Arithmetic in Java
In Java, \`char\` is an integer type (16-bit Unicode). You can perform arithmetic on characters!
* \`'A' + 1 = 65 + 1 = 66 = 'B'\`
* \`(char)('A' + j)\` produces sequential letters \`A, B, C, D...\`

---

## 2. Pattern 1: Sequential Number Triangle
\`\`\`
1
1 2
1 2 3
1 2 3 4
\`\`\`
* **Logic**: In row \`i\`, column \`j\` prints the value of \`j\`.
\`\`\`java
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(j + " ");
    }
    System.out.println();
}
\`\`\`

---

## 3. Pattern 2: Repeating Row Number Triangle
\`\`\`
1
2 2
3 3 3
4 4 4 4
\`\`\`
* **Logic**: In row \`i\`, print the value of \`i\` repeatedly.
\`\`\`java
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(i + " ");
    }
    System.out.println();
}
\`\`\`

---

## 4. Pattern 3: Floyd's Triangle (Continuous Counter)
\`\`\`
1
2  3
4  5  6
7  8  9  10
\`\`\`
* **Logic**: Maintain an independent running counter variable outside the loops!
\`\`\`java
int counter = 1;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(counter + " ");
        counter++;
    }
    System.out.println();
}
\`\`\`

---

## 5. Pattern 4: 0-1 Binary Alternating Triangle
\`\`\`
1
0 1
1 0 1
0 1 0 1
\`\`\`
* **The Mathematical Trick**:
  * Row 1 Col 1: (1+1)=2 (even) -> 1
  * Row 2 Col 1: (2+1)=3 (odd)  -> 0
  * Row 2 Col 2: (2+2)=4 (even) -> 1
  * If \`(i + j) % 2 == 0\`, print \`1\`, otherwise print \`0\`!
\`\`\`java
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        if ((i + j) % 2 == 0) {
            System.out.print("1 ");
        } else {
            System.out.print("0 ");
        }
    }
    System.out.println();
}
\`\`\`

---

## 6. Pattern 5: Alphabet Triangle (A, B, C...)
\`\`\`
A
A B
A B C
A B C D
\`\`\`
* **Logic**: Cast \`'A' + (j - 1)\` to \`char\`.
\`\`\`java
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        char ch = (char) ('A' + (j - 1));
        System.out.print(ch + " ");
    }
    System.out.println();
}
\`\`\`

---

## 💡 Key Takeaway
Number and character patterns are simply star patterns where \`*\` is replaced by \`j\`, \`i\`, a running counter, or ASCII offset calculation.`,

  // d11-dsa
  "d11-dsa": `# Monotonic Queue Pattern: Sliding Window Maximum

## 1. What is the Question Asking? (LeetCode 239)
* **Problem**: You are given an array of integers \`nums\`, and a sliding window of size \`k\` moving from left to right. Return the max element in the sliding window at each step.
* **Constraints**: \`nums.length\` up to \`100,000\`.
* **Why Brute Force Fails**: Checking max of each window takes O(N * K) = 10^10 operations (Time Limit Exceeded).
* **Target Time**: **O(N) linear time**!

---

## 2. Intuition: Monotonic Decreasing Deque
We need a structure that gives us the current maximum in O(1) time while efficiently discarding elements that can **never be the maximum**.

> **"If a newly arrived element is GREATER than older elements in the window, those older elements are useless and can be removed immediately!"**

\`\`\`
MONOTONIC DEQUE (Stores indices):
Elements in deque are in STRICTLY DECREASING order of their values!
Front of Deque ───> ALWAYS points to the MAXIMUM element of the current window!
\`\`\`

* **Two Invariants**:
  1. **Evict out-of-bounds**: If front index \`<= i - k\`, it has slid out of window -> \`deque.pollFirst()\`.
  2. **Maintain decreasing order**: Before inserting \`nums[i]\`, pop smaller elements from the back -> \`while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) deque.pollLast()\`.

---

## 3. Optimal Java Solution

\`\`\`java
import java.util.*;

class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) return new int[0];

        int n = nums.length;
        int[] result = new int[n - k + 1];
        int resultIndex = 0;

        // Deque stores INDICES
        Deque<Integer> deque = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            // 1. Remove indices that are outside the current window
            while (!deque.isEmpty() && deque.peekFirst() <= i - k) {
                deque.pollFirst();
            }

            // 2. Remove smaller elements from back (they can never be the max)
            while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) {
                deque.pollLast();
            }

            // 3. Add current index to back
            deque.offerLast(i);

            // 4. Record current max once the first window is formed (i >= k - 1)
            if (i >= k - 1) {
                result[resultIndex++] = nums[deque.peekFirst()];
            }
        }

        return result;
    }
}
\`\`\`

---

## 4. Complexity Analysis
* **Time Complexity**: **O(N)** — Each element index is added to the deque once and removed at most once.
* **Space Complexity**: **O(K)** — Deque stores at most \`k\` indices at any time.

---

## 💡 Key Takeaway
Whenever you need the running minimum/maximum of a sliding window in O(N) time, use a Monotonic Deque.`,

  // d12-j1
  "d12-j1": "# 23. Programming Paradigms in Computer Science\n\n## 1. What is a Programming Paradigm?\nA **programming paradigm** is an overarching style, methodology, or conceptual approach to writing and organizing computer programs. It dictates how software developers structure code, manage memory, and handle data flow.\n\n```\n                    PROGRAMMING PARADIGMS\n                              │\n         ┌────────────────────┴────────────────────┐\n         ▼                                         ▼\n   IMPERATIVE                                DECLARATIVE\n   (Focus: \"HOW to do it\")                   (Focus: \"WHAT to do\")\n   ├── Monolithic Programming                ├── Functional (Haskell, Lisp)\n   ├── Procedural Programming (C, Pascal)    ├── Logic (Prolog)\n   └── Object-Oriented (Java, C++)           └── Database Query (SQL)\n```\n\n---\n\n## 2. Why Did We Transition from Procedural to Object-Oriented?\n\n### The Fatal Flaws of Procedural Programming (POP):\n1. **Global Data Vulnerability**: In procedural languages (like C), data is often exposed globally across functions. Any function can accidentally corrupt state.\n2. **Lack of Real-World Mapping**: Real-world entities (like a Bank Account, Car, or Customer) consist of both **State (Data)** and **Behavior (Actions)**. POP forces you to keep data in `struct` and functions separate.\n3. **Spaghetti Code & Poor Maintenance**: As projects grow to hundreds of thousands of lines, changing one function often triggers cascading bugs across distant modules.\n\n### The Object-Oriented Solution (OOP):\n* **Data-Centric Design**: Data is treated as a critical asset and shielded from unauthorized external access.\n* **Binding**: State and Behavior are permanently coupled inside a single structure called an **Object**.\n* **Reusability**: Inheritance and composition eliminate code duplication.\n\n---\n\n## 3. Procedural (POP) vs Object-Oriented (OOP) Master Comparison\n\n| Feature | Procedural Programming (POP) | Object-Oriented Programming (OOP) |\n| :--- | :--- | :--- |\n| **Primary Focus** | Focuses on **functions & procedures** (verbs) | Focuses on **data & objects** (nouns) |\n| **Program Structure** | Divided into small functions/subroutines | Divided into interconnected **Classes & Objects** |\n| **Data Security** | Low — Data moves freely around the system | High — Data is hidden using `private` access |\n| **Approach** | **Top-Down** design | **Bottom-Up** design |\n| **Access Modifiers** | None (`public`, `private` don't exist in C) | Supported (`private`, `protected`, `public`) |\n| **Code Reusability**| Limited to calling existing functions | Robust via **Inheritance** & **Polymorphism** |\n| **Overloading** | Function overloading is **not** supported | Fully supported (Compile-time polymorphism) |\n| **Example Languages**| C, Pascal, FORTRAN, BASIC | Java, C++, C#, Python, Kotlin |\n\n---\n\n## 4. Complete Java Demonstration\nNotice how Java prevents global data corruption by binding methods directly to the data they modify:\n\n```java\n// OOP Approach: Data and behavior are securely packaged inside the class\nclass BankAccount {\n    // 1. Data is private (Hidden from direct external corruption)\n    private double balance;\n\n    // 2. Methods control how data can be modified\n    public void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n            System.out.println(\"Deposited ₹\" + amount + \". New Balance: ₹\" + balance);\n        } else {\n            System.out.println(\"Invalid deposit amount!\");\n        }\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}\n```\n\n---\n\n## 💡 Key Takeaway\nProcedural programming asks *\"What steps should the program execute?\"*, while Object-Oriented programming asks *\"What real-world objects make up this problem, and how do they interact?\"*",

  // d12-j2
  "d12-j2": "# 24. Core Object-Oriented Programming (OOP) Concepts\n\n## 1. Classes and Objects: The Bedrock of Java\n\n### A. What is a Class?\nA **Class** is a user-defined blueprint, prototype, or template from which individual objects are instantiated.\n* It defines the **attributes (state)** and **methods (behavior)** common to all objects of that type.\n* **Memory**: A class is purely a logical construct—it consumes **0 bytes of Heap memory** until an object is created!\n\n### B. What is an Object?\nAn **Object** is a concrete instance of a class that exists physically in computer memory (Heap).\nEvery object has three fundamental characteristics:\n1. **State (Attributes)**: Represented by instance variables (e.g., `color`, `speed`, `balance`).\n2. **Behavior (Actions)**: Represented by instance methods (e.g., `accelerate()`, `deposit()`).\n3. **Identity**: A unique memory address assigned by the JVM to distinguish it from all other objects.\n\n```\n       BLUEPRINT (Class)                   PHYSICAL INSTANCES (Objects)\n    ┌──────────────────────┐                 ┌──────────────────────┐\n    │     class Car        │ ──── new ────>  │ car1: Red, ₹8,00,000 │\n    │  - color, price      │                 └──────────────────────┘\n    │  - start(), brake()  │                 ┌──────────────────────┐\n    └──────────────────────┘ ──── new ────>  │ car2: Blue, ₹12,00,000│\n                                             └──────────────────────┘\n```\n\n---\n\n## 2. The 4 Golden Pillars of OOP\n\n```\n                   THE 4 PILLARS OF OOP\n                             │\n     ┌───────────────┬───────┴───────┬───────────────┐\n     ▼               ▼               ▼               ▼\nENCAPSULATION   INHERITANCE     POLYMORPHISM    ABSTRACTION\n(Data Hiding)   (Code Reuse)    (Many Forms)    (Hiding Detail)\n```\n\n### 1. Encapsulation:\nWrapping data (variables) and code (methods) together into a single cohesive unit (a class) while restricting direct outside access using `private`.\n\n### 2. Inheritance:\nThe mechanism by which one class acquires the properties and behaviors of another parent class using the `extends` keyword (IS-A relationship). Promotes code reusability.\n\n### 3. Polymorphism:\nThe ability of an entity (such as a method or operator) to take on multiple forms:\n* **Compile-Time**: Method Overloading.\n* **Runtime**: Method Overriding (Dynamic Method Dispatch).\n\n### 4. Abstraction:\nDisplaying only essential features to the outside world while hiding complex internal mechanics and implementation details using `abstract` classes and `interfaces`.\n\n---\n\n## 3. Comprehensive Java Code Example\n\n```java\npublic class StudentDemo {\n    // Blueprint: Defines fields and actions\n    static class Student {\n        String name;\n        int rollNo;\n        double marks;\n\n        void displayBio() {\n            System.out.println(\"Roll No: \" + rollNo + \" | Name: \" + name + \" | Marks: \" + marks);\n        }\n    }\n\n    public static void main(String[] args) {\n        // Instantiating 2 independent objects in Heap memory\n        Student s1 = new Student();\n        s1.name = \"Suhail\";\n        s1.rollNo = 101;\n        s1.marks = 95.5;\n\n        Student s2 = new Student();\n        s2.name = \"Aman\";\n        s2.rollNo = 102;\n        s2.marks = 88.0;\n\n        s1.displayBio();\n        s2.displayBio();\n    }\n}\n```\n\n---\n\n## 💡 Key Takeaway\nA Class is a recipe; an Object is the actual dish. You cannot eat the recipe, and the recipe occupies no space on the dining table!",

  // d13-j1
  "d13-j1": "# 25. Constructors in Java (Deep Dive)\n\n## 1. What is a Constructor?\nA **Constructor** is a special member method invoked automatically by the JVM at the exact instant an object is created using the `new` keyword.\nIts primary objective is to **initialize the state** (instance variables) of the newly allocated object.\n\n### The 3 Absolute Rules of Java Constructors:\n1. The constructor name **must be exactly identical** to the class name.\n2. A constructor **must NOT have any return type**—not even `void`! (Adding `void` converts it into a normal method!).\n3. A constructor cannot be declared `abstract`, `static`, `final`, or `synchronized`.\n\n---\n\n## 2. Types of Constructors in Java\n\n```\n                      CONSTRUCTORS\n                           │\n         ┌─────────────────┴─────────────────┐\n         ▼                                   ▼\nDEFAULT CONSTRUCTOR                 USER-DEFINED CONSTRUCTOR\n(Provided by compiler if none written)       ├── No-Argument Constructor\n                                             └── Parameterized Constructor\n```\n\n### A. Default Constructor (Compiler-Generated):\nIf you write **no constructor at all** in your class, the Java compiler (`javac`) automatically generates a hidden no-arg constructor:\n```java\nclass Box {\n    // Compiler silently generates:\n    // public Box() { super(); }\n}\n```\n\n### B. Parameterized Constructor:\nAccepts arguments to initialize fields with custom values at creation time:\n```java\nclass Car {\n    String brand;\n    int maxSpeed;\n\n    Car(String brand, int maxSpeed) {\n        this.brand = brand;\n        this.maxSpeed = maxSpeed;\n    }\n}\n```\n\n> [!WARNING] Critical Java Interview Pitfall:\n> If you define **any** constructor (e.g. parameterized), Java **will NOT** generate the default constructor! Attempting `new Car()` will cause a compile error unless you explicitly write a no-arg constructor yourself!\n\n---\n\n## 3. Constructor Overloading & Constructor Chaining (`this()`)\n\n### Constructor Overloading:\nWriting multiple constructors in the same class with different parameter counts or parameter types:\n\n```java\npublic class Employee {\n    int id;\n    String name;\n    double salary;\n\n    // 1. Default fallback\n    Employee() {\n        this(0, \"Unassigned\", 25000.0); // Chaining to 3-arg constructor!\n    }\n\n    // 2. ID and Name provided\n    Employee(int id, String name) {\n        this(id, name, 35000.0);         // Chaining to 3-arg constructor!\n    }\n\n    // 3. Complete constructor\n    Employee(int id, String name, double salary) {\n        this.id = id;\n        this.name = name;\n        this.salary = salary;\n    }\n}\n```\n\n### Constructor Chaining Rules:\n* `this(...)` calls another constructor within the same class.\n* `this(...)` **must always be the first statement** in the constructor body.\n\n---\n\n## 💡 Key Takeaway\nConstructors guarantee that no object ever enters memory in an uninitialized or broken state.",

  // d13-j2
  "d13-j2": "# 26. Deep Explanation of Object Creation & Memory Allocation\n\n## 1. What Happens When You Write: `Student s = new Student();`?\n\nBehind this simple line of code, the JVM performs a 6-step lifecycle across different runtime memory areas:\n\n```\n                  JVM RUNTIME MEMORY ARCHITECTURE\n  ┌──────────────────────┐              ┌───────────────────────────┐\n  │     STACK MEMORY     │              │        HEAP MEMORY        │\n  │                      │              │                           │\n  │  ┌────────────────┐  │              │   ┌───────────────────┐   │\n  │  │ s: 0x4A10      │──┼──────────────┼──>│ Object at 0x4A10: │   │\n  │  │ (Ref Variable) │  │  References  │   │  name = \"Suhail\"  │   │\n  │  └────────────────┘  │              │   │  roll = 101       │   │\n  │                      │              │   │  marks = 92.5     │   │\n  │                      │              │   └───────────────────┘   │\n  └──────────────────────┘              └───────────────────────────┘\n```\n\n### The 6 Execution Steps:\n1. **Class Loading**: JVM ClassLoader checks if `Student.class` is loaded in the Metaspace. If not, it loads bytecode and initializes static variables.\n2. **Memory Allocation**: The `new` keyword calculates the total bytes needed for instance fields and reserves a contiguous chunk of **Heap memory**.\n3. **Default Zero-Initialization**: JVM initializes all instance variables to default values (`0` for numbers, `false` for boolean, `null` for references).\n4. **Explicit Field Initialization**: Initializers written directly on variable declarations (e.g., `int status = 1;`) are evaluated.\n5. **Constructor Execution**: The specified constructor executes, running user initialization code and `this(...)` / `super(...)`.\n6. **Reference Assignment**: The starting address of the Heap object (e.g., `0x4A10`) is returned and stored in the reference variable `s` located on the **Stack frame**.\n\n---\n\n## 2. Reference Variable vs Actual Object\n\n* **The Reference Variable** (`s`): Lives on the **Stack**. It holds a 32-bit or 64-bit pointer address.\n* **The Object**: Lives on the **Heap**. It contains the actual field values and method table pointers.\n* **Analogy**:\n  * The Object is a **Television** sitting in your living room (Heap).\n  * The Reference Variable is the **Remote Control** in your hand (Stack).\n  * Multiple remote controls can operate the same TV:\n    ```java\n    Student s1 = new Student();\n    Student s2 = s1; // Both s1 and s2 point to the SAME Heap object!\n    s2.name = \"Updated\"; // Modifying via s2 changes it for s1 as well!\n    ```\n\n---\n\n## 3. Anonymous Objects\nObjects created without assigning their reference address to any variable:\n```java\nnew Student().display(); // Executed once and immediately becomes eligible for GC!\n```\n\n---\n\n## 4. Garbage Collection (GC) in Java\nWhen an object no longer has any active references pointing to it:\n```java\nStudent s = new Student();\ns = null; // Original Heap object is now orphaned!\n```\nThe JVM's **Garbage Collector (GC)** runs as a low-priority background daemon thread to automatically reclaim that memory, eliminating manual `free()` memory leaks!\n\n---\n\n## 💡 Key Takeaway\nVariables on the Stack have a fixed, temporary lifespan tied to method scope; Objects on the Heap live until no reference points to them.",

  // d14-j1
  "d14-j1": "# 27. Relationships in Java Classes (IS-A, HAS-A, USES-A)\n\n## 1. Overview of Class Relationships\nIn real-world enterprise software design, classes do not operate in isolation—they collaborate through structured relationships.\n\n```\n                     CLASS RELATIONSHIPS\n                              │\n     ┌────────────────────────┼────────────────────────┐\n     ▼                        ▼                        ▼\n   IS-A                     HAS-A                    USES-A\n(Inheritance)           (Association)             (Dependency)\ne.g. Dog IS-A Animal    e.g. Car HAS-A Engine    e.g. Printer USES-A Document\n```\n\n---\n\n## 2. The 3 Primary Relationships\n\n### A. IS-A Relationship (Inheritance):\nRepresented using the **`extends`** keyword. It models specialization where a child class is a specialized subtype of a parent class.\n* **Test**: If *\"B is a kind of A\"* sounds grammatically and logically true, use Inheritance!\n* Example: `Car IS-A Vehicle`, `SavingsAccount IS-A BankAccount`.\n\n```java\nclass Vehicle {\n    void move() { System.out.println(\"Moving...\"); }\n}\nclass Car extends Vehicle { // Car IS-A Vehicle\n    void honk() { System.out.println(\"Beep beep!\"); }\n}\n```\n\n### B. HAS-A Relationship (Association):\nWhen one class contains a reference to another class as an instance variable.\n* **Test**: If *\"Class A possesses / contains Class B\"*, use Association!\n* Example: `Car HAS-A Engine`, `Student HAS-A Address`.\n\n```java\nclass Engine {\n    void start() { System.out.println(\"Vroom!\"); }\n}\n\nclass Car {\n    private Engine engine; // Car HAS-A Engine\n\n    Car(Engine e) {\n        this.engine = e;\n    }\n}\n```\n\n### C. USES-A Relationship (Dependency):\nWhen a class interacts with another class temporarily, typically by receiving it as a parameter in a method:\n```java\nclass Document { String text; }\n\nclass Printer {\n    void print(Document doc) { // Printer USES-A Document\n        System.out.println(doc.text);\n    }\n}\n```\n\n---\n\n## 3. Inheritance vs Composition: Design Advice\n> [!TIP] Famous Gang of Four (GoF) Principle:\n> **\"Favor object composition (HAS-A) over class inheritance (IS-A).\"**\n> Inheritance creates tight coupling (changes in parent break children). Composition provides loose coupling and flexible runtime behavior.\n\n---\n\n## 💡 Key Takeaway\nUse **IS-A** when the child shares identity with the parent; use **HAS-A** when one object is merely a component or property of another.",

  // d14-j2
  "d14-j2": "# 28. Inheritance in Java & The Diamond Problem\n\n## 1. What is Inheritance?\n**Inheritance** is the mechanism that allows a subclass (`Child`) to inherit non-private fields and methods from a superclass (`Parent`) using the `extends` keyword.\n* **Superclass / Parent / Base Class**: The class whose features are inherited.\n* **Subclass / Child / Derived Class**: The class that inherits the features and can add specialized behavior.\n\n---\n\n## 2. Forms of Inheritance in Java\n\n```\n1. SINGLE            2. MULTILEVEL              3. HIERARCHICAL\n   ┌───┐                 ┌───┐                      ┌───┐\n   │ A │                 │ A │                      │ A │\n   └───┘                 └───┘                     ┌┴───┴┐\n     │                     │                       ▼     ▼\n     ▼                     ▼                     ┌───┐ ┌───┐\n   ┌───┐                 ┌───┐                   │ B │ │ C │\n   │ B │                 │ B │                   └───┘ └───┘\n   └───┘                   │\n                           ▼\n                         ┌───┐\n                         │ C │\n                         └───┘\n```\n\n1. **Single Inheritance**: One child inherits from one parent (`class B extends A`).\n2. **Multilevel Inheritance**: A chain of inheritance (`class C extends B`, where `B extends A`).\n3. **Hierarchical Inheritance**: Multiple children inherit from a single parent (`B extends A` and `C extends A`).\n\n---\n\n## 3. Why Multiple Inheritance of Classes is FORBIDDEN in Java: The Diamond Problem\n\nJava **strictly forbids** a class from extending more than one class (`class C extends A, B` is a syntax error).\n\n```\n                 THE DIAMOND PROBLEM\n                       ┌───┐\n                       │ A │  (Defines: void display())\n                       └───┘\n                     ┌───┴───┐\n                     ▼       ▼\n                   ┌───┐   ┌───┐\n                   │ B │   │ C │  (Both override display() differently)\n                   └───┘   └───┘\n                     └───┬───┘\n                         ▼\n                       ┌───┐\n                       │ D │  (? Which display() should D inherit ?)\n                       └───┘\n```\n\n* **The Ambiguity**: If classes `B` and `C` both inherit `display()` from `A` and override it with different logic, which version should class `D` execute when calling `d.display()`?\n* To eliminate this ambiguity and keep the language clean, James Gosling and the Java team disallowed multiple inheritance of classes. Multiple inheritance is achieved safely using **Interfaces**.\n\n---\n\n## 4. The `super` Keyword\nThe `super` keyword is a reference variable used inside a subclass to access parent class members:\n1. **Call Parent Constructor**: `super(args)` — must be line 1 of child constructor!\n2. **Invoke Parent Method**: `super.show()` — useful when the child overrides `show()`.\n3. **Access Parent Field**: `super.variable` — used when child variable shadows parent variable.\n\n```java\nclass Animal {\n    Animal(String name) { System.out.println(\"Animal created: \" + name); }\n}\n\nclass Dog extends Animal {\n    Dog(String name) {\n        super(name); // Explicitly calls Animal(name)\n        System.out.println(\"Dog initialized\");\n    }\n}\n```\n\n---\n\n## 💡 Key Takeaway\nWhenever a child object is instantiated, the parent constructor ALWAYS executes first before the child constructor.",

  // d15-j1
  "d15-j1": "# 29. Aggregation vs Composition (HAS-A Relationships)\n\n## 1. Understanding Association\nAssociation is the relationship between two separate classes established through their objects. It is divided into two distinct flavors based on the **lifespan dependency** of the contained object:\n\n```\n                          ASSOCIATION\n                               │\n             ┌─────────────────┴─────────────────┐\n             ▼                                   ▼\n        AGGREGATION                         COMPOSITION\n    (Weak Association)                  (Strong Association)\n    Independent Lifecycle               Dependent Lifecycle\n```\n\n---\n\n## 2. Aggregation (Weak HAS-A Relationship)\n\n### Definition:\nIn **Aggregation**, both objects can exist independently. If the container object is destroyed, the contained object remains unharmed.\n* **Relationship**: *\"Has-A\"* (loose coupling).\n* **Real-World Example**: A **Department** and **Professors**.\n  * If a university shuts down the \"Computer Science Department\", the Professors do not vanish from existence—they simply join another department or university!\n\n```java\nclass Teacher {\n    String name;\n    Teacher(String name) { this.name = name; }\n}\n\nclass Department {\n    String deptName;\n    private List<Teacher> teachers; // Aggregation\n\n    Department(String deptName, List<Teacher> teachers) {\n        this.deptName = deptName;\n        this.teachers = teachers; // Teacher objects were created outside!\n    }\n}\n```\n\n---\n\n## 3. Composition (Strong HAS-A Relationship)\n\n### Definition:\nIn **Composition**, the contained object's lifecycle is strictly bound to the container object. The child object **cannot exist** without the parent object.\n* **Relationship**: *\"Part-Of\"* / Death Relationship (tight coupling).\n* **Real-World Example**: A **Human** and a **Heart**, or a **House** and **Rooms**.\n  * If the Human dies, the Heart cannot live on its own.\n  * If the House is demolished, its individual rooms are destroyed simultaneously!\n\n```java\nclass Heart {\n    void beat() { System.out.println(\"Lub-dub\"); }\n}\n\nclass Human {\n    private final Heart heart; // Composition\n\n    Human() {\n        // Heart is instantiated directly inside Human's constructor!\n        this.heart = new Heart();\n    }\n}\n```\n\n---\n\n## 4. Master Comparison: Aggregation vs Composition\n\n| Feature | Aggregation (Weak) | Composition (Strong) |\n| :--- | :--- | :--- |\n| **Coupling** | Loose coupling | Tight coupling |\n| **Object Dependency** | Both objects exist independently | Child object cannot exist without parent |\n| **Lifecycle** | Independent lifecycles | Coincident / Unified lifecycle |\n| **Creation** | Contained object created **outside** | Contained object created **inside** |\n| **Deletion** | Destroying parent keeps child intact | Destroying parent destroys child automatically |\n| **UML Symbol** | Hollow Diamond (◇) | Filled Diamond (◆) |\n\n---\n\n## 💡 Key Takeaway\nIf deleting the parent object means the child object has no meaning or purpose alone, use **Composition**. If the child object can belong to other parents, use **Aggregation**.",

  // d15-j2
  "d15-j2": "# 30. Method Overriding & Dynamic Binding\n\n## 1. What is Method Overriding?\n**Method Overriding** occurs when a subclass defines a method that has the **exact same name, same parameters, and compatible return type** as a method in its superclass.\nIt allows the child class to provide a specific, customized implementation of a generalized behavior defined by the parent.\n\n```\n       PARENT (Vehicle)\n    ┌─────────────────────┐\n    │ void start() {      │\n    │   print(\"Generic\"); │\n    │ }                   │\n    └─────────────────────┘\n               ▲\n               │ extends\n       CHILD (Tesla)\n    ┌─────────────────────┐\n    │ @Override           │\n    │ void start() {      │ ───> Overrides with silent electric start!\n    │   print(\"Silent\");  │\n    │ }                   │\n    └─────────────────────┘\n```\n\n---\n\n## 2. The 6 Strict Rules for Method Overriding in Java\n\n1. **Exact Signature Match**: Method name, argument count, and argument types must be identical.\n2. **Covariant Return Type**: The return type must be identical, OR a subclass of the parent's return type (e.g. if parent returns `Number`, child can return `Integer`).\n3. **Access Modifier Rule**: The overriding method in the child class **cannot reduce visibility**:\n   * Parent `protected` -> Child can be `protected` or `public`.\n   * Parent `public` -> Child **must** be `public`.\n4. **Private Methods Cannot Be Overridden**: Private methods are not visible to subclasses, so overriding is impossible.\n5. **Static Methods Cannot Be Overridden**: Declaring a static method with the same signature in a child class is **Method Hiding**, not overriding!\n6. **Final Methods Cannot Be Overridden**: Any method declared with `final` is locked and cannot be overridden.\n\n---\n\n## 3. The `@Override` Annotation\nAlways decorate overriding methods with `@Override`. It instructs the Java compiler to verify signature matching. If you accidentally misspell the method name (e.g., `tostring()` instead of `toString()`), the compiler catches the bug immediately!\n\n```java\nclass Animal {\n    void sound() {\n        System.out.println(\"Animal makes a sound\");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"Cat says Meow!\");\n    }\n}\n```\n\n---\n\n## 4. Overloading vs Overriding Master Table\n\n| Property | Method Overloading | Method Overriding |\n| :--- | :--- | :--- |\n| **Location** | Within the **same class** | Between **Parent and Child** classes |\n| **Parameters** | **Must be different** | **Must be identical** |\n| **Return Type** | Can be anything | Must be same or covariant |\n| **Binding Type** | **Static / Compile-Time** binding | **Dynamic / Runtime** binding |\n| **Execution** | Determined by compiler based on ref type | Determined by JVM based on actual object |\n\n---\n\n## 💡 Key Takeaway\nOverloading is *\"same method name, different duties\"*; Overriding is *\"same method name, specialized child behavior\"*.",

  // d16-j1
  "d16-j1": "# 31. Polymorphism - Part 1 (Compile-Time / Method Overloading)\n\n## 1. What is Polymorphism?\nDerived from Greek:\n* **Poly** = Many\n* **Morph** = Forms\nIn software engineering, **Polymorphism** is the capability of a single entity (such as a method, operator, or reference) to behave differently in different contexts.\n\n```\n                    POLYMORPHISM IN JAVA\n                             │\n         ┌───────────────────┴───────────────────┐\n         ▼                                       ▼\n   COMPILE-TIME                            RUNTIME\n   (Static Polymorphism)                   (Dynamic Polymorphism)\n   ├── Method Overloading                  └── Method Overriding\n   └── Operator Overloading (+ only)\n```\n\n---\n\n## 2. Compile-Time Polymorphism (Method Overloading)\nWhen multiple methods in the same class share the exact same name but have different parameter signatures. The compiler determines which method to call at compilation time based on the arguments supplied.\n\n### The 3 Ways to Overload a Method:\n1. **By Number of Arguments**:\n   ```java\n   int add(int a, int b) { return a + b; }\n   int add(int a, int b, int c) { return a + b + c; }\n   ```\n2. **By Data Type of Arguments**:\n   ```java\n   double add(double a, double b) { return a + b; }\n   String add(String a, String b) { return a + b; }\n   ```\n3. **By Order of Argument Data Types**:\n   ```java\n   void display(int id, String name) { ... }\n   void display(String name, int id) { ... }\n   ```\n\n---\n\n## 3. Why Changing Return Type Alone Does NOT Overload!\nConsider this illegal Java snippet:\n```java\nint calculate(int x) { return x * 2; }\ndouble calculate(int x) { return x * 2.0; } // ❌ COMPILE ERROR!\n```\nWhen someone calls `calculate(10);`, the compiler has no way to know whether you intended to receive an `int` or a `double`! Therefore, **return type is never part of the method signature**.\n\n---\n\n## 4. Automatic Type Promotion in Overloading\nWhen calling an overloaded method, if an exact type match is not found, Java automatically promotes smaller primitive types to larger types along this ladder:\n$$\\text{byte} \\longrightarrow \\text{short} \\longrightarrow \\text{int} \\longrightarrow \\text{long} \\longrightarrow \\text{float} \\longrightarrow \\text{double}$$\n$$(\\text{char} \\longrightarrow \\text{int})$$\n\n### Ambiguity Trap:\n```java\nclass Demo {\n    void show(int a, long b) { System.out.println(\"int, long\"); }\n    void show(long a, int b) { System.out.println(\"long, int\"); }\n}\n// Calling: demo.show(20, 20);\n// ❌ COMPILE ERROR: Reference to show is ambiguous!\n```\nBoth methods require one promotion, so the compiler cannot prefer one over the other!\n\n---\n\n## 💡 Key Takeaway\nMethod overloading increases code readability and consistency by allowing multiple variants of an operation to share an intuitive name.",

  // d16-j2
  "d16-j2": "# 32. Polymorphism - Part 2 (Runtime / Dynamic Dispatch)\n\n## 1. What is Runtime Polymorphism?\n**Runtime Polymorphism** (or Dynamic Method Dispatch) is the process in which an overridden method call is resolved at **runtime** by the JVM, rather than at compile-time.\n\n```\n       REFERENCE (Parent) ──────────── POINTS TO ────────────> HEAP OBJECT (Child)\n      ┌──────────────────┐                                   ┌──────────────────┐\n      │ Animal a         │ ─────────────────────────────────>│ new Dog()        │\n      └──────────────────┘                                   └──────────────────┘\n               │                                                      │\n               └──────────── a.sound() ──> Executes Dog's sound()! ───┘\n```\n\n---\n\n## 2. Dynamic Method Dispatch Mechanism\nWhen a parent class reference variable points to a child class object:\n```java\nAnimal a = new Dog(); // UPCASTING\na.sound();            // Prints \"Bark!\", NOT \"Generic Sound\"!\n```\n* At **compile-time**, the compiler only verifies that class `Animal` contains a method called `sound()`.\n* At **runtime**, the JVM checks the actual object residing in Heap memory (`Dog`) and invokes `Dog`'s overridden version of `sound()`.\n\n---\n\n## 3. Upcasting vs Downcasting\n\n### A. Upcasting (Child -> Parent):\nTreating a specialized child object as a generalized parent type.\n* **Always safe & automatic** (implicit cast).\n* Example: `Animal a = new Dog();`\n\n### B. Downcasting (Parent -> Child):\nConverting a parent reference back to a child reference.\n* **Potentially dangerous**: Requires explicit cast.\n* If the underlying object is not actually an instance of that child class, the JVM throws **`ClassCastException`**!\n\n```java\nAnimal a = new Dog(); // Upcasting\n\n// Safe Downcasting using instanceof:\nif (a instanceof Dog) {\n    Dog d = (Dog) a; // Explicit downcast\n    d.fetchBall();   // Specific method on Dog\n}\n```\n\n---\n\n## 4. Real-World Enterprise Example: Payment Processing\nPolymorphism powers clean architecture by allowing open-ended extensibility without modifying existing code (Open/Closed Principle):\n\n```java\ninterface Payment {\n    void processPayment(double amount);\n}\n\nclass UpiPayment implements Payment {\n    public void processPayment(double amount) { System.out.println(\"Paid ₹\" + amount + \" via UPI.\"); }\n}\n\nclass CreditCardPayment implements Payment {\n    public void processPayment(double amount) { System.out.println(\"Paid ₹\" + amount + \" via Card.\"); }\n}\n\npublic class CheckoutService {\n    // This method works for ANY payment method created today or in the future!\n    public static void checkout(Payment paymentMethod, double amount) {\n        paymentMethod.processPayment(amount); // Polymorphic dispatch!\n    }\n}\n```\n\n---\n\n## 💡 Key Takeaway\nUpcasting allows you to write general code that works on parent types; Dynamic Dispatch ensures the correct specialized child behavior runs at runtime.",

  // d17-j1
  "d17-j1": "# 33. Data Hiding & Abstraction in Java\n\n## 1. Data Hiding: Protecting Object Integrity\n**Data Hiding** is the software design practice of isolating internal state variables by declaring them `private`.\n* Without data hiding, external code can assign invalid, nonsensical, or malicious data:\n  ```java\n  account.balance = -1000000; // ❌ Ruined data integrity!\n  ```\n* With data hiding, variables can only be modified through controlled, validated public methods:\n  ```java\n  public void withdraw(double amount) {\n      if (amount <= balance && amount > 0) {\n          balance -= amount;\n      }\n  }\n  ```\n\n---\n\n## 2. What is Abstraction?\n**Abstraction** is the principle of hiding internal implementation complexity and exposing only the essential interface to the user.\n* **Everyday Example**: When you drive a car, you press the accelerator pedal to speed up. You do not need to know how fuel injection, spark plugs, or valve timing work under the hood! The accelerator is an **abstraction layer**.\n\n---\n\n## 3. Abstract Classes in Java\nAn **abstract class** is a restricted class declared with the `abstract` keyword that cannot be instantiated directly with `new`.\n\n```\n                 ABSTRACT CLASS (Shape)\n             ┌─────────────────────────────┐\n             │ - color                     │\n             │ - draw() (concrete)         │\n             │ - calculateArea() (ABSTRACT)│ ─── No implementation body!\n             └─────────────────────────────┘\n                            ▲\n                ┌───────────┴───────────┐\n                │                       │\n         ┌──────────────┐        ┌──────────────┐\n         │ Circle       │        │ Rectangle    │\n         │ Area = πr²   │        │ Area = l × w │\n         └──────────────┘        └──────────────┘\n```\n\n### Characteristics of Abstract Classes:\n1. **Cannot be Instantiated**: `Shape s = new Shape();` causes a compile-time error.\n2. **Can Have Abstract & Concrete Methods**: Can define common logic while mandating child customization.\n3. **Can Have Constructors**: Abstract class constructors execute when a child object is instantiated via `super()`.\n4. **Degree of Abstraction**: Provides **0% to 100% abstraction**.\n\n```java\nabstract class Shape {\n    String color;\n\n    Shape(String color) { this.color = color; }\n\n    // Abstract method: Every shape MUST implement this!\n    abstract double calculateArea();\n\n    // Concrete method: Shared by all shapes\n    void displayColor() {\n        System.out.println(\"Color: \" + color);\n    }\n}\n\nclass Circle extends Shape {\n    double radius;\n\n    Circle(String color, double radius) {\n        super(color);\n        this.radius = radius;\n    }\n\n    @Override\n    double calculateArea() {\n        return Math.PI * radius * radius;\n    }\n}\n```\n\n---\n\n## 💡 Key Takeaway\nUse an **abstract class** when subclasses share common state and code, but need specialized implementations for key operations.",

  // d17-j2
  "d17-j2": "# 34. Interfaces in Java (Contract-Driven Design)\n\n## 1. What is an Interface?\nAn **Interface** is a 100% abstract blueprint of a class that specifies **what** a class must do, but not **how** it does it. It acts as an unbreakable contract between software components.\n\n```\n                  INTERFACE CONTRACT (Flyable)\n                   ┌────────────────────────┐\n                   │ void fly();            │\n                   └────────────────────────┘\n                                ▲\n                 implements     │    implements\n                   ┌────────────┴────────────┐\n                   ▼                         ▼\n            ┌──────────────┐          ┌──────────────┐\n            │ Airplane     │          │ Bird         │\n            │ (Jet engine) │          │ (Flaps wings)│\n            └──────────────┘          └──────────────┘\n```\n\n---\n\n## 2. Core Rules of Java Interfaces\n1. **Implicit Modifiers**:\n   * All variables in an interface are implicitly **`public static final`** (constants).\n   * All method declarations are implicitly **`public abstract`** (prior to Java 8).\n2. **Implementation**: A class uses the **`implements`** keyword to adhere to the interface contract.\n3. **Multiple Inheritance**: A single class can implement multiple interfaces:\n   ```java\n   class Smartphone implements Phone, Camera, MusicPlayer, GPS { ... }\n   ```\n\n---\n\n## 3. Modern Interface Features (Java 8+ & Java 9+)\n\n### A. `default` Methods (Java 8):\nAllows adding new methods to existing interfaces with a fallback implementation **without breaking** all existing implementing classes!\n```java\ninterface Vehicle {\n    void start();\n\n    default void logGps() {\n        System.out.println(\"Default GPS logging active\");\n    }\n}\n```\n\n### B. `static` Methods (Java 8):\nUtility methods belonging directly to the interface:\n```java\ninterface MathUtility {\n    static int cube(int x) { return x * x * x; }\n}\n```\n\n### C. `private` Methods (Java 9):\nReusable helper routines shared between default methods inside the interface.\n\n---\n\n## 4. Abstract Class vs Interface Master Comparison\n\n| Feature | Abstract Class | Interface |\n| :--- | :--- | :--- |\n| **Abstraction Level** | Partial (0% to 100%) | Complete (100% pure interface) |\n| **Multiple Inheritance**| **No** (Single inheritance only) | **Yes** (A class can implement N interfaces) |\n| **Variables** | Can have instance, static, final fields | Only `public static final` constants |\n| **Constructors** | Supported | **No constructors allowed** |\n| **Speed** | Slightly faster (direct table lookup) | Slightly slower (interface dispatch) |\n| **Keyword** | `extends` | `implements` |\n| **When to use?** | When classes share identity & state | When unrelated classes share common behavior |\n\n---\n\n## 💡 Key Takeaway\nInheritance answers *\"What the object IS\"*; Interfaces answer *\"What the object CAN DO\"*.",

  // d18-j1
  "d18-j1": "# 35. Encapsulation in Java (Data Hiding & JavaBeans)\n\n## 1. What is Encapsulation?\n**Encapsulation** is the fundamental OOP principle of binding **data (variables)** and the **code that manipulates that data (methods)** together into a single self-contained unit (capsule), while denying direct unauthorized access from external classes.\n\n```\n                    THE ENCAPSULATION CAPSULE\n             ┌─────────────────────────────────────┐\n             │              CLASS                  │\n             │   ┌─────────────────────────────┐   │\n             │   │    PRIVATE DATA FIELDS      │   │  <── Shielded from outside!\n             │   │  (name, accountBalance)     │   │\n             │   └─────────────────────────────┘   │\n             │                  ▲                  │\n             │                  │ Accessed via     │\n             │   ┌──────────────┴──────────────┐   │\n             │   │    PUBLIC GETTERS/SETTERS   │   │  <── Safe Public Interface\n             │   │  getName(), setBalance()    │   │\n             │   └─────────────────────────────┘   │\n             └─────────────────────────────────────┘\n```\n\n---\n\n## 2. The 3-Step Recipe for Full Encapsulation\n1. Declare all class variables as **`private`**.\n2. Provide **`public getVarName()`** getter methods to read field values.\n3. Provide **`public setVarName()`** setter methods with validation logic to update field values safely.\n\n---\n\n## 3. Real-World Robust Implementation\n\n```java\npublic class Employee {\n    // Step 1: Private fields\n    private int id;\n    private String name;\n    private double salary;\n\n    // Step 2 & 3: Getters and Validated Setters\n    public int getId() { return id; }\n    public void setId(int id) { this.id = id; }\n\n    public String getName() { return name; }\n    public void setName(String name) {\n        if (name != null && !name.trim().isEmpty()) {\n            this.name = name;\n        } else {\n            System.out.println(\"Error: Name cannot be blank!\");\n        }\n    }\n\n    public double getSalary() { return salary; }\n    public void setSalary(double salary) {\n        if (salary >= 15000.0) {\n            this.salary = salary;\n        } else {\n            System.out.println(\"Error: Salary below statutory minimum wage!\");\n        }\n    }\n}\n```\n\n---\n\n## 4. Key Advantages of Encapsulation\n1. **Control over Data**: Setters enforce security rules, business constraints, and sanity checks.\n2. **Read-Only / Write-Only Classes**: Omit the setter to create an immutable read-only class; omit the getter to create a write-only password repository.\n3. **Flexibility & Refactoring**: Internal variable names can be changed without breaking any external classes that use getters/setters!\n\n---\n\n## 💡 Key Takeaway\nEncapsulation gives an object complete ownership and veto power over its internal state.",

  // d18-j2
  "d18-j2": "# 36. The `this` Keyword in Java (Complete Guide)\n\n## 1. What is the `this` Keyword?\nIn Java, **`this`** is an implicit reference variable that points directly to the **current invoking object instance** inside any non-static method or constructor.\n\n---\n\n## 2. The 6 Essential Usages of `this`\n\n```\n                       THE 6 USES OF 'this'\n                                │\n   ┌──────────────┬─────────────┼─────────────┬──────────────┬─────────────┐\n   ▼              ▼             ▼             ▼              ▼             ▼\n1. Shadowed    2. Current    3. Constructor 4. Method      5. Constructor 6. Return\n   Variable       Method        Chaining       Argument       Argument       this\n```\n\n### 1. Differentiating Instance Variables from Local Variables (Shadowing):\nWhen method parameter names collide with instance variable names:\n```java\nclass Student {\n    String name;\n\n    Student(String name) {\n        this.name = name; // 'this.name' is the field; 'name' is the parameter!\n    }\n}\n```\n\n### 2. Constructor Chaining using `this()`:\nInvoking another overloaded constructor within the same class:\n```java\nclass Box {\n    int l, w, h;\n\n    Box() {\n        this(10, 10, 10); // Calls Box(int, int, int)\n    }\n\n    Box(int l, int w, int h) {\n        this.l = l; this.w = w; this.h = h;\n    }\n}\n```\n\n### 3. Invoking Current Class Method:\n```java\nvoid greet() { System.out.println(\"Hello\"); }\nvoid show() {\n    this.greet(); // Explicit invocation (compiler adds this implicitly)\n}\n```\n\n### 4. Passing `this` as an Argument in a Method Call:\n```java\nclass EventTracker {\n    void register(Button btn) { ... }\n}\nclass Button {\n    void setup() {\n        new EventTracker().register(this); // Passes current Button instance\n    }\n}\n```\n\n### 5. Passing `this` in Constructor Call:\nUsed when establishing two-way parent-child associations.\n\n### 6. Returning `this` (Method Chaining / Fluent API):\n```java\nclass QueryBuilder {\n    private String query = \"\";\n\n    QueryBuilder select(String fields) {\n        query += \"SELECT \" + fields + \" \";\n        return this; // Returns current instance!\n    }\n\n    QueryBuilder from(String table) {\n        query += \"FROM \" + table + \" \";\n        return this;\n    }\n}\n\n// Fluent Method Chaining:\nnew QueryBuilder().select(\"*\").from(\"users\");\n```\n\n---\n\n## 💡 Key Takeaway\n`this` is the object's way of saying *\"me\"* or *\"myself\"*. It can never be used inside `static` methods because static methods exist independently of any object instance.",

};

export function getLectureNote(taskId) {
  return lectureNotesData[taskId] || null;
}
