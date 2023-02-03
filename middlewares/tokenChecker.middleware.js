const jwt = require('jsonwebtoken');


function TokenCheckerMiddleware() {

    return function TokenChecker(req, res, next) {

        if (req.url === '/admin/testConnection') {
            next();
            return;
        }

        console.log('Omelette du fromage !');

        console.log(req.headers);
        if (req.headers.authorization) {
            const token = req.headers.authorization.replace("Bearer ", "");

            jwt.verify(token, process.env.JWT_SECRET, {
                ignoreExpiration: false
            }, (error, decoded) => {
                console.log(decoded);
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