// 👉 Concepts Used: useContext, useMemo, useCallback, useId

import React, { useContext, useMemo, useCallback, useId } from "react";
import { UserContext } from "../context/UserContext";

const UserDetails = () => {
  // useContext: get user data and setter from context
  const { user, setUser } = useContext(UserContext);

  // useId: generate unique ID for accessibility
  const id = useId();

  // useMemo: memoize (save) the calculated value until dependency changes
  const yearsUntil30 = useMemo(() => {
    console.log("Calculating years until 30...");
    return 30 - user.age;
  }, [user.age]);

  // useCallback: memoize a function to prevent recreation on each render
  const increaseAge = useCallback(() => {
    setUser((prev) => ({ ...prev, age: prev.age + 1 }));
  }, [setUser]);

  return (
    <div>
      <h3>User Details (ID: {id})</h3>
      <p>{user.name} is {user.age} years old.</p>
      <p>Years until 30: {yearsUntil30}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
};

export default UserDetails;
