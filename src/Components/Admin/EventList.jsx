import React, { useContext } from "react";
import imageUrl from "../../img/index.webp";
import { EventContext } from "../../MyContext";
import { Link } from "react-router-dom";

const EventList = () => {
  const { events } = useContext(EventContext);

  if (events.length === 0) {
    return <div className="card">No Event Found</div>;
  }

  return (
    <>
      <div className="container mt-5 mb-5 ">
        <div className="search-bar d-flex justify-content-end">
          <div className="search-field me-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
            ></input>
          </div>
          <div className="add-btn">
            <Link to={"/eventreg"} className="btn btn-primary">
              + Add Event
            </Link>
          </div>
        </div>
      </div>
      {events.map((event) => (
        <div className="container mt-3 mb-5">
          <div className="card">
            <div className="card-container p-3 d-flex flex-row">
              <div className="img-box w-25">
                <div className="img-container">
                  <img className="card-img-top" src={imageUrl} alt="..." />
                </div>
              </div>
              <div className="card-body">
                <div className="header-container d-flex justify-content-between">
                  <div className="header">
                    <h2 className="card-title m-0">{event.title}</h2>
                    <h5 className="text-muted">Location: {event.location}</h5>
                  </div>

                  <div className="option">
                    <button className="btn btn-secondary">Details</button>
                  </div>
                </div>

                <div className="card-description mt-5 d-flex justify-content-between ">
                  <div className="start-date">
                    <p className="text-muted m-0">Start Date</p>
                    <p>{event.start_date}</p>
                  </div>
                  <div className="end-date">
                    <p className="text-muted m-0">End Date</p>
                    <p>{event.end_date}</p>
                  </div>
                  <div className="speakers me-5 pe-5">
                    <p className="text-muted m-0">Speakers</p>
                    <p>Chapi Menge 2 others</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventList;
