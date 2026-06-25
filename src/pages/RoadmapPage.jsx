import React from "react";
import { ROADMAP_STEPS } from "../data/constants";
import GlassCard from "../components/UI/GlassCard";
import Badge from "../components/UI/Badge";

export default function RoadmapPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 12 }}>Learning Roadmap</h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16 }}>A structured path from zero to placement-ready</p>
      </div>

      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #3b82f6, #8b5cf6, #06b6d4, #10b981)", transform: "translateX(-50%)" }} />

        {ROADMAP_STEPS.map((step, i) => (
          <div key={i} style={{ display: "flex", gap: 40, marginBottom: 48, position: "relative", flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}>
            <div style={{ flex: 1 }}>
              {i % 2 === 0 ? (
                <GlassCard style={{ padding: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: step.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{step.phase}</div>
                      <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>{step.title}</div>
                    </div>
                    <Badge color={step.color}>{step.duration}</Badge>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {step.items.map((item, j) => (
                      <div key={j} style={{ background: step.color + "15", border: "1px solid " + step.color + "33", borderRadius: 8, padding: "4px 12px", fontSize: 13, color: step.color }}>{item}</div>
                    ))}
                  </div>
                </GlassCard>
              ) : <div />}
            </div>

            {/* Center dot */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: `linear-gradient(135deg, ${step.color}, ${step.color}88)`,
                border: "3px solid rgba(8,10,20,1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, fontWeight: 800, color: "#fff",
                boxShadow: `0 0 20px ${step.color}44`,
              }}>{i + 1}</div>
            </div>

            <div style={{ flex: 1 }}>
              {i % 2 === 1 ? (
                <GlassCard style={{ padding: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: step.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{step.phase}</div>
                      <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>{step.title}</div>
                    </div>
                    <Badge color={step.color}>{step.duration}</Badge>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {step.items.map((item, j) => (
                      <div key={j} style={{ background: step.color + "15", border: "1px solid " + step.color + "33", borderRadius: 8, padding: "4px 12px", fontSize: 13, color: step.color }}>{item}</div>
                    ))}
                  </div>
                </GlassCard>
              ) : <div />}
            </div>
          </div>
        ))}
      </div>

      {/* Final Goal */}
      <GlassCard style={{ padding: 32, textAlign: "center", marginTop: 20, background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))" }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🎓</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Placement Ready!</div>
        <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 15 }}>Complete all phases to be fully prepared for FAANG interviews and campus placements</div>
      </GlassCard>
    </div>
  );
}
