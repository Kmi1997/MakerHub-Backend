const { Params } = require("../configDb");
const db = require("../configDb");

async function addParams(data) {

    console.log(data);
    const params = await db.Params.create(data);

    return params;
}

module.exports = {
    addParams
};