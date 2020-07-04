const express = require("express");
const sleep = require("sleep");
const responseTime = require("response-time");
const fibo = require("./fibo");

const app = express();

app.use(responseTime());

app.get("/fibo", function (req, res) {
  const n = parseInt(req.query.n);
  const result = fibo(n);
  console.log(result);
  // heavy function here
  // sleep(5);
  res.status(200).json({ name: "john" });
});

module.exports = app;
