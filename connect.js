const mongoose = require("mongoose");

const conn =  mongoose.createConnection("mongodb+srv://arghaunibit:qPGZN11oUgwaQd1j@cluster0.ov7yx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/short-url");
if(conn){
    console.log("Connected to MongoDB");
}
module.exports= conn;