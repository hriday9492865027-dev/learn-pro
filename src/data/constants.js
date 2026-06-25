export const NAV_ITEMS = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "subjects", label: "Subjects", icon: "📚" },
  { id: "roadmap", label: "Roadmap", icon: "🗺️" },
  { id: "playground", label: "Playground", icon: "🎮" },
  { id: "practice", label: "Practice", icon: "💻" },
  { id: "quiz", label: "Quiz", icon: "🧠" },
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "profile", label: "Profile", icon: "👤" },
];

export const SUBJECTS = [
  { id: "c", name: "C Programming", icon: "⚙️", color: "#3b82f6", lessons: 24, level: "Beginner", desc: "Master the foundation of all programming with pointers, memory, and system-level concepts." },
  { id: "cpp", name: "C++", icon: "🔷", color: "#6366f1", lessons: 32, level: "Intermediate", desc: "Object-oriented programming, templates, STL, and modern C++ features." },
  { id: "python", name: "Python", icon: "🐍", color: "#10b981", lessons: 28, level: "Beginner", desc: "Clean syntax, powerful libraries, and rapid development for all domains." },
  { id: "java", name: "Java", icon: "☕", color: "#f59e0b", lessons: 30, level: "Intermediate", desc: "Enterprise-grade OOP with JVM, collections, and multithreading." },
  { id: "javascript", name: "JavaScript", icon: "🟨", color: "#eab308", lessons: 35, level: "Beginner", desc: "The language of the web — DOM, async, closures, and modern ES6+." },
  { id: "html", name: "HTML", icon: "🌐", color: "#ef4444", lessons: 15, level: "Beginner", desc: "Semantic markup, accessibility, and the building blocks of every webpage." },
  { id: "css", name: "CSS", icon: "🎨", color: "#ec4899", lessons: 20, level: "Beginner", desc: "Flexbox, Grid, animations, and responsive design that delights." },
  { id: "sql", name: "SQL", icon: "🗃️", color: "#8b5cf6", lessons: 22, level: "Intermediate", desc: "Queries, joins, indexes, and database design from scratch to advanced." },
  { id: "ds", name: "Data Structures", icon: "🌳", color: "#06b6d4", lessons: 40, level: "Intermediate", desc: "Arrays, linked lists, trees, graphs — with visual animations." },
  { id: "algo", name: "Algorithms", icon: "⚡", color: "#f97316", lessons: 38, level: "Advanced", desc: "Sorting, searching, dynamic programming, and complexity analysis." },
  { id: "os", name: "Operating Systems", icon: "💾", color: "#64748b", lessons: 26, level: "Advanced", desc: "Processes, scheduling, memory management, and file systems." },
  { id: "dbms", name: "DBMS", icon: "🏛️", color: "#7c3aed", lessons: 24, level: "Intermediate", desc: "Normalization, transactions, ACID, and relational theory." },
  { id: "cn", name: "Computer Networks", icon: "🌍", color: "#0ea5e9", lessons: 28, level: "Advanced", desc: "OSI model, TCP/IP, routing, and network protocols explained visually." },
];

export const QUIZ_QUESTIONS = [
  { q: "What does `int *p;` declare in C?", options: ["An integer", "A pointer to an integer", "An array", "A function"], ans: 1, exp: "int *p declares p as a pointer to an integer. The * means it stores a memory address of an int." },
  { q: "Which data structure uses LIFO order?", options: ["Queue", "Tree", "Stack", "Graph"], ans: 2, exp: "Stack uses Last In, First Out (LIFO) — the last element pushed is the first one popped." },
  { q: "What is the time complexity of binary search?", options: ["O(n)", "O(n²)", "O(log n)", "O(1)"], ans: 2, exp: "Binary search halves the search space each time, giving O(log n) time complexity." },
  { q: "Which sorting algorithm is fastest on average?", options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Insertion Sort"], ans: 2, exp: "Quick Sort has O(n log n) average time complexity, making it one of the fastest in practice." },
  { q: "In OOP, what does 'encapsulation' mean?", options: ["Hiding data inside a class", "Inheriting from a parent", "Overriding methods", "Polymorphic behavior"], ans: 0, exp: "Encapsulation bundles data and methods together, hiding internal details from outside." },
];

export const PRACTICE_PROBLEMS = [
  { title: "Reverse a Linked List", difficulty: "Easy", tags: ["Linked List", "Pointers"], xp: 50, desc: "Given the head of a singly linked list, reverse the list and return the reversed list.", hint: "Use three pointers: prev, curr, next." },
  { title: "Two Sum", difficulty: "Easy", tags: ["Arrays", "HashMap"], xp: 50, desc: "Given an array of integers and a target, return indices of two numbers that add up to target.", hint: "Use a hash map to store complement values." },
  { title: "Binary Tree Level Order Traversal", difficulty: "Medium", tags: ["Tree", "BFS"], xp: 100, desc: "Return the level order traversal of a binary tree's nodes' values.", hint: "Use a queue and process level by level." },
  { title: "Longest Palindromic Substring", difficulty: "Medium", tags: ["DP", "String"], xp: 100, desc: "Given a string, return the longest palindromic substring.", hint: "Expand around center for each character." },
  { title: "Merge K Sorted Lists", difficulty: "Hard", tags: ["Heap", "Divide & Conquer"], xp: 200, desc: "Merge k sorted linked lists and return it as one sorted list.", hint: "Use a min-heap of size k." },
];

export const ROADMAP_STEPS = [
  { phase: "Phase 1", title: "Programming Basics", duration: "4 weeks", items: ["Variables & Data Types", "Control Flow", "Functions", "Arrays & Strings"], color: "#3b82f6" },
  { phase: "Phase 2", title: "Data Structures", duration: "6 weeks", items: ["Linked Lists", "Stacks & Queues", "Trees & Graphs", "Hash Tables"], color: "#8b5cf6" },
  { phase: "Phase 3", title: "Algorithms", duration: "6 weeks", items: ["Sorting & Searching", "Recursion & DP", "Greedy Algorithms", "Graph Algorithms"], color: "#06b6d4" },
  { phase: "Phase 4", title: "System Design", duration: "4 weeks", items: ["OOP Principles", "Design Patterns", "Database Design", "API Design"], color: "#10b981" },
];
