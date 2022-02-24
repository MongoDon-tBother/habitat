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

  test("responds with user's habits", (done) => {
    request(api)
      .get("/habits/1")
      .expect(
        [
          {
            name: "Drink water",
            frequency: [0, 0, 0, 0, 0, 1, 1],
            complete: "0",
            streak: 5,
            subhabits: [{ name: "9am", complete: 0 }],
            habitId: 1
          },
          {
            name: "Eat veg",
            frequency: [1, 0, 0, 0, 0, 0, 0],
            complete: "0",
            streak: 5,
            subhabits: [{ name: "9am", complete: "0" }],
            habitId: 2
          }
        ],
        done
      );
  });

  test("responds with json", (done) => {
    request(api).get("/habits/1").expect("Content-Type", /json/, done);
  });
});

describe("GET /hab_id/:habit_id", () => {
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
    request(api).get("/habits/hab_id/1").expect(200, done);
  });

  test("responds with json", (done) => {
    request(api).get("/habits/hab_id/1").expect("Content-Type", /json/, done);
  });

  test("responds with user's habits", (done) => {
    request(api)
      .get("/habits/hab_id/1")
      .expect(
        {
          name: "Drink water",
          frequency: [0, 0, 0, 0, 0, 1, 1],
          complete: "0",
          streak: 5,
          subhabits: [{ name: "9am", complete: "0" }],
          habitId: 1
        },
        done
      );
  });
});

// CREATE

describe("POST /", () => {
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
    request(api).post("/habits/").expect(200, done);
  });

  test("responds with json", (done) => {
    request(api).post("/habits/").expect("Content-Type", /json/, done);
  });

  let newHabit = {
    name: "Drink juice",
    frequency: [0, 0, 0, 0, 0, 1, 1],
    subhabits: [{ name: "9am", complete: "0" }],
    username: "test1"
  };

  test("responds with user's new habit", (done) => {
    request(api)
      .post("/habits/")
      .send(newHabit)
      .expect(
        {
          name: "Drink juice",
          frequency: [0, 0, 0, 0, 0, 1, 1],
          complete: "0",
          streak: 0,
          subhabits: [{ name: "9am", complete: "0" }],
          habitId: 1
        },
        done
      );
  });

  test("responds with error message 422", (done) => {
    request(api).post("/habits/").send({}).expect(422, done);
  });
});

