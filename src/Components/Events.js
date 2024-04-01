import React from "react";

const Events1 = () => {
  return (
    <div className="container mt-5 border rounded p-5">
      <div className="d-flex justify-content-between">
        <div>
          <h1>EVENTS</h1>
        </div>
        <div>
          <button type="submit" class="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>{" "}
            Add Events
          </button>
        </div>
      </div>
      <table class="table ">
        <thead>
          <tr className="p-3">
            <th className="p-3">Name</th>
            <th className="p-3">Visiblity</th>
            <th className="p-3">Start Date</th>
            <th className="p-3">End Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="p-3">Developer Meetup</td>
            <td className="p-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              </svg>
              Live
            </td>
            <td className="p-3">March 14,2014</td>
            <td className="p-3">March 15,2014</td>
          </tr>
          <tr>
            <td className="p-3">Developer Meetup</td>
            <td className="p-3 ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              </svg>
              Live
            </td>
            <td className="p-3">March 14,2014</td>
            <td className="p-3">March 15,2014</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Events1;
