const express = require ("express");
const app = express();
require("./db/config.js");
const users = require("./db/user.js");
const cors = require('cors');

app.use(cors());

app.use(express.json()); //used to accept body from frontend / postman.

app.get('/register', async (req, resp) => { 
    let result = await users.find();
    resp.send(result);   
});

app.post('/register', async (req, resp)=>{
    let user = new users(req.body);
    let result = await user.save();
    resp.send(result);
});

app.put('/register', async (req,resp)=> {
    let data = await req.body;
    let result = await users.updateOne(
         {name : "rohit"},
         {$set : data}
         )
    resp.send(result);
})

app.listen(5000);