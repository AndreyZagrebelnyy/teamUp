'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Arenas",
      [
        {
          title: 'Ole arena',
          description: 'Спортивный комплекс для любителей здорового образа жизни и активного времяпрепровождения',
          country: 'Российская Федерация',
          city: 'Санкт-Петербург',
          street: 'Мебельная улица',
          building: '2а',
          coordX: 59.990206,
          coordY: 30.250758,
          creatorId: 1,
          metroStationId: 1,
        },
        {
          title: 'Basket Hall BeLove Volley',
          description: 'Спортивный клуб по пляжному волейболу',
          country: 'Российская Федерация',
          city: 'Санкт-Петербург',
          street: 'Салова',
          building: '53',
          coordX: 59.890054,
          coordY: 30.377223,
          creatorId: 1,
          metroStationId: 2,
        },
        {
          title: 'F-Base',
          description: 'Спортивный комплекс F-Base — это современный футбольный манеж с качественным газоном. Внутри надувного шатра расположены два поля для игры в формате 5 на 5, разделенные трибунами для болельщиков, а также есть разминочные зоны и тренировочные поля.',
          country: 'Российская Федерация',
          city: 'Санкт-Петербург',
          street: 'Латышских Стрелков',
          building: '19Д',
          coordX: 59.931783,
          coordY: 30.450651,
          creatorId: 2,
          metroStationId: 3,
        },
        {
          title: 'Центр тенниса',
          description: '«Центр тенниса» — это теннисный клуб, расположенный на Крестовском острове. Он предлагает своим посетителям шесть крытых кортов с покрытием «хард» и четыре открытых грунтовых корта.',
          country: 'Российская Федерация',
          city: 'Санкт-Петербург',
          street: 'Спортивная',
          building: '8',
          coordX: 59.966755,
          coordY: 30.265760,
          creatorId: 2,
          metroStationId: 4,
        },
        {
          title: 'Футбольное поле',
          description: 'Спортплощадка',
          country: 'Российская Федерация',
          city: 'Санкт-Петербург',
          street: 'Лавашовский проспект',
          building: '11/7с1',
          coordX: 59.967592,
          coordY: 30.289107,
          creatorId: 3,
          metroStationId: 5,
        },
        {
          title: 'Шанс Арена',
          description: 'В стенах комплекса расположилась ледовая арена для хоккеистов и фигуристов, зал хореографии и зал ОФП, бросковая зона для Баскетболла. Помимо этого, в комплексе обустроена первая в Санкт-Петербурге крытая площадка для падел-тенниса',
          country: 'Российская Федерация',
          city: 'Санкт-Петербург',
          street: 'Грибалёвой',
          building: '9 к2',
          coordX: 59.984544,
          coordY: 30.355466,
          creatorId: 3,
          metroStationId: 6,
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete("Arenas", null, {})
  },
};
