// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

// 🌐 AXIOS INTERCEPTOR - logs all outgoing API Requests
axios.interceptors.request.use(
  (config) => {
    console.log("➡️ API Request Sent:", config.url, config);
    return config;
  },
  (error) => {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  }
);

// 📌 React App Entry Point
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
