'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
    "MetroStations",
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
  //удалить этот комент

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("MetroStations", null, {})
  },
};
