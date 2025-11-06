"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
const port = 3000;
app.use(express_1.default.json());
app.get("/", async (req, res) => {
    res
        .status(200)
        .json({ "version": "1.0.0" });
});
const server = app
    .listen(port, () => {
    console.log("El servidor está corriendo en el puerto: ", port);
})
    .on("error", (error) => {
    console.log("Error: ", error.message);
});
exports.server = server;
//# sourceMappingURL=app.js.map