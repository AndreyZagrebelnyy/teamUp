'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Images", [
      {
        url: "/img/arena1.1.jpg",
        arenaId: 1,
      },
      {
        url: "/img/arena1.2.jpg",
        arenaId: 1,
      },
      {
        url: "/img/arena1.3.jpg",
        arenaId: 1,
      },
      {
        url: "/img/arena2.1.jpg",
        arenaId: 2,
      },
      {
        url: "/img/arena2.2.jpg",
        arenaId: 2,
      },
      {
        url: "/img/arena2.3.jpg",
        arenaId: 2,
      },
      {
        url: "/img/arena3.1.jpg",
        arenaId: 3,
      },
      {
        url: "/img/arena3.2.jpg",
        arenaId: 3,
      },
      {
        url: "/img/arena3.3.jpg",
        arenaId: 3,
      },
      {
        url: "/img/arena4.1.jpg",
        arenaId: 4,
      },
      {
        url: "/img/arena4.2.jpg",
        arenaId: 4,
      },
      {
        url: "/img/arena4.3.jpg",
        arenaId: 4,
      },
      {
        url: "/img/arena5.1.jpg",
        arenaId: 5,
      },
      {
        url: "/img/arena5.2.jpg",
        arenaId: 5,
      },
      {
        url: "/img/arena5.3.jpg",
        arenaId: 5,
      },
      {
        url: "/img/arena6.1.jpg",
        arenaId: 6,
      },
      {
        url: "/img/arena6.2.jpg",
        arenaId: 6,
      },
      {
        url: "/img/arena6.3.jpg",
        arenaId: 6,
      },
      {
        url: "/img/arena7.1.jpeg",
        arenaId: 7,
      },
      {
        url: "/img/arena7.2.jpg",
        arenaId: 7,
      },
      {
        url: "/img/arena7.3.jpg",
        arenaId: 7,
      },
      {
        url: "/img/arena8.1.jpg",
        arenaId: 8,
      },
      {
        url: "/img/arena8.2.jpg",
        arenaId: 8,
      },
      {
        url: "/img/arena8.3.jpg",
        arenaId: 8,
      },
      {
        url: "/img/arena9.1.jpg",
        arenaId: 9,
      },
      {
        url: "/img/arena9.2.jpg",
        arenaId: 9,
      },
      {
        url: "/img/arena9.3.jpg",
        arenaId: 9,
      },
      {
        url: "/img/arena10.1.jpg",
        arenaId: 10,
      },
      {
        url: "/img/arena10.2.jpeg",
        arenaId: 10,
      },
      {
        url: "/img/arena10.3.jpg",
        arenaId: 10,
      },
      {
        url: "/img/arena11.1.jpg",
        arenaId: 11,
      },
      {
        url: "/img/arena11.2.jpg",
        arenaId: 11,
      },
      {
        url: "/img/arena11.3.jpg",
        arenaId: 11,
      },
      {
        url: "/img/arena12.1.jpg",
        arenaId: 12,
      },
      {
        url: "/img/arena12.2.jpg",
        arenaId: 12,
      },
      {
        url: "/img/arena12.3.jpeg",
        arenaId: 12,
      },
      {
        url: "/img/arena13.1.jpg",
        arenaId: 13,
      },
      {
        url: "/img/arena13.2.jpeg",
        arenaId: 13,
      },
      {
        url: "/img/arena13.3.jpg",
        arenaId: 13,
      },
      {
        url: "/img/arena14.1.jpg",
        arenaId: 14,
      },
      {
        url: "/img/arena14.2.jpeg",
        arenaId: 14,
      },
      {
        url: "/img/arena14.3.jpeg",
        arenaId: 14,
      },
      {
        url: "/img/arena15.1.jpg",
        arenaId: 15,
      },
      {
        url: "/img/arena15.2.jpg",
        arenaId: 15,
      },
      {
        url: "/img/arena15.3.jpg",
        arenaId: 15,
      },
      {
        url: "/img/arena16.1.jpg",
        arenaId: 16,
      },
      {
        url: "/img/arena16.2.jpeg",
        arenaId: 16,
      },
      {
        url: "/img/arena16.3.jpeg",
        arenaId: 16,
      },
      {
        url: "/img/arena17.1.jpeg",
        arenaId: 17,
      },
      {
        url: "/img/arena17.2.jpg",
        arenaId: 17,
      },
      {
        url: "/img/arena17.3.jpg",
        arenaId: 17,
      },
      {
        url: "/img/arena18.1.jpg",
        arenaId: 18,
      },
      {
        url: "/img/arena18.2.jpg",
        arenaId: 18,
      },
      {
        url: "/img/arena18.3.jpg",
        arenaId: 18,
      },
      {
        url: "/img/arena19.1.jpeg",
        arenaId: 19,
      },
      {
        url: "/img/arena19.2.jpg",
        arenaId: 19,
      },
      {
        url: "/img/arena19.3.jpg",
        arenaId: 19,
      },
      {
        url: "/img/arena20.1.jpg",
        arenaId: 20,
      },
      {
        url: "/img/arena20.2.jpg",
        arenaId: 20,
      },
      {
        url: "/img/arena20.3.jpg",
        arenaId: 20,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images", null, {});
  },
};