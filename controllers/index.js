import Joi from "joi";
import {
	saveContactInquiry,
	getAllCategories,
	createOrUpdateCategories,
	getMenuByCategory,
	addMenuItem,
	addMultipleMenuItems,
	updateMenuItem,
	updateMultipleMenuItems,
	deleteMenuItemSingle,
} from "../models/index.js";
import { contactFormSchemaValidate } from "../models/contact.schema.js";
import { categorySchemaValidate } from "../models/category.schema.js";
import { menuItemSchemaValidate } from "../models/menu.schema.js";
import { transporter } from "../config/nodemailer.js";
import { SENDER_MAIL_ID } from "../config/secrets.js";
import { subscribe } from "../utils/index.js";

export async function handleContactUs(req, res, next) {
	const { error, value } = contactFormSchemaValidate.validate(req.body);

	if (error) return next(error);

	try {
		const result = await saveContactInquiry(value);

		if (result.success) {
			const mailOptions = {
				from: SENDER_MAIL_ID, // Your email address
				to: "your-email@gmail.com", // Recipient's email address
				subject: `CONTACT US - ${value.name}`,
				text: `
         Name: ${value.name}
         Email: ${value.email}
         Phone: ${value.phone}
         Message: ${value.body}
       `,
			};

			transporter.sendMail(mailOptions, (err, info) => {
				if (err) return next(err);
				return res.status(200).json({
					success: true,
					message: "Contact form inquiry saved and sent successfully.",
				});
			});
		} else {
			return next(result.error);
		}
	} catch (err) {
		return next(err);
	}
}

export async function handleNewsletter(req, res, next) {
	const { error, value } = Joi.object({
		email: Joi.string().email().required(),
	}).validate(req.body);

	if (error) return next(error);

	try {
		const result = await subscribe(value.email);

		if (result.success) {
			return res.status(200).json({
				success: true,
				message: "Successfully subscribed to the newsletter.",
			});
		} else {
			return next(result.error);
		}
	} catch (error) {
		return next(error);
	}
}

// CATEGORIES CONTROLLERS
export async function handleGetAllCategories(req, res, next) {
	const { location } = req.params;

	try {
		const result = await getAllCategories(location);

		if (result.success) {
			const categories = result.data.categories;
			res.status(200).json({
				success: true,
				data: categories,
			});
		} else return next(result.error);
	} catch (error) {
		return next(error);
	}
}

// create or update
export async function handlePostCategories(req, res, next) {
	const { location } = req.params;

	const { categories } = req.body;

	const { error, value } = Joi.object({
		categories: Joi.array().items(categorySchemaValidate).required(),
	}).validate({ categories });

	if (error) return next(error);

	try {
		const result = await createOrUpdateCategories(location, value.categories);

		if (result.success) {
			res.status(201).json({
				success: true,
				data: result.data,
			});
		} else return next(result.error);
	} catch (error) {
		return next(error);
	}
}

// MENU CONTROLLERS
export async function handleGetMenuItems(req, res, next) {
	const { location, category } = req.params;

	try {
		const result = await getMenuByCategory(location, category);

		if (result.success) {
			res.status(200).json({
				success: true,
				data: result.data,
			});
		} else return next(result.error);
	} catch (error) {
		return next(error);
	}
}

export async function handlePostMenuItemSingle(req, res, next) {
	const { location } = req.params;

	const { error, value } = menuItemSchemaValidate.validate(req.body);

	if (error) return next(error);

	try {
		const result = await addMenuItem({
			location,
			...value,
		});

		if (result.success)
			res.status(201).json({
				success: true,
				data: result.data,
			});
		else return next(result.error);
	} catch (error) {
		return next(error);
	}
}

export async function handlePostMenuItemMultiple(req, res, next) {
	const { location } = req.params;
	const menuItems = req.body;

	const { error, value } = Joi.array()
		.items(menuItemSchemaValidate)
		.validate(menuItems);

	if (error) return next(error);

	try {
		const result = await addMultipleMenuItems(location, value);

		if (result.success)
			return res.status(201).json({
				success: true,
				data: result.data,
			});
		else return next(result.error);
	} catch (error) {
		return next(error);
	}
}

export async function handleUpdateMenuItemSingle(req, res, next) {
	const { location, id } = req.params;
	const updatedMenuItemData = req.body;

	try {
		const result = await updateMenuItem(location, id, updatedMenuItemData);

		if (result.success)
			return res.status(200).json({
				success: true,
				data: result.data,
			});
		else return next(result.error);
	} catch (error) {
		return next(error);
	}
}

export async function handleUpdateMenuItemMultiple(req, res, next) {
	const { location } = req.params;
	const updatedMenuItems = req.body;

	try {
		const result = await updateMultipleMenuItems(location, updatedMenuItems);

		if (result.success) {
			res.status(200).json({
				success: true,
				data: result.data,
			});
		} else {
			return next(result.error);
		}
	} catch (error) {
		return next(error);
	}
}

export async function handleDeleteMenuItemSingle(req, res, next) {
	const { location, id } = req.params;

	try {
		const result = await deleteMenuItemSingle(location, id);

		if (result.success) {
			res.status(200).json({
				success: true,
				message: "Menu item deleted successfully.",
			});
		} else {
			res.status(404).json({
				success: false,
				message: "Menu item not found or already deleted.",
			});
		}
	} catch (error) {
		return next(error);
	}
}

export async function handleDeleteMenuItemMultiple(req, res, next) {
	const { location } = req.params;
}
