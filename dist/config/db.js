"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// const URI = "mongodb://localhost/bookstore"
const lifeURI = "mongodb+srv://SeraphinaDB:Judy200deo20@cluster0.59l2guk.mongodb.net/?retryWrites=true&w=majority";
mongoose_1.default.connect(lifeURI);
mongoose_1.default.connection.on("open", () => {
    console.log("Database connected");
})
    .once("error", () => {
    console.log("An error occure while getting database");
});
