"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        email: "admin@admin",
        password: await bcrypt.hash("admin", 10),
        isAdmin: true,
      },
      {
        email: "123@123",
        password: "123123",
        isAdmin: false,
      },
      {
        email: "123@1231",
        password: "admin",
        isAdmin: false,
      },
      {
        email: "123@1232",
        password: "admin",
        isAdmin: false,
      },
      {
        email: "123@1234",
        password: "admin",
        isAdmin: false,
      },
      {
        email: "123@1235",
        password: "admin",
        isAdmin: false,
      },
      {
        email: "123@1246",
        password: "admin",
        isAdmin: false,
      },
      {
        email: "andrey_ne@andrey",
        password: "admin",
        isAdmin: false,
      },
      {
        email: "paga_ne@paga",
        password: "admin",
        isAdmin: false,
      },
      {
        email: "oleg_ne@oleg",
        password: "admin",
        isAdmin: false,
      },
      {
        email: "nikita_ne@nikita",
        password: "admin",
        isAdmin: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
