import React, { createContext, useState, useEffect } from "react";

// Create the context
const EventContext = createContext();

// Create a provider component
const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const eventsFromServer = await fetchEvents();
        setEvents(eventsFromServer);
        setLoading(false); // Once data is fetched, set loading to false
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false); // Set loading to false in case of error too
      }
    };
    getEvents();
  }, []);

  const fetchEvents = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/events/");
    const data = await res.json();
    return data;
  };

  // const getEvent = async (eventId) => {
  //   const res = await fetch(`http://10.240.68.67:8000/api/event/${eventId}`);
  //   const data = await res.json();
  //   return data.data;
  // };

  const loginUser = async (event_id, email, fullname) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/attendee/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ event_id, email, fullname }),
      });

      if (!response.ok) {
        throw new Error("User login failed");
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  const contextValue = {
    events,
    // getEvent,
    loginUser,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};

export { EventProvider, EventContext };
