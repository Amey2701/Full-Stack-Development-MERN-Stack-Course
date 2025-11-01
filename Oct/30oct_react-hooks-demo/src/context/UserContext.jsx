// 👉 Concept Used: useState, useContext

// Import React and required hook
import React, { createContext, useState } from "react";

// Create a Context to share data globally (avoid prop drilling)
export const UserContext = createContext();

// Create a Provider component
export const UserProvider = ({ children }) => {
  // useState: to store and update user data
  const [user, setUser] = useState({ name: "Amey Mali", age: 23 });

  // Return Provider component with user data shared to all children
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children} {/* All components inside this can use user data */}
    </UserContext.Provider>
  );
};-
