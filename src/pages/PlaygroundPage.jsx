import React, { useState } from "react";
import GlassCard from "../components/UI/GlassCard";
import SortingAnimation from "../components/Animations/SortingAnimation";
import QueueAnimation from "../components/Animations/QueueAnimation";
import BinarySearchAnim from "../components/Animations/BinarySearchAnim";
import StackSVG from "../components/Animations/StackSVG";
import LinkedListSVG from "../components/Animations/LinkedListSVG";

export default function PlaygroundPage() {
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
