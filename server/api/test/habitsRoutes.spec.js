// GET


describe("GET /:user_id", () => {

  let api;

  beforeAll(async () => {
    await initDatabase();
    api = app.listen(5000, () =>
      console.log("Test server running on port 5000")
    );
  });

  afterAll((done) => {
    console.log("Gracefully stopping test server");
    api.close(done);
  });

  test("responds with status code 200", (done) => {
    request(api).get("/habits/1").expect(200, done);
  });

  test("responds with json", (done) => {
    request(api).get("/habits/1").expect("Content-Type", /json/, done);
  });

  test("responds with error code 404", (done) => {
    request(api).get("/habits/100").expect(404, done);
  });

  
})

