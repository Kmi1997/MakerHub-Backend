const db = require('../configDb');
const bcrypt = require('bcrypt');
const { Op } = require("sequelize");
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});
const jwt = require("jsonwebtoken");

async function addAdmin(data) {

    const saltRounds = 10;

    data.password = await bcrypt.hash(data.password, saltRounds);
    await db.Admin.create(data);

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

    return db.Admin.findByPk(decoded.id, { attributes: ['username', "superRoot"] });
}

async function getAll() {
    const allAdmins = db.Admin.findAll({
        where: { username: { [Op.notLike]: "root" } },
        attributes: ["id", "username", "superRoot"]
    });
    return allAdmins;
};

async function updating(req, newData) {

    const toUpdate = await db.Admin.findByPk(req);
    newData.password = await bcrypt.hash(newData.password, 9);

    await toUpdate.update({
        username: newData.username,
        password: newData.password,
        superRoot: newData.superRoot
    });

    await toUpdate.save();
    return toUpdate;
};

async function destroy(id) {
    const toDelete = await db.Admin.findByPk(id);
    await toDelete.destroy();
}


module.exports = {
    connection,
    addAdmin,
    getThisAdmin,
    getAll,
    updating,
    destroy
};