const express = require('express');
const adminMiddleware = require('../middlewares/admin');
const router = express.Router();

router.post('/signup', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
});



router.post('/courses', adminMiddleware, (req, res) => {

});



router.get('/courses', adminMiddleware, (req, res) => {

});


module.exports = router;