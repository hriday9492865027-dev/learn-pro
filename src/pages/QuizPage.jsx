import React, { useState } from "react";
import MiniQuiz from "../components/MiniQuiz";

export default function QuizPage() {
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
