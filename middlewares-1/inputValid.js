const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup" ,function(req,res){
const kidneys = req.body.kidneys;
const kidneyLength = kidneys.length;

res.send("you have "+ kidneyLength+"kidneys");
});

//global catches {when there is some exception error and then we want to-
// -send error msg we send them through middlewares named as global catches}
app.listen(3000);
