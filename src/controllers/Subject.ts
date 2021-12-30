import { Request, Response } from "express";
import Subject from "../models/Subject";

export const get = (req: Request, res: Response) => {
	Subject.find({
		grade: parseInt(req.query.grade as any),
	})
		.exec()
		.then((subject) => {
			res.json(subject);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

export const create = (req: Request, res: Response) => {
	const subject = new Subject(req.body);
	console.log(subject);
	subject
		.save()
		.then((result: any) => {
			res.send(result);
		})
		.catch((err: any) => {
			res.status(400).send("Unable to save to database" + err.message);
		});
};

export const update = async (req: Request, res: Response) => {
	Subject.findOneAndUpdate({ _id: req.body._id }, req.body, {
		new: true,
	})
		.exec()
		.then((subject) => {
			res.json(subject);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};
