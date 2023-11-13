import React from "react";
import StudentRegistration from "../Components/Registration/StudentRegistration";

const RegistrationPage: React.FC = () => {
  const handleStudentRegistration = (studentData: {
    student_id: string;
    name: string;
    year: string;
    transfer: string;
  }) => {
    console.log("Student Registered:", studentData);
    // Logic to handle registration (e.g., API call)
  };

  return (
    <div>
      <StudentRegistration onRegister={handleStudentRegistration} />
    </div>
  );
};

export default RegistrationPage;
