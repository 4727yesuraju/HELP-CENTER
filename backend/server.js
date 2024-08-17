import express from 'express';

const app = express();

// To check server is running
app.get("/",(req,res)=>{
    res.send("Hello from server : )");
})

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})