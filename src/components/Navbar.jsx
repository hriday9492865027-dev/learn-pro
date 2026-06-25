import React, { useState } from "react";
import { NAV_ITEMS } from "../data/constants";

export default function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(8,10,20,0.85)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      backdropFilter: "blur(20px)",
      padding: "0 24px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", height: 60, gap: 16 }}>
        {/* Logo */}
        <div
          onClick={() => setPage("home")}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10, marginRight: 8 }}
        >
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, fontWeight: 900, color: "#fff",
          }}>L</div>
          <span style={{ fontSize: 18, fontWeight: 800, background: "linear-gradient(90deg,#60a5fa,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            LearnPro
          </span>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: 2, flex: 1, overflow: "auto" }}>
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              style={{
                background: page === item.id ? "rgba(139,92,246,0.2)" : "transparent",
                border: page === item.id ? "1px solid rgba(139,92,246,0.3)" : "1px solid transparent",
                color: page === item.id ? "#a78bfa" : "rgba(255,255,255,0.55)",
                borderRadius: 10,
                padding: "6px 12px",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div style={{ position: "relative" }}>
          {showSearch ? (
            <input
              autoFocus
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search lessons..."
              onBlur={() => { setShowSearch(false); setSearch(""); }}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 10, padding: "6px 14px", color: "#fff",
                fontSize: 13, outline: "none", width: 200,
              }}
            />
          ) : (
            <button
              onClick={() => setShowSearch(true)}
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "6px 14px", color: "rgba(255,255,255,0.6)", fontSize: 13, cursor: "pointer" }}
            >
              🔍 Search
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
