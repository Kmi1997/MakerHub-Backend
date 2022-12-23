const { DataTypes } = require("sequelize");

const donationModel = (sequelize) => {
    const Donation = sequelize.define('Donation', {
        amount : {
           type: DataTypes.FLOAT,
           allowNull: false,
        },
        dateDonation : {
           type : DataTypes.DATE,
           allowNull: false
        }
       });
    
       return Donation;
}



module.exports = donationModel;