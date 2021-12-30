"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URI = exports.PORT = void 0;
exports.PORT = process.env.PORT || 8080;
exports.MONGODB_URI = process.env.MONGODB_URI ||
    "mongodb+srv://learn-assist-admin:GYENaHc7KzCBqLS@cluster0.80v4j.mongodb.net/learn-assist?retryWrites=true&w=majority";
