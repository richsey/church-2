import express from "express";
import db from "../utils/db.js";

const router = express.Router();

// Middleware to parse JSON request bodies
router.use(express.json());

// Insert a new Bible verse
router.post("/api/add-verse", async (req, res) => {
  const { verse, reference } = req.body;

  if (!verse || !reference) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const { data, error } = await db
      .from("scriptures")
      .insert([{ verse, reference }])
      .select();

    if (error) throw error;

    res.status(201).json({
      message: "Verse added successfully",
      ...data[0],
    });
  } catch (error) {
    console.error("Error inserting scripture:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get random scripture
router.get("/random-verse", async (req, res) => {
  try {
    const { data, error } = await db
      .from("scriptures")
      .select("*")
      .order("id", { ascending: false });

    if (error) throw error;

    if (data.length === 0)
      return res.status(404).json({ error: "No verses found." });

    const randomVerse = data[Math.floor(Math.random() * data.length)];

    res.json(randomVerse);
  } catch (err) {
    console.error("Error fetching verse:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export { router as ScriptureRoutes };
