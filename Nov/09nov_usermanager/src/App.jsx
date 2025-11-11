import React, { useReducer, useTransition, useDeferredValue } from "react";
import UserList from "./components/UserList";
import AddUserForm from "./components/AddUserForm";
import StatusBar from "./components/StatusBar";
import axios from "axios";

// ------------------------------------------------------
// Reducer: manages users state, including DELETE action
// ------------------------------------------------------
function userReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, users: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    // 🆕 DELETE USER action
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
      };
    default:
      return state;
  }
}

export default function App() {
  // useReducer for all user-related state
  const [state, dispatch] = useReducer(userReducer, {
    users: [],
    loading: false,
    error: null,
  });

  // For smoother UI transitions (non-blocking)
  const [isPending, startTransition] = useTransition();

  // Fetch users using axios
  const fetchUsers = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  };

  // Fetch once when component mounts
  React.useEffect(() => {
    fetchUsers();
  }, []);

  // Defer rendering of large lists (performance optimization)
  const deferredUsers = useDeferredValue(state.users);

  // Handle new user add (from AddUserForm)
  const handleAddUser = (newUser) => {
    startTransition(() => {
      dispatch({ type: "ADD_USER", payload: newUser });
    });
  };

  // 🆕 Handle user delete
  const handleDeleteUser = (userId) => {
    startTransition(() => {
      dispatch({ type: "DELETE_USER", payload: userId });
    });
  };

  return (
    <div style={{ padding: "1.5rem", fontFamily: "Poppins" }}>
      <h2>👥 User Manager</h2>
      <StatusBar />

      {/* Show loading or error */}
      {state.loading && <p>Loading...</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      {/* Add User Form */}
      <AddUserForm onAdd={handleAddUser} />

      {/* Pass delete handler to UserList */}
      <UserList
        users={deferredUsers}
        isPending={isPending}
        onDelete={handleDeleteUser}
      />
    </div>
  );
}
