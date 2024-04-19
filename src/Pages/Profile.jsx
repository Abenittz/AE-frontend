import React from "react";
import duresaImage from "../img/duresa.jpg";

const Profile = () => {
  return (
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
                  <h3 className="card-title">Zyneb</h3>
                  <p className="lead">Tech profisionalist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
