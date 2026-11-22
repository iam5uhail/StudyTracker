import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://suhailk241_db_user:Mhv5xh1pQfys3w1T@cluster0.7rmyp5r.mongodb.net/studytracker?retryWrites=true&w=majority";

export default async function handler(req, res) {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 8000, bufferCommands: false });
    }
    return res.status(200).json({ status: "ok", db: "connected", time: new Date().toISOString() });
  } catch (err) {
    return res.status(500).json({ status: "error", message: err.message });
  }
}
