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

  const registerUser = async (userData, onSuccess, onError) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        onSuccess(data);
      } else {
        onError();
      }
    } catch (error) {
      console.error("Registration error:", error);
      onError();
    }
  };

  const loginUser = async (userData, onSuccess, onError) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        onSuccess(data);
      } else {
        onError();
      }
    } catch (error) {
      console.error("Login error:", error);
      onError();
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
    registerUser,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};

export { EventProvider, EventContext };
