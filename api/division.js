/*
API ENDPOINT FOR DIVISION TABLE
Holds:
division
-- course (foreign key)
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

  try {
    const divisions = await prisma.division.findMany({
      include: {
        course: true, //"Foreign Key" or reference we gave to the table
      },
    });

    res.json(divisions);
  } catch (error) {
    console.error("Error fetching division:", error);
    res.status(500).json({ error: "Database error" });
  }
};
