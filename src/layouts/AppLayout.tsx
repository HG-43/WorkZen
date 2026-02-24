import { Outlet } from "react-router-dom";
import Sidebar from "@components/Sidebar";
import Navbar from "@components/Navbar";

export default function AppLayout() {
  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Navbar />
        <main className="flex-grow-1 p-4 bg-light">
          <Outlet />
        </main>
      </div>
    </div>
  );
}