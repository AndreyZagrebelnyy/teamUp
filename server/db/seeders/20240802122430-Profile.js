"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Profiles",
      [
        {
          userId: 1,
          firstName: "John",
          lastName: "Doe",
          telegram: "@johndoe",
          image:
            "../client/public/profilePhoto/default-prodile-photo.avif",
        },
        {
          userId: 2,
          firstName: "Андрей",
          lastName: "Капралов",
          telegram: "@andreevTelegram",
          image:
            "../../../../client/public/profilePhoto/andr2.png",
        },
        {
          userId: 3,
          firstName: "Владислав",
          lastName: "Пономаренко",
          telegram: "@telegaVlada",
          image:
            "../../../../client/public/profilePhoto/vlad.png",
        },
        {
          userId: 4,
          firstName: "Вячеслав",
          lastName: "Гончар",
          telegram: "@telegaSlavi",
          image:
            "../../../../client/public/profilePhoto/slava.png",
        },
        {
          userId: 5,
          firstName: "Евстафий",
          lastName: "Лефтеряди",
          telegram: "@stashikaTelega",
          image:
            "../../../../client/public/profilePhoto/stashik.png",
        },
        {
          userId: 6,
          firstName: "Евгений",
          lastName: "Пигорев",
          telegram: "@geninaTelega",
          image:
            "../../../../client/public/profilePhoto/genya.jpeg",
        },
        {
          userId: 7,
          firstName: "Андрей",
          lastName: "Бережков",
          telegram: "@simpsonsTelega",
          image:
            "../../../../client/public/profilePhoto/andreypr.jpeg",
        },
        {
          userId: 8,
          firstName: "Андрей",
          lastName: "Загребельный",
          telegram: "@andreinTelegram",
          image:
            "../../../../client/public/adnr1.jpeg",
        },
        {
          userId: 9,
          firstName: "Пага",
          lastName: "Аверин",
          telegram: "@paginTelegram",
          image:
            "../../../../client/public/profilePhoto/paga.jpeg",
        },
        {
          userId: 10,
          firstName: "Олег",
          lastName: "Дьяконов",
          telegram: "@olegonaTelegram",
          image:
            "../../../../client/public/profilePhoto/oleg.jpeg",
        },
        {
          userId: 11,
          firstName: "Никита",
          lastName: "Щитов",
          telegram: "@nikitinTelegram",
          image:
            "../../../../client/public/profilePhoto/nik.jpeg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Profiles", null, {});
  },
};
