import { Schema, model } from "mongoose";

export interface ITopic {
	_id?: string;
	name: string;
	names: string[];
	grade: number;
	subject: string;
	lesson: number;
	contents: Array<{
		type: "text" | "image" | "video" | "audio" | "iframe";
		content: Object;
	}>;
	moral?: string;
	description?: string;
}

const ContentsSchema = new Schema({
	type: String,
	content: String,
});
const TopicSchema = new Schema<ITopic>({
	name: String,
	names: [String],
	grade: Number,
	subject: String,
	lesson: Number,
	contents: [ContentsSchema],
	moral: { type: String, required: false },
	description: { type: String, required: false },
});

const Topic = model("topics", TopicSchema);

export default Topic;
