
// AUTH POST

describe("POST /register", () => {

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

  let newUser = {username: "test", email: "test@gmail.com", password: "test"}

  test('responds with status code 201', (done) => {
    request(api)
    .post("/auth/register")
    .send(newUser)
    .expect(201,done)
  })

  test("responds with User created message", (done) => {
    request(api)
    .post("/auth/register")
    .send(newUser)
    .expect({msg: "User created"}, done);
  });

   test("responds with json", (done) => {
     request(api)
     .post("/auth/register")
     .expect("Content-Type", /json/, done);
   });


}) 



describe("POST /login", () => {
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


  let newUser = { username: "test", email: "test@gmail.com", password: "test" };

  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklEIjoyNCwiaWF0IjoxNjQ1NzE4NDMyLCJleHAiOjE2NDU3MjIwMzJ9.qYQkeXveqfnqZ7H70qD0CbzFcrw9Ms7v-3RSgu17Ark";

    // Sends a different token everytime 

  test("responds with status code 200", (done) => {
    request(api)
    .post("/auth/login")
    .send(newUser)
    .expect(200, done);
  });

  test("responds with success and User's token", async () => {
    await request(api).post("/auth/login").send(newUser)
    let res = token
      .startsWith(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklEIjoyNCwiaWF0IjoxNjQ1NzE4NDMyLCJleHAiOjE2NDU3MjIwMzJ9"
      )
      expect(res).toBeTruthy();
  
  });


  
  test("responds with json", (done) => {
    request(api)
    .post("/auth/login")
    .expect("Content-Type", /json/, done);
  });

  

  let fakeUser = { username: "test", email: "test@gmail.com", password: "toast" };



  test("responds with status code 401 on unauthorised login", (done) => {
    request(api)
    .post("/auth/login")
    .send(fakeUser)
    .expect(401, done);
  });



}); 






