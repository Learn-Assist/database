import { Schema, model } from "mongoose";

export interface IUser {
	_id: string;
	uid: string;
	name: string;
	email: string;
	age: number;
	school: string;
	grade: number;
	photoURL: string;
	createdAt: Date;
	updatedAt: Date;
	timeActiveInMinutes: number;
	tests: Array<{
		_id: string;
		score: number;
		date: Date;
	}>;
}

const userSchema = new Schema<IUser>({
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

const User = model("users", userSchema);

export default User;
