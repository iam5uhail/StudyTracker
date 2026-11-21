// Extended Data Helper: Practice modules & DSA explanations/hints for StudyTracker
// Provides JS-friendly DSA practice details, hints, examples, and Java syntax questions

export const practiceDataByDay = {
  1: {
    title: "Java Basics & Language Fundamentals Drill",
    desc: "Syntax differences vs JS/Python: static typing, semicolons, class structure, and JDK/JRE/JVM roles.",
    syntaxSnippet: `// 1. In Java, everything belongs to a class
public class FirstProgram {
    // 2. Exact main signature required by JVM
    public static void main(String[] args) {
        // 3. Semicolons are mandatory; System.out.println for printing
        System.out.println("Hello, Java!");
    }
}`,
    questions: [
      {
        question: "Which component of Java is responsible for executing bytecode on your machine?",
        options: ["JDK (Java Development Kit)", "JVM (Java Virtual Machine)", "JRE (Java Runtime Environment)", "JIT only"],
        correctAnswer: 1,
        explanation: "The JVM (Java Virtual Machine) loads and executes the compiled .class bytecode on the host OS."
      },
      {
        question: "Why does Java enforce 'public static void main(String[] args)' as the entry point?",
        options: [
          "Because static methods can be called by JVM without instantiating the class",
          "Because main must return an integer exit code",
          "Because String[] is optional and can be omitted",
          "It is just a convention and any name works"
        ],
        correctAnswer: 0,
        explanation: "The JVM needs to call main without creating an object of the containing class first, hence 'static'."
      },
      {
        question: "Unlike JavaScript, what happens in Java if you omit a semicolon at the end of a statement?",
        options: ["Automatic semicolon insertion occurs", "Compile-time error", "Runtime warning", "Interpreted normally"],
        correctAnswer: 1,
        explanation: "Java does not have Automatic Semicolon Insertion (ASI). Omitting a semicolon triggers a compilation error."
      }
    ]
  },
  2: {
    title: "Java vs Python & Environment Setup Quiz",
    desc: "Key differences: Compilation vs Interpretation, strict type safety, bytecode generation, and environment paths (JAVA_HOME / PATH).",
    syntaxSnippet: `// In JavaScript / Python:
// let x = "5"; x = 10; (Dynamic types allow re-assignment to different types)

// In Java:
int number = 10; 
// number = "hello"; // COMPILE ERROR! Strongly and statically typed`,
    questions: [
      {
        question: "Which file extension is produced when you compile a Java source file (.java)?",
        options: [".exe", ".class (Bytecode)", ".obj", ".bin"],
        correctAnswer: 1,
        explanation: "javac compiles .java source files into platform-independent .class bytecode."
      },
      {
        question: "What is the primary role of setting the 'JAVA_HOME' and 'PATH' environment variables?",
        options: [
          "To allow command-line tools (javac, java) to be executed from any directory",
          "To speed up program execution",
          "To give Java administrator permissions",
          "To install the IDE automatically"
        ],
        correctAnswer: 0,
        explanation: "Adding the JDK's /bin directory to PATH allows the terminal to recognize 'javac' and 'java' commands everywhere."
      }
    ]
  },
  3: {
    title: "Java Program Structure & Naming Conventions",
    desc: "Public class name matching file name, case sensitivity, camelCase and PascalCase rules.",
    syntaxSnippet: `// File MUST be saved as: MainApp.java
public class MainApp {
    public static void main(String[] args) {
        // Variables: camelCase
        int studentAge = 22;
        // Constants: UPPER_SNAKE_CASE
        final double PI_VALUE = 3.14159;
    }
}`,
    questions: [
      {
        question: "If a Java source file contains 'public class UserProfile', what MUST the filename be?",
        options: ["userprofile.java", "UserProfile.java", "Main.java", "Any name is fine"],
        correctAnswer: 1,
        explanation: "In Java, a file containing a public class must match that class name exactly, case-sensitively, with a .java extension."
      },
      {
        question: "Which keyword in Java makes a variable immutable (equivalent to 'const' in JavaScript)?",
        options: ["static", "const", "final", "immutable"],
        correctAnswer: 2,
        explanation: "The 'final' keyword in Java prevents re-assignment, similar to 'const' in JS."
      }
    ]
  },
  4: {
    title: "Compiling, Running & Main Method Dissection",
    desc: "Understanding 'javac Test.java' vs 'java Test', and parameter passing via String[] args.",
    syntaxSnippet: `// Terminal Commands:
// 1. Compile: javac MyProgram.java   -> creates MyProgram.class
// 2. Run:     java MyProgram         -> runs the bytecode on JVM (do NOT append .class!)`,
    questions: [
      {
        question: "What command correctly executes the compiled 'Solution.class' file in terminal?",
        options: ["java Solution.class", "java Solution", "javac Solution", "run Solution"],
        correctAnswer: 1,
        explanation: "You pass the class name without extension to the java command: 'java Solution'."
      },
      {
        question: "What is the purpose of 'String[] args' in the main method?",
        options: [
          "To receive command-line arguments passed when running the program",
          "To return output strings to the console",
          "To import external Java libraries",
          "It is just a placeholder and cannot hold data"
        ],
        correctAnswer: 0,
        explanation: "Command line arguments passed during execution (e.g., java App arg1 arg2) are accessible via the args array."
      }
    ]
  },
  5: {
    title: "Java Primitive Data Types & Memory Sizes",
    desc: "Primitive types: byte (1B), short (2B), int (4B), long (8B), float (4B), double (8B), char (2B Unicode), boolean.",
    syntaxSnippet: `// Primitive types in Java:
byte b = 127;          // 8-bit  (-128 to 127)
int i = 100000;        // 32-bit integer
long bigNum = 5000000000L; // 64-bit (notice 'L' suffix)
double d = 19.99;      // 64-bit float
char ch = 'A';         // 16-bit Unicode character (single quotes)`,
    questions: [
      {
        question: "In Java, why does the 'char' data type take 2 bytes (16 bits) instead of 1 byte like in C?",
        options: [
          "Java uses Unicode (UTF-16) to support international characters, not just ASCII",
          "It is a memory bug in early Java versions",
          "To allow storing whole words in a single char",
          "Because memory alignment requires 16-bit blocks"
        ],
        correctAnswer: 0,
        explanation: "Java char is 16-bit to represent Unicode characters from all world scripts."
      },
      {
        question: "What is the default value of an uninitialized 'int' instance field in a Java class?",
        options: ["undefined", "null", "0", "NaN"],
        correctAnswer: 2,
        explanation: "In Java, numerical instance variables default to 0 (unlike JS where undeclared properties are undefined)."
      }
    ]
  }
};

// Enriched DSA Problem Guides: Clear task breakdown, examples, explanations, and hints (NO PRE-FILLED CODE)
export const dsaGuideByTitle = {
  "Two Sum II": {
    questionTitle: "Two Sum II - Input Array Is Sorted",
    desc: "Given a 1-indexed sorted array of integers numbers, find two distinct numbers such that they add up to a specific target number. Return their 1-based indices [index1, index2]. Exactly one solution exists, and you cannot use the same element twice.",
    inputExample: "numbers = [2, 7, 11, 15], target = 9",
    outputExample: "[1, 2]",
    explanation: "The sum of numbers[0] (value 2) and numbers[1] (value 7) is 2 + 7 = 9. Since the problem uses 1-based indexing, we return their positions [0 + 1, 1 + 1] -> [1, 2].",
    constraints: "• 2 <= numbers.length <= 3 * 10^4\n• -1000 <= numbers[i] <= 1000\n• numbers is sorted in non-decreasing order\n• Exactly one valid answer exists\n• Space constraint: O(1) extra memory",
    initialCode: "",
    hint: "Two-Pointer Strategy:\n1. Since numbers is already sorted, start with left = 0 and right = numbers.length - 1.\n2. Calculate currentSum = numbers[left] + numbers[right].\n3. If currentSum === target, return [left + 1, right + 1].\n4. If currentSum < target, we need a larger value, so move left pointer forward: left++.\n5. If currentSum > target, we need a smaller value, so move right pointer backward: right--.\n• Time: O(n) linear scan, Space: O(1) in-place pointers."
  },

  "3Sum": {
    questionTitle: "3Sum - Find All Unique Triplets Summing to 0",
    desc: "Given an integer array nums, return all triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] === 0. The output array must NOT contain duplicate triplets.",
    inputExample: "nums = [-1, 0, 1, 2, -1, -4]",
    outputExample: "[[-1, -1, 2], [-1, 0, 1]]",
    explanation: "nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0. Distinct triplets that sum to 0 are [-1, -1, 2] and [-1, 0, 1]. Duplicate combinations are filtered out.",
    constraints: "• 3 <= nums.length <= 3000\n• -10^5 <= nums[i] <= 10^5",
    initialCode: "",
    hint: "Sort + Two-Pointer:\n1. Sort the array first so pointers can move logically.\n2. Iterate i from 0 to n - 3. If nums[i] > 0, stop (no 3 positives can sum to 0).\n3. Skip duplicates if nums[i] === nums[i - 1].\n4. For each i, treat it as -nums[i] target and use Two-Pointer (left = i + 1, right = n - 1)."
  },

  "Sort Colors": {
    questionTitle: "Sort Colors (Dutch National Flag)",
    desc: "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red (0), white (1), and blue (2). Do this in a single pass without using the library's sort function.",
    inputExample: "nums = [2, 0, 2, 1, 1, 0]",
    outputExample: "[0, 0, 1, 1, 2, 2]",
    explanation: "All 0s are placed at the beginning, followed by all 1s, and all 2s at the end.",
    constraints: "• 1 <= nums.length <= 300\n• nums[i] is either 0, 1, or 2\n• Follow-up: O(n) one-pass in-place with O(1) space.",
    initialCode: "",
    hint: "3-Pointer Partition (Dutch Flag):\n• low: boundary for 0s.\n• mid: current item being checked.\n• high: boundary for 2s.\nWhen nums[mid] === 0: swap(low, mid), low++, mid++.\nWhen nums[mid] === 1: mid++.\nWhen nums[mid] === 2: swap(mid, high), high--."
  },

  "Move Zeroes": {
    questionTitle: "Move Zeroes to End In-Place",
    desc: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements in-place.",
    inputExample: "nums = [0, 1, 0, 3, 12]",
    outputExample: "[1, 3, 12, 0, 0]",
    explanation: "Non-zero values [1, 3, 12] keep their original order at the front, while both 0s are placed at the end.",
    constraints: "• 1 <= nums.length <= 10^4\n• -2^31 <= nums[i] <= 2^31 - 1\n• Modify nums in-place without copying array.",
    initialCode: "",
    hint: "Two-Pointer (Slow & Fast):\n• insertPos tracks where the next non-zero number should go.\n• Whenever fast pointer finds nums[i] !== 0, swap nums[insertPos] with nums[i] and increment insertPos."
  },

  "Container With Most Water": {
    questionTitle: "Container With Most Water",
    desc: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water.",
    inputExample: "height = [1, 8, 6, 2, 5, 4, 8, 3, 7]",
    outputExample: "49",
    explanation: "The vertical lines at index 1 (height 8) and index 8 (height 7) form a container of width 7. The water height is bounded by the shorter line: min(8, 7) = 7. Total water = 7 * 7 = 49.",
    constraints: "• n == height.length\n• 2 <= n <= 10^5\n• 0 <= height[i] <= 10^4",
    initialCode: "",
    hint: "Greedy Two-Pointer:\n1. Area = width * min(height[left], height[right]).\n2. As pointers move inward, width ALWAYS decreases.\n3. The only way to potentially get a larger area is to seek a taller line. Hence, always move the pointer pointing to the shorter line!"
  }
};
