"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Sports",
      [
        {
          title: "Баскетбол",
        },
        {
          title: "Волейбол",
        },
        {
          title: "Футбол",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Sports", null, {});
  },
};
