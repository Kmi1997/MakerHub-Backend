const { DataTypes } = require("sequelize");

const InternshipModel = (sequelize) => {

    const Internship = sequelize.define('Internship', {

            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Le nom est obligatoire."
                    },
                }
            },
            numberAvailable: {
                type: DataTypes.INTEGER,
                allowNull : false,
                validate: {
                    isInt : true,
                    notNull: true,
                }
            },
            numberPlaces: {
                type: DataTypes.INTEGER,
                allowNull : false,
                validate: {
                    isInt : true,
                    notNull: true,
                    min: {
                        args: 1,
                        msg: "1 place minimum requise"
                    },
                }
            },
            startDate: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                validate: {
                    isDate: {
                        msg: "Format date attendu"
                    },

                    isAfter: {
                        args: new Date().toDateString(),
                        msg: "Date minimum -> J+1"
                    }
                }
            },

            endDate: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                validate: {
                    isDate: {
                        msg: "Format date attendu"
                    }
                },
            },
            startHour: {
                type: DataTypes.STRING(5),
                allowNull: false,
                validate: {
                    is: {
                        args: /^[0-1][0-9]:[0-5][0-9]|[2][0-4]:[0-5][0-9]$/,
                        msg: "L'heure doit être du format -> 00:00"
                    },

                },
            },
            endHour: {
                type: DataTypes.STRING(5),
                validate: {
                    is: {
                        args: /^[0-1][0-9]:[0-5][0-9]|[2][0-4]:[0-5][0-9]$/,
                        msg: "L'heure doit être du format -> 00:00"
                    },
                },
                allowNull: false,
            },
            image: {
                type: DataTypes.BLOB('long'),
                allowNull: true
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: {
                    isDecimal: true,
                    notNull: true
                }
            },
            place: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { msg: "Pas de caractères vides" }
                }
            },
            fromAge: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: { msg: "L'âge minimum est obligatoire" },
                    isInt: { msg: "L'âge doit être un nombre entier" },
                    min: {
                        args: 1,
                        msg: "L'âge doit être égal ou supérieur à 1"
                    }
                },
            },
            desc: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            activated: {
                type: DataTypes.BOOLEAN,
                allowNull : false,
                defaultValue : false
            }
        }
    );
    return Internship;
};



module.exports = InternshipModel;