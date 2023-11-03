import React, { useEffect, useState } from "react";
import axios from "axios";

export function SubjectDropdown() {
  const [subjects, setSubjects] = useState([]); // For storing the fetched subjects with their courses
  const [selectedSubjects, setSelectedSubjects] = useState([""]); // For storing user's selections

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hhqv2backend.vercel.app/api/subject"
        );
        setSubjects(response.data); // Subjects Array with Course Array (FK)
      } catch (error) {
        console.error("Failed to fetch subjects:", error);
      }
    };

    fetchData();
  }, []);

  // Function to handle adding a new dropdown
  const addDropdown = () => {
    setSelectedSubjects([...selectedSubjects, ""]); // Add a new selection entry
  };

  // Function to handle selecting a course in a specific dropdown
  const handleSubjectChange = (event, index) => {
    const updatedSelectedSubjects = [...selectedSubjects];
    updatedSelectedSubjects[index] = event.target.value;
    setSelectedSubjects(updatedSelectedSubjects);
  };

  return (
    <div>
      <h2>Select Subjects:</h2>
      {selectedSubjects.map((selectedSubject, index) => (
        <div key={index}>
          <select
            value={selectedSubject}
            onChange={(event) => handleSubjectChange(event, index)}
          >
            <option value="">Select a course</option>
            {subjects.map((subject) =>
              subject.course.map((course) => (
                <option key={course.course_id} value={course.course_id}>
                  {course.title}
                </option>
              ))
            )}
          </select>
        </div>
      ))}
      <button onClick={addDropdown}>+ Add More...</button>
    </div>
  );
}

export default SubjectDropdown;
