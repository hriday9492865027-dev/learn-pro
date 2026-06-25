import React from "react";
import GlassCard from "../components/UI/GlassCard";

export default function DashboardPage() {
  const badges = [
    { icon: "🔥", name: "7-Day Streak", desc: "Active 7 days in a row" },
    { icon: "🌟", name: "First Lesson", desc: "Completed your first lesson" },
    { icon: "⚡", name: "Speed Learner", desc: "Finished 3 lessons in one day" },
    { icon: "🧠", name: "Quiz Master", desc: "Scored 100% on a quiz" },
  ];

  const weakTopics = ["Dynamic Programming", "Graph Algorithms", "Pointers & Memory"];
  const recommended = ["Binary Trees Deep Dive", "Recursion Mastery", "Hash Tables Explained"];
  const progress = [
    { subject: "C Programming", pct: 90, color: "#3b82f6" },
    { subject: "C++", pct: 72, color: "#6366f1" },
    { subject: "Java", pct: 45, color: "#f59e0b" },
    { subject: "Python", pct: 60, color: "#10b981" },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 6 }}>Welcome back, Hriday! 👋</h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16 }}>Here's your learning overview</p>
      </div>

      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 16, marginBottom: 32 }}>
        {[
          { icon: "📖", label: "Lessons Done", value: "24", color: "#3b82f6" },
          { icon: "⭐", label: "XP Points", value: "2,840", color: "#f59e0b" },
          { icon: "🔥", label: "Daily Streak", value: "7", color: "#ef4444" },
          { icon: "🏆", label: "Badges Earned", value: "4", color: "#8b5cf6" },
        ].map((s, i) => (
          <GlassCard key={i} style={{ padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: 26, fontWeight: 900, color: s.color, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
          </GlassCard>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
        {/* Progress */}
        <GlassCard style={{ padding: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>📊 Subject Progress</h3>
          {progress.map((p, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>{p.subject}</span>
                <span style={{ color: p.color, fontWeight: 600 }}>{p.pct}%</span>
              </div>
              <div style={{ height: 6, background: "rgba(255,255,255,0.07)", borderRadius: 3 }}>
                <div style={{ height: "100%", width: p.pct + "%", background: `linear-gradient(90deg, ${p.color}, ${p.color}88)`, borderRadius: 3, transition: "width 1s ease" }} />
              </div>
            </div>
          ))}
        </GlassCard>

        {/* Badges */}
        <GlassCard style={{ padding: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>🏅 Badges Earned</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {badges.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "8px 12px", background: "rgba(255,255,255,0.04)", borderRadius: 10 }}>
                <div style={{ fontSize: 24 }}>{b.icon}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{b.name}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Weak Topics */}
        <GlassCard style={{ padding: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 16 }}>⚠️ Weak Topics to Revisit</h3>
          {weakTopics.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 0", borderBottom: i < weakTopics.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <span style={{ fontSize: 16, color: "#ef4444" }}>○</span>
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>{t}</span>
            </div>
          ))}
        </GlassCard>

        {/* Recommended */}
        <GlassCard style={{ padding: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 16 }}>✨ Recommended for You</h3>
          {recommended.map((r, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 0", borderBottom: i < recommended.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", cursor: "pointer" }}>
              <span style={{ fontSize: 16, color: "#3b82f6" }}>→</span>
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>{r}</span>
            </div>
          ))}
        </GlassCard>
      </div>
    </div>
  );
}
