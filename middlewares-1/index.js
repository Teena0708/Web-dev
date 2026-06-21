const express = require("express");

const app = express();

app.get("/health-checkup" ,function(req,res){
const username = req.headers.username;
const password = req.headers.password;
const kidneyId = req.query.kidneysId;

if(!(username === "teena" && password === "pass")){
// write some logic here
res.status(400).json({
    msg : "Invalid credentials!"
 })
}

if(kidneyId != 1 && kidneyId != 2){
    res.status(400).json({
        msg : "Invalid kidney ID!"
    })  
}

res.json({
    msg : "Your health checkup is done!"
});
});

app.listen(3000);