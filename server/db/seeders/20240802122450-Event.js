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
        {
          arenaId: 4,
          arenaDateId: 1,
          sportId: 1,
          price: 3000,
          levelId: 1,
          teamSize: 10,
        },
        {
          arenaId: 3,
          arenaDateId: 2,
          sportId: 2,
          price: 6000,
          levelId: 2,
          teamSize: 6,
        },
        {
          arenaId: 5,
          arenaDateId: 3,
          sportId: 3,
          price: 13000,
          levelId: 3,
          teamSize: 12,
        },
        {
          arenaId: 6,
          arenaDateId: 1,
          sportId: 1,
          price: 3000,
          levelId: 1,
          teamSize: 10,
        },
        {
          arenaId: 7,
          arenaDateId: 2,
          sportId: 2,
          price: 6000,
          levelId: 2,
          teamSize: 6,
        },
        {
          arenaId: 8,
          arenaDateId: 3,
          sportId: 3,
          price: 13000,
          levelId: 3,
          teamSize: 12,
        },
        {
          arenaId: 9,
          arenaDateId: 1,
          sportId: 1,
          price: 3000,
          levelId: 1,
          teamSize: 10,
        },
        {
          arenaId: 10,
          arenaDateId: 2,
          sportId: 2,
          price: 6000,
          levelId: 2,
          teamSize: 6,
        },
        {
          arenaId: 11,
          arenaDateId: 3,
          sportId: 3,
          price: 13000,
          levelId: 3,
          teamSize: 12,
        },
        {
          arenaId: 12,
          arenaDateId: 1,
          sportId: 1,
          price: 3000,
          levelId: 1,
          teamSize: 10,
        },
        {
          arenaId: 13,
          arenaDateId: 2,
          sportId: 2,
          price: 6000,
          levelId: 2,
          teamSize: 6,
        },
        {
          arenaId: 14,
          arenaDateId: 3,
          sportId: 3,
          price: 13000,
          levelId: 3,
          teamSize: 12,
        },
        {
          arenaId: 15,
          arenaDateId: 1,
          sportId: 1,
          price: 3000,
          levelId: 1,
          teamSize: 10,
        },
        {
          arenaId: 16,
          arenaDateId: 2,
          sportId: 2,
          price: 6000,
          levelId: 2,
          teamSize: 6,
        },
        {
          arenaId: 17,
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
