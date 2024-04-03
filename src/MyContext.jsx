import React, { createContext, useState, useEffect } from "react";

// Create the context
const EventContext = createContext();

// Create a provider component
const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const eventsFromServer = await fetchEvents();
      setEvents(eventsFromServer);
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

  const contextValue = {
    events,
    // getEvent,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};

export { EventProvider, EventContext };
