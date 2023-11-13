import React, { useState } from "react";

type StudentLoginProps = {
  onLogin: (studentId: string) => void;
};

const StudentLogin: React.FC<StudentLoginProps> = ({ onLogin }) => {
  const [studentId, setStudentId] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(studentId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Student ID:</label>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default StudentLogin;
