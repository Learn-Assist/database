"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TestSchema = new mongoose_1.Schema({
    grade: Number,
    createdAt: Date,
    updatedAt: Date,
    school: String,
    topic: String,
    subject: String,
    questions: [
        {
            type: String,
            question: [String],
            answers: [String],
            score: Number,
        },
    ],
});
var Test = (0, mongoose_1.model)("subjects", TestSchema);
exports.default = Test;
