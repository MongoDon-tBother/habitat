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

describe("GET /:id", () => {
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

  test("responds with status code 200", (done) => {
    request(api).get("/users/1").expect(200, done);
  });

  test("responds with error code 400", (done) => {
    request(api).get("/users/100").expect(400, done);
  });

  test("responds with user's info", (done) => {
    request(api).get("/users/1").expect({id: 1, username: "test1", email: "test1@gmail.com", passwordDigest: "yestest"},done);
  });

  test("responds with json", (done) => {
    request(api).get("/users/").expect("Content-Type", /json/, done);
  });
});


