import React, { useState } from "react";

export default function LinkedListSVG() {
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
              <line x1={i * 120 + 80} y1={50} x2={i * 120 + 115} y2={50} stroke={colors[i]} strokeWidth={1.5} markerEnd="url(#arr)" strokeDasharray={i < step ? "none" : "4,3"} />
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
