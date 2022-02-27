const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const cors = require("cors");
const http = require("http").Server(app);
const log = console.log;
require("dotenv").config({
  path: __dirname + "/.env",
});

// Variables
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
  // Page routing.
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// Configuration middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// API middleware
app.use("/api/v1", require("./api/v1"));

// Start server
http.listen(port, () => {
  console.log(`Server start at port ${port}`);
});
