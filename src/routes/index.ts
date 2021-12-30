import express from "express";
import * as user from "../controllers/User";
import * as subject from "../controllers/Subject";
import * as topic from "../controllers/Topic";
//import * as test from "../controllers/Test";

const router = express.Router();

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

export default router;
