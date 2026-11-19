# 🚀 LearnTracker — Universal Mastery & Pattern Tracker

> **"Learn patterns, not the problem."**  
> A stylish, high-performance personal learning tracker built for mastering **Java topics**, **DSA patterns**, and **any custom roadmap or mentor sheet**. Ready for one-click deployment on **Vercel** with the **MERN** stack.

---

## ✨ Features

- 🌿 **Ultra-Sleek Dark Obsidian Aesthetic**: Inspired by modern mastery platforms with dark obsidian backgrounds (`#060A08`), emerald highlights (`#10B981`), glowing borders, and smooth micro-interactions.
- ⚡ **Universal Sheet Architecture**:
  - Not restricted to DSA or coding! Track Java, System Design, DevOps, Spring Boot, or any mentor's roadmap.
  - Create custom sheets with customized topics and questions.
  - **One-Click Import**: Paste any mentor's list (e.g. `Topic: Problem Name (Difficulty) - Link`) or import JSON backups directly.
  - Export your complete learning data anytime as JSON.
- 🎯 **Preloaded Starter Roadmaps**:
  1. **Pattern Wise DSA Sheet**: Two Pointers, Sliding Window, Binary Search, Trees, and Dynamic Programming.
  2. **Java Core & Concurrency Mastery**: JVM Memory & GC internals, Collections architecture (HashMap, ConcurrentHashMap), Multithreading, ThreadPoolExecutor, and Java 21 Virtual Threads.
  3. **Last Minute 100**: High-yield questions when the interview is close.
- 📊 **Dynamic Analytics & Progress Ring**:
  - SVG Circular progress ring showing overall % completed across all sheets.
  - Difficulty breakdown with visual progress bars for **Easy**, **Medium**, and **Hard**.
- ⭐ **Interview Revision Mode**:
  - Star (⭐) any high-yield problem or tricky Java concept.
  - Switch to the dedicated **Revision Mode** from the left dock for quick last-minute review.
- 📝 **Personal Notes & Solution Code Editor**:
  - Write intuition, time/space complexity, and common edge cases.
  - Store clean solution code with one-click copy.
- 🎉 **Celebration Confetti**:
  - Instant micro-celebrations upon problem completion.
- ☁️ **Vercel & Offline Ready**:
  - Works 100% offline via local browser storage synchronization.
  - Ready for serverless deployment on Vercel with Express API routes.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide React, Canvas Confetti
- **Backend / Serverless**: Node.js, Express, Cors, Dotenv
- **Deployment**: Vercel (Monorepo: Vite client + Express serverless API)

---

## 🏃 Getting Started Locally

### 1. Clone or Open Project
```bash
cd learning-tracker
```

### 2. Install Root & Client Dependencies
```bash
npm install
npm run install-all
```

### 3. Run Development Server
```bash
npm run dev
```
- Client runs on: `http://localhost:3000`
- API runs on: `http://localhost:5000`

---

## 🚀 Deploying to Vercel (1-Click)

The repository includes a preconfigured `vercel.json`:

```json
{
  "version": 2,
  "buildCommand": "npm run build --prefix client",
  "outputDirectory": "client/dist",
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/index.js"
    }
  ]
}
```

### Steps to Deploy:
1. Push your repository to GitHub / GitLab:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: LearnTracker project"
   git remote add origin https://github.com/your-username/learning-tracker.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel automatically detects the Vite client build and the serverless Express API at `/api/index.js`.
4. Click **Deploy**! 🚀
