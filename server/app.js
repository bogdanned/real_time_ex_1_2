const express = require("express");
const responseTime = require("response-time");
const { expensiveTaskList } = require("./core");

const app = express();

app.use(responseTime());

app.get("/performance", function (req, res) {
  const n = parseInt(req.query.n);
  // heavy server work here
  const result = expensiveTaskList(n);
  res.status(200).json({ result });
});

module.exports = app;
