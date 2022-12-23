
const db = require('../configDb');

async function donationFn(data){

    await db.Donation.create(data);  

};

async function getDonation(){
    return await db.Donation.findAll({attributes: ['id','amount', 'dateDonation']});
};

module.exports = {
    donationFn,
    getDonation
};