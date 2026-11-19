const express = require("express");
const cors = require("cors");
const { initialSubjects, initialDailyGoals, initialDailyLogs } = require("./data/seedData");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// In-memory state for API (client also saves in localStorage for full offline support)
let state = {
  subjects: JSON.parse(JSON.stringify(initialSubjects)),
  dailyGoals: JSON.parse(JSON.stringify(initialDailyGoals)),
  dailyLogs: JSON.parse(JSON.stringify(initialDailyLogs))
};

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
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

// ADD Topic
app.post("/api/subjects/:id/topics", (req, res) => {
  const subject = state.subjects.find(s => s.id === req.params.id);
  if (!subject) return res.status(404).json({ success: false, message: "Subject not found" });

  const { title, notes, confidence } = req.body;
  const newTopic = {
    id: "top-" + Date.now().toString(36),
    title: title || "New Topic",
    status: "todo",
    notes: notes || "",
    minutesSpent: 0,
    confidence: confidence || "medium"
  };

  subject.topics.push(newTopic);
  res.status(201).json({ success: true, topic: newTopic, subject });
});

// UPDATE Topic status / notes / confidence
app.patch("/api/subjects/:id/topics/:topicId", (req, res) => {
  const subject = state.subjects.find(s => s.id === req.params.id);
  if (!subject) return res.status(404).json({ success: false, message: "Subject not found" });

  const topic = subject.topics.find(t => t.id === req.params.topicId);
  if (!topic) return res.status(404).json({ success: false, message: "Topic not found" });

  const { status, notes, confidence, minutesSpent, title } = req.body;
  if (status !== undefined) topic.status = status;
  if (notes !== undefined) topic.notes = notes;
  if (confidence !== undefined) topic.confidence = confidence;
  if (minutesSpent !== undefined) topic.minutesSpent = minutesSpent;
  if (title !== undefined) topic.title = title;

  res.json({ success: true, topic, subject });
});

// LOG Study Session
app.post("/api/logs", (req, res) => {
  const { subjectName, topicTitle, durationMinutes, summary, rating } = req.body;
  const newLog = {
    id: "log-" + Date.now().toString(36),
    date: new Date().toISOString().slice(0, 10),
    subjectName: subjectName || "General Study",
    topicTitle: topicTitle || "Study Session",
    durationMinutes: Number(durationMinutes) || 30,
    summary: summary || "",
    rating: rating || "Solid Progress"
  };

  state.dailyLogs.unshift(newLog);
  res.status(201).json({ success: true, log: newLog, dailyLogs: state.dailyLogs });
});

// GOALS: Create, Toggle, Delete
app.post("/api/goals", (req, res) => {
  const { title, subjectName, estimatedMinutes } = req.body;
  const newGoal = {
    id: "g-" + Date.now().toString(36),
    title: title || "Study Goal",
    subjectName: subjectName || "General",
    isCompleted: false,
    estimatedMinutes: Number(estimatedMinutes) || 30
  };
  state.dailyGoals.push(newGoal);
  res.status(201).json({ success: true, goal: newGoal, dailyGoals: state.dailyGoals });
});

app.patch("/api/goals/:id", (req, res) => {
  const goal = state.dailyGoals.find(g => g.id === req.params.id);
  if (!goal) return res.status(404).json({ success: false, message: "Goal not found" });

  if (req.body.isCompleted !== undefined) goal.isCompleted = req.body.isCompleted;
  if (req.body.title !== undefined) goal.title = req.body.title;

  res.json({ success: true, goal, dailyGoals: state.dailyGoals });
});

app.delete("/api/goals/:id", (req, res) => {
  state.dailyGoals = state.dailyGoals.filter(g => g.id !== req.params.id);
  res.json({ success: true, dailyGoals: state.dailyGoals });
});

// Standalone local server listener
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Student Learning Tracker API running on port ${PORT}`);
  });
}

// Export for Vercel Serverless Function
module.exports = app;
