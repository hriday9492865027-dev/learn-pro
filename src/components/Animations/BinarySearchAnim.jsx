import React, { useState } from "react";
import GradientButton from "../UI/GradientButton";

export default function BinarySearchAnim() {
  const arr = [2, 5, 8, 12, 16, 23, 38, 42, 55, 72];
  const [target, setTarget] = useState(23);
  const [low, setLow] = useState(-1);
  const [high, setHigh] = useState(-1);
  const [mid, setMid] = useState(-1);
  const [found, setFound] = useState(-1);
  const [searching, setSearching] = useState(false);

  const search = async () => {
    setSearching(true); setFound(-1);
    let l = 0, h = arr.length - 1;
    while (l <= h) {
      const m = Math.floor((l + h) / 2);
      setLow(l); setHigh(h); setMid(m);
      await new Promise(r => setTimeout(r, 800));
      if (arr[m] === target) { setFound(m); break; }
      else if (arr[m] < target) l = m + 1;
      else h = m - 1;
    }
    setSearching(false);
  };

  const reset = () => { setLow(-1); setHigh(-1); setMid(-1); setFound(-1); };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
        {arr.map((v, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
              {i === low && "L"}{i === high && "H"}{i === mid && "M"}
            </div>
            <div style={{
              width: 40, height: 40, borderRadius: 8,
              background: found === i ? "#10b98133" : mid === i ? "#f59e0b33" : (i >= low && i <= high && low !== -1) ? "#3b82f633" : "rgba(255,255,255,0.06)",
              border: `1px solid ${found === i ? "#10b981" : mid === i ? "#f59e0b" : (i >= low && i <= high && low !== -1) ? "#3b82f6" : "rgba(255,255,255,0.1)"}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 600,
              color: found === i ? "#34d399" : mid === i ? "#fbbf24" : (i >= low && i <= high && low !== -1) ? "#60a5fa" : "rgba(255,255,255,0.5)",
              transition: "all 0.3s",
            }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Target:</span>
        <select value={target} onChange={e => { setTarget(Number(e.target.value)); reset(); }} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", borderRadius: 8, padding: "4px 10px", fontSize: 13 }}>
          {arr.map(v => <option key={v} value={v} style={{ background: "#1e1e2e" }}>{v}</option>)}
        </select>
        <GradientButton onClick={search} style={{ padding: "6px 16px", fontSize: 13, opacity: searching ? 0.5 : 1, pointerEvents: searching ? "none" : "auto" }}>Search</GradientButton>
        <GradientButton secondary onClick={reset} style={{ padding: "6px 16px", fontSize: 13 }}>Reset</GradientButton>
      </div>
      {found !== -1 && <div style={{ color: "#34d399", fontSize: 14 }}>✅ Found {target} at index {found}!</div>}
    </div>
  );
}
