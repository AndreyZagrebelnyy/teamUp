"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Arenas", [
      {
        title: " Арена",
        description:
          "Спортивный комплекс для любителей здорового образа жизни и активного времяпрепровождения",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Футбольная",
        building: "8",
        coordX: 59.97114176300359,
        coordY: 30.226756695783738,
        creatorId: 1,
        metroStationId: 1,
      },
      {
        title: "Liga 5",
        description: "Спортивный комплекс для любителей здорового образа жизни",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Шкапина",
        building: "52",
        coordX: 59.9020913821261,
        coordY: 30.29285586736,
        creatorId: 1,
        metroStationId: 2,
      },
      {
        title: "F-Base",
        description:
          "Спортивный комплекс F-Base — это современный футбольный манеж с качественным газоном. Внутри надувного шатра расположены два поля для игры в формате 5 на 5, разделенные трибунами для болельщиков, а также есть разминочные зоны и тренировочные поля.",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Латышских Стрелков",
        building: "19Д",
        coordX: 59.93187695748018,
        coordY: 30.450381937993964,
        creatorId: 1,
        metroStationId: 3,
      },
      {
        title: "Физкультурно-оздоровительный центр РЖД",
        description:
          "Спортивный комплекс для любителей здорового образа жизни и активного времяпрепровождения",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Спортивная",
        building: "8",
        coordX: 59.91880497887331,
        coordY: 30.34433611358798,
        creatorId: 1,
        metroStationId: 4,
      },
      {
        title: "Академия волейбола Платонова",
        description:
          "Волейбольный игровой зал высотой 14 метров имеет трибуны на 1500 зрителей, современное игровое покрытие «Mondoflex»",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Вязовая",
        building: "10",
        coordX: 59.96690504212426,
        coordY: 30.27457207145443,
        creatorId: 1,
        metroStationId: 5,
      },
      {
        title: "Спортивный комплекс ЦСКА",
        description:
          "В 1953 году легендарное здание было передано недавно образовавшемуся Центральному спортивному клубу Армии в городе Санкт-Петербург.",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Инженерная",
        building: "13",
        coordX: 59.937636325054676,
        coordY: 30.340393101989395,
        creatorId: 1,
        metroStationId: 6,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Arenas", null, {});
  },
};
