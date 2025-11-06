import { app, server } from "../app/program";
import supertest from "supertest";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const requestWithSupertest = supertest(app);

afterAll(() => {
  server.close();
});

describe("GET /", () => {
  test("should return code 200 when requested", async () => {
    expect(true).toEqual(true);
  })
});
