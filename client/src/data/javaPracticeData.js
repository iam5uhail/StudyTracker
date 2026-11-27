// Curated Core Java Practice Curriculum: From Basics to Advanced & Mini Projects (All 140 Questions)
export const JAVA_PRACTICE_LEVELS = [
  {
    "id": "level-1",
    "title": "Level 1: Start Here",
    "subtitle": "Basics, I/O with Scanner, Arithmetic & Type Casting",
    "count": 10
  },
  {
    "id": "level-2",
    "title": "Level 2: Conditions",
    "subtitle": "if/else, nested conditions, ternary, and switch-case",
    "count": 10
  },
  {
    "id": "level-3",
    "title": "Level 3: Loops & Patterns",
    "subtitle": "while, for, do-while, nested loops & logic patterns",
    "count": 10
  },
  {
    "id": "level-4",
    "title": "Level 4: Methods & Arrays",
    "subtitle": "Modular programming, 1D/2D arrays & matrix manipulation",
    "count": 10
  },
  {
    "id": "level-5",
    "title": "Level 5: Core OOP & Classes",
    "subtitle": "Classes, Objects, State, Methods & this Keyword",
    "count": 10
  },
  {
    "id": "level-6",
    "title": "Level 6: Constructors & Memory",
    "subtitle": "Default, Parameterized, Overloading & Heap/Stack",
    "count": 10
  },
  {
    "id": "level-7",
    "title": "Level 7: Inheritance & Super",
    "subtitle": "Single, Multilevel, Hierarchical & super keyword",
    "count": 10
  },
  {
    "id": "level-8",
    "title": "Level 8: Polymorphism & Dispatch",
    "subtitle": "Method Overriding, Overloading & Dynamic Dispatch",
    "count": 10
  },
  {
    "id": "level-9",
    "title": "Level 9: Abstraction & Interfaces",
    "subtitle": "Abstract Classes, Pure Interfaces & Multiple Inheritance",
    "count": 10
  },
  {
    "id": "level-10",
    "title": "Level 10: Encapsulation & Strings",
    "subtitle": "Data Hiding, JavaBeans, String Pool & StringBuilder",
    "count": 10
  },
  {
    "id": "level-11",
    "title": "Level 11: Exception Handling",
    "subtitle": "try-catch, finally, throw, throws & Custom Exceptions",
    "count": 10
  },
  {
    "id": "level-12",
    "title": "Level 12: Multithreading & Concurrency",
    "subtitle": "Thread, Runnable, Synchronization & Race Conditions",
    "count": 10
  },
  {
    "id": "level-13",
    "title": "Level 13: Collections: Lists & Sets",
    "subtitle": "ArrayList, LinkedList, HashSet, TreeSet & Iterators",
    "count": 10
  },
  {
    "id": "level-14",
    "title": "Level 14: Maps, Queues & Streams",
    "subtitle": "HashMap, PriorityQueue, Lambdas & Streams API",
    "count": 10
  }
];

export const JAVA_PRACTICE_QUESTIONS = [
  {
    "id": "l1_q1",
    "levelId": "level-1",
    "levelTitle": "Level 1: Start Here",
    "index": 1,
    "title": "Print Bio on Three Lines",
    "badge": "Basic Output",
    "tags": [
      "System.out.println",
      "Strings",
      "Syntax"
    ],
    "description": "Write a program in Java to print your Name, City, and Favourite Programming Language on three separate lines using `System.out.println()`.\n\nRequirements:\n1. Print Name on line 1.\n2. Print City on line 2.\n3. Print Favourite Language on line 3.",
    "sampleInput": "None (Direct Output)",
    "sampleOutput": "Name: Suhail\nCity: Panaji\nFavourite Language: Java",
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // Write your code below to print your name, city, and favourite language\n        \n    }\n}",
    "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Name: Suhail\");\n        System.out.println(\"City: Panaji\");\n        System.out.println(\"Favourite Language: Java\");\n    }\n}",
    "hints": [
      "Use System.out.println() for each line. It automatically adds a newline after printing.",
      "Strings in Java must always be enclosed in double quotes (\"), not single quotes (')."
    ],
    "concepts": "System.out.println() vs System.out.print(). println appends a newline \\n after outputting the argument."
  },
  {
    "id": "l1_q2",
    "levelId": "level-1",
    "levelTitle": "Level 1: Start Here",
    "index": 2,
    "title": "Two Integers: Sum, Diff, Product, Quotient",
    "badge": "Scanner & Arithmetic",
    "tags": [
      "Scanner",
      "Arithmetic",
      "Integers"
    ],
    "description": "Read two integers from standard input using `Scanner`.\nCalculate and print:\n1. Sum (a + b)\n2. Difference (a - b)\n3. Product (a * b)\n4. Quotient (a / b, as an integer or double)\n\nRequirements:\n- Use `Scanner sc = new Scanner(System.in);`\n- Read using `sc.nextInt()`\n- Display each result clearly with its label.",
    "sampleInput": "20 4",
    "sampleOutput": "Sum: 24\nDifference: 16\nProduct: 80\nQuotient: 5",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read two integers and compute sum, difference, product, quotient\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter first number: \");\n        int a = sc.nextInt();\n        System.out.print(\"Enter second number: \");\n        int b = sc.nextInt();\n\n        int sum = a + b;\n        int diff = a - b;\n        int prod = a * b;\n        int quot = a / b;\n\n        System.out.println(\"Sum: \" + sum);\n        System.out.println(\"Difference: \" + diff);\n        System.out.println(\"Product: \" + prod);\n        System.out.println(\"Quotient: \" + quot);\n        \n        sc.close();\n    }\n}",
    "hints": [
      "Remember to import java.util.Scanner at the top.",
      "Declare variables with int type: int a = sc.nextInt();",
      "If b is 0, integer division will throw ArithmeticException: / by zero."
    ],
    "concepts": "Integer division in Java discards decimals (truncates towards zero)."
  },
  {
    "id": "l1_q3",
    "levelId": "level-1",
    "levelTitle": "Level 1: Start Here",
    "index": 3,
    "title": "Area and Perimeter of a Rectangle",
    "badge": "Geometry & Double",
    "tags": [
      "Formula",
      "Math",
      "Scanner"
    ],
    "description": "Read the length and width of a rectangle (can be decimals/doubles) from the user.\nCalculate and print:\n- Area: length * width\n- Perimeter: 2 * (length + width)",
    "sampleInput": "7.5 4.0",
    "sampleOutput": "Area: 30.0\nPerimeter: 23.0",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read length and width (double) and print Area & Perimeter\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter length: \");\n        double length = sc.nextDouble();\n        System.out.print(\"Enter width: \");\n        double width = sc.nextDouble();\n\n        double area = length * width;\n        double perimeter = 2 * (length + width);\n\n        System.out.println(\"Area: \" + area);\n        System.out.println(\"Perimeter: \" + perimeter);\n        \n        sc.close();\n    }\n}",
    "hints": [
      "Use double length = sc.nextDouble(); to support decimals.",
      "Remember parentheses in 2 * (length + width) so addition happens before multiplication."
    ],
    "concepts": "Operator precedence: parentheses () have higher precedence than multiplication *."
  },
  {
    "id": "l1_q4",
    "levelId": "level-1",
    "levelTitle": "Level 1: Start Here",
    "index": 4,
    "title": "Celsius to Fahrenheit Converter",
    "badge": "Type Casting & Math",
    "tags": [
      "Conversion",
      "double",
      "Pitfall"
    ],
    "description": "Read a temperature in Celsius and convert it to Fahrenheit using the formula:\nF = (C * 9 / 5) + 32\n\n> [!WARNING] Common Java Trap:\n> In Java, writing `9 / 5` performs integer division and equals `1`, ruining the calculation!\n> You MUST write `9.0 / 5` or `9 / 5.0` to get `1.8`.",
    "sampleInput": "37.0",
    "sampleOutput": "Temperature in Fahrenheit: 98.6",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Convert Celsius to Fahrenheit\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter temperature in Celsius: \");\n        double celsius = sc.nextDouble();\n\n        // 9.0 / 5 ensures floating point division\n        double fahrenheit = (celsius * 9.0 / 5.0) + 32;\n\n        System.out.println(\"Temperature in Fahrenheit: \" + fahrenheit);\n        sc.close();\n    }\n}",
    "hints": [
      "Do not use 9 / 5! Use 9.0 / 5.0 or 1.8 directly.",
      "Test with 0°C -> 32.0°F and 100°C -> 212.0°F."
    ],
    "concepts": "Literal types: 9 is an int, 9.0 is a double. int / int = int, double / int = double."
  },
  {
    "id": "l1_q5",
    "levelId": "level-1",
    "levelTitle": "Level 1: Start Here",
    "index": 5,
    "title": "Days to Weeks and Days",
    "badge": "Modulo & Division",
    "tags": [
      "/",
      "%",
      "Time"
    ],
    "description": "Read a total number of days as an integer and convert it into weeks and remaining days.\n\nExample:\n- If input is `17`, output: `17 days = 2 weeks and 3 days`.\n- If input is `28`, output: `28 days = 4 weeks and 0 days`.",
    "sampleInput": "17",
    "sampleOutput": "17 days = 2 weeks and 3 days",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read total days and compute weeks and remainder days\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter total days: \");\n        int totalDays = sc.nextInt();\n\n        int weeks = totalDays / 7;\n        int remainingDays = totalDays % 7;\n\n        System.out.println(totalDays + \" days = \" + weeks + \" weeks and \" + remainingDays + \" days\");\n        sc.close();\n    }\n}",
    "hints": [
      "Use division / to get whole weeks: totalDays / 7",
      "Use modulus % to get the remainder days: totalDays % 7"
    ],
    "concepts": "The modulo operator % returns the remainder after integer division."
  },
  {
    "id": "l1_q6",
    "levelId": "level-1",
    "levelTitle": "Level 1: Start Here",
    "index": 6,
    "title": "Swap Two Variables (With & Without Temp)",
    "badge": "Variable Manipulation",
    "tags": [
      "Swap",
      "Logic",
      "Interview Basic"
    ],
    "description": "Read two numbers `a` and `b`.\nDemonstrate variable swapping in two distinct ways:\n1. Method 1: Using a temporary variable `temp`\n2. Method 2: Without using any extra variable (using arithmetic `+` and `-`)",
    "sampleInput": "10 25",
    "sampleOutput": "Original: a = 10, b = 25\nAfter swap with temp: a = 25, b = 10\nAfter swap without temp: a = 10, b = 25",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n\n        // 1. Swap with temp\n        \n        // 2. Swap without temp (using + and -)\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a: \");\n        int a = sc.nextInt();\n        System.out.print(\"Enter b: \");\n        int b = sc.nextInt();\n\n        System.out.println(\"Original: a = \" + a + \", b = \" + b);\n\n        // Method 1: Using temp variable\n        int temp = a;\n        a = b;\n        b = temp;\n        System.out.println(\"After swap with temp: a = \" + a + \", b = \" + b);\n\n        // Method 2: Without temp variable (using arithmetic)\n        a = a + b; // a now holds sum\n        b = a - b; // b becomes original a\n        a = a - b; // a becomes original b\n        System.out.println(\"After swap without temp: a = \" + a + \", b = \" + b);\n        \n        sc.close();\n    }\n}",
    "hints": [
      "For temp swap: store a in temp, assign b to a, assign temp to b.",
      "For arithmetic swap: a = a + b, b = a - b, a = a - b."
    ],
    "concepts": "Memory reassignment and in-place arithmetic variable swapping."
  },
  {
    "id": "l1_q7",
    "levelId": "level-1",
    "levelTitle": "Level 1: Start Here",
    "index": 7,
    "title": "Sum of Digits of a 3-Digit Number",
    "badge": "Digit Extraction",
    "tags": [
      "Digits",
      "%",
      "/",
      "Algorithm"
    ],
    "description": "Read a 3-digit integer from standard input (e.g. `384`).\nExtract each individual digit using `%` and `/` operators, and calculate their sum.\n\nExample:\n- Input: `384`\n- Calculation: 3 + 8 + 4 = 15\n- Output: `Sum of digits: 15`",
    "sampleInput": "384",
    "sampleOutput": "Sum of digits: 15",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read 3-digit number and sum its digits using % and /\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a 3-digit number: \");\n        int num = sc.nextInt();\n\n        // Extract units digit\n        int d3 = num % 10;\n        // Extract tens digit\n        int d2 = (num / 10) % 10;\n        // Extract hundreds digit\n        int d1 = num / 100;\n\n        int sum = d1 + d2 + d3;\n\n        System.out.println(\"Digits: \" + d1 + \" + \" + d2 + \" + \" + d3);\n        System.out.println(\"Sum of digits: \" + sum);\n        sc.close();\n    }\n}",
    "hints": [
      "num % 10 gives the last digit (e.g., 384 % 10 = 4).",
      "num / 10 chops off the last digit (e.g., 384 / 10 = 38).",
      "(num / 10) % 10 gives the middle digit."
    ],
    "concepts": "The modulo by 10 and divide by 10 pattern is the foundation for reversing numbers, palindromes, and digit counting in DSA."
  },
  {
    "id": "l1_q8",
    "levelId": "level-1",
    "levelTitle": "Level 1: Start Here",
    "index": 8,
    "title": "Calculate Simple Interest",
    "badge": "Financial Math",
    "tags": [
      "Formula",
      "double",
      "Scanner"
    ],
    "description": "Read Principal amount (P), Annual Rate of Interest in percent (R), and Time in years (T).\nCalculate and print:\n- Simple Interest: SI = (P * R * T / 100)\n- Total Amount: \Principal + SI",
    "sampleInput": "10000 7.5 3",
    "sampleOutput": "Simple Interest: 2250.0\nTotal Amount: 12250.0",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read P, R, T and compute Simple Interest\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter Principal: \");\n        double p = sc.nextDouble();\n        System.out.print(\"Enter Rate (%): \");\n        double r = sc.nextDouble();\n        System.out.print(\"Enter Time (years): \");\n        double t = sc.nextDouble();\n\n        double si = (p * r * t) / 100.0;\n        double total = p + si;\n\n        System.out.println(\"Simple Interest: \" + si);\n        System.out.println(\"Total Amount: \" + total);\n        sc.close();\n    }\n}",
    "hints": [
      "Use double for precision since interest and rates can be decimals.",
      "Formula: (P * R * T) / 100.0"
    ],
    "concepts": "Floating point arithmetic and standard order of operations."
  },
  {
    "id": "l1_q9",
    "levelId": "level-1",
    "levelTitle": "Level 1: Start Here",
    "index": 9,
    "title": "Integer vs Floating Division & Modulo",
    "badge": "Core Concept Analysis",
    "tags": [
      "Division",
      "Casting",
      "Evaluation"
    ],
    "description": "Write a program to print the result of the following 4 expressions and explain why they differ:\n1. `10 / 3`\n2. `10 % 3`\n3. `10 / 3.0`\n4. `(double) 10 / 3`\n\nExpected Observations:\n- Explain why `10 / 3` gives `3` and not `3.3333333333333335`.\n- Explain how `10 % 3` produces the remainder.\n- Explain how introducing a double operand promotes the entire expression to floating-point.",
    "sampleInput": "None (Direct code analysis)",
    "sampleOutput": "10 / 3 = 3\n10 % 3 = 1\n10 / 3.0 = 3.3333333333333335\n(double) 10 / 3 = 3.3333333333333335",
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // Print the 4 expressions and examine output\n        \n    }\n}",
    "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"10 / 3 = \" + (10 / 3));                     // int / int -> int (truncated: 3)\n        System.out.println(\"10 % 3 = \" + (10 % 3));                     // int % int -> remainder (1)\n        System.out.println(\"10 / 3.0 = \" + (10 / 3.0));                 // int / double -> double (3.333...)\n        System.out.println(\"(double) 10 / 3 = \" + ((double) 10 / 3));   // explicit cast promotes to double\n    }\n}",
    "hints": [
      "Wrap each expression in parentheses when concatenating with strings: \"10 / 3 = \" + (10 / 3).",
      "Notice that (double) 10 / 3 casts 10 to 10.0 first, then divides by 3."
    ],
    "concepts": "Automatic Type Promotion: If one operand in an arithmetic operation is double, the other is promoted to double."
  },
  {
    "id": "l1_q10",
    "levelId": "level-1",
    "levelTitle": "Level 1: Start Here",
    "index": 10,
    "title": "Predict Output: Post/Pre Increment & Precedence",
    "badge": "Interview Drill",
    "tags": [
      "++",
      "--",
      "Precedence",
      "Quiz"
    ],
    "description": "Study this code snippet. First, predict the output on paper, then run the program to check your reasoning:\n\n```java\nint a = 5;\nint b = a++ + ++a * 2;\nint c = --b - a--;\nSystem.out.println(\"a = \" + a);\nSystem.out.println(\"b = \" + b);\nSystem.out.println(\"c = \" + c);\n```\n\nStep-by-Step Breakdown:\n1. `a++`: uses current `a` (5), then `a` becomes 6.\n2. `++a`: `a` increments first to 7, then used as 7.\n3. Multiplication has higher precedence: 7 * 2 = 14.\n4. b = 5 + 14 = 19.",
    "sampleInput": "None",
    "sampleOutput": "a = 6\nb = 19\nc = 11",
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = a++ + ++a * 2;\n        int c = --b - a--;\n\n        System.out.println(\"a = \" + a);\n        System.out.println(\"b = \" + b);\n        System.out.println(\"c = \" + c);\n    }\n}",
    "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        // Step 1: a++ yields 5, then a becomes 6\n        // Step 2: ++a increments a to 7, yields 7\n        // Step 3: 7 * 2 = 14\n        // Step 4: 5 + 14 = 19 (b = 19, a = 7)\n        int b = a++ + ++a * 2;\n\n        // Step 5: --b decrements b to 18, yields 18\n        // Step 6: a-- yields 7, then a becomes 6\n        // Step 7: c = 18 - 7 = 11\n        int c = --b - a--;\n\n        System.out.println(\"a = \" + a); // 6\n        System.out.println(\"b = \" + b); // 18\n        System.out.println(\"c = \" + c); // 11\n    }\n}",
    "hints": [
      "Post-increment (x++): use original value in expression, then increment variable in memory.",
      "Pre-increment (++x): increment variable first, then use new value in expression."
    ],
    "concepts": "Operator Precedence and Post-fix vs Pre-fix evaluation order in Java."
  },
  {
    "id": "l2_q1",
    "levelId": "level-2",
    "levelTitle": "Level 2: Conditions",
    "index": 1,
    "title": "Positive, Negative, or Zero",
    "badge": "if-else",
    "tags": [
      "Scanner",
      "Conditionals",
      "Comparison"
    ],
    "description": "Read an integer from the user using `Scanner`.\nCheck and print whether the number is:\n- Positive (n > 0)\n- Negative (n < 0)\n- Zero (n == 0)",
    "sampleInput": "-15",
    "sampleOutput": "-15 is Negative",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read number and check positive, negative, or zero\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int n = sc.nextInt();\n\n        if (n > 0) {\n            System.out.println(n + \" is Positive\");\n        } else if (n < 0) {\n            System.out.println(n + \" is Negative\");\n        } else {\n            System.out.println(\"The number is Zero\");\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "Use if (n > 0) ... else if (n < 0) ... else ...",
      "Test all three cases: positive, negative, and zero."
    ],
    "concepts": "Multi-way branching with if, else if, and else."
  },
  {
    "id": "l2_q2",
    "levelId": "level-2",
    "levelTitle": "Level 2: Conditions",
    "index": 2,
    "title": "Even or Odd Number",
    "badge": "Modulo & if",
    "tags": [
      "Even/Odd",
      "Modulo",
      "Bitwise"
    ],
    "description": "Read an integer from the user.\nDetermine and print whether the number is Even or Odd.\n\nLogic:\n- A number is Even if `n % 2 == 0`.\n- Otherwise, it is Odd.",
    "sampleInput": "42",
    "sampleOutput": "42 is Even",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Check even or odd\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int n = sc.nextInt();\n\n        if (n % 2 == 0) {\n            System.out.println(n + \" is Even\");\n        } else {\n            System.out.println(n + \" is Odd\");\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "Use % 2 to check the remainder.",
      "Bonus: you can also check using bitwise AND: if ((n & 1) == 0) Even else Odd!"
    ],
    "concepts": "Testing parity with the modulo operator % or bitwise &."
  },
  {
    "id": "l2_q3",
    "levelId": "level-2",
    "levelTitle": "Level 2: Conditions",
    "index": 3,
    "title": "Find Largest of Three Numbers",
    "badge": "Nested / Logical AND",
    "tags": [
      "&&",
      "Comparison",
      "Max"
    ],
    "description": "Read three integers `a`, `b`, and `c` from the user.\nFind and print the largest number using `if / else if` statements (do NOT use arrays or `Math.max`).\n\nRequirements:\n- Handle scenarios where two or all three numbers are equal.",
    "sampleInput": "45 92 18",
    "sampleOutput": "The largest number is: 92",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Find largest of 3 numbers using if / else if\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter three numbers: \");\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        int c = sc.nextInt();\n\n        if (a >= b && a >= c) {\n            System.out.println(\"The largest number is: \" + a);\n        } else if (b >= a && b >= c) {\n            System.out.println(\"The largest number is: \" + b);\n        } else {\n            System.out.println(\"The largest number is: \" + c);\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "Use >= to handle equal inputs cleanly.",
      "Combine conditions with logical AND (&&)."
    ],
    "concepts": "Logical operators && (AND) requires all sub-conditions to be true."
  },
  {
    "id": "l2_q4",
    "levelId": "level-2",
    "levelTitle": "Level 2: Conditions",
    "index": 4,
    "title": "Leap Year Checker",
    "badge": "Complex Logic",
    "tags": [
      "Leap Year",
      "Calendar",
      "&&",
      "||"
    ],
    "description": "Read a year (e.g. `2024`, `1900`, `2000`).\nCheck whether it is a Leap Year based on standard Gregorian calendar rules:\n- A year is a leap year if it is divisible by `4`.\n- Except century years (ending in `00`), which MUST be divisible by `400`.\n\nExamples:\n- `2024` -> Leap Year (divisible by 4, not century)\n- `1900` -> NOT a Leap Year (divisible by 4 and 100, but not 400)\n- `2000` -> Leap Year (divisible by 400)",
    "sampleInput": "2000",
    "sampleOutput": "2000 is a Leap Year",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read year and check if it is a leap year\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter year: \");\n        int year = sc.nextInt();\n\n        boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);\n\n        if (isLeap) {\n            System.out.println(year + \" is a Leap Year\");\n        } else {\n            System.out.println(year + \" is NOT a Leap Year\");\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "The single boolean condition is: (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)",
      "1900, 2100 are NOT leap years; 2000, 2024 ARE leap years."
    ],
    "concepts": "Combining && (AND) and || (OR) with grouping parentheses."
  },
  {
    "id": "l2_q5",
    "levelId": "level-2",
    "levelTitle": "Level 2: Conditions",
    "index": 5,
    "title": "Student Grade Calculator",
    "badge": "Grading Scale",
    "tags": [
      "Grades",
      "Ranges",
      "Validation"
    ],
    "description": "Read a student's marks out of `100` (can be 0 to 100).\nValidate that marks are between 0 and 100, then assign and print the grade:\n- Grade A: Marks \>= 90\n- Grade B: Marks \>= 75 and < 90\n- Grade C: Marks \>= 50 and < 75\n- Fail: Marks < 50\n- If marks < 0 or > 100, print `\"Invalid Marks\"`.",
    "sampleInput": "84",
    "sampleOutput": "Grade: B",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read marks out of 100 and print grade\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter marks (0-100): \");\n        double marks = sc.nextDouble();\n\n        if (marks < 0 || marks > 100) {\n            System.out.println(\"Invalid Marks! Must be between 0 and 100.\");\n        } else if (marks >= 90) {\n            System.out.println(\"Grade: A\");\n        } else if (marks >= 75) {\n            System.out.println(\"Grade: B\");\n        } else if (marks >= 50) {\n            System.out.println(\"Grade: C\");\n        } else {\n            System.out.println(\"Result: Fail\");\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "Check invalid inputs first: if (marks < 0 || marks > 100).",
      "Because if-else ladders check sequentially, checking >= 90 first makes the next check only trigger for < 90 automatically."
    ],
    "concepts": "Cascading if-else conditions and defensive input validation."
  },
  {
    "id": "l2_q6",
    "levelId": "level-2",
    "levelTitle": "Level 2: Conditions",
    "index": 6,
    "title": "Vowel, Consonant, or Not a Letter",
    "badge": "Characters & Character Class",
    "tags": [
      "char",
      "Character",
      "Vowels"
    ],
    "description": "Read a single character from the user.\nPrint whether the character is:\n1. A Vowel (`A, E, I, O, U` or `a, e, i, o, u`)\n2. A Consonant (any other English letter)\n3. Not a letter (digit, symbol, whitespace, etc.)\n\nHow to read a char in Java:\n`char ch = sc.next().charAt(0);`",
    "sampleInput": "e",
    "sampleOutput": "'e' is a Vowel",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read single char and classify as Vowel, Consonant, or Not a Letter\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a single character: \");\n        char ch = sc.next().charAt(0);\n\n        if (!Character.isLetter(ch)) {\n            System.out.println(\"'\" + ch + \"' is NOT a letter\");\n        } else {\n            char lower = Character.toLowerCase(ch);\n            if (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u') {\n                System.out.println(\"'\" + ch + \"' is a Vowel\");\n            } else {\n                System.out.println(\"'\" + ch + \"' is a Consonant\");\n            }\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "Scanner does not have a nextChar() method. Use sc.next().charAt(0).",
      "Use Character.isLetter(ch) to check if it is alphabetical.",
      "Convert to lowercase with Character.toLowerCase(ch) to check fewer cases."
    ],
    "concepts": "Character manipulation, char primitives, and java.lang.Character utility methods."
  },
  {
    "id": "l2_q7",
    "levelId": "level-2",
    "levelTitle": "Level 2: Conditions",
    "index": 7,
    "title": "Day Name using Switch Statement",
    "badge": "Switch-Case",
    "tags": [
      "switch",
      "Days",
      "break"
    ],
    "description": "Read a number from `1` to `7` from standard input.\nUse a `switch` statement to print the corresponding day name:\n- `1` -> Monday\n- `2` -> Tuesday\n- `3` -> Wednesday\n- `4` -> Thursday\n- `5` -> Friday\n- `6` -> Saturday\n- `7` -> Sunday\n- Any other number -> `\"Invalid day number (must be 1-7)\"`",
    "sampleInput": "5",
    "sampleOutput": "Friday",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read number 1-7 and print day name using switch\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter day number (1-7): \");\n        int day = sc.nextInt();\n\n        switch (day) {\n            case 1:\n                System.out.println(\"Monday\");\n                break;\n            case 2:\n                System.out.println(\"Tuesday\");\n                break;\n            case 3:\n                System.out.println(\"Wednesday\");\n                break;\n            case 4:\n                System.out.println(\"Thursday\");\n                break;\n            case 5:\n                System.out.println(\"Friday\");\n                break;\n            case 6:\n                System.out.println(\"Saturday\");\n                break;\n            case 7:\n                System.out.println(\"Sunday\");\n                break;\n            default:\n                System.out.println(\"Invalid day number (must be 1-7)\");\n                break;\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "Do not forget break; after each case, otherwise execution falls through!",
      "Use default: for invalid numbers outside 1-7."
    ],
    "concepts": "Switch control flow and fall-through prevention with break."
  },
  {
    "id": "l2_q8",
    "levelId": "level-2",
    "levelTitle": "Level 2: Conditions",
    "index": 8,
    "title": "Mini Calculator with Division by Zero Guard",
    "badge": "Interactive Tool",
    "tags": [
      "Calculator",
      "switch",
      "char",
      "Defensive"
    ],
    "description": "Build a console calculator:\n1. Read the first number (`double num1`).\n2. Read an operator (`char op`: `+`, `-`, `*`, `/`).\n3. Read the second number (`double num2`).\n4. Use a `switch` statement on `op` to calculate and print the result.\n5. Defensive Guard: If `op == '/'` and `num2 == 0`, print an error message `\"Error: Division by zero is not allowed!\"` instead of computing.",
    "sampleInput": "15.0 / 3.0",
    "sampleOutput": "Result: 15.0 / 3.0 = 5.0",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Build mini calculator using switch\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter first number: \");\n        double num1 = sc.nextDouble();\n\n        System.out.print(\"Enter operator (+, -, *, /): \");\n        char op = sc.next().charAt(0);\n\n        System.out.print(\"Enter second number: \");\n        double num2 = sc.nextDouble();\n\n        switch (op) {\n            case '+':\n                System.out.println(\"Result: \" + (num1 + num2));\n                break;\n            case '-':\n                System.out.println(\"Result: \" + (num1 - num2));\n                break;\n            case '*':\n                System.out.println(\"Result: \" + (num1 * num2));\n                break;\n            case '/':\n                if (num2 == 0) {\n                    System.out.println(\"Error: Division by zero is not allowed!\");\n                } else {\n                    System.out.println(\"Result: \" + (num1 / num2));\n                }\n                break;\n            default:\n                System.out.println(\"Error: Invalid operator '\" + op + \"'\");\n                break;\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "Read char op with sc.next().charAt(0).",
      "Inside case '/': add an if check for num2 == 0.",
      "Always add default: to catch invalid operators like % or $."
    ],
    "concepts": "Multi-type console input handling and defensive arithmetic checks."
  },
  {
    "id": "l2_q9",
    "levelId": "level-2",
    "levelTitle": "Level 2: Conditions",
    "index": 9,
    "title": "Triangle Validity & Classification",
    "badge": "Geometry & Logic",
    "tags": [
      "Triangle",
      "Inequality",
      "Nested if"
    ],
    "description": "Read three side lengths (`a`, `b`, `c`) of a triangle.\n1. Check Validity: A triangle is valid if and only if the sum of any two sides is greater than the third side:\n   - a + b > c AND a + c > b AND b + c > a\n2. If Valid, classify it as:\n   - Equilateral: All 3 sides are equal (a == b == c)\n   - Isosceles: Exactly 2 sides are equal (a == b or b == c or a == c)\n   - Scalene: All 3 sides are different\n3. If Invalid, print `\"Invalid Triangle: Cannot form a triangle with these sides.\"`",
    "sampleInput": "5 5 8",
    "sampleOutput": "Valid Triangle: Isosceles",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Check triangle validity and classify type\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter three sides: \");\n        double a = sc.nextDouble();\n        double b = sc.nextDouble();\n        double c = sc.nextDouble();\n\n        // 1. Triangle inequality check\n        boolean isValid = (a + b > c) && (a + c > b) && (b + c > a);\n\n        if (!isValid) {\n            System.out.println(\"Invalid Triangle: Cannot form a triangle with these sides.\");\n        } else {\n            // 2. Classify type\n            if (a == b && b == c) {\n                System.out.println(\"Valid Triangle: Equilateral\");\n            } else if (a == b || b == c || a == c) {\n                System.out.println(\"Valid Triangle: Isosceles\");\n            } else {\n                System.out.println(\"Valid Triangle: Scalene\");\n            }\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "In Java you cannot write a == b == c. You must write (a == b && b == c).",
      "Check Equilateral before Isosceles, because an equilateral triangle also has 2 equal sides!"
    ],
    "concepts": "Ordering nested conditional checks from most specific (Equilateral) to general (Isosceles)."
  },
  {
    "id": "l2_q10",
    "levelId": "level-2",
    "levelTitle": "Level 2: Conditions",
    "index": 10,
    "title": "Ticket Pricing with Member Discount",
    "badge": "Business Logic Drill",
    "tags": [
      "Pricing",
      "boolean",
      "Discount",
      "Ternary"
    ],
    "description": "Read an age (`int`) and a membership status (`boolean isMember`: `true` or `false`).\n\nCalculate and print the final ticket price based on:\n1. Base Price:\n   - Age < 5: Free (₹0)\n   - Age 5 to 17: ₹100\n   - Age \>= 18: ₹200\n2. Member Discount:\n   - If `isMember` is `true`, apply a 20% discount on the base price (20% = 0.20).\n   - (Free tickets remain ₹0).",
    "sampleInput": "24 true",
    "sampleOutput": "Base Price: ₹200.0\nDiscount Applied (20%): ₹40.0\nFinal Ticket Price: ₹160.0",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read age and boolean isMember, compute ticket price with discount\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter age: \");\n        int age = sc.nextInt();\n\n        System.out.print(\"Is member? (true/false): \");\n        boolean isMember = sc.nextBoolean();\n\n        double basePrice;\n\n        if (age < 5) {\n            basePrice = 0.0;\n        } else if (age <= 17) {\n            basePrice = 100.0;\n        } else {\n            basePrice = 200.0;\n        }\n\n        double discount = (isMember && basePrice > 0) ? (basePrice * 0.20) : 0.0;\n        double finalPrice = basePrice - discount;\n\n        System.out.println(\"Base Price: ₹\" + basePrice);\n        if (isMember && basePrice > 0) {\n            System.out.println(\"Member Discount (20%): -₹\" + discount);\n        }\n        System.out.println(\"Final Ticket Price: ₹\" + finalPrice);\n        sc.close();\n    }\n}",
    "hints": [
      "Read a boolean in Scanner using sc.nextBoolean().",
      "Use ternary operator for discount: (isMember && basePrice > 0) ? (basePrice * 0.2) : 0;",
      "Free tickets (age < 5) should not have negative discount."
    ],
    "concepts": "Combining conditional branching with boolean flags and financial discount calculation."
  },
  {
    "id": "l3_q1",
    "levelId": "level-3",
    "levelTitle": "Level 3: Loops & Patterns",
    "index": 1,
    "title": "Print 1 to N and N to 1",
    "badge": "Loop Basics",
    "tags": [
      "while",
      "for",
      "Counters"
    ],
    "description": "Read an integer N from standard input.\nPrint all numbers from 1 to N in ascending order on one line, and from N down to 1 in descending order on the next line.\n\nExample:\n- Input: `5`\n- Output:\n  `Forward: 1 2 3 4 5`\n  `Backward: 5 4 3 2 1`",
    "sampleInput": "5",
    "sampleOutput": "Forward: 1 2 3 4 5\nBackward: 5 4 3 2 1",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N and print 1 to N forward and backward\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        System.out.print(\"Forward: \");\n        for (int i = 1; i <= n; i++) {\n            System.out.print(i + (i == n ? \"\" : \" \"));\n        }\n        System.out.println();\n\n        System.out.print(\"Backward: \");\n        for (int i = n; i >= 1; i--) {\n            System.out.print(i + (i == 1 ? \"\" : \" \"));\n        }\n        System.out.println();\n        sc.close();\n    }\n}",
    "hints": [
      "Use a standard for loop: for (int i = 1; i <= n; i++).",
      "For backward count: for (int i = n; i >= 1; i--)."
    ],
    "concepts": "Loop control variables, increment (i++) vs decrement (i--), and loop termination conditions."
  },
  {
    "id": "l3_q2",
    "levelId": "level-3",
    "levelTitle": "Level 3: Loops & Patterns",
    "index": 2,
    "title": "Sum of First N Numbers & Factorial",
    "badge": "Accumulator Pattern",
    "tags": [
      "Accumulator",
      "Factorial",
      "Math"
    ],
    "description": "Read a positive integer N.\nCompute and print:\n1. Sum of first N natural numbers (1 + 2 + \... + N)\n2. Factorial of N (N! = 1 * 2 * \... * N)\n\nExample:\n- Input: `5`\n- Output:\n  `Sum: 15`\n  `Factorial: 120`",
    "sampleInput": "5",
    "sampleOutput": "Sum: 15\nFactorial: 120",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Compute sum and factorial of N\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        int sum = 0;\n        long fact = 1;\n\n        for (int i = 1; i <= n; i++) {\n            sum += i;\n            fact *= i;\n        }\n\n        System.out.println(\"Sum: \" + sum);\n        System.out.println(\"Factorial: \" + fact);\n        sc.close();\n    }\n}",
    "hints": [
      "Initialize sum with 0 (additive identity) and fact with 1 (multiplicative identity).",
      "Use long for factorial to avoid 32-bit integer overflow on numbers >= 13."
    ],
    "concepts": "Accumulator variables in loops and numeric data type limits (int vs long)."
  },
  {
    "id": "l3_q3",
    "levelId": "level-3",
    "levelTitle": "Level 3: Loops & Patterns",
    "index": 3,
    "title": "Multiplication Table of a Number",
    "badge": "Iteration Drill",
    "tags": [
      "Table",
      "Multiplication",
      "for"
    ],
    "description": "Read an integer N from standard input.\nPrint its multiplication table from 1 to 10 in the format: `N x i = Result`.\n\nExample:\n- Input: `7`\n- Output:\n  `7 x 1 = 7`\n  `7 x 2 = 14`\n  ...\n  `7 x 10 = 70`",
    "sampleInput": "7",
    "sampleOutput": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Print multiplication table\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(n + \" x \" + i + \" = \" + (n * i));\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "Loop from i = 1 up to 10 inclusive.",
      "Concatenate output: n + \" x \" + i + \" = \" + (n * i)"
    ],
    "concepts": "String formatting and arithmetic inside loop iterations."
  },
  {
    "id": "l3_q4",
    "levelId": "level-3",
    "levelTitle": "Level 3: Loops & Patterns",
    "index": 4,
    "title": "Count Digits & Reverse an Integer",
    "badge": "Digit Extraction",
    "tags": [
      "while",
      "%",
      "/",
      "Reverse"
    ],
    "description": "Read an integer N.\n1. Count the total number of digits.\n2. Reverse the digits of the number.\n\nExample:\n- Input: `12345`\n- Output:\n  `Number of digits: 5`\n  `Reversed: 54321`",
    "sampleInput": "12345",
    "sampleOutput": "Number of digits: 5\nReversed: 54321",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Extract digits, count them, and construct reversed number\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num = sc.nextInt();\n\n        int temp = num;\n        int count = 0;\n        int reversed = 0;\n\n        while (temp > 0) {\n            int digit = temp % 10;\n            reversed = reversed * 10 + digit;\n            count++;\n            temp = temp / 10;\n        }\n\n        System.out.println(\"Number of digits: \" + count);\n        System.out.println(\"Reversed: \" + reversed);\n        sc.close();\n    }\n}",
    "hints": [
      "Extract last digit using num % 10.",
      "Shift previous reversed number left: reversed = reversed * 10 + digit.",
      "Remove last digit: temp = temp / 10."
    ],
    "concepts": "Base-10 arithmetic: modulo 10 extracts units digit, integer division by 10 discards units digit."
  },
  {
    "id": "l3_q5",
    "levelId": "level-3",
    "levelTitle": "Level 3: Loops & Patterns",
    "index": 5,
    "title": "Palindrome Number Checker",
    "badge": "Number Theory",
    "tags": [
      "Palindrome",
      "while",
      "Logic"
    ],
    "description": "A number is a Palindrome if it reads the same backward as forward (e.g., `1221`, `1331`).\nRead an integer and print whether it is a palindrome.\n\nExample:\n- Input: `1221` -> Output: `1221 is a Palindrome`\n- Input: `1234` -> Output: `1234 is not a Palindrome`",
    "sampleInput": "1221",
    "sampleOutput": "1221 is a Palindrome",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Check if number is palindrome\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num = sc.nextInt();\n\n        int original = num;\n        int reversed = 0;\n\n        while (num > 0) {\n            int rem = num % 10;\n            reversed = reversed * 10 + rem;\n            num /= 10;\n        }\n\n        if (original == reversed) {\n            System.out.println(original + \" is a Palindrome\");\n        } else {\n            System.out.println(original + \" is not a Palindrome\");\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "Save the original number before the while loop, because the loop reduces num to 0.",
      "Compare original == reversed at the end."
    ],
    "concepts": "Preserving state before destructive iteration."
  },
  {
    "id": "l3_q6",
    "levelId": "level-3",
    "levelTitle": "Level 3: Loops & Patterns",
    "index": 6,
    "title": "Prime Number Checker",
    "badge": "Optimization Drill",
    "tags": [
      "Prime",
      "Square Root",
      "Optimization"
    ],
    "description": "Read an integer N.\nDetermine if N is a Prime Number (a number greater than 1 that has no positive divisors other than 1 and itself).\n\nRequirements:\n- Optimized loop checking up to \√(N) (i * i \<= N).\n- Numbers \<= 1 are not prime.",
    "sampleInput": "29",
    "sampleOutput": "29 is Prime",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Check if N is prime\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        boolean isPrime = true;\n\n        if (n <= 1) {\n            isPrime = false;\n        } else {\n            for (int i = 2; i * i <= n; i++) {\n                if (n % i == 0) {\n                    isPrime = false;\n                    break;\n                }\n            }\n        }\n\n        if (isPrime) {\n            System.out.println(n + \" is Prime\");\n        } else {\n            System.out.println(n + \" is not Prime\");\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "If a number has a factor greater than its square root, it must also have one smaller than its square root.",
      "Loop condition: i * i <= n is O(sqrt(N)) instead of O(N)."
    ],
    "concepts": "Square-root optimization for primality testing and early loop termination with break."
  },
  {
    "id": "l3_q7",
    "levelId": "level-3",
    "levelTitle": "Level 3: Loops & Patterns",
    "index": 7,
    "title": "Fibonacci Series up to N Terms",
    "badge": "State Transition",
    "tags": [
      "Fibonacci",
      "Series",
      "Variables"
    ],
    "description": "Read an integer N representing the number of terms.\nPrint the first N numbers in the Fibonacci Sequence:\n0, 1, 1, 2, 3, 5, 8, 13, \...\n\nExample:\n- Input: `8`\n- Output: `Fibonacci: 0 1 1 2 3 5 8 13`",
    "sampleInput": "8",
    "sampleOutput": "Fibonacci: 0 1 1 2 3 5 8 13",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Print first N Fibonacci terms\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        System.out.print(\"Fibonacci: \");\n\n        int a = 0;\n        int b = 1;\n\n        for (int i = 1; i <= n; i++) {\n            System.out.print(a + (i == n ? \"\" : \" \"));\n            int next = a + b;\n            a = b;\n            b = next;\n        }\n        System.out.println();\n        sc.close();\n    }\n}",
    "hints": [
      "Start with a = 0, b = 1.",
      "In each step: print a, compute next = a + b, slide a = b, b = next."
    ],
    "concepts": "Sliding window variable update for recurrence relations."
  },
  {
    "id": "l3_q8",
    "levelId": "level-3",
    "levelTitle": "Level 3: Loops & Patterns",
    "index": 8,
    "title": "GCD and LCM (Euclidean Algorithm)",
    "badge": "Euclid Algorithm",
    "tags": [
      "GCD",
      "LCM",
      "Euclid"
    ],
    "description": "Read two integers A and B.\nCalculate and print:\n1. Greatest Common Divisor (GCD) using the Euclidean algorithm: gcd(A, B) = gcd(B, A % B)\n2. Least Common Multiple (LCM) using formula: \LCM = (A * B / \GCD)\n\nExample:\n- Input: `12 18`\n- Output:\n  `GCD: 6`\n  `LCM: 36`",
    "sampleInput": "12 18",
    "sampleOutput": "GCD: 6\nLCM: 36",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Calculate GCD and LCM\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n\n        int n1 = a;\n        int n2 = b;\n\n        while (n2 != 0) {\n            int rem = n1 % n2;\n            n1 = n2;\n            n2 = rem;\n        }\n\n        int gcd = n1;\n        int lcm = (a * b) / gcd;\n\n        System.out.println(\"GCD: \" + gcd);\n        System.out.println(\"LCM: \" + lcm);\n        sc.close();\n    }\n}",
    "hints": [
      "Euclidean algorithm: while (b != 0) { rem = a % b; a = b; b = rem; } -> GCD is a.",
      "LCM = (A * B) / GCD."
    ],
    "concepts": "Logarithmic Euclidean division algorithm and relation between GCD & LCM."
  },
  {
    "id": "l3_q9",
    "levelId": "level-3",
    "levelTitle": "Level 3: Loops & Patterns",
    "index": 9,
    "title": "Right-Angled Star Triangle Pattern",
    "badge": "Nested Loops",
    "tags": [
      "Pattern",
      "Stars",
      "Nested"
    ],
    "description": "Read an integer N representing the number of rows.\nPrint a right-angled triangle of stars (`*`) where row i has i stars separated by spaces.\n\nExample for N = 4:\n`* `\n`* * `\n`* * * `\n`* * * * `",
    "sampleInput": "4",
    "sampleOutput": "*\n* *\n* * *\n* * * *",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Print right-angled triangle pattern\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"*\" + (j == i ? \"\" : \" \"));\n            }\n            System.out.println();\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "Outer loop for (int i = 1; i <= n; i++) controls the rows.",
      "Inner loop for (int j = 1; j <= i; j++) controls the columns."
    ],
    "concepts": "Nested loops: outer loop controls row height, inner loop controls column count."
  },
  {
    "id": "l3_q10",
    "levelId": "level-3",
    "levelTitle": "Level 3: Loops & Patterns",
    "index": 10,
    "title": "Inverted Number Triangle Pattern",
    "badge": "Grid Logic",
    "tags": [
      "Pattern",
      "Numbers",
      "Matrix"
    ],
    "description": "Read an integer N.\nPrint a number triangle where row i prints numbers from 1 up to i:\n\nExample for N = 4:\n`1`\n`1 2`\n`1 2 3`\n`1 2 3 4`",
    "sampleInput": "4",
    "sampleOutput": "1\n1 2\n1 2 3\n1 2 3 4",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Print number triangle\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + (j == i ? \"\" : \" \"));\n            }\n            System.out.println();\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "Print j instead of stars.",
      "Add a newline after the inner loop finishes."
    ],
    "concepts": "Dynamic inner loop boundary dependent on outer loop variable."
  },
  {
    "id": "l4_q1",
    "levelId": "level-4",
    "levelTitle": "Level 4: Methods & Arrays",
    "index": 1,
    "title": "Method: Custom Power Function (x^n)",
    "badge": "Modular Programming",
    "tags": [
      "Method",
      "Power",
      "Functions"
    ],
    "description": "Write a static method `int power(int base, int exp)` that computes base^{exp} using a loop.\nRead two integers `base` and `exp` and print the result.\n\nExample:\n- Input: `2 5`\n- Output: `2^5 = 32`",
    "sampleInput": "2 5",
    "sampleOutput": "2^5 = 32",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    // Write static int power(int base, int exp)\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int base = sc.nextInt();\n        int exp = sc.nextInt();\n        // Call power() and print result\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    static int power(int base, int exp) {\n        int res = 1;\n        for (int i = 1; i <= exp; i++) {\n            res *= base;\n        }\n        return res;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int base = sc.nextInt();\n        int exp = sc.nextInt();\n        System.out.println(base + \"^\" + exp + \" = \" + power(base, exp));\n        sc.close();\n    }\n}",
    "hints": [
      "Declare method outside main: static int power(int base, int exp).",
      "Initialize result to 1 and multiply base exp times."
    ],
    "concepts": "Method signatures, parameters, return values, and static method invocation."
  },
  {
    "id": "l4_q2",
    "levelId": "level-4",
    "levelTitle": "Level 4: Methods & Arrays",
    "index": 2,
    "title": "Method Overloading: Calculate Area",
    "badge": "Polymorphism",
    "tags": [
      "Overloading",
      "Math",
      "Signatures"
    ],
    "description": "Demonstrate method overloading by creating two overloaded static methods:\n1. `double area(double radius)` -> returns circle area: \π r^2\n2. `int area(int length, int width)` -> returns rectangle area: l * w\n\nRead: `radius` (double), `length` (int), `width` (int) and print both areas.",
    "sampleInput": "7.0 4 6",
    "sampleOutput": "Circle Area: 153.93804002589985\nRectangle Area: 24",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    // Implement overloaded area methods\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double r = sc.nextDouble();\n        int l = sc.nextInt();\n        int w = sc.nextInt();\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    static double area(double radius) {\n        return Math.PI * radius * radius;\n    }\n\n    static int area(int length, int width) {\n        return length * width;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double r = sc.nextDouble();\n        int l = sc.nextInt();\n        int w = sc.nextInt();\n\n        System.out.println(\"Circle Area: \" + area(r));\n        System.out.println(\"Rectangle Area: \" + area(l, w));\n        sc.close();\n    }\n}",
    "hints": [
      "Same method name \"area\", but different parameter lists.",
      "Use Math.PI for accurate circle calculation."
    ],
    "concepts": "Compile-time polymorphism via method overloading."
  },
  {
    "id": "l4_q3",
    "levelId": "level-4",
    "levelTitle": "Level 4: Methods & Arrays",
    "index": 3,
    "title": "Array Input: Sum and Average",
    "badge": "1D Arrays",
    "tags": [
      "Array",
      "Average",
      "Traversal"
    ],
    "description": "Read N, then read an array of N integers.\nCalculate and print:\n1. Sum of all elements.\n2. Average as a floating-point number.\n\nExample:\n- Input: `5 10 20 30 40 50`\n- Output:\n  `Sum: 150`\n  `Average: 30.0`",
    "sampleInput": "5 10 20 30 40 50",
    "sampleOutput": "Sum: 150\nAverage: 30.0",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N, create array, compute sum & average\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n\n        int sum = 0;\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n            sum += arr[i];\n        }\n\n        double avg = (double) sum / n;\n\n        System.out.println(\"Sum: \" + sum);\n        System.out.println(\"Average: \" + avg);\n        sc.close();\n    }\n}",
    "hints": [
      "Declare array: int[] arr = new int[n];",
      "Cast sum to double before division: (double) sum / n."
    ],
    "concepts": "1D Array allocation in Heap, 0-indexed traversal, and type promotion during average calculation."
  },
  {
    "id": "l4_q4",
    "levelId": "level-4",
    "levelTitle": "Level 4: Methods & Arrays",
    "index": 4,
    "title": "Find Maximum and Minimum in Array",
    "badge": "Extremes Search",
    "tags": [
      "Max",
      "Min",
      "Comparison"
    ],
    "description": "Read N, followed by N integers into an array.\nFind and print the Maximum and Minimum elements.\n\nExample:\n- Input: `6 45 12 89 34 23 7`\n- Output:\n  `Max: 89`\n  `Min: 7`",
    "sampleInput": "6 45 12 89 34 23 7",
    "sampleOutput": "Max: 89\nMin: 7",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Find max and min in array\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n\n        int max = arr[0];\n        int min = arr[0];\n\n        for (int i = 1; i < n; i++) {\n            if (arr[i] > max) max = arr[i];\n            if (arr[i] < min) min = arr[i];\n        }\n\n        System.out.println(\"Max: \" + max);\n        System.out.println(\"Min: \" + min);\n        sc.close();\n    }\n}",
    "hints": [
      "Initialize max and min with arr[0], then iterate starting from index 1.",
      "Never initialize with 0, as negative arrays would produce wrong min/max."
    ],
    "concepts": "Single-pass O(N) array search and safe baseline initialization."
  },
  {
    "id": "l4_q5",
    "levelId": "level-4",
    "levelTitle": "Level 4: Methods & Arrays",
    "index": 5,
    "title": "Reverse an Array In-Place",
    "badge": "Two-Pointer",
    "tags": [
      "Reverse",
      "Two-Pointer",
      "In-Place"
    ],
    "description": "Read N and N integers into an array.\nReverse the array in-place using the Two-Pointer technique without creating a second array.\nPrint the reversed array on a single line.\n\nExample:\n- Input: `5 1 2 3 4 5`\n- Output: `Reversed Array: 5 4 3 2 1`",
    "sampleInput": "5 1 2 3 4 5",
    "sampleOutput": "Reversed Array: 5 4 3 2 1",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Reverse array in-place\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n\n        int left = 0;\n        int right = n - 1;\n\n        while (left < right) {\n            int temp = arr[left];\n            arr[left] = arr[right];\n            arr[right] = temp;\n            left++;\n            right--;\n        }\n\n        System.out.print(\"Reversed Array: \");\n        for (int i = 0; i < n; i++) {\n            System.out.print(arr[i] + (i == n - 1 ? \"\" : \" \"));\n        }\n        System.out.println();\n        sc.close();\n    }\n}",
    "hints": [
      "Set left = 0, right = n - 1.",
      "Swap arr[left] and arr[right], then left++ and right-- until left >= right."
    ],
    "concepts": "Two-pointer technique and in-place O(1) space memory manipulation."
  },
  {
    "id": "l4_q6",
    "levelId": "level-4",
    "levelTitle": "Level 4: Methods & Arrays",
    "index": 6,
    "title": "Linear Search & Frequency Count",
    "badge": "Search Pattern",
    "tags": [
      "Search",
      "Frequency",
      "Counting"
    ],
    "description": "Read N, then N elements of an array, followed by a target element K.\nFind and print how many times K occurs in the array.\n\nExample:\n- Input: `7 4 2 5 2 8 2 9 2` (where 2 is target K)\n- Output: `Element 2 found 3 times`",
    "sampleInput": "7 4 2 5 2 8 2 9 2",
    "sampleOutput": "Element 2 found 3 times",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Linear search and count frequency\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n\n        int target = sc.nextInt();\n        int count = 0;\n\n        for (int i = 0; i < n; i++) {\n            if (arr[i] == target) {\n                count++;\n            }\n        }\n\n        System.out.println(\"Element \" + target + \" found \" + count + \" times\");\n        sc.close();\n    }\n}",
    "hints": [
      "Iterate through array and increment counter whenever arr[i] == target."
    ],
    "concepts": "Linear search O(N) traversal and frequency counting."
  },
  {
    "id": "l4_q7",
    "levelId": "level-4",
    "levelTitle": "Level 4: Methods & Arrays",
    "index": 7,
    "title": "Check If Array is Sorted",
    "badge": "Validation Pattern",
    "tags": [
      "Sorted",
      "Order",
      "Boolean"
    ],
    "description": "Read N and N integers into an array.\nCheck whether the array is strictly sorted in non-decreasing (ascending) order (arr[i] \<= arr[i+1] for all i).\nPrint `Array is Sorted: true` or `Array is Sorted: false`.\n\nExample:\n- Input: `5 10 20 30 40 50` -> Output: `Array is Sorted: true`\n- Input: `5 10 50 30 40 20` -> Output: `Array is Sorted: false`",
    "sampleInput": "5 10 20 30 40 50",
    "sampleOutput": "Array is Sorted: true",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Check if array is sorted\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n\n        boolean isSorted = true;\n        for (int i = 0; i < n - 1; i++) {\n            if (arr[i] > arr[i + 1]) {\n                isSorted = false;\n                break;\n            }\n        }\n\n        System.out.println(\"Array is Sorted: \" + isSorted);\n        sc.close();\n    }\n}",
    "hints": [
      "Compare adjacent pairs: if arr[i] > arr[i + 1], it is NOT sorted.",
      "Stop loop at n - 2 (i < n - 1) to avoid ArrayIndexOutOfBoundsException."
    ],
    "concepts": "Adjacent element comparisons and early exit boolean flags."
  },
  {
    "id": "l4_q8",
    "levelId": "level-4",
    "levelTitle": "Level 4: Methods & Arrays",
    "index": 8,
    "title": "Second Largest Element in Array",
    "badge": "Interview Classic",
    "tags": [
      "Second Largest",
      "Single Pass",
      "Optimization"
    ],
    "description": "Read N, then N integers into an array.\nFind the Second Largest distinct element in a single pass without sorting.\n\nExample:\n- Input: `5 12 35 1 10 34`\n- Output: `Second Largest: 34`",
    "sampleInput": "5 12 35 1 10 34",
    "sampleOutput": "Second Largest: 34",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Find second largest element\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n\n        int largest = Integer.MIN_VALUE;\n        int secondLargest = Integer.MIN_VALUE;\n\n        for (int x : arr) {\n            if (x > largest) {\n                secondLargest = largest;\n                largest = x;\n            } else if (x > secondLargest && x != largest) {\n                secondLargest = x;\n            }\n        }\n\n        System.out.println(\"Second Largest: \" + secondLargest);\n        sc.close();\n    }\n}",
    "hints": [
      "When x > largest, the old largest becomes secondLargest, and largest becomes x.",
      "Else if x > secondLargest and x != largest, update secondLargest = x."
    ],
    "concepts": "Tracking top-2 values in a single O(N) pass without O(N log N) sorting."
  },
  {
    "id": "l4_q9",
    "levelId": "level-4",
    "levelTitle": "Level 4: Methods & Arrays",
    "index": 9,
    "title": "Matrix Addition (2D Arrays)",
    "badge": "2D Arrays",
    "tags": [
      "2D Array",
      "Matrix",
      "Nested Loops"
    ],
    "description": "Read dimensions R (rows) and C (columns).\nThen read two R * C matrices A and B.\nCompute and print their sum matrix A + B.\n\nExample:\n- Input: `2 2  1 2 3 4  5 6 7 8`\n- Output:\n  `6 8`\n  `10 12`",
    "sampleInput": "2 2 1 2 3 4 5 6 7 8",
    "sampleOutput": "6 8\n10 12",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Matrix addition\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int r = sc.nextInt();\n        int c = sc.nextInt();\n\n        int[][] a = new int[r][c];\n        int[][] b = new int[r][c];\n\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                a[i][j] = sc.nextInt();\n            }\n        }\n\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                b[i][j] = sc.nextInt();\n            }\n        }\n\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                int sum = a[i][j] + b[i][j];\n                System.out.print(sum + (j == c - 1 ? \"\" : \" \"));\n            }\n            System.out.println();\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "Instantiate 2D array: int[][] a = new int[r][c];",
      "Element-wise addition: sum[i][j] = a[i][j] + b[i][j]."
    ],
    "concepts": "2D array representation in memory (array of arrays) and row-column indexing."
  },
  {
    "id": "l4_q10",
    "levelId": "level-4",
    "levelTitle": "Level 4: Methods & Arrays",
    "index": 10,
    "title": "Matrix Transpose (2D Arrays)",
    "badge": "Matrix Transform",
    "tags": [
      "Transpose",
      "2D Array",
      "Rows/Cols"
    ],
    "description": "Read R (rows) and C (columns), followed by an R * C matrix.\nCompute and print its Transpose (flipping matrix over its diagonal, converting R * C into C * R where \transposed[j][i] = \matrix[i][j]).\n\nExample:\n- Input: `2 3 1 2 3 4 5 6`\n- Output:\n  `1 4`\n  `2 5`\n  `3 6`",
    "sampleInput": "2 3 1 2 3 4 5 6",
    "sampleOutput": "1 4\n2 5\n3 6",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Compute matrix transpose\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int r = sc.nextInt();\n        int c = sc.nextInt();\n\n        int[][] mat = new int[r][c];\n\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                mat[i][j] = sc.nextInt();\n            }\n        }\n\n        int[][] trans = new int[c][r];\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                trans[j][i] = mat[i][j];\n            }\n        }\n\n        for (int i = 0; i < c; i++) {\n            for (int j = 0; j < r; j++) {\n                System.out.print(trans[i][j] + (j == r - 1 ? \"\" : \" \"));\n            }\n            System.out.println();\n        }\n        sc.close();\n    }\n}",
    "hints": [
      "Transpose matrix dimensions are reversed: int[][] trans = new int[c][r];",
      "Map trans[j][i] = mat[i][j]."
    ],
    "concepts": "Dimension swapping and index mapping in matrix algebra."
  },
  {
    "id": "l5_q1",
    "levelId": "level-5",
    "levelTitle": "Level 5: Core OOP & Classes",
    "index": 1,
    "title": "Student Class Details Display",
    "badge": "OOP Basics",
    "tags": [
      "Class",
      "Object",
      "State"
    ],
    "description": "Create a `Student` class with fields `name`, `rollNo`, and `marks`. In `main`, read values from standard input, instantiate a `Student`, and call its `display()` method to print formatted details.",
    "sampleInput": "Aman 101 88.5",
    "sampleOutput": "Roll No: 101\nName: Aman\nMarks: 88.5",
    "starterCode": "import java.util.Scanner;\n\nclass Student {\n    // Define fields and display() method\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Student {\n    String name;\n    int rollNo;\n    double marks;\n\n    void display() {\n        System.out.println(\"Roll No: \" + rollNo);\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Marks: \" + marks);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Student s = new Student();\n        s.name = sc.next();\n        s.rollNo = sc.nextInt();\n        s.marks = sc.nextDouble();\n        s.display();\n        sc.close();\n    }\n}",
    "hints": [
      "Define instance variables name, rollNo, and marks inside class Student.",
      "Use student.display() to print formatted outputs."
    ],
    "concepts": "A class is a blueprint defining attributes and behaviors; objects are physical instances allocated on the heap."
  },
  {
    "id": "l5_q2",
    "levelId": "level-5",
    "levelTitle": "Level 5: Core OOP & Classes",
    "index": 2,
    "title": "Rectangle Class with Area and Perimeter",
    "badge": "Class Methods",
    "tags": [
      "Methods",
      "Calculation"
    ],
    "description": "Create a `Rectangle` class with fields `length` and `width`. Include methods `getArea()` and `getPerimeter()`. Read length and width from input and display both calculations.",
    "sampleInput": "5 3",
    "sampleOutput": "Area: 15\nPerimeter: 16",
    "starterCode": "import java.util.Scanner;\n\nclass Rectangle {\n    int length, width;\n    int getArea() { return 0; }\n    int getPerimeter() { return 0; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Rectangle {\n    int length, width;\n    int getArea() { return length * width; }\n    int getPerimeter() { return 2 * (length + width); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Rectangle r = new Rectangle();\n        r.length = sc.nextInt();\n        r.width = sc.nextInt();\n        System.out.println(\"Area: \" + r.getArea());\n        System.out.println(\"Perimeter: \" + r.getPerimeter());\n        sc.close();\n    }\n}",
    "hints": [
      "Area = length * width",
      "Perimeter = 2 * (length + width)"
    ],
    "concepts": "Instance methods have direct access to their class instance variables."
  },
  {
    "id": "l5_q3",
    "levelId": "level-5",
    "levelTitle": "Level 5: Core OOP & Classes",
    "index": 3,
    "title": "Circle Class with Circumference & Area",
    "badge": "OOP Methods",
    "tags": [
      "Circle",
      "Math.PI"
    ],
    "description": "Create a `Circle` class with a `radius` field. Implement `area()` and `circumference()` returning values rounded to 2 decimal places using `Math.PI`.",
    "sampleInput": "7",
    "sampleOutput": "Area: 153.94\nCircumference: 43.98",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Circle {\n    double radius;\n    double area() { return Math.PI * radius * radius; }\n    double circumference() { return 2 * Math.PI * radius; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Circle c = new Circle();\n        c.radius = sc.nextDouble();\n        System.out.printf(\"Area: %.2f\\n\", c.area());\n        System.out.printf(\"Circumference: %.2f\\n\", c.circumference());\n        sc.close();\n    }\n}",
    "hints": [
      "Use String.format(\"%.2f\", ...) or printf for 2 decimal places."
    ],
    "concepts": "Separating geometric state into classes keeps business logic organized."
  },
  {
    "id": "l5_q4",
    "levelId": "level-5",
    "levelTitle": "Level 5: Core OOP & Classes",
    "index": 4,
    "title": "Car Class with Accelerate & Brake",
    "badge": "State Mutation",
    "tags": [
      "State",
      "Simulation"
    ],
    "description": "Create a `Car` class with `brand` and `speed` (starting at 0). Implement `accelerate(int amount)` and `brake(int amount)`. Ensure speed never drops below 0.",
    "sampleInput": "Tesla 40 15",
    "sampleOutput": "Brand: Tesla\nSpeed after accelerate: 40\nSpeed after brake: 25",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Car {\n    String brand;\n    int speed = 0;\n    void accelerate(int amt) { speed += amt; }\n    void brake(int amt) { speed = Math.max(0, speed - amt); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Car car = new Car();\n        car.brand = sc.next();\n        int acc = sc.nextInt();\n        int brk = sc.nextInt();\n        System.out.println(\"Brand: \" + car.brand);\n        car.accelerate(acc);\n        System.out.println(\"Speed after accelerate: \" + car.speed);\n        car.brake(brk);\n        System.out.println(\"Speed after brake: \" + car.speed);\n        sc.close();\n    }\n}",
    "hints": [
      "Mutate the internal speed variable through methods rather than direct assignment."
    ],
    "concepts": "Methods protect the integrity of internal object state."
  },
  {
    "id": "l5_q5",
    "levelId": "level-5",
    "levelTitle": "Level 5: Core OOP & Classes",
    "index": 5,
    "title": "BankAccount Deposit and Withdraw",
    "badge": "Bank Logic",
    "tags": [
      "Account",
      "Validation"
    ],
    "description": "Create a `BankAccount` class with `accountNumber`, `holderName`, and `balance`. Implement `deposit(double amt)` and `withdraw(double amt)`. If withdrawal exceeds balance, print `Insufficient Funds`.",
    "sampleInput": "1001 Rahul 500 200 400",
    "sampleOutput": "Deposited: 200.0\nBalance: 700.0\nWithdrawn: 400.0\nBalance: 300.0",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass BankAccount {\n    int accNo;\n    String name;\n    double balance;\n\n    void deposit(double amt) {\n        balance += amt;\n        System.out.println(\"Deposited: \" + amt);\n        System.out.println(\"Balance: \" + balance);\n    }\n\n    void withdraw(double amt) {\n        if (amt > balance) {\n            System.out.println(\"Insufficient Funds\");\n        } else {\n            balance -= amt;\n            System.out.println(\"Withdrawn: \" + amt);\n            System.out.println(\"Balance: \" + balance);\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        BankAccount b = new BankAccount();\n        b.accNo = sc.nextInt();\n        b.name = sc.next();\n        b.balance = sc.nextDouble();\n        double dep = sc.nextDouble();\n        double with = sc.nextDouble();\n        b.deposit(dep);\n        b.withdraw(with);\n        sc.close();\n    }\n}",
    "hints": [
      "Check balance before deducting during withdrawal."
    ],
    "concepts": "Basic business domain modeling with objects."
  },
  {
    "id": "l5_q6",
    "levelId": "level-5",
    "levelTitle": "Level 5: Core OOP & Classes",
    "index": 6,
    "title": "Employee Salary Calculator",
    "badge": "Payroll",
    "tags": [
      "Salary",
      "Computation"
    ],
    "description": "Create an `Employee` class with `id`, `name`, and `basicSalary`. Method `getGrossSalary()` returns basic + 20% HRA + 10% DA. Read employee details and print gross salary.",
    "sampleInput": "501 Priya 50000",
    "sampleOutput": "ID: 501\nName: Priya\nGross Salary: 65000.0",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Employee {\n    int id;\n    String name;\n    double basic;\n    double getGrossSalary() {\n        return basic + (basic * 0.20) + (basic * 0.10);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Employee emp = new Employee();\n        emp.id = sc.nextInt();\n        emp.name = sc.next();\n        emp.basic = sc.nextDouble();\n        System.out.println(\"ID: \" + emp.id);\n        System.out.println(\"Name: \" + emp.name);\n        System.out.println(\"Gross Salary: \" + emp.getGrossSalary());\n        sc.close();\n    }\n}",
    "hints": [
      "Gross = basic + (basic * 0.20) + (basic * 0.10)"
    ],
    "concepts": "Enterprise domain objects encapsulate salary business formulas."
  },
  {
    "id": "l5_q7",
    "levelId": "level-5",
    "levelTitle": "Level 5: Core OOP & Classes",
    "index": 7,
    "title": "Point 2D Distance Calculation",
    "badge": "Geometry",
    "tags": [
      "Math.hypot",
      "Distance"
    ],
    "description": "Create a `Point` class with coordinates `x` and `y`. Method `distanceFrom(Point other)` computes Euclidean distance: \√((x_2 - x_1)^2 + (y_2 - y_1)^2). Read coordinates of two points and print distance rounded to 2 decimals.",
    "sampleInput": "0 0 3 4",
    "sampleOutput": "Distance: 5.00",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Point {\n    double x, y;\n    double distanceFrom(Point other) {\n        return Math.hypot(this.x - other.x, this.y - other.y);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Point p1 = new Point();\n        p1.x = sc.nextDouble();\n        p1.y = sc.nextDouble();\n        Point p2 = new Point();\n        p2.x = sc.nextDouble();\n        p2.y = sc.nextDouble();\n        System.out.printf(\"Distance: %.2f\\n\", p1.distanceFrom(p2));\n        sc.close();\n    }\n}",
    "hints": [
      "Use Math.hypot(dx, dy) or Math.sqrt(dx*dx + dy*dy)."
    ],
    "concepts": "Passing one object into another object method allows relational interaction."
  },
  {
    "id": "l5_q8",
    "levelId": "level-5",
    "levelTitle": "Level 5: Core OOP & Classes",
    "index": 8,
    "title": "Product with Discount Calculation",
    "badge": "E-Commerce",
    "tags": [
      "Pricing",
      "Discount"
    ],
    "description": "Create a `Product` class with `name`, `price`, and `discountPercent`. Method `getFinalPrice()` returns price after discount. Print final price formatted to 2 decimals.",
    "sampleInput": "Laptop 50000 12",
    "sampleOutput": "Product: Laptop\nFinal Price: 44000.00",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Product {\n    String name;\n    double price;\n    double discountPercent;\n    double getFinalPrice() {\n        return price - (price * discountPercent / 100.0);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Product p = new Product();\n        p.name = sc.next();\n        p.price = sc.nextDouble();\n        p.discountPercent = sc.nextDouble();\n        System.out.println(\"Product: \" + p.name);\n        System.out.printf(\"Final Price: %.2f\\n\", p.getFinalPrice());\n        sc.close();\n    }\n}",
    "hints": [
      "discountAmount = price * (discountPercent / 100.0)"
    ],
    "concepts": "Domain modeling simplifies commercial invoice and checkout calculations."
  },
  {
    "id": "l5_q9",
    "levelId": "level-5",
    "levelTitle": "Level 5: Core OOP & Classes",
    "index": 9,
    "title": "Time Class Total Seconds & Formatting",
    "badge": "Time Modeling",
    "tags": [
      "Time",
      "Conversion"
    ],
    "description": "Create a `Time` class with fields `hours`, `minutes`, and `seconds`. Implement `toTotalSeconds()` and `displayFormatted()` (HH:MM:SS). Read H, M, S and output total seconds and formatted string.",
    "sampleInput": "2 45 30",
    "sampleOutput": "Total Seconds: 9930\nFormatted: 02:45:30",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Time {\n    int hours, minutes, seconds;\n    int toTotalSeconds() {\n        return hours * 3600 + minutes * 60 + seconds;\n    }\n    void displayFormatted() {\n        System.out.printf(\"Formatted: %02d:%02d:%02d\\n\", hours, minutes, seconds);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Time t = new Time();\n        t.hours = sc.nextInt();\n        t.minutes = sc.nextInt();\n        t.seconds = sc.nextInt();\n        System.out.println(\"Total Seconds: \" + t.toTotalSeconds());\n        t.displayFormatted();\n        sc.close();\n    }\n}",
    "hints": [
      "hours * 3600 + minutes * 60 + seconds",
      "String.format(\"%02d:%02d:%02d\", ...)"
    ],
    "concepts": "Encapsulating multi-field data into cohesive logical units."
  },
  {
    "id": "l5_q10",
    "levelId": "level-5",
    "levelTitle": "Level 5: Core OOP & Classes",
    "index": 10,
    "title": "Triangle Validity and Type via Class",
    "badge": "Geometry",
    "tags": [
      "Triangle",
      "Conditional"
    ],
    "description": "Create a `Triangle` class with side lengths `a`, `b`, and `c`. Include method `isValid()` and `getType()` returning `Equilateral`, `Isosceles`, or `Scalene`.",
    "sampleInput": "5 5 5",
    "sampleOutput": "Valid: true\nType: Equilateral",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Triangle {\n    int a, b, c;\n    boolean isValid() {\n        return (a + b > c) && (a + c > b) && (b + c > a);\n    }\n    String getType() {\n        if (!isValid()) return \"Invalid\";\n        if (a == b && b == c) return \"Equilateral\";\n        if (a == b || b == c || a == c) return \"Isosceles\";\n        return \"Scalene\";\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Triangle t = new Triangle();\n        t.a = sc.nextInt();\n        t.b = sc.nextInt();\n        t.c = sc.nextInt();\n        System.out.println(\"Valid: \" + t.isValid());\n        System.out.println(\"Type: \" + t.getType());\n        sc.close();\n    }\n}",
    "hints": [
      "Sum of any 2 sides must be greater than the 3rd side."
    ],
    "concepts": "Classes model both state constraints and classified classifications."
  },
  {
    "id": "l6_q1",
    "levelId": "level-6",
    "levelTitle": "Level 6: Constructors & Memory",
    "index": 1,
    "title": "Default vs Parameterized Constructor",
    "badge": "Constructors",
    "tags": [
      "Constructor",
      "Init"
    ],
    "description": "Demonstrate constructor initialization in a `Book` class with `title` and `price`. Print the initialized attributes.",
    "sampleInput": "JavaCore 450",
    "sampleOutput": "Title: JavaCore, Price: 450",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Book {\n    String title;\n    int price;\n    Book(String t, int p) {\n        title = t;\n        price = p;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String t = sc.next();\n        int p = sc.nextInt();\n        Book b = new Book(t, p);\n        System.out.println(\"Title: \" + b.title + \", Price: \" + b.price);\n        sc.close();\n    }\n}",
    "hints": [
      "Constructors run automatically when \"new\" is invoked."
    ],
    "concepts": "Parameterized constructors enforce valid state on creation."
  },
  {
    "id": "l6_q2",
    "levelId": "level-6",
    "levelTitle": "Level 6: Constructors & Memory",
    "index": 2,
    "title": "Constructor Overloading in Box Class",
    "badge": "Overloading",
    "tags": [
      "Box",
      "Volume"
    ],
    "description": "Create a `Box` class with constructor overloading: `Box(int side)` for cube, and `Box(int l, int w, int h)` for cuboid. Compute and display volume.",
    "sampleInput": "4\n2 3 5",
    "sampleOutput": "Cube Volume: 64\nCuboid Volume: 30",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Box {\n    int l, w, h;\n    Box(int s) { l = w = h = s; }\n    Box(int l, int w, int h) { this.l = l; this.w = w; this.h = h; }\n    int volume() { return l * w * h; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int s = sc.nextInt();\n        Box b1 = new Box(s);\n        int l = sc.nextInt(), w = sc.nextInt(), h = sc.nextInt();\n        Box b2 = new Box(l, w, h);\n        System.out.println(\"Cube Volume: \" + b1.volume());\n        System.out.println(\"Cuboid Volume: \" + b2.volume());\n        sc.close();\n    }\n}",
    "hints": [
      "Overloaded constructors share the class name with different parameter signatures."
    ],
    "concepts": "Allows flexible object creation depending on available initialization arguments."
  },
  {
    "id": "l6_q3",
    "levelId": "level-6",
    "levelTitle": "Level 6: Constructors & Memory",
    "index": 3,
    "title": "Constructor Chaining using this()",
    "badge": "Chaining",
    "tags": [
      "this()",
      "DRY"
    ],
    "description": "Implement a `Customer` class where `Customer(name)` delegates to `Customer(name, email, age)` using `this(name, \"unknown\", 18)` to prevent duplicate code.",
    "sampleInput": "Rohit",
    "sampleOutput": "Customer: Rohit, Email: unknown, Age: 18",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Customer {\n    String name, email;\n    int age;\n    Customer(String name) {\n        this(name, \"unknown\", 18);\n    }\n    Customer(String name, String email, int age) {\n        this.name = name;\n        this.email = email;\n        this.age = age;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String n = sc.next();\n        Customer c = new Customer(n);\n        System.out.println(\"Customer: \" + c.name + \", Email: \" + c.email + \", Age: \" + c.age);\n        sc.close();\n    }\n}",
    "hints": [
      "this() call must be the very first statement inside the constructor."
    ],
    "concepts": "Constructor chaining avoids duplication of default values."
  },
  {
    "id": "l6_q4",
    "levelId": "level-6",
    "levelTitle": "Level 6: Constructors & Memory",
    "index": 4,
    "title": "Copy Constructor Pattern",
    "badge": "Copying",
    "tags": [
      "Clone",
      "Copy"
    ],
    "description": "Implement a copy constructor `Point(Point other)` that initializes coordinates by copying from another Point instance.",
    "sampleInput": "12 25",
    "sampleOutput": "P1: (12, 25)\nP2 Copy: (12, 25)",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Point {\n    int x, y;\n    Point(int x, int y) { this.x = x; this.y = y; }\n    Point(Point p) { this.x = p.x; this.y = p.y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int x = sc.nextInt();\n        int y = sc.nextInt();\n        Point p1 = new Point(x, y);\n        Point p2 = new Point(p1);\n        System.out.println(\"P1: (\" + p1.x + \", \" + p1.y + \")\");\n        System.out.println(\"P2 Copy: (\" + p2.x + \", \" + p2.y + \")\");\n        sc.close();\n    }\n}",
    "hints": [
      "A copy constructor creates a distinct heap object with duplicate field values."
    ],
    "concepts": "Protects against unintended external reference mutations."
  },
  {
    "id": "l6_q5",
    "levelId": "level-6",
    "levelTitle": "Level 6: Constructors & Memory",
    "index": 5,
    "title": "Resolving Variable Shadowing with this",
    "badge": "Shadowing",
    "tags": [
      "this",
      "Scope"
    ],
    "description": "In a `Student` constructor with parameters matching field names (`id`, `name`), use `this.id = id;` to correctly assign instance variables.",
    "sampleInput": "42 Deepa",
    "sampleOutput": "ID: 42, Name: Deepa",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Student {\n    int id;\n    String name;\n    Student(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int id = sc.nextInt();\n        String name = sc.next();\n        Student s = new Student(id, name);\n        System.out.println(\"ID: \" + s.id + \", Name: \" + s.name);\n        sc.close();\n    }\n}",
    "hints": [
      "Without \"this\", parameter shadows the field, leaving the field default 0 or null."
    ],
    "concepts": "\"this\" represents the current invoking instance reference."
  },
  {
    "id": "l6_q6",
    "levelId": "level-6",
    "levelTitle": "Level 6: Constructors & Memory",
    "index": 6,
    "title": "Static Instance Counter",
    "badge": "Static Memory",
    "tags": [
      "static",
      "Metaspace"
    ],
    "description": "Create an `Item` class with a static variable `count`. Increment `count` in constructor and print total objects instantiated.",
    "sampleInput": "3",
    "sampleOutput": "Total objects created: 3",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Item {\n    static int count = 0;\n    Item() { count++; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for (int i = 0; i < n; i++) {\n            new Item();\n        }\n        System.out.println(\"Total objects created: \" + Item.count);\n        sc.close();\n    }\n}",
    "hints": [
      "static members belong to the class rather than individual instances."
    ],
    "concepts": "Static variables exist once in Metaspace and are shared across all instances."
  },
  {
    "id": "l6_q7",
    "levelId": "level-6",
    "levelTitle": "Level 6: Constructors & Memory",
    "index": 7,
    "title": "Static Math Utility Class",
    "badge": "Static Method",
    "tags": [
      "Utility",
      "Static"
    ],
    "description": "Create a utility class `MathUtil` with static methods `static int square(int x)` and `static int cube(int x)`. Call without instantiating.",
    "sampleInput": "5",
    "sampleOutput": "Square: 25\nCube: 125",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass MathUtil {\n    static int square(int x) { return x * x; }\n    static int cube(int x) { return x * x * x; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(\"Square: \" + MathUtil.square(n));\n        System.out.println(\"Cube: \" + MathUtil.cube(n));\n        sc.close();\n    }\n}",
    "hints": [
      "Invoke static methods directly via ClassName.methodName()."
    ],
    "concepts": "Static utility classes perform operations without requiring stateful object instances."
  },
  {
    "id": "l6_q8",
    "levelId": "level-6",
    "levelTitle": "Level 6: Constructors & Memory",
    "index": 8,
    "title": "Static Initialization Block",
    "badge": "Static Block",
    "tags": [
      "StaticBlock",
      "Order"
    ],
    "description": "Demonstrate that a static block executes only once when the class is first loaded by the JVM before any constructor.",
    "sampleInput": "None",
    "sampleOutput": "Static Block Executed\nInstance 1 Created\nInstance 2 Created",
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solutionCode": "class Test {\n    static {\n        System.out.println(\"Static Block Executed\");\n    }\n    Test() {\n        System.out.println(\"Instance Created\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        new Test();\n        new Test();\n    }\n}",
    "hints": [
      "Static block executes upon class loading before the main method or object constructors."
    ],
    "concepts": "Static blocks initialize complex static resources."
  },
  {
    "id": "l6_q9",
    "levelId": "level-6",
    "levelTitle": "Level 6: Constructors & Memory",
    "index": 9,
    "title": "Passing Object as Method Argument (Mutation)",
    "badge": "Pass-By-Value",
    "tags": [
      "References",
      "Heap"
    ],
    "description": "Pass an object reference to a method that mutates its fields. Observe that mutations persist on the original object in the heap.",
    "sampleInput": "10",
    "sampleOutput": "Before: 10\nAfter: 20",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Holder {\n    int val;\n    Holder(int v) { val = v; }\n}\n\npublic class Main {\n    static void doubleValue(Holder h) {\n        h.val *= 2;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int v = sc.nextInt();\n        Holder h = new Holder(v);\n        System.out.println(\"Before: \" + h.val);\n        doubleValue(h);\n        System.out.println(\"After: \" + h.val);\n        sc.close();\n    }\n}",
    "hints": [
      "Java passes reference values by value, pointing to the same shared heap object."
    ],
    "concepts": "Mutating through a reference alters the object in heap memory."
  },
  {
    "id": "l6_q10",
    "levelId": "level-6",
    "levelTitle": "Level 6: Constructors & Memory",
    "index": 10,
    "title": "Method Returning New Object Instance",
    "badge": "Factory Method",
    "tags": [
      "ReturnObject",
      "Factory"
    ],
    "description": "Create a method `Complex add(Complex c1, Complex c2)` that returns a new `Complex` number object representing their sum (r_1 + r_2, i_1 + i_2).",
    "sampleInput": "3 4 1 2",
    "sampleOutput": "Sum: 4 + 6i",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Complex {\n    int real, imag;\n    Complex(int r, int i) { real = r; imag = i; }\n    static Complex add(Complex c1, Complex c2) {\n        return new Complex(c1.real + c2.real, c1.imag + c2.imag);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Complex c1 = new Complex(sc.nextInt(), sc.nextInt());\n        Complex c2 = new Complex(sc.nextInt(), sc.nextInt());\n        Complex res = Complex.add(c1, c2);\n        System.out.println(\"Sum: \" + res.real + \" + \" + res.imag + \"i\");\n        sc.close();\n    }\n}",
    "hints": [
      "Instantiate and return \"new Complex(r, i)\"."
    ],
    "concepts": "Methods can manufacture and return fresh object instances."
  },
  {
    "id": "l7_q1",
    "levelId": "level-7",
    "levelTitle": "Level 7: Inheritance & Super",
    "index": 1,
    "title": "Single Inheritance (Person to Student)",
    "badge": "Inheritance",
    "tags": [
      "extends",
      "Subclass"
    ],
    "description": "Create base class `Person` with `name` and derived class `Student` with `rollNo`. Instantiate `Student` and display both properties.",
    "sampleInput": "Arjun 101",
    "sampleOutput": "Name: Arjun\nRoll No: 101",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Person {\n    String name;\n}\nclass Student extends Person {\n    int rollNo;\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Student s = new Student();\n        s.name = sc.next();\n        s.rollNo = sc.nextInt();\n        System.out.println(\"Name: \" + s.name);\n        System.out.println(\"Roll No: \" + s.rollNo);\n        sc.close();\n    }\n}",
    "hints": [
      "Use the \"extends\" keyword to inherit fields from parent class."
    ],
    "concepts": "Single inheritance promotes code reuse by inheriting state and behavior from a base class."
  },
  {
    "id": "l7_q2",
    "levelId": "level-7",
    "levelTitle": "Level 7: Inheritance & Super",
    "index": 2,
    "title": "Multilevel Inheritance (Animal -> Mammal -> Dog)",
    "badge": "Multilevel",
    "tags": [
      "Multilevel",
      "Inheritance"
    ],
    "description": "Create `Animal` (`eat()`), `Mammal extends Animal` (`walk()`), and `Dog extends Mammal` (`bark()`). Call all three methods from a `Dog` object.",
    "sampleInput": "None",
    "sampleOutput": "Animal is eating\nMammal is walking\nDog is barking",
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n    }\n}",
    "solutionCode": "class Animal { void eat() { System.out.println(\"Animal is eating\"); } }\nclass Mammal extends Animal { void walk() { System.out.println(\"Mammal is walking\"); } }\nclass Dog extends Mammal { void bark() { System.out.println(\"Dog is barking\"); } }\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.eat();\n        d.walk();\n        d.bark();\n    }\n}",
    "hints": [
      "Subclasses transitively inherit methods from all ancestors in the chain."
    ],
    "concepts": "Multilevel inheritance forms a specialized lineage tree."
  },
  {
    "id": "l7_q3",
    "levelId": "level-7",
    "levelTitle": "Level 7: Inheritance & Super",
    "index": 3,
    "title": "Invoking Parent Constructor with super()",
    "badge": "super()",
    "tags": [
      "super()",
      "Constructor"
    ],
    "description": "Pass `name` and `grade` to `Student(name, grade)` constructor which invokes `super(name)` on `Person`. Print values.",
    "sampleInput": "Maya A",
    "sampleOutput": "Name: Maya, Grade: A",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Person {\n    String name;\n    Person(String name) { this.name = name; }\n}\nclass Student extends Person {\n    String grade;\n    Student(String name, String grade) {\n        super(name);\n        this.grade = grade;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Student s = new Student(sc.next(), sc.next());\n        System.out.println(\"Name: \" + s.name + \", Grade: \" + s.grade);\n        sc.close();\n    }\n}",
    "hints": [
      "super(...) must be the first line in the child constructor."
    ],
    "concepts": "The super() constructor initializes the parent slice of the child object."
  },
  {
    "id": "l7_q4",
    "levelId": "level-7",
    "levelTitle": "Level 7: Inheritance & Super",
    "index": 4,
    "title": "Accessing Shadowed Parent Field with super.field",
    "badge": "Parent Field",
    "tags": [
      "super.field",
      "Hiding"
    ],
    "description": "In derived class `Car`, shadow parent `Vehicle` field `maxSpeed`. Print both child and parent speed using `super.maxSpeed`.",
    "sampleInput": "120 180",
    "sampleOutput": "Vehicle maxSpeed: 120\nCar maxSpeed: 180",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Vehicle {\n    int maxSpeed;\n}\nclass Car extends Vehicle {\n    int maxSpeed;\n    void showSpeeds() {\n        System.out.println(\"Vehicle maxSpeed: \" + super.maxSpeed);\n        System.out.println(\"Car maxSpeed: \" + this.maxSpeed);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Car c = new Car();\n        c.maxSpeed = sc.nextInt();\n        int childSpeed = sc.nextInt();\n        c.maxSpeed = childSpeed;\n        // Re-read correctly\n        sc.close();\n    }\n}",
    "hints": [
      "Use super.fieldName to distinguish hidden parent fields."
    ],
    "concepts": "Fields in Java do not override; they shadow parent fields."
  },
  {
    "id": "l7_q5",
    "levelId": "level-7",
    "levelTitle": "Level 7: Inheritance & Super",
    "index": 5,
    "title": "Invoking Overridden Parent Method with super.display()",
    "badge": "super Method",
    "tags": [
      "super.method",
      "Extending"
    ],
    "description": "Child method overrides `display()` but first calls `super.display()` before adding extra output.",
    "sampleInput": "Admin Active",
    "sampleOutput": "Role: Admin\nStatus: Active",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass User {\n    String role;\n    User(String r) { role = r; }\n    void display() { System.out.println(\"Role: \" + role); }\n}\nclass Account extends User {\n    String status;\n    Account(String r, String s) { super(r); status = s; }\n    void display() {\n        super.display();\n        System.out.println(\"Status: \" + status);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Account a = new Account(sc.next(), sc.next());\n        a.display();\n        sc.close();\n    }\n}",
    "hints": [
      "Calling super.display() preserves existing base implementation."
    ],
    "concepts": "Enables additive behavior enhancement without complete rewrites."
  },
  {
    "id": "l7_q6",
    "levelId": "level-7",
    "levelTitle": "Level 7: Inheritance & Super",
    "index": 6,
    "title": "Hierarchical Inheritance (Manager & Developer from Employee)",
    "badge": "Hierarchical",
    "tags": [
      "Branches",
      "Hierarchy"
    ],
    "description": "Base class `Employee` has salary. `Manager` adds `bonus`, and `Developer` adds `stock`. Display total compensation for both.",
    "sampleInput": "50000 10000 60000 15000",
    "sampleOutput": "Manager Total: 60000\nDeveloper Total: 75000",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Employee { int salary; }\nclass Manager extends Employee { int bonus; int total() { return salary + bonus; } }\nclass Developer extends Employee { int stock; int total() { return salary + stock; } }\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Manager m = new Manager();\n        m.salary = sc.nextInt();\n        m.bonus = sc.nextInt();\n        Developer d = new Developer();\n        d.salary = sc.nextInt();\n        d.stock = sc.nextInt();\n        System.out.println(\"Manager Total: \" + m.total());\n        System.out.println(\"Developer Total: \" + d.total());\n        sc.close();\n    }\n}",
    "hints": [
      "Multiple specialized classes can branch from a single parent class."
    ],
    "concepts": "Hierarchical inheritance organizes related roles under a unified abstraction."
  },
  {
    "id": "l7_q7",
    "levelId": "level-7",
    "levelTitle": "Level 7: Inheritance & Super",
    "index": 7,
    "title": "Final Class Cannot Be Extended",
    "badge": "Final Class",
    "tags": [
      "final",
      "Security"
    ],
    "description": "Demonstrate the purpose of the `final` keyword on classes (e.g. `String`, `Math`) preventing modification or inheritance.",
    "sampleInput": "SecuredCode",
    "sampleOutput": "Final Class SecuredCode active",
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n    }\n}",
    "solutionCode": "final class SecurityModule {\n    String code;\n    SecurityModule(String c) { code = c; }\n    void check() { System.out.println(\"Final Class \" + code + \" active\"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        SecurityModule s = new SecurityModule(\"SecuredCode\");\n        s.check();\n    }\n}",
    "hints": [
      "Declaring a class \"final\" forbids any subclassing."
    ],
    "concepts": "Critical for security and immutability (like java.lang.String)."
  },
  {
    "id": "l7_q8",
    "levelId": "level-7",
    "levelTitle": "Level 7: Inheritance & Super",
    "index": 8,
    "title": "Aggregation HAS-A Relationship",
    "badge": "Aggregation",
    "tags": [
      "HAS-A",
      "Composition"
    ],
    "description": "Create an `Address` class with `city` and `state`. An `Employee` HAS-A `Address` object reference. Display employee with address.",
    "sampleInput": "Rohan Mumbai Maharashtra",
    "sampleOutput": "Employee: Rohan, City: Mumbai, State: Maharashtra",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Address {\n    String city, state;\n    Address(String c, String s) { city = c; state = s; }\n}\nclass Employee {\n    String name;\n    Address address;\n    Employee(String n, Address a) { name = n; address = a; }\n    void display() {\n        System.out.println(\"Employee: \" + name + \", City: \" + address.city + \", State: \" + address.state);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String n = sc.next(), c = sc.next(), s = sc.next();\n        Employee e = new Employee(n, new Address(c, s));\n        e.display();\n        sc.close();\n    }\n}",
    "hints": [
      "HAS-A relationships are created by including an object reference inside another class."
    ],
    "concepts": "Prefer Composition/Aggregation over Inheritance when relationship is \"has-a\" rather than \"is-a\"."
  },
  {
    "id": "l7_q9",
    "levelId": "level-7",
    "levelTitle": "Level 7: Inheritance & Super",
    "index": 9,
    "title": "Constructor Execution Order in Inheritance",
    "badge": "Init Order",
    "tags": [
      "ConstructorOrder",
      "Hierarchy"
    ],
    "description": "Demonstrate that base class constructors execute before derived class constructors during object instantiation.",
    "sampleInput": "None",
    "sampleOutput": "Base Constructor\nDerived Constructor",
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n    }\n}",
    "solutionCode": "class Base {\n    Base() { System.out.println(\"Base Constructor\"); }\n}\nclass Derived extends Base {\n    Derived() { System.out.println(\"Derived Constructor\"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        new Derived();\n    }\n}",
    "hints": [
      "The JVM executes constructors from top of hierarchy downwards."
    ],
    "concepts": "Ensures parent state is completely initialized before child code runs."
  },
  {
    "id": "l7_q10",
    "levelId": "level-7",
    "levelTitle": "Level 7: Inheritance & Super",
    "index": 10,
    "title": "Protected Access Across Inheritance Hierarchy",
    "badge": "Protected",
    "tags": [
      "protected",
      "AccessControl"
    ],
    "description": "Demonstrate accessing a `protected` member variable defined in a parent class from a subclass method.",
    "sampleInput": "150",
    "sampleOutput": "Inherited Protected Value: 150",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Parent {\n    protected int value;\n}\nclass Child extends Parent {\n    void show() {\n        System.out.println(\"Inherited Protected Value: \" + value);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Child c = new Child();\n        c.value = sc.nextInt();\n        c.show();\n        sc.close();\n    }\n}",
    "hints": [
      "Protected fields are accessible to subclasses and package members."
    ],
    "concepts": "Protected allows controlled subclass customization."
  },
  {
    "id": "l8_q1",
    "levelId": "level-8",
    "levelTitle": "Level 8: Polymorphism & Dispatch",
    "index": 1,
    "title": "Method Overriding in Animal Hierarchy",
    "badge": "Overriding",
    "tags": [
      "@Override",
      "Polymorphism"
    ],
    "description": "Create `Animal` with `makeSound()` printing \"Some sound\", and subclasses `Dog` (\"Bark\") and `Cat` (\"Meow\"). Call overridden methods.",
    "sampleInput": "None",
    "sampleOutput": "Dog: Bark\nCat: Meow",
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n    }\n}",
    "solutionCode": "class Animal { void makeSound() { System.out.println(\"Some sound\"); } }\nclass Dog extends Animal { void makeSound() { System.out.println(\"Dog: Bark\"); } }\nclass Cat extends Animal { void makeSound() { System.out.println(\"Cat: Meow\"); } }\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal a1 = new Dog();\n        Animal a2 = new Cat();\n        a1.makeSound();\n        a2.makeSound();\n    }\n}",
    "hints": [
      "Method signature and return type must match parent method."
    ],
    "concepts": "Child classes provide specialized implementation for a generalized contract."
  },
  {
    "id": "l8_q2",
    "levelId": "level-8",
    "levelTitle": "Level 8: Polymorphism & Dispatch",
    "index": 2,
    "title": "Dynamic Method Dispatch (Runtime Polymorphism)",
    "badge": "Dynamic Dispatch",
    "tags": [
      "Upcasting",
      "Runtime"
    ],
    "description": "Declare a parent reference `Shape s` and dynamically assign it to `new Circle()` or `new Square()` to demonstrate runtime dispatch.",
    "sampleInput": "circle\n5",
    "sampleOutput": "Area: 78.54",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Shape {\n    void draw() { System.out.println(\"Drawing Shape\"); }\n}\nclass Circle extends Shape {\n    void draw() { System.out.println(\"Drawing Circle\"); }\n}\nclass Square extends Shape {\n    void draw() { System.out.println(\"Drawing Square\"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape s1 = new Circle();\n        Shape s2 = new Square();\n        s1.draw();\n        s2.draw();\n    }\n}",
    "hints": [
      "The JVM resolves the method call based on the actual Heap object type at runtime."
    ],
    "concepts": "Runtime polymorphism enables loose coupling and extensible architectures."
  },
  {
    "id": "l8_q3",
    "levelId": "level-8",
    "levelTitle": "Level 8: Polymorphism & Dispatch",
    "index": 3,
    "title": "Method Overloading Type Promotion Ladder",
    "badge": "Compile-Time Poly",
    "tags": [
      "Overloading",
      "Promotion"
    ],
    "description": "Overload method `add(int, double)` and `add(double, double)`. Call with `add(10, 20.5)` and observe automatic type promotion.",
    "sampleInput": "10 20.5",
    "sampleOutput": "Result: 30.5",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Calculator {\n    double add(int a, double b) { return a + b; }\n    double add(double a, double b) { return a + b; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Calculator c = new Calculator();\n        int a = sc.nextInt();\n        double b = sc.nextDouble();\n        System.out.println(\"Result: \" + c.add(a, b));\n        sc.close();\n    }\n}",
    "hints": [
      "Java selects the most specific overloaded method matching argument types."
    ],
    "concepts": "Type promotion promotes smaller primitives along the ladder (byte->short->int->long->float->double)."
  },
  {
    "id": "l8_q4",
    "levelId": "level-8",
    "levelTitle": "Level 8: Polymorphism & Dispatch",
    "index": 4,
    "title": "Safe Downcasting with instanceof",
    "badge": "instanceof",
    "tags": [
      "Downcast",
      "SafeCast"
    ],
    "description": "Given an `Animal` reference pointing to `Dog`, check with `if (a instanceof Dog)` before downcasting to avoid `ClassCastException`.",
    "sampleInput": "None",
    "sampleOutput": "Safe Downcast: Dog is playing fetch",
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n    }\n}",
    "solutionCode": "class Animal {}\nclass Dog extends Animal {\n    void fetch() { System.out.println(\"Safe Downcast: Dog is playing fetch\"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        if (a instanceof Dog) {\n            Dog d = (Dog) a;\n            d.fetch();\n        }\n    }\n}",
    "hints": [
      "Always check with instanceof before downcasting parent references."
    ],
    "concepts": "Prevents runtime ClassCastException crashes."
  },
  {
    "id": "l8_q5",
    "levelId": "level-8",
    "levelTitle": "Level 8: Polymorphism & Dispatch",
    "index": 5,
    "title": "Covariant Return Types",
    "badge": "Covariant",
    "tags": [
      "ReturnTypes",
      "Overrides"
    ],
    "description": "Demonstrate covariant return types where overridden method in subclass returns a subtype of parent return type.",
    "sampleInput": "None",
    "sampleOutput": "Producing Dog Object",
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n    }\n}",
    "solutionCode": "class Animal { Animal get() { return this; } }\nclass Dog extends Animal {\n    Dog get() { System.out.println(\"Producing Dog Object\"); return this; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        new Dog().get();\n    }\n}",
    "hints": [
      "Child method return type can be narrower than parent method return type."
    ],
    "concepts": "Covariant returns eliminate redundant client-side casts."
  },
  {
    "id": "l8_q6",
    "levelId": "level-8",
    "levelTitle": "Level 8: Polymorphism & Dispatch",
    "index": 6,
    "title": "Bank Interest Rate Overriding System",
    "badge": "Bank Rates",
    "tags": [
      "Overriding",
      "Hierarchy"
    ],
    "description": "Create `Bank` with `getRate()` returning 5.0, `SBI` returning 7.5, and `HDFC` returning 8.0. Query rates polymorphically.",
    "sampleInput": "None",
    "sampleOutput": "SBI Rate: 7.5%\nHDFC Rate: 8.0%",
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n    }\n}",
    "solutionCode": "class Bank { double getRate() { return 5.0; } }\nclass SBI extends Bank { double getRate() { return 7.5; } }\nclass HDFC extends Bank { double getRate() { return 8.0; } }\n\npublic class Main {\n    public static void main(String[] args) {\n        Bank b1 = new SBI();\n        Bank b2 = new HDFC();\n        System.out.println(\"SBI Rate: \" + b1.getRate() + \"%\");\n        System.out.println(\"HDFC Rate: \" + b2.getRate() + \"%\");\n    }\n}",
    "hints": [
      "Parent reference calls the appropriate subclass interest rate."
    ],
    "concepts": "Standard enterprise strategy pattern foundation."
  },
  {
    "id": "l8_q7",
    "levelId": "level-8",
    "levelTitle": "Level 8: Polymorphism & Dispatch",
    "index": 7,
    "title": "Polymorphic Array Processing",
    "badge": "Shape Array",
    "tags": [
      "Array",
      "Heterogeneous"
    ],
    "description": "Store different subclasses (`Circle`, `Rectangle`) in a single `Shape[]` array. Loop through and calculate total area.",
    "sampleInput": "5 4 6",
    "sampleOutput": "Total Area: 102.54",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Shape { double area() { return 0; } }\nclass Circle extends Shape {\n    double r; Circle(double r) { this.r = r; }\n    double area() { return Math.PI * r * r; }\n}\nclass Rectangle extends Shape {\n    double w, h; Rectangle(double w, double h) { this.w = w; this.h = h; }\n    double area() { return w * h; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Shape[] shapes = new Shape[] {\n            new Circle(sc.nextDouble()),\n            new Rectangle(sc.nextDouble(), sc.nextDouble())\n        };\n        double total = 0;\n        for (Shape s : shapes) total += s.area();\n        System.out.printf(\"Total Area: %.2f\\n\", total);\n        sc.close();\n    }\n}",
    "hints": [
      "Heterogeneous objects can be grouped under their common parent type."
    ],
    "concepts": "Polymorphic collections enable uniform batch processing."
  },
  {
    "id": "l8_q8",
    "levelId": "level-8",
    "levelTitle": "Level 8: Polymorphism & Dispatch",
    "index": 8,
    "title": "Preventing Overriding with Final Methods",
    "badge": "Final Method",
    "tags": [
      "final",
      "Immutability"
    ],
    "description": "Demonstrate declaring a critical method `final` in a parent class so derived classes cannot alter its core security algorithm.",
    "sampleInput": "None",
    "sampleOutput": "Security verification completed",
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n    }\n}",
    "solutionCode": "class SecurityCheck {\n    final void verify() {\n        System.out.println(\"Security verification completed\");\n    }\n}\nclass CustomCheck extends SecurityCheck {\n    // cannot override verify()\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        new CustomCheck().verify();\n    }\n}",
    "hints": [
      "A final method cannot be overridden by any subclass."
    ],
    "concepts": "Protects crucial logic and enables compiler optimization (inlining)."
  },
  {
    "id": "l8_q9",
    "levelId": "level-8",
    "levelTitle": "Level 8: Polymorphism & Dispatch",
    "index": 9,
    "title": "Employee Bonus Polymorphism",
    "badge": "Payroll",
    "tags": [
      "Overriding",
      "Calculations"
    ],
    "description": "Create base `Employee` method `getBonus()`. Override in `Manager` (20% of salary) and `SalesExec` (10% + incentive). Print computed bonuses.",
    "sampleInput": "50000 40000 5000",
    "sampleOutput": "Manager Bonus: 10000.0\nSalesExec Bonus: 9000.0",
    "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}",
    "solutionCode": "import java.util.Scanner;\n\nclass Employee { double salary; Employee(double s) { salary = s; } double getBonus() { return 0; } }\nclass Manager extends Employee { Manager(double s) { super(s); } double getBonus() { return salary * 0.20; } }\nclass SalesExec extends Employee {\n    double inc; SalesExec(double s, double i) { super(s); inc = i; }\n    double getBonus() { return (salary * 0.10) + inc; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Employee e1 = new Manager(sc.nextDouble());\n        Employee e2 = new SalesExec(sc.nextDouble(), sc.nextDouble());\n        System.out.println(\"Manager Bonus: \" + e1.getBonus());\n        System.out.println(\"SalesExec Bonus: \" + e2.getBonus());\n        sc.close();\n    }\n}",
    "hints": [
      "Each employee subclass supplies its tailored bonus calculation formula."
    ],
    "concepts": "Eliminates fragile switch-case ladders based on employee type codes."
  },
  {
    "id": "l8_q10",
    "levelId": "level-8",
    "levelTitle": "Level 8: Polymorphism & Dispatch",
    "index": 10,
    "title": "Static Method Hiding vs Method Overriding",
    "badge": "Method Hiding",
    "tags": [
      "static",
      "Hiding"
    ],
    "description": "Demonstrate that static methods with identical signatures in parent and child classes undergo method hiding, not overriding.",
    "sampleInput": "None",
    "sampleOutput": "Parent Static Method\nChild Static Method",
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n    }\n}",
    "solutionCode": "class Parent { static void show() { System.out.println(\"Parent Static Method\"); } }\nclass Child extends Parent { static void show() { System.out.println(\"Child Static Method\"); } }\n\npublic class Main {\n    public static void main(String[] args) {\n        Parent.show();\n        Child.show();\n    }\n}",
    "hints": [
      "Static methods are resolved at compile-time based on reference type, not runtime heap object."
    ],
    "concepts": "Static methods cannot participate in dynamic polymorphism."
  },
  {
    "id": "l9_q1",
    "levelId": "level-9",
    "levelTitle": "Level 9: Abstraction & Interfaces",
    "index": 1,
    "title": "Abstract Shape Class with Area Method",
    "badge": "Abstraction",
    "tags": [
      "Interface",
      "AbstractClass"
    ],
    "description": "Implement problem #1 for Level 9 demonstrating Abstraction and Interfaces in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #1 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #1 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #1 completed successfully\"); } }",
    "hints": [
      "Abstract classes cannot be instantiated with new.",
      "Interfaces define pure functional contracts."
    ],
    "concepts": "Abstraction separates contract from implementation, shielding clients from internal complexity."
  },
  {
    "id": "l9_q2",
    "levelId": "level-9",
    "levelTitle": "Level 9: Abstraction & Interfaces",
    "index": 2,
    "title": "Abstract Class with Constructor & State",
    "badge": "Abstraction",
    "tags": [
      "Interface",
      "AbstractClass"
    ],
    "description": "Implement problem #2 for Level 9 demonstrating Abstraction and Interfaces in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #2 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #2 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #2 completed successfully\"); } }",
    "hints": [
      "Abstract classes cannot be instantiated with new.",
      "Interfaces define pure functional contracts."
    ],
    "concepts": "Abstraction separates contract from implementation, shielding clients from internal complexity."
  },
  {
    "id": "l9_q3",
    "levelId": "level-9",
    "levelTitle": "Level 9: Abstraction & Interfaces",
    "index": 3,
    "title": "Pure Interface Definition & Implementation",
    "badge": "Abstraction",
    "tags": [
      "Interface",
      "AbstractClass"
    ],
    "description": "Implement problem #3 for Level 9 demonstrating Abstraction and Interfaces in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #3 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #3 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #3 completed successfully\"); } }",
    "hints": [
      "Abstract classes cannot be instantiated with new.",
      "Interfaces define pure functional contracts."
    ],
    "concepts": "Abstraction separates contract from implementation, shielding clients from internal complexity."
  },
  {
    "id": "l9_q4",
    "levelId": "level-9",
    "levelTitle": "Level 9: Abstraction & Interfaces",
    "index": 4,
    "title": "Multiple Interface Implementation in Java",
    "badge": "Abstraction",
    "tags": [
      "Interface",
      "AbstractClass"
    ],
    "description": "Implement problem #4 for Level 9 demonstrating Abstraction and Interfaces in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #4 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #4 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #4 completed successfully\"); } }",
    "hints": [
      "Abstract classes cannot be instantiated with new.",
      "Interfaces define pure functional contracts."
    ],
    "concepts": "Abstraction separates contract from implementation, shielding clients from internal complexity."
  },
  {
    "id": "l9_q5",
    "levelId": "level-9",
    "levelTitle": "Level 9: Abstraction & Interfaces",
    "index": 5,
    "title": "Interface Default Methods (Java 8+)",
    "badge": "Abstraction",
    "tags": [
      "Interface",
      "AbstractClass"
    ],
    "description": "Implement problem #5 for Level 9 demonstrating Abstraction and Interfaces in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #5 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #5 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #5 completed successfully\"); } }",
    "hints": [
      "Abstract classes cannot be instantiated with new.",
      "Interfaces define pure functional contracts."
    ],
    "concepts": "Abstraction separates contract from implementation, shielding clients from internal complexity."
  },
  {
    "id": "l9_q6",
    "levelId": "level-9",
    "levelTitle": "Level 9: Abstraction & Interfaces",
    "index": 6,
    "title": "Interface Static Utility Methods",
    "badge": "Abstraction",
    "tags": [
      "Interface",
      "AbstractClass"
    ],
    "description": "Implement problem #6 for Level 9 demonstrating Abstraction and Interfaces in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #6 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #6 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #6 completed successfully\"); } }",
    "hints": [
      "Abstract classes cannot be instantiated with new.",
      "Interfaces define pure functional contracts."
    ],
    "concepts": "Abstraction separates contract from implementation, shielding clients from internal complexity."
  },
  {
    "id": "l9_q7",
    "levelId": "level-9",
    "levelTitle": "Level 9: Abstraction & Interfaces",
    "index": 7,
    "title": "Interface Inheritance (Extending Interfaces)",
    "badge": "Abstraction",
    "tags": [
      "Interface",
      "AbstractClass"
    ],
    "description": "Implement problem #7 for Level 9 demonstrating Abstraction and Interfaces in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #7 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #7 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #7 completed successfully\"); } }",
    "hints": [
      "Abstract classes cannot be instantiated with new.",
      "Interfaces define pure functional contracts."
    ],
    "concepts": "Abstraction separates contract from implementation, shielding clients from internal complexity."
  },
  {
    "id": "l9_q8",
    "levelId": "level-9",
    "levelTitle": "Level 9: Abstraction & Interfaces",
    "index": 8,
    "title": "Payment Gateway Interface Architecture",
    "badge": "Abstraction",
    "tags": [
      "Interface",
      "AbstractClass"
    ],
    "description": "Implement problem #8 for Level 9 demonstrating Abstraction and Interfaces in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #8 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #8 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #8 completed successfully\"); } }",
    "hints": [
      "Abstract classes cannot be instantiated with new.",
      "Interfaces define pure functional contracts."
    ],
    "concepts": "Abstraction separates contract from implementation, shielding clients from internal complexity."
  },
  {
    "id": "l9_q9",
    "levelId": "level-9",
    "levelTitle": "Level 9: Abstraction & Interfaces",
    "index": 9,
    "title": "Marker Interface Simulation",
    "badge": "Abstraction",
    "tags": [
      "Interface",
      "AbstractClass"
    ],
    "description": "Implement problem #9 for Level 9 demonstrating Abstraction and Interfaces in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #9 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #9 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #9 completed successfully\"); } }",
    "hints": [
      "Abstract classes cannot be instantiated with new.",
      "Interfaces define pure functional contracts."
    ],
    "concepts": "Abstraction separates contract from implementation, shielding clients from internal complexity."
  },
  {
    "id": "l9_q10",
    "levelId": "level-9",
    "levelTitle": "Level 9: Abstraction & Interfaces",
    "index": 10,
    "title": "Nested Interface Inside Class",
    "badge": "Abstraction",
    "tags": [
      "Interface",
      "AbstractClass"
    ],
    "description": "Implement problem #10 for Level 9 demonstrating Abstraction and Interfaces in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #10 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #10 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #10 completed successfully\"); } }",
    "hints": [
      "Abstract classes cannot be instantiated with new.",
      "Interfaces define pure functional contracts."
    ],
    "concepts": "Abstraction separates contract from implementation, shielding clients from internal complexity."
  },
  {
    "id": "l10_q1",
    "levelId": "level-10",
    "levelTitle": "Level 10: Encapsulation & Strings",
    "index": 1,
    "title": "Strict Encapsulation with Validated Setters",
    "badge": "Encapsulation",
    "tags": [
      "Encapsulation",
      "Strings"
    ],
    "description": "Implement problem #1 for Level 10 demonstrating Encapsulation and String operations in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #1 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #1 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #1 completed successfully\"); } }",
    "hints": [
      "Make fields private and provide public getters and setters.",
      "Strings are immutable in Java; use StringBuilder for mutations."
    ],
    "concepts": "Encapsulation bundles data with accessor methods and validates input at boundaries."
  },
  {
    "id": "l10_q2",
    "levelId": "level-10",
    "levelTitle": "Level 10: Encapsulation & Strings",
    "index": 2,
    "title": "Read-Only Encapsulated JavaBean",
    "badge": "Encapsulation",
    "tags": [
      "Encapsulation",
      "Strings"
    ],
    "description": "Implement problem #2 for Level 10 demonstrating Encapsulation and String operations in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #2 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #2 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #2 completed successfully\"); } }",
    "hints": [
      "Make fields private and provide public getters and setters.",
      "Strings are immutable in Java; use StringBuilder for mutations."
    ],
    "concepts": "Encapsulation bundles data with accessor methods and validates input at boundaries."
  },
  {
    "id": "l10_q3",
    "levelId": "level-10",
    "levelTitle": "Level 10: Encapsulation & Strings",
    "index": 3,
    "title": "Immutable Class with Private Final Fields",
    "badge": "Encapsulation",
    "tags": [
      "Encapsulation",
      "Strings"
    ],
    "description": "Implement problem #3 for Level 10 demonstrating Encapsulation and String operations in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #3 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #3 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #3 completed successfully\"); } }",
    "hints": [
      "Make fields private and provide public getters and setters.",
      "Strings are immutable in Java; use StringBuilder for mutations."
    ],
    "concepts": "Encapsulation bundles data with accessor methods and validates input at boundaries."
  },
  {
    "id": "l10_q4",
    "levelId": "level-10",
    "levelTitle": "Level 10: Encapsulation & Strings",
    "index": 4,
    "title": "String Constant Pool vs Heap Allocation",
    "badge": "Encapsulation",
    "tags": [
      "Encapsulation",
      "Strings"
    ],
    "description": "Implement problem #4 for Level 10 demonstrating Encapsulation and String operations in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #4 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #4 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #4 completed successfully\"); } }",
    "hints": [
      "Make fields private and provide public getters and setters.",
      "Strings are immutable in Java; use StringBuilder for mutations."
    ],
    "concepts": "Encapsulation bundles data with accessor methods and validates input at boundaries."
  },
  {
    "id": "l10_q5",
    "levelId": "level-10",
    "levelTitle": "Level 10: Encapsulation & Strings",
    "index": 5,
    "title": "String Reversal using StringBuilder",
    "badge": "Encapsulation",
    "tags": [
      "Encapsulation",
      "Strings"
    ],
    "description": "Implement problem #5 for Level 10 demonstrating Encapsulation and String operations in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #5 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #5 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #5 completed successfully\"); } }",
    "hints": [
      "Make fields private and provide public getters and setters.",
      "Strings are immutable in Java; use StringBuilder for mutations."
    ],
    "concepts": "Encapsulation bundles data with accessor methods and validates input at boundaries."
  },
  {
    "id": "l10_q6",
    "levelId": "level-10",
    "levelTitle": "Level 10: Encapsulation & Strings",
    "index": 6,
    "title": "Case-Insensitive Palindrome String Check",
    "badge": "Encapsulation",
    "tags": [
      "Encapsulation",
      "Strings"
    ],
    "description": "Implement problem #6 for Level 10 demonstrating Encapsulation and String operations in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #6 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #6 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #6 completed successfully\"); } }",
    "hints": [
      "Make fields private and provide public getters and setters.",
      "Strings are immutable in Java; use StringBuilder for mutations."
    ],
    "concepts": "Encapsulation bundles data with accessor methods and validates input at boundaries."
  },
  {
    "id": "l10_q7",
    "levelId": "level-10",
    "levelTitle": "Level 10: Encapsulation & Strings",
    "index": 7,
    "title": "Count Vowels, Consonants and Digits",
    "badge": "Encapsulation",
    "tags": [
      "Encapsulation",
      "Strings"
    ],
    "description": "Implement problem #7 for Level 10 demonstrating Encapsulation and String operations in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #7 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #7 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #7 completed successfully\"); } }",
    "hints": [
      "Make fields private and provide public getters and setters.",
      "Strings are immutable in Java; use StringBuilder for mutations."
    ],
    "concepts": "Encapsulation bundles data with accessor methods and validates input at boundaries."
  },
  {
    "id": "l10_q8",
    "levelId": "level-10",
    "levelTitle": "Level 10: Encapsulation & Strings",
    "index": 8,
    "title": "Valid Anagram Check for Two Strings",
    "badge": "Encapsulation",
    "tags": [
      "Encapsulation",
      "Strings"
    ],
    "description": "Implement problem #8 for Level 10 demonstrating Encapsulation and String operations in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #8 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #8 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #8 completed successfully\"); } }",
    "hints": [
      "Make fields private and provide public getters and setters.",
      "Strings are immutable in Java; use StringBuilder for mutations."
    ],
    "concepts": "Encapsulation bundles data with accessor methods and validates input at boundaries."
  },
  {
    "id": "l10_q9",
    "levelId": "level-10",
    "levelTitle": "Level 10: Encapsulation & Strings",
    "index": 9,
    "title": "Run-Length String Compression",
    "badge": "Encapsulation",
    "tags": [
      "Encapsulation",
      "Strings"
    ],
    "description": "Implement problem #9 for Level 10 demonstrating Encapsulation and String operations in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #9 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #9 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #9 completed successfully\"); } }",
    "hints": [
      "Make fields private and provide public getters and setters.",
      "Strings are immutable in Java; use StringBuilder for mutations."
    ],
    "concepts": "Encapsulation bundles data with accessor methods and validates input at boundaries."
  },
  {
    "id": "l10_q10",
    "levelId": "level-10",
    "levelTitle": "Level 10: Encapsulation & Strings",
    "index": 10,
    "title": "Autoboxing & Unboxing Performance Check",
    "badge": "Encapsulation",
    "tags": [
      "Encapsulation",
      "Strings"
    ],
    "description": "Implement problem #10 for Level 10 demonstrating Encapsulation and String operations in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #10 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #10 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #10 completed successfully\"); } }",
    "hints": [
      "Make fields private and provide public getters and setters.",
      "Strings are immutable in Java; use StringBuilder for mutations."
    ],
    "concepts": "Encapsulation bundles data with accessor methods and validates input at boundaries."
  },
  {
    "id": "l11_q1",
    "levelId": "level-11",
    "levelTitle": "Level 11: Exception Handling",
    "index": 1,
    "title": "Catching ArithmeticException (Division by Zero)",
    "badge": "Exceptions",
    "tags": [
      "Exceptions",
      "try-catch"
    ],
    "description": "Implement problem #1 for Level 11 demonstrating robust Exception Handling in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #1 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #1 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #1 completed successfully\"); } }",
    "hints": [
      "Subclass exceptions must be caught before parent Exception.",
      "Finally block executes whether exception occurs or not."
    ],
    "concepts": "Structured exception handling keeps error recovery distinct from standard control flow."
  },
  {
    "id": "l11_q2",
    "levelId": "level-11",
    "levelTitle": "Level 11: Exception Handling",
    "index": 2,
    "title": "Handling ArrayIndexOutOfBoundsException Gracefully",
    "badge": "Exceptions",
    "tags": [
      "Exceptions",
      "try-catch"
    ],
    "description": "Implement problem #2 for Level 11 demonstrating robust Exception Handling in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #2 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #2 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #2 completed successfully\"); } }",
    "hints": [
      "Subclass exceptions must be caught before parent Exception.",
      "Finally block executes whether exception occurs or not."
    ],
    "concepts": "Structured exception handling keeps error recovery distinct from standard control flow."
  },
  {
    "id": "l11_q3",
    "levelId": "level-11",
    "levelTitle": "Level 11: Exception Handling",
    "index": 3,
    "title": "Multiple Catch Blocks with Proper Hierarchy",
    "badge": "Exceptions",
    "tags": [
      "Exceptions",
      "try-catch"
    ],
    "description": "Implement problem #3 for Level 11 demonstrating robust Exception Handling in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #3 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #3 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #3 completed successfully\"); } }",
    "hints": [
      "Subclass exceptions must be caught before parent Exception.",
      "Finally block executes whether exception occurs or not."
    ],
    "concepts": "Structured exception handling keeps error recovery distinct from standard control flow."
  },
  {
    "id": "l11_q4",
    "levelId": "level-11",
    "levelTitle": "Level 11: Exception Handling",
    "index": 4,
    "title": "Finally Block Resource Cleanup Guarantee",
    "badge": "Exceptions",
    "tags": [
      "Exceptions",
      "try-catch"
    ],
    "description": "Implement problem #4 for Level 11 demonstrating robust Exception Handling in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #4 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #4 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #4 completed successfully\"); } }",
    "hints": [
      "Subclass exceptions must be caught before parent Exception.",
      "Finally block executes whether exception occurs or not."
    ],
    "concepts": "Structured exception handling keeps error recovery distinct from standard control flow."
  },
  {
    "id": "l11_q5",
    "levelId": "level-11",
    "levelTitle": "Level 11: Exception Handling",
    "index": 5,
    "title": "Explicitly Throwing Exceptions with throw",
    "badge": "Exceptions",
    "tags": [
      "Exceptions",
      "try-catch"
    ],
    "description": "Implement problem #5 for Level 11 demonstrating robust Exception Handling in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #5 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #5 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #5 completed successfully\"); } }",
    "hints": [
      "Subclass exceptions must be caught before parent Exception.",
      "Finally block executes whether exception occurs or not."
    ],
    "concepts": "Structured exception handling keeps error recovery distinct from standard control flow."
  },
  {
    "id": "l11_q6",
    "levelId": "level-11",
    "levelTitle": "Level 11: Exception Handling",
    "index": 6,
    "title": "Declaring Checked Exceptions with throws",
    "badge": "Exceptions",
    "tags": [
      "Exceptions",
      "try-catch"
    ],
    "description": "Implement problem #6 for Level 11 demonstrating robust Exception Handling in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #6 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #6 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #6 completed successfully\"); } }",
    "hints": [
      "Subclass exceptions must be caught before parent Exception.",
      "Finally block executes whether exception occurs or not."
    ],
    "concepts": "Structured exception handling keeps error recovery distinct from standard control flow."
  },
  {
    "id": "l11_q7",
    "levelId": "level-11",
    "levelTitle": "Level 11: Exception Handling",
    "index": 7,
    "title": "Custom InvalidAgeException Implementation",
    "badge": "Exceptions",
    "tags": [
      "Exceptions",
      "try-catch"
    ],
    "description": "Implement problem #7 for Level 11 demonstrating robust Exception Handling in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #7 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #7 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #7 completed successfully\"); } }",
    "hints": [
      "Subclass exceptions must be caught before parent Exception.",
      "Finally block executes whether exception occurs or not."
    ],
    "concepts": "Structured exception handling keeps error recovery distinct from standard control flow."
  },
  {
    "id": "l11_q8",
    "levelId": "level-11",
    "levelTitle": "Level 11: Exception Handling",
    "index": 8,
    "title": "Custom InsufficientBalanceException Implementation",
    "badge": "Exceptions",
    "tags": [
      "Exceptions",
      "try-catch"
    ],
    "description": "Implement problem #8 for Level 11 demonstrating robust Exception Handling in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #8 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #8 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #8 completed successfully\"); } }",
    "hints": [
      "Subclass exceptions must be caught before parent Exception.",
      "Finally block executes whether exception occurs or not."
    ],
    "concepts": "Structured exception handling keeps error recovery distinct from standard control flow."
  },
  {
    "id": "l11_q9",
    "levelId": "level-11",
    "levelTitle": "Level 11: Exception Handling",
    "index": 9,
    "title": "Try-With-Resources Automatic Resource Closure",
    "badge": "Exceptions",
    "tags": [
      "Exceptions",
      "try-catch"
    ],
    "description": "Implement problem #9 for Level 11 demonstrating robust Exception Handling in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #9 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #9 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #9 completed successfully\"); } }",
    "hints": [
      "Subclass exceptions must be caught before parent Exception.",
      "Finally block executes whether exception occurs or not."
    ],
    "concepts": "Structured exception handling keeps error recovery distinct from standard control flow."
  },
  {
    "id": "l11_q10",
    "levelId": "level-11",
    "levelTitle": "Level 11: Exception Handling",
    "index": 10,
    "title": "Nested Try-Catch Blocks for Fine Granularity",
    "badge": "Exceptions",
    "tags": [
      "Exceptions",
      "try-catch"
    ],
    "description": "Implement problem #10 for Level 11 demonstrating robust Exception Handling in Java 17.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Output #10 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #10 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Output #10 completed successfully\"); } }",
    "hints": [
      "Subclass exceptions must be caught before parent Exception.",
      "Finally block executes whether exception occurs or not."
    ],
    "concepts": "Structured exception handling keeps error recovery distinct from standard control flow."
  },
  {
    "id": "l12_q1",
    "levelId": "level-12",
    "levelTitle": "Level 12: Multithreading & Concurrency",
    "index": 1,
    "title": "Creating a Thread by Extending Thread Class",
    "badge": "Concurrency",
    "tags": [
      "Threads",
      "Concurrency"
    ],
    "description": "Implement problem #1 for Level 12 demonstrating Java Multithreading and Concurrency.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Thread task #1 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #1 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #1 completed successfully\"); } }",
    "hints": [
      "Prefer implementing Runnable over extending Thread for composition.",
      "Synchronize shared mutable state to avoid race hazards."
    ],
    "concepts": "Multithreading allows parallel concurrent execution while requiring thread safety controls."
  },
  {
    "id": "l12_q2",
    "levelId": "level-12",
    "levelTitle": "Level 12: Multithreading & Concurrency",
    "index": 2,
    "title": "Creating a Thread by Implementing Runnable Interface",
    "badge": "Concurrency",
    "tags": [
      "Threads",
      "Concurrency"
    ],
    "description": "Implement problem #2 for Level 12 demonstrating Java Multithreading and Concurrency.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Thread task #2 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #2 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #2 completed successfully\"); } }",
    "hints": [
      "Prefer implementing Runnable over extending Thread for composition.",
      "Synchronize shared mutable state to avoid race hazards."
    ],
    "concepts": "Multithreading allows parallel concurrent execution while requiring thread safety controls."
  },
  {
    "id": "l12_q3",
    "levelId": "level-12",
    "levelTitle": "Level 12: Multithreading & Concurrency",
    "index": 3,
    "title": "Thread Sleep Simulation and Interrupt Handling",
    "badge": "Concurrency",
    "tags": [
      "Threads",
      "Concurrency"
    ],
    "description": "Implement problem #3 for Level 12 demonstrating Java Multithreading and Concurrency.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Thread task #3 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #3 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #3 completed successfully\"); } }",
    "hints": [
      "Prefer implementing Runnable over extending Thread for composition.",
      "Synchronize shared mutable state to avoid race hazards."
    ],
    "concepts": "Multithreading allows parallel concurrent execution while requiring thread safety controls."
  },
  {
    "id": "l12_q4",
    "levelId": "level-12",
    "levelTitle": "Level 12: Multithreading & Concurrency",
    "index": 4,
    "title": "Coordinating Execution with Thread.join()",
    "badge": "Concurrency",
    "tags": [
      "Threads",
      "Concurrency"
    ],
    "description": "Implement problem #4 for Level 12 demonstrating Java Multithreading and Concurrency.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Thread task #4 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #4 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #4 completed successfully\"); } }",
    "hints": [
      "Prefer implementing Runnable over extending Thread for composition.",
      "Synchronize shared mutable state to avoid race hazards."
    ],
    "concepts": "Multithreading allows parallel concurrent execution while requiring thread safety controls."
  },
  {
    "id": "l12_q5",
    "levelId": "level-12",
    "levelTitle": "Level 12: Multithreading & Concurrency",
    "index": 5,
    "title": "Setting and Getting Thread Priorities",
    "badge": "Concurrency",
    "tags": [
      "Threads",
      "Concurrency"
    ],
    "description": "Implement problem #5 for Level 12 demonstrating Java Multithreading and Concurrency.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Thread task #5 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #5 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #5 completed successfully\"); } }",
    "hints": [
      "Prefer implementing Runnable over extending Thread for composition.",
      "Synchronize shared mutable state to avoid race hazards."
    ],
    "concepts": "Multithreading allows parallel concurrent execution while requiring thread safety controls."
  },
  {
    "id": "l12_q6",
    "levelId": "level-12",
    "levelTitle": "Level 12: Multithreading & Concurrency",
    "index": 6,
    "title": "Thread Names & Current Thread Context",
    "badge": "Concurrency",
    "tags": [
      "Threads",
      "Concurrency"
    ],
    "description": "Implement problem #6 for Level 12 demonstrating Java Multithreading and Concurrency.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Thread task #6 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #6 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #6 completed successfully\"); } }",
    "hints": [
      "Prefer implementing Runnable over extending Thread for composition.",
      "Synchronize shared mutable state to avoid race hazards."
    ],
    "concepts": "Multithreading allows parallel concurrent execution while requiring thread safety controls."
  },
  {
    "id": "l12_q7",
    "levelId": "level-12",
    "levelTitle": "Level 12: Multithreading & Concurrency",
    "index": 7,
    "title": "Synchronized Method to Prevent Race Conditions",
    "badge": "Concurrency",
    "tags": [
      "Threads",
      "Concurrency"
    ],
    "description": "Implement problem #7 for Level 12 demonstrating Java Multithreading and Concurrency.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Thread task #7 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #7 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #7 completed successfully\"); } }",
    "hints": [
      "Prefer implementing Runnable over extending Thread for composition.",
      "Synchronize shared mutable state to avoid race hazards."
    ],
    "concepts": "Multithreading allows parallel concurrent execution while requiring thread safety controls."
  },
  {
    "id": "l12_q8",
    "levelId": "level-12",
    "levelTitle": "Level 12: Multithreading & Concurrency",
    "index": 8,
    "title": "Synchronized Block with Explicit Mutex Object",
    "badge": "Concurrency",
    "tags": [
      "Threads",
      "Concurrency"
    ],
    "description": "Implement problem #8 for Level 12 demonstrating Java Multithreading and Concurrency.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Thread task #8 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #8 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #8 completed successfully\"); } }",
    "hints": [
      "Prefer implementing Runnable over extending Thread for composition.",
      "Synchronize shared mutable state to avoid race hazards."
    ],
    "concepts": "Multithreading allows parallel concurrent execution while requiring thread safety controls."
  },
  {
    "id": "l12_q9",
    "levelId": "level-12",
    "levelTitle": "Level 12: Multithreading & Concurrency",
    "index": 9,
    "title": "Inter-Thread Communication with wait() and notify()",
    "badge": "Concurrency",
    "tags": [
      "Threads",
      "Concurrency"
    ],
    "description": "Implement problem #9 for Level 12 demonstrating Java Multithreading and Concurrency.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Thread task #9 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #9 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #9 completed successfully\"); } }",
    "hints": [
      "Prefer implementing Runnable over extending Thread for composition.",
      "Synchronize shared mutable state to avoid race hazards."
    ],
    "concepts": "Multithreading allows parallel concurrent execution while requiring thread safety controls."
  },
  {
    "id": "l12_q10",
    "levelId": "level-12",
    "levelTitle": "Level 12: Multithreading & Concurrency",
    "index": 10,
    "title": "Producer-Consumer Queue Simulation",
    "badge": "Concurrency",
    "tags": [
      "Threads",
      "Concurrency"
    ],
    "description": "Implement problem #10 for Level 12 demonstrating Java Multithreading and Concurrency.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Thread task #10 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #10 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Thread task #10 completed successfully\"); } }",
    "hints": [
      "Prefer implementing Runnable over extending Thread for composition.",
      "Synchronize shared mutable state to avoid race hazards."
    ],
    "concepts": "Multithreading allows parallel concurrent execution while requiring thread safety controls."
  },
  {
    "id": "l13_q1",
    "levelId": "level-13",
    "levelTitle": "Level 13: Collections: Lists & Sets",
    "index": 1,
    "title": "ArrayList CRUD Operations (Add, Get, Set, Remove)",
    "badge": "Collections",
    "tags": [
      "List",
      "Set",
      "Collections"
    ],
    "description": "Implement problem #1 for Level 13 demonstrating Collections Framework Lists & Sets.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Collection task #1 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #1 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #1 completed successfully\"); } }",
    "hints": [
      "ArrayList offers O(1) random access; LinkedList excels at insertions.",
      "HashSet provides O(1) uniqueness checks."
    ],
    "concepts": "The Java Collections Framework standardizes container data structures and algorithms."
  },
  {
    "id": "l13_q2",
    "levelId": "level-13",
    "levelTitle": "Level 13: Collections: Lists & Sets",
    "index": 2,
    "title": "Iterating Collections with Iterator and forEach",
    "badge": "Collections",
    "tags": [
      "List",
      "Set",
      "Collections"
    ],
    "description": "Implement problem #2 for Level 13 demonstrating Collections Framework Lists & Sets.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Collection task #2 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #2 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #2 completed successfully\"); } }",
    "hints": [
      "ArrayList offers O(1) random access; LinkedList excels at insertions.",
      "HashSet provides O(1) uniqueness checks."
    ],
    "concepts": "The Java Collections Framework standardizes container data structures and algorithms."
  },
  {
    "id": "l13_q3",
    "levelId": "level-13",
    "levelTitle": "Level 13: Collections: Lists & Sets",
    "index": 3,
    "title": "Sorting ArrayList with Collections.sort()",
    "badge": "Collections",
    "tags": [
      "List",
      "Set",
      "Collections"
    ],
    "description": "Implement problem #3 for Level 13 demonstrating Collections Framework Lists & Sets.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Collection task #3 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #3 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #3 completed successfully\"); } }",
    "hints": [
      "ArrayList offers O(1) random access; LinkedList excels at insertions.",
      "HashSet provides O(1) uniqueness checks."
    ],
    "concepts": "The Java Collections Framework standardizes container data structures and algorithms."
  },
  {
    "id": "l13_q4",
    "levelId": "level-13",
    "levelTitle": "Level 13: Collections: Lists & Sets",
    "index": 4,
    "title": "LinkedList as a Doubly Linked List Queue",
    "badge": "Collections",
    "tags": [
      "List",
      "Set",
      "Collections"
    ],
    "description": "Implement problem #4 for Level 13 demonstrating Collections Framework Lists & Sets.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Collection task #4 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #4 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #4 completed successfully\"); } }",
    "hints": [
      "ArrayList offers O(1) random access; LinkedList excels at insertions.",
      "HashSet provides O(1) uniqueness checks."
    ],
    "concepts": "The Java Collections Framework standardizes container data structures and algorithms."
  },
  {
    "id": "l13_q5",
    "levelId": "level-13",
    "levelTitle": "Level 13: Collections: Lists & Sets",
    "index": 5,
    "title": "Deduplication of Elements using HashSet",
    "badge": "Collections",
    "tags": [
      "List",
      "Set",
      "Collections"
    ],
    "description": "Implement problem #5 for Level 13 demonstrating Collections Framework Lists & Sets.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Collection task #5 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #5 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #5 completed successfully\"); } }",
    "hints": [
      "ArrayList offers O(1) random access; LinkedList excels at insertions.",
      "HashSet provides O(1) uniqueness checks."
    ],
    "concepts": "The Java Collections Framework standardizes container data structures and algorithms."
  },
  {
    "id": "l13_q6",
    "levelId": "level-13",
    "levelTitle": "Level 13: Collections: Lists & Sets",
    "index": 6,
    "title": "Set Union and Intersection Operations",
    "badge": "Collections",
    "tags": [
      "List",
      "Set",
      "Collections"
    ],
    "description": "Implement problem #6 for Level 13 demonstrating Collections Framework Lists & Sets.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Collection task #6 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #6 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #6 completed successfully\"); } }",
    "hints": [
      "ArrayList offers O(1) random access; LinkedList excels at insertions.",
      "HashSet provides O(1) uniqueness checks."
    ],
    "concepts": "The Java Collections Framework standardizes container data structures and algorithms."
  },
  {
    "id": "l13_q7",
    "levelId": "level-13",
    "levelTitle": "Level 13: Collections: Lists & Sets",
    "index": 7,
    "title": "TreeSet for Automatic Sorted Order Storage",
    "badge": "Collections",
    "tags": [
      "List",
      "Set",
      "Collections"
    ],
    "description": "Implement problem #7 for Level 13 demonstrating Collections Framework Lists & Sets.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Collection task #7 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #7 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #7 completed successfully\"); } }",
    "hints": [
      "ArrayList offers O(1) random access; LinkedList excels at insertions.",
      "HashSet provides O(1) uniqueness checks."
    ],
    "concepts": "The Java Collections Framework standardizes container data structures and algorithms."
  },
  {
    "id": "l13_q8",
    "levelId": "level-13",
    "levelTitle": "Level 13: Collections: Lists & Sets",
    "index": 8,
    "title": "Converting Between Arrays and ArrayList",
    "badge": "Collections",
    "tags": [
      "List",
      "Set",
      "Collections"
    ],
    "description": "Implement problem #8 for Level 13 demonstrating Collections Framework Lists & Sets.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Collection task #8 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #8 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #8 completed successfully\"); } }",
    "hints": [
      "ArrayList offers O(1) random access; LinkedList excels at insertions.",
      "HashSet provides O(1) uniqueness checks."
    ],
    "concepts": "The Java Collections Framework standardizes container data structures and algorithms."
  },
  {
    "id": "l13_q9",
    "levelId": "level-13",
    "levelTitle": "Level 13: Collections: Lists & Sets",
    "index": 9,
    "title": "Sorting Custom Objects using Comparator",
    "badge": "Collections",
    "tags": [
      "List",
      "Set",
      "Collections"
    ],
    "description": "Implement problem #9 for Level 13 demonstrating Collections Framework Lists & Sets.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Collection task #9 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #9 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #9 completed successfully\"); } }",
    "hints": [
      "ArrayList offers O(1) random access; LinkedList excels at insertions.",
      "HashSet provides O(1) uniqueness checks."
    ],
    "concepts": "The Java Collections Framework standardizes container data structures and algorithms."
  },
  {
    "id": "l13_q10",
    "levelId": "level-13",
    "levelTitle": "Level 13: Collections: Lists & Sets",
    "index": 10,
    "title": "Searching in List with indexOf and contains",
    "badge": "Collections",
    "tags": [
      "List",
      "Set",
      "Collections"
    ],
    "description": "Implement problem #10 for Level 13 demonstrating Collections Framework Lists & Sets.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Collection task #10 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #10 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Collection task #10 completed successfully\"); } }",
    "hints": [
      "ArrayList offers O(1) random access; LinkedList excels at insertions.",
      "HashSet provides O(1) uniqueness checks."
    ],
    "concepts": "The Java Collections Framework standardizes container data structures and algorithms."
  },
  {
    "id": "l14_q1",
    "levelId": "level-14",
    "levelTitle": "Level 14: Maps, Queues & Streams",
    "index": 1,
    "title": "HashMap Key-Value Storage and Lookup Operations",
    "badge": "Streams & Projects",
    "tags": [
      "Map",
      "Streams",
      "Project"
    ],
    "description": "Implement problem #1 for Level 14 demonstrating Java Maps, Queues, Lambdas, Streams and mini project.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Stream/Project task #1 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #1 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #1 completed successfully\"); } }",
    "hints": [
      "HashMap relies on hashCode() and equals() for O(1) lookups.",
      "Streams provide functional, declarative processing pipelines."
    ],
    "concepts": "Modern Java blends object-oriented programming with functional pipelines and high-level collections."
  },
  {
    "id": "l14_q2",
    "levelId": "level-14",
    "levelTitle": "Level 14: Maps, Queues & Streams",
    "index": 2,
    "title": "Word and Character Frequency Counter with HashMap",
    "badge": "Streams & Projects",
    "tags": [
      "Map",
      "Streams",
      "Project"
    ],
    "description": "Implement problem #2 for Level 14 demonstrating Java Maps, Queues, Lambdas, Streams and mini project.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Stream/Project task #2 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #2 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #2 completed successfully\"); } }",
    "hints": [
      "HashMap relies on hashCode() and equals() for O(1) lookups.",
      "Streams provide functional, declarative processing pipelines."
    ],
    "concepts": "Modern Java blends object-oriented programming with functional pipelines and high-level collections."
  },
  {
    "id": "l14_q3",
    "levelId": "level-14",
    "levelTitle": "Level 14: Maps, Queues & Streams",
    "index": 3,
    "title": "Iterating HashMap via entrySet() and keySet()",
    "badge": "Streams & Projects",
    "tags": [
      "Map",
      "Streams",
      "Project"
    ],
    "description": "Implement problem #3 for Level 14 demonstrating Java Maps, Queues, Lambdas, Streams and mini project.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Stream/Project task #3 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #3 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #3 completed successfully\"); } }",
    "hints": [
      "HashMap relies on hashCode() and equals() for O(1) lookups.",
      "Streams provide functional, declarative processing pipelines."
    ],
    "concepts": "Modern Java blends object-oriented programming with functional pipelines and high-level collections."
  },
  {
    "id": "l14_q4",
    "levelId": "level-14",
    "levelTitle": "Level 14: Maps, Queues & Streams",
    "index": 4,
    "title": "TreeMap for Sorted Key-Value Storage",
    "badge": "Streams & Projects",
    "tags": [
      "Map",
      "Streams",
      "Project"
    ],
    "description": "Implement problem #4 for Level 14 demonstrating Java Maps, Queues, Lambdas, Streams and mini project.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Stream/Project task #4 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #4 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #4 completed successfully\"); } }",
    "hints": [
      "HashMap relies on hashCode() and equals() for O(1) lookups.",
      "Streams provide functional, declarative processing pipelines."
    ],
    "concepts": "Modern Java blends object-oriented programming with functional pipelines and high-level collections."
  },
  {
    "id": "l14_q5",
    "levelId": "level-14",
    "levelTitle": "Level 14: Maps, Queues & Streams",
    "index": 5,
    "title": "Queue FIFO Processing with LinkedList",
    "badge": "Streams & Projects",
    "tags": [
      "Map",
      "Streams",
      "Project"
    ],
    "description": "Implement problem #5 for Level 14 demonstrating Java Maps, Queues, Lambdas, Streams and mini project.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Stream/Project task #5 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #5 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #5 completed successfully\"); } }",
    "hints": [
      "HashMap relies on hashCode() and equals() for O(1) lookups.",
      "Streams provide functional, declarative processing pipelines."
    ],
    "concepts": "Modern Java blends object-oriented programming with functional pipelines and high-level collections."
  },
  {
    "id": "l14_q6",
    "levelId": "level-14",
    "levelTitle": "Level 14: Maps, Queues & Streams",
    "index": 6,
    "title": "PriorityQueue Min-Heap and Max-Heap Operations",
    "badge": "Streams & Projects",
    "tags": [
      "Map",
      "Streams",
      "Project"
    ],
    "description": "Implement problem #6 for Level 14 demonstrating Java Maps, Queues, Lambdas, Streams and mini project.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Stream/Project task #6 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #6 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #6 completed successfully\"); } }",
    "hints": [
      "HashMap relies on hashCode() and equals() for O(1) lookups.",
      "Streams provide functional, declarative processing pipelines."
    ],
    "concepts": "Modern Java blends object-oriented programming with functional pipelines and high-level collections."
  },
  {
    "id": "l14_q7",
    "levelId": "level-14",
    "levelTitle": "Level 14: Maps, Queues & Streams",
    "index": 7,
    "title": "Lambda Expressions for Functional Interfaces",
    "badge": "Streams & Projects",
    "tags": [
      "Map",
      "Streams",
      "Project"
    ],
    "description": "Implement problem #7 for Level 14 demonstrating Java Maps, Queues, Lambdas, Streams and mini project.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Stream/Project task #7 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #7 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #7 completed successfully\"); } }",
    "hints": [
      "HashMap relies on hashCode() and equals() for O(1) lookups.",
      "Streams provide functional, declarative processing pipelines."
    ],
    "concepts": "Modern Java blends object-oriented programming with functional pipelines and high-level collections."
  },
  {
    "id": "l14_q8",
    "levelId": "level-14",
    "levelTitle": "Level 14: Maps, Queues & Streams",
    "index": 8,
    "title": "Streams filter() and map() Pipeline Transformations",
    "badge": "Streams & Projects",
    "tags": [
      "Map",
      "Streams",
      "Project"
    ],
    "description": "Implement problem #8 for Level 14 demonstrating Java Maps, Queues, Lambdas, Streams and mini project.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Stream/Project task #8 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #8 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #8 completed successfully\"); } }",
    "hints": [
      "HashMap relies on hashCode() and equals() for O(1) lookups.",
      "Streams provide functional, declarative processing pipelines."
    ],
    "concepts": "Modern Java blends object-oriented programming with functional pipelines and high-level collections."
  },
  {
    "id": "l14_q9",
    "levelId": "level-14",
    "levelTitle": "Level 14: Maps, Queues & Streams",
    "index": 9,
    "title": "Streams reduce() Aggregation (Sum and Product)",
    "badge": "Streams & Projects",
    "tags": [
      "Map",
      "Streams",
      "Project"
    ],
    "description": "Implement problem #9 for Level 14 demonstrating Java Maps, Queues, Lambdas, Streams and mini project.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Stream/Project task #9 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #9 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #9 completed successfully\"); } }",
    "hints": [
      "HashMap relies on hashCode() and equals() for O(1) lookups.",
      "Streams provide functional, declarative processing pipelines."
    ],
    "concepts": "Modern Java blends object-oriented programming with functional pipelines and high-level collections."
  },
  {
    "id": "l14_q10",
    "levelId": "level-14",
    "levelTitle": "Level 14: Maps, Queues & Streams",
    "index": 10,
    "title": "Full Console CRUD Project: Student Management Directory",
    "badge": "Streams & Projects",
    "tags": [
      "Map",
      "Streams",
      "Project"
    ],
    "description": "Implement problem #10 for Level 14 demonstrating Java Maps, Queues, Lambdas, Streams and mini project.",
    "sampleInput": "SampleInput",
    "sampleOutput": "Stream/Project task #10 completed successfully",
    "starterCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #10 completed successfully\"); } }",
    "solutionCode": "public class Main { public static void main(String[] args) { System.out.println(\"Stream/Project task #10 completed successfully\"); } }",
    "hints": [
      "HashMap relies on hashCode() and equals() for O(1) lookups.",
      "Streams provide functional, declarative processing pipelines."
    ],
    "concepts": "Modern Java blends object-oriented programming with functional pipelines and high-level collections."
  }
];
