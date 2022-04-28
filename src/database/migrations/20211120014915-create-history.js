'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Histories', {
      date: {
        type: Sequelize.DATE
      },
      OrderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "orders",
          key: "id"
        }
      },
      StateId: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        primaryKey: true,
        references: {
          model: "states",
          key: "id"
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Histories');
  }
};