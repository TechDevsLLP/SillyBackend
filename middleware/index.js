import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
	const token = req.header("Authorization").split(" ")[1];
	if (!token) {
		return res
			.status(401)
			.json({ message: "Unauthorized - Token not provided" });
	}

	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		req.user = decoded;
		next();
	} catch (error) {
		// next(error);
		return res.status(401).json({ message: "Unauthorized - Invalid token" });
	}
};
