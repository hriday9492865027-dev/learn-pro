import React from "react";

export default function GlassCard({ children, className = "", onClick, style = {} }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 16,
        backdropFilter: "blur(12px)",
        transition: "all 0.3s ease",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
      className={className}
      onMouseEnter={e => { if (onClick) { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}}
      onMouseLeave={e => { if (onClick) { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}}
    >
      {children}
    </div>
  );
}
