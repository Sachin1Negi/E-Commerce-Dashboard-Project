const express = require ("express");
const app = express();
require("./db/config.js");
const user = require("./db/user.js");

app.use(express.json()); //used to accept body from frontend / postman.

app.get('/register', (req, resp) => { 
    resp.send("data");   
});

app.post('/register', async (req, resp)=>{
    let data = await req.body;
    resp.send(data);
});
app.listen(5000);