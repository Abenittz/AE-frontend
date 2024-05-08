import { Navigate, Route } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuthenticated = () => {
    const token = localStorage.getItem("authData");
    console.log(token);
    return token !== null; // Return true if token is not null
  };

  return isAuthenticated() ? <>{children}</> : <Navigate to="/" />;
}

export default PrivateRoute;
