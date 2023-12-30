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
		subcategories: {
			type: [mongoose.Schema.Types.Mixed], // [["pizza", true], ["pasta", true]]
			required: true,
		},
	},
	{ timestamps: true, collection: "subcategories" }
);

const Subcategory = mongoose.model("Subcategory", subcategorySchema);

export default Subcategory;
