const db = require("../config/database.js");
const { Sequelize } = require("sequelize");
const User = require("../model/User");

const connection = new Sequelize(db);
User.init(connection);


try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = connection;