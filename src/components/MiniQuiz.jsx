import React, { useState } from "react";
import { QUIZ_QUESTIONS } from "../data/constants";
import GlassCard from "./UI/GlassCard";
import GradientButton from "./UI/GradientButton";

export default function MiniQuiz({ questions }) {
  const activeQuestions = questions || QUIZ_QUESTIONS;
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = activeQuestions[qIdx];

  const answer = (i) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.ans) setScore(s => s + 1);
  };

  const next = () => {
    if (qIdx + 1 >= activeQuestions.length) { setDone(true); return; }
    setQIdx(i => i + 1);
    setSelected(null);
  };

  const restart = () => { setQIdx(0); setSelected(null); setScore(0); setDone(false); };

  if (done) {
    const pct = Math.round((score / activeQuestions.length) * 100);
    return (
      <GlassCard style={{ padding: 40, textAlign: "center" }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>{pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚"}</div>
        <div style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 8 }}>{score}/{activeQuestions.length}</div>
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
        <span>Question {qIdx + 1} of {activeQuestions.length}</span>
        <span>Score: {score}</span>
      </div>
      <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2, marginBottom: 28 }}>
        <div style={{ height: "100%", width: ((qIdx + 1) / activeQuestions.length * 100) + "%", background: "linear-gradient(90deg,#3b82f6,#8b5cf6)", borderRadius: 2, transition: "width 0.3s" }} />
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
          <GradientButton onClick={next}>{qIdx + 1 < activeQuestions.length ? "Next Question →" : "See Results"}</GradientButton>
        </div>
      )}
    </div>
  );
}
