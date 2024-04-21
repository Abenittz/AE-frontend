import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // let { user } = useContext(EventContext);
  const user = true;
  return user ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
