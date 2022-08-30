import { Routes, Route, Navigate } from "react-router-dom";

const RoutesMain = () => {
  return (
      <Routes>
        {/* <Route path="/" element={<Navigate to={"/dashboard"} />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} /> */}
      </Routes>
  );
};

export default RoutesMain;