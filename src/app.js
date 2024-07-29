import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();


// Middleware and routes setup
app.use(express.json());
// Define your routes here

export default app;

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true,

}))

//!when data is recieved through forms and to limit the data
app.use(express.json({
    limit : '16kb'
}));

//! when data is recieved through URL : is difficult because it has special encoder(special characters + we are using extended to play with nested objects)
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))

app.use(express.static('public'))

app.use(cookieParser());//! its main function is to access the cookie of the client from the server and set cookies securely , basically apply curd operations on them 

