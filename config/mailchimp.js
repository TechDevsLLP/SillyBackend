import mailchimp from "@mailchimp/mailchimp_marketing";
import {
	MAILCHIMP_API_KEY,
	MAILCHIMP_SERVER_PREFIX,
	MAILCHIMP_LIST_ID,
} from "./secrets.js";

mailchimp.setConfig({
	apiKey: MAILCHIMP_API_KEY,
	server: MAILCHIMP_SERVER_PREFIX,
});

export { mailchimp };
