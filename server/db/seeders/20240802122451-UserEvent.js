"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UserEvents",
      [
        {
          userId: 1,
          eventId: 1,
        },
        {
          userId: 2,
          eventId: 1,
        },
        {
          userId: 3,
          eventId: 1,
        },
        {
          userId: 4,
          eventId: 1,
        },
        {
          userId: 5,
          eventId: 1,
        },
        {
          userId: 6,
          eventId: 1,
        },
        {
          userId: 2,
          eventId: 2,
        },
        {
          userId: 3,
          eventId: 2,
        },
        {
          userId: 4,
          eventId: 2,
        },
        {
          userId: 5,
          eventId: 2,
        },
        {
          userId: 6,
          eventId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserEvents", null, {});
  },
};
