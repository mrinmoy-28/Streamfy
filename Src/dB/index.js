import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
    try {
        const connectionInstances = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(` MONGODB CONNECTED SUCESSFULLY !! DB HOST : ${connectionInstances.connection.host}`)
    } catch (error) {
        console.error("db connection error : ", error);
        process.exit(1);
    }
}

