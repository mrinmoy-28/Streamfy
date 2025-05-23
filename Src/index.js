import express from "express"
import { connectDB } from "./dB/index.js";
import dotenv from "dotenv";
const app = express();
dotenv.config(
    {
        path: './.env'
    }
);
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
}).catch( (error)=>{
    console.log("MONGO db connection failed !!! ", err);
})