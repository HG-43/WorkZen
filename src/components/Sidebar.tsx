import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar() {
  const { theme, colors } = useTheme();

  const getSidebarStyle = () => ({
    backgroundColor: theme === 'dark' ? '#0F172A' : '#1E293B',
    color: colors.secondary,
    width: "250px",
    padding: "1.5rem",
  });

  const getNavItemStyle = () => ({
    color: theme === 'dark' ? '#CBD5E1' : '#E2E8F0',
    cursor: 'pointer',
    padding: '12px 0',
    transition: 'all 0.2s ease',
    borderLeft: `3px solid transparent`,
    paddingLeft: '12px',
  });

  return (
    <div style={getSidebarStyle()}>
      <h4 style={{ color: colors.primary, marginBottom: '32px', fontWeight: 'bold' }}>
        ✨ WorkZen
      </h4>
      <ul className="nav flex-column mt-4" style={{ gap: '8px' }}>
        {['Dashboard', 'Tasks', 'Focus', 'Habits', 'Planner'].map((item) => (
          <li 
            key={item}
            className="nav-item"
            style={getNavItemStyle()}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderLeftColor = colors.primary;
              (e.currentTarget as HTMLElement).style.color = colors.primary;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent';
              (e.currentTarget as HTMLElement).style.color = theme === 'dark' ? '#CBD5E1' : '#E2E8F0';
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}