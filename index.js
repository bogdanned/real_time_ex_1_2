const app = require("./app");
const request = require("supertest");

request(app)
  .get("/fibo?n=41")
  // .expect("Content-Type", /json/)
  // .expect("Content-Length", "15")
  .expect(200)
  .end(function (err, res) {
    if (err) throw err;
    console.log(res.header);
  });
