import React from "react";

const Lobby = () => {
  return (
    <>
      <section id="events">
        <div className="container min-vh-100">
          <div className="row mt-3 justify-content-center">
            <div className="col-md-8">
              <div className="card m-3 p-3">
                <div className="card-body">
                  <h3 className="card-title text-center">Lobby</h3>
                  <form>
                    <div className="mb-3 mt-4">
                      <div className="row">
                        <div className="col">
                          <label className="form-label text-center">
                            Enter the channelName
                          </label>
                          <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="channer name"
                          ></input>

                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Join
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lobby;
