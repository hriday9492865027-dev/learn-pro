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
  { 
    id: "c", 
    name: "C Programming", 
    icon: "⚙️", 
    color: "#3b82f6", 
    lessons: 24, 
    level: "Beginner", 
    desc: "Master the foundation of all programming with pointers, memory, and system-level concepts.",
    topics: [
      {
        id: "c_variables",
        title: "Variables & Data Types",
        desc: "Learn about basic data storage, primitive sizes, and formatting in C.",
        intro: "Variables are named blocks of memory allocated to store data. Because C is a statically typed language, all variable types must be declared explicitly before compilation.",
        analogy: "Think of variables like storage drawers in a desk. An 'int' drawer is large enough for tools (numbers), a 'char' drawer only fits a single stamp (letter), and a 'float' drawer is designed for measuring cups (decimals).",
        whyLearn: [
          "Core foundation of all programming structures",
          "Crucial for controlling memory usage in systems",
          "Holds variables and expressions used in loops and conditions"
        ],
        mistakes: [
          "Using a variable before declaring it at the top of scope",
          "Forgetting that integer division discards fractions (e.g., 5 / 2 is 2, not 2.5)",
          "Assigning a value exceeding type boundaries (Overflow)"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Include I/O library" },
          { line: "int main() {", comment: "Main entry point" },
          { line: "  int age = 22;", comment: "Declares a 4-byte integer variable" },
          { line: "  float height = 5.9;", comment: "Declares a 4-byte floating point variable" },
          { line: "  char grade = 'A';", comment: "Declares a 1-byte character variable" },
          { line: "  printf(\"Age: %d\\n\", age);", comment: "Prints integer using %d specifier" },
          { line: "  return 0;", comment: "Successful termination" },
          { line: "}", comment: "End main" }
        ],
        output: "Age: 22",
        diagramType: "variables",
        quiz: [
          { q: "Which format specifier is used for float in C?", options: ["%d", "%c", "%f", "%lf"], ans: 2, exp: "%f is used for printing/scanning float data type. %lf is used for double." },
          { q: "What is the size of a char data type in C on standard systems?", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], ans: 0, exp: "A char is guaranteed to occupy exactly 1 byte (8 bits) of memory." }
        ]
      },
      {
        id: "c_pointers",
        title: "Pointers & Memory Allocation",
        desc: "Master variable memory addresses, dereferencing, heap allocation, and pointer arithmetic.",
        intro: "Pointers are variables that store the memory address of another variable. They allow C developers to interact directly with hardware memory slots.",
        analogy: "A pointer is like a home address written on a post-it note. The note isn't the house itself, but it tells you exactly where the house is located in the neighborhood.",
        whyLearn: [
          "Enables pass-by-reference to modify variable values inside functions",
          "Required to build nodes in linked lists, trees, and graphs",
          "Allows allocation of variable-sized memory buffers during runtime"
        ],
        mistakes: [
          "Dereferencing a pointer that points to NULL or random stack addresses (crash)",
          "Forgetting to call free() after malloc(), causing memory leaks",
          "Pointer arithmetic beyond array bounds, causing memory corruption"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Include I/O library" },
          { line: "#include <stdlib.h>", comment: "Include stdlib for malloc" },
          { line: "int main() {", comment: "Main entry point" },
          { line: "  int x = 45;", comment: "Local integer variable" },
          { line: "  int *ptr = &x;", comment: "ptr stores memory address of x (& operator)" },
          { line: "  *ptr = 100;", comment: "Dereference ptr to change x's value to 100" },
          { line: "  int *h = malloc(sizeof(int));", comment: "Allocate 4 bytes on Heap" },
          { line: "  free(h);", comment: "Deallocate heap memory" },
          { line: "  return 0;", comment: "Successful termination" },
          { line: "}", comment: "End main" }
        ],
        output: "x value changed to 100",
        diagramType: "pointers",
        quiz: [
          { q: "What does the dereference operator (*) do?", options: ["Retrieves the address of the variable", "Retrieves the value stored at the target address", "Multiplies two memory locations", "Deallocates pointer memory"], ans: 1, exp: "The dereference operator (*) accesses the value stored at the memory location held by the pointer." },
          { q: "Which C function is used to dynamically allocate memory on the heap?", options: ["alloc()", "create()", "malloc()", "new()"], ans: 2, exp: "malloc() (Memory Allocation) is used to reserve a block of heap memory during program execution." }
        ]
      }
    ]
  },
  { 
    id: "cpp", 
    name: "C++", 
    icon: "🔷", 
    color: "#6366f1", 
    lessons: 32, 
    level: "Intermediate", 
    desc: "Object-oriented programming, templates, STL, and modern C++ features.",
    topics: [
      {
        id: "cpp_classes",
        title: "Classes & Objects",
        desc: "Define user classes, encapsulate data, and declare public constructor patterns.",
        intro: "A Class is a user-defined blueprint containing attributes (variables) and methods (functions). An Object is a physical instance of that class.",
        analogy: "A Class is like a recipe for a cake. An Object is the actual chocolate cake baked using that recipe. You can bake multiple cakes (objects) from one recipe.",
        whyLearn: [
          "Implements Encapsulation to protect attributes from outside manipulation",
          "Promotes code reusability through class inheritance",
          "Core standard for object architecture in modern game and system development"
        ],
        mistakes: [
          "Forgetting the public keyword, which makes all attributes private by default",
          "Forgetting the trailing semicolon (;) at the end of the class bracket block",
          "Attempting to modify private members without setter functions"
        ],
        code: [
          { line: "#include <iostream>", comment: "Include C++ stream library" },
          { line: "using namespace std;", comment: "Use standard namespaces" },
          { line: "class Car {", comment: "Define Car class" },
          { line: "public:", comment: "Access specifier: visible outside class" },
          { line: "  string brand;", comment: "Attribute" },
          { line: "  void drive() { cout << \"Driving \" << brand; }", comment: "Method" },
          { line: "};", comment: "Trailing semicolon is mandatory!" },
          { line: "int main() {", comment: "Main entry point" },
          { line: "  Car myCar;", comment: "Instantiate Car object" },
          { line: "  myCar.brand = \"Tesla\";", comment: "Assign attribute value" },
          { line: "  myCar.drive();", comment: "Call method" },
          { line: "  return 0;", comment: "Termination" },
          { line: "}", comment: "End main" }
        ],
        output: "Driving Tesla",
        diagramType: "classes",
        quiz: [
          { q: "Which OOP principle hides internal details and exposes safe interfaces?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], ans: 2, exp: "Encapsulation bundles data and methods together, shielding variables from unauthorized direct access." },
          { q: "What is the default accessibility of C++ class members if not specified?", options: ["public", "protected", "private", "global"], ans: 2, exp: "Unlike structs, C++ class attributes and methods are private by default." }
        ]
      },
      {
        id: "cpp_templates",
        title: "Templates & STL",
        desc: "Write generic code using templates and explore Standard Template Library containers.",
        intro: "Templates enable C++ functions and classes to operate with generic types, allowing a single template to handle ints, floats, or custom classes.",
        analogy: "A Template is like a stencil layout. You use the stencil to trace shapes on wood, metal, or paper. The shape remains identical, but the material changes.",
        whyLearn: [
          "Prevents duplicate method declarations for different data types",
          "Allows usage of highly optimized pre-built containers like std::vector",
          "Underpins standard library operations and algorithm pipelines"
        ],
        mistakes: [
          "Forgetting template<typename T> prefix above generic functions",
          "Attempting pointer arithmetic on containers that do not support it",
          "Assuming vector sizes are static after creation"
        ],
        code: [
          { line: "#include <iostream>", comment: "Include stream" },
          { line: "#include <vector>", comment: "Include STL vector container" },
          { line: "template <typename T>", comment: "Define generic type parameter" },
          { line: "T add(T a, T b) { return a + b; }", comment: "Generic add function" },
          { line: "int main() {", comment: "Entry point" },
          { line: "  std::vector<int> v = {1, 2, 3};", comment: "Instantiate integer vector" },
          { line: "  std::cout << add(v[0], v[2]);", comment: "Call generic add(1, 3)" },
          { line: "  return 0;", comment: "Termination" },
          { line: "}", comment: "End main" }
        ],
        output: "4",
        diagramType: "templates",
        quiz: [
          { q: "What does STL stand for in C++?", options: ["System Tool Library", "Standard Template Library", "Structured Type Layout", "Source Template Loader"], ans: 1, exp: "STL stands for Standard Template Library, providing data structures and algorithms in C++." },
          { q: "What keyword specifies generic template parameters in C++?", options: ["generic", "template", "auto", "typename"], ans: 3, exp: "The typename (or class) keyword inside template <typename T> declares a generic type placeholder." }
        ]
      }
    ]
  },
  { 
    id: "python", 
    name: "Python", 
    icon: "🐍", 
    color: "#10b981", 
    lessons: 28, 
    level: "Beginner", 
    desc: "Clean syntax, powerful libraries, and rapid development for all domains.",
    topics: [
      {
        id: "py_lists",
        title: "Lists & Dictionaries",
        desc: "Manipulate ordered lists, iterate mappings, and utilize key-value dictionaries.",
        intro: "Python lists are mutable, ordered sequences. Dictionaries are unordered key-value pairs designed for fast mapping index lookup.",
        analogy: "A List is like a numbered folder cabinet: file #1, file #2, file #3. A Dictionary is like an dictionary index: look up 'Apple' to read its definition.",
        whyLearn: [
          "Python's primary collection objects for data processing",
          "Allows structured key-value configurations for APIs and settings",
          "Essential for data manipulation in Machine Learning and Data Science"
        ],
        mistakes: [
          "Attempting to read a missing key in dict without using dict.get() (KeyError)",
          "Modifying list items directly inside a simple 'for x in list' iteration loop",
          "Forgetting that dictionaries must have unique keys"
        ],
        code: [
          { line: "fruits = ['apple', 'banana']", comment: "Create mutable list" },
          { line: "fruits.append('cherry')", comment: "Append item to list" },
          { line: "profile = {'name': 'Hriday', 'xp': 2840}", comment: "Create key-value dictionary" },
          { line: "print(profile['name'])", comment: "Access dictionary key value" },
          { line: "for f in fruits:", comment: "Iterate over list elements" },
          { line: "    print(f)", comment: "Print item" }
        ],
        output: "Hriday\napple\nbanana\ncherry",
        diagramType: "python_collections",
        quiz: [
          { q: "Which method is used to add an item to the end of a list in Python?", options: ["add()", "push()", "append()", "insert()"], ans: 2, exp: "append() adds a value to the end of an existing Python list." },
          { q: "What dict method retrieves a key value without throwing KeyError if missing?", options: ["fetch()", "get()", "find()", "lookup()"], ans: 1, exp: "dict.get(key, default) returns default (or None) if the key is missing instead of raising a KeyError." }
        ]
      }
    ]
  },
  { 
    id: "java", 
    name: "Java", 
    icon: "☕", 
    color: "#f59e0b", 
    lessons: 30, 
    level: "Intermediate", 
    desc: "Enterprise-grade OOP with JVM, collections, and multithreading.",
    topics: [
      {
        id: "java_jvm",
        title: "OOP & JVM Architecture",
        desc: "Explore Java classes, inheritance, static variables, and JVM bytecode translations.",
        intro: "Java compiles code into bytecode, which runs on the Java Virtual Machine (JVM). This allows Java programs to run on any OS without recompilation.",
        analogy: "The JVM is like a PDF reader. You compile a PDF (bytecode) once, and any machine with a PDF reader (JVM) can display and run it identically.",
        whyLearn: [
          "Understands Java's 'Write Once, Run Anywhere' model",
          "Teaches memory segments (Heap vs. Stack) used by Java classes",
          "Standard base knowledge for Android and corporate backend systems"
        ],
        mistakes: [
          "Forgetting to match the Java class name exactly with the file name (case-sensitive)",
          "Declaring main method without the static keyword, preventing JVM boot",
          "Confusing reference equality (==) with value equality (.equals())"
        ],
        code: [
          { line: "public class Main {", comment: "Class name matches file Main.java" },
          { line: "  public static void main(String[] args) {", comment: "JVM execution entry point" },
          { line: "    System.out.println(\"Java Running!\");", comment: "Prints to console" },
          { line: "  }", comment: "End main" },
          { line: "}", comment: "End class" }
        ],
        output: "Java Running!",
        diagramType: "java_jvm",
        quiz: [
          { q: "What compiles Java source files (.java) into bytecode (.class)?", options: ["JVM", "javac compiler", "JRE interpreter", "ClassLoader"], ans: 1, exp: "javac (Java Compiler) converts human-readable source code into bytecode." },
          { q: "Which memory segment stores Java objects created with the 'new' keyword?", options: ["Stack", "Heap", "Method Area", "Registry"], ans: 1, exp: "All Java objects are dynamically allocated and stored in Heap memory." }
        ]
      }
    ]
  },
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
