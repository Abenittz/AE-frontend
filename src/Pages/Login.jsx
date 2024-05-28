import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EventContext } from "../MyContext";
import eventbanner from "../img/event_banner.png";
import BackImg from "../Components/BackImg";
import HeaderAdmin from "../Components/Admin/HeaderBak";

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
      <div class="vh-100">
        <div className="container-fluid">
          <div className="row d-flex  align-items-center">
            <div className="col-sm-6 text-black ">
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: "23rem" }} onSubmit={handleLogin}>
                  <h3
                    className="fw-bold mb-3 pb-3 mb-5"
                    style={{ letterSpacing: "1px" }}
                  >
                    Log in
                  </h3>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" for="form2Example18">
                      Username
                    </label>
                    <input
                      type="username"
                      className="form-control form-control-lg"
                      // placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" for="form2Example28">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      // placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="pt-1 mb-5">
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>

                  <p>
                    Don't have an account?{" "}
                    <Link to={"/signup"} className="primary-info">
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block S" id="loginimg">
              <div className="d-flex flex-column justify-content-center vh-100 align-items-center">
                <h1 className="text-white display-1">
                  <span className="text-primary text-center">Dev</span>Meetup
                </h1>
                <p className="text-white">
                  Live Streaming Meetup From all over the world
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
