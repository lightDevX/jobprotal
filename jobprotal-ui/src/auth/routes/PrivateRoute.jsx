import { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../context/AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loadding } = useContext(AuthContext);

  if (user) {
    return children;
  }

  if (loadding) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
  }

  return <Navigate to="/login" replace />; // Redirect to login if not authenticated
};

export default PrivateRoute;
