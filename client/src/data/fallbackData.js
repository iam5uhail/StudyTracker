// General Student Learning Tracker - Preloaded Starter Data (ES Module for Client)
export const initialSubjects = [
  {
    id: "sub-java",
    name: "Java Programming",
    category: "Computer Science",
    color: "blue",
    icon: "Code2",
    description: "Core syntax, OOP concepts, collections, and modern Java features.",
    topics: [
      {
        id: "j-1",
        title: "Variables, Primitive Types & Operators",
        status: "completed",
        notes: "Mastered variable scopes, type casting between float/int, and arithmetic operators.",
        minutesSpent: 45,
        confidence: "high"
      },
      {
        id: "j-2",
        title: "Control Flow: If-Else, Switch & Loops",
        status: "completed",
        notes: "Enhanced for-each loops and break/continue statements.",
        minutesSpent: 60,
        confidence: "high"
      },
      {
        id: "j-3",
        title: "Object-Oriented Programming (Classes & Objects)",
        status: "in_progress",
        notes: "Class definitions, constructor overloading, and 'this' keyword.",
        minutesSpent: 90,
        confidence: "medium"
      },
      {
        id: "j-4",
        title: "Inheritance, Polymorphism & Abstract Classes",
        status: "todo",
        notes: "Method overriding vs overloading, dynamic dispatch, abstract base classes.",
        minutesSpent: 0,
        confidence: "low"
      },
      {
        id: "j-5",
        title: "Java Collections Framework (ArrayList, HashMap)",
        status: "todo",
        notes: "List, Set, Map interfaces and time complexity of common operations.",
        minutesSpent: 0,
        confidence: "low"
      },
      {
        id: "j-6",
        title: "Exception Handling & File I/O",
        status: "todo",
        notes: "Try-catch-finally, custom exceptions, and try-with-resources.",
        minutesSpent: 0,
        confidence: "low"
      }
    ]
  },
  {
    id: "sub-dsa",
    name: "Data Structures & Algorithms",
    category: "Problem Solving",
    color: "violet",
    icon: "Brain",
    description: "Algorithmic thinking, problem patterns, and time complexity analysis.",
    topics: [
      {
        id: "dsa-1",
        title: "Time & Space Complexity (Big-O Notation)",
        status: "completed",
        notes: "Understanding O(1), O(log n), O(n), O(n log n) and O(n^2) scaling.",
        minutesSpent: 50,
        confidence: "high"
      },
      {
        id: "dsa-2",
        title: "Arrays & Two-Pointers Technique",
        status: "in_progress",
        notes: "Solving pair sums and palindrome checks in O(n) without extra space.",
        minutesSpent: 75,
        confidence: "medium"
      },
      {
        id: "dsa-3",
        title: "Sliding Window Algorithm",
        status: "todo",
        notes: "Subarrays of fixed size vs variable condition windows.",
        minutesSpent: 0,
        confidence: "low"
      },
      {
        id: "dsa-4",
        title: "Binary Search & Divide and Conquer",
        status: "todo",
        notes: "Sorted search boundaries, finding lower and upper bounds.",
        minutesSpent: 0,
        confidence: "low"
      },
      {
        id: "dsa-5",
        title: "Binary Trees & Breadth/Depth First Search",
        status: "todo",
        notes: "Tree traversals: Preorder, Inorder, Postorder, and Level-order BFS.",
        minutesSpent: 0,
        confidence: "low"
      }
    ]
  },
  {
    id: "sub-db",
    name: "Database Systems & SQL",
    category: "Information Systems",
    color: "emerald",
    icon: "Database",
    description: "Relational data design, SQL querying, indexing, and normalization.",
    topics: [
      {
        id: "db-1",
        title: "Relational Schema & Primary / Foreign Keys",
        status: "completed",
        notes: "Entity-Relationship concepts, 1-to-1, 1-to-many, and many-to-many relationships.",
        minutesSpent: 40,
        confidence: "high"
      },
      {
        id: "db-2",
        title: "SQL Joins (Inner, Left, Right & Full)",
        status: "in_progress",
        notes: "Combining records across student, course, and enrollment tables.",
        minutesSpent: 60,
        confidence: "medium"
      },
      {
        id: "db-3",
        title: "Aggregation Functions, GROUP BY & HAVING",
        status: "todo",
        notes: "Counting, averaging, and filtering aggregated groups.",
        minutesSpent: 0,
        confidence: "low"
      },
      {
        id: "db-4",
        title: "Database Normalization (1NF, 2NF, 3NF)",
        status: "todo",
        notes: "Removing redundancy and update anomalies.",
        minutesSpent: 0,
        confidence: "low"
      }
    ]
  },
  {
    id: "sub-math",
    name: "Mathematics & Statistics",
    category: "Foundations",
    color: "amber",
    icon: "Calculator",
    description: "Calculus, linear algebra, and statistical modeling fundamentals.",
    topics: [
      {
        id: "m-1",
        title: "Linear Algebra: Matrices & Vector Operations",
        status: "completed",
        notes: "Matrix multiplication, dot product, determinants.",
        minutesSpent: 55,
        confidence: "high"
      },
      {
        id: "m-2",
        title: "Probability Distributions & Bayes Theorem",
        status: "todo",
        notes: "Conditional probability, normal distribution, and expected value.",
        minutesSpent: 0,
        confidence: "low"
      },
      {
        id: "m-3",
        title: "Differential Calculus & Optimization",
        status: "todo",
        notes: "Derivatives, gradients, and finding local extrema.",
        minutesSpent: 0,
        confidence: "low"
      }
    ]
  }
];

export const initialDailyGoals = [
  {
    id: "g-1",
    title: "Read Chapter 4 on Java Inheritance & polymorphism",
    subjectId: "sub-java",
    subjectName: "Java Programming",
    isCompleted: false,
    estimatedMinutes: 45
  },
  {
    id: "g-2",
    title: "Solve 2 array practice problems using Two Pointers",
    subjectId: "sub-dsa",
    subjectName: "Data Structures & Algorithms",
    isCompleted: false,
    estimatedMinutes: 30
  },
  {
    id: "g-3",
    title: "Review SQL Inner and Left Join syntax with sample queries",
    subjectId: "sub-db",
    subjectName: "Database Systems & SQL",
    isCompleted: true,
    estimatedMinutes: 25
  }
];

export const initialDailyLogs = [
  {
    id: "log-1",
    date: new Date().toISOString().slice(0, 10),
    subjectName: "Java Programming",
    topicTitle: "Object-Oriented Programming (Classes & Objects)",
    durationMinutes: 60,
    summary: "Practiced writing custom classes, constructors, and encapsulation with private attributes.",
    rating: "Solid Progress"
  },
  {
    id: "log-2",
    date: new Date(Date.now() - 86400000).toISOString().slice(0, 10),
    subjectName: "Database Systems & SQL",
    topicTitle: "SQL Joins (Inner, Left, Right)",
    durationMinutes: 45,
    summary: "Wrote queries with Inner Join and Left Outer Join. Understood NULL propagation.",
    rating: "Good Understanding"
  },
  {
    id: "log-3",
    date: new Date(Date.now() - 86400000 * 2).toISOString().slice(0, 10),
    subjectName: "Data Structures & Algorithms",
    topicTitle: "Arrays & Two-Pointers Technique",
    durationMinutes: 75,
    summary: "Implemented two pointers for sorted arrays. Solved pair sum in O(n) time.",
    rating: "Mastered"
  }
];
