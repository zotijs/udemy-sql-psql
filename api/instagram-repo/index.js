const app = require("./src/app.js");
const pool = require("./src/pool.js");

const {
  PORT,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
} = require("./config.js");

pool
  .connect({
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    database: DATABASE_NAME,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
  })
  .then(() => {
    app().listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
