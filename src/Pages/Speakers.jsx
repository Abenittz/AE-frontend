import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
// import { SpeakersContext } from "../SpeakerContext";

import duresaImage from "../img/duresa.jpg";
import chalaImage from "../img/chala.jpg";
import kumaImage from "../img/kuma.jpg";

const Speakers = () => {
  // const speakers = useContext(SpeakersContext);

  return (
    <section id="speakers">
      <div className="container fade-in">
        <div className="row mt-2">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-light text-center bg-white pb-2 h-100">
              <div className="card-body text-dark">
                <div className="img-area mb-4">
                  <img src={duresaImage} className="card-img-top" alt="" />
                </div>
                <h3 className="card-title">Duresa Wata</h3>
                <p className="lead">
                  Computer Science and Engineering Student as Adama Science and
                  Technology University
                </p>
                <button className="btn bg-primary text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-light text-center bg-white pb-2 h-100">
              <div className="card-body text-dark">
                <div className="img-area mb-4">
                  <img src={chalaImage} className="card-img-top" alt="" />
                </div>
                <h3 className="card-title">Chala Olani</h3>
                <p className="lead">
                  Computer Science and Engineering Student as Adama Science and
                  Technology University
                </p>
                <button className="btn bg-primary text-white">
                  learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-light text-center bg-white pb-2 h-100">
              <div className="card-body text-dark">
                <div className="img-area mb-4">
                  <img src={kumaImage} className="card-img-top" alt="" />
                </div>
                <h3 className="card-title">Kuma Telila</h3>
                <p className="lead">
                  Computer Science and Engineering Student as Adama Science and
                  Technology University
                </p>
                <button className="btn bg-primary text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5 text-center">
          <div className="col-12">
            <Link to="/speakers" className="btn btn-warning rounded-pill">
              View All Speakers <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
