import React from "react";
import HeaderAdmin from "./HeaderBak";

const AdminHeader = () => {
  const imageUrl = require("../img/event.jpg");

  return (
    <section id="events">
      <div className="container mt-5" id="headerAdmin">
        <div className="row">
          <div className="col">
            <HeaderAdmin imageUrl={imageUrl} className="card mt-3 p-5">
              <div className="card-title">
                <h1 className="mt-2 text-white">Developers Meetup</h1>
                <h5 className="text-white">with: Abenezer Tesfaye</h5>
              </div>
              <div className="card-body mt-5 p-0">
                <div className="mt-5">
                  <button className="btn btn-primary">Add Detail</button>
                </div>
              </div>
            </HeaderAdmin>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHeader;
