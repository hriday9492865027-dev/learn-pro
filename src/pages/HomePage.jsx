import React from "react";
import { SUBJECTS } from "../data/constants";
import AnimatedBg from "../components/UI/AnimatedBg";
import GlassCard from "../components/UI/GlassCard";
import Badge from "../components/UI/Badge";
import GradientButton from "../components/UI/GradientButton";

export default function HomePage({ setPage }) {
  const stats = [
    { n: "100+", label: "Lessons" },
    { n: "500+", label: "Visual Examples" },
    { n: "1000+", label: "Quiz Questions" },
    { n: "50+", label: "Interactive Sims" },
  ];

  const testimonials = [
    { name: "Arjun Mehta", role: "2nd Year CS Student", text: "LearnPro's visual diagrams made pointers finally click for me. I understood in 20 minutes what textbooks couldn't explain in weeks.", avatar: "AM" },
    { name: "Priya Sharma", role: "Placed at Google", text: "The algorithm animations changed how I think about code. I could literally see quicksort partition in my head during the interview.", avatar: "PS" },
    { name: "Rahul Verma", role: "Freshman, IIT Delhi", text: "The playground is genius. Watching memory allocation happen live is 100x better than reading about it.", avatar: "RV" },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px", overflow: "hidden" }}>
        <AnimatedBg />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 780 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: 100, padding: "6px 18px", marginBottom: 32, fontSize: 13, color: "#a78bfa" }}>
            ✨ Visual-first learning platform for CS students
          </div>
          <h1 style={{
            fontSize: "clamp(36px,6vw,72px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24,
            background: "linear-gradient(135deg, #fff 0%, #a78bfa 50%, #60a5fa 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Programming Made Easy Through Visual Learning
          </h1>
          <p style={{ fontSize: 19, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 44, maxWidth: 580, margin: "0 auto 44px" }}>
            Understand every programming concept with theory, diagrams, animations, and interactive examples — not long videos.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <GradientButton onClick={() => setPage("subjects")}>🚀 Start Learning</GradientButton>
            <GradientButton secondary onClick={() => setPage("subjects")}>📚 Explore Subjects</GradientButton>
          </div>

          {/* Floating Code Card */}
          <div style={{ marginTop: 64, position: "relative" }}>
            <GlassCard style={{ padding: 24, textAlign: "left", maxWidth: 480, margin: "0 auto" }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ marginLeft: 8, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>linked_list.c</span>
              </div>
              <pre style={{ fontFamily: "monospace", fontSize: 13, color: "#e2e8f0", margin: 0, lineHeight: 1.7 }}>
                <span style={{ color: "#60a5fa" }}>struct</span> <span style={{ color: "#a78bfa" }}>Node</span> {"{"}{"\n"}
                {"  "}<span style={{ color: "#34d399" }}>int</span> data;{"\n"}
                {"  "}<span style={{ color: "#34d399" }}>struct</span> Node *next;{"\n"}
                {"};"}{"\n\n"}
                <span style={{ color: "#f59e0b" }}>// Each node points to next →</span>{"\n"}
                <span style={{ color: "#818cf8" }}>📦</span> 10 → <span style={{ color: "#818cf8" }}>📦</span> 20 → <span style={{ color: "#818cf8" }}>📦</span> 30 → NULL
              </pre>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "60px 24px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 32, textAlign: "center" }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 42, fontWeight: 900, background: "linear-gradient(135deg,#60a5fa,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.n}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Subjects */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#fff", marginBottom: 12 }}>Popular Subjects</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16 }}>Start with any subject and learn at your pace</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
            {SUBJECTS.slice(0, 6).map(s => (
              <GlassCard key={s.id} onClick={() => setPage("subjects")} style={{ padding: 24 }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{s.name}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Badge color={s.color}>{s.level}</Badge>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{s.lessons} lessons</span>
                </div>
              </GlassCard>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <GradientButton secondary onClick={() => setPage("subjects")}>View All 13 Subjects →</GradientButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#fff", marginBottom: 12 }}>What Students Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {testimonials.map((t, i) => (
              <GlassCard key={i} style={{ padding: 28 }}>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 20 }}>"{t.text}"</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700, color: "#fff",
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{t.role}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, color: "#fff" }}>L</div>
          <span style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>LearnPro</span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>Made for CS students who learn by seeing, not watching.</p>
      </footer>
    </div>
  );
}
