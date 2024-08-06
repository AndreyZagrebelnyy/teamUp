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
          "Спортивный комплекс F-Base — это современный футбольный манеж с качественным газоном.",
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
      },{
        title: "Спорткомплекс Звезда",
        description: "Современный спортивный комплекс для занятий футболом и волейболом",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Краснопутиловская",
        building: "31",
        coordX: 59.874755,
        coordY: 30.315125,
        creatorId: 1,
        metroStationId: 7
      },
      {
        title: "Баскетбольный центр Петроградский",
        description: "Уютный спортивный зал для тренировок по баскетболу и волейболу",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Петроградская",
        building: "12",
        coordX: 59.966489,
        coordY: 30.308823,
        creatorId: 1,
        metroStationId: 8
      },
      {
        title: "Футбольная Арена Балтика",
        description: "Модернизированный футбольный манеж с качественным покрытием",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Балтийская",
        building: "5",
        coordX: 59.880713,
        coordY: 30.300897,
        creatorId: 1,
        metroStationId: 9
      },
      {
        title: "Санкт-Петербургский волейбольный центр",
        description: "Отличный выбор для любителей волейбола с удобными раздевалками и трибунами",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Университетская",
        building: "17",
        coordX: 59.948432,
        coordY: 30.297129,
        creatorId: 1,
        metroStationId: 10
      },
      {
        title: "Дворец Спорта Динамо",
        description: "Крупный спортивный комплекс для футбола и баскетбола",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Динамовская",
        building: "4",
        coordX: 59.935784,
        coordY: 30.350954,
        creatorId: 1,
        metroStationId: 11
      },
      {
        title: "Футбольная арена СК Юность",
        description: "Спортивный комплекс с двумя футбольными полями и трибунами для зрителей",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Юность",
        building: "6",
        coordX: 59.920156,
        coordY: 30.360907,
        creatorId: 1,
        metroStationId: 12
      },
      {
        title: "Волейбольный центр Спартак",
        description: "Зал с современным покрытием и отличными условиями для волейбола",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Спартаковская",
        building: "9",
        coordX: 59.928495,
        coordY: 30.315987,
        creatorId: 1,
        metroStationId: 13
      },
      {
        title: "Баскетбольная Арена Олимп",
        description: "Спортивный комплекс с профессиональными баскетбольными площадками",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Олимпийская",
        building: "15",
        coordX: 59.908345,
        coordY: 30.376522,
        creatorId: 1,
        metroStationId: 14
      },
      {
        title: "Футбольный манеж Мечта",
        description: "Современный футбольный манеж с качественным газоном и трибунами",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Мечта",
        building: "18",
        coordX: 59.900257,
        coordY: 30.284915,
        creatorId: 1,
        metroStationId: 15
      },
      {
        title: "Арена Факел",
        description: "Современный спортивный комплекс для футбола и волейбола",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Факельная",
        building: "7",
        coordX: 59.889624,
        coordY: 30.323795,
        creatorId: 1,
        metroStationId: 12
      },
      {
        title: "Волейбольный клуб Приморский",
        description: "Отличный выбор для любителей волейбола с качественным покрытием",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Приморская",
        building: "13",
        coordX: 59.982143,
        coordY: 30.218214,
        creatorId: 1,
        metroStationId: 9
      },
      {
        title: "Футбольный стадион Северный",
        description: "Крупный футбольный стадион с искусственным покрытием и трибунами",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Северная",
        building: "19",
        coordX: 59.947845,
        coordY: 30.278451,
        creatorId: 1,
        metroStationId: 8
      },
      {
        title: "Баскетбольная площадка Олимпия",
        description: "Профессиональная баскетбольная площадка с трибунами и раздевалками",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Олимпийская",
        building: "5",
        coordX: 59.938432,
        coordY: 30.312345,
        creatorId: 1,
        metroStationId: 11
      },
      {
        title: "Спорткомплекс Надежда",
        description: "Универсальный спортивный комплекс для футбола, волейбола и баскетбола",
        country: "Российская Федерация",
        city: "Санкт-Петербург",
        street: "Надежная",
        building: "21",
        coordX: 59.926745,
        coordY: 30.322145,
        creatorId: 1,
        metroStationId: 6
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Arenas", null, {});
  },
};
