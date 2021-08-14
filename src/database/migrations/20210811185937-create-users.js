'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('users', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      gender: {
        type: Sequelize.JSON,
        allowNull: false
      },
      name: {
        type: Sequelize.JSON,
        allowNull: false
      },
      location: {
        type: Sequelize.JSON,
        allowNull: false
      },
      email: {
        type: Sequelize.JSON,
        allowNull: false
      },
      login: {
        type: Sequelize.JSON,
        allowNull: false
      },
      dob: {
        type: Sequelize.JSON,
        allowNull: false
      },
      registered: {
        type: Sequelize.JSON,
        allowNull: false
      },
      phone: {
        type: Sequelize.JSON,
        allowNull: false
      },
      cell: {
        type: Sequelize.JSON,
        allowNull: false
      },
      id_: {
        type: Sequelize.JSON,
        allowNull: false
      },
      picture: {
        type: Sequelize.JSON,
        allowNull: false
      }, 
      nat: {
        type: Sequelize.JSON,
        allowNull: false
      },
      imported_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM("draft", "trash", "publicado"),
  
      },
       
    });

  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.dropTable('users');
  
  }
};
