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
    lessons: 14, 
    level: "Beginner", 
    desc: "Master Dennis Ritchie's language from compilation phases to raw memory manipulation and pointer data structures.",
    topics: [
      {
        id: "c_intro",
        title: "1. Introduction & Environment Setup",
        desc: "Dennis Ritchie, Bell Labs, compilation stages, GCC, and Hello World analysis.",
        intro: "C was created by Dennis Ritchie at Bell Labs in 1972 to build the UNIX operating system. It compiles directly into machine code through four distinct phases: Preprocessing, Compiling, Assembling, and Linking.",
        analogy: "Think of C compilation like translating a secret book recipe: (1) Preprocessing prepares the ingredients, (2) Compiling translates them into universal shorthand, (3) Assembling writes them in binary, and (4) Linking binds chapters together into the final book.",
        whyLearn: [
          "Understand how computers compile code at the hardware level",
          "Set up standard build tools (GCC, Clang) in modern environments",
          "Read and write your first valid C template hello_world.c"
        ],
        mistakes: [
          "Forgetting #include headers, resulting in undeclared output function errors",
          "Forgetting the return 0 statement in main, returning arbitrary exit codes",
          "Forgetting semicolons after statements"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Preprocessor directive to include Standard I/O library" },
          { line: "int main() {", comment: "Main function: execution starts here" },
          { line: "  printf(\"Hello, World!\\n\");", comment: "Print statement with newline escape sequence" },
          { line: "  return 0;", comment: "Return status 0 (Success) to the Operating System" },
          { line: "}", comment: "End of main function block" }
        ],
        output: "Hello, World!",
        diagramType: "c_intro",
        quiz: [
          { q: "Who created C and at which laboratory?", options: ["James Gosling, Sun Microsystems", "Dennis Ritchie, Bell Labs", "Bjarne Stroustrup, Bell Labs", "Guido van Rossum, CWI"], ans: 1, exp: "Dennis Ritchie created C at AT&T's Bell Labs in 1972 to write the UNIX Operating System." },
          { q: "What is the correct order of the compilation phases?", options: ["Compiling -> Preprocessing -> Linking -> Assembling", "Preprocessing -> Compiling -> Assembling -> Linking", "Linking -> Assembling -> Preprocessing -> Compiling", "Assembling -> Preprocessing -> Compiling -> Linking"], ans: 1, exp: "The compilation pipeline operates as: Preprocessor (handles macros) -> Compiler (makes assembly) -> Assembler (makes binary object files) -> Linker (binds everything into executable)." }
        ]
      },
      {
        id: "c_syntax",
        title: "2. Basic Syntax, Data Types & Variables",
        desc: "Keywords, variables, primitive integer/float modifiers, and format specifiers.",
        intro: "All C programs are made of tokens (keywords, variables, constants). As a statically typed language, variables must be declared with a data type (e.g. int, char, float) specifying memory allocation size.",
        analogy: "Think of variables like differently sized glass jars. An 'int' jar holds numbers up to 4 bytes, a 'char' jar holds exactly one single letter, and a 'double' jar is twice as wide for decimal numbers.",
        whyLearn: [
          "Allows declaring local and global variable scopes",
          "Optimizes hardware memory consumption by choosing correct primitive sizes",
          "Enables formatted console displays using specifiers (%d, %f, %c)"
        ],
        mistakes: [
          "Assigning character strings to char variables (e.g. char c = 'ABC';)",
          "Mismatching format specifiers (e.g. printing a float using %d)",
          "Accessing local scope variables outside of their function block"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Standard I/O header" },
          { line: "int main() {", comment: "Entry point" },
          { line: "  int count = 10;", comment: "Declares a 4-byte signed integer" },
          { line: "  float price = 5.99;", comment: "Declares a 4-byte floating point number" },
          { line: "  char symbol = '$';", comment: "Declares a 1-byte character constant" },
          { line: "  printf(\"Price: %f, Symbol: %c\", price, symbol);", comment: "Formatted print statements" },
          { line: "  return 0;", comment: "Exit code" },
          { line: "}", comment: "End block" }
        ],
        output: "Price: 5.990000, Symbol: $",
        diagramType: "variables",
        quiz: [
          { q: "Which format specifier is used for double variables in C?", options: ["%f", "%d", "%lf", "%s"], ans: 2, exp: "%lf (long float) is the standard format specifier for doubles, while %f is for floats." },
          { q: "What is the typical size of a short data type in modern compilers?", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], ans: 1, exp: "A short integer occupies 2 bytes (16 bits) of memory, storing values from -32,768 to 32,767." }
        ]
      },
      {
        id: "c_operators",
        title: "3. Operators & Expressions",
        desc: "Arithmetic, relational, logical, bitwise operators, type casting, and precedence.",
        intro: "Operators are symbols that direct the compiler to perform mathematical, logical, or bitwise evaluations. Type casting is used to convert data from one type to another (implicit vs. explicit).",
        analogy: "Operators are like machine switches. Flipping the AND (&&) switch checks if both wires are hot; the Modulo (%) switch checks the leftover change after sharing a pizza equally.",
        whyLearn: [
          "Enables math calculations (+, -, *, /, %)",
          "Applies logical short-circuiting (&&, ||) for condition flows",
          "Controls bits directly with bitwise logic (&, |, ^, <<, >>)"
        ],
        mistakes: [
          "Confusing assignment '=' with equality check '=='",
          "Relying on integer division (e.g. 3/2 evaluates to 1, use explicit cast: (float)3/2)",
          "Ignoring precedence, e.g. writing a + b * c and expecting addition first"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Standard I/O" },
          { line: "int main() {", comment: "Main starts" },
          { line: "  int a = 5, b = 2;", comment: "Define integers" },
          { line: "  float res = (float)a / b;", comment: "Explicit type cast to preserve decimals" },
          { line: "  int and_op = (a > 3) && (b == 2);", comment: "Logical AND check (Evaluates to 1)" },
          { line: "  int bit_shift = a << 1;", comment: "Bitwise left shift (5 * 2 = 10)" },
          { line: "  return 0;", comment: "Success" },
          { line: "}", comment: "End" }
        ],
        output: "res: 2.500000, and_op: 1, bit_shift: 10",
        diagramType: "operators",
        quiz: [
          { q: "What is the result of 7 % -3 in C?", options: ["1", "-1", "2", "Error"], ans: 0, exp: "In C, the sign of the modulo operator result matches the sign of the dividend (numerator), so 7 % -3 equals 1." },
          { q: "What happens during short-circuit evaluation of logical OR (||)?", options: ["Both sides are always evaluated", "Second side is skipped if first is true", "First side is skipped if second is true", "The compiler throws a warning"], ans: 1, exp: "In logical OR (||), if the left side evaluates to true, the right side is skipped entirely since the condition is already satisfied." }
        ]
      },
      {
        id: "c_control_flow",
        title: "4. Control Flow Statements",
        desc: "If-else conditions, switch statements, for/while loops, and break/continue statements.",
        intro: "Control flow statements direct execution blocks based on logical conditions. Loops (while, do-while, for) repeat operations, while branch statements (if, switch) redirect paths.",
        analogy: "Control flow is like a train switch track. An 'if' block checks if a track is clear; a 'for' loop loops the train around a track exactly N times before sending it home.",
        whyLearn: [
          "Enables programs to make intelligent decisions at runtime",
          "Handles repeating calculations with loop syntax",
          "Exits blocks cleanly using break and continue keys"
        ],
        mistakes: [
          "Forgetting break statements in switch-case blocks, causing fall-through bugs",
          "Putting a semicolon directly after loop declarations (e.g. for(...);)",
          "Writing infinite loops by forgetting to increment condition variables"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Standard I/O" },
          { line: "int main() {", comment: "Main starts" },
          { line: "  for(int i = 1; i <= 3; i++) {", comment: "for loop: counts 1 to 3" },
          { line: "    if (i == 2) continue;", comment: "Skips iteration for i=2" },
          { line: "    printf(\"%d \", i);", comment: "Prints remaining iterations" },
          { line: "  }", comment: "End for" },
          { line: "  return 0;", comment: "Exit success" },
          { line: "}", comment: "End main" }
        ],
        output: "1 3",
        diagramType: "control_flow",
        quiz: [
          { q: "Which loop is guaranteed to execute at least once?", options: ["for", "while", "do-while", "nested loop"], ans: 2, exp: "A do-while loop is exit-controlled; the code block executes once before the condition is checked." },
          { q: "What is 'fall-through' behavior in switch-case?", options: ["Throwing exceptions", "Executing subsequent cases when a break is missing", "Looping back to case 1", "Defaulting to zero"], ans: 1, exp: "If a case block does not end with a break, execution continues directly into the next case statement." }
        ]
      },
      {
        id: "c_io",
        title: "5. Input & Output (I/O) Management",
        desc: "Formatted printf/scanf buffer controls, getchar, fgets, and input cleaning.",
        intro: "C manages data transfer via input/output streams. The buffer holds inputs; unformatted operations like getchar() and fgets() read characters/strings without formatting overhead.",
        analogy: "scanf is like an inspector checking items against a manifest list. getchar is like a conveyor belt taking whatever item comes next, single file.",
        whyLearn: [
          "Allows interactive programs to read numbers and strings from the user",
          "Prevents buffer overflows using secure reading methods like fgets()",
          "Cleans trailing newline characters (\\n) left in stdin stream buffers"
        ],
        mistakes: [
          "Using gets() which has no bounds check and causes buffer overflow crash",
          "Forgetting the ampersand (&) operator inside scanf (e.g. scanf(\"%d\", val);)",
          "Leaving trailing newlines in buffer, causing subsequent getchar() calls to skip input"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Standard I/O" },
          { line: "int main() {", comment: "Main starts" },
          { line: "  char name[20];", comment: "Array buffer to hold string" },
          { line: "  printf(\"Enter name: \");", comment: "Display prompt" },
          { line: "  fgets(name, sizeof(name), stdin);", comment: " fgets is safe: restricts read length" },
          { line: "  printf(\"Hello %s\", name);", comment: "Print input" },
          { line: "  return 0;", comment: "Termination" },
          { line: "}", comment: "End main" }
        ],
        output: "Enter name: Hriday\nHello Hriday",
        diagramType: "io_buffer",
        quiz: [
          { q: "Why is the fgets() function preferred over gets() for reading strings?", options: ["It runs faster", "It automatically capitalizes characters", "It allows limiting input size to prevent buffer overflow", "It removes whitespace"], ans: 2, exp: "gets() reads characters until a newline is found without checking array boundaries, which can cause severe memory corruption. fgets() requires a size parameter to prevent this." },
          { q: "What happens to the newline character (\\n) when using scanf() to read a number?", options: ["It is consumed and cleared", "It remains in the input buffer", "It is converted to a zero", "It raises a compiler error"], ans: 1, exp: "scanf() reads digits and stops when it sees whitespace or a newline, leaving the newline character (\\n) behind in the stdin buffer." }
        ]
      },
      {
        id: "c_functions",
        title: "6. Functions & Modular Programming",
        desc: "Prototypes, stack frames, call-by-value vs call-by-reference, recursion, and storage classes.",
        intro: "Functions partition code into modular, reusable blocks. A call stack maintains local frames. Storage classes (auto, static, extern, register) dictate variable scope, lifetime, and storage locations.",
        analogy: "A function is like hiring a contract worker. You give them blueprints (parameters), they do the job in their own workshop (stack frame), and hand you the finished product (return value).",
        whyLearn: [
          "Prevents duplicate code blocks by defining them inside functions",
          "Passes pointers to modify parameters directly (Call by Reference)",
          "Saves persistent variables inside functions using static storage class"
        ],
        mistakes: [
          "Not declaring a function prototype before calling it in main",
          "Expecting local variables to persist after function scope ends",
          "Writing recursive functions without base cases, causing Stack Overflow"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Standard I/O" },
          { line: "void swap(int *x, int *y) {", comment: "Function Prototype with pointers (Call by Reference)" },
          { line: "  int temp = *x;", comment: "Store value at x" },
          { line: "  *x = *y; *y = temp;", comment: "Swap values dereferenced" },
          { line: "}", comment: "End function" },
          { line: "int main() {", comment: "Main starts" },
          { line: "  int a = 10, b = 20;", comment: "Define variables" },
          { line: "  swap(&a, &b);", comment: "Pass addresses using & operator" },
          { line: "  return 0;", comment: "Exit success" },
          { line: "}", comment: "End main" }
        ],
        output: "Swapped! a=20, b=10",
        diagramType: "call_stack",
        quiz: [
          { q: "Which storage class holds a variable in memory that persists even after the function exits?", options: ["auto", "register", "static", "extern"], ans: 2, exp: "static variables are initialized once and retain their value throughout the lifetime of the program." },
          { q: "What occurs during a stack overflow in recursion?", options: ["The heap runs out of slots", "The call stack memory is completely exhausted", "The compiler loops infinitely", "Variables turn global"], ans: 1, exp: "Every recursive call allocates a stack frame. If recursion goes too deep without hitting a base case, it exhausts stack memory, raising a stack overflow." }
        ]
      },
      {
        id: "c_arrays_strings",
        title: "7. Arrays & Strings",
        desc: "Contiguous 1D/2D arrays, matrix storage, string terminators (\\0), and string.h library.",
        intro: "Arrays store fixed-size elements of the same type in contiguous memory. In C, strings are character arrays terminated by a null character (\\0). C has no automated bounds checking.",
        analogy: "An array is like a row of mailboxes labeled 0, 1, 2, 3 in a post office. A string is like a sequence of letters spelling a word, ending with a mailbox containing a stop sign (\\0).",
        whyLearn: [
          "Enables storing large lists of data under a single variable index",
          "Manages 2D grids (matrices) with rows and columns",
          "Uses string library functions (strlen, strcpy, strcmp) safely"
        ],
        mistakes: [
          "Forgetting to allocate space for the null terminator (\\0) in character arrays",
          "Accessing array indexes out of bounds (e.g. writing to arr[5] in a size 5 array)",
          "Comparing strings directly using '==' (compares memory addresses, use strcmp instead)"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Standard I/O" },
          { line: "#include <string.h>", comment: "Include string helper library" },
          { line: "int main() {", comment: "Main starts" },
          { line: "  int nums[3] = {10, 20, 30};", comment: "1D contiguous array" },
          { line: "  char word[] = \"Hello\";", comment: "Creates character array ending with \\0" },
          { line: "  int len = strlen(word);", comment: "Computes length of Hello (5)" },
          { line: "  printf(\"Length: %d\", len);", comment: "Prints length" },
          { line: "  return 0;", comment: "Success" },
          { line: "}", comment: "End main" }
        ],
        output: "Length: 5",
        diagramType: "array_memory",
        quiz: [
          { q: "What is the primary role of the null terminator (\\0) in C strings?", options: ["It clears the memory buffer", "It marks the absolute end of the string", "It prints a space", "It declares character arrays"], ans: 1, exp: "C strings are simple character arrays. Standard string functions rely on the null terminator (\\0) to know where a string ends." },
          { q: "How are 2D arrays stored in C memory?", options: ["Row-major order (row by row)", "Column-major order (column by column)", "Scattered heap fragments", "Linked address tables"], ans: 0, exp: "C stores 2D and multi-dimensional arrays in contiguous memory using Row-Major Order (entire first row, followed by second row, etc.)." }
        ]
      },
      {
        id: "c_pointers",
        title: "8. Pointers (The Core of C)",
        desc: "Addresses (&), dereferencing (*), pointer arithmetic, void/null/wild/dangling pointers, and callback function pointers.",
        intro: "Pointers are variables that store memory addresses. C pointers enable direct system resource control, efficient array operations, and function callbacks via function pointers.",
        analogy: "A pointer is a tracking coordinate. If x is a gold chest (variable), &x is the map coordinate. Dereferencing (*) is going to that coordinate and opening the chest.",
        whyLearn: [
          "Fundamental for low-level memory access and system calls",
          "Creates and links dynamic structures (nodes, lists, trees)",
          "Enables callback patterns using function pointers"
        ],
        mistakes: [
          "Leaving pointers uninitialized (Wild pointers), causing unpredictable crashes",
          "Attempting to write to or read from a NULL address",
          "Accessing freed pointer references (Dangling pointers)"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Standard I/O" },
          { line: "int main() {", comment: "Main starts" },
          { line: "  int val = 99;", comment: "Define int" },
          { line: "  int *p = &val;", comment: "Pointer p holds address of val" },
          { line: "  *p = 100;", comment: "Dereference p to change val to 100" },
          { line: "  int **dp = &p;", comment: "Double pointer holding p's address" },
          { line: "  return 0;", comment: "Success" },
          { line: "}", comment: "End main" }
        ],
        output: "val value is now 100",
        diagramType: "pointers",
        quiz: [
          { q: "What is a dangling pointer?", options: ["A pointer that is set to NULL", "A pointer pointing to a memory address that has already been deallocated", "An uninitialized pointer", "A pointer that points to a double pointer"], ans: 1, exp: "A dangling pointer arises when memory is freed but the pointer variable still holds the address of that deallocated memory block." },
          { q: "How do you declare a generic pointer that can store any data type address?", options: ["gen *ptr", "void *ptr", "any *ptr", "int *ptr"], ans: 1, exp: "void * is a generic pointer in C that can hold the address of any data type without type casting." }
        ]
      },
      {
        id: "c_structures",
        title: "9. User-Defined Data Types",
        desc: "Structures (struct padding/packing), Unions, Bit-fields, Enumerations (enum), and typedef.",
        intro: "Structures (struct) combine variables of different types. Unions share a single memory space. Bit-fields allow custom bit sizes, and typedef creates aliases.",
        analogy: "A struct is like a toolbox containing a hammer, screwdriver, and ruler. A union is like a convertible pocket knife: it has multiple tools, but you can only fold out and use one tool at a time.",
        whyLearn: [
          "Creates complex objects (e.g. Book, Student, Node) in C",
          "Saves hardware memory using shared memory unions",
          "Controls structure memory alignment using packing directives"
        ],
        mistakes: [
          "Forgetting the semicolon at the end of struct and union declarations",
          "Modifying one union member and expecting the others to remain unchanged",
          "Ignoring struct padding when writing struct data directly to files"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Standard I/O" },
          { line: "struct Employee {", comment: "Define structure" },
          { line: "  int id;", comment: "Integer field (4 bytes)" },
          { line: "  float salary;", comment: "Float field (4 bytes)" },
          { line: "};", comment: "Must end with semicolon!" },
          { line: "int main() {", comment: "Main starts" },
          { line: "  struct Employee emp1 = {101, 5500.50};", comment: "Initialize structure instance" },
          { line: "  printf(\"ID: %d\", emp1.id);", comment: "Access members using dot operator" },
          { line: "  return 0;", comment: "Success" },
          { line: "}", comment: "End main" }
        ],
        output: "ID: 101",
        diagramType: "structures",
        quiz: [
          { q: "What is struct padding?", options: ["Adding comments inside structs", "Inserting unused alignment bytes to line up variables with CPU boundaries", "Filling structures with zeros", "Compiling structs into arrays"], ans: 1, exp: "Struct padding inserts alignment bytes so variables sit on native CPU word boundaries (e.g. 4-byte or 8-byte offsets) to speed up memory access." },
          { q: "How does a union allocate memory?", options: ["Sums memory of all members", "Allocates memory equal to its largest member", "Allocates static heap tables", "Shares memory with the stack"], ans: 1, exp: "Unions share a single memory space. The total size of a union is equal to the size of its largest member." }
        ]
      },
      {
        id: "c_dma",
        title: "10. Dynamic Memory Allocation (DMA)",
        desc: "Program memory segments, malloc(), calloc(), realloc(), and free() memory lifecycle.",
        intro: "Dynamic memory allocation allocates memory from the heap during execution. Using malloc, calloc, realloc, and free, programmers manage custom buffers.",
        analogy: "DMA is like renting hotel rooms. You request rooms (malloc), clear the rooms if needed (calloc), resize your reservation (realloc), and checkout (free) when you leave.",
        whyLearn: [
          "Enables variable sized arrays that change during runtime",
          "Allocates persistent structures on the heap outside function stack lifecycles",
          "Controls memory allocation footprint dynamically"
        ],
        mistakes: [
          "Forgetting to check if malloc returned NULL (out of memory)",
          "Calling free() on a pointer twice, causing runtime crashes",
          "Losing reference to heap allocations, causing permanent memory leaks"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Standard I/O" },
          { line: "#include <stdlib.h>", comment: "Include DMA library header" },
          { line: "int main() {", comment: "Main starts" },
          { line: "  int *arr = malloc(5 * sizeof(int));", comment: "Allocate array of size 5 on Heap" },
          { line: "  if (arr == NULL) return 1;", comment: "Verify allocation success" },
          { line: "  arr[0] = 50;", comment: "Store values in heap" },
          { line: "  free(arr);", comment: "Free memory: prevents leaks" },
          { line: "  return 0;", comment: "Success" },
          { line: "}", comment: "End main" }
        ],
        output: "Memory allocated and freed successfully.",
        diagramType: "heap_stack",
        quiz: [
          { q: "What is the difference between malloc() and calloc()?", options: ["malloc initializes memory to zero; calloc does not", "calloc initializes memory to zero; malloc leaves garbage values", "malloc allocates heap; calloc allocates stack", "calloc takes one argument; malloc takes two"], ans: 1, exp: "calloc() allocates contiguous memory blocks and automatically initializes all allocated bytes to zero. malloc() leaves memory with whatever raw data (garbage) was already there." },
          { q: "Which function is used to change the size of an already allocated heap buffer?", options: ["malloc()", "resize()", "realloc()", "free()"], ans: 2, exp: "realloc() expands or shrinks the allocated heap memory block, copying data to a new location if necessary." }
        ]
      },
      {
        id: "c_preprocessor",
        title: "11. The C Preprocessor",
        desc: "Macros, file inclusions, conditional compilation directives, and macro stringification.",
        intro: "The preprocessor runs before actual compilation. It handles file inclusion (#include), macro substitutions (#define), and conditional compilation (#ifdef).",
        analogy: "The preprocessor is like Find-and-Replace in a text editor. It swaps macro names for their defined text values before sending the code to be compiled.",
        whyLearn: [
          "Defines global constants easily (e.g. #define PI 3.14)",
          "Prevents duplicate header inclusions using include guards",
          "Controls multi-platform configurations with conditional directives (#ifdef)"
        ],
        mistakes: [
          "Putting semicolons at the end of macro definitions (e.g. #define MAX 100;)",
          "Not surrounding macro parameters with parentheses, causing operator precedence issues",
          "Confusing preprocessor directives with actual runtime execution statements"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Include directive" },
          { line: "#define PI 3.1415", comment: "Define constant macro (no semicolon!)" },
          { line: "#define SQUARE(x) ((x) * (x))", comment: "Function-like macro with parenthesized parameters" },
          { line: "int main() {", comment: "Main starts" },
          { line: "  int area = SQUARE(5);", comment: "Expanded to ((5) * (5))" },
          { line: "  return 0;", comment: "Success" },
          { line: "}", comment: "End main" }
        ],
        output: "Macro expanded: 25",
        diagramType: "preprocessor",
        quiz: [
          { q: "Which directive prevents a header file from being included multiple times?", options: ["#include", "#define", "#ifndef / #define include guard", "#undef"], ans: 2, exp: "Include guards (#ifndef HEADER_H, #define HEADER_H, #endif) prevent compiler errors caused by duplicate headers." },
          { q: "What does the preprocessor stringification operator (#) do?", options: ["Converts a macro argument into a string literal", "Pastes two tokens together", "Comments out the line", "Allocates memory string"], ans: 0, exp: "The # operator stringifies a macro parameter, wrapping it in quotes (e.g. #x becomes \"x\")." }
        ]
      },
      {
        id: "c_files",
        title: "12. File Input/Output Operations",
        desc: "FILE streams, fopen modes, text/binary operations, positioning (fseek/ftell), and error checks.",
        intro: "C manages external disk storage using FILE streams. Using operations like fopen, fclose, fprintf, and fread, programs read and write persistent data.",
        analogy: "A FILE pointer is like a bookmark in a book. Opening the file opens the book; reading moves the bookmark forward; fseek is flipping pages directly.",
        whyLearn: [
          "Persists user database and settings across app restarts",
          "Reads inputs and writes outputs directly from text/binary documents",
          "Allows random access file reads using fseek and ftell offsets"
        ],
        mistakes: [
          "Forgetting to call fclose(), causing resource locks and memory leaks",
          "Not checking if fopen() returned NULL, causing crashes when accessing missing files",
          "Opening files in text mode when handling raw binary data"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Standard I/O" },
          { line: "int main() {", comment: "Main starts" },
          { line: "  FILE *fp = fopen(\"data.txt\", \"w\");", comment: "Open file in write mode ('w')" },
          { line: "  if (fp == NULL) return 1;", comment: "Check file open success" },
          { line: "  fprintf(fp, \"Hello File!\");", comment: "Write string to file" },
          { line: "  fclose(fp);", comment: "Close file stream to release handle" },
          { line: "  return 0;", comment: "Success" },
          { line: "}", comment: "End main" }
        ],
        output: "File 'data.txt' written successfully.",
        diagramType: "file_io",
        quiz: [
          { q: "Which file mode is used to open a file for writing data at the end of the file (append)?", options: ["\"r\"", "\"w\"", "\"a\"", "\"r+\""], ans: 2, exp: "\"a\" (append) mode opens a file for writing, placing the write cursor at the end of the file. It creates the file if it does not exist." },
          { q: "What does the fseek() function do?", options: ["Searches for text in a file", "Changes the file position pointer offset", "Deletes a file", "Counts characters in a file"], ans: 1, exp: "fseek() moves the file read/write pointer to a specific offset relative to the beginning, current position, or end of the file." }
        ]
      },
      {
        id: "c_advanced",
        title: "13. Advanced & Niche Topics",
        desc: "Command line arguments, variable args, type qualifiers, error handling, and bit masks.",
        intro: "Advanced C topics cover command-line arguments (argc, argv), variable argument lists (stdarg.h), qualifiers like const/volatile, restrict optimization, and bit manipulation masks.",
        analogy: "Command line arguments are like passing luggage parameters when boarding a flight. The qualifiers const and volatile are like flags telling the compiler: 'Don't change this!' and 'Watch this constantly!'",
        whyLearn: [
          "Reads runtime inputs directly via terminal configurations",
          "Writes custom logging functions with variable args like printf",
          "Optimizes CPU register reads using restrict and volatile qualifiers"
        ],
        mistakes: [
          "Accessing argv indexes beyond argc count (OutOfBounds)",
          "Forgetting to call va_end after executing variable arguments list loops",
          "Modifying const parameters directly"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Standard I/O" },
          { line: "int main(int argc, char *argv[]) {", comment: "argc: arguments count, argv: arguments vector" },
          { line: "  printf(\"Prog: %s\\n\", argv[0]);", comment: "argv[0] is the program path name" },
          { line: "  if (argc > 1) {", comment: "If additional argument was passed" },
          { line: "    printf(\"Arg1: %s\", argv[1]);", comment: "Print first argument" },
          { line: "  }", comment: "End if" },
          { line: "  return 0;", comment: "Success" },
          { line: "}", comment: "End main" }
        ],
        output: "Prog: ./a.out\nArg1: hello",
        diagramType: "bit_mask",
        quiz: [
          { q: "What does argv[0] represent in command-line arguments?", options: ["The number of arguments passed", "The name/path of the executing program", "The first input parameter", "A NULL placeholder"], ans: 1, exp: "argv[0] always stores the program execution string (e.g. name of the executable file)." },
          { q: "What does the volatile keyword tell the compiler?", options: ["Variable cannot be changed", "Variable must be stored in registers", "Variable can change unexpectedly outside code (disable optimizations)", "Optimize execution speed"], ans: 2, exp: "volatile tells the compiler that the variable's value can change at any time (e.g. by hardware interrupts), so it must always be read from memory instead of cached registers." }
        ]
      },
      {
        id: "c_data_structures",
        title: "14. Basic Data Structures in C (Implementation)",
        desc: "Implement singly linked lists, stacks, queues, and binary search trees from scratch.",
        intro: "True mastery of C involves building classic data structures. Singly/Doubly Linked Lists, Stacks, Queues, and Binary Search Trees are implemented dynamically using structs and pointers.",
        analogy: "A Linked List is like a treasure hunt: each clue (node) stores a clue value and a map coordinate (pointer) to find the next clue.",
        whyLearn: [
          "Builds complete understanding of dynamic memory references",
          "Essential for solving placement and engineering interview challenges",
          "Underpins complex database index mappings and data networks"
        ],
        mistakes: [
          "Losing the head pointer of a linked list, dereferencing memory and leaking nodes",
          "Forgetting to link a new node's next pointer before re-assigning parent references",
          "Stack overflow in deep recursive BST tree traversal loops"
        ],
        code: [
          { line: "#include <stdio.h>", comment: "Standard I/O" },
          { line: "#include <stdlib.h>", comment: "Include malloc" },
          { line: "struct Node {", comment: "Define Linked List Node" },
          { line: "  int data;", comment: "Payload variable" },
          { line: "  struct Node *next;", comment: "Pointer to next node" },
          { line: "};", comment: "End struct" },
          { line: "int main() {", comment: "Main starts" },
          { line: "  struct Node* head = malloc(sizeof(struct Node));", comment: "Allocate head" },
          { line: "  head->data = 10; head->next = NULL;", comment: "Initialize node values" },
          { line: "  free(head);", comment: "Clean allocation" },
          { line: "  return 0;", comment: "Success" },
          { line: "}", comment: "End main" }
        ],
        output: "Linked list initialized.",
        diagramType: "linked_list",
        quiz: [
          { q: "What is the time complexity of searching an element in a balanced Binary Search Tree?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], ans: 1, exp: "A balanced BST halves the search space at each branch comparison, giving O(log n) search time complexity." },
          { q: "What order does a Queue follow for adding and removing elements?", options: ["LIFO (Last In First Out)", "FIFO (First In First Out)", "Random order", "Priority only"], ans: 1, exp: "A queue follows First In First Out (FIFO): elements join at the rear and exit from the front." }
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
