import React from "react";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";

const HomePage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // stack elements vertically
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px", // space between elements
      }}
    >
      <h1>Hello</h1>
      <h2>Click on one of the buttons to see how the pages are set up</h2>
      <div>
        <Divider sx={{ "--Divider-childPosition": "50%" }}>
          <Button variant="soft" component="a" href="/students">
            Students
          </Button>
          <Button variant="soft" component="a" href="/courses">
            Courses
          </Button>
          <Button variant="soft" component="a" href="/offerings">
            Offerings
          </Button>
          <Button variant="soft" component="a" href="/dropdown">
            Dropdown
          </Button>
          <Button variant="soft" component="a" href="/sidebar">
            sidebar
          </Button>
        </Divider>
      </div>
    </div>
  );
};

export default HomePage;
