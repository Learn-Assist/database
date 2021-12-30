import { Schema, model } from "mongoose";

export interface ITest {
	_id: string;
	grade: number;
	createdAt: Date;
	updatedAt: Date;
	school: string;
	topic: string;
	subject: string;
	questions: Array<{
		type: "text" | "image" | "video" | "audio";
		question: string[];
		answers: string[];
		score: number;
	}>;
}

const TestSchema = new Schema<ITest>({
	grade: Number,
	createdAt: Date,
	updatedAt: Date,
	school: String,
	topic: String,
	subject: String,
	questions: [
		{
			type: String,
			question: [String],
			answers: [String],
			score: Number,
		},
	],
});

const Test = model("subjects", TestSchema);

export default Test;
