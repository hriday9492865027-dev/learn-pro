import React, { useState } from "react";
import GradientButton from "../UI/GradientButton";

export default function SortingAnimation() {
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
