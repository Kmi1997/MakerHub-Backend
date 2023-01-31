const db = require('../configDb');
const bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require("jsonwebtoken");

async function addAdmin(data) {

    const saltRounds = 10;

    data.password = await bcrypt.hash(data.password, saltRounds);
    await db.Admin.create(data);
    console.log(data);

};


async function connection(data) {

    const user = await db.Admin.findOne({ where: { username: data.username } });

    //compare two passwords.
    if (user) {
        const res = await bcrypt.compare(data.password, user.password);

        if (res) {

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                algorithm: "HS256",
                expiresIn: process.env.JWT_EXPIRY
            });
            return token;
        }
        else if (!res) {
            return res;
        };
    };
};

//decode token and search this id in DB.
async function getThisAdmin(token) {

    token = token.replace('Bearer ', "");
    const decoded = jwt.decode(token);

    return db.Admin.findByPk(decoded.id, { attributes: ['username'] });
}


module.exports = {
    connection,
    addAdmin,
    getThisAdmin
};