import React, { useContext } from "react";
import { EventContext } from "../MyContext";

const RoomLogin = () => {
  const { loginUser } = useContext(EventContext);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const email = formData.get("email");
      const name = formData.get("fullName");

      const userData = await loginUser(email, name);

      console.log("User logged in:", userData);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <section id="register">
      <div className="container min-vh-100">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 mt-2">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Login</h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3 mt-3">
                    <div className="row">
                      <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          name="fullName"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomLogin;