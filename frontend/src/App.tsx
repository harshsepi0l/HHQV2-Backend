import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CourseTable from "./CourseTable";
import StudentTable from "./StudentTable";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/students">Students</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
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
