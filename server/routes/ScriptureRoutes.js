import express from "express";
import db from "../utils/db.js";

const router = express.Router();

// Insert a new Bible verse
router.post("/api/add-verse", async (req, res) => {
  const { text, reference } = req.body;

  if (!text || !reference) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const [result] = await db.query(
      "INSERT INTO scriptures (text, reference) VALUES (?, ?)",
      [text, reference]
    );

    res.status(201).json({
      message: "Verse added successfully",
      id: result.insertId,
      text,
      reference,
    });
  } catch (error) {
    console.error("Error inserting scripture:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//get random scripture
router.get("/random-verse", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM scriptures ORDER BY RAND() LIMIT 1"
    );
    res.json(rows[0]);
  } catch (err) {
    console.error("Error fetching verse:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export { router as ScriptureRoutes };
