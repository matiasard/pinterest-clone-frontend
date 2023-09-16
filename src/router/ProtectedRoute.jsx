import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isAllowed, children }) => {
  if (!isAllowed) return <Navigate to={"auth/login"} />;

  return children ? children : <Outlet />;
};
