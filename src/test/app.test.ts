import { app, server } from "../app/app";
import supertest from "supertest";

const requestWithSupertest = supertest(app);

afterAll(() => {
  server.close();
});

describe("GET /", () => {
  test("should return 200 when requesting", async () => {
    const respuesta = await requestWithSupertest.get("/");
    expect(respuesta.status).toEqual(200);
  });
});
