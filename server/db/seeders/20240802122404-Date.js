"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dates",
      [
        {
          startDate: new Date('2024-08-07'),
          endDate: new Date("2024-08-08"),
        },
        {
          startDate: new Date('2024-08-010'),
          endDate: new Date("2024-08-11"),
        },
        {
          startDate: new Date('2024-08-08'),
          endDate: new Date("2024-08-09"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Dates", null, {});
  },
};
