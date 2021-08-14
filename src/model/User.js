const { Model, DataTypes } = require("sequelize");
const { format } = require('date-fns');

class User extends Model {
    static init(sequelize) {
        super.init({
            gender: {
                type: DataTypes.JSON,
                validate: {
                    notEmpty: {
                        msg: "The gender field, cannot be empty"
                    }
                }
            },
            name: {
                type: DataTypes.JSON,
                validate: {
                    notEmpty: {
                        msg: "The name field, cannot be empty"
                    }
                }

            },
            location: {
                type: DataTypes.JSON,
                validate: {
                    notEmpty: {
                        msg: "The location field, cannot be empty"
                    }
                }

            },
            email: {
                type: DataTypes.JSON,
                validate: {
                    notEmpty: {
                        msg: "The email field, cannot be empty"
                    }
                }

            },
            login: {
                type: DataTypes.JSON,
                validate: {
                    notEmpty: {
                        msg: "The login field, cannot be empty"
                    }
                }

            },
            dob: {
                type: DataTypes.JSON,
                validate: {
                    notEmpty: {
                        msg: "The dob field, cannot be empty"
                    }
                }

            },
            registered: {
                type: DataTypes.JSON,
                validate: {
                    notEmpty: {
                        msg: "The registered field, cannot be empty"
                    }
                }

            },
            phone: {
                type: DataTypes.JSON,
                validate: {
                    notEmpty: {
                        msg: "The name phone, cannot be empty"
                    }
                }

            },
            cell: {
                type: DataTypes.JSON,
                validate: {
                    notEmpty: {
                        msg: "The cell field, cannot be empty"
                    }
                }

            },
            id_: {
                type: DataTypes.JSON,
                validate: {
                    notEmpty: {
                        msg: "The id field, cannot be empty"
                    }
                }

            },
            picture: {
                type: DataTypes.JSON,
                validate: {
                    notEmpty: {
                        msg: "The picture field, cannot be empty"
                    }
                }

            },
            nat: {
                type: DataTypes.JSON,
                validate: {
                    notEmpty: {
                        msg: "The nat field, cannot be empty"
                    }
                }

            },
            imported_at: {
                type: DataTypes.DATE,
                validate: {
                    notEmpty: {
                        msg: "The imported_at field, cannot be empty"
                    }
                },
                get() {
                    return format(this.getDataValue('imported_at'), `dd-MM-yyyy HH:mm`, { timezone: 'America/Sao_Paulo' })
                }

            },
            status: {
                type: DataTypes.ENUM,
                values: ["draft", "trash", "publicado"]

            },

        }, {
            sequelize,
            tableName: "users"
        })
    }
};

module.exports = User;