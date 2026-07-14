const {Router} = require("express");
const router = Router;
const {User,Course} = require("../db");
const userMiddleware = require("../middlewares/user");

router.post('signup', async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

     await User.create({
        username:username,
        password:password
    })
        res.json({
        msg : "user created successfully"
    })
})

router.get('/Courses',async(req,res)=>{
    const response = await Course.find({});
     
    res.json({
    courses : response
})

})

router.post('/courses/:courseId',userMiddleware, (req,res)=>{
//implement course purchase logic

const courseId = req.params.courseId;
const username = req.headers.username;
User.updateOne({
    username : username
},{
    purchasedCourses:{
        "$push":courseId
    }
}).catch(function(e){
    console.log(e)
    
});
res.json({
    msg : "Purchase Complete!!"
})

})


router.post('/purchasedCourses',userMiddleware, (req,res)=>{
    //implement fetching purchased courses
const user = await User.findone({
    username:req.headers.username
});

console.log(user.purchasedCourses);
const courses = await Course.find({
    _id: {
    "$in":user.purchasedCourses
});

res.json({
    courses:courses
})


})

module.exports = router