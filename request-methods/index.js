const express = require('express');
const app = express();
const users = [{
    name : "John",
    kidneys : {
        healthy : false
    }


}];


//we send query parameters in get request.
app.get("/", function(req, res) {
    const JohnKidneys = users[0].kidneys;
    const numbersOfKidneys = JohnKidneys.length;
    let numbersOfHealthyKidneys = 0;
    for (let i = 0; i < numbersOfKidneys; i++) {
        if (JohnKidneys[i].healthy) {
            numbersOfHealthyKidneys= numbersOfHealthyKidneys + 1;
        }
    }

    res.json({
        numbersOfKidneys,
        numbersOfHealthyKidneys
});
});


//we send body in post request
app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push{{
        healthy : isHealthy
    }}
})

app.listen(3000);