import React from "react";

import { mockTasks } from "../services/mockData";
import { AIAssistant } from "../components/AIAssistant";
import { useTheme } from "../context/ThemeContext";

export const Dashboard = () => {
  const { colors, theme } = useTheme();

  const getCardStyle = () => ({
    backgroundColor: theme === 'dark' ? '#1E293B' : '#FFFFFF',
    borderColor: colors.border,
    color: colors.text,
  });

  const getStatValueStyle = () => ({
    color: colors.primary,
    fontSize: '28px',
    fontWeight: 'bold',
  });

  const getTaskCardStyle = () => ({
    backgroundColor: theme === 'dark' ? '#1E293B' : '#FFFFFF',
    borderColor: colors.border,
    color: colors.text,
  });

  return (
    <div>
      <h2 style={{ color: colors.text }} className="fw-bold mb-4">Dashboard</h2>

      {/* AI Assistant */}
      <AIAssistant tasks={mockTasks} />

      {/* Stats Row */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div 
            className="card p-3 border-0 shadow-sm"
            style={getCardStyle()}
          >
            <h6 style={{ color: colors.textSecondary }}>Total Tasks</h6>
            <h3 style={getStatValueStyle()}>{mockTasks.length}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div 
            className="card p-3 border-0 shadow-sm"
            style={getCardStyle()}
          >
            <h6 style={{ color: colors.textSecondary }}>In Progress</h6>
            <h3 style={getStatValueStyle()}>{mockTasks.filter(t => t.status === "in-progress").length}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div 
            className="card p-3 border-0 shadow-sm"
            style={getCardStyle()}
          >
            <h6 style={{ color: colors.textSecondary }}>Completed</h6>
            <h3 style={getStatValueStyle()}>{mockTasks.filter(t => t.status === "done").length}</h3>
          </div>
        </div>
      </div>

      {/* Tasks Section Header */}
      <h5 style={{ color: colors.text, marginTop: '32px', marginBottom: '16px' }} className="fw-bold">
        📋 Your Tasks
      </h5>

      {/* Tasks */}
      <div className="row">
        {mockTasks.map(task => (
          <div key={task.id} className="col-md-4 mb-3">
            <div 
              className="card p-3 border-0 shadow-sm h-100"
              style={getTaskCardStyle()}
            >
              <h5 style={{ color: colors.text }} className="fw-semibold">{task.title}</h5>
              <p style={{ color: colors.textSecondary }} className="text-muted small mb-2">
                Status: <strong>{task.status}</strong>
              </p>

              <span
                className={`badge ${
                  task.priority === "high"
                    ? "bg-danger"
                    : task.priority === "medium"
                    ? "bg-warning"
                    : "bg-success"
                }`}
              >
                {task.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};