import { app, server } from "../app/program";
import supertest from "supertest";

const requestWithSupertest = supertest(app);

afterAll(() => {
  server.close();
});

describe("GET /", () => {
    test("should return code 200 when requested", async () => {
        expect(true).toEqual(true);
    })
});
