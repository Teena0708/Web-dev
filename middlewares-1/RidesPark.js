const express = require("express");

const app = express();
function isOldEnough(age){
if(age>14){
    return true;
}
else {
    return false;}
}


app.get("/ride1", function(req , res){
    if(isOldEnough(req.query.age)){
         res.json({
        msg : "You have successfully riden the ride 1"
    })
    }
    res.status(411).json({
        msg : "Sorryy you are not of age yet to riden the ride 1"
    })
})

app.get("/ride2", function(req , res){
    if(isOldEnough(req.query.age)){
         res.json({
        msg : "You have successfully riden the ride 1"
    })
    }
    res.status(411).json({
        msg : "Sorryy you are not of age yet to riden the ride 1"
    })
})
app.listen(3000)