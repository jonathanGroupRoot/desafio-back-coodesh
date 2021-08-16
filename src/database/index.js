const db = require("../config/database.js");
const { Sequelize } = require("sequelize");
const User = require("../model/User");

const connection = new Sequelize(db);
User.init(connection);

module.exports = connection;