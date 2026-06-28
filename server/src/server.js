require('dotenv').config();
const http = require('http');
const express = require("express");
const app = express();
const mongoose = require('mongoose');



app.use((req,res,next) =>{
    console.log("Server start ", req.url, req.method);
    res.send('<p><h1> Welcome back  this is the first HMS</h1></p>')
})

const PORT = process.env.PORT || 3000;


const server = http.createServer(app);
const url = process.env.MONGO_URI || 'mongodb://localhost:27017/akash_hms';

mongoose.connect(url).then(() =>{
    console.log('MongoDB connected');
    app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to connect to database', error);
    process.exit(1);
})

