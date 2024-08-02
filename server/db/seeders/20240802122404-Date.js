"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dates",
      [
        {
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          startDate: new Date(),
          endDate: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Dates", null, {});
  },
};
