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
app.use("/", routes);
app.use((req, res) => console.log(req.method, req.url));

app.get("/", (req, res) => {
	res.send("<h1>Learn Assist MongoDB API</h1>");
});
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	connect(MONGODB_URI);
});
