export default function Sidebar() {
  return (
    <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
      <h4>WorkZen</h4>
      <ul className="nav flex-column mt-4">
        <li className="nav-item">Dashboard</li>
        <li className="nav-item">Tasks</li>
        <li className="nav-item">Focus</li>
        <li className="nav-item">Habits</li>
        <li className="nav-item">Planner</li>
      </ul>
    </div>
  );
}