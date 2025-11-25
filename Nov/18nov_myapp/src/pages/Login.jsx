import { useContext } from "react";
import AuthContext from "../context/Context";
import toast from "react-hot-toast";

export default function Login() {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login("fake-token-123", "admin");
    toast.success("Login successful!");
  };

  return (
    <div>
      <h2>Login</h2>
      <button className="btn" onClick={handleLogin}>Login</button>
    </div>
  );
}
