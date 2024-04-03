import React, { useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import Success from "./Success";
import { EventContext } from "../MyContext";

const Register = () => {
  const { id } = useParams();
  console.log(id);
  const parseId = parseInt(id, 10);

  const { events } = useContext(EventContext);
  console.log(events.id === id);
  const currentEvent = events.filter((event) => event.id === parseId);
  const selectedEvent = currentEvent.length > 0 ? currentEvent[0] : null;
  console.log(selectedEvent["attendees"].length);

  const availableSeat =
    selectedEvent["attendees"].length <= selectedEvent["available_seat"];
  console.log(availableSeat);

  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(false);
  const [validationError, setValidationError] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const registerAttendee = async (e) => {
    e.preventDefault();

    // Perform frontend validation
    if (!validateInputs()) {
      setValidationError("Please fill out all required fields.");
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: id,
        fullname: name,
        email: email,
        phone: phone,
      }),
    };

    const res = await fetch(
      `http://127.0.0.1:8000/api/attendee/register/`,
      requestOptions
    );
    if (res.status === 201) {
      const data = await res.json();
      console.log(data);
      setIsRegistrationSuccessful(true);
    }
  };

  const validateInputs = () => {
    // Implement your validation logic here
    // Return true if validation passes, false otherwise
    // You can check for empty fields, valid email format, etc.
    if (name === "" || email === "" || phone === "") {
      return false;
    }

    return true; // Change this logic to your actual validation
  };

  return (
    <>
      {availableSeat ? (
        <section id="register">
          {validationError && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {validationError}
            </div>
          )}

          {isRegistrationSuccessful ? (
            <Success />
          ) : (
            <div className="container min-vh-100">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 mt-2">
                  <div className="card">
                    <div className="card-body">
                      <h2 className="card-title text-center">
                        Event Registration
                      </h2>
                      <form>
                        <div className="mb-3 mt-3">
                          <div className="row">
                            <div className="col-md-6">
                              <label htmlFor="fullName" className="form-label">
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="email" className="form-label">
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="phoneNumber" className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phoneNumber"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </div>

                        <button
                          onClick={(e) => registerAttendee(e)}
                          className="btn btn-primary w-100"
                        >
                          Register
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      ) : (
        <section id="register">
          <div className="container min-vh-100">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 mt-2">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title text-center">
                      Sorry! Room is Full
                    </h2>
                    <p className="text-center">See you next time </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Register;
