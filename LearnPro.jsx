import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "subjects", label: "Subjects", icon: "📚" },
  { id: "roadmap", label: "Roadmap", icon: "🗺️" },
  { id: "playground", label: "Playground", icon: "🎮" },
  { id: "practice", label: "Practice", icon: "💻" },
  { id: "quiz", label: "Quiz", icon: "🧠" },
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "profile", label: "Profile", icon: "👤" },
];

const SUBJECTS = [
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

const QUIZ_QUESTIONS = [
  { q: "What does `int *p;` declare in C?", options: ["An integer", "A pointer to an integer", "An array", "A function"], ans: 1, exp: "int *p declares p as a pointer to an integer. The * means it stores a memory address of an int." },
  { q: "Which data structure uses LIFO order?", options: ["Queue", "Tree", "Stack", "Graph"], ans: 2, exp: "Stack uses Last In, First Out (LIFO) — the last element pushed is the first one popped." },
  { q: "What is the time complexity of binary search?", options: ["O(n)", "O(n²)", "O(log n)", "O(1)"], ans: 2, exp: "Binary search halves the search space each time, giving O(log n) time complexity." },
  { q: "Which sorting algorithm is fastest on average?", options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Insertion Sort"], ans: 2, exp: "Quick Sort has O(n log n) average time complexity, making it one of the fastest in practice." },
  { q: "In OOP, what does 'encapsulation' mean?", options: ["Hiding data inside a class", "Inheriting from a parent", "Overriding methods", "Polymorphic behavior"], ans: 0, exp: "Encapsulation bundles data and methods together, hiding internal details from outside." },
];

const PRACTICE_PROBLEMS = [
  { title: "Reverse a Linked List", difficulty: "Easy", tags: ["Linked List", "Pointers"], xp: 50, desc: "Given the head of a singly linked list, reverse the list and return the reversed list.", hint: "Use three pointers: prev, curr, next." },
  { title: "Two Sum", difficulty: "Easy", tags: ["Arrays", "HashMap"], xp: 50, desc: "Given an array of integers and a target, return indices of two numbers that add up to target.", hint: "Use a hash map to store complement values." },
  { title: "Binary Tree Level Order Traversal", difficulty: "Medium", tags: ["Tree", "BFS"], xp: 100, desc: "Return the level order traversal of a binary tree's nodes' values.", hint: "Use a queue and process level by level." },
  { title: "Longest Palindromic Substring", difficulty: "Medium", tags: ["DP", "String"], xp: 100, desc: "Given a string, return the longest palindromic substring.", hint: "Expand around center for each character." },
  { title: "Merge K Sorted Lists", difficulty: "Hard", tags: ["Heap", "Divide & Conquer"], xp: 200, desc: "Merge k sorted linked lists and return it as one sorted list.", hint: "Use a min-heap of size k." },
];

const ROADMAP_STEPS = [
  { phase: "Phase 1", title: "Programming Basics", duration: "4 weeks", items: ["Variables & Data Types", "Control Flow", "Functions", "Arrays & Strings"], color: "#3b82f6" },
  { phase: "Phase 2", title: "Data Structures", duration: "6 weeks", items: ["Linked Lists", "Stacks & Queues", "Trees & Graphs", "Hash Tables"], color: "#8b5cf6" },
  { phase: "Phase 3", title: "Algorithms", duration: "6 weeks", items: ["Sorting & Searching", "Recursion & DP", "Greedy Algorithms", "Graph Algorithms"], color: "#06b6d4" },
  { phase: "Phase 4", title: "System Design", duration: "4 weeks", items: ["OOP Principles", "Design Patterns", "Database Design", "API Design"], color: "#10b981" },
];

// ─── Utility Components ───────────────────────────────────────────────────────

function GlassCard({ children, className = "", onClick, style = {} }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 16,
        backdropFilter: "blur(12px)",
        transition: "all 0.3s ease",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
      className={className}
      onMouseEnter={e => { if (onClick) { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}}
      onMouseLeave={e => { if (onClick) { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}}
    >
      {children}
    </div>
  );
}

function Badge({ children, color = "#8b5cf6" }) {
  return (
    <span style={{ background: color + "22", color, border: `1px solid ${color}44`, borderRadius: 8, padding: "2px 10px", fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>
      {children}
    </span>
  );
}

function GradientButton({ children, onClick, secondary = false, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: secondary ? "rgba(255,255,255,0.07)" : "linear-gradient(135deg, #3b82f6, #8b5cf6)",
        border: secondary ? "1px solid rgba(255,255,255,0.15)" : "none",
        color: "#fff",
        borderRadius: 12,
        padding: "12px 28px",
        fontWeight: 600,
        fontSize: 15,
        cursor: "pointer",
        transition: "all 0.2s ease",
        letterSpacing: 0.3,
        ...style,
      }}
      onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {children}
    </button>
  );
}

// ─── Animated Background ──────────────────────────────────────────────────────

function AnimatedBg() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      <div style={{
        position: "absolute", top: "-20%", left: "-10%", width: 600, height: 600,
        background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        animation: "float1 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", top: "30%", right: "-15%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
        animation: "float2 10s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "20%", width: 400, height: 400,
        background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
        animation: "float3 12s ease-in-out infinite",
      }} />
      {/* Grid pattern */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.03 }}>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(8,10,20,0.85)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      backdropFilter: "blur(20px)",
      padding: "0 24px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", height: 60, gap: 16 }}>
        {/* Logo */}
        <div
          onClick={() => setPage("home")}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10, marginRight: 8 }}
        >
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, fontWeight: 900, color: "#fff",
          }}>L</div>
          <span style={{ fontSize: 18, fontWeight: 800, background: "linear-gradient(90deg,#60a5fa,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            LearnPro
          </span>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: 2, flex: 1, overflow: "auto" }}>
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              style={{
                background: page === item.id ? "rgba(139,92,246,0.2)" : "transparent",
                border: page === item.id ? "1px solid rgba(139,92,246,0.3)" : "1px solid transparent",
                color: page === item.id ? "#a78bfa" : "rgba(255,255,255,0.55)",
                borderRadius: 10,
                padding: "6px 12px",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div style={{ position: "relative" }}>
          {showSearch ? (
            <input
              autoFocus
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search lessons..."
              onBlur={() => { setShowSearch(false); setSearch(""); }}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 10, padding: "6px 14px", color: "#fff",
                fontSize: 13, outline: "none", width: 200,
              }}
            />
          ) : (
            <button
              onClick={() => setShowSearch(true)}
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "6px 14px", color: "rgba(255,255,255,0.6)", fontSize: 13, cursor: "pointer" }}
            >
              🔍 Search
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

function HomePage({ setPage }) {
  const stats = [
    { n: "100+", label: "Lessons" },
    { n: "500+", label: "Visual Examples" },
    { n: "1000+", label: "Quiz Questions" },
    { n: "50+", label: "Interactive Sims" },
  ];

  const testimonials = [
    { name: "Arjun Mehta", role: "2nd Year CS Student", text: "LearnPro's visual diagrams made pointers finally click for me. I understood in 20 minutes what textbooks couldn't explain in weeks.", avatar: "AM" },
    { name: "Priya Sharma", role: "Placed at Google", text: "The algorithm animations changed how I think about code. I could literally see quicksort partition in my head during the interview.", avatar: "PS" },
    { name: "Rahul Verma", role: "Freshman, IIT Delhi", text: "The playground is genius. Watching memory allocation happen live is 100x better than reading about it.", avatar: "RV" },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px", overflow: "hidden" }}>
        <AnimatedBg />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 780 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: 100, padding: "6px 18px", marginBottom: 32, fontSize: 13, color: "#a78bfa" }}>
            ✨ Visual-first learning platform for CS students
          </div>
          <h1 style={{
            fontSize: "clamp(36px,6vw,72px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24,
            background: "linear-gradient(135deg, #fff 0%, #a78bfa 50%, #60a5fa 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Programming Made Easy Through Visual Learning
          </h1>
          <p style={{ fontSize: 19, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 44, maxWidth: 580, margin: "0 auto 44px" }}>
            Understand every programming concept with theory, diagrams, animations, and interactive examples — not long videos.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <GradientButton onClick={() => setPage("subjects")}>🚀 Start Learning</GradientButton>
            <GradientButton secondary onClick={() => setPage("subjects")}>📚 Explore Subjects</GradientButton>
          </div>

          {/* Floating Code Card */}
          <div style={{ marginTop: 64, position: "relative" }}>
            <GlassCard style={{ padding: 24, textAlign: "left", maxWidth: 480, margin: "0 auto" }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ marginLeft: 8, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>linked_list.c</span>
              </div>
              <pre style={{ fontFamily: "monospace", fontSize: 13, color: "#e2e8f0", margin: 0, lineHeight: 1.7 }}>
                <span style={{ color: "#60a5fa" }}>struct</span> <span style={{ color: "#a78bfa" }}>Node</span> {"{"}{"\n"}
                {"  "}<span style={{ color: "#34d399" }}>int</span> data;{"\n"}
                {"  "}<span style={{ color: "#34d399" }}>struct</span> Node *next;{"\n"}
                {"};"}{"\n\n"}
                <span style={{ color: "#f59e0b" }}>// Each node points to next →</span>{"\n"}
                <span style={{ color: "#818cf8" }}>📦</span> 10 → <span style={{ color: "#818cf8" }}>📦</span> 20 → <span style={{ color: "#818cf8" }}>📦</span> 30 → NULL
              </pre>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "60px 24px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 32, textAlign: "center" }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 42, fontWeight: 900, background: "linear-gradient(135deg,#60a5fa,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.n}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Subjects */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#fff", marginBottom: 12 }}>Popular Subjects</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16 }}>Start with any subject and learn at your pace</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
            {SUBJECTS.slice(0, 6).map(s => (
              <GlassCard key={s.id} onClick={() => setPage("subjects")} style={{ padding: 24 }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{s.name}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Badge color={s.color}>{s.level}</Badge>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{s.lessons} lessons</span>
                </div>
              </GlassCard>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <GradientButton secondary onClick={() => setPage("subjects")}>View All 13 Subjects →</GradientButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#fff", marginBottom: 12 }}>What Students Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {testimonials.map((t, i) => (
              <GlassCard key={i} style={{ padding: 28 }}>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 20 }}>"{t.text}"</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700, color: "#fff",
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{t.role}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, color: "#fff" }}>L</div>
          <span style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>LearnPro</span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>Made for CS students who learn by seeing, not watching.</p>
      </footer>
    </div>
  );
}

// ─── SUBJECTS PAGE ────────────────────────────────────────────────────────────

function SubjectsPage({ setPage, setSelectedSubject }) {
  const [filter, setFilter] = useState("All");
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filtered = filter === "All" ? SUBJECTS : SUBJECTS.filter(s => s.level === filter);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 12 }}>All Subjects</h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16 }}>Choose a subject and start your visual learning journey</p>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 36, flexWrap: "wrap" }}>
        {levels.map(l => (
          <button
            key={l}
            onClick={() => setFilter(l)}
            style={{
              background: filter === l ? "linear-gradient(135deg,#3b82f6,#8b5cf6)" : "rgba(255,255,255,0.06)",
              border: "1px solid " + (filter === l ? "transparent" : "rgba(255,255,255,0.1)"),
              color: "#fff", borderRadius: 10, padding: "8px 20px", fontSize: 13, fontWeight: 500, cursor: "pointer",
            }}
          >
            {l}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
        {filtered.map(s => (
          <GlassCard
            key={s.id}
            onClick={() => { setSelectedSubject(s); setPage("lesson"); }}
            style={{ padding: 28, position: "relative", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100, background: s.color + "10", borderRadius: "0 16px 0 100%" }} />
            <div style={{ fontSize: 40, marginBottom: 16 }}>{s.icon}</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{s.name}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 20 }}>{s.desc}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Badge color={s.color}>{s.level}</Badge>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>📖 {s.lessons} lessons</span>
            </div>
            <div style={{ marginTop: 20, height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
              <div style={{ height: "100%", width: Math.random() * 60 + 10 + "%", background: `linear-gradient(90deg, ${s.color}, ${s.color}88)`, borderRadius: 2 }} />
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", marginTop: 6 }}>Progress</div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

// ─── LESSON PAGE ──────────────────────────────────────────────────────────────

function LinkedListSVG() {
  const [step, setStep] = useState(0);
  const nodes = [10, 20, 30, 40];
  const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"];

  return (
    <div>
      <svg viewBox="0 0 520 100" style={{ width: "100%", maxWidth: 520, display: "block", margin: "0 auto" }}>
        {nodes.map((val, i) => (
          <g key={i} style={{ opacity: i <= step ? 1 : 0.2, transition: "opacity 0.4s" }}>
            <rect x={i * 120 + 10} y={25} width={70} height={50} rx={8} fill={colors[i] + "33"} stroke={colors[i]} strokeWidth={1.5} />
            <text x={i * 120 + 45} y={55} textAnchor="middle" fill={colors[i]} fontSize={16} fontWeight={700}>{val}</text>
            <text x={i * 120 + 45} y={90} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize={10}>data</text>
            {i < nodes.length - 1 && (
              <>
                <line x1={i * 120 + 80} y1={50} x2={i * 120 + 115} y2={50} stroke={colors[i]} strokeWidth={1.5} markerEnd="url(#arr)" strokeDasharray={i < step ? "none" : "4,3"} />
              </>
            )}
            {i === nodes.length - 1 && (
              <text x={i * 120 + 85} y={55} fill="rgba(255,255,255,0.4)" fontSize={11}>NULL</text>
            )}
          </g>
        ))}
        <defs>
          <marker id="arr" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#8b5cf6" />
          </marker>
        </defs>
      </svg>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 16 }}>
        <button onClick={() => setStep(Math.max(0, step - 1))} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", borderRadius: 8, padding: "6px 16px", cursor: "pointer" }}>← Prev</button>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, padding: "6px 0" }}>Node {step + 1} of {nodes.length}</span>
        <button onClick={() => setStep(Math.min(nodes.length - 1, step + 1))} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", borderRadius: 8, padding: "6px 16px", cursor: "pointer" }}>Next →</button>
      </div>
    </div>
  );
}

function StackSVG() {
  const [items, setItems] = useState([10, 20, 30]);

  const push = () => {
    const val = Math.floor(Math.random() * 90 + 10);
    setItems(p => p.length < 5 ? [...p, val] : p);
  };
  const pop = () => setItems(p => p.slice(0, -1));

  const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"];

  return (
    <div>
      <svg viewBox="0 0 160 200" style={{ width: 160, height: 200, display: "block", margin: "0 auto" }}>
        <rect x={40} y={20} width={80} height={160} rx={4} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
        {items.map((v, i) => (
          <g key={i}>
            <rect x={42} y={174 - i * 30} width={76} height={26} rx={3} fill={colors[i % 5] + "44"} stroke={colors[i % 5]} strokeWidth={1} />
            <text x={80} y={191 - i * 30} textAnchor="middle" fill={colors[i % 5]} fontSize={13} fontWeight={600}>{v}</text>
          </g>
        ))}
        {items.length > 0 && <text x={80} y={14} textAnchor="middle" fill="#a78bfa" fontSize={10}>← TOP</text>}
        <text x={80} y={196} textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize={9}>BOTTOM</text>
      </svg>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 12 }}>
        <button onClick={push} style={{ background: "rgba(59,130,246,0.2)", border: "1px solid #3b82f6", color: "#60a5fa", borderRadius: 8, padding: "6px 16px", cursor: "pointer", fontSize: 13 }}>PUSH</button>
        <button onClick={pop} disabled={items.length === 0} style={{ background: "rgba(239,68,68,0.2)", border: "1px solid #ef4444", color: "#f87171", borderRadius: 8, padding: "6px 16px", cursor: items.length ? "pointer" : "not-allowed", fontSize: 13, opacity: items.length ? 1 : 0.4 }}>POP</button>
      </div>
    </div>
  );
}

function LessonPage({ subject, setPage }) {
  if (!subject) return null;
  const [activeSection, setActiveSection] = useState("intro");

  const sections = ["intro", "diagram", "code", "quiz"];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
      {/* Breadcrumb */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 32, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
        <span onClick={() => setPage("subjects")} style={{ cursor: "pointer", color: "#a78bfa" }}>Subjects</span>
        <span>›</span>
        <span style={{ color: "#fff" }}>{subject.name}</span>
        <span>›</span>
        <span>Introduction</span>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 36, flexWrap: "wrap" }}>
        {sections.map(s => (
          <button key={s} onClick={() => setActiveSection(s)} style={{
            background: activeSection === s ? "linear-gradient(135deg,#3b82f6,#8b5cf6)" : "rgba(255,255,255,0.06)",
            border: "1px solid " + (activeSection === s ? "transparent" : "rgba(255,255,255,0.1)"),
            color: "#fff", borderRadius: 10, padding: "8px 20px", fontSize: 13, fontWeight: 500, cursor: "pointer", textTransform: "capitalize",
          }}>{s}</button>
        ))}
      </div>

      {activeSection === "intro" && (
        <div>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 32 }}>
            <div style={{ fontSize: 52 }}>{subject.icon}</div>
            <div>
              <h1 style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 8 }}>{subject.name}</h1>
              <div style={{ display: "flex", gap: 10 }}>
                <Badge color={subject.color}>{subject.level}</Badge>
                <Badge color="#06b6d4">{subject.lessons} Lessons</Badge>
              </div>
            </div>
          </div>

          <GlassCard style={{ padding: 24, marginBottom: 20 }}>
            <h3 style={{ color: "#a78bfa", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>📖 Introduction</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: 15 }}>{subject.desc} This subject takes you from the very beginning, building a strong foundation before moving to advanced concepts. Every lesson includes visual diagrams and interactive examples.</p>
          </GlassCard>

          <GlassCard style={{ padding: 24, marginBottom: 20 }}>
            <h3 style={{ color: "#f59e0b", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>🌍 Real-life Analogy</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: 15 }}>
              {subject.id === "ds"
                ? "Think of a linked list like a treasure hunt — each clue (node) tells you where the next clue is. You can only follow the chain, not jump directly to any item."
                : subject.id === "algo"
                ? "Think of sorting algorithms like organizing books on a shelf. Different methods (by color, size, author) take different amounts of effort — algorithms work the same way."
                : "Think of programming like cooking. A recipe (program) has ingredients (data), steps (instructions), and produces a result (output). The language is just which kitchen you're working in."}
            </p>
          </GlassCard>

          <GlassCard style={{ padding: 24, marginBottom: 20 }}>
            <h3 style={{ color: "#10b981", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>🎯 Why Learn This?</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {["Essential for coding interviews", "Builds problem-solving skills", "Used in every software system", "Helps understand computer internals"].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#10b981", fontSize: 16, marginTop: 1 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard style={{ padding: 24 }}>
            <h3 style={{ color: "#06b6d4", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>📋 Common Mistakes to Avoid</h3>
            {["Skipping the theory and jumping straight to code", "Not practicing enough dry-run examples", "Memorizing instead of understanding the logic", "Ignoring time and space complexity"].map((m, i) => (
              <div key={i} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <span style={{ color: "#ef4444" }}>⚠</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>{m}</span>
              </div>
            ))}
          </GlassCard>
        </div>
      )}

      {activeSection === "diagram" && (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 24 }}>Visual Diagrams</h2>

          <GlassCard style={{ padding: 28, marginBottom: 20 }}>
            <h3 style={{ color: "#a78bfa", fontWeight: 600, marginBottom: 20 }}>🔗 Linked List — Step by Step</h3>
            <LinkedListSVG />
            <div style={{ marginTop: 20, padding: 16, background: "rgba(59,130,246,0.08)", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)" }}>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>Each node contains data and a pointer to the next node. The last node points to NULL, marking the end of the list. Use the buttons to step through building the list node by node.</p>
            </div>
          </GlassCard>

          <GlassCard style={{ padding: 28, marginBottom: 20 }}>
            <h3 style={{ color: "#a78bfa", fontWeight: 600, marginBottom: 20 }}>📚 Stack — Push & Pop</h3>
            <StackSVG />
            <div style={{ marginTop: 20, padding: 16, background: "rgba(139,92,246,0.08)", borderRadius: 10, border: "1px solid rgba(139,92,246,0.2)" }}>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>Stack follows LIFO — Last In, First Out. Elements are added (PUSH) and removed (POP) from the top only. Think of a stack of plates.</p>
            </div>
          </GlassCard>

          {/* Memory diagram */}
          <GlassCard style={{ padding: 28 }}>
            <h3 style={{ color: "#a78bfa", fontWeight: 600, marginBottom: 20 }}>🧠 Memory Layout</h3>
            <svg viewBox="0 0 400 120" style={{ width: "100%", maxWidth: 400 }}>
              {[
                { addr: "1000", val: "10", color: "#3b82f6" },
                { addr: "1008", val: "→1008", color: "#8b5cf6", small: true },
                { addr: "1008", val: "20", color: "#06b6d4" },
                { addr: "1016", val: "→1016", color: "#8b5cf6", small: true },
                { addr: "1016", val: "30", color: "#10b981" },
                { addr: "", val: "NULL", color: "#6b7280" },
              ].map((cell, i) => (
                <g key={i}>
                  <rect x={i * 60 + 10} y={30} width={50} height={50} rx={4} fill={cell.color + "22"} stroke={cell.color + "66"} strokeWidth={1} />
                  <text x={i * 60 + 35} y={60} textAnchor="middle" fill={cell.color} fontSize={cell.small ? 8 : 13} fontWeight={600}>{cell.val}</text>
                  {cell.addr && <text x={i * 60 + 35} y={100} textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize={9}>{cell.addr}</text>}
                </g>
              ))}
            </svg>
          </GlassCard>
        </div>
      )}

      {activeSection === "code" && (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 24 }}>Code with Line-by-Line Explanation</h2>

          <GlassCard style={{ padding: 0, overflow: "hidden", marginBottom: 20 }}>
            <div style={{ background: "rgba(0,0,0,0.4)", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: 8, alignItems: "center" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
              <span style={{ marginLeft: 8, fontSize: 13, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>linked_list.c</span>
            </div>
            <div style={{ padding: 24 }}>
              {[
                { line: "#include <stdio.h>", comment: "Include standard I/O library", color: "#a78bfa" },
                { line: "#include <stdlib.h>", comment: "Include for malloc() memory allocation", color: "#a78bfa" },
                { line: "", comment: "" },
                { line: "struct Node {", comment: "Define the Node structure", color: "#60a5fa" },
                { line: "  int data;", comment: "Integer data field", color: "#34d399" },
                { line: "  struct Node *next;", comment: "Pointer to next node", color: "#f59e0b" },
                { line: "};", comment: "End of structure definition", color: "#60a5fa" },
                { line: "", comment: "" },
                { line: "struct Node* createNode(int val) {", comment: "Function to create new node", color: "#ec4899" },
                { line: "  struct Node* node = malloc(sizeof(struct Node));", comment: "Allocate memory on heap", color: "#f59e0b" },
                { line: "  node->data = val;", comment: "Set the data value", color: "#34d399" },
                { line: "  node->next = NULL;", comment: "Initially points to nothing", color: "#94a3b8" },
                { line: "  return node;", comment: "Return the new node", color: "#60a5fa" },
                { line: "}", comment: "", color: "#94a3b8" },
              ].map((row, i) => (
                <div key={i} style={{ display: "flex", gap: 16, padding: "3px 0" }}>
                  <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, fontFamily: "monospace", minWidth: 20, textAlign: "right" }}>{row.line ? i + 1 : ""}</span>
                  <code style={{ fontSize: 13, fontFamily: "monospace", color: row.color || "#e2e8f0", flex: 1 }}>{row.line || "\u00A0"}</code>
                  {row.comment && <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontStyle: "italic", minWidth: 200 }}>// {row.comment}</span>}
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard style={{ padding: 24 }}>
            <h3 style={{ color: "#10b981", fontWeight: 600, marginBottom: 16 }}>🖥️ Output</h3>
            <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: 10, padding: 16, fontFamily: "monospace", fontSize: 13, color: "#34d399" }}>
              <div>$ gcc linked_list.c -o ll && ./ll</div>
              <div style={{ color: "#e2e8f0", marginTop: 8 }}>Linked List: 10 → 20 → 30 → 40 → NULL</div>
              <div style={{ color: "#e2e8f0" }}>Length: 4 nodes</div>
              <div style={{ color: "#e2e8f0" }}>Head: 10</div>
            </div>
          </GlassCard>
        </div>
      )}

      {activeSection === "quiz" && (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 24 }}>Quick Quiz — {subject.name}</h2>
          <MiniQuiz />
        </div>
      )}

      {/* Next Lesson */}
      <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <GradientButton secondary onClick={() => setPage("subjects")}>← Back to Subjects</GradientButton>
        <GradientButton onClick={() => setActiveSection(sections[(sections.indexOf(activeSection) + 1) % sections.length])}>
          Next: {sections[(sections.indexOf(activeSection) + 1) % sections.length].charAt(0).toUpperCase() + sections[(sections.indexOf(activeSection) + 1) % sections.length].slice(1)} →
        </GradientButton>
      </div>
    </div>
  );
}

// ─── ROADMAP PAGE ─────────────────────────────────────────────────────────────

function RoadmapPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 12 }}>Learning Roadmap</h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16 }}>A structured path from zero to placement-ready</p>
      </div>

      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #3b82f6, #8b5cf6, #06b6d4, #10b981)", transform: "translateX(-50%)" }} />

        {ROADMAP_STEPS.map((step, i) => (
          <div key={i} style={{ display: "flex", gap: 40, marginBottom: 48, position: "relative", flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}>
            <div style={{ flex: 1 }}>
              {i % 2 === 0 ? (
                <GlassCard style={{ padding: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: step.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{step.phase}</div>
                      <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>{step.title}</div>
                    </div>
                    <Badge color={step.color}>{step.duration}</Badge>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {step.items.map((item, j) => (
                      <div key={j} style={{ background: step.color + "15", border: "1px solid " + step.color + "33", borderRadius: 8, padding: "4px 12px", fontSize: 13, color: step.color }}>{item}</div>
                    ))}
                  </div>
                </GlassCard>
              ) : <div />}
            </div>

            {/* Center dot */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: `linear-gradient(135deg, ${step.color}, ${step.color}88)`,
                border: "3px solid rgba(8,10,20,1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, fontWeight: 800, color: "#fff",
                boxShadow: `0 0 20px ${step.color}44`,
              }}>{i + 1}</div>
            </div>

            <div style={{ flex: 1 }}>
              {i % 2 === 1 ? (
                <GlassCard style={{ padding: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: step.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{step.phase}</div>
                      <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>{step.title}</div>
                    </div>
                    <Badge color={step.color}>{step.duration}</Badge>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {step.items.map((item, j) => (
                      <div key={j} style={{ background: step.color + "15", border: "1px solid " + step.color + "33", borderRadius: 8, padding: "4px 12px", fontSize: 13, color: step.color }}>{item}</div>
                    ))}
                  </div>
                </GlassCard>
              ) : <div />}
            </div>
          </div>
        ))}
      </div>

      {/* Final Goal */}
      <GlassCard style={{ padding: 32, textAlign: "center", marginTop: 20, background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))" }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🎓</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Placement Ready!</div>
        <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 15 }}>Complete all phases to be fully prepared for FAANG interviews and campus placements</div>
      </GlassCard>
    </div>
  );
}

// ─── VISUAL PLAYGROUND ────────────────────────────────────────────────────────

function SortingAnimation() {
  const [arr, setArr] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [sorting, setSorting] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);
  const [sorted, setSorted] = useState([]);

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const bubbleSort = async () => {
    setSorting(true);
    setSorted([]);
    let a = [...arr];
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length - i - 1; j++) {
        setActiveIndices([j, j + 1]);
        await sleep(400);
        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          setArr([...a]);
          await sleep(200);
        }
      }
      setSorted(p => [...p, a.length - 1 - i]);
    }
    setActiveIndices([]);
    setSorted(a.map((_, i) => i));
    setSorting(false);
  };

  const reset = () => { setArr([64, 34, 25, 12, 22, 11, 90]); setActiveIndices([]); setSorted([]); };
  const maxVal = Math.max(...arr);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 120, marginBottom: 20 }}>
        {arr.map((v, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{v}</span>
            <div style={{
              width: "100%",
              height: (v / maxVal) * 90,
              borderRadius: "4px 4px 0 0",
              background: sorted.includes(i)
                ? "linear-gradient(to top, #10b981, #34d399)"
                : activeIndices.includes(i)
                ? "linear-gradient(to top, #ef4444, #f87171)"
                : "linear-gradient(to top, #3b82f6, #60a5fa)",
              transition: "height 0.3s ease, background 0.2s",
            }} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 16, marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
          <div style={{ width: 10, height: 10, borderRadius: 2, background: "#3b82f6" }} /> Unsorted
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
          <div style={{ width: 10, height: 10, borderRadius: 2, background: "#ef4444" }} /> Comparing
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
          <div style={{ width: 10, height: 10, borderRadius: 2, background: "#10b981" }} /> Sorted
        </div>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <GradientButton onClick={bubbleSort} style={{ opacity: sorting ? 0.5 : 1, pointerEvents: sorting ? "none" : "auto", padding: "8px 20px", fontSize: 13 }}>
          {sorting ? "Sorting..." : "▶ Run Bubble Sort"}
        </GradientButton>
        <GradientButton secondary onClick={reset} style={{ padding: "8px 20px", fontSize: 13 }}>Reset</GradientButton>
      </div>
    </div>
  );
}

function QueueAnimation() {
  const [queue, setQueue] = useState([15, 28, 7]);
  const enqueue = () => {
    const v = Math.floor(Math.random() * 90 + 10);
    setQueue(p => p.length < 6 ? [...p, v] : p);
  };
  const dequeue = () => setQueue(p => p.slice(1));
  const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", "#ec4899"];

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 12, minHeight: 60 }}>
        <div style={{ fontSize: 11, color: "#ef4444", marginRight: 8, fontWeight: 600 }}>FRONT →</div>
        <div style={{ display: "flex", gap: 4 }}>
          {queue.length === 0 ? (
            <div style={{ padding: "12px 24px", border: "1px dashed rgba(255,255,255,0.2)", borderRadius: 8, color: "rgba(255,255,255,0.3)", fontSize: 13 }}>Empty Queue</div>
          ) : queue.map((v, i) => (
            <div key={i} style={{
              background: colors[i % 6] + "33", border: "1px solid " + colors[i % 6] + "66",
              borderRadius: 8, padding: "10px 18px", fontSize: 16, fontWeight: 700, color: colors[i % 6],
              transition: "all 0.3s",
            }}>{v}</div>
          ))}
        </div>
        <div style={{ fontSize: 11, color: "#10b981", marginLeft: 8, fontWeight: 600 }}>← REAR</div>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={enqueue} style={{ background: "rgba(16,185,129,0.2)", border: "1px solid #10b981", color: "#34d399", borderRadius: 8, padding: "6px 16px", cursor: "pointer", fontSize: 13 }}>ENQUEUE</button>
        <button onClick={dequeue} disabled={queue.length === 0} style={{ background: "rgba(239,68,68,0.2)", border: "1px solid #ef4444", color: "#f87171", borderRadius: 8, padding: "6px 16px", cursor: queue.length ? "pointer" : "not-allowed", fontSize: 13, opacity: queue.length ? 1 : 0.4 }}>DEQUEUE</button>
      </div>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 12 }}>FIFO — First In, First Out. Dequeue removes from front; Enqueue adds to rear.</p>
    </div>
  );
}

function BinarySearchAnim() {
  const arr = [2, 5, 8, 12, 16, 23, 38, 42, 55, 72];
  const [target, setTarget] = useState(23);
  const [low, setLow] = useState(-1);
  const [high, setHigh] = useState(-1);
  const [mid, setMid] = useState(-1);
  const [found, setFound] = useState(-1);
  const [searching, setSearching] = useState(false);

  const search = async () => {
    setSearching(true); setFound(-1);
    let l = 0, h = arr.length - 1;
    while (l <= h) {
      const m = Math.floor((l + h) / 2);
      setLow(l); setHigh(h); setMid(m);
      await new Promise(r => setTimeout(r, 800));
      if (arr[m] === target) { setFound(m); break; }
      else if (arr[m] < target) l = m + 1;
      else h = m - 1;
    }
    setSearching(false);
  };

  const reset = () => { setLow(-1); setHigh(-1); setMid(-1); setFound(-1); };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
        {arr.map((v, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
              {i === low && "L"}{i === high && "H"}{i === mid && "M"}
            </div>
            <div style={{
              width: 40, height: 40, borderRadius: 8,
              background: found === i ? "#10b98133" : mid === i ? "#f59e0b33" : (i >= low && i <= high && low !== -1) ? "#3b82f633" : "rgba(255,255,255,0.06)",
              border: `1px solid ${found === i ? "#10b981" : mid === i ? "#f59e0b" : (i >= low && i <= high && low !== -1) ? "#3b82f6" : "rgba(255,255,255,0.1)"}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 600,
              color: found === i ? "#34d399" : mid === i ? "#fbbf24" : (i >= low && i <= high && low !== -1) ? "#60a5fa" : "rgba(255,255,255,0.5)",
              transition: "all 0.3s",
            }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Target:</span>
        <select value={target} onChange={e => { setTarget(Number(e.target.value)); reset(); }} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", borderRadius: 8, padding: "4px 10px", fontSize: 13 }}>
          {arr.map(v => <option key={v} value={v} style={{ background: "#1e1e2e" }}>{v}</option>)}
        </select>
        <GradientButton onClick={search} style={{ padding: "6px 16px", fontSize: 13, opacity: searching ? 0.5 : 1, pointerEvents: searching ? "none" : "auto" }}>Search</GradientButton>
        <GradientButton secondary onClick={reset} style={{ padding: "6px 16px", fontSize: 13 }}>Reset</GradientButton>
      </div>
      {found !== -1 && <div style={{ color: "#34d399", fontSize: 14 }}>✅ Found {target} at index {found}!</div>}
    </div>
  );
}

function PlaygroundPage() {
  const [activeDemo, setActiveDemo] = useState("sorting");
  const demos = [
    { id: "sorting", label: "Bubble Sort", icon: "📊" },
    { id: "queue", label: "Queue Ops", icon: "🚶" },
    { id: "binary", label: "Binary Search", icon: "🔍" },
    { id: "stack", label: "Stack", icon: "📚" },
    { id: "linked", label: "Linked List", icon: "🔗" },
  ];

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 12 }}>Visual Playground</h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16 }}>Interact with data structures and algorithms in real time</p>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 36, flexWrap: "wrap" }}>
        {demos.map(d => (
          <button key={d.id} onClick={() => setActiveDemo(d.id)} style={{
            background: activeDemo === d.id ? "linear-gradient(135deg,#3b82f6,#8b5cf6)" : "rgba(255,255,255,0.06)",
            border: "1px solid " + (activeDemo === d.id ? "transparent" : "rgba(255,255,255,0.1)"),
            color: "#fff", borderRadius: 10, padding: "10px 20px", fontSize: 14, cursor: "pointer", display: "flex", gap: 8, alignItems: "center",
          }}>{d.icon} {d.label}</button>
        ))}
      </div>

      <GlassCard style={{ padding: 32 }}>
        {activeDemo === "sorting" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>📊 Bubble Sort Visualization</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 24 }}>Watch elements compare and swap in real time. Red = currently comparing, Green = sorted.</p>
            <SortingAnimation />
          </div>
        )}
        {activeDemo === "queue" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>🚶 Queue Operations</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 24 }}>FIFO — elements join from the rear, leave from the front.</p>
            <QueueAnimation />
          </div>
        )}
        {activeDemo === "binary" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>🔍 Binary Search Animation</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 24 }}>Pick a target and watch it eliminate half the array each step. L=Low, H=High, M=Mid.</p>
            <BinarySearchAnim />
          </div>
        )}
        {activeDemo === "stack" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>📚 Stack: LIFO</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 24 }}>Push adds to top, Pop removes from top.</p>
            <StackSVG />
          </div>
        )}
        {activeDemo === "linked" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>🔗 Linked List Construction</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 24 }}>Step through how a linked list is built node by node, each pointing to the next.</p>
            <LinkedListSVG />
          </div>
        )}
      </GlassCard>

      {/* Complexity reference */}
      <GlassCard style={{ padding: 24, marginTop: 20 }}>
        <h3 style={{ color: "#a78bfa", fontWeight: 600, marginBottom: 16, fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>⏱ Time Complexity Reference</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 12 }}>
          {[
            { name: "Bubble Sort", best: "O(n)", avg: "O(n²)", worst: "O(n²)" },
            { name: "Binary Search", best: "O(1)", avg: "O(log n)", worst: "O(log n)" },
            { name: "Stack Push", best: "O(1)", avg: "O(1)", worst: "O(1)" },
            { name: "Queue Enqueue", best: "O(1)", avg: "O(1)", worst: "O(1)" },
          ].map((item, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: 14, border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 8 }}>{item.name}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Best: <span style={{ color: "#10b981" }}>{item.best}</span></div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Avg: <span style={{ color: "#f59e0b" }}>{item.avg}</span></div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Worst: <span style={{ color: "#ef4444" }}>{item.worst}</span></div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

// ─── PRACTICE PAGE ────────────────────────────────────────────────────────────

function PracticePage() {
  const [filter, setFilter] = useState("All");
  const [showHint, setShowHint] = useState({});
  const [showSolution, setShowSolution] = useState({});

  const filtered = filter === "All" ? PRACTICE_PROBLEMS : PRACTICE_PROBLEMS.filter(p => p.difficulty === filter);
  const colors = { Easy: "#10b981", Medium: "#f59e0b", Hard: "#ef4444" };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 12 }}>Practice Problems</h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16 }}>Strengthen your skills with curated problems</p>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 36 }}>
        {["All", "Easy", "Medium", "Hard"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            background: filter === f ? (colors[f] || "linear-gradient(135deg,#3b82f6,#8b5cf6)") + (colors[f] ? "22" : "") : "rgba(255,255,255,0.06)",
            border: "1px solid " + (filter === f ? (colors[f] || "#8b5cf6") : "rgba(255,255,255,0.1)"),
            color: filter === f ? (colors[f] || "#a78bfa") : "rgba(255,255,255,0.6)",
            borderRadius: 10, padding: "8px 20px", fontSize: 13, fontWeight: 500, cursor: "pointer",
          }}>{f}</button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {filtered.map((p, i) => (
          <GlassCard key={i} style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", margin: 0 }}>{p.title}</h3>
                <Badge color={colors[p.difficulty]}>{p.difficulty}</Badge>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "#f59e0b", fontWeight: 600 }}>+{p.xp} XP</span>
              </div>
            </div>

            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
              {p.tags.map((t, j) => (
                <span key={j} style={{ background: "rgba(139,92,246,0.15)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 6, padding: "2px 10px", fontSize: 12 }}>{t}</span>
              ))}
            </div>

            {showHint[i] && (
              <div style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 10, padding: 14, marginBottom: 12 }}>
                <span style={{ color: "#fbbf24", fontSize: 13 }}>💡 Hint: {p.hint}</span>
              </div>
            )}

            {showSolution[i] && (
              <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 10, padding: 16, marginBottom: 12, fontFamily: "monospace", fontSize: 12, color: "#34d399", lineHeight: 1.7 }}>
                {`// Solution approach: ${p.hint}\n// Time: O(n), Space: O(1)\nvoid solve() {\n  // Implementation based on hint\n}`}
              </div>
            )}

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setShowHint(h => ({ ...h, [i]: !h[i] }))} style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)", color: "#fbbf24", borderRadius: 8, padding: "6px 14px", fontSize: 13, cursor: "pointer" }}>
                {showHint[i] ? "Hide Hint" : "💡 Hint"}
              </button>
              <button onClick={() => setShowSolution(s => ({ ...s, [i]: !s[i] }))} style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", color: "#34d399", borderRadius: 8, padding: "6px 14px", fontSize: 13, cursor: "pointer" }}>
                {showSolution[i] ? "Hide" : "📖 Solution"}
              </button>
              <GradientButton style={{ padding: "6px 16px", fontSize: 13 }}>Solve →</GradientButton>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

// ─── MINI QUIZ (reusable) ─────────────────────────────────────────────────────

function MiniQuiz() {
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = QUIZ_QUESTIONS[qIdx];

  const answer = (i) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.ans) setScore(s => s + 1);
  };

  const next = () => {
    if (qIdx + 1 >= QUIZ_QUESTIONS.length) { setDone(true); return; }
    setQIdx(i => i + 1);
    setSelected(null);
  };

  const restart = () => { setQIdx(0); setSelected(null); setScore(0); setDone(false); };

  if (done) {
    const pct = Math.round((score / QUIZ_QUESTIONS.length) * 100);
    return (
      <GlassCard style={{ padding: 40, textAlign: "center" }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>{pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚"}</div>
        <div style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 8 }}>{score}/{QUIZ_QUESTIONS.length}</div>
        <div style={{ fontSize: 24, fontWeight: 700, color: pct >= 80 ? "#10b981" : pct >= 60 ? "#f59e0b" : "#ef4444", marginBottom: 8 }}>{pct}%</div>
        <div style={{ color: "rgba(255,255,255,0.5)", marginBottom: 28 }}>{pct >= 80 ? "Excellent! You've mastered this." : pct >= 60 ? "Good job! Keep practicing." : "Keep studying and try again!"}</div>
        <GradientButton onClick={restart}>Try Again</GradientButton>
      </GlassCard>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
        <span>Question {qIdx + 1} of {QUIZ_QUESTIONS.length}</span>
        <span>Score: {score}</span>
      </div>
      <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2, marginBottom: 28 }}>
        <div style={{ height: "100%", width: ((qIdx + 1) / QUIZ_QUESTIONS.length * 100) + "%", background: "linear-gradient(90deg,#3b82f6,#8b5cf6)", borderRadius: 2, transition: "width 0.3s" }} />
      </div>

      <GlassCard style={{ padding: 24, marginBottom: 20 }}>
        <p style={{ fontSize: 17, fontWeight: 600, color: "#fff", lineHeight: 1.6 }}>{q.q}</p>
      </GlassCard>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
        {q.options.map((opt, i) => {
          const isCorrect = i === q.ans;
          const isSelected = i === selected;
          let bg = "rgba(255,255,255,0.04)";
          let border = "rgba(255,255,255,0.1)";
          let color = "rgba(255,255,255,0.8)";
          if (selected !== null) {
            if (isCorrect) { bg = "rgba(16,185,129,0.15)"; border = "#10b981"; color = "#34d399"; }
            else if (isSelected) { bg = "rgba(239,68,68,0.15)"; border = "#ef4444"; color = "#f87171"; }
          }
          return (
            <button key={i} onClick={() => answer(i)} style={{
              background: bg, border: `1px solid ${border}`, borderRadius: 10,
              padding: "14px 20px", textAlign: "left", cursor: selected !== null ? "default" : "pointer",
              color, fontSize: 14, fontWeight: 500, transition: "all 0.2s",
              display: "flex", gap: 12, alignItems: "center",
            }}>
              <span style={{ width: 26, height: 26, borderRadius: "50%", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>
                {selected !== null && isCorrect ? "✓" : selected !== null && isSelected ? "✗" : String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div>
          <div style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 10, padding: 16, marginBottom: 16 }}>
            <span style={{ fontSize: 12, color: "#60a5fa", fontWeight: 600, display: "block", marginBottom: 4 }}>EXPLANATION</span>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{q.exp}</p>
          </div>
          <GradientButton onClick={next}>{qIdx + 1 < QUIZ_QUESTIONS.length ? "Next Question →" : "See Results"}</GradientButton>
        </div>
      )}
    </div>
  );
}

// ─── QUIZ PAGE ────────────────────────────────────────────────────────────────

function QuizPage() {
  const [difficulty, setDifficulty] = useState("Mixed");

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 12 }}>Quiz Center</h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16 }}>Test your knowledge with instant feedback and explanations</p>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 36 }}>
        {["Easy", "Mixed", "Hard"].map(d => (
          <button key={d} onClick={() => setDifficulty(d)} style={{
            background: difficulty === d ? "linear-gradient(135deg,#3b82f6,#8b5cf6)" : "rgba(255,255,255,0.06)",
            border: "1px solid " + (difficulty === d ? "transparent" : "rgba(255,255,255,0.1)"),
            color: "#fff", borderRadius: 10, padding: "8px 20px", fontSize: 13, cursor: "pointer",
          }}>{d}</button>
        ))}
      </div>

      <MiniQuiz />
    </div>
  );
}

// ─── DASHBOARD PAGE ───────────────────────────────────────────────────────────

function DashboardPage() {
  const badges = [
    { icon: "🔥", name: "7-Day Streak", desc: "Active 7 days in a row" },
    { icon: "🌟", name: "First Lesson", desc: "Completed your first lesson" },
    { icon: "⚡", name: "Speed Learner", desc: "Finished 3 lessons in one day" },
    { icon: "🧠", name: "Quiz Master", desc: "Scored 100% on a quiz" },
  ];

  const weakTopics = ["Dynamic Programming", "Graph Algorithms", "Pointers & Memory"];
  const recommended = ["Binary Trees Deep Dive", "Recursion Mastery", "Hash Tables Explained"];
  const progress = [
    { subject: "Data Structures", pct: 72, color: "#3b82f6" },
    { subject: "C Programming", pct: 90, color: "#10b981" },
    { subject: "Algorithms", pct: 45, color: "#8b5cf6" },
    { subject: "Python", pct: 60, color: "#06b6d4" },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 6 }}>Welcome back, Hriday! 👋</h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16 }}>Here's your learning overview</p>
      </div>

      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 16, marginBottom: 32 }}>
        {[
          { icon: "📖", label: "Lessons Done", value: "24", color: "#3b82f6" },
          { icon: "⭐", label: "XP Points", value: "2,840", color: "#f59e0b" },
          { icon: "🔥", label: "Daily Streak", value: "7", color: "#ef4444" },
          { icon: "🏆", label: "Badges Earned", value: "4", color: "#8b5cf6" },
        ].map((s, i) => (
          <GlassCard key={i} style={{ padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: 26, fontWeight: 900, color: s.color, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
          </GlassCard>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
        {/* Progress */}
        <GlassCard style={{ padding: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>📊 Subject Progress</h3>
          {progress.map((p, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>{p.subject}</span>
                <span style={{ color: p.color, fontWeight: 600 }}>{p.pct}%</span>
              </div>
              <div style={{ height: 6, background: "rgba(255,255,255,0.07)", borderRadius: 3 }}>
                <div style={{ height: "100%", width: p.pct + "%", background: `linear-gradient(90deg, ${p.color}, ${p.color}88)`, borderRadius: 3, transition: "width 1s ease" }} />
              </div>
            </div>
          ))}
        </GlassCard>

        {/* Badges */}
        <GlassCard style={{ padding: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>🏅 Badges Earned</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {badges.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "8px 12px", background: "rgba(255,255,255,0.04)", borderRadius: 10 }}>
                <div style={{ fontSize: 24 }}>{b.icon}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{b.name}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Weak Topics */}
        <GlassCard style={{ padding: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 16 }}>⚠️ Weak Topics to Revisit</h3>
          {weakTopics.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 0", borderBottom: i < weakTopics.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <span style={{ fontSize: 16, color: "#ef4444" }}>○</span>
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>{t}</span>
            </div>
          ))}
        </GlassCard>

        {/* Recommended */}
        <GlassCard style={{ padding: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 16 }}>✨ Recommended for You</h3>
          {recommended.map((r, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 0", borderBottom: i < recommended.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", cursor: "pointer" }}>
              <span style={{ fontSize: 16, color: "#3b82f6" }}>→</span>
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>{r}</span>
            </div>
          ))}
        </GlassCard>
      </div>
    </div>
  );
}

// ─── PROFILE PAGE ─────────────────────────────────────────────────────────────

function ProfilePage() {
  const skills = [
    { name: "C Programming", level: 90 },
    { name: "Data Structures", level: 72 },
    { name: "Algorithms", level: 45 },
    { name: "Python", level: 60 },
    { name: "JavaScript", level: 55 },
  ];

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px" }}>
      <GlassCard style={{ padding: 32, marginBottom: 24, background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))" }}>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28, fontWeight: 900, color: "#fff", flexShrink: 0,
          }}>H</div>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 4 }}>Hriday</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 12 }}>B.Tech CSE · Vignan's Institute · Visakhapatnam</p>
            <div style={{ display: "flex", gap: 10 }}>
              <Badge color="#f59e0b">⭐ 2,840 XP</Badge>
              <Badge color="#10b981">🔥 7-Day Streak</Badge>
              <Badge color="#3b82f6">24 Lessons</Badge>
            </div>
          </div>
        </div>
      </GlassCard>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Skills */}
        <GlassCard style={{ padding: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>💪 Skill Levels</h3>
          {skills.map((s, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>{s.name}</span>
                <span style={{ color: "#a78bfa", fontWeight: 600 }}>{s.level}%</span>
              </div>
              <div style={{ height: 5, background: "rgba(255,255,255,0.07)", borderRadius: 3 }}>
                <div style={{ height: "100%", width: s.level + "%", background: "linear-gradient(90deg,#3b82f6,#8b5cf6)", borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </GlassCard>

        {/* Activity */}
        <GlassCard style={{ padding: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>📅 Recent Activity</h3>
          {[
            { action: "Completed Linked Lists", time: "Today", icon: "✅" },
            { action: "Scored 100% on Stack Quiz", time: "Yesterday", icon: "🏆" },
            { action: "Started Algorithms", time: "2 days ago", icon: "📖" },
            { action: "Earned Speed Learner badge", time: "3 days ago", icon: "⚡" },
            { action: "Finished C Arrays chapter", time: "1 week ago", icon: "✅" },
          ].map((a, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "8px 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
              <span style={{ fontSize: 16 }}>{a.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{a.action}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{a.time}</div>
              </div>
            </div>
          ))}
        </GlassCard>
      </div>

      {/* Settings */}
      <GlassCard style={{ padding: 24, marginTop: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>⚙️ Preferences</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { label: "Daily reminder notifications", on: true },
            { label: "Show difficulty badges on lessons", on: true },
            { label: "Auto-play animations", on: false },
          ].map((pref, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>{pref.label}</span>
              <div style={{
                width: 42, height: 22, borderRadius: 11,
                background: pref.on ? "linear-gradient(90deg,#3b82f6,#8b5cf6)" : "rgba(255,255,255,0.1)",
                cursor: "pointer", position: "relative", transition: "background 0.2s",
              }}>
                <div style={{ position: "absolute", top: 3, left: pref.on ? 22 : 3, width: 16, height: 16, borderRadius: "50%", background: "#fff", transition: "left 0.2s" }} />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #080a14; color: #fff; font-family: 'Inter', sans-serif; min-height: 100vh; }
  @keyframes float1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-40px) scale(1.05); } }
  @keyframes float2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-20px,30px) scale(0.95); } }
  @keyframes float3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(20px,-20px) scale(1.08); } }
  ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #080a14; } ::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.3); border-radius: 3px; }
`;

// ─── APP ROOT ─────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = globalCSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage setPage={setPage} />;
      case "subjects": return <SubjectsPage setPage={setPage} setSelectedSubject={setSelectedSubject} />;
      case "lesson": return <LessonPage subject={selectedSubject} setPage={setPage} />;
      case "roadmap": return <RoadmapPage />;
      case "playground": return <PlaygroundPage />;
      case "practice": return <PracticePage />;
      case "quiz": return <QuizPage />;
      case "dashboard": return <DashboardPage />;
      case "profile": return <ProfilePage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#080a14" }}>
      <Navbar page={page} setPage={setPage} />
      <main>{renderPage()}</main>
    </div>
  );
}
