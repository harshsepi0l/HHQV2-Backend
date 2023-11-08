import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second (1000 milliseconds)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const twelveHourFormat = hours % 12 || 12; // Convert to 12-hour format
  const date = dateTime.toLocaleDateString();

  return (
    <div className="clock">
      <div>{date}</div>
      <div>
        {twelveHourFormat.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")} {ampm}
      </div>
    </div>
  );
};

export default Clock;
