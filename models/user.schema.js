import mongoose from "mongoose";
import Joi from "joi";

const userSchema = new mongoose.Schema(
	{
		location: {
			type: String,
			enum: ["delhi", "mumbai"],
			required: true,
		},
		isSuperAdmin: {
			type: Boolean,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true, collection: "users" }
);

export const User = mongoose.model("User", userSchema);

export const userSchemaValidate = Joi.object({
	username: Joi.string().required(),
	password: Joi.string().required(),
});
