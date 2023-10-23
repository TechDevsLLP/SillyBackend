import { Router } from "express";
import {
	handleContactUs,
	handleNewsletter,
	handleAllLocationCategories,
	handleGetAllCategories,
	handlePostCategories,
	handleGetMenuItems,
	handleGetMenuItemSubcategories,
	handleCategoryMeta,
	handlePostMenuItemSingle,
	handlePostMenuItemMultiple,
	handleUpdateMenuItemSingle,
	handleUpdateMenuItemMultiple,
	handleDeleteMenuItemSingle,
	handleDeleteMenuItemMultiple,
} from "../controllers/index.js";

export function setupRoutes(app) {
	const router = Router();

	router.get("/", (req, res) => {
		res.send("Server running");
	});

	router.post("/contact-us", handleContactUs);

	router.post("/newsletter", handleNewsletter);

	// CATEGORIES ROUTES
	router.get("/categories/all", handleAllLocationCategories);

	router.get("/categories/:location", handleGetAllCategories);

	router.post("/categories/:location", handlePostCategories);

	// MENU ROUTES
	router.get("/menu/:location/:category", handleGetMenuItems);

	router.get(
		"/menu/:location/:category/subcategories",
		handleGetMenuItemSubcategories
	);

	router.get("/menu/:location/:category/meta", handleCategoryMeta);

	router.post("/menu/:location/single", handlePostMenuItemSingle);

	router.post("/menu/:location/multiple", handlePostMenuItemMultiple);

	router.patch("/menu/:location/single/:id", handleUpdateMenuItemSingle);

	router.patch("/menu/:location/multiple", handleUpdateMenuItemMultiple);

	router.delete("/menu/:location/single/:id", handleDeleteMenuItemSingle);

	router.delete("/menu/:location/multiple", handleDeleteMenuItemMultiple);

	app.use("/", router);
}
