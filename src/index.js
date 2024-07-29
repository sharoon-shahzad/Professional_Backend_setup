// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";


// import express from "express";
// const app = express();  
// function connectDB(){}

// connectDB();

// //better approach 
// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, )
//     } catch (error) {
//         console.log("ERROR", error)
//         throw error
//     }
//     app.listen(process.env.PORT, ()=>{
//         console.log("Server is listening on port", process.env.PORT)
//     })
// })()

//? This require syntax is common isuse among developers and creates the inconsistency with in the code. require('dotenv').config({path: __dirname + '/.env'}) 

import dotenv from "dotenv";
import connectDB from "./database/mongoose_connection.js";
import app from "./app.js";

dotenv.config();

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed", err);
    });
