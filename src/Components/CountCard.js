import React from "react";
import AdminHeader from "./AdminHeader";
import Events1 from "./Events";

const CountCard = () => {
  return (
    <section id="events">
      <div className="container mt-5" id="headerAdmin">
        <div className="row">
          <div className="col-md-4">
            <div className="card mt-5 p-3 ">
              <h5
                className="card-title text-muted mb-0"
                style={{ marginLeft: "13px", marginTop: "10px" }}
              >
                Events
              </h5>
              <div className="card-body mt-5">
                <h1 className="mb-0">200+</h1>
                <p className="text-muted">20 per Event</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-5 p-3">
              <h5
                className="card-title text-muted mb-0"
                style={{ marginLeft: "13px", marginTop: "10px" }}
              >
                Events
              </h5>
              <div className="card-body mt-5">
                <h1 className="mb-0">200+</h1>
                <p className="text-muted">20 per Event</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-5 p-3">
              <h5
                className="card-title text-muted mb-0"
                style={{ marginLeft: "13px", marginTop: "10px" }}
              >
                Events
              </h5>
              <div className="card-body mt-5">
                <h1 className="mb-0">200+</h1>
                <p className="text-muted">20 per Event</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdminHeader />
      <Events1 />
    </section>
  );
};

export default CountCard;
