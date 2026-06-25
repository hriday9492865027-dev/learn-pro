import React, { useState } from "react";
import { SUBJECTS } from "../data/constants";
import GlassCard from "../components/UI/GlassCard";
import Badge from "../components/UI/Badge";

export default function SubjectsPage({ setPage, setSelectedSubject }) {
  const [filter, setFilter] = useState("All");
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filtered = filter === "All" ? SUBJECTS : SUBJECTS.filter(s => s.level === filter);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 12 }}>All Subjects</h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16 }}>Choose a subject and start your visual learning journey</p>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 36, flexWrap: "wrap" }}>
        {levels.map(l => (
          <button
            key={l}
            onClick={() => setFilter(l)}
            style={{
              background: filter === l ? "linear-gradient(135deg,#3b82f6,#8b5cf6)" : "rgba(255,255,255,0.06)",
              border: "1px solid " + (filter === l ? "transparent" : "rgba(255,255,255,0.1)"),
              color: "#fff", borderRadius: 10, padding: "8px 20px", fontSize: 13, fontWeight: 500, cursor: "pointer",
            }}
          >
            {l}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
        {filtered.map(s => (
          <GlassCard
            key={s.id}
            onClick={() => { setSelectedSubject(s); setPage("lesson"); }}
            style={{ padding: 28, position: "relative", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100, background: s.color + "10", borderRadius: "0 16px 0 100%" }} />
            <div style={{ fontSize: 40, marginBottom: 16 }}>{s.icon}</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{s.name}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 20 }}>{s.desc}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Badge color={s.color}>{s.level}</Badge>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>📖 {s.lessons} lessons</span>
            </div>
            <div style={{ marginTop: 20, height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
              <div style={{ height: "100%", width: Math.random() * 60 + 10 + "%", background: `linear-gradient(90deg, ${s.color}, ${s.color}88)`, borderRadius: 2 }} />
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", marginTop: 6 }}>Progress</div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
