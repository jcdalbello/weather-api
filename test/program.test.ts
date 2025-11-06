import { app, server } from "../app/program";
import supertest from "supertest";

 
const requestWithSupertest = supertest(app);

const SUCCESSFUL_RESPONSE_CODE = 200;

afterAll(() => {
  server.close();
});

describe("GET /", () => {
  test("should return code 200 when requested", async () => {
    const response = await requestWithSupertest.get("/");
    expect(response.status).toEqual(SUCCESSFUL_RESPONSE_CODE);
  })
});

describe("GET /weather/:city", () => {
  test("should return code 200 when requested", async () => {
    const response = await requestWithSupertest.get("/weather/london");
    expect(response.status).toEqual(SUCCESSFUL_RESPONSE_CODE);
  })
});
