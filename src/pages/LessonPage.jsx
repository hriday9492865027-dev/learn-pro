import React, { useState, useEffect } from "react";
import Badge from "../components/UI/Badge";
import GlassCard from "../components/UI/GlassCard";
import GradientButton from "../components/UI/GradientButton";
import MiniQuiz from "../components/MiniQuiz";

export default function LessonPage({ subject, setPage }) {
  if (!subject) return null;
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [activeSection, setActiveSection] = useState("intro");

  const sections = ["intro", "diagram", "code", "quiz"];

  // Reset selected topic when subject changes
  useEffect(() => {
    setSelectedTopic(null);
    setActiveSection("intro");
  }, [subject.id]);

  // Diagram Component Loader for C syllabus & other subjects
  const renderDiagram = (type) => {
    switch (type) {
      case "c_intro":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 500 130" style={{ width: "100%", maxWidth: 500, display: "block", margin: "0 auto" }}>
              <g>
                <rect x="5" y="45" width="70" height="40" rx="6" fill="#3b82f622" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="40" y="65" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">Source (.c)</text>
              </g>
              <line x1="75" y1="65" x2="95" y2="65" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" markerEnd="url(#arr-ci)" />
              <g>
                <rect x="100" y="45" width="80" height="40" rx="6" fill="#8b5cf622" stroke="#8b5cf6" strokeWidth="1.5" />
                <text x="140" y="65" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="bold">Preprocessor</text>
              </g>
              <line x1="180" y1="65" x2="200" y2="65" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" markerEnd="url(#arr-ci)" />
              <g>
                <rect x="205" y="45" width="70" height="40" rx="6" fill="#06b6d422" stroke="#06b6d4" strokeWidth="1.5" />
                <text x="240" y="65" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="bold">Compiler (.s)</text>
              </g>
              <line x1="275" y1="65" x2="295" y2="65" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" markerEnd="url(#arr-ci)" />
              <g>
                <rect x="300" y="45" width="75" height="40" rx="6" fill="#10b98122" stroke="#10b981" strokeWidth="1.5" />
                <text x="337" y="65" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Assembler (.o)</text>
              </g>
              <line x1="375" y1="65" x2="395" y2="65" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" markerEnd="url(#arr-ci)" />
              <g>
                <rect x="400" y="45" width="95" height="40" rx="6" fill="#f59e0b22" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="447" y="65" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Linker → Executable</text>
              </g>
              <defs>
                <marker id="arr-ci" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.4)" />
                </marker>
              </defs>
            </svg>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, textAlign: "center", marginTop: 12 }}>
              The C build pipeline parses macros, translates C syntax to assembly instructions, outputs binary machine code, and links dynamic code together.
            </p>
          </div>
        );
      case "variables":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 400 120" style={{ width: "100%", maxWidth: 400, display: "block", margin: "0 auto" }}>
              {/* int box */}
              <g>
                <rect x="10" y="20" width="100" height="50" rx="8" fill="#3b82f622" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="60" y="52" textAnchor="middle" fill="#3b82f6" fontSize="13" fontWeight="bold">age</text>
                <text x="60" y="92" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">Type: int (4B)</text>
                <text x="60" y="42" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">Value: 22</text>
              </g>
              {/* float box */}
              <g>
                <rect x="150" y="20" width="100" height="50" rx="8" fill="#10b98122" stroke="#10b981" strokeWidth="1.5" />
                <text x="200" y="52" textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="bold">height</text>
                <text x="200" y="92" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">Type: float (4B)</text>
                <text x="200" y="42" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">Value: 5.9</text>
              </g>
              {/* char box */}
              <g>
                <rect x="290" y="20" width="100" height="50" rx="8" fill="#ec489922" stroke="#ec4899" strokeWidth="1.5" />
                <text x="340" y="52" textAnchor="middle" fill="#ec4899" fontSize="13" fontWeight="bold">grade</text>
                <text x="340" y="92" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">Type: char (1B)</text>
                <text x="340" y="42" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">Value: 'A'</text>
              </g>
            </svg>
          </div>
        );
      case "operators":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 400 120" style={{ width: "100%", maxWidth: 400, display: "block", margin: "0 auto" }}>
              {/* Left shift block */}
              <g>
                <rect x="10" y="20" width="160" height="80" rx="6" fill="#3b82f622" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="90" y="45" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">Bitwise Shift: 5 &lt;&lt; 1</text>
                <text x="90" y="65" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11">Binary: 0101 --&gt; 1010</text>
                <text x="90" y="85" textAnchor="middle" fill="#60a5fa" fontSize="11">Result: 10</text>
              </g>
              {/* Cast block */}
              <g>
                <rect x="230" y="20" width="160" height="80" rx="6" fill="#8b5cf622" stroke="#8b5cf6" strokeWidth="1.5" />
                <text x="310" y="45" textAnchor="middle" fill="#a78bfa" fontSize="12" fontWeight="bold">Casting: (float)5 / 2</text>
                <text x="310" y="65" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11">5 is promoted to 5.0f</text>
                <text x="310" y="85" textAnchor="middle" fill="#c084fc" fontSize="11">Result: 2.5 (keeps decimal)</text>
              </g>
            </svg>
          </div>
        );
      case "control_flow":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 400 140" style={{ width: "100%", maxWidth: 400, display: "block", margin: "0 auto" }}>
              {/* Decision Diamond */}
              <g>
                <polygon points="200,10 260,40 200,70 140,40" fill="#f59e0b22" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="200" y="44" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">Condition Check</text>
              </g>
              {/* Yes path */}
              <line x1="260" y1="40" x2="310" y2="40" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arr-cf)" />
              <line x1="310" y1="40" x2="310" y2="90" stroke="#10b981" strokeWidth="1.5" />
              <g>
                <rect x="270" y="90" width="80" height="35" rx="4" fill="#10b98122" stroke="#10b981" strokeWidth="1" />
                <text x="310" y="112" textAnchor="middle" fill="#34d399" fontSize="10">Execute 'If' block</text>
              </g>
              <text x="280" y="32" fill="#34d399" fontSize="9" fontWeight="bold">TRUE</text>
              {/* No path */}
              <line x1="140" y1="40" x2="90" y2="40" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arr-cf)" />
              <line x1="90" y1="40" x2="90" y2="90" stroke="#ef4444" strokeWidth="1.5" />
              <g>
                <rect x="50" y="90" width="80" height="35" rx="4" fill="#ef444422" stroke="#ef4444" strokeWidth="1" />
                <text x="90" y="112" textAnchor="middle" fill="#f87171" fontSize="10">Execute 'Else' block</text>
              </g>
              <text x="105" y="32" fill="#f87171" fontSize="9" fontWeight="bold">FALSE</text>
              <defs>
                <marker id="arr-cf" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.4)" />
                </marker>
              </defs>
            </svg>
          </div>
        );
      case "io_buffer":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 450 120" style={{ width: "100%", maxWidth: 450, display: "block", margin: "0 auto" }}>
              <text x="10" y="20" fill="rgba(255,255,255,0.5)" fontSize="10">User Typing on Keyboard</text>
              {/* Stream queue */}
              <g>
                <rect x="10" y="30" width="220" height="50" rx="6" fill="#1e1e2e" stroke="rgba(255,255,255,0.15)" />
                <line x1="10" y1="30" x2="10" y2="80" stroke="none" />
                <text x="20" y="60" fill="#a78bfa" fontSize="14" fontWeight="bold">'H'</text>
                <text x="60" y="60" fill="#a78bfa" fontSize="14" fontWeight="bold">'e'</text>
                <text x="100" y="60" fill="#a78bfa" fontSize="14" fontWeight="bold">'l'</text>
                <text x="140" y="60" fill="#a78bfa" fontSize="14" fontWeight="bold">'l'</text>
                <text x="180" y="60" fill="#a78bfa" fontSize="14" fontWeight="bold">'o'</text>
                <text x="210" y="60" fill="#ec4899" fontSize="12" fontWeight="bold">'\n'</text>
              </g>
              <text x="110" y="95" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">Input Buffer (stdin)</text>
              {/* Arrow read */}
              <line x1="240" y1="55" x2="280" y2="55" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arr-io)" />
              {/* fgets reads */}
              <g>
                <rect x="295" y="30" width="140" height="50" rx="6" fill="#10b98122" stroke="#10b981" strokeWidth="1.5" />
                <text x="365" y="52" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">fgets(buffer, 20)</text>
                <text x="365" y="68" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9">Reads "Hello\n" safely</text>
              </g>
              <defs>
                <marker id="arr-io" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#10b981" />
                </marker>
              </defs>
            </svg>
          </div>
        );
      case "call_stack":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 380 150" style={{ width: "100%", maxWidth: 380, display: "block", margin: "0 auto" }}>
              {/* Stack top */}
              <g>
                <rect x="40" y="10" width="300" height="50" rx="4" fill="#8b5cf622" stroke="#8b5cf6" strokeWidth="1.5" />
                <text x="190" y="32" textAnchor="middle" fill="#a78bfa" fontSize="12" fontWeight="bold">Frame: swap(&a, &b)</text>
                <text x="190" y="48" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">x = 0x3a2c, y = 0x3a30</text>
              </g>
              {/* Stack main */}
              <g>
                <rect x="40" y="70" width="300" height="50" rx="4" fill="#3b82f622" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="190" y="92" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="bold">Frame: main()</text>
                <text x="190" y="108" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">Local variables: a=10, b=20</text>
              </g>
              <text x="190" y="140" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="10">Stack Memory (LIFO order)</text>
            </svg>
          </div>
        );
      case "array_memory":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 420 120" style={{ width: "100%", maxWidth: 420, display: "block", margin: "0 auto" }}>
              {/* Contiguous elements */}
              {[
                { val: "10", addr: "0x1000", idx: "0" },
                { val: "20", addr: "0x1004", idx: "1" },
                { val: "30", addr: "0x1008", idx: "2" },
                { val: "'H'", addr: "0x100c", idx: "str[0]", c: "#ec4899" },
                { val: "'e'", addr: "0x100d", idx: "str[1]", c: "#ec4899" },
                { val: "'\\0'", addr: "0x100e", idx: "str[2]", c: "#ef4444" },
              ].map((cell, i) => (
                <g key={i}>
                  <rect x={i * 65 + 15} y="30" width="60" height="50" rx="4" fill={(cell.c || "#3b82f6") + "22"} stroke={cell.c || "#3b82f6"} strokeWidth="1.2" />
                  <text x={i * 65 + 45} y="55" textAnchor="middle" fill={cell.c || "#60a5fa"} fontSize={13} fontWeight="bold">{cell.val}</text>
                  <text x={i * 65 + 45} y="72" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="9">{cell.addr}</text>
                  <text x={i * 65 + 45} y="98" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">[{cell.idx}]</text>
                </g>
              ))}
            </svg>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, textAlign: "center", marginTop: 12 }}>
              Elements are aligned side-by-side in memory. Integers increment by 4 bytes, while characters increment by 1 byte.
            </p>
          </div>
        );
      case "pointers":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 400 130" style={{ width: "100%", maxWidth: 400, display: "block", margin: "0 auto" }}>
              {/* Pointer ptr */}
              <g>
                <rect x="20" y="30" width="100" height="50" rx="6" fill="#8b5cf622" stroke="#8b5cf6" strokeWidth="1.5" />
                <text x="70" y="58" textAnchor="middle" fill="#8b5cf6" fontSize="13" fontWeight="bold">ptr (int*)</text>
                <text x="70" y="98" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">Addr: 0x7ffd</text>
                <text x="70" y="45" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">Value: 0x3a2c</text>
              </g>
              {/* Arrow */}
              <line x1="125" y1="55" x2="235" y2="55" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#arr-pt)" />
              {/* Variable x */}
              <g>
                <rect x="250" y="30" width="100" height="50" rx="6" fill="#3b82f622" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="300" y="58" textAnchor="middle" fill="#3b82f6" fontSize="13" fontWeight="bold">x (int)</text>
                <text x="300" y="98" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">Addr: 0x3a2c</text>
                <text x="300" y="45" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">Value: 100</text>
              </g>
              <defs>
                <marker id="arr-pt" markerWidth={8} markerHeight={8} refX={4} refY={4} orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#a78bfa" />
                </marker>
              </defs>
            </svg>
          </div>
        );
      case "structures":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 450 140" style={{ width: "100%", maxWidth: 450, display: "block", margin: "0 auto" }}>
              {/* Struct block */}
              <g>
                <rect x="10" y="20" width="180" height="80" rx="6" fill="#3b82f622" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="100" y="40" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">struct Employee (8 Bytes)</text>
                <rect x="20" y="50" width="75" height="35" rx="3" fill="#3b82f611" stroke="#3b82f655" />
                <text x="57" y="72" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">id (4B)</text>
                <rect x="105" y="50" width="75" height="35" rx="3" fill="#10b98111" stroke="#10b98155" />
                <text x="142" y="72" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">salary (4B)</text>
              </g>
              <text x="100" y="120" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">Members occupy separate spaces</text>
              {/* Union block */}
              <g>
                <rect x="250" y="20" width="180" height="80" rx="6" fill="#eab30822" stroke="#eab308" strokeWidth="1.5" />
                <text x="340" y="40" textAnchor="middle" fill="#eab308" fontSize="12" fontWeight="bold">union Data (4 Bytes)</text>
                <rect x="260" y="50" width="160" height="35" rx="3" fill="#eab30811" stroke="#eab30855" />
                <text x="340" y="68" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">id / salary (Shared 4B)</text>
              </g>
              <text x="340" y="120" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">Members share same memory offset</text>
            </svg>
          </div>
        );
      case "heap_stack":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 400 150" style={{ width: "100%", maxWidth: 400, display: "block", margin: "0 auto" }}>
              <rect x="50" y="10" width="300" height="110" rx="6" fill="#1e1e2e" stroke="rgba(255,255,255,0.15)" />
              {/* Stack */}
              <g>
                <rect x="60" y="20" width="280" height="25" rx="3" fill="#ef444422" stroke="#ef4444" strokeWidth="1" />
                <text x="200" y="37" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="bold">Stack: Local function parameters (downward)</text>
              </g>
              {/* Free Space */}
              <text x="200" y="65" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9">Unallocated RAM space</text>
              {/* Heap */}
              <g>
                <rect x="60" y="85" width="280" height="25" rx="3" fill="#10b98122" stroke="#10b981" strokeWidth="1" />
                <text x="200" y="102" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">Heap: Dynamic memory allocated at runtime (upward)</text>
              </g>
              <text x="200" y="140" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">C Process RAM Memory Layout</text>
            </svg>
          </div>
        );
      case "preprocessor":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 450 120" style={{ width: "100%", maxWidth: 450, display: "block", margin: "0 auto" }}>
              {/* Before */}
              <g>
                <rect x="10" y="20" width="160" height="80" rx="6" fill="#f59e0b22" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="90" y="40" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">Before: Source Code</text>
                <text x="20" y="65" fill="rgba(255,255,255,0.6)" fontSize="10">#define PI 3.1415</text>
                <text x="20" y="85" fill="rgba(255,255,255,0.6)" fontSize="10">area = PI * r * r;</text>
              </g>
              {/* Arrow preprocessor */}
              <line x1="180" y1="60" x2="250" y2="60" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arr-pp)" />
              {/* After */}
              <g>
                <rect x="260" y="20" width="180" height="80" rx="6" fill="#10b98122" stroke="#10b981" strokeWidth="1.5" />
                <text x="350" y="40" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">After Preprocessor</text>
                <text x="270" y="65" fill="rgba(255,255,255,0.4)" fontSize="10">// Macro line removed</text>
                <text x="270" y="85" fill="rgba(255,255,255,0.8)" fontSize="10">area = 3.1415 * r * r;</text>
              </g>
              <defs>
                <marker id="arr-pp" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" />
                </marker>
              </defs>
            </svg>
          </div>
        );
      case "file_io":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 430 120" style={{ width: "100%", maxWidth: 430, display: "block", margin: "0 auto" }}>
              {/* Program */}
              <g>
                <rect x="10" y="30" width="110" height="60" rx="6" fill="#3b82f622" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="65" y="60" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">C Program</text>
                <text x="65" y="75" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">RAM memory</text>
              </g>
              {/* Streams */}
              <path d="M 130 50 L 290 50" fill="none" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#arr-fl)" />
              <text x="210" y="42" textAnchor="middle" fill="#a78bfa" fontSize="10">fprintf() stream write</text>
              <path d="M 290 70 L 130 70" fill="none" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arr-fl-back)" />
              <text x="210" y="88" textAnchor="middle" fill="#60a5fa" fontSize="10">fscanf() stream read</text>
              {/* File on disk */}
              <g>
                <rect x="310" y="30" width="110" height="60" rx="6" fill="#10b98122" stroke="#10b981" strokeWidth="1.5" />
                <text x="365" y="60" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">data.txt</text>
                <text x="365" y="75" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">Storage Disk</text>
              </g>
              <defs>
                <marker id="arr-fl" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#a78bfa" />
                </marker>
                <marker id="arr-fl-back" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#60a5fa" />
                </marker>
              </defs>
            </svg>
          </div>
        );
      case "bit_mask":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 420 130" style={{ width: "100%", maxWidth: 420, display: "block", margin: "0 auto" }}>
              {/* Register */}
              <g>
                <text x="10" y="25" fill="rgba(255,255,255,0.5)" fontSize="10">8-Bit Register (val = 5)</text>
                {["0","0","0","0","0","1","0","1"].map((b, i) => (
                  <g key={i}>
                    <rect x={i * 30 + 10} y="32" width="26" height="26" fill="#3b82f615" stroke="#3b82f6" strokeWidth="1" />
                    <text x={i * 30 + 23} y="49" textAnchor="middle" fill="#60a5fa" fontSize="11" fontWeight="bold">{b}</text>
                  </g>
                ))}
              </g>
              {/* Mask */}
              <g>
                <text x="10" y="80" fill="rgba(255,255,255,0.5)" fontSize="10">Bitmask (1 &lt;&lt; 3)</text>
                {["0","0","0","0","1","0","0","0"].map((b, i) => (
                  <g key={i}>
                    <rect x={i * 30 + 10} y="87" width="26" height="26" fill="#8b5cf615" stroke="#8b5cf6" strokeWidth="1" />
                    <text x={i * 30 + 23} y="104" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">{b}</text>
                  </g>
                ))}
              </g>
            </svg>
          </div>
        );
      case "linked_list":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 420 100" style={{ width: "100%", maxWidth: 420, display: "block", margin: "0 auto" }}>
              {/* Node 1 */}
              <g>
                <rect x="10" y="25" width="100" height="50" rx="6" fill="#3b82f622" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="60" y="55" textAnchor="middle" fill="#3b82f6" fontSize="13" fontWeight="bold">Data: 10</text>
                <text x="60" y="90" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">Address: 0x10f2</text>
              </g>
              {/* Arrow */}
              <line x1="110" y1="50" x2="160" y2="50" stroke="#818cf8" strokeWidth="1.5" markerEnd="url(#arr-lk)" />
              {/* Node 2 */}
              <g>
                <rect x="175" y="25" width="100" height="50" rx="6" fill="#10b98122" stroke="#10b981" strokeWidth="1.5" />
                <text x="225" y="55" textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="bold">Data: 20</text>
                <text x="225" y="90" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">Address: 0x112b</text>
              </g>
              {/* Arrow */}
              <line x1="275" y1="50" x2="325" y2="50" stroke="#34d399" strokeWidth="1.5" markerEnd="url(#arr-lk)" />
              {/* Null block */}
              <g>
                <rect x="340" y="35" width="60" height="30" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
                <text x="370" y="54" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="11" fontWeight="bold">NULL</text>
              </g>
              <defs>
                <marker id="arr-lk" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.4)" />
                </marker>
              </defs>
            </svg>
          </div>
        );
      case "classes":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 450 140" style={{ width: "100%", maxWidth: 450, display: "block", margin: "0 auto" }}>
              {/* Class blueprint */}
              <g>
                <rect x="10" y="20" width="120" height="80" rx="6" fill="#6366f122" stroke="#6366f1" strokeWidth="1.5" />
                <text x="70" y="40" textAnchor="middle" fill="#6366f1" fontSize="13" fontWeight="bold">Class: Car</text>
                <line x1="10" y1="48" x2="130" y2="48" stroke="#6366f155" strokeWidth="1" />
                <text x="20" y="65" fill="rgba(255,255,255,0.5)" fontSize="10">- brand: string</text>
                <text x="20" y="85" fill="rgba(255,255,255,0.5)" fontSize="10">+ drive()</text>
              </g>
              {/* Arrow */}
              <line x1="140" y1="60" x2="235" y2="60" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arr-cls)" />
              {/* Object instantiation */}
              <g>
                <rect x="250" y="20" width="170" height="80" rx="6" fill="#10b98122" stroke="#10b981" strokeWidth="1.5" />
                <text x="335" y="40" textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="bold">Object: myCar</text>
                <line x1="250" y1="48" x2="420" y2="48" stroke="#10b98155" strokeWidth="1" />
                <text x="260" y="65" fill="rgba(255,255,255,0.6)" fontSize="10">brand = "Tesla"</text>
                <text x="260" y="85" fill="rgba(255,255,255,0.4)" fontSize="10">Memory: Stack Allocation</text>
              </g>
              <defs>
                <marker id="arr-cls" markerWidth={8} markerHeight={8} refX={4} refY={4} orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#818cf8" />
                </marker>
              </defs>
            </svg>
          </div>
        );
      case "templates":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 450 120" style={{ width: "100%", maxWidth: 450, display: "block", margin: "0 auto" }}>
              {/* Template */}
              <g>
                <rect x="10" y="20" width="130" height="50" rx="6" fill="#a78bfa22" stroke="#a78bfa" strokeWidth="1.5" />
                <text x="75" y="45" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">Template add&lt;T&gt;</text>
                <text x="75" y="60" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">T a, T b</text>
              </g>
              {/* Arrows */}
              <path d="M 150 35 Q 200 15 250 25" fill="none" stroke="#a78bfa" strokeWidth="1.5" markerEnd="url(#arr-tpl)" />
              <path d="M 150 55 Q 200 75 250 65" fill="none" stroke="#a78bfa" strokeWidth="1.5" markerEnd="url(#arr-tpl)" />
              {/* Generated int */}
              <g>
                <rect x="270" y="10" width="150" height="40" rx="4" fill="#3b82f622" stroke="#3b82f6" strokeWidth="1" />
                <text x="345" y="32" textAnchor="middle" fill="#3b82f6" fontSize="10">int add(int, int)</text>
              </g>
              {/* Generated float */}
              <g>
                <rect x="270" y="60" width="150" height="40" rx="4" fill="#06b6d422" stroke="#06b6d4" strokeWidth="1" />
                <text x="345" y="82" textAnchor="middle" fill="#06b6d4" fontSize="10">float add(float, float)</text>
              </g>
              <defs>
                <marker id="arr-tpl" markerWidth={8} markerHeight={8} refX={4} refY={4} orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#a78bfa" />
                </marker>
              </defs>
            </svg>
          </div>
        );
      case "python_collections":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 450 130" style={{ width: "100%", maxWidth: 450, display: "block", margin: "0 auto" }}>
              {/* List */}
              <g>
                <rect x="10" y="20" width="180" height="80" rx="6" fill="#10b98122" stroke="#10b981" strokeWidth="1.5" />
                <text x="100" y="40" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">List: fruits</text>
                <text x="30" y="65" fill="rgba(255,255,255,0.6)" fontSize="10">0: "apple"</text>
                <text x="30" y="85" fill="rgba(255,255,255,0.6)" fontSize="10">1: "banana"</text>
                <text x="105" y="85" fill="#34d399" fontSize="10">+ "cherry" (append)</text>
              </g>
              {/* Dictionary */}
              <g>
                <rect x="230" y="20" width="200" height="80" rx="6" fill="#eab30822" stroke="#eab308" strokeWidth="1.5" />
                <text x="330" y="40" textAnchor="middle" fill="#eab308" fontSize="12" fontWeight="bold">Dict: profile</text>
                <text x="250" y="65" fill="rgba(255,255,255,0.6)" fontSize="10">"name" ──&gt; "Hriday"</text>
                <text x="250" y="85" fill="rgba(255,255,255,0.6)" fontSize="10">"xp"   ──&gt; 2840</text>
              </g>
            </svg>
          </div>
        );
      case "java_jvm":
        return (
          <div style={{ padding: "10px 0" }}>
            <svg viewBox="0 0 450 120" style={{ width: "100%", maxWidth: 450, display: "block", margin: "0 auto" }}>
              {/* Java Source */}
              <g>
                <rect x="10" y="30" width="100" height="50" rx="6" fill="#f59e0b22" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="60" y="55" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">Main.java</text>
                <text x="60" y="70" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">Source Code</text>
              </g>
              {/* Arrow compiler */}
              <line x1="120" y1="55" x2="155" y2="55" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arr-jvm-1)" />
              {/* Bytecode */}
              <g>
                <rect x="170" y="30" width="100" height="50" rx="6" fill="#3b82f622" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="220" y="55" textAnchor="middle" fill="#60a5fa" fontSize="11" fontWeight="bold">Main.class</text>
                <text x="220" y="70" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">Bytecode</text>
              </g>
              {/* Arrow run */}
              <line x1="280" y1="55" x2="315" y2="55" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arr-jvm-1)" />
              {/* JVM runtime */}
              <g>
                <rect x="330" y="30" width="100" height="50" rx="6" fill="#10b98122" stroke="#10b981" strokeWidth="1.5" />
                <text x="380" y="55" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">JVM</text>
                <text x="380" y="70" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">Target System</text>
              </g>
              <defs>
                <marker id="arr-jvm-1" markerWidth={8} markerHeight={8} refX={4} refY={4} orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#f59e0b" />
                </marker>
              </defs>
            </svg>
          </div>
        );
      default:
        return (
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", padding: 20 }}>
            Visual concept diagram pending.
          </div>
        );
    }
  };

  if (!selectedTopic) {
    return (
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 32 }}>
          <div style={{ fontSize: 52 }}>{subject.icon}</div>
          <div>
            <h1 style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 8 }}>{subject.name}</h1>
            <div style={{ display: "flex", gap: 10 }}>
              <Badge color={subject.color}>{subject.level}</Badge>
              <Badge color="#06b6d4">{subject.topics?.length || 0} Topics</Badge>
            </div>
          </div>
        </div>

        <GlassCard style={{ padding: 24, marginBottom: 36 }}>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: 15 }}>
            {subject.desc} Select a topic below to begin your visual step-by-step learning journey.
          </p>
        </GlassCard>

        <h2 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 20 }}>Select a Topic</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginBottom: 40 }}>
          {subject.topics?.map((topic) => (
            <GlassCard key={topic.id} onClick={() => setSelectedTopic(topic)} style={{ padding: 24 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{topic.title}</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 16 }}>{topic.desc}</p>
              <span style={{ color: subject.color, fontSize: 13, fontWeight: 600 }}>Start Learning →</span>
            </GlassCard>
          ))}
        </div>

        <GradientButton secondary onClick={() => setPage("subjects")}>← Back to Subjects</GradientButton>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
      {/* Breadcrumb */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 32, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
        <span onClick={() => setPage("subjects")} style={{ cursor: "pointer", color: "#a78bfa" }}>Subjects</span>
        <span>›</span>
        <span onClick={() => setSelectedTopic(null)} style={{ cursor: "pointer", color: "#a78bfa" }}>{subject.name}</span>
        <span>›</span>
        <span style={{ color: "#fff" }}>{selectedTopic.title}</span>
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
              <h1 style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 8 }}>{selectedTopic.title}</h1>
              <div style={{ display: "flex", gap: 10 }}>
                <Badge color={subject.color}>{subject.level}</Badge>
                <Badge color="#06b6d4">{subject.name}</Badge>
              </div>
            </div>
          </div>

          <GlassCard style={{ padding: 24, marginBottom: 20 }}>
            <h3 style={{ color: "#a78bfa", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>📖 Overview</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: 15 }}>{selectedTopic.intro}</p>
          </GlassCard>

          <GlassCard style={{ padding: 24, marginBottom: 20 }}>
            <h3 style={{ color: "#f59e0b", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>🌍 Real-life Analogy</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: 15 }}>{selectedTopic.analogy}</p>
          </GlassCard>

          <GlassCard style={{ padding: 24, marginBottom: 20 }}>
            <h3 style={{ color: "#10b981", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>🎯 Why Learn This?</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {selectedTopic.whyLearn?.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#10b981", fontSize: 16, marginTop: 1 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard style={{ padding: 24 }}>
            <h3 style={{ color: "#06b6d4", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>📋 Common Mistakes to Avoid</h3>
            {selectedTopic.mistakes?.map((m, i) => (
              <div key={i} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: i < selectedTopic.mistakes.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <span style={{ color: "#ef4444" }}>⚠</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>{m}</span>
              </div>
            ))}
          </GlassCard>
        </div>
      )}

      {activeSection === "diagram" && (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 24 }}>Visual Diagram</h2>
          <GlassCard style={{ padding: 28, marginBottom: 20 }}>
            <h3 style={{ color: "#a78bfa", fontWeight: 600, marginBottom: 20 }}>{selectedTopic.title} Concept</h3>
            {renderDiagram(selectedTopic.diagramType)}
          </GlassCard>
        </div>
      )}

      {activeSection === "code" && (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 24 }}>Code Explanation</h2>

          <GlassCard style={{ padding: 0, overflow: "hidden", marginBottom: 20 }}>
            <div style={{ background: "rgba(0,0,0,0.4)", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: 8, alignItems: "center" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
              <span style={{ marginLeft: 8, fontSize: 13, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>example_{selectedTopic.id}.src</span>
            </div>
            <div style={{ padding: 24 }}>
              {selectedTopic.code?.map((row, i) => (
                <div key={i} style={{ display: "flex", gap: 16, padding: "3px 0" }}>
                  <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, fontFamily: "monospace", minWidth: 20, textAlign: "right" }}>{i + 1}</span>
                  <code style={{ fontSize: 13, fontFamily: "monospace", color: "#e2e8f0", flex: 1 }}>{row.line || "\u00A0"}</code>
                  {row.comment && <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontStyle: "italic", minWidth: 200 }}>// {row.comment}</span>}
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard style={{ padding: 24 }}>
            <h3 style={{ color: "#10b981", fontWeight: 600, marginBottom: 16 }}>🖥️ Expected Output</h3>
            <pre style={{ background: "rgba(0,0,0,0.4)", borderRadius: 10, padding: 16, fontFamily: "monospace", fontSize: 13, color: "#34d399", margin: 0, whiteSpace: "pre-wrap" }}>
              {selectedTopic.output}
            </pre>
          </GlassCard>
        </div>
      )}

      {activeSection === "quiz" && (
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 24 }}>Quick Quiz — {selectedTopic.title}</h2>
          <MiniQuiz questions={selectedTopic.quiz} />
        </div>
      )}

      {/* Navigation Controls */}
      <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <GradientButton secondary onClick={() => setSelectedTopic(null)}>← Back to Topics</GradientButton>
        <GradientButton onClick={() => setActiveSection(sections[(sections.indexOf(activeSection) + 1) % sections.length])}>
          Next: {sections[(sections.indexOf(activeSection) + 1) % sections.length].charAt(0).toUpperCase() + sections[(sections.indexOf(activeSection) + 1) % sections.length].slice(1)} →
        </GradientButton>
      </div>
    </div>
  );
}
