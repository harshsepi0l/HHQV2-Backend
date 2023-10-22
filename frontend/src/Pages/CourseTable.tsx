// CourseTable.tsx

//For design
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";

import React, { useState, useEffect } from "react";
import axios from "axios";

type Course = {
  course_id: string;
  title: string;
  credit_type: string;
  description: string;
  // ... other fields
};

const CourseTable: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hhqv2backend.vercel.app/api/course"
        );
        setCourses(response.data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="CourseTable">
      <header className="CourseTable-Header">
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
          <h1>Courses</h1>
          <Table
            hoverRow
            borderAxis="both"
            size="md"
            stickyHeader
            variant="soft"
          >
            <caption> Courses Table</caption>
            <thead>
              <tr>
                <th style={{ width: "5%" }}>ID</th>
                <th style={{ width: "20%" }}>Title</th>
                <th style={{ width: "5%" }}>Credit Type</th>
                <th>Description</th>
                {/* ... other headers */}
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.course_id}>
                  <td>{course.course_id}</td>
                  <td>{course.title}</td>
                  <td>{course.credit_type}</td>
                  <td>{course.description}</td>
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

export default CourseTable;
