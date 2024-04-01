import React, { useContext } from "react";
import AdminHeader from "./AdminHeader";
import Events1 from "./Events";
import { EventContext } from "../MyContext";
import { SpeakerContext } from "../SpeakerContext";
import EventList from "./EventList";

const CountCard = () => {
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
            <div className="card mt-1 p-3 ">
              <h5
                className="card-title text-muted mb-0"
                style={{ marginLeft: "13px", marginTop: "10px" }}
              >
                Events
              </h5>
              <div className="card-body mt-5">
                <h1 className="mb-0">{count}+</h1>
                <p className="text-muted">20 per Event</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-1 p-3">
              <h5
                className="card-title text-muted mb-0"
                style={{ marginLeft: "13px", marginTop: "10px" }}
              >
                Speakers
              </h5>
              <div className="card-body mt-5">
                <h1 className="mb-0">20+</h1>
                <p className="text-muted">20 per Event</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-1 p-3">
              <h5
                className="card-title text-muted mb-0"
                style={{ marginLeft: "13px", marginTop: "10px" }}
              >
                Sponsors
              </h5>
              <div className="card-body mt-5">
                <h1 className="mb-0">200+</h1>
                <p className="text-muted">20 per Event</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-1 p-3">
              <h5
                className="card-title text-muted mb-0"
                style={{ marginLeft: "13px", marginTop: "10px" }}
              >
                Atendants
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

      <EventList />
    </section>
  );
};

export default CountCard;
