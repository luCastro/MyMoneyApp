const PORT = process.env.PORT || 8088;

const express = require("express");
const server = express();

const bodyParser = require("body-parser");

const cors = require("./cors");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors);

server.get("/", (req, res) => res.send("API Running"));

server.listen(PORT, () => console.log(`Server started on port${PORT}`));

module.exports = server;
