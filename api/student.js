/*
API ENDPOINT FOR STUDENT TABLE
Holds:
student
-- enrollment (foreign key)
*/

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle OPTIONS method (important for preflight)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Handle POST request
  if (req.method === "POST") {
    try {
      // Parse the incoming data
      const studentData = JSON.parse(req.body);

      // Add validation if necessary

      // Create a new student in the database
      const createdStudent = await prisma.student.create({
        data: studentData,
      });

      res.status(201).json(createdStudent);
    } catch (error) {
      console.error("Error handling POST request:", error);
      res.status(500).json({ error: "Error processing request" });
    }
  }

  // Handle GET request
  else if (req.method === "GET") {
    try {
      const students = await prisma.student.findMany({
        include: {
          enrollment: true, // Include related enrollments
        },
      });
      res.json(students);
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).json({ error: "Database error" });
    }
  }

  // Handle other methods (PUT, DELETE, etc.) or send a Method Not Allowed response
  else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
