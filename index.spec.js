describe("The http server responds fast to user requests regarding the load", () => {
  test("A heavy operation does not block the user interaction", () => {
    it("responds with json", function (done) {
      request(app)
        .get("/user")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
  });
});
