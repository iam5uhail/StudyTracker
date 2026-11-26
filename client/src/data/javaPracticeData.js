// Curated Core Java Practice Curriculum: From Basics to Advanced & Mini Projects
export const JAVA_PRACTICE_LEVELS = [
  { id: 'level-1', title: 'Level 1: Start Here', subtitle: 'Basics, I/O with Scanner, Arithmetic & Type Casting', count: 10 },
  { id: 'level-2', title: 'Level 2: Conditions', subtitle: 'if/else, nested conditions, ternary, and switch-case', count: 10 },
  { id: 'level-3', title: 'Level 3: Loops & Patterns', subtitle: 'while, for, do-while, nested loops & logic patterns', count: 0, upcoming: true },
  { id: 'level-4', title: 'Level 4: Methods & Arrays', subtitle: 'Modular programming, 1D/2D arrays & string manipulation', count: 0, upcoming: true },
  { id: 'level-5', title: 'Level 5: OOPs & Projects', subtitle: 'Classes, Objects, Inheritance, Encapsulation & Mini Apps', count: 0, upcoming: true },
];

export const JAVA_PRACTICE_QUESTIONS = [
  // ==========================================
  // LEVEL 1: START HERE (10 Questions)
  // ==========================================
  {
    id: 'l1_q1',
    levelId: 'level-1',
    levelTitle: 'Level 1: Start Here',
    index: 1,
    title: 'Print Bio on Three Lines',
    badge: 'Basic Output',
    tags: ['System.out.println', 'Strings', 'Syntax'],
    description: `Write a program in Java to print your **Name**, **City**, and **Favourite Programming Language** on three separate lines using \`System.out.println()\`.

### Requirements:
1. Print Name on line 1.
2. Print City on line 2.
3. Print Favourite Language on line 3.`,
    sampleInput: `None (Direct Output)`,
    sampleOutput: `Name: Suhail
City: Panaji
Favourite Language: Java`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // Write your code below to print your name, city, and favourite language
        
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Name: Suhail");
        System.out.println("City: Panaji");
        System.out.println("Favourite Language: Java");
    }
}`,
    hints: [
      'Use System.out.println() for each line. It automatically adds a newline after printing.',
      'Strings in Java must always be enclosed in double quotes ("), not single quotes (\').'
    ],
    concepts: 'System.out.println() vs System.out.print(). println appends a newline \\n after outputting the argument.'
  },
  {
    id: 'l1_q2',
    levelId: 'level-1',
    levelTitle: 'Level 1: Start Here',
    index: 2,
    title: 'Two Integers: Sum, Diff, Product, Quotient',
    badge: 'Scanner & Arithmetic',
    tags: ['Scanner', 'Arithmetic', 'Integers'],
    description: `Read two integers from standard input using \`Scanner\`.
Calculate and print:
1. **Sum** ($a + b$)
2. **Difference** ($a - b$)
3. **Product** ($a \\times b$)
4. **Quotient** ($a / b$, as an integer or double)

### Requirements:
- Use \`Scanner sc = new Scanner(System.in);\`
- Read using \`sc.nextInt()\`
- Display each result clearly with its label.`,
    sampleInput: `20 4`,
    sampleOutput: `Sum: 24
Difference: 16
Product: 80
Quotient: 5`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read two integers and compute sum, difference, product, quotient
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int a = sc.nextInt();
        System.out.print("Enter second number: ");
        int b = sc.nextInt();

        int sum = a + b;
        int diff = a - b;
        int prod = a * b;
        int quot = a / b;

        System.out.println("Sum: " + sum);
        System.out.println("Difference: " + diff);
        System.out.println("Product: " + prod);
        System.out.println("Quotient: " + quot);
        
        sc.close();
    }
}`,
    hints: [
      'Remember to import java.util.Scanner at the top.',
      'Declare variables with int type: int a = sc.nextInt();',
      'If b is 0, integer division will throw ArithmeticException: / by zero.'
    ],
    concepts: 'Integer division in Java discards decimals (truncates towards zero).'
  },
  {
    id: 'l1_q3',
    levelId: 'level-1',
    levelTitle: 'Level 1: Start Here',
    index: 3,
    title: 'Area and Perimeter of a Rectangle',
    badge: 'Geometry & Double',
    tags: ['Formula', 'Math', 'Scanner'],
    description: `Read the **length** and **width** of a rectangle (can be decimals/doubles) from the user.
Calculate and print:
- **Area**: $\\text{length} \\times \\text{width}$
- **Perimeter**: $2 \\times (\\text{length} + \\text{width})$`,
    sampleInput: `7.5 4.0`,
    sampleOutput: `Area: 30.0
Perimeter: 23.0`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read length and width (double) and print Area & Perimeter
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter length: ");
        double length = sc.nextDouble();
        System.out.print("Enter width: ");
        double width = sc.nextDouble();

        double area = length * width;
        double perimeter = 2 * (length + width);

        System.out.println("Area: " + area);
        System.out.println("Perimeter: " + perimeter);
        
        sc.close();
    }
}`,
    hints: [
      'Use double length = sc.nextDouble(); to support decimals.',
      'Remember parentheses in 2 * (length + width) so addition happens before multiplication.'
    ],
    concepts: 'Operator precedence: parentheses () have higher precedence than multiplication *.'
  },
  {
    id: 'l1_q4',
    levelId: 'level-1',
    levelTitle: 'Level 1: Start Here',
    index: 4,
    title: 'Celsius to Fahrenheit Converter',
    badge: 'Type Casting & Math',
    tags: ['Conversion', 'double', 'Pitfall'],
    description: `Read a temperature in **Celsius** and convert it to **Fahrenheit** using the formula:
$$F = (C \\times \\frac{9}{5}) + 32$$

> [!WARNING] Common Java Trap:
> In Java, writing \`9 / 5\` performs integer division and equals \`1\`, ruining the calculation!
> You MUST write \`9.0 / 5\` or \`9 / 5.0\` to get \`1.8\`.`,
    sampleInput: `37.0`,
    sampleOutput: `Temperature in Fahrenheit: 98.6`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Convert Celsius to Fahrenheit
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter temperature in Celsius: ");
        double celsius = sc.nextDouble();

        // 9.0 / 5 ensures floating point division
        double fahrenheit = (celsius * 9.0 / 5.0) + 32;

        System.out.println("Temperature in Fahrenheit: " + fahrenheit);
        sc.close();
    }
}`,
    hints: [
      'Do not use 9 / 5! Use 9.0 / 5.0 or 1.8 directly.',
      'Test with 0°C -> 32.0°F and 100°C -> 212.0°F.'
    ],
    concepts: 'Literal types: 9 is an int, 9.0 is a double. int / int = int, double / int = double.'
  },
  {
    id: 'l1_q5',
    levelId: 'level-1',
    levelTitle: 'Level 1: Start Here',
    index: 5,
    title: 'Days to Weeks and Days',
    badge: 'Modulo & Division',
    tags: ['/', '%', 'Time'],
    description: `Read a total number of days as an integer and convert it into **weeks** and **remaining days**.

### Example:
- If input is \`17\`, output: \`17 days = 2 weeks and 3 days\`.
- If input is \`28\`, output: \`28 days = 4 weeks and 0 days\`.`,
    sampleInput: `17`,
    sampleOutput: `17 days = 2 weeks and 3 days`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read total days and compute weeks and remainder days
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter total days: ");
        int totalDays = sc.nextInt();

        int weeks = totalDays / 7;
        int remainingDays = totalDays % 7;

        System.out.println(totalDays + " days = " + weeks + " weeks and " + remainingDays + " days");
        sc.close();
    }
}`,
    hints: [
      'Use division / to get whole weeks: totalDays / 7',
      'Use modulus % to get the remainder days: totalDays % 7'
    ],
    concepts: 'The modulo operator % returns the remainder after integer division.'
  },
  {
    id: 'l1_q6',
    levelId: 'level-1',
    levelTitle: 'Level 1: Start Here',
    index: 6,
    title: 'Swap Two Variables (With & Without Temp)',
    badge: 'Variable Manipulation',
    tags: ['Swap', 'Logic', 'Interview Basic'],
    description: `Read two numbers \`a\` and \`b\`.
Demonstrate variable swapping in **two distinct ways**:
1. **Method 1**: Using a temporary variable \`temp\`
2. **Method 2**: Without using any extra variable (using arithmetic \`+\` and \`-\`)`,
    sampleInput: `10 25`,
    sampleOutput: `Original: a = 10, b = 25
After swap with temp: a = 25, b = 10
After swap without temp: a = 10, b = 25`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        // 1. Swap with temp
        
        // 2. Swap without temp (using + and -)
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a: ");
        int a = sc.nextInt();
        System.out.print("Enter b: ");
        int b = sc.nextInt();

        System.out.println("Original: a = " + a + ", b = " + b);

        // Method 1: Using temp variable
        int temp = a;
        a = b;
        b = temp;
        System.out.println("After swap with temp: a = " + a + ", b = " + b);

        // Method 2: Without temp variable (using arithmetic)
        a = a + b; // a now holds sum
        b = a - b; // b becomes original a
        a = a - b; // a becomes original b
        System.out.println("After swap without temp: a = " + a + ", b = " + b);
        
        sc.close();
    }
}`,
    hints: [
      'For temp swap: store a in temp, assign b to a, assign temp to b.',
      'For arithmetic swap: a = a + b, b = a - b, a = a - b.'
    ],
    concepts: 'Memory reassignment and in-place arithmetic variable swapping.'
  },
  {
    id: 'l1_q7',
    levelId: 'level-1',
    levelTitle: 'Level 1: Start Here',
    index: 7,
    title: 'Sum of Digits of a 3-Digit Number',
    badge: 'Digit Extraction',
    tags: ['Digits', '%', '/', 'Algorithm'],
    description: `Read a 3-digit integer from standard input (e.g. \`384\`).
Extract each individual digit using \`%\` and \`/\` operators, and calculate their sum.

### Example:
- Input: \`384\`
- Calculation: 3 + 8 + 4 = 15
- Output: \`Sum of digits: 15\``,
    sampleInput: `384`,
    sampleOutput: `Sum of digits: 15`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read 3-digit number and sum its digits using % and /
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a 3-digit number: ");
        int num = sc.nextInt();

        // Extract units digit
        int d3 = num % 10;
        // Extract tens digit
        int d2 = (num / 10) % 10;
        // Extract hundreds digit
        int d1 = num / 100;

        int sum = d1 + d2 + d3;

        System.out.println("Digits: " + d1 + " + " + d2 + " + " + d3);
        System.out.println("Sum of digits: " + sum);
        sc.close();
    }
}`,
    hints: [
      'num % 10 gives the last digit (e.g., 384 % 10 = 4).',
      'num / 10 chops off the last digit (e.g., 384 / 10 = 38).',
      '(num / 10) % 10 gives the middle digit.'
    ],
    concepts: 'The modulo by 10 and divide by 10 pattern is the foundation for reversing numbers, palindromes, and digit counting in DSA.'
  },
  {
    id: 'l1_q8',
    levelId: 'level-1',
    levelTitle: 'Level 1: Start Here',
    index: 8,
    title: 'Calculate Simple Interest',
    badge: 'Financial Math',
    tags: ['Formula', 'double', 'Scanner'],
    description: `Read Principal amount ($P$), Annual Rate of Interest in percent ($R$), and Time in years ($T$).
Calculate and print:
- **Simple Interest**: $SI = \\frac{P \\times R \\times T}{100}$
- **Total Amount**: $\\text{Principal} + SI$`,
    sampleInput: `10000 7.5 3`,
    sampleOutput: `Simple Interest: 2250.0
Total Amount: 12250.0`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read P, R, T and compute Simple Interest
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Principal: ");
        double p = sc.nextDouble();
        System.out.print("Enter Rate (%): ");
        double r = sc.nextDouble();
        System.out.print("Enter Time (years): ");
        double t = sc.nextDouble();

        double si = (p * r * t) / 100.0;
        double total = p + si;

        System.out.println("Simple Interest: " + si);
        System.out.println("Total Amount: " + total);
        sc.close();
    }
}`,
    hints: [
      'Use double for precision since interest and rates can be decimals.',
      'Formula: (P * R * T) / 100.0'
    ],
    concepts: 'Floating point arithmetic and standard order of operations.'
  },
  {
    id: 'l1_q9',
    levelId: 'level-1',
    levelTitle: 'Level 1: Start Here',
    index: 9,
    title: 'Integer vs Floating Division & Modulo',
    badge: 'Core Concept Analysis',
    tags: ['Division', 'Casting', 'Evaluation'],
    description: `Write a program to print the result of the following 4 expressions and explain why they differ:
1. \`10 / 3\`
2. \`10 % 3\`
3. \`10 / 3.0\`
4. \`(double) 10 / 3\`

### Expected Observations:
- Explain why \`10 / 3\` gives \`3\` and not \`3.3333333333333335\`.
- Explain how \`10 % 3\` produces the remainder.
- Explain how introducing a double operand promotes the entire expression to floating-point.`,
    sampleInput: `None (Direct code analysis)`,
    sampleOutput: `10 / 3 = 3
10 % 3 = 1
10 / 3.0 = 3.3333333333333335
(double) 10 / 3 = 3.3333333333333335`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // Print the 4 expressions and examine output
        
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("10 / 3 = " + (10 / 3));                     // int / int -> int (truncated: 3)
        System.out.println("10 % 3 = " + (10 % 3));                     // int % int -> remainder (1)
        System.out.println("10 / 3.0 = " + (10 / 3.0));                 // int / double -> double (3.333...)
        System.out.println("(double) 10 / 3 = " + ((double) 10 / 3));   // explicit cast promotes to double
    }
}`,
    hints: [
      'Wrap each expression in parentheses when concatenating with strings: "10 / 3 = " + (10 / 3).',
      'Notice that (double) 10 / 3 casts 10 to 10.0 first, then divides by 3.'
    ],
    concepts: 'Automatic Type Promotion: If one operand in an arithmetic operation is double, the other is promoted to double.'
  },
  {
    id: 'l1_q10',
    levelId: 'level-1',
    levelTitle: 'Level 1: Start Here',
    index: 10,
    title: 'Predict Output: Post/Pre Increment & Precedence',
    badge: 'Interview Drill',
    tags: ['++', '--', 'Precedence', 'Quiz'],
    description: `Study this code snippet. First, **predict the output on paper**, then run the program to check your reasoning:

\`\`\`java
int a = 5;
int b = a++ + ++a * 2;
int c = --b - a--;
System.out.println("a = " + a);
System.out.println("b = " + b);
System.out.println("c = " + c);
\`\`\`

### Step-by-Step Breakdown:
1. \`a++\`: uses current \`a\` ($5$), then \`a\` becomes $6$.
2. \`++a\`: \`a\` increments first to $7$, then used as $7$.
3. Multiplication has higher precedence: $7 \\times 2 = 14$.
4. $b = 5 + 14 = 19$.`,
    sampleInput: `None`,
    sampleOutput: `a = 6
b = 19
c = 11`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = a++ + ++a * 2;
        int c = --b - a--;

        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println("c = " + c);
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int a = 5;
        // Step 1: a++ yields 5, then a becomes 6
        // Step 2: ++a increments a to 7, yields 7
        // Step 3: 7 * 2 = 14
        // Step 4: 5 + 14 = 19 (b = 19, a = 7)
        int b = a++ + ++a * 2;

        // Step 5: --b decrements b to 18, yields 18
        // Step 6: a-- yields 7, then a becomes 6
        // Step 7: c = 18 - 7 = 11
        int c = --b - a--;

        System.out.println("a = " + a); // 6
        System.out.println("b = " + b); // 18
        System.out.println("c = " + c); // 11
    }
}`,
    hints: [
      'Post-increment (x++): use original value in expression, then increment variable in memory.',
      'Pre-increment (++x): increment variable first, then use new value in expression.'
    ],
    concepts: 'Operator Precedence and Post-fix vs Pre-fix evaluation order in Java.'
  },

  // ==========================================
  // LEVEL 2: CONDITIONS (10 Questions)
  // ==========================================
  {
    id: 'l2_q1',
    levelId: 'level-2',
    levelTitle: 'Level 2: Conditions',
    index: 1,
    title: 'Positive, Negative, or Zero',
    badge: 'if-else',
    tags: ['Scanner', 'Conditionals', 'Comparison'],
    description: `Read an integer from the user using \`Scanner\`.
Check and print whether the number is:
- **Positive** ($n > 0$)
- **Negative** ($n < 0$)
- **Zero** ($n == 0$)`,
    sampleInput: `-15`,
    sampleOutput: `-15 is Negative`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read number and check positive, negative, or zero
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int n = sc.nextInt();

        if (n > 0) {
            System.out.println(n + " is Positive");
        } else if (n < 0) {
            System.out.println(n + " is Negative");
        } else {
            System.out.println("The number is Zero");
        }
        sc.close();
    }
}`,
    hints: [
      'Use if (n > 0) ... else if (n < 0) ... else ...',
      'Test all three cases: positive, negative, and zero.'
    ],
    concepts: 'Multi-way branching with if, else if, and else.'
  },
  {
    id: 'l2_q2',
    levelId: 'level-2',
    levelTitle: 'Level 2: Conditions',
    index: 2,
    title: 'Even or Odd Number',
    badge: 'Modulo & if',
    tags: ['Even/Odd', 'Modulo', 'Bitwise'],
    description: `Read an integer from the user.
Determine and print whether the number is **Even** or **Odd**.

### Logic:
- A number is **Even** if \`n % 2 == 0\`.
- Otherwise, it is **Odd**.`,
    sampleInput: `42`,
    sampleOutput: `42 is Even`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Check even or odd
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int n = sc.nextInt();

        if (n % 2 == 0) {
            System.out.println(n + " is Even");
        } else {
            System.out.println(n + " is Odd");
        }
        sc.close();
    }
}`,
    hints: [
      'Use % 2 to check the remainder.',
      'Bonus: you can also check using bitwise AND: if ((n & 1) == 0) Even else Odd!'
    ],
    concepts: 'Testing parity with the modulo operator % or bitwise &.'
  },
  {
    id: 'l2_q3',
    levelId: 'level-2',
    levelTitle: 'Level 2: Conditions',
    index: 3,
    title: 'Find Largest of Three Numbers',
    badge: 'Nested / Logical AND',
    tags: ['&&', 'Comparison', 'Max'],
    description: `Read three integers \`a\`, \`b\`, and \`c\` from the user.
Find and print the largest number **using \`if / else if\` statements** (do NOT use arrays or \`Math.max\`).

### Requirements:
- Handle scenarios where two or all three numbers are equal.`,
    sampleInput: `45 92 18`,
    sampleOutput: `The largest number is: 92`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Find largest of 3 numbers using if / else if
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter three numbers: ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        if (a >= b && a >= c) {
            System.out.println("The largest number is: " + a);
        } else if (b >= a && b >= c) {
            System.out.println("The largest number is: " + b);
        } else {
            System.out.println("The largest number is: " + c);
        }
        sc.close();
    }
}`,
    hints: [
      'Use >= to handle equal inputs cleanly.',
      'Combine conditions with logical AND (&&).'
    ],
    concepts: 'Logical operators && (AND) requires all sub-conditions to be true.'
  },
  {
    id: 'l2_q4',
    levelId: 'level-2',
    levelTitle: 'Level 2: Conditions',
    index: 4,
    title: 'Leap Year Checker',
    badge: 'Complex Logic',
    tags: ['Leap Year', 'Calendar', '&&', '||'],
    description: `Read a year (e.g. \`2024\`, \`1900\`, \`2000\`).
Check whether it is a **Leap Year** based on standard Gregorian calendar rules:
- A year is a leap year if it is divisible by \`4\`.
- **Except** century years (ending in \`00\`), which MUST be divisible by \`400\`.

### Examples:
- \`2024\` -> Leap Year (divisible by 4, not century)
- \`1900\` -> NOT a Leap Year (divisible by 4 and 100, but not 400)
- \`2000\` -> Leap Year (divisible by 400)`,
    sampleInput: `2000`,
    sampleOutput: `2000 is a Leap Year`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read year and check if it is a leap year
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter year: ");
        int year = sc.nextInt();

        boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);

        if (isLeap) {
            System.out.println(year + " is a Leap Year");
        } else {
            System.out.println(year + " is NOT a Leap Year");
        }
        sc.close();
    }
}`,
    hints: [
      'The single boolean condition is: (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)',
      '1900, 2100 are NOT leap years; 2000, 2024 ARE leap years.'
    ],
    concepts: 'Combining && (AND) and || (OR) with grouping parentheses.'
  },
  {
    id: 'l2_q5',
    levelId: 'level-2',
    levelTitle: 'Level 2: Conditions',
    index: 5,
    title: 'Student Grade Calculator',
    badge: 'Grading Scale',
    tags: ['Grades', 'Ranges', 'Validation'],
    description: `Read a student's marks out of \`100\` (can be 0 to 100).
Validate that marks are between 0 and 100, then assign and print the grade:
- **Grade A**: Marks $\\ge 90$
- **Grade B**: Marks $\\ge 75$ and $< 90$
- **Grade C**: Marks $\\ge 50$ and $< 75$
- **Fail**: Marks $< 50$
- If marks $< 0$ or $> 100$, print \`"Invalid Marks"\`.`,
    sampleInput: `84`,
    sampleOutput: `Grade: B`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read marks out of 100 and print grade
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter marks (0-100): ");
        double marks = sc.nextDouble();

        if (marks < 0 || marks > 100) {
            System.out.println("Invalid Marks! Must be between 0 and 100.");
        } else if (marks >= 90) {
            System.out.println("Grade: A");
        } else if (marks >= 75) {
            System.out.println("Grade: B");
        } else if (marks >= 50) {
            System.out.println("Grade: C");
        } else {
            System.out.println("Result: Fail");
        }
        sc.close();
    }
}`,
    hints: [
      'Check invalid inputs first: if (marks < 0 || marks > 100).',
      'Because if-else ladders check sequentially, checking >= 90 first makes the next check only trigger for < 90 automatically.'
    ],
    concepts: 'Cascading if-else conditions and defensive input validation.'
  },
  {
    id: 'l2_q6',
    levelId: 'level-2',
    levelTitle: 'Level 2: Conditions',
    index: 6,
    title: 'Vowel, Consonant, or Not a Letter',
    badge: 'Characters & Character Class',
    tags: ['char', 'Character', 'Vowels'],
    description: `Read a single character from the user.
Print whether the character is:
1. **A Vowel** (\`A, E, I, O, U\` or \`a, e, i, o, u\`)
2. **A Consonant** (any other English letter)
3. **Not a letter** (digit, symbol, whitespace, etc.)

### How to read a char in Java:
\`char ch = sc.next().charAt(0);\``,
    sampleInput: `e`,
    sampleOutput: `'e' is a Vowel`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read single char and classify as Vowel, Consonant, or Not a Letter
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a single character: ");
        char ch = sc.next().charAt(0);

        if (!Character.isLetter(ch)) {
            System.out.println("'" + ch + "' is NOT a letter");
        } else {
            char lower = Character.toLowerCase(ch);
            if (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u') {
                System.out.println("'" + ch + "' is a Vowel");
            } else {
                System.out.println("'" + ch + "' is a Consonant");
            }
        }
        sc.close();
    }
}`,
    hints: [
      'Scanner does not have a nextChar() method. Use sc.next().charAt(0).',
      'Use Character.isLetter(ch) to check if it is alphabetical.',
      'Convert to lowercase with Character.toLowerCase(ch) to check fewer cases.'
    ],
    concepts: 'Character manipulation, char primitives, and java.lang.Character utility methods.'
  },
  {
    id: 'l2_q7',
    levelId: 'level-2',
    levelTitle: 'Level 2: Conditions',
    index: 7,
    title: 'Day Name using Switch Statement',
    badge: 'Switch-Case',
    tags: ['switch', 'Days', 'break'],
    description: `Read a number from \`1\` to \`7\` from standard input.
Use a \`switch\` statement to print the corresponding day name:
- \`1\` -> Monday
- \`2\` -> Tuesday
- \`3\` -> Wednesday
- \`4\` -> Thursday
- \`5\` -> Friday
- \`6\` -> Saturday
- \`7\` -> Sunday
- Any other number -> \`"Invalid day number (must be 1-7)"\``,
    sampleInput: `5`,
    sampleOutput: `Friday`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read number 1-7 and print day name using switch
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter day number (1-7): ");
        int day = sc.nextInt();

        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("Invalid day number (must be 1-7)");
                break;
        }
        sc.close();
    }
}`,
    hints: [
      'Do not forget break; after each case, otherwise execution falls through!',
      'Use default: for invalid numbers outside 1-7.'
    ],
    concepts: 'Switch control flow and fall-through prevention with break.'
  },
  {
    id: 'l2_q8',
    levelId: 'level-2',
    levelTitle: 'Level 2: Conditions',
    index: 8,
    title: 'Mini Calculator with Division by Zero Guard',
    badge: 'Interactive Tool',
    tags: ['Calculator', 'switch', 'char', 'Defensive'],
    description: `Build a console calculator:
1. Read the first number (\`double num1\`).
2. Read an operator (\`char op\`: \`+\`, \`-\`, \`*\`, \`/\`).
3. Read the second number (\`double num2\`).
4. Use a \`switch\` statement on \`op\` to calculate and print the result.
5. **Defensive Guard**: If \`op == '/'\` and \`num2 == 0\`, print an error message \`"Error: Division by zero is not allowed!"\` instead of computing.`,
    sampleInput: `15.0 / 3.0`,
    sampleOutput: `Result: 15.0 / 3.0 = 5.0`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Build mini calculator using switch
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        double num1 = sc.nextDouble();

        System.out.print("Enter operator (+, -, *, /): ");
        char op = sc.next().charAt(0);

        System.out.print("Enter second number: ");
        double num2 = sc.nextDouble();

        switch (op) {
            case '+':
                System.out.println("Result: " + (num1 + num2));
                break;
            case '-':
                System.out.println("Result: " + (num1 - num2));
                break;
            case '*':
                System.out.println("Result: " + (num1 * num2));
                break;
            case '/':
                if (num2 == 0) {
                    System.out.println("Error: Division by zero is not allowed!");
                } else {
                    System.out.println("Result: " + (num1 / num2));
                }
                break;
            default:
                System.out.println("Error: Invalid operator '" + op + "'");
                break;
        }
        sc.close();
    }
}`,
    hints: [
      'Read char op with sc.next().charAt(0).',
      'Inside case \'/\': add an if check for num2 == 0.',
      'Always add default: to catch invalid operators like % or $.'
    ],
    concepts: 'Multi-type console input handling and defensive arithmetic checks.'
  },
  {
    id: 'l2_q9',
    levelId: 'level-2',
    levelTitle: 'Level 2: Conditions',
    index: 9,
    title: 'Triangle Validity & Classification',
    badge: 'Geometry & Logic',
    tags: ['Triangle', 'Inequality', 'Nested if'],
    description: `Read three side lengths (\`a\`, \`b\`, \`c\`) of a triangle.
1. **Check Validity**: A triangle is valid if and only if the sum of any two sides is greater than the third side:
   - $a + b > c$ AND $a + c > b$ AND $b + c > a$
2. If **Valid**, classify it as:
   - **Equilateral**: All 3 sides are equal ($a == b == c$)
   - **Isosceles**: Exactly 2 sides are equal ($a == b$ or $b == c$ or $a == c$)
   - **Scalene**: All 3 sides are different
3. If **Invalid**, print \`"Invalid Triangle: Cannot form a triangle with these sides."\``,
    sampleInput: `5 5 8`,
    sampleOutput: `Valid Triangle: Isosceles`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Check triangle validity and classify type
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter three sides: ");
        double a = sc.nextDouble();
        double b = sc.nextDouble();
        double c = sc.nextDouble();

        // 1. Triangle inequality check
        boolean isValid = (a + b > c) && (a + c > b) && (b + c > a);

        if (!isValid) {
            System.out.println("Invalid Triangle: Cannot form a triangle with these sides.");
        } else {
            // 2. Classify type
            if (a == b && b == c) {
                System.out.println("Valid Triangle: Equilateral");
            } else if (a == b || b == c || a == c) {
                System.out.println("Valid Triangle: Isosceles");
            } else {
                System.out.println("Valid Triangle: Scalene");
            }
        }
        sc.close();
    }
}`,
    hints: [
      'In Java you cannot write a == b == c. You must write (a == b && b == c).',
      'Check Equilateral before Isosceles, because an equilateral triangle also has 2 equal sides!'
    ],
    concepts: 'Ordering nested conditional checks from most specific (Equilateral) to general (Isosceles).'
  },
  {
    id: 'l2_q10',
    levelId: 'level-2',
    levelTitle: 'Level 2: Conditions',
    index: 10,
    title: 'Ticket Pricing with Member Discount',
    badge: 'Business Logic Drill',
    tags: ['Pricing', 'boolean', 'Discount', 'Ternary'],
    description: `Read an **age** (\`int\`) and a **membership status** (\`boolean isMember\`: \`true\` or \`false\`).

Calculate and print the final ticket price based on:
1. **Base Price**:
   - Age $< 5$: **Free** (₹0)
   - Age $5$ to $17$: **₹100**
   - Age $\\ge 18$: **₹200**
2. **Member Discount**:
   - If \`isMember\` is \`true\`, apply a **20% discount** on the base price ($20\\% = 0.20$).
   - (Free tickets remain ₹0).`,
    sampleInput: `24 true`,
    sampleOutput: `Base Price: ₹200.0
Discount Applied (20%): ₹40.0
Final Ticket Price: ₹160.0`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read age and boolean isMember, compute ticket price with discount
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter age: ");
        int age = sc.nextInt();

        System.out.print("Is member? (true/false): ");
        boolean isMember = sc.nextBoolean();

        double basePrice;

        if (age < 5) {
            basePrice = 0.0;
        } else if (age <= 17) {
            basePrice = 100.0;
        } else {
            basePrice = 200.0;
        }

        double discount = (isMember && basePrice > 0) ? (basePrice * 0.20) : 0.0;
        double finalPrice = basePrice - discount;

        System.out.println("Base Price: ₹" + basePrice);
        if (isMember && basePrice > 0) {
            System.out.println("Member Discount (20%): -₹" + discount);
        }
        System.out.println("Final Ticket Price: ₹" + finalPrice);
        sc.close();
    }
}`,
    hints: [
      'Read a boolean in Scanner using sc.nextBoolean().',
      'Use ternary operator for discount: (isMember && basePrice > 0) ? (basePrice * 0.2) : 0;',
      'Free tickets (age < 5) should not have negative discount.'
    ],
    concepts: 'Combining conditional branching with boolean flags and financial discount calculation.'
  }
];
