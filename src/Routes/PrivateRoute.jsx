import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
      return (
        <div class="flex items-center justify-center ">
      <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
    )
    }
    if (user) {
        return children;
      }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default PrivateRoute;
