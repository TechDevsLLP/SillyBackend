import Joi from "joi";
import { saveContactInquiry } from "../models/index.js";
import { contactFormSchemaValidate } from "../models/contact.schema.js";
import { transporter } from "../config/nodemailer.js";
import { SENDER_MAIL_ID } from "../config/secrets.js";
import { subscribe } from "../utils/index.js";

export async function handleContactUs(req, res, next) {
	const { error, value } = contactFormSchemaValidate.validate(req.body);

	if (error) return next(error);

	try {
		const result = await saveContactInquiry(value);

		if (result.success) {
			const mailOptions = {
				from: SENDER_MAIL_ID, // Your email address
				to: "your-email@gmail.com", // Recipient's email address
				subject: `CONTACT US - ${value.name}`,
				text: `
         Name: ${value.name}
         Email: ${value.email}
         Phone: ${value.phone}
         Message: ${value.body}
       `,
			};

			transporter.sendMail(mailOptions, (err, info) => {
				if (err) return next(err);
				return res.status(200).json({
					message: "Contact form inquiry saved and sent successfully.",
				});
			});
		} else {
			return next(result.error);
		}
	} catch (err) {
		return next(err);
	}
}

export async function handleNewsletter(req, res, next) {
	const { error, value } = Joi.object({
		email: Joi.string().email().required(),
	}).validate(req.body);

	if (error) return next(error);

	try {
		const result = await subscribe(value.email);

		if (result.success) {
			return res
				.status(200)
				.json({ message: "Successfully subscribed to the newsletter." });
		} else {
			return next(result.error);
		}
	} catch (error) {
		return next(error);
	}
}
