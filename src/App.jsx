import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PrivateRoute from "./PrivateRoute";
import AllRoutes from "./AllRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <AllRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
