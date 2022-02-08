"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user = __importStar(require("../controllers/User"));
var subject = __importStar(require("../controllers/Subject"));
var topic = __importStar(require("../controllers/Topic"));
//import * as test from "../controllers/Test";
var router = express_1.default.Router();
router.get("/subject", subject.get);
router.get("/topic", topic.getBySubjectAndGrade);
router.get("/lesson");
router.get("/topic/:topicId", topic.getById);
router.get("/topic/subject/:subjectId", topic.getBySubject);
router.get("/user/:uid", user.get);
router.post("/user", user.create);
router.post("/subject", subject.create);
router.post("/topic", topic.create);
router.put("/user", user.update);
router.put("/subject", subject.update);
router.put("/topic", topic.update);
router.get("/home", function (req, res) {
    res.send("<h1>Learn Assist MongoDB API</h1>");
});
exports.default = router;
