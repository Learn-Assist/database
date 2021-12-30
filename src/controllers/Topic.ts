import { Request, Response } from "express";
import Topic from "../models/Topic";

export const getById = (req: Request, res: Response) => {
	Topic.findById(req.params.topicId)
		.exec()
		.then((topic) => {
			res.json(topic);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

export const getBySubjectAndGrade = (req: Request, res: Response) => {
	Topic.find({
		subject: req.query.subject as string,
		grade: parseInt(req.query.grade as any),
		lesson: parseInt(req.query.lesson as any),
	})
		.exec()
		.then((topic) => {
			res.json(topic);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

export const getBySubject = (req: Request, res: Response) => {
	Topic.find({ subject: req.params.subjectId })
		.exec()
		.then((topics) => {
			res.json(topics);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

export const create = (req: Request, res: Response) => {
	const topic = new Topic(req.body);
	console.log(topic);
	topic
		.save()
		.then((result: any) => {
			res.send(result);
		})
		.catch((err: any) => {
			res.status(400).send("Unable to save to database: " + err.message);
			console.log(err);
		});
};

export const update = async (req: Request, res: Response) => {
	Topic.findOneAndUpdate({ _id: req.body._id }, req.body, {
		new: true,
	})
		.exec()
		.then((topic) => {
			res.json(topic);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};
