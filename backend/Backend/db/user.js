//Using schema and model on one of the collections : Users

const mongoose = require ("mongoose");
require ("./config.js");

const userSchema = new mongoose.Schema({
    name : "String",
    email : "String",
    password : "String"
});

module.exports = mongoose.model("users", userSchema);
