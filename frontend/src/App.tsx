import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@fontsource/inter";
import Button from "@mui/joy/Button";

//pages
import CourseTable from "./Pages/CourseTable";
import StudentTable from "./Pages/StudentTable";
import OfferingTable from "./Pages/OfferingTable";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
         

          <Routes>
            <Route path="/students" element={<StudentTable />} />
            <Route path="/courses" element={<CourseTable />} />
            <Route path="/offerings" element={<OfferingTable />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
