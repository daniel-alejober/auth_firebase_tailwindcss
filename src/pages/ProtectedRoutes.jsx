import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";

const ProtectedRoutes = () => {
  const {user} = useUser();
  if (user) return <Outlet />;
  return <Navigate to="/login" />;
};

export default ProtectedRoutes;
