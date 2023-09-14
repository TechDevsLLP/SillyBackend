import { Router } from "express";
import {
	handleContactUs,
	handleNewsletter,
	getMenuItemsForCategory,
	handleGetAllCategories,
	handlePostCategories,
} from "../controllers/index.js";

export function setupRoutes(app) {
	const router = Router();

	router.get("/", (req, res) => {
		res.send("Server running");
	});

	router.post("/contact-us", handleContactUs);

	router.post("/newsletter", handleNewsletter);

	// CATEGORIES ROUTES
	router.get("/categories/:location", handleGetAllCategories);

	router.post("/categories/:location", handlePostCategories);

	// MENU ROUTES
	router.get("/menu/:location/:category", getMenuItemsForCategory);

	app.use("/", router);
}
