describe("server", function () {

  let api;

  beforeAll(async () => {
    api = app.listen(5000, () =>
      console.log("Test server running on port 5000")
    );
  });

  afterAll((done) => {
    console.log("Gracefully stopping test server");
    api.close(done);
  });

  test("responds with a 200 on success", function (done) {
    request(api).get("/").expect(200, done);
  });
});




