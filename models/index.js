import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Contact } from "./contact.schema.js";
import { Menu } from "./menu.schema.js";
import { Category } from "./category.schema.js";
import Subcategory from "./subcategory.schema.js";
import { User } from "./user.schema.js";

export async function saveContactInquiry(formData) {
	try {
		const newEntry = new Contact(formData);
		await newEntry.save();
		return {
			success: true,
			message: "Contact form inquiry saved successfully.",
		};
	} catch (error) {
		return { success: false, error };
	}
}

// CATEGORIES
export async function getAllLocationCats(location) {
	try {
		const resp = await Category.find();

		return {
			success: true,
			data,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}

export async function getAllCategories(location) {
	try {
		const resp = await Category.findOne({ location });
		let data = [];
		resp.categories.forEach((cat) => {
			if (cat.visible) return data.push(cat.name);
		});
		
		return {
			success: true,
			data,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}

export async function getStructuredData(location) {
	try {
		const resp = await Category.findOne({ location });
		const data = resp.structuredData;

		return {
			success: true,
			data,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}

export async function createOrUpdateCategories(
	location,
	categories,
	structuredData
) {
	try {
		let existingCategory = await Category.findOne({ location });

		if (!existingCategory) {
			existingCategory = new Category({ location, categories, structuredData });
		} else {
			existingCategory.categories = categories;
			existingCategory.structuredData = structuredData;
		}

		const savedCategory = await existingCategory.save();
		return {
			success: true,
			data: savedCategory,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}

// MENU
export async function getMenuByCategory(location, category, showArchived) {
	try {
		let menuItems = await Menu.find({ location, category });
		if (showArchived === "false")
			menuItems = menuItems.filter((item) => item.visible);

		return {
			success: true,
			data: menuItems,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}

export async function getMenuSubcategories(location, category, all = "false") {
	try {
		const result = await Subcategory.findOne(
			{ location, category },
			"subcategories"
		);

		if (result) {
			const { subcategories } = result;
			const data =
				all == "true"
					? subcategories
					: subcategories
							.filter(([key, value]) => value === true)
							.map(([key, value]) => key);

			return {
				success: true,
				data,
			};
		} else {
			return {
				success: true,
				data: [],
			};
		}
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}

export async function getCatMeta(location, category) {
	try {
		const resp = await Category.findOne({ location });
		const data = resp.categories.filter((cat) => cat.name === category);
		const meta = data[0].desc;

		return {
			success: true,
			data: meta,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}

export async function addMenuItem(menuItemData) {
	try {
		const newMenuItem = new Menu(menuItemData);
		const createdMenuItem = await newMenuItem.save();

		return {
			success: true,
			data: createdMenuItem,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}

export async function addMultipleMenuItems(location, menuItems) {
	try {
		const createdMenuItems = await Menu.insertMany(
			menuItems.map((item) => ({
				...item,
				location,
				price: item.price.toString(),
			}))
		);

		return {
			success: true,
			data: createdMenuItems,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}

export async function updateMenuItem(location, id, updatedData) {
	try {
		const updatedMenuItem = await Menu.findOneAndUpdate(
			{ _id: id, location },
			{ $set: updatedData },
			{ new: true } // Return the updated document
		);

		if (!updatedMenuItem) {
			return {
				success: false,
				error: { message: "Menu item not found or location mismatch" },
			};
		}

		return {
			success: true,
			data: updatedMenuItem,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}

export async function updateMultipleMenuItems(location, updatedMenuItems) {
	try {
		const bulkOps = updatedMenuItems.map((updatedItem) => ({
			updateOne: {
				filter: { name: updatedItem.name, location },
				update: { $set: updatedItem },
				upsert: true,
			},
		}));

		const result = await Menu.bulkWrite(bulkOps);

		return {
			success: true,
			data: result.modifiedCount,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}

export async function deleteMenuItemSingle(location, id) {
	try {
		const result = await Menu.updateOne(
			{ _id: id, location },
			{ $set: { visible: false } }
		);

		return {
			success: result.modifiedCount === 1,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}

export async function authenticateUser(username, password) {
	try {
		const user = await User.findOne({ username });

		if (user) {
			const isPasswordMatch = await bcrypt.compare(password, user.password);

			if (isPasswordMatch) {
				const { location, isSuperAdmin } = user;
				return {
					success: true,
					location,
					isSuperAdmin,
				};
			} else {
				return {
					success: false,
					message: "Incorrect credentials",
				};
			}
		} else {
			return {
				success: false,
				message: "User does not exist",
			};
		}
	} catch (error) {
		return {
			success: false,
			error: error.message,
		};
	}
}

export async function generateToken(payload) {
	return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1d" });
}

export async function updateMenuSubcategories(
	location,
	category,
	subcategories
) {
	try {
		const result = await Subcategory.updateOne(
			{ location, category },
			{ $set: { subcategories } }
		);

		return {
			success: result.modifiedCount === 1,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}

export async function postNewSubcategory(location, category, subcat) {
	try {
		let data;
		const result = await Subcategory.findOne({ location, category });

		if (result) {
			result.subcategories.push([subcat, false]);
			await result.save();
			data = result.subcategories;
		} else {
			const newSubcategory = new Subcategory({
				location,
				category,
				subcategories: [[subcat, false]],
			});
			await newSubcategory.save();
			data = newSubcategory.subcategories;
		}

		return {
			success: true,
			data,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}
