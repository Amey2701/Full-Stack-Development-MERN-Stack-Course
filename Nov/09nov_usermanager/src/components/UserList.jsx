import React, { useDeferredValue } from "react";

// ------------------------------------------------------
// Display user list with Delete feature
// ------------------------------------------------------
export default function UserList({ users, isPending, onDelete }) {
  const deferredUsers = useDeferredValue(users);

  if (isPending) return <p>Updating list...</p>;

  // Render list with Delete button
  return (
    <ul>
      {deferredUsers.map((u) => (
        <li key={u.id}>
          <div>
            <strong>{u.name}</strong> — {u.email}
          </div>

          {/* 🗑️ Delete button */}
          <button
            onClick={() => onDelete(u.id)}
            className="delete-btn"
            title="Delete user"
          >
            🗑️ Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
