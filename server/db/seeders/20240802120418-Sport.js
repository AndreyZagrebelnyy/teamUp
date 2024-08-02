"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Sports",
      [
        {
          title: "Basketball",
        },
        {
          title: "Volleyball",
        },
        {
          title: "Football",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Sports", null, {});
  },
};
