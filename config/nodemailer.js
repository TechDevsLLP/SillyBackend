import nodemailer from "nodemailer";
import { SENDER_MAIL_PWD, SENDER_MAIL_ID } from "./secrets.js";

export const transporter = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		user: SENDER_MAIL_ID,
		pass: SENDER_MAIL_PWD,
	},
});
