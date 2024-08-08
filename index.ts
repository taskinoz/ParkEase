import { Hono } from "hono";
import { db } from "./db";

const app = new Hono();

app.get('/spots', async (c) => {
  return new Promise((resolve) => {
    db.all("SELECT * FROM parking_spots", [], (err, rows) => {
      if (err) {
        resolve(c.json({ error: err.message }, 500));
      } else {
        resolve(c.json(rows));
      }
    });
  });
});

app.post('/book', async (c) => {
  const { date, spot, rego, make, user_name } = await c.req.json();
  return new Promise((resolve) => {
    db.run("INSERT INTO parking_spots (date, spot, rego, make, user_name) VALUES (?, ?, ?, ?, ?)",
      [date, spot, rego, make, user_name], function(err) {
        if (err) {
          resolve(c.json({ error: err.message }, 500));
        } else {
          resolve(c.json({ success: true, id: this.lastID }));
        }
      });
  });
});

export default {
    port: 3030,
    fetch: app.fetch,
}