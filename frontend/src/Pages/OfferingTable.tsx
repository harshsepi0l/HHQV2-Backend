// CourseTable.tsx

//For design
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";

import React, { useState, useEffect } from "react";
import axios from "axios";

type OfferingLevel = {
  offering_id: string;
  level_id: string;
};

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
  offering_level: OfferingLevel[]; //this line is to invoke a link to the other table.
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
          <Divider sx={{ "--Divider-childPosition": "50%" }}>
            <Button variant="soft" component="a" href="/students">
              Students
            </Button>
            <Button variant="soft" component="a" href="/courses">
              Courses
            </Button>
            <Button variant="soft" component="a" href="/offerings">
              Offerings
            </Button>
            <Button variant="soft" component="a" href="/homepage">
              Home
            </Button>
          </Divider>
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
                <th style={{ width: "7%", backgroundColor: "black" }}>
                  Offering ID
                </th>
                <th style={{ width: "5%", backgroundColor: "black" }}>
                  Course ID
                </th>
                <th style={{ width: "15%", backgroundColor: "black" }}>
                  Comments
                </th>
                <th style={{ width: "3%", backgroundColor: "black" }}>
                  Status
                </th>
                <th style={{ width: "3%", backgroundColor: "black" }}>
                  Credit
                </th>
                <th style={{ width: "5%", backgroundColor: "black" }}>
                  Term ID
                </th>
                <th style={{ width: "5%", backgroundColor: "black" }}>
                  Start Time
                </th>
                <th style={{ width: "5%", backgroundColor: "black" }}>
                  End Time
                </th>
                <th style={{ width: "5%", backgroundColor: "black" }}>
                  Weekdays
                </th>
                <th style={{ width: "5%", backgroundColor: "black" }}>
                  Capacity
                </th>
                <th style={{ width: "5%", backgroundColor: "black" }}>
                  Active Students
                </th>
                <th style={{ width: "5%", backgroundColor: "black" }}>
                  Section Number
                </th>
                <th style={{ width: "10%", backgroundColor: "black" }}>
                  Faculty Name
                </th>
                <th style={{ width: "5%", backgroundColor: "black" }}>
                  Building
                </th>
                <th style={{ width: "5%", backgroundColor: "black" }}>Room</th>
                <th style={{ width: "5%", backgroundColor: "black" }}>
                  Level ID (FQ)
                </th>
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
                  <td>
                    {offering.offering_level.map((level) => (
                      <tr key={level.level_id}>{level.level_id}</tr> // Display each level_id from reference
                    ))}
                  </td>
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
