import { Contact } from "./contact.schema.js";

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
