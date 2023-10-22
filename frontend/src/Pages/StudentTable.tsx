// StudentTable.tsx
//For design
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";

import React, { useState, useEffect } from "react";
import axios from "axios";

type Student = {
  student_id: string;
  name: string;
  year: string;
  transfer: string;
  // ... other fields
};

const StudentTable: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hhqv2backend.vercel.app/api/student"
        );
        setStudents(response.data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="StudentTable">
      <header className="StudentTable-Header">
        <Sheet
          variant="solid"
          color="neutral"
          invertedColors
          sx={{
            pt: 1,
            borderRadius: "sm",
            transition: "0.3s",
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
          <h1>Students</h1>
          <Table
            hoverRow
            borderAxis="both"
            size="md"
            stickyHeader
            variant="soft"
          >
            <caption> Students Table</caption>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Year</th>
                <th>Transfer</th>
                {/* ... other headers */}
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.student_id}>
                  <td>{student.student_id}</td>
                  <td>{student.name}</td>
                  <td>{student.year}</td>
                  <td>{student.transfer}</td>
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

export default StudentTable;
