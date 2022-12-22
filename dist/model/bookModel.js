"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Booksschema = new mongoose_1.default.Schema({
    author: String,
    title: String,
    coverImage: String,
    summary: String,
    ISBN: String,
    views: [],
    authorImg: String,
    category: String,
});
const bookstoreModel = mongoose_1.default.model("Mybooks", Booksschema);
exports.default = bookstoreModel;
