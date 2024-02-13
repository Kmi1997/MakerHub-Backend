const jwt = require('jsonwebtoken');


function TokenCheckerMiddleware() {

    return function TokenChecker(req, res, next) {
        if (req.cookies.jwt_token) {
            // const token = req.headers.authorization.replace("Bearer ", "");
            jwt.verify(req.cookies.jwt_token, process.env.JWT_SECRET, {
                ignoreExpiration: false
            }, (error, decoded) => {
                if (error) return res.status(401).json({ error: "Unauthorized access" });
                req.decoded = decoded;
                next();
            });
        }
        else {
            return res.status(401).render('connection', { error: null });
        };
    };
}


module.exports = TokenCheckerMiddleware;