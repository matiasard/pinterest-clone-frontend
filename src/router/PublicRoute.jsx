import React from "react";
import { useAuthStore } from "../store/authStore";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const logged = useAuthStore((state) => state.isAuth);
  
  return (!logged) 
    ? children ? children : <Outlet />
    : <Navigate to={"/home"} />;
};
