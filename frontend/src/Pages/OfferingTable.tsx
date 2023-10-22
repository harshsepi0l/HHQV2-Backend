// CourseTable.tsx

//For design
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";

import React, { useState, useEffect } from "react";
import axios from "axios";

type Offering = {
  offering_id: string;
  course_id: string;
  comments: string;
  status: string;
  credit: string;
  term_id: string;
  start_time: string;
  end_time: string;
  weekdays: string;
  capacity: string;
  active_students: string;
  section_number: string;
  faculty_name: string;
  building: string;
  room: string;
  // ... other fields
};

const OfferingTable: React.FC = () => {
  const [offerings, setOfferings] = useState<Offering[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hhqv2backend.vercel.app/api/offering"
        );
        setOfferings(response.data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="CourseTable">
      <header className="CourseTable-Header">
        <h1>Courses</h1>
        <Table hoverRow borderAxis="both" size="md" stickyHeader variant="soft">
          <thead>
            <tr>
              <th style={{ width: "5%" }}>Offering ID</th>
              <th style={{ width: "5%" }}>Course ID</th>
              <th style={{ width: "5%" }}>Comments</th>
              <th style={{ width: "5%" }}>Status</th>
              <th style={{ width: "5%" }}>Credit</th>
              <th style={{ width: "5%" }}>Term ID</th>
              <th style={{ width: "5%" }}>Start Time</th>
              <th style={{ width: "5%" }}>End_time</th>
              <th style={{ width: "5%" }}>Weekdays</th>
              <th style={{ width: "5%" }}>Capacity</th>
              <th style={{ width: "5%" }}>Active Students</th>
              <th style={{ width: "5%" }}>Section Number</th>
              <th style={{ width: "5%" }}>Faculty Name</th>
              <th style={{ width: "5%" }}>Building</th>
              <th style={{ width: "5%" }}>Room</th>
              {/* ... other headers */}
            </tr>
          </thead>
          <tbody>
            {offerings.map((offering) => (
              <tr key={offering.offering_id}>
                <td>{offering.course_id}</td>
                <td>{offering.comments}</td>
                <td>{offering.status}</td>
                <td>{offering.credit}</td>
                <td>{offering.term_id}</td>
                <td>{offering.start_time}</td>
                <td>{offering.end_time}</td>
                <td>{offering.weekdays}</td>
                <td>{offering.capacity}</td>
                <td>{offering.active_students}</td>
                <td>{offering.section_number}</td>
                <td>{offering.faculty_name}</td>
                <td>{offering.building}</td>
                <td>{offering.room}</td>
                {/* ... other fields */}
              </tr>
            ))}
          </tbody>
        </Table>
      </header>
    </div>
  );
};

export default OfferingTable;
