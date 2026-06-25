import React, { useState } from "react";

export default function QueueAnimation() {
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
