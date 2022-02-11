import express from "express";
import cors from "cors";
import { PORT, MONGODB_URI } from "./config";
import routes from "./routes";
import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});
app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});
app.use("/", routes);

app.listen(PORT, () => {
	try {
		connect(MONGODB_URI);
		console.log(`Server is running on port ${PORT}`);
	} catch (err) {
		console.log("Connection error:", err);
	}
});
