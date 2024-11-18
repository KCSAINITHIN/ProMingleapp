import React, { useState, useEffect } from "react";
import axios from "axios";
import "./poll.css";

const LocationPoll = ({ groupId }) => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get(`/api/poll/${groupId}/locations`);
        setLocations(response.data.locations);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, [groupId]);

  const handleSubmit = async () => {
    try {
      await axios.post(`/api/poll/${groupId}/vote`, { location: selectedLocation });
      alert("Your vote has been submitted!");
    } catch (error) {
      console.error("Error submitting vote:", error);
    }
  };

  return (
    <div className="poll-container">
      <h2>Vote for a Meeting Location</h2>
      {locations.map((location) => (
        <div className="poll-option" key={location}>
          <input
            type="radio"
            name="location"
            value={location}
            onChange={(e) => setSelectedLocation(e.target.value)}
          />
          {location}
        </div>
      ))}
      <button onClick={handleSubmit} className="poll-submit">Submit</button>
    </div>
  );
};

export default LocationPoll;
