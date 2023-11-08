import "./Calendar.css";
import React, { useState } from "react";
import Clock from "../Clock/Clock";

const Calendar = () => {
  const [schedule, setSchedule] = useState([
    {
      time: "08:00 AM",
      event: "Applied statistics",
      Bulding: "Olds Upton",
      classNum: 234,
    },
    {
      time: "10:00 AM",
      event: "Advanced Software Development",
      Bulding: "Dewing",
      classNum: 300,
    },
    // Add more schedule items as needed
  ]);
  const [add, setAdd] = useState(false);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  console.log(time);

  // for making the new event item
  const handleSubmission = (event) => {
    event.preventDefault();
    const newEvent = {
      time: convertTo12HourFormat(time),
      event: name,
      Bulding: location,
      classNum: "",
    };
    setSchedule([...schedule, newEvent]);
    setAdd(false);
    setLocation("");
    setName("");
    setTime("");
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setAdd(false);
  };

  const convertTo12HourFormat = (time24hr) => {
    const timeParts = time24hr.split(":");
    let hours = parseInt(timeParts[0], 10);
    const minutes = timeParts[1];

    let meridiem = "AM";

    if (hours >= 12) {
      meridiem = "PM";
      if (hours > 12) {
        hours -= 12;
      }
    }

    const time12hrFormatted = `${hours}:${minutes} ${meridiem}`;
    return time12hrFormatted;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div>
          <Clock />
        </div>
      </div>
      <div className="calendar-body">
        {!add && (
          <div className="schedule-column">
            {schedule.map((item, index) => (
              <div className="schedule-item" key={index}>
                <div className="time-event">
                  <div className="time">{item.time}</div>
                  <div className="event">{item.event}</div>
                </div>
                <div className="location">
                  <div className="building">{item.Bulding}</div>
                  <div className="classNum">{item.classNum}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!add && (
          <button
            className="btn btn-outline_primary"
            onClick={() => setAdd(true)}
          >
            Add to your schedule
          </button>
        )}
        {add && (
          <div className="form-container">
            <form className="form" onSubmit={handleSubmission}>
              <input
                type="text"
                value={name}
                placeholder="What?"
                onChange={(event) => setName(event.target.value)}
                required
              />
              <input
                type="time"
                id="timeInput"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Where?"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                required
              />
              <div className="buttons">
                <button className="btn btn-outline_primary" type="submit">
                  Add
                </button>
                <button
                  className="btn btn-outline_secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;