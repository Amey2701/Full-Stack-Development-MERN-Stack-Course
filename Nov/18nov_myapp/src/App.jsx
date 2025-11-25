import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

// Route Guards
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

// Error / Access Components
import NotFound from "./components/404";
import AccessDenied from "./components/AccessDenied";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Public Pages */}
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          {/* Private Authenticated Page */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* Protected Page: Only admin + manager */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute role={["admin", "manager"]}>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Access Denied Page */}
          <Route path="/unauthorized" element={<AccessDenied />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
