const jwt = require('jsonwebtoken');
require("dotenv").config();

function TokenCheckerMiddleware() {

    return function TokenChecker(req, res, next) {

        console.log(req.headers);
        if (req.headers.authorization) {
            const token = req.headers.authorization.replace("Bearer ", "");

            jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
                if (error) return res.status(401).json({ error: "Unauthorized access" });
                req.decoded = decoded;
                next();
            });
        }
        else {
            return res.status(401).send({ message: "Pas de tokens." });
        };
    };
}


module.exports = TokenCheckerMiddleware;