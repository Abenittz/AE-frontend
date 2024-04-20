import React, { useContext, useEffect, useState } from "react";
import duresaImage from "../img/duresa.jpg";
import { EventContext } from "../MyContext";
import Navbar from "../Components/Navbar";

const Profile = () => {
  const { events } = useContext(EventContext);
  const { records } = useContext(EventContext);
  const [user, setUser] = useState();

  console.log(records);
  console.log(events);

  const latestThree = events.slice(-3);
  console.log(latestThree.id);
  console.log(latestThree);
  const upcomingevents = events.filter((event) => event.status === "upcoming");
  console.log(upcomingevents);
  const firstSixEvents = upcomingevents.slice(0, Math.min(events.length, 6));
  console.log(firstSixEvents);
  const mostRecentEvent =
    firstSixEvents.length > 0
      ? firstSixEvents[firstSixEvents.length - 1]
      : null;
  useEffect(() => {
    const storedUserData = localStorage.getItem("authData");
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  }, []);
  console.log(localStorage.getItem("authData"));

  console.log(user);
  return (
    <>
      <Navbar />
      <section id="events">
        <div className="container vh-100">
          <div className="row mt-2 px-3">
            <div className="upcoming col-md-7 border p-4 fade-in"></div>

            <div className="filters col-md-4 border p-4">
              <div className="col-12">
                <div className="card text-light text-center bg-white pb-2 h-100">
                  <div className="card-body text-dark pt-5 d-flex flex-column justify-content-center align-items-center">
                    <div
                      className="img-area mb-4 "
                      style={{ width: "100px", height: "100px" }}
                    >
                      <img
                        src={duresaImage}
                        className="card-img-top rounded-circle"
                        alt=""
                      />
                    </div>
                    <h3 className="card-title">
                      {" "}
                      {user && <>{user["fullname"]}</>}
                    </h3>
                    <p className="lead"> {user && <>{user["email"]}</>}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
