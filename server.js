import express from "express";
import morgan from "morgan";
import chalk from "chalk";
import { setupRoutes } from "./routes/index.js";
import cors from "cors";
import { PORT } from "./config/secrets.js";
import { setupMongo } from "./config/mongo.js";
import dayjs from "dayjs";
import errorHandler from "./controllers/errorHandler.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
setupMongo();

morgan.token("date", () => {
	// Timezone: Asia/Kolkata
	const formattedDate = dayjs().format("ddd, DD MMM YYYY HH:mm:ss");
	return `${formattedDate}`;
});

morgan.token("coloredMethod", (req, res) => {
	const method = chalk.green.bold(req.method);
	return method;
});

morgan.token("coloredStatus", (req, res) => {
	const statusCode = res.statusCode;
	const color =
		statusCode >= 500 ? "red" : statusCode >= 400 ? "yellow" : "green";
	return chalk[color].bold(statusCode);
});

app.use(
	morgan(
		"[:date] | :coloredMethod :url :coloredStatus :res[content-length] bytes :response-time ms"
	)
);

app.use(cors());

setupRoutes(app);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(chalk.bold(`http://localhost:${PORT}`));
});
