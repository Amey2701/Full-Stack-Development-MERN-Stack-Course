import React from "react";

export default function StatsBar({ filter, setFilter, total, completed, totalAdded }) {
  return (
    <div className="stats-bar">
      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
      <p>Tasks Added (Lifetime): {totalAdded}</p>

      {/* Filter buttons */}
      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
