import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to the Advanced Blog Manager</h1>
      <button className="btn" onClick={() => navigate("/login")}>Login</button>
    </div>
  );
}
