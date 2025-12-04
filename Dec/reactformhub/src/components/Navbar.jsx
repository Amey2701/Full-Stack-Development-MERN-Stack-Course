import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "15px", background: "#222", color: "#fff", display: "flex", gap: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/forms">Forms</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Navbar;
