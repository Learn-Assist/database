"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ContentsSchema = new mongoose_1.Schema({
    type: String,
    content: String,
});
var TopicSchema = new mongoose_1.Schema({
    name: String,
    names: [String],
    grade: Number,
    subject: String,
    lesson: Number,
    contents: [ContentsSchema],
    moral: { type: String, required: false },
    description: { type: String, required: false },
});
var Topic = (0, mongoose_1.model)("topics", TopicSchema);
exports.default = Topic;
