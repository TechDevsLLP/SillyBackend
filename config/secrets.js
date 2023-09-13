import dotenv from "dotenv";
dotenv.config();

export const {
	PORT,
	SENDER_MAIL_PWD,
	SENDER_MAIL_ID,
	MAILCHIMP_API_KEY,
	MAILCHIMP_LIST_ID,
	MAILCHIMP_SERVER_PREFIX,
} = process.env;
