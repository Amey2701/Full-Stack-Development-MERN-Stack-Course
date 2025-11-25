import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const nav = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🚫 404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      <button 
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: "#0078ff",
          color: "#fff",
          cursor: "pointer"
        }}
        onClick={() => nav("/")}
      >
        ⬅ Go Home
      </button>
    </div>
  );
}
