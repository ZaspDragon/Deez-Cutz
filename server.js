
const express = require("express");
const path = require("path");
const fs = require("fs");
const { openDb } = require("./db");

const app = express();
const db = openDb();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function readSchedule() {
  return JSON.parse(fs.readFileSync("./schedule.json", "utf8"));
}

app.get("/api/schedule", (req, res) => {
  res.json(readSchedule());
});

app.get("/api/checkins", (req, res) => {
  db.all("SELECT * FROM checkins ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: "db error" });
    res.json(rows);
  });
});

app.post("/api/checkins", (req, res) => {
  const { day, slotName, slotTime, person, status } = req.body;

  db.run(
    `INSERT INTO checkins (day, slot_name, slot_time, person, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [day, slotName, slotTime, person, status, new Date().toISOString()],
    function (err) {
      if (err) return res.status(500).json({ error: "insert failed" });
      res.json({ ok: true });
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running on port " + PORT));
