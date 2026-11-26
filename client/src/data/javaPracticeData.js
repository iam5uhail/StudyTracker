// Curated Core Java Practice Curriculum: From Basics to Advanced & Mini Projects
export const JAVA_PRACTICE_LEVELS = [
  { id: 'level-1', title: 'Level 1: Start Here', subtitle: 'Basics, I/O with Scanner, Arithmetic & Type Casting', count: 10 },
  { id: 'level-2', title: 'Level 2: Conditions', subtitle: 'if/else, nested conditions, ternary, and switch-case', count: 10 },
  { id: 'level-3', title: 'Level 3: Loops & Patterns', subtitle: 'while, for, do-while, nested loops & logic patterns', count: 10 },
  { id: 'level-4', title: 'Level 4: Methods & Arrays', subtitle: 'Modular programming, 1D/2D arrays & string manipulation', count: 10 },
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
,
  {
    id: "l3_q1",
    levelId: "level-3",
    levelTitle: "Level 3: Loops & Patterns",
    index: 1,
    title: "Print 1 to N and N to 1",
    badge: "Loop Basics",
    tags: ["while","for","Counters"],
    description: "Read an integer $N$ from standard input.\nPrint all numbers from **1 to $N$** in ascending order on one line, and from **$N$ down to 1** in descending order on the next line.\n\n### Example:\n- Input: `5`\n- Output:\n  `Forward: 1 2 3 4 5`\n  `Backward: 5 4 3 2 1`",
    sampleInput: "5",
    sampleOutput: "Forward: 1 2 3 4 5\nBackward: 5 4 3 2 1",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N and print 1 to N forward and backward\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        System.out.print(\"Forward: \");\n        for (int i = 1; i <= n; i++) {\n            System.out.print(i + (i == n ? \"\" : \" \"));\n        }\n        System.out.println();\n\n        System.out.print(\"Backward: \");\n        for (int i = n; i >= 1; i--) {\n            System.out.print(i + (i == 1 ? \"\" : \" \"));\n        }\n        System.out.println();\n        sc.close();\n    }\n}",
    hints: ["Use a standard for loop: for (int i = 1; i <= n; i++).","For backward count: for (int i = n; i >= 1; i--)."],
    concepts: "Loop control variables, increment (i++) vs decrement (i--), and loop termination conditions."
  },
  {
    id: "l3_q2",
    levelId: "level-3",
    levelTitle: "Level 3: Loops & Patterns",
    index: 2,
    title: "Sum of First N Numbers & Factorial",
    badge: "Accumulator Pattern",
    tags: ["Accumulator","Factorial","Math"],
    description: "Read a positive integer $N$.\nCompute and print:\n1. **Sum of first $N$ natural numbers** ($1 + 2 + \\dots + N$)\n2. **Factorial of $N$** ($N! = 1 \\times 2 \\times \\dots \\times N$)\n\n### Example:\n- Input: `5`\n- Output:\n  `Sum: 15`\n  `Factorial: 120`",
    sampleInput: "5",
    sampleOutput: "Sum: 15\nFactorial: 120",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Compute sum and factorial of N\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        int sum = 0;\n        long fact = 1;\n\n        for (int i = 1; i <= n; i++) {\n            sum += i;\n            fact *= i;\n        }\n\n        System.out.println(\"Sum: \" + sum);\n        System.out.println(\"Factorial: \" + fact);\n        sc.close();\n    }\n}",
    hints: ["Initialize sum with 0 (additive identity) and fact with 1 (multiplicative identity).","Use long for factorial to avoid 32-bit integer overflow on numbers >= 13."],
    concepts: "Accumulator variables in loops and numeric data type limits (int vs long)."
  },
  {
    id: "l3_q3",
    levelId: "level-3",
    levelTitle: "Level 3: Loops & Patterns",
    index: 3,
    title: "Multiplication Table of a Number",
    badge: "Iteration Drill",
    tags: ["Table","Multiplication","for"],
    description: "Read an integer $N$ from standard input.\nPrint its multiplication table from $1$ to $10$ in the format: `N x i = Result`.\n\n### Example:\n- Input: `7`\n- Output:\n  `7 x 1 = 7`\n  `7 x 2 = 14`\n  ...\n  `7 x 10 = 70`",
    sampleInput: "7",
    sampleOutput: "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Print multiplication table\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(n + \" x \" + i + \" = \" + (n * i));\n        }\n        sc.close();\n    }\n}",
    hints: ["Loop from i = 1 up to 10 inclusive.","Concatenate output: n + \" x \" + i + \" = \" + (n * i)"],
    concepts: "String formatting and arithmetic inside loop iterations."
  },
  {
    id: "l3_q4",
    levelId: "level-3",
    levelTitle: "Level 3: Loops & Patterns",
    index: 4,
    title: "Count Digits & Reverse an Integer",
    badge: "Digit Extraction",
    tags: ["while","%","/","Reverse"],
    description: "Read an integer $N$.\n1. Count the total number of digits.\n2. Reverse the digits of the number.\n\n### Example:\n- Input: `12345`\n- Output:\n  `Number of digits: 5`\n  `Reversed: 54321`",
    sampleInput: "12345",
    sampleOutput: "Number of digits: 5\nReversed: 54321",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Extract digits, count them, and construct reversed number\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num = sc.nextInt();\n\n        int temp = num;\n        int count = 0;\n        int reversed = 0;\n\n        while (temp > 0) {\n            int digit = temp % 10;\n            reversed = reversed * 10 + digit;\n            count++;\n            temp = temp / 10;\n        }\n\n        System.out.println(\"Number of digits: \" + count);\n        System.out.println(\"Reversed: \" + reversed);\n        sc.close();\n    }\n}",
    hints: ["Extract last digit using num % 10.","Shift previous reversed number left: reversed = reversed * 10 + digit.","Remove last digit: temp = temp / 10."],
    concepts: "Base-10 arithmetic: modulo 10 extracts units digit, integer division by 10 discards units digit."
  },
  {
    id: "l3_q5",
    levelId: "level-3",
    levelTitle: "Level 3: Loops & Patterns",
    index: 5,
    title: "Palindrome Number Checker",
    badge: "Number Theory",
    tags: ["Palindrome","while","Logic"],
    description: "A number is a **Palindrome** if it reads the same backward as forward (e.g., `1221`, `1331`).\nRead an integer and print whether it is a palindrome.\n\n### Example:\n- Input: `1221` -> Output: `1221 is a Palindrome`\n- Input: `1234` -> Output: `1234 is not a Palindrome`",
    sampleInput: "1221",
    sampleOutput: "1221 is a Palindrome",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Check if number is palindrome\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num = sc.nextInt();\n\n        int original = num;\n        int reversed = 0;\n\n        while (num > 0) {\n            int rem = num % 10;\n            reversed = reversed * 10 + rem;\n            num /= 10;\n        }\n\n        if (original == reversed) {\n            System.out.println(original + \" is a Palindrome\");\n        } else {\n            System.out.println(original + \" is not a Palindrome\");\n        }\n        sc.close();\n    }\n}",
    hints: ["Save the original number before the while loop, because the loop reduces num to 0.","Compare original == reversed at the end."],
    concepts: "Preserving state before destructive iteration."
  },
  {
    id: "l3_q6",
    levelId: "level-3",
    levelTitle: "Level 3: Loops & Patterns",
    index: 6,
    title: "Prime Number Checker",
    badge: "Optimization Drill",
    tags: ["Prime","Square Root","Optimization"],
    description: "Read an integer $N$.\nDetermine if $N$ is a **Prime Number** (a number greater than 1 that has no positive divisors other than 1 and itself).\n\n### Requirements:\n- Optimized loop checking up to $\\sqrt{N}$ ($i \\times i \\le N$).\n- Numbers $\\le 1$ are not prime.",
    sampleInput: "29",
    sampleOutput: "29 is Prime",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Check if N is prime\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        boolean isPrime = true;\n\n        if (n <= 1) {\n            isPrime = false;\n        } else {\n            for (int i = 2; i * i <= n; i++) {\n                if (n % i == 0) {\n                    isPrime = false;\n                    break;\n                }\n            }\n        }\n\n        if (isPrime) {\n            System.out.println(n + \" is Prime\");\n        } else {\n            System.out.println(n + \" is not Prime\");\n        }\n        sc.close();\n    }\n}",
    hints: ["If a number has a factor greater than its square root, it must also have one smaller than its square root.","Loop condition: i * i <= n is O(sqrt(N)) instead of O(N)."],
    concepts: "Square-root optimization for primality testing and early loop termination with break."
  },
  {
    id: "l3_q7",
    levelId: "level-3",
    levelTitle: "Level 3: Loops & Patterns",
    index: 7,
    title: "Fibonacci Series up to N Terms",
    badge: "State Transition",
    tags: ["Fibonacci","Series","Variables"],
    description: "Read an integer $N$ representing the number of terms.\nPrint the first $N$ numbers in the **Fibonacci Sequence**:\n$0, 1, 1, 2, 3, 5, 8, 13, \\dots$\n\n### Example:\n- Input: `8`\n- Output: `Fibonacci: 0 1 1 2 3 5 8 13`",
    sampleInput: "8",
    sampleOutput: "Fibonacci: 0 1 1 2 3 5 8 13",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Print first N Fibonacci terms\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        System.out.print(\"Fibonacci: \");\n\n        int a = 0;\n        int b = 1;\n\n        for (int i = 1; i <= n; i++) {\n            System.out.print(a + (i == n ? \"\" : \" \"));\n            int next = a + b;\n            a = b;\n            b = next;\n        }\n        System.out.println();\n        sc.close();\n    }\n}",
    hints: ["Start with a = 0, b = 1.","In each step: print a, compute next = a + b, slide a = b, b = next."],
    concepts: "Sliding window variable update for recurrence relations."
  },
  {
    id: "l3_q8",
    levelId: "level-3",
    levelTitle: "Level 3: Loops & Patterns",
    index: 8,
    title: "GCD and LCM (Euclidean Algorithm)",
    badge: "Euclid Algorithm",
    tags: ["GCD","LCM","Euclid"],
    description: "Read two integers $A$ and $B$.\nCalculate and print:\n1. **Greatest Common Divisor (GCD)** using the Euclidean algorithm: $\\gcd(A, B) = \\gcd(B, A \\% B)$\n2. **Least Common Multiple (LCM)** using formula: $\\text{LCM} = \\frac{A \\times B}{\\text{GCD}}$\n\n### Example:\n- Input: `12 18`\n- Output:\n  `GCD: 6`\n  `LCM: 36`",
    sampleInput: "12 18",
    sampleOutput: "GCD: 6\nLCM: 36",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Calculate GCD and LCM\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n\n        int n1 = a;\n        int n2 = b;\n\n        while (n2 != 0) {\n            int rem = n1 % n2;\n            n1 = n2;\n            n2 = rem;\n        }\n\n        int gcd = n1;\n        int lcm = (a * b) / gcd;\n\n        System.out.println(\"GCD: \" + gcd);\n        System.out.println(\"LCM: \" + lcm);\n        sc.close();\n    }\n}",
    hints: ["Euclidean algorithm: while (b != 0) { rem = a % b; a = b; b = rem; } -> GCD is a.","LCM = (A * B) / GCD."],
    concepts: "Logarithmic Euclidean division algorithm and relation between GCD & LCM."
  },
  {
    id: "l3_q9",
    levelId: "level-3",
    levelTitle: "Level 3: Loops & Patterns",
    index: 9,
    title: "Right-Angled Star Triangle Pattern",
    badge: "Nested Loops",
    tags: ["Pattern","Stars","Nested"],
    description: "Read an integer $N$ representing the number of rows.\nPrint a right-angled triangle of stars (`*`) where row $i$ has $i$ stars separated by spaces.\n\n### Example for $N = 4$:\n`* `\n`* * `\n`* * * `\n`* * * * `",
    sampleInput: "4",
    sampleOutput: "*\n* *\n* * *\n* * * *",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Print right-angled triangle pattern\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"*\" + (j == i ? \"\" : \" \"));\n            }\n            System.out.println();\n        }\n        sc.close();\n    }\n}",
    hints: ["Outer loop for (int i = 1; i <= n; i++) controls the rows.","Inner loop for (int j = 1; j <= i; j++) controls the columns."],
    concepts: "Nested loops: outer loop controls row height, inner loop controls column count."
  },
  {
    id: "l3_q10",
    levelId: "level-3",
    levelTitle: "Level 3: Loops & Patterns",
    index: 10,
    title: "Inverted Number Triangle Pattern",
    badge: "Grid Logic",
    tags: ["Pattern","Numbers","Matrix"],
    description: "Read an integer $N$.\nPrint a number triangle where row $i$ prints numbers from $1$ up to $i$:\n\n### Example for $N = 4$:\n`1`\n`1 2`\n`1 2 3`\n`1 2 3 4`",
    sampleInput: "4",
    sampleOutput: "1\n1 2\n1 2 3\n1 2 3 4",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Print number triangle\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + (j == i ? \"\" : \" \"));\n            }\n            System.out.println();\n        }\n        sc.close();\n    }\n}",
    hints: ["Print j instead of stars.","Add a newline after the inner loop finishes."],
    concepts: "Dynamic inner loop boundary dependent on outer loop variable."
  },
  {
    id: "l4_q1",
    levelId: "level-4",
    levelTitle: "Level 4: Methods & Arrays",
    index: 1,
    title: "Method: Custom Power Function (x^n)",
    badge: "Modular Programming",
    tags: ["Method","Power","Functions"],
    description: "Write a static method `int power(int base, int exp)` that computes $base^{exp}$ using a loop.\nRead two integers `base` and `exp` and print the result.\n\n### Example:\n- Input: `2 5`\n- Output: `2^5 = 32`",
    sampleInput: "2 5",
    sampleOutput: "2^5 = 32",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    // Write static int power(int base, int exp)\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int base = sc.nextInt();\n        int exp = sc.nextInt();\n        // Call power() and print result\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    static int power(int base, int exp) {\n        int res = 1;\n        for (int i = 1; i <= exp; i++) {\n            res *= base;\n        }\n        return res;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int base = sc.nextInt();\n        int exp = sc.nextInt();\n        System.out.println(base + \"^\" + exp + \" = \" + power(base, exp));\n        sc.close();\n    }\n}",
    hints: ["Declare method outside main: static int power(int base, int exp).","Initialize result to 1 and multiply base exp times."],
    concepts: "Method signatures, parameters, return values, and static method invocation."
  },
  {
    id: "l4_q2",
    levelId: "level-4",
    levelTitle: "Level 4: Methods & Arrays",
    index: 2,
    title: "Method Overloading: Calculate Area",
    badge: "Polymorphism",
    tags: ["Overloading","Math","Signatures"],
    description: "Demonstrate method overloading by creating two overloaded static methods:\n1. `double area(double radius)` -> returns circle area: $\\pi r^2$\n2. `int area(int length, int width)` -> returns rectangle area: $l \\times w$\n\nRead: `radius` (double), `length` (int), `width` (int) and print both areas.",
    sampleInput: "7.0 4 6",
    sampleOutput: "Circle Area: 153.93804002589985\nRectangle Area: 24",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    // Implement overloaded area methods\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double r = sc.nextDouble();\n        int l = sc.nextInt();\n        int w = sc.nextInt();\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    static double area(double radius) {\n        return Math.PI * radius * radius;\n    }\n\n    static int area(int length, int width) {\n        return length * width;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double r = sc.nextDouble();\n        int l = sc.nextInt();\n        int w = sc.nextInt();\n\n        System.out.println(\"Circle Area: \" + area(r));\n        System.out.println(\"Rectangle Area: \" + area(l, w));\n        sc.close();\n    }\n}",
    hints: ["Same method name \"area\", but different parameter lists.","Use Math.PI for accurate circle calculation."],
    concepts: "Compile-time polymorphism via method overloading."
  },
  {
    id: "l4_q3",
    levelId: "level-4",
    levelTitle: "Level 4: Methods & Arrays",
    index: 3,
    title: "Array Input: Sum and Average",
    badge: "1D Arrays",
    tags: ["Array","Average","Traversal"],
    description: "Read $N$, then read an array of $N$ integers.\nCalculate and print:\n1. **Sum** of all elements.\n2. **Average** as a floating-point number.\n\n### Example:\n- Input: `5 10 20 30 40 50`\n- Output:\n  `Sum: 150`\n  `Average: 30.0`",
    sampleInput: "5 10 20 30 40 50",
    sampleOutput: "Sum: 150\nAverage: 30.0",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read N, create array, compute sum & average\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n\n        int sum = 0;\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n            sum += arr[i];\n        }\n\n        double avg = (double) sum / n;\n\n        System.out.println(\"Sum: \" + sum);\n        System.out.println(\"Average: \" + avg);\n        sc.close();\n    }\n}",
    hints: ["Declare array: int[] arr = new int[n];","Cast sum to double before division: (double) sum / n."],
    concepts: "1D Array allocation in Heap, 0-indexed traversal, and type promotion during average calculation."
  },
  {
    id: "l4_q4",
    levelId: "level-4",
    levelTitle: "Level 4: Methods & Arrays",
    index: 4,
    title: "Find Maximum and Minimum in Array",
    badge: "Extremes Search",
    tags: ["Max","Min","Comparison"],
    description: "Read $N$, followed by $N$ integers into an array.\nFind and print the **Maximum** and **Minimum** elements.\n\n### Example:\n- Input: `6 45 12 89 34 23 7`\n- Output:\n  `Max: 89`\n  `Min: 7`",
    sampleInput: "6 45 12 89 34 23 7",
    sampleOutput: "Max: 89\nMin: 7",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Find max and min in array\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n\n        int max = arr[0];\n        int min = arr[0];\n\n        for (int i = 1; i < n; i++) {\n            if (arr[i] > max) max = arr[i];\n            if (arr[i] < min) min = arr[i];\n        }\n\n        System.out.println(\"Max: \" + max);\n        System.out.println(\"Min: \" + min);\n        sc.close();\n    }\n}",
    hints: ["Initialize max and min with arr[0], then iterate starting from index 1.","Never initialize with 0, as negative arrays would produce wrong min/max."],
    concepts: "Single-pass O(N) array search and safe baseline initialization."
  },
  {
    id: "l4_q5",
    levelId: "level-4",
    levelTitle: "Level 4: Methods & Arrays",
    index: 5,
    title: "Reverse an Array In-Place",
    badge: "Two-Pointer",
    tags: ["Reverse","Two-Pointer","In-Place"],
    description: "Read $N$ and $N$ integers into an array.\nReverse the array **in-place** using the Two-Pointer technique without creating a second array.\nPrint the reversed array on a single line.\n\n### Example:\n- Input: `5 1 2 3 4 5`\n- Output: `Reversed Array: 5 4 3 2 1`",
    sampleInput: "5 1 2 3 4 5",
    sampleOutput: "Reversed Array: 5 4 3 2 1",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Reverse array in-place\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n\n        int left = 0;\n        int right = n - 1;\n\n        while (left < right) {\n            int temp = arr[left];\n            arr[left] = arr[right];\n            arr[right] = temp;\n            left++;\n            right--;\n        }\n\n        System.out.print(\"Reversed Array: \");\n        for (int i = 0; i < n; i++) {\n            System.out.print(arr[i] + (i == n - 1 ? \"\" : \" \"));\n        }\n        System.out.println();\n        sc.close();\n    }\n}",
    hints: ["Set left = 0, right = n - 1.","Swap arr[left] and arr[right], then left++ and right-- until left >= right."],
    concepts: "Two-pointer technique and in-place O(1) space memory manipulation."
  },
  {
    id: "l4_q6",
    levelId: "level-4",
    levelTitle: "Level 4: Methods & Arrays",
    index: 6,
    title: "Linear Search & Frequency Count",
    badge: "Search Pattern",
    tags: ["Search","Frequency","Counting"],
    description: "Read $N$, then $N$ elements of an array, followed by a target element $K$.\nFind and print how many times $K$ occurs in the array.\n\n### Example:\n- Input: `7 4 2 5 2 8 2 9 2` (where 2 is target K)\n- Output: `Element 2 found 3 times`",
    sampleInput: "7 4 2 5 2 8 2 9 2",
    sampleOutput: "Element 2 found 3 times",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Linear search and count frequency\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n\n        int target = sc.nextInt();\n        int count = 0;\n\n        for (int i = 0; i < n; i++) {\n            if (arr[i] == target) {\n                count++;\n            }\n        }\n\n        System.out.println(\"Element \" + target + \" found \" + count + \" times\");\n        sc.close();\n    }\n}",
    hints: ["Iterate through array and increment counter whenever arr[i] == target."],
    concepts: "Linear search O(N) traversal and frequency counting."
  },
  {
    id: "l4_q7",
    levelId: "level-4",
    levelTitle: "Level 4: Methods & Arrays",
    index: 7,
    title: "Check If Array is Sorted",
    badge: "Validation Pattern",
    tags: ["Sorted","Order","Boolean"],
    description: "Read $N$ and $N$ integers into an array.\nCheck whether the array is strictly sorted in non-decreasing (ascending) order ($arr[i] \\le arr[i+1]$ for all $i$).\nPrint `Array is Sorted: true` or `Array is Sorted: false`.\n\n### Example:\n- Input: `5 10 20 30 40 50` -> Output: `Array is Sorted: true`\n- Input: `5 10 50 30 40 20` -> Output: `Array is Sorted: false`",
    sampleInput: "5 10 20 30 40 50",
    sampleOutput: "Array is Sorted: true",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Check if array is sorted\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n\n        boolean isSorted = true;\n        for (int i = 0; i < n - 1; i++) {\n            if (arr[i] > arr[i + 1]) {\n                isSorted = false;\n                break;\n            }\n        }\n\n        System.out.println(\"Array is Sorted: \" + isSorted);\n        sc.close();\n    }\n}",
    hints: ["Compare adjacent pairs: if arr[i] > arr[i + 1], it is NOT sorted.","Stop loop at n - 2 (i < n - 1) to avoid ArrayIndexOutOfBoundsException."],
    concepts: "Adjacent element comparisons and early exit boolean flags."
  },
  {
    id: "l4_q8",
    levelId: "level-4",
    levelTitle: "Level 4: Methods & Arrays",
    index: 8,
    title: "Second Largest Element in Array",
    badge: "Interview Classic",
    tags: ["Second Largest","Single Pass","Optimization"],
    description: "Read $N$, then $N$ integers into an array.\nFind the **Second Largest distinct element** in a single pass without sorting.\n\n### Example:\n- Input: `5 12 35 1 10 34`\n- Output: `Second Largest: 34`",
    sampleInput: "5 12 35 1 10 34",
    sampleOutput: "Second Largest: 34",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Find second largest element\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n\n        int largest = Integer.MIN_VALUE;\n        int secondLargest = Integer.MIN_VALUE;\n\n        for (int x : arr) {\n            if (x > largest) {\n                secondLargest = largest;\n                largest = x;\n            } else if (x > secondLargest && x != largest) {\n                secondLargest = x;\n            }\n        }\n\n        System.out.println(\"Second Largest: \" + secondLargest);\n        sc.close();\n    }\n}",
    hints: ["When x > largest, the old largest becomes secondLargest, and largest becomes x.","Else if x > secondLargest and x != largest, update secondLargest = x."],
    concepts: "Tracking top-2 values in a single O(N) pass without O(N log N) sorting."
  },
  {
    id: "l4_q9",
    levelId: "level-4",
    levelTitle: "Level 4: Methods & Arrays",
    index: 9,
    title: "Matrix Addition (2D Arrays)",
    badge: "2D Arrays",
    tags: ["2D Array","Matrix","Nested Loops"],
    description: "Read dimensions $R$ (rows) and $C$ (columns).\nThen read two $R \\times C$ matrices $A$ and $B$.\nCompute and print their sum matrix $A + B$.\n\n### Example:\n- Input: `2 2  1 2 3 4  5 6 7 8`\n- Output:\n  `6 8`\n  `10 12`",
    sampleInput: "2 2 1 2 3 4 5 6 7 8",
    sampleOutput: "6 8\n10 12",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Matrix addition\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int r = sc.nextInt();\n        int c = sc.nextInt();\n\n        int[][] a = new int[r][c];\n        int[][] b = new int[r][c];\n\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                a[i][j] = sc.nextInt();\n            }\n        }\n\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                b[i][j] = sc.nextInt();\n            }\n        }\n\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                int sum = a[i][j] + b[i][j];\n                System.out.print(sum + (j == c - 1 ? \"\" : \" \"));\n            }\n            System.out.println();\n        }\n        sc.close();\n    }\n}",
    hints: ["Instantiate 2D array: int[][] a = new int[r][c];","Element-wise addition: sum[i][j] = a[i][j] + b[i][j]."],
    concepts: "2D array representation in memory (array of arrays) and row-column indexing."
  },
  {
    id: "l4_q10",
    levelId: "level-4",
    levelTitle: "Level 4: Methods & Arrays",
    index: 10,
    title: "Matrix Transpose (2D Arrays)",
    badge: "Matrix Transform",
    tags: ["Transpose","2D Array","Rows/Cols"],
    description: "Read $R$ (rows) and $C$ (columns), followed by an $R \\times C$ matrix.\nCompute and print its **Transpose** (flipping matrix over its diagonal, converting $R \\times C$ into $C \\times R$ where $\\text{transposed}[j][i] = \\text{matrix}[i][j]$).\n\n### Example:\n- Input: `2 3 1 2 3 4 5 6`\n- Output:\n  `1 4`\n  `2 5`\n  `3 6`",
    sampleInput: "2 3 1 2 3 4 5 6",
    sampleOutput: "1 4\n2 5\n3 6",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Compute matrix transpose\n        \n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int r = sc.nextInt();\n        int c = sc.nextInt();\n\n        int[][] mat = new int[r][c];\n\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                mat[i][j] = sc.nextInt();\n            }\n        }\n\n        int[][] trans = new int[c][r];\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                trans[j][i] = mat[i][j];\n            }\n        }\n\n        for (int i = 0; i < c; i++) {\n            for (int j = 0; j < r; j++) {\n                System.out.print(trans[i][j] + (j == r - 1 ? \"\" : \" \"));\n            }\n            System.out.println();\n        }\n        sc.close();\n    }\n}",
    hints: ["Transpose matrix dimensions are reversed: int[][] trans = new int[c][r];","Map trans[j][i] = mat[i][j]."],
    concepts: "Dimension swapping and index mapping in matrix algebra."
  }
];
