import { Contact } from "./contact.schema.js";
import { Menu } from "./menu.schema.js";
import { Category } from "./category.schema.js";

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
export async function getAllCategories(location) {
	try {
		const category = await Category.findOne({ location });
		return {
			success: true,
			data: category,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
}

export async function createOrUpdateCategories(location, categories) {
	try {
		let existingCategory = await Category.findOne({ location });

		if (!existingCategory) {
			existingCategory = new Category({ location, categories });
		} else {
			existingCategory.categories = categories;
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
export async function getMenuByCategory(location, category) {
	try {
		const menuItems = await Menu.find({ location, category, visible: true });

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
