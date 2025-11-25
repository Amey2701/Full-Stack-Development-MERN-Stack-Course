import { useContext, useEffect } from "react";
import AuthContext from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.token) navigate("/dashboard");
  }, [user]);

  return children;
}
