import React, { useState } from "react";
import { PRACTICE_PROBLEMS } from "../data/constants";
import GlassCard from "../components/UI/GlassCard";
import Badge from "../components/UI/Badge";
import GradientButton from "../components/UI/GradientButton";

export default function PracticePage() {
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
