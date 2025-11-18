// LOC: 1 — Top navigation bar
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const role = localStorage.getItem("role") || "guest";

  return (
    <nav className="nav">
      <div className="logo">My App</div>

      <div className="links">
        <Link to="/">Home</Link>

        {role !== "guest" && <Link to="/service">Service</Link>}
        {role !== "guest" && <Link to="/contact">Contact</Link>}

        {role === "admin" && <Link to="/dashboard">Dashboard</Link>}

        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
