// LOC: 1 — All App Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Service from "../pages/Service";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../components/404";
import Navbar from "../components/Navbar";
import LoginRoleBasedRoutes from "./LoginRoleBasedRoutes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar /> {/* LOC: 17 — Always visible */}
      <Routes>
        <Route path="/*" element={<LoginRoleBasedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
