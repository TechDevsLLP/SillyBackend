import mongoose from "mongoose";
import Joi from "joi";

const contactFormSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		region: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true, collection: "contacts" }
);

export const Contact = mongoose.model("Contact", contactFormSchema);

export const contactFormSchemaValidate = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	phone: Joi.string()
		.pattern(/^[0-9]{10}$/)
		.required(),
	body: Joi.string().required(),
	region: Joi.string().required(),
});
