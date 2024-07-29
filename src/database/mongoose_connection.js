// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MongoDB Connected !! DB HOST : ${connectionInstance.connection.host} \n`)
//     } catch (error) {
//         console.log("ERROR", error)
//         process.exit(1);
      
//     }
// }
// export default connectDB

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

// dotenv.config({ path: './.env' });

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log('Connection Instance:', connectionInstance);
        console.log(`\n MongoDB Connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDb connection failed", error);
        process.exit(1);
    }
};

export default connectDB;

