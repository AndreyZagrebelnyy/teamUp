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
        {
          arenaId: 4,
          dateId: 1,
        },
        {
          arenaId: 4,
          dateId: 2,
        },
        {
          arenaId: 4,
          dateId: 3,
        },
        {
          arenaId: 5,
          dateId: 1,
        },
        {
          arenaId: 5,
          dateId: 2,
        },
        {
          arenaId: 5,
          dateId: 3,
        },
        {
          arenaId: 6,
          dateId: 1,
        },
        {
          arenaId: 6,
          dateId: 2,
        },
        {
          arenaId: 6,
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
