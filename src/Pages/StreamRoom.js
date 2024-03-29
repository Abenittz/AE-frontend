import React from "react";

const StreamRoom = () => {
  return (
    <main className="mt-5">
      {/* <!-- <div id="users-list"></div> --> */}

      <h1 id="site-title">Ivy Streams</h1>
      <div id="join-wrapper">
        <input id="username" type="text" placeholder="Enter your name..." />
        <button id="join-btn">Join Stream</button>
      </div>
      <div id="user-streams"></div>

      {/* <!-- Wrapper for join button --> */}
      <div id="footer">
        <div className="icon-wrapper">
          <img
            className="control-icon"
            id="camera-btn"
            src={require("../img/video.svg")}
            alt="..."
          />
          <p>Cam</p>
        </div>

        <div className="icon-wrapper">
          <img
            className="control-icon"
            id="mic-btn"
            src={require("../img/microphone.svg")}
            alt="..."
          />
          <p>Mic</p>
        </div>

        <div className="icon-wrapper">
          <img
            className="control-icon"
            id="leave-btn"
            src={require("../img/leave.svg")}
            alt="..."
          />
          <p>Leave</p>
        </div>
      </div>
    </main>
  );
};

export default StreamRoom;
