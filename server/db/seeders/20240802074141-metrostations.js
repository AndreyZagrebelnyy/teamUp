'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
    "Metrostations",
    [
      {
        title: "Старая Деревня"
      },
      {
        title: "Бухарестская"
      },
      {
        title: "Ладожская"
      },
      {
        title: "Крестовский остров"
      },
      {
        title: "Чкаловская"
      },
      {
        title: "Лесная"
      },
    ]
   )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Metrostations", null, {})
  },
};
