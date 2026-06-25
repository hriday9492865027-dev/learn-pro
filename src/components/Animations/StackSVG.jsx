import React, { useState } from "react";

export default function StackSVG() {
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
