import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";

const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem("@ioasys:token") !== null;

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/home"
        element={
          <PrivateRoute redirectTo="/">
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
