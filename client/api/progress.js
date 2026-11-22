const dns = require("dns");
try {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch (e) {}

const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://suhailk241_db_user:Mhv5xh1pQfys3w1T@cluster0.7rmyp5r.mongodb.net/studytracker?retryWrites=true&w=majority";

let isConnected = false;
async function connectDB() {
  if (isConnected || mongoose.connection.readyState >= 1) {
    isConnected = true;
    return;
  }
  await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 8000 });
  isConnected = true;
}

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

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    await connectDB();

    if (req.method === "GET") {
      const doc = await StudyProgress.findOne({ userId: "default_user" }).lean();
      if (!doc) {
        return res.status(200).json({ success: true, exists: false, connected: true });
      }
      return res.status(200).json({
        success: true,
        exists: true,
        connected: true,
        data: {
          startDate: doc.startDate,
          theme: doc.theme,
          days: doc.days || [],
          syntaxCodeByDay: doc.syntaxCodeByDay || {},
          selectedMcqAnswers: doc.selectedMcqAnswers || {},
          lastUpdated: doc.lastUpdated
        }
      });
    }

    if (req.method === "POST") {
      const { startDate, theme, days, syntaxCodeByDay, selectedMcqAnswers } = req.body || {};
      const update = { lastUpdated: new Date() };
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

      return res.status(200).json({
        success: true,
        message: "Saved to MongoDB Atlas",
        connected: true,
        lastUpdated: doc.lastUpdated
      });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("MongoDB handler error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
};
