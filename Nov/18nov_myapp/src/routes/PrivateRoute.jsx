import { useContext } from "react";
import AuthContext from "../context/Context";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user?.token ? children : <Navigate to="/login" replace />;
}
