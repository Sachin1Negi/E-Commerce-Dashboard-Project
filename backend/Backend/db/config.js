//Connecting node.js with mongoDB using mongoose.

const mongoose = require ("mongoose");  //I forgot placing brackets on mongoose.
mongoose.connect("mongodb://127.0.0.1:27017/E-Commerce"); 

//Note : here I  have replaced 
// "localhost" with "0.0.0.0"
//Due to compatibility issue between Mongodb and Node v17

