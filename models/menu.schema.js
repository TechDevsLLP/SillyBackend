import Joi from "joi";
import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
	{
		location: {
			type: String,
			enum: ["delhi", "mumbai"],
			// default: "delhi",
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			enum: ["veg", "nonveg", ""],
			// required: true,
			default: "veg",
		},
		desc: String,
		subcategory: String,
		options: String,
		category: {
			type: String,
			required: true,
		},
		img: {
			type: Boolean,
			default: false,
		},
		imgUrl: {
			type: String,
			default: null,
		},
		visible: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true, collection: "menus" }
);

export const Menu = mongoose.model("Menu", menuSchema);

export const menuItemSchemaValidate = Joi.object({
	name: Joi.string().required(),
	price: Joi.alternatives()
		.try(
			Joi.number().min(0), // Accepts a number greater than or equal to 0
			Joi.string() // Accepts a string
		)
		.required(),
	type: Joi.string().allow("").valid("veg", "nonveg").default("veg"),
	desc: Joi.string().allow("").default(""), // Allow an empty string for 'desc'
	subcategory: Joi.string().allow("").default(""),
	options: Joi.string().allow("").default(""),
	category: Joi.string().required(),
	img: Joi.boolean().default(false),
	// imgUrl: Joi.string().default(null),
	visible: Joi.boolean().default(true),
});
