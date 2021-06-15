const express = require("express");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// ROOT
app.get("/", (req, res) => {
  res.send("Basic Express App - ROOT");
});

module.exports = app;
