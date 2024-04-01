import React from "react";

const EventList = () => {
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-container p-3 d-flex flex-row">
          <div className="img-box w-25">
            <div className="img-container">
              <img
                className="card-img-top"
                src={require("../img/index.webp")}
                alt="..."
              />
            </div>
          </div>
          <div className="card-body">
            <div className="header-container d-flex justify-content-between">
              <div className="header">
                <h1 className="card-title m-0">Developers Meetup</h1>
                <h5 className="text-muted">Location: Bole</h5>
              </div>

              <div className="option">
                <button className="btn btn-secondary">Details</button>
              </div>
            </div>

            <div className="card-description mt-5 d-flex justify-content-between ">
              <div className="start-date">
                <p className="text-muted m-0">Start Date</p>
                <p>March 14, 2024</p>
              </div>
              <div className="end-date">
                <p className="text-muted m-0">Start Date</p>
                <p>March 14, 2024</p>
              </div>
              <div className="speakers me-5 pe-5">
                <p className="text-muted m-0">Start Date</p>
                <p>March 14, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
