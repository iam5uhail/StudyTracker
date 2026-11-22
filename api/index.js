const express = require("express");
const cors = require("cors");
const dns = require("dns");
const mongoose = require("mongoose");
require("dotenv").config();

// Workaround for Node.js SRV DNS resolution on Windows (local only)
if (process.env.VERCEL !== "1") {
  try {
    dns.setServers(["8.8.8.8", "8.8.4.4"]);
  } catch (e) {}
}

const app = express();
app.use(cors());
app.use(express.json({ limit: "25mb" }));

// MongoDB Atlas URI provided by user
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://suhailk241_db_user:Mhv5xh1pQfys3w1T@cluster0.7rmyp5r.mongodb.net/studytracker?retryWrites=true&w=majority";

// Cached connection for Serverless / Local reuse
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 8000,
      bufferCommands: false
    }).then((m) => m);
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("MongoDB Atlas connection error:", e.message);
    throw e;
  }
  return cached.conn;
}

// Progress Schema: Stores full student learning progress, DSA solutions, notes, and MCQs
const ProgressSchema = new mongoose.Schema({
  userId: { type: String, default: "default_user", unique: true },
  startDate: { type: String, default: "2026-11-21" },
  theme: { type: String, default: "black" },
  days: { type: Array, default: [] },
  syntaxCodeByDay: { type: Object, default: {} },
  selectedMcqAnswers: { type: Object, default: {} },
  lastUpdated: { type: Date, default: Date.now }
}, { timestamps: true, minimize: false });

const StudyProgress = mongoose.models.StudyProgress || mongoose.model("StudyProgress", ProgressSchema);

// In-memory seed state fallback
const { initialSubjects, initialDailyGoals, initialDailyLogs } = require("./data/seedData");
let state = {
  subjects: JSON.parse(JSON.stringify(initialSubjects)),
  dailyGoals: JSON.parse(JSON.stringify(initialDailyGoals)),
  dailyLogs: JSON.parse(JSON.stringify(initialDailyLogs))
};

// Health check with DB status
app.get("/api/health", async (req, res) => {
  await connectDB();
  res.json({
    status: "ok",
    dbConnected: mongoose.connection.readyState === 1,
    timestamp: new Date().toISOString()
  });
});

// GET Progress from MongoDB
app.get("/api/progress", async (req, res) => {
  try {
    await connectDB();
    const doc = await StudyProgress.findOne({ userId: "default_user" }).lean();
    if (!doc) {
      return res.json({ success: true, exists: false });
    }
    res.json({
      success: true,
      exists: true,
      data: {
        startDate: doc.startDate,
        theme: doc.theme,
        days: doc.days || [],
        syntaxCodeByDay: doc.syntaxCodeByDay || {},
        selectedMcqAnswers: doc.selectedMcqAnswers || {},
        lastUpdated: doc.lastUpdated
      }
    });
  } catch (err) {
    console.error("Error fetching progress:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// SAVE / UPSERT Progress to MongoDB
app.post("/api/progress", async (req, res) => {
  try {
    await connectDB();
    const { startDate, theme, days, syntaxCodeByDay, selectedMcqAnswers } = req.body;

    const update = {
      lastUpdated: new Date()
    };
    if (startDate) update.startDate = startDate;
    if (theme) update.theme = theme;
    if (days && Array.isArray(days)) update.days = days;
    if (syntaxCodeByDay) update.syntaxCodeByDay = syntaxCodeByDay;
    if (selectedMcqAnswers) update.selectedMcqAnswers = selectedMcqAnswers;

    const doc = await StudyProgress.findOneAndUpdate(
      { userId: "default_user" },
      { $set: update },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.json({ success: true, message: "Progress saved to MongoDB Atlas", lastUpdated: doc.lastUpdated });
  } catch (err) {
    console.error("Error saving progress:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET all student data
app.get("/api/data", (req, res) => {
  res.json({ success: true, ...state });
});

// Legacy fallback route for /api/tracks
app.get("/api/tracks", (req, res) => {
  res.json({ success: true, tracks: state.subjects });
});

// CREATE Subject
app.post("/api/subjects", (req, res) => {
  const { name, category, color, description } = req.body;
  if (!name) return res.status(400).json({ success: false, message: "Name is required" });

  const newSubject = {
    id: "sub-" + Date.now().toString(36),
    name,
    category: category || "General",
    color: color || "blue",
    icon: "BookOpen",
    description: description || "",
    topics: []
  };

  state.subjects.push(newSubject);
  res.status(201).json({ success: true, subject: newSubject, subjects: state.subjects });
});

// DELETE Subject
app.delete("/api/subjects/:id", (req, res) => {
  state.subjects = state.subjects.filter(s => s.id !== req.params.id);
  res.json({ success: true, subjects: state.subjects });
});

// Standalone local server listener
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`StudyTracker API running on port ${PORT}`);
    connectDB();
  });
}

// Export for Vercel Serverless Function
module.exports = app;
