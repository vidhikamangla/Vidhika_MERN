const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const {router} = require('./Routers/taskRouter');
dotenv.config();
const app = new express();

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/tasks',router);

//connecting to mongo db
app.listen(process.env.PORT,()=>{
    console.log('Listening');
    console.log(process.env.MONGO_URI); 
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('MongoDB Connected.');
    })
    })

