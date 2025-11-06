import React, { useRef, useState } from "react";

export default function TaskForm({ addTask }) {
  const [text, setText] = useState(""); // track input value
  const inputRef = useRef(null); // useRef for input DOM

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text); // call parent function
    setText(""); // clear input
    inputRef.current.focus(); // refocus input using useRef
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
