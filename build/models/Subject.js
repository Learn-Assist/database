"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var SubjectSchema = new mongoose_1.Schema({
    name: String,
    grade: Number,
    createdAt: Date,
    updatedAt: Date,
    school: String,
    numberOfLessons: Number,
    description: String,
});
var Subject = (0, mongoose_1.model)("subjects", SubjectSchema);
exports.default = Subject;
