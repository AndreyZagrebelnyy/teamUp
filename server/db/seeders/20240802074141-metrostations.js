"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("MetroStations", [
      {
        title: "Старая Деревня",
      },
      {
        title: "Бухарестская",
      },
      {
        title: "Ладожская",
      },
      {
        title: "Крестовский остров",
      },
      {
        title: "Чкаловская",
      },
      {
        title: "Лесная",
      },
      {
        title: "Приморская",
      },
      {
        title: "Спортивная",
      },
      {
        title: "Балтийская",
      },
      {
        title: "Василеостровская",
      },
      {
        title: "Площадь Восстания",
      },
      {
        title: "Новочеркасская",
      },
      {
        title: "Петроградская",
      },
      {
        title: "Горьковская",
      },
      {
        title: "Парк Победы",
      },
      {
        title: "Московская",
      },
      {
        title: "Фрунзенская",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("MetroStations", null, {});
  },
};
