import { mailchimp } from "../config/mailchimp.js";
import { MAILCHIMP_LIST_ID } from "../config/secrets.js";

export async function subscribe(email) {
	try {
		const response = await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, {
			email_address: email,
			status: "subscribed",
		});

		if (response.statusCode === 200) return { success: true };
		else
			return {
				success: false,
				error: { message: "Successfully subscribed to the newsletter." },
			};
	} catch (error) {
		return { success: false, error };
	}
}
