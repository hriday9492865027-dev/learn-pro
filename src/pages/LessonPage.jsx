import React, { useState } from "react";
import Badge from "../components/UI/Badge";
import GlassCard from "../components/UI/GlassCard";
import GradientButton from "../components/UI/GradientButton";
import LinkedListSVG from "../components/Animations/LinkedListSVG";
import StackSVG from "../components/Animations/StackSVG";
import MiniQuiz from "../components/MiniQuiz";

export default function LessonPage({ subject, setPage }) {
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
