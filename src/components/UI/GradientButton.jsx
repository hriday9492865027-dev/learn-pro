import React from "react";

export default function GradientButton({ children, onClick, secondary = false, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: secondary ? "rgba(255,255,255,0.07)" : "linear-gradient(135deg, #3b82f6, #8b5cf6)",
        border: secondary ? "1px solid rgba(255,255,255,0.15)" : "none",
        color: "#fff",
        borderRadius: 12,
        padding: "12px 28px",
        fontWeight: 600,
        fontSize: 15,
        cursor: "pointer",
        transition: "all 0.2s ease",
        letterSpacing: 0.3,
        ...style,
      }}
      onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {children}
    </button>
  );
}
