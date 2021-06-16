const express = require("express");
const cors = require('cors');
const app = express();
const transactions = require("./controllers/transactionsController")

app.use(express.json());
app.use(cors());

app.use("/transactions", transactions);

// // ROOT
app.get("/", (req, res) => {
  req.body;
  res.send("Budget App Mega");
});

// 404 catch all
app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!!!");
});

module.exports = app;
