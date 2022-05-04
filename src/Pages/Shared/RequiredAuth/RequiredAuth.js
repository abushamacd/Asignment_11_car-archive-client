import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import auth from "../../../firebase.config";

const RequiredAuth = ({ children }) => {
  // Get user info for private page
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  // Show spinner when loading
  if (loading) {
    return <Loading></Loading>;
  }
  // Send user previous page location and redirect to login page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequiredAuth;
