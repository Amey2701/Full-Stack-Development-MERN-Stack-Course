import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      localStorage.removeItem("token");
      alert("Unauthorized! Please login again.");
    }

    if (status === 404) {
      alert("Bad request! Resource not found.");
    }

    if (status === 500) {
      alert("Server temporary unavailable!");
    }

    if (!error.response) {
      alert("Network error!");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
