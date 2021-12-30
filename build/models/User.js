"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    uid: { type: String, required: true, unique: true },
    name: String,
    email: String,
    age: Number,
    school: String,
    createdAt: Date,
    updatedAt: Date,
    grade: Number,
    timeActiveInMinutes: Number,
    photoURL: String,
    tests: [
        {
            _id: String,
            score: Number,
            date: Date,
        },
    ],
});
var User = (0, mongoose_1.model)("users", userSchema);
exports.default = User;
