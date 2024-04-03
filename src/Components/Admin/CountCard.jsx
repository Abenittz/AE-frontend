import React, { useContext } from "react";
import AdminHeader from "./AdminHeader";
import Events1 from "../Events";
import { EventContext } from "../../MyContext";
import { SpeakerContext } from "../../SpeakerContext";
import EventList from "./EventList";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";

const CountCard = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const { events } = useContext(EventContext);
  console.log(events);
  const count = events.length;
  // const { speakers } = useContext(SpeakerContext);

  // if (!speakers || speakers.length === 0) {
  //   return <div>Loading...</div>;
  // }
  // const speakerscount = speakers.length;

  // console.log(speakers);

  return (
    <section id="events">
      <div className="container mt-5" id="headerAdmin">
        <div className="row">
          <div className="col-md-3">
            <div className="card border-start mt-1 p-3 d-flex flex-column">
              <div
                className="decore bg-primary position-absolute top-0 start-0 h-100 rounded-start"
                style={{ width: "6px" }}
              ></div>
              <div className="card-body ps-2">
                <h5 className="card-title text-muted mb-0  me-4">Events</h5>
                <h1 className="mb-0 mt-4">
                  {count}
                  <span className="fs-3">+</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-start mt-1 p-3 d-flex flex-column">
              <div
                className="decore bg-primary position-absolute top-0 start-0 h-100 rounded-start"
                style={{ width: "6px" }}
              ></div>
              <div className="card-body ps-2">
                <h5 className="card-title text-muted mb-0  me-4">Speakers</h5>
                <h1 className="mb-0 mt-4">
                  {count}
                  <span className="fs-3">+</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-start mt-1 p-3 d-flex flex-column">
              <div
                className="decore bg-primary position-absolute top-0 start-0 h-100 rounded-start"
                style={{ width: "6px" }}
              ></div>
              <div className="card-body ps-2">
                <h5 className="card-title text-muted mb-0  me-4">Sponsors</h5>
                <h1 className="mb-0 mt-4">
                  {count}
                  <span className="fs-3">+</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-start mt-1 p-3 d-flex flex-column">
              <div
                className="decore bg-primary position-absolute top-0 start-0 h-100 rounded-start"
                style={{ width: "6px" }}
              ></div>
              <div className="card-body ps-2">
                <h5 className="card-title text-muted mb-0  me-4">Attendants</h5>
                <h1 className="mb-0 mt-4">
                  {count}
                  <span className="fs-3">+</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdminHeader />
      <SearchBar />
      <EventList />
    </section>
  );
};

export default CountCard;
