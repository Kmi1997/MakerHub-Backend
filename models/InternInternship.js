const { DataTypes } = require("sequelize");
const InternModel = require("./intern");
const InternshipModel = require("./internship");


const InternInternshipModel = (sequelize) => {
    const InternInternship = sequelize.define('InternInternship', {
    
        InternId: {
            type: DataTypes.INTEGER,
            references: {
                model: InternModel,
                key: 'id'
            }
        },
        InternshipId: {
            type: DataTypes.INTEGER,
            references: {
                model: InternshipModel,
                key: 'id'
            }
        }
    });

    return InternInternship;
};



module.exports = InternInternshipModel;