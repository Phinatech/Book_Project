"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: "dhnhcnuca",
    api_key: "919872813293359",
    api_secret: "JOodz5zZiYkgvUQXmIN-9xiyIFQ",
    secure: true,
});
exports.default = cloudinary_1.v2;
