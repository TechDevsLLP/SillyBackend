import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const categorySchema = new mongoose.Schema(
	{
		location: {
			type: String,
			required: true,
			unique: true,
		},
		structuredData: {
			type: Schema.Types.Mixed,
			required: true,
		},
		categories: [
			{
				name: {
					type: String,
					required: true,
				},
				visible: {
					type: Boolean,
					default: true,
				},
				desc: {
					type: String,
					required: true,
				},
			},
		],
	},
	{ timestamps: true, collection: "categories" }
);

export const Category = mongoose.model("Category", categorySchema);

export const categorySchemaValidate = Joi.object({
	name: Joi.string().required(),
	visible: Joi.boolean().default(true),
	desc: Joi.string().required(),
});
