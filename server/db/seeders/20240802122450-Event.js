"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Events",
      [
        {
          arenaId: 1,
          arenaDateId: 1,
          sportId: 1,
          price: 3000,
          levelId: 1,
          teamSize: 1,
        },
        {
          arenaId: 2,
          arenaDateId: 2,
          sportId: 2,
          price: 6000,
          levelId: 2,
          teamSize: 6,
        },
        {
          arenaId: 3,
          arenaDateId: 3,
          sportId: 3,
          price: 13000,
          levelId: 3,
          teamSize: 12,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Events", null, {});
  },
};
