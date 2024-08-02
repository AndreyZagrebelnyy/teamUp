"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ArenaDates",
      [
        {
          arenaId: 1,
          dateId: 1,
        },
        {
          arenaId: 1,
          dateId: 2,
        },
        {
          arenaId: 1,
          dateId: 3,
        },
        {
          arenaId: 2,
          dateId: 1,
        },
        {
          arenaId: 2,
          dateId: 2,
        },
        {
          arenaId: 2,
          dateId: 3,
        },
        {
          arenaId: 3,
          dateId: 1,
        },
        {
          arenaId: 3,
          dateId: 2,
        },
        {
          arenaId: 3,
          dateId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ArenaDates", null, {});
  },
};
