import { Request, Response } from "express";
import User from "../models/User";

export const get = (req: Request, res: Response) => {
	User.findOne({ uid: req.params.uid })
		.exec()
		.then((user) => {
			console.log(user);
			res.json(user);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
};

export const create = (req: Request, res: Response) => {
	const user = new User(req.body);
	user
		.save()
		.then(() => {
			res.json(user);
		})
		.catch((err: any) => {
			res.status(400).send("Unable to save to database" + err.message);
		});
};

export const update = async (req: Request, res: Response) => {
	User.findOneAndUpdate({ uid: req.params.uid }, req.body, {
		new: true,
	})
		.exec()
		.then((user) => {
			res.json(user);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};
