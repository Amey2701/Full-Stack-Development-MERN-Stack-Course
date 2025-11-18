// LOC: 1 — Routes based on role: guest, user, admin
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Service from "../pages/Service";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import NotFound from "../components/404";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";

export default function LoginRoleBasedRoutes() {
  const role = localStorage.getItem("role") || "guest";

  return (
    <Routes>
      {/* Public pages */}
      <Route path="/" element={<Home />} />
      {role !== "guest" && <Route path="/service" element={<Service />} />}
      {role !== "guest" && <Route path="/contact" element={<ContactUs />} />}

      {/* Protected Route (Admin Only) */}
      <Route element={<PrivateRoutes allowedRoles={["admin"]} />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
