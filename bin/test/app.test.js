"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app/app");
const supertest_1 = __importDefault(require("supertest"));
const requestWithSupertest = (0, supertest_1.default)(app_1.app);
afterAll(() => {
    app_1.server.close();
});
describe("GET /", () => {
    test("should return 200 when requesting", async () => {
        const respuesta = await requestWithSupertest.get("/");
        expect(respuesta.status).toEqual(200);
    });
});
//# sourceMappingURL=app.test.js.map