const express = require("express");
const zod = require("zod")
const app = express();

app.use(express.json());

app.post("/health-checkup" ,function(req,res){
const kidneys = req.body.kidneys;
const kidneyLength = kidneys.length;

res.send("you have "+ kidneyLength+"kidneys");
});

//global catches {when there is some exception error and then we want to-
// -send error msg we send them through middlewares named as global catches}

// app.use(function(err,req,res,next){
//     res.json({
//         msg : "Sorry something went wrong"
//     })
// })
app.listen(3000);
