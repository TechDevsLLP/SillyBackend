import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema(
	{
		location: {
			type: String,
			enum: ["delhi", "mumbai"],
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		subcategories: [
			{
				type: String,
				required: true,
			},
		],
	},
	{ timestamps: true, collection: "subcategories" }
);

const Subcategory = mongoose.model("Subcategory", subcategorySchema);

export default Subcategory;
