import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EventContext } from "../MyContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useContext(EventContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    const handleSuccess = (logged) => {
      navigate("/home", { replace: true });
    };
    const handleError = () => {
      alert("login failed");
    };

    loginUser(userData, handleSuccess, handleError);
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card p-5">
              <form onSubmit={handleLogin}>
                <h3 className="text-center mb-5">Login</h3>
                <div className="mb-3">
                  <input
                    type="username"
                    className="form-control mb-4"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <p className="forgot-password text-right">
                  Dont Have an Account?
                  <Link to={"/signin"}>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
