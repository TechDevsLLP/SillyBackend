import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
	{
		location: {
			type: String,
			enum: ["delhi", "mumbai"],
			default: "delhi",
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
			enum: ["veg", "nonveg"],
			required: true,
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
		// imgUrl: {
		// 	type: String,
		// 	default: null,
		// },
		visible: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true, collection: "menus" }
);

export const Menu = mongoose.model("Menu", menuSchema);
