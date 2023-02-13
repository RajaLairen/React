const express=require('express');
const cors=require('cors');
const mongoosee=require('./mongoose');

const app=express();
app.use(cors());
mongoosee.connectdb();

app.post("/setUser",mongoosee.createUserCookie);

app.post("/getData",mongoosee.getUserData);

app.listen(5000);