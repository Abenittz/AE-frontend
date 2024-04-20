import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { EventContext } from "./MyContext";

const PrivateRoute = ({ element, ...rest }) => {
  const { authData } = useContext(EventContext);

  return authData ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
