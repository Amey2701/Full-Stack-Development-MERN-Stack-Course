// 👉 Concepts Used: useReducer, useTransition

import React, { useReducer, useTransition } from "react";

// useReducer: like useState but for more complex state logic
// It takes a reducer function and an initial state
const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 }; // Increment count
    case "dec":
      return { count: state.count - 1 }; // Decrement count
    default:
      return state;
  }
};

const Counter = () => {
  // Initialize reducer with initial state = {count:0}
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // useTransition: helps delay state updates for smoother UI (React 18+)
  const [isPending, startTransition] = useTransition();

  // Function to increment count inside a transition
  const handleIncrement = () => {
    startTransition(() => {
      dispatch({ type: "inc" });
    });
  };

  return (
    <div>
      <h3>Counter</h3>
      <p>Count: {state.count}</p>

      {/* Dispatch actions */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>

      {/* Show message while transition is running */}
      {isPending && <p>Updating...</p>}
    </div>
  );
};

export default Counter;
