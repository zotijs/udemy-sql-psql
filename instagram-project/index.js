const express = require("express");
const pg = require("pg");

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  // app
  PORT,
} = require("./config.js");

const pool = new pg.Pool({
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  database: DATABASE_NAME,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
});

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/posts", async (_, res) => {
  const { rows } = await pool.query(`
        SELECT * FROM posts;
    `);

  res.send(
    `
        <table>
        <thead>
            <tr>
                <th>id</th>
                <th>lng</th>
                <th>lat</th>
            </tr>
        </thead>
        <tbody>
            ${rows
              .map(
                ({ id, loc }) => `
                <tr>
                    <td>${id}</td>
                    <td>${loc.x}</td>
                    <td>${loc.y}</td>
                </tr>
            `
              )
              .join("")}
        </table>
        <form method="POST"> 
              <h3>Create Post</h3>
              <div>
                <label for="lng">Lng</label>
                <input id="lng" name="lng" required />
              </div>
              <div>
                <label for="lat">Lat</label>
                <input id="lat" name="lat" required />
              </div>
              <button type="submit">Create</button>
        </form>
        `
  );
});

app.post("/posts", async (req, res) => {
  const { lng, lat } = req.body;

  await pool.query("INSERT INTO posts (loc) VALUES ($1);", [`(${lng},${lat})`]);

  res.redirect("/posts");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
