'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
     "Users",
     [
       {
         email: "admin@admin",
         password: "admin",
         isAdmin: true
       },
     ]
    )
   },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {})
  },
};
