import React, { useState, useEffect } from "react";
import axios from "axios";

const FinalizedLocation = ({ groupId }) => {
  const [location, setLocation] = useState(null);
  const [meetingDate, setMeetingDate] = useState(null);

  useEffect(() => {
    const fetchFinalizedLocation = async () => {
      try {
        const response = await axios.get(`/api/meetingHistory/${groupId}/finalized`);
        const { location, meeting_date } = response.data;
        setLocation(location);
        setMeetingDate(meeting_date);
      } catch (error) {
        console.error("Error fetching finalized location:", error);
      }
    };

    fetchFinalizedLocation();
  }, [groupId]);

  return (
    <div className="finalized-location">
      {location ? (
        <div>
          <h3>Finalized Meeting Location</h3>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Date:</strong> {meetingDate}</p>
        </div>
      ) : (
        <p>No meeting location finalized yet.</p>
      )}
    </div>
  );
};

export default FinalizedLocation;
