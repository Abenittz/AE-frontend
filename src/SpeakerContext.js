import React, { createContext, useState, useEffect } from "react";

const SpeakerContext = createContext();

const SpeakerProvider = ({ children }) => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const getSpeackers = async () => {
      const speakersFromServer = await fetchSpeakers();
      setSpeakers(speakersFromServer);
    };
    getSpeackers();
  }, []);

  const fetchSpeakers = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/speakers/");
    const data = await res.json();
    return data;
  };

  const contextValue = { speakers };

  return (
    <SpeakerContext.Provider value={contextValue}>
      {children}
    </SpeakerContext.Provider>
  );
};

export { SpeakerProvider, SpeakerContext };
