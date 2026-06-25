import React from "react";
import GlassCard from "../components/UI/GlassCard";
import Badge from "../components/UI/Badge";

export default function ProfilePage() {
  const skills = [
    { name: "C Programming", level: 90 },
    { name: "Data Structures", level: 72 },
    { name: "Algorithms", level: 45 },
    { name: "Python", level: 60 },
    { name: "JavaScript", level: 55 },
  ];

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px" }}>
      <GlassCard style={{ padding: 32, marginBottom: 24, background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))" }}>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28, fontWeight: 900, color: "#fff", flexShrink: 0,
          }}>H</div>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 4 }}>Hriday</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 12 }}>B.Tech CSE · Vignan's Institute · Visakhapatnam</p>
            <div style={{ display: "flex", gap: 10 }}>
              <Badge color="#f59e0b">⭐ 2,840 XP</Badge>
              <Badge color="#10b981">🔥 7-Day Streak</Badge>
              <Badge color="#3b82f6">24 Lessons</Badge>
            </div>
          </div>
        </div>
      </GlassCard>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Skills */}
        <GlassCard style={{ padding: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>💪 Skill Levels</h3>
          {skills.map((s, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>{s.name}</span>
                <span style={{ color: "#a78bfa", fontWeight: 600 }}>{s.level}%</span>
              </div>
              <div style={{ height: 5, background: "rgba(255,255,255,0.07)", borderRadius: 3 }}>
                <div style={{ height: "100%", width: s.level + "%", background: "linear-gradient(90deg,#3b82f6,#8b5cf6)", borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </GlassCard>

        {/* Activity */}
        <GlassCard style={{ padding: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>📅 Recent Activity</h3>
          {[
            { action: "Completed Linked Lists", time: "Today", icon: "✅" },
            { action: "Scored 100% on Stack Quiz", time: "Yesterday", icon: "🏆" },
            { action: "Started Algorithms", time: "2 days ago", icon: "📖" },
            { action: "Earned Speed Learner badge", time: "3 days ago", icon: "⚡" },
            { action: "Finished C Arrays chapter", time: "1 week ago", icon: "✅" },
          ].map((a, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "8px 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
              <span style={{ fontSize: 16 }}>{a.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{a.action}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{a.time}</div>
              </div>
            </div>
          ))}
        </GlassCard>
      </div>

      {/* Preferences */}
      <GlassCard style={{ padding: 24, marginTop: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>⚙️ Preferences</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { label: "Daily reminder notifications", on: true },
            { label: "Show difficulty badges on lessons", on: true },
            { label: "Auto-play animations", on: false },
          ].map((pref, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>{pref.label}</span>
              <div style={{
                width: 42, height: 22, borderRadius: 11,
                background: pref.on ? "linear-gradient(90deg,#3b82f6,#8b5cf6)" : "rgba(255,255,255,0.1)",
                cursor: "pointer", position: "relative", transition: "background 0.2s",
              }}>
                <div style={{ position: "absolute", top: 3, left: pref.on ? 22 : 3, width: 16, height: 16, borderRadius: "50%", background: "#fff", transition: "left 0.2s" }} />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
