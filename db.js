
const sqlite3 = require("sqlite3").verbose();

function openDb() {
  const db = new sqlite3.Database("./data.sqlite");
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS checkins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        day TEXT,
        slot_name TEXT,
        slot_time TEXT,
        person TEXT,
        status TEXT,
        created_at TEXT
      )
    `);
  });
  return db;
}

module.exports = { openDb };
