import { connect } from "mongoose";

export async function setupMongo() {
	connect("mongodb://localhost:27017/silly").catch((err) => {
		console.log("MongoDb connection error");
		console.log(err);
	});
}
