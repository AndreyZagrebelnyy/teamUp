'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Images", [
      {
        url: "/foto/arena1.1.jpg",
        arenaId: 1,
      },
      {
        url: "/foto/arena1.2.jpg",
        arenaId: 1,
      },
      {
        url: "/foto/arena1.3.jpg",
        arenaId: 1,
      },
      {
        url: "/foto/arena2.1.jpg",
        arenaId: 2,
      },
      {
        url: "/foto/arena2.2.jpg",
        arenaId: 2,
      },
      {
        url: "/foto/arena2.3.jpg",
        arenaId: 2,
      },
      {
        url: "/foto/arena3.1.jpg",
        arenaId: 3,
      },
      {
        url: "/foto/arena3.2.jpg",
        arenaId: 3,
      },
      {
        url: "/foto/arena3.3.jpg",
        arenaId: 3,
      },
      {
        url: "/foto/arena4.1.jpg",
        arenaId: 4,
      },
      {
        url: "/foto/arena4.2.jpg",
        arenaId: 4,
      },
      {
        url: "/foto/arena4.3.jpg",
        arenaId: 4,
      },
      {
        url: "/foto/arena5.1.jpg",
        arenaId: 5,
      },
      {
        url: "/foto/arena5.2.jpg",
        arenaId: 5,
      },
      {
        url: "/foto/arena5.3.jpg",
        arenaId: 5,
      },
      {
        url: "/foto/arena6.1.jpg",
        arenaId: 6,
      },
      {
        url: "/foto/arena6.2.jpg",
        arenaId: 6,
      },
      {
        url: "/foto/arena6.3.jpg",
        arenaId: 6,
      },
      {
        url: "/foto/arena7.1.jpeg",
        arenaId: 7,
      },
      {
        url: "/foto/arena7.2.jpg",
        arenaId: 7,
      },
      {
        url: "/foto/arena7.3.jpg",
        arenaId: 7,
      },
      {
        url: "/foto/arena8.1.jpg",
        arenaId: 8,
      },
      {
        url: "/foto/arena8.2.jpg",
        arenaId: 8,
      },
      {
        url: "/foto/arena8.3.jpg",
        arenaId: 8,
      },
      {
        url: "/foto/arena9.1.jpg",
        arenaId: 9,
      },
      {
        url: "/foto/arena9.2.jpg",
        arenaId: 9,
      },
      {
        url: "/foto/arena9.3.jpg",
        arenaId: 9,
      },
      {
        url: "/foto/arena10.1.jpg",
        arenaId: 10,
      },
      {
        url: "/foto/arena10.2.jpeg",
        arenaId: 10,
      },
      {
        url: "/foto/arena10.3.jpg",
        arenaId: 10,
      },
      {
        url: "/foto/arena11.1.jpg",
        arenaId: 11,
      },
      {
        url: "/foto/arena11.2.jpg",
        arenaId: 11,
      },
      {
        url: "/foto/arena11.3.jpg",
        arenaId: 11,
      },
      {
        url: "/foto/arena12.1.jpg",
        arenaId: 12,
      },
      {
        url: "/foto/arena12.2.jpg",
        arenaId: 12,
      },
      {
        url: "/foto/arena12.3.jpeg",
        arenaId: 12,
      },
      {
        url: "/foto/arena13.1.jpg",
        arenaId: 13,
      },
      {
        url: "/foto/arena13.2.jpeg",
        arenaId: 13,
      },
      {
        url: "/foto/arena13.3.jpg",
        arenaId: 13,
      },
      {
        url: "/foto/arena14.1.jpg",
        arenaId: 14,
      },
      {
        url: "/foto/arena14.2.jpeg",
        arenaId: 14,
      },
      {
        url: "/foto/arena14.3.jpeg",
        arenaId: 14,
      },
      {
        url: "/foto/arena15.1.jpg",
        arenaId: 15,
      },
      {
        url: "/foto/arena15.2.jpg",
        arenaId: 15,
      },
      {
        url: "/foto/arena15.3.jpg",
        arenaId: 15,
      },
      {
        url: "/foto/arena16.1.jpg",
        arenaId: 16,
      },
      {
        url: "/foto/arena16.2.jpeg",
        arenaId: 16,
      },
      {
        url: "/foto/arena16.3.jpeg",
        arenaId: 16,
      },
      {
        url: "/foto/arena17.1.jpeg",
        arenaId: 17,
      },
      {
        url: "/foto/arena17.2.jpg",
        arenaId: 17,
      },
      {
        url: "/foto/arena17.3.jpg",
        arenaId: 17,
      },
      {
        url: "/foto/arena18.1.jpg",
        arenaId: 18,
      },
      {
        url: "/foto/arena18.2.jpg",
        arenaId: 18,
      },
      {
        url: "/foto/arena18.3.jpg",
        arenaId: 18,
      },
      {
        url: "/foto/arena19.1.jpeg",
        arenaId: 19,
      },
      {
        url: "/foto/arena19.2.jpg",
        arenaId: 19,
      },
      {
        url: "/foto/arena19.3.jpg",
        arenaId: 19,
      },
      {
        url: "/foto/arena20.1.jpg",
        arenaId: 20,
      },
      {
        url: "/foto/arena20.2.jpg",
        arenaId: 20,
      },
      {
        url: "/foto/arena20.3.jpg",
        arenaId: 20,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images", null, {});
  },
};