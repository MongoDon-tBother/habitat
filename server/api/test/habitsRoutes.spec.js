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



  
})

