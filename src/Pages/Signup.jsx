import React, { useContext, useState } from "react";
import { EventContext } from "../MyContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { registerUser } = useContext(EventContext);
  const [username, setUsername] = useState([]);
  const [fullname, setFullname] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const navigate = useNavigate();

  const handleUSerSignIn = async (e) => {
    e.preventDefault();

    const userData = {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
    };

    const handleSuccess = (registered) => {
      navigate("/home", { replace: true });
    };
    const handleError = () => {
      alert("register failed");
    };

    registerUser(userData, handleSuccess, handleError);
  };
  return (
    <section className="vh-100 gradient-custom">
      <div class="vh-100">
        <div className="container-fluid">
          <div className="row d-flex  align-items-center">
            <div className="col-sm-6 text-black ">
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: "23rem" }} onSubmit={handleUSerSignIn}>
                  <h3
                    className="fw-bold mb-3 pb-3 mb-5"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign Up
                  </h3>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" for="form2Example18">
                      Full Name
                    </label>
                    <input
                      type="fullname"
                      className="form-control form-control-lg"
                      // placeholder="fullname"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      required
                    />
                  </div>
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
                    <label className="form-label" for="form2Example18">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      // placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      className="btn btn-primary btn-lg  btn-block"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>

                  <p>
                    Already registered?{" "}
                    <Link to={"/"} className="primary-info">
                      Login
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

export default Signup;
