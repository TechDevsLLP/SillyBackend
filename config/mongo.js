import { connect } from "mongoose";
import { MONGO_URI } from "./secrets.js";

export async function setupMongo() {
	connect(MONGO_URI).catch((err) => {
		console.log("MongoDb connection error");
		console.log(err);
	});
}
