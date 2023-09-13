import chalk from "chalk";

function errorHandler(err, req, res, next) {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";

	console.log(chalk.bgRed(statusCode, message));
	console.log(err);

	res.status(statusCode).json({
		message,
	});
}

export default errorHandler;
