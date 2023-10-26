import { mailchimp } from "../config/mailchimp.js";
import { MAILCHIMP_LIST_ID } from "../config/secrets.js";

export async function subscribe(email, region) {
	try {
		const response = await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, {
			email_address: email,
			status: "subscribed",
			tags: [region],
		});

		if (response.status == "subscribed")
			return {
				success: true,
				message: "Congratulations! You're on our mailing list.",
			};
		else
			return {
				success: false,
				error: { message: "Sorry! Something went wrong on our end." },
			};
	} catch (error) {
		if (
			error.response &&
			error.response.body &&
			error.response.body.title &&
			error.response.body.title === "Member Exists"
		)
			return { success: true, message: "You are already on our mailing list" };
		return {
			success: false,
			error: { ...error, message: "Sorry! Something went wrong on our end." },
		};
	}
}
