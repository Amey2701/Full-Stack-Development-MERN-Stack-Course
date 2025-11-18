// LOC: 1 — Home page
import "./styles.css";

export default function Home() {
  return (
    <div className="page">
      <h1>Welcome Home 👋</h1>
      <p>You are browsing as: {localStorage.getItem("role")}</p>
    </div>
  );
}
