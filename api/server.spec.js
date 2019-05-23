const request = require("supertest");
const server = require("../api/server.js");

describe("Basic server tests", () => {
  it("Sets the environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  // open client, make a request and inspect the response
  describe("GET /", () => {
    it("should return 200 OK", () => {
      // we return the promise
      return request(server)
        .get("/")
        .expect(200);
    });

    it("Using the squad (async/await)", async () => {
      // use the squad
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("Should return JSON using done callback", done => {
      // using the done callback
      request(server)
        .get("/")
        .then(res => {
          expect(res.type).toBe("text/html"); // Content-Type
          done();
        });
    });
  });
});
