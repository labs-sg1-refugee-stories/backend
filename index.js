require("dotenv").config(); //reads .env and merges it into process.env

const server = require("./api/server.js");

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\nAPI is running on port http://localhost:${port}\n`)
);

// hosting service might assign a port dynamically
// Environment variables are system wide and constant(donot change)
