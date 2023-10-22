import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@fontsource/inter";
import Button from "@mui/joy/Button";
import CourseTable from "./Pages/CourseTable";
import StudentTable from "./Pages/StudentTable";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <Button variant="soft" component="a" href="/StudentTable">
                <Link to="/students">Student</Link>
              </Button>
              <Button variant="soft" component="a" href="/CoursesTable">
                <Link to="/courses">Courses</Link>
              </Button>
            </ul>
          </nav>

          <Routes>
            <Route path="/students" element={<StudentTable />} />
            <Route path="/courses" element={<CourseTable />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
