"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var config_1 = require("./config");
var routes_1 = __importDefault(require("./routes"));
var mongoose_1 = require("mongoose");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", routes_1.default);
app.use(function (req, res) { return console.log(req.method, req.url); });
app.get("/", function (req, res) {
    res.send("<h1>Learn Assist MongoDB API</h1>");
});
app.listen(config_1.PORT, function () {
    console.log("Server is running on port ".concat(config_1.PORT));
    (0, mongoose_1.connect)(config_1.MONGODB_URI);
});
setInterval(function () {
    console.log("I am alive @PORT=", config_1.PORT, config_1.MONGODB_URI);
}, 5000);
