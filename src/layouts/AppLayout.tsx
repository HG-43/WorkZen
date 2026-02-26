import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function AppLayout() {
  const { colors, theme } = useTheme();

  return (
    <div 
      className="d-flex vh-100"
      style={{
        backgroundColor: colors.bg,
      }}
    >
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Navbar />
        <main 
          className="flex-grow-1 p-4"
          style={{
            backgroundColor: colors.bg,
            color: colors.text,
            overflowY: 'auto',
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}