export default function Dashboard() {
  return (
    <div>
      <h2>Welcome to WorkZen 🧘</h2>
      <p>Your productivity command center.</p>

      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card p-3">Tasks</div>
        </div>
        <div className="col-md-3">
          <div className="card p-3">Focus</div>
        </div>
        <div className="col-md-3">
          <div className="card p-3">Habits</div>
        </div>
        <div className="col-md-3">
          <div className="card p-3">Planner</div>
        </div>
      </div>
    </div>
  );
}