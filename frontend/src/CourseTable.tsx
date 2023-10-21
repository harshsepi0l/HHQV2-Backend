// CourseTable.tsx

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
        <h1>Courses</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Credit Type</th>
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
        </table>
      </header>
    </div>
  );
};

export default CourseTable;
