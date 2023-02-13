const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:2"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports = connectToMongo;