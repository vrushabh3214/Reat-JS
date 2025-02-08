/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import { useAuth } from "../Contextapi/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  // If the user is not logged in, redirect to the login page
  return currentUser ? children : <Navigate to="/login" />;
}

