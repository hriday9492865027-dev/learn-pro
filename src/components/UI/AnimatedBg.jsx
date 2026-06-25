import React from "react";

export default function AnimatedBg() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      <div style={{
        position: "absolute", top: "-20%", left: "-10%", width: 600, height: 600,
        background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        animation: "float1 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", top: "30%", right: "-15%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
        animation: "float2 10s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "20%", width: 400, height: 400,
        background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
        animation: "float3 12s ease-in-out infinite",
      }} />
      {/* Grid pattern */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.03 }}>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
