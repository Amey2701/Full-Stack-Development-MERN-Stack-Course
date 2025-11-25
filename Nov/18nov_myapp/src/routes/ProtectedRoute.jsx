import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/Context";

export default function ProtectedRoute({ children, role }) {
  const { user } = useContext(AuthContext);
  const allowed = role.includes(user?.role?.toLowerCase());

  if (!allowed) return <Navigate to="/unauthorized" replace />;
  return children;
}
