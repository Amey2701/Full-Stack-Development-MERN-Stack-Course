import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Forms from "../pages/Forms";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/forms" element={<Forms />} />
    </Routes>
  );
};

export default AppRoutes;
