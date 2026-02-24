import React from "react";

import { mockTasks } from "../services/mockData";

export const Dashboard = () => {
  return (
    <div>
      <h2 className="fw-bold mb-4">Dashboard</h2>

      {/* Stats Row */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card p-3 border-0 shadow-sm">
            <h6>Total Tasks</h6>
            <h3>{mockTasks.length}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 border-0 shadow-sm">
            <h6>In Progress</h6>
            <h3>{mockTasks.filter(t => t.status === "in-progress").length}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 border-0 shadow-sm">
            <h6>Completed</h6>
            <h3>{mockTasks.filter(t => t.status === "done").length}</h3>
          </div>
        </div>
      </div>

      {/* Tasks */}
      <div className="row">
        {mockTasks.map(task => (
          <div key={task.id} className="col-md-4 mb-3">
            <div className="card p-3 border-0 shadow-sm h-100">
              <h5 className="fw-semibold">{task.title}</h5>
              <p className="text-muted small mb-2">Status: {task.status}</p>

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