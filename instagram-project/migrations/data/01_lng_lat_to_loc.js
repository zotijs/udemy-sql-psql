// not managed by node-pg-migrate
// run it manually with: `node --env-file .env ./migrations/data/01_lng_lat_to_loc.js `
const pg = require("pg");

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  // app
  PORT,
} = require("../../config.js");

const pool = new pg.Pool({
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  database: DATABASE_NAME,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
});

pool
  .query(
    `
    UPDATE posts
    SET loc = POINT(lng, lat)
    WHERE loc IS NULL;`
  )
  .then(() => {
    console.log("Update complete");
    pool.end();
  })
  .catch((err) => {
    console.error(err.message);
  });
