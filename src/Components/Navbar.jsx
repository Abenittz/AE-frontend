import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import duresaImage from "../img/duresa.jpg";
import { EventContext } from "../MyContext";

const Navbar = () => {
  const { user } = useContext(EventContext);
  const { getuser } = useContext(EventContext);
  const { fullname } = user;
  console.log(fullname);
  console.log(user);

  // console.log(getuser.fullname);
  console.log(user.user_id);
  const location = useLocation();
  const hidenavpath = ["/room"];

  const shouldhidenavbar = hidenavpath.includes(location.pathname);

  return (
    !shouldhidenavbar && (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3 border-bottom"
        id="myNav"
      >
        <div className="container">
          <NavLink to="/home" className="navbar-brand fw-bold">
            <span className="text-primary">Dev</span>Meetup
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/events" className="nav-link">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/speakers" className="nav-link">
                  Speakers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li>
                <Link to={"/profile"}>
                  {getuser.map((user) => (
                    <div className="card p-1 px-2 ms-3" key={user.user_id}>
                      <div className="card-content d-flex justify-content-end align-items-center">
                        <p className="m-0">{user.fullname}</p>
                        <img
                          src={duresaImage}
                          className="card-img ms-2"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "100%",
                          }}
                        ></img>
                      </div>
                    </div>
                  ))}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          </div>
        </div>
      </nav>
    )
  );
};

export default Navbar;
