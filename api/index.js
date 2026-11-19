const express = require("express");
const cors = require("cors");
const { initialTracks } = require("./data/seedData");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// In-memory / persistent track storage
let tracksState = JSON.parse(JSON.stringify(initialTracks));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// GET all tracks
app.get("/api/tracks", (req, res) => {
  res.json({ success: true, tracks: tracksState });
});

// GET single track
app.get("/api/tracks/:trackId", (req, res) => {
  const track = tracksState.find(t => t.id === req.params.trackId);
  if (!track) {
    return res.status(404).json({ success: false, message: "Track not found" });
  }
  res.json({ success: true, track });
});

// CREATE a new track (Universal Track Creator)
app.post("/api/tracks", (req, res) => {
  const { name, subtitle, description, category, icon, topics } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: "Track name is required" });
  }

  const newId = name.toLowerCase().replace(/[^a-z0-9]/g, "-") + "-" + Date.now().toString(36);
  const newTrack = {
    id: newId,
    name,
    badge: (tracksState.length + 1).toString(),
    subtitle: subtitle || "Custom Learning Roadmap",
    description: description || "Custom track created to track personal goals",
    icon: icon || "BookOpen",
    category: category || "General",
    topics: topics || []
  };

  tracksState.push(newTrack);
  res.status(201).json({ success: true, track: newTrack });
});

// DELETE a track
app.delete("/api/tracks/:trackId", (req, res) => {
  tracksState = tracksState.filter(t => t.id !== req.params.trackId);
  res.json({ success: true, message: "Track deleted successfully", tracks: tracksState });
});

// ADD a topic to a track
app.post("/api/tracks/:trackId/topics", (req, res) => {
  const { name, description } = req.body;
  const track = tracksState.find(t => t.id === req.params.trackId);
  if (!track) {
    return res.status(404).json({ success: false, message: "Track not found" });
  }

  const newTopic = {
    id: "topic-" + Date.now().toString(36),
    name: name || "New Topic",
    description: description || "",
    items: []
  };

  track.topics.push(newTopic);
  res.status(201).json({ success: true, topic: newTopic, track });
});

// ADD an item/question to a topic
app.post("/api/tracks/:trackId/topics/:topicId/items", (req, res) => {
  const { title, difficulty, platform, link, tags, notes } = req.body;
  const track = tracksState.find(t => t.id === req.params.trackId);
  if (!track) {
    return res.status(404).json({ success: false, message: "Track not found" });
  }

  const topic = track.topics.find(top => top.id === req.params.topicId);
  if (!topic) {
    return res.status(404).json({ success: false, message: "Topic not found" });
  }

  const newItem = {
    id: "item-" + Date.now().toString(36),
    title: title || "New Learning Item",
    difficulty: difficulty || "Medium",
    platform: platform || "Custom",
    link: link || "",
    tags: Array.isArray(tags) ? tags : (tags ? tags.split(",").map(t => t.trim()) : []),
    notes: notes || "",
    isSolved: false,
    isRevision: false
  };

  topic.items.push(newItem);
  res.status(201).json({ success: true, item: newItem, track });
});

// TOGGLE item solved / revision / update notes
app.patch("/api/tracks/:trackId/items/:itemId", (req, res) => {
  const { isSolved, isRevision, notes, difficulty, title, link } = req.body;
  const track = tracksState.find(t => t.id === req.params.trackId);
  if (!track) {
    return res.status(404).json({ success: false, message: "Track not found" });
  }

  let foundItem = null;
  for (const topic of track.topics) {
    const item = topic.items.find(i => i.id === req.params.itemId);
    if (item) {
      if (typeof isSolved !== "undefined") {
        item.isSolved = isSolved;
        item.solvedAt = isSolved ? new Date().toISOString() : null;
      }
      if (typeof isRevision !== "undefined") item.isRevision = isRevision;
      if (typeof notes !== "undefined") item.notes = notes;
      if (typeof difficulty !== "undefined") item.difficulty = difficulty;
      if (typeof title !== "undefined") item.title = title;
      if (typeof link !== "undefined") item.link = link;
      foundItem = item;
      break;
    }
  }

  if (!foundItem) {
    return res.status(404).json({ success: false, message: "Item not found" });
  }

  res.json({ success: true, item: foundItem, track });
});

// RESET track progress
app.post("/api/tracks/:trackId/reset", (req, res) => {
  const track = tracksState.find(t => t.id === req.params.trackId);
  if (!track) {
    return res.status(404).json({ success: false, message: "Track not found" });
  }

  for (const topic of track.topics) {
    for (const item of topic.items) {
      item.isSolved = false;
      item.isRevision = false;
      item.solvedAt = null;
    }
  }

  res.json({ success: true, message: "Track progress reset", track });
});

// IMPORT custom sheet (JSON / list)
app.post("/api/tracks/import", (req, res) => {
  const { sheetData } = req.body;
  if (!sheetData || !sheetData.name) {
    return res.status(400).json({ success: false, message: "Invalid sheet data" });
  }

  const newTrack = {
    id: "imported-" + Date.now().toString(36),
    name: sheetData.name,
    badge: (tracksState.length + 1).toString(),
    subtitle: sheetData.subtitle || "Imported Roadmap",
    description: sheetData.description || "Imported roadmap / sheet",
    icon: sheetData.icon || "Sparkles",
    category: sheetData.category || "Custom",
    topics: sheetData.topics || []
  };

  tracksState.push(newTrack);
  res.status(201).json({ success: true, track: newTrack, tracks: tracksState });
});

// Standalone local server listener
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Learning Tracker API server running on port ${PORT}`);
  });
}

// Export for Vercel Serverless Function
module.exports = app;
