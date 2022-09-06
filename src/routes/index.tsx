import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ProtectedRoutes from "../components/ProtectedRoutes";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Movie from "../pages/Movie";
import Profile from "../pages/Profile";

const RoutesMain = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Navigate to={"/dashboard"} />} />
        {/* <Route element={<ProtectedRoutes />}>  PROTECTED ROUTES DISABLED FOR NOW*/}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movie" element={<Movie nome={""} descricao={""} duracao={""} categoria={""} imagem={""}/>} />
        {/* </Route> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesMain;
