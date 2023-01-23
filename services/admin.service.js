const db = require('../configDb');
const bcrypt = require('bcrypt');

async function AddAdmin(data) {

    const saltRounds = 10;

    data.password = await bcrypt.hash(data.password, saltRounds);
    await db.Admin.create(data);

};

module.exports = {
    AddAdmin
};