const transactions = require("express").Router();
const transactionsArray = require("../models/transaction");


transactions.get("/", (req, res)=>{
    const {arrayIndex} = req.params;
    res.json(transactionsArray)
})


transactions.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if (transactionsArray[arrayIndex]) {
      res.json(transactionsArray[arrayIndex]);
    } else {
      res.redirect("/404");
    }
  });

transactions.post("/", (req, res) => {
  const { body } = req;
  res.json(transactionsArray.push(body));
});

transactions.put("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  const { body } = req;
  transactionsArray[arrayIndex] = body;
  res.json(transactionsArray);
});

transactions.delete("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  const deleted = transactionsArray.splice(arrayIndex, 1);
  res.json(deleted[0]);
});

transactions.patch("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  const { body } = req;
  transactionsArray;
});

module.exports = transactions;
