import React from "react";
import TaskItem from "./TaskItem";

// React.memo to prevent re-render if props didn't change
const TaskList = React.memo(({ tasks, toggleTask, deleteTask }) => {
  console.log("TaskList re-rendered");

  if (!tasks.length) return <p className="empty">No tasks found!</p>;

  return (
    <ul className="task-list">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
});

export default TaskList;
