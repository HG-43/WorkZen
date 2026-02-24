import { Task } from "../types/task";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Build WorkZen dashboard",
    status: "todo",
    priority: "high",
    createdAt: new Date().toISOString()
  },
  {
    id: "2",
    title: "Create task system",
    status: "in-progress",
    priority: "medium",
    createdAt: new Date().toISOString()
  }
];