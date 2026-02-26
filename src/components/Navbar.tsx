import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme, colors } = useTheme();

  const getNavbarStyle = () => ({
    backgroundColor: theme === 'dark' ? '#1E293B' : '#FFFFFF',
    borderBottomColor: colors.border,
    color: colors.text,
  });

  const getThemeButtonStyle = () => ({
    backgroundColor: colors.primary,
    color: theme === 'dark' ? '#000' : '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  });

  return (
    <div 
      className="border-bottom px-4 py-2 d-flex justify-content-between align-items-center"
      style={getNavbarStyle()}
    >
      <h6 style={{ margin: 0, color: colors.text }}>Dashboard</h6>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ fontSize: '14px', color: colors.textSecondary }}>
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
        </span>
        <button
          style={getThemeButtonStyle()}
          onClick={toggleTheme}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.opacity = '0.85';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.opacity = '1';
          }}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </div>
  );
}