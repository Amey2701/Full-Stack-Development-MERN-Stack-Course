// LOC: 1 — Protect routes based on role
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes({ allowedRoles }) {
  const role = localStorage.getItem("role");

  return allowedRoles.includes(role) ? <Outlet /> : <Navigate to="/login" />;
}
