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
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
