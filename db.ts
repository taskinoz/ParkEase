// db.js
import sqlite3 from 'sqlite3';
export const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE parking_spots (id INTEGER PRIMARY KEY, date TEXT, spot INTEGER, rego TEXT, make TEXT, user_name TEXT)");
});
