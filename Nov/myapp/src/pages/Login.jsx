// LOC: 1 — Login page with 3 roles
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Login() {
  const [role, setRole] = useState("guest");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("role", role);

    if (role === "admin") navigate("/dashboard");
    else navigate("/");
  };

  return (
    <div className="page">
      <h1>Login</h1>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="guest">Guest</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
