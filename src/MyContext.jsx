import React, { createContext, useState, useEffect } from "react";

// Create the context
const EventContext = createContext();

// Create a provider component
const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsFromServer = await fetchEvents();
        const speakersFromServer = await fetchSpeakers();
        const sponsorsFromServer = await fetchSponsors();
        const attendeesFromServer = await fetchAttendees();
        setEvents(eventsFromServer);
        setSpeakers(speakersFromServer);
        setSponsors(sponsorsFromServer);
        setAttendees(attendeesFromServer);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchEvents = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/events/");
    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }
    return res.json();
  };

  const fetchSpeakers = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/speakers/");
    if (!res.ok) {
      throw new Error("Failed to fetch speakers");
    }
    return res.json();
  };

  const fetchSponsors = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/sponsors/");
    if (!res.ok) {
      throw new Error("Failed to fetch sponsors");
    }
    return res.json();
  };

  const fetchAttendees = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/attendees/");
    if (!res.ok) {
      throw new Error("Failed to fetch attendees");
    }
    return res.json();
  };

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
    loading,
    speakers,
    sponsors,
    attendees,
    error,
    loginUser,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};

export { EventProvider, EventContext };
