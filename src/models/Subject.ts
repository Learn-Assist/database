import { Schema, model } from "mongoose";

export interface ISubject {
	_id: string;
	name: string;
	grade: number;
	createdAt: Date;
	updatedAt: Date;
	school: string;
	numberOfLessons: number;
	description: string;
}

const SubjectSchema = new Schema<ISubject>({
	name: String,
	grade: Number,
	createdAt: Date,
	updatedAt: Date,
	school: String,
	numberOfLessons: Number,
	description: String,
});

const Subject = model("subjects", SubjectSchema);

export default Subject;
