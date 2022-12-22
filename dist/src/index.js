"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("../config/db");
const dataRouter_1 = __importDefault(require("../router/dataRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const Port = 2022;
app.use("/server", dataRouter_1.default);
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Server is up and running"
    });
});
app.listen(Port, () => {
    console.log("Server is up and running");
});
