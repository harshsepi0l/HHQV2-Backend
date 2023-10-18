
import React, { useState, useEffect } from "react";
import axios from "axios";

// Make a interface to structure each student
type Student = {
    student_id: string;
    name: string;
    year: string;
    transfer: string;
}

// Construct the table to display the students
const StudentTable: React.FC = () => {
    // Hook to hold the students in the table
    const [students, setStudents] = useState<Student[]>([]);

    // Grab the students from the database
    useEffect(() => {
        // Fetch the data
        const fetchData = async () => {
          try {
            // Get the data from the database using axios and store in response
            const response = await axios.get("http://localhost:3001/student");
            //set the response data in the students hook
            setStudents(response.data);
            
          } catch (error) {
            console.error("Failed to fetch courses:", error);
          }
        };
    
        fetchData();
      }, []);

    return(
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
                    {/* Map the student to row */}
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
                </table>
              </header>
            </div>
    );
};

export default StudentTable;