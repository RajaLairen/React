require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const connect = require('./db');
const app=express();

connect();

const port=process.env.PORT||8080;

app.listen(port,()=>{
    console.log("Server started");
})