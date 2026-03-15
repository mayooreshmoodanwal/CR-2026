# CR Election 2026 — Voting Portal

A secure, multi-device voting system with face detection, fraud prevention, and an admin panel.

---

## 📁 Folder Structure

```
cr-election/
├── frontend/
│   ├── index.html       ← Main voting UI
│   ├── style.css        ← All styles
│   └── app.js           ← All frontend logic (talks to backend API)
│
├── backend/
│   ├── server.js        ← Express server (all API routes)
│   ├── package.json
│   └── data/            ← JSON "database" files (auto-created)
│       ├── votes.json
│       ├── fraud.json
│       ├── logs.json
│       ├── faces.json
│       ├── settings.json
│       ├── disabled.json
│       └── candidates.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Local Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. Open your browser at `http://localhost:3000`

4. Admin password is: **`admin2025`**  
   *(Change it after first login in Settings)*

---

## ☁️ Deploy on Render (Free Hosting)

> Every device on any network can vote once deployed here.

1. Push this project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "CR Election 2025"
   git remote add origin https://github.com/YOUR_USERNAME/cr-election.git
   git push -u origin main
   ```

2. Go to [render.com](https://render.com) → **New Web Service**

3. Connect your GitHub repo

4. Set these settings:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment:** Node

5. Click **Deploy** — Render gives you a URL like `https://cr-election.onrender.com`

6. Share that URL with students — they can vote from any phone/laptop!

---

## ⚠️ Important Notes

- The `backend/data/` folder is in `.gitignore` — votes are stored on the server, NOT pushed to GitHub (privacy)
- Face data (128-d descriptors) is stored server-side — delete after the election
- Default admin password: `admin2025` — **change this before going live**
- The server auto-creates data files if they don't exist

---

## 🔑 How It Works

| Old (broken) | New (fixed) |
|---|---|
| `localStorage.setItem(...)` | `POST /api/votes` |
| `localStorage.getItem(...)` | `GET /api/votes` |
| Votes stored in browser only | Votes stored on server for ALL devices |
| Each device had separate data | All devices share same data |
# CR-2026
