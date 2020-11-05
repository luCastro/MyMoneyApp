const server = require("./configuration/server");
const connectDB = require("./configuration/db");
connectDB();
require("./configuration/routes")(server);
