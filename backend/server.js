import express from 'express';
import {config} from 'dotenv';
config();  //to access .env variables



import { connnectToMongoDB } from './db/connectToDB.js';

const app = express();

// To check server is running
app.get("/",(req,res)=>{
    res.send("Hello from server : )");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    connnectToMongoDB();
    console.log(`server is running at port ${PORT} :)`);
})