describe("GET /", () => {
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


  test("responds with status code 403", (done) => {
    request(api)
    .get("/users/")
    .expect(403, done);
  });

  test("responds with Missing Token message", (done) => {
    request(api).get("/users/").expect({ err: "Missing token" }, done);
  });

  test("responds with json", (done) => {
    request(api)
    .get("/users/")
    .expect("Content-Type", /json/, done);
  });
});

