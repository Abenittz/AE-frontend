import React, { useState, useEffect, createContext } from "react";

const SponsorContext = createContext();

const SponsorProvider = ({ children }) => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const getSponsors = async () => {
      const sponsorsFromServer = await fetchSponsors();
      setSponsors(sponsorsFromServer);
    };
    getSponsors();
  }, []);

  const fetchSponsors = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/sponsors/");
    const data = await res.json();
    return data;
  };

  const contextValue = { sponsors };

  return (
    <SponsorContext.Provider value={contextValue}>
      {children}
    </SponsorContext.Provider>
  );
};

export { SponsorProvider, SponsorContext };
