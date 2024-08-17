import express from 'express';
import {config} from 'dotenv';
config();  //to access .env variables
import path from 'path';
const __dirname = path.resolve();



import { connnectToMongoDB } from './db/connectToDB.js';

import cardRoute from './routers/card.route.js'

const app = express();

app.use(express.json()); // to parse req.body

// To check server is running
app.get("/",(req,res)=>{
    res.send("Hello from server : )");
})


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    connnectToMongoDB();
    console.log(`server is running at port ${PORT} :)`);
})


app.use('/api/cards',cardRoute);

app.use(express.static(path.join(__dirname,'/frontend/dist')));

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,'frontend',"dist",'index.html'));
})


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const error = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      error,
    });
  });