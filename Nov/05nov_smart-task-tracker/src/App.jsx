import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import StatsBar from "./components/StatsBar";
import "./App.css";

export default function App() {
  // useState manages state for tasks and filter
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // useRef to track how many tasks have been added since app started
  const taskCountRef = useRef(0);

  // useEffect: Load tasks from localStorage when app loads
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  // useEffect: Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useCallback: Memoize addTask function so it's not recreated every render
  const addTask = useCallback((text) => {
    if (!text.trim()) return;
    const newTask = { id: Date.now(), text, completed: false };
    setTasks((prev) => [...prev, newTask]);
    taskCountRef.current += 1; // increment lifetime counter
  }, []);

  // useCallback: Toggle completion status
  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, []);

  // useCallback: Delete a task
  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // useMemo: Compute filtered tasks only when filter/tasks change
  const filteredTasks = useMemo(() => {
    if (filter === "completed") return tasks.filter((t) => t.completed);
    if (filter === "active") return tasks.filter((t) => !t.completed);
    return tasks;
  }, [filter, tasks]);

  return (
    <div className="app">
      <h1>🧠 Smart Task Tracker</h1>

      {/* Form to add new tasks */}
      <TaskForm addTask={addTask} />

      {/* Stats bar shows info + filters */}
      <StatsBar
        filter={filter}
        setFilter={setFilter}
        total={tasks.length}
        completed={tasks.filter((t) => t.completed).length}
        totalAdded={taskCountRef.current}
      />

      {/* Task list */}
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}
