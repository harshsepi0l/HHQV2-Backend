// CourseTable.tsx

//For design
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";

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
    <div className="OfferingTable">
      <header className="OfferingTable-Header">
        <Sheet
          variant="solid"
          color="neutral"
          invertedColors
          sx={{
            pt: 1,
            borderRadius: "sm",
            transition: "0.9s",
            background: (theme) =>
              `linear-gradient(45deg, ${theme.vars.palette.primary[900]}, ${theme.vars.palette.primary[900]})`,
            "& tr:last-child": {
              "& td:first-child": {
                borderBottomLeftRadius: "8px",
              },
              "& td:last-child": {
                borderBottomRightRadius: "8px",
              },
            },
          }}
        >
          <ul>
            <Button variant="soft" component="a" href="/students">
              Students
            </Button>
            <Button variant="soft" component="a" href="/courses">
              Courses
            </Button>
            <Button variant="soft" component="a" href="/offerings">
              Offerings
            </Button>
          </ul>
          <h1>Offerings</h1>

          <Table
            hoverRow
            borderAxis="both"
            stickyHeader
            size="md"
            variant="soft"
          >
            <caption> Offerings Table</caption>
            <thead>
              <tr>
                <th style={{ width: "7%" }}>Offering ID</th>
                <th style={{ width: "5%" }}>Course ID</th>
                <th style={{ width: "15%" }}>Comments</th>
                <th style={{ width: "3%" }}>Status</th>
                <th style={{ width: "3%" }}>Credit</th>
                <th style={{ width: "5%" }}>Term ID</th>
                <th style={{ width: "5%" }}>Start Time</th>
                <th style={{ width: "5%" }}>End Time</th>
                <th style={{ width: "5%" }}>Weekdays</th>
                <th style={{ width: "5%" }}>Capacity</th>
                <th style={{ width: "5%" }}>Active Students</th>
                <th style={{ width: "5%" }}>Section Number</th>
                <th style={{ width: "10%" }}>Faculty Name</th>
                <th style={{ width: "5%" }}>Building</th>
                <th style={{ width: "5%" }}>Room</th>
                {/* ... other headers */}
              </tr>
            </thead>
            <tbody>
              {offerings.map((offering) => (
                <tr key={offering.offering_id}>
                  <td> {offering.offering_id}</td>
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
        </Sheet>
      </header>
    </div>
  );
};

export default OfferingTable;
