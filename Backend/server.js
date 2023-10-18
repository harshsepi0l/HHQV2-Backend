const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();

app.use(cors());

app.get("/courses", async (req, res) => {
  try {
    const courses = await prisma.course.findMany();
    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Database error" });
  }
});

app.get("/student", async (req, res) => {
  try {
    const student = await prisma.student.findMany();
    res.json(student);
  } catch (error) {
    console.error("Error fetching student table:", error);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
