import React, { useContext, useState } from "react";
import { EventContext } from "../MyContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { registerUser } = useContext(EventContext);
  const [username, setUsername] = useState([]);
  const [fullname, setFullname] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const navigate = useNavigate();
  console.log(navigate);

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
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card p-5">
              <form onSubmit={handleUSerSignIn}>
                <h3 className="mb-5 text-center">Sign Up</h3>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    Sign Up
                  </button>
                </div>
                <p className="forgot-password text-right">
                  Already registered? <a href="/sign-in">Login</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
