import React from "react";

export default function Badge({ children, color = "#8b5cf6" }) {
  return (
    <span style={{ background: color + "22", color, border: `1px solid ${color}44`, borderRadius: 8, padding: "2px 10px", fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>
      {children}
    </span>
  );
}
