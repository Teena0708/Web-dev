const express = require('express');
const app = express();
const users = [{
    name : "John",
    kidneys : {
        healthy : false
    }


}];

app.use(express.json());


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
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg:"done!"
    })
})

app.put("/", function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/" ,function(req,res){
    let newKidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys.healthy){
            newKidneys.push({
                healthy : true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg : "done"})
})

app.listen(3000);