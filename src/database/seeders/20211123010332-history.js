'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Histories', [
      {date: new Date(),OrderId: 1, StateId: 1},
      {date: new Date(),OrderId: 1, StateId: 2},
      {date: new Date(),OrderId: 1, StateId: 3},
      {date: new Date(),OrderId: 1, StateId: 4},
      {date: new Date(),OrderId: 2, StateId: 1},
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Histories', null, {});
  }
};
