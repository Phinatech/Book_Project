"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myiews = exports.Searching = exports.Getall = exports.PostBooks = void 0;
const bookModel_1 = __importDefault(require("../model/bookModel"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const PostBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cloudimg = yield cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
        const { author, title, coverImage, summary, ISBN, views, authorImg, category } = req.body;
        const isbn1 = Math.floor(Math.random() * 10000);
        const isbn2 = Math.floor(Math.random() * 10000);
        const isbn3 = Math.floor(Math.random() * 10000);
        const isbn4 = Math.floor(Math.random() * 10000);
        const newBookk = yield bookModel_1.default.create({
            author: author.charAt(0).toUpperCase(),
            title,
            coverImage: cloudimg.secure_url,
            summary,
            ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}-`,
            views,
            authorImg,
            category,
        });
        return res.status(200).json({
            message: "Data gotten",
            data: newBookk
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "An error occured",
            data: error
        });
    }
});
exports.PostBooks = PostBooks;
const Getall = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gettingData = yield bookModel_1.default.find();
        return res.status(201).json({
            message: "All data has been gotten successfully",
            data: gettingData,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "An error occured",
        });
    }
});
exports.Getall = Getall;
const Searching = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryData = req.query;
        const querySearch = yield bookModel_1.default.find(queryData);
        return res.status(200).json({
            message: "datagotten",
            data: querySearch
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "An error occured",
        });
    }
});
exports.Searching = Searching;
const myiews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newView = yield bookModel_1.default.findByIdAndUpdate(req.params.id, {
            $push: { views: req.body.ip },
        }, { new: true });
        return res.status(200).json({
            data: newView
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "An error occured",
        });
    }
});
exports.myiews = myiews;
