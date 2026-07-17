const {Admin} = require('../db');


function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;  
    Admin.findOne({ username, password })
        .then(admin => {
            if (admin) {
                next();
            } else {
                res.status(403).json({ message: 'Unauthorized....' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal server error occured' });
        });
}
module.exports = adminMiddleware;