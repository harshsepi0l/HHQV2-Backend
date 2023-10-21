// StudentTable.tsx

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
        <h1>Students</h1>
        <table>
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
                <td>{student.name}</td>
                <td>{student.year}</td>
                <td>{student.transfer}</td>
                {/* ... other fields */}
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
};

export default StudentTable;
