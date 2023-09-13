import { Router } from "express";
import { handleContactUs, handleNewsletter } from "../controllers/index.js";

export function setupRoutes(app) {
	const router = Router();

	router.get("/", (req, res) => {
		res.send("Server running");
	});

	router.post("/contact-us", handleContactUs);

	router.post("/newsletter", handleNewsletter);

	// router.post("/menu/insertBulk", handleDbInsert);

	app.use("/", router);
}
