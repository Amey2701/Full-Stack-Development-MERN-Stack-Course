import React from "react";

// React.memo prevents unnecessary re-renders if props are the same
const TaskItem = React.memo(({ task, toggleTask, deleteTask }) => {
  console.log("TaskItem re-render:", task.text);

  return (
    <li className={task.completed ? "done" : ""}>
      {/* Toggle checkbox */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span>{task.text}</span>
      {/* Delete button */}
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
});

export default TaskItem;
