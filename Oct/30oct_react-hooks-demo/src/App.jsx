import React from "react";
import Profile from "./components/Profile";
import UserDetails from "./components/UserDetails";
import Counter from "./components/Counter";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    // Wrap all components inside UserProvider
    // So they can share same user data without prop drilling
    <UserProvider>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>⚛️ React Hooks Demo (Beginner Level)</h1>
        <hr />

        {/* Each component demonstrates different hooks */}
        <Profile />        {/* useContext, useEffect, useLayoutEffect, useRef */}
        <hr />
        <UserDetails />    {/* useMemo, useCallback, useId */}
        <hr />
        <Counter />        {/* useReducer, useTransition */}
      </div>
    </UserProvider>
  );
};

export default App;
