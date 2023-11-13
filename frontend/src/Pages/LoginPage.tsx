// LoginPage.js
import React from "react";
import StudentLogin from "../Components/Login/StudentLogin";
import "../Pages/StudentLoginStyles.css";

const LoginPage = () => {
  return (
    <div className="bodyjank">
      <div className="login-page">
        <StudentLogin />
      </div>
    </div>
  );
};

export default LoginPage;
