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
          firstName: "Jane",
          lastName: "Doe",
          telegram: "@janedoe",
          image:
            "../../../../client/public/profilePhoto/default-prodile-photo.avif",
        },
        {
          userId: 3,
          firstName: "Alice",
          lastName: "Smith",
          telegram: "@alicesmith",
          image:
            "../../../../client/public/profilePhoto/default-prodile-photo.avif",
        },
        {
          userId: 4,
          firstName: "Bob",
          lastName: "Johnson",
          telegram: "@bobjohnson",
          image:
            "../../../../client/public/profilePhoto/default-prodile-photo.avif",
        },
        {
          userId: 5,
          firstName: "Charlie",
          lastName: "Brown",
          telegram: "@charliebrown",
          image:
            "../../../../client/public/profilePhoto/default-prodile-photo.avif",
        },
        {
          userId: 6,
          firstName: "David",
          lastName: "Wilson",
          telegram: "@davidwilson",
          image:
            "../../../../client/public/profilePhoto/default-prodile-photo.avif",
        },
        {
          userId: 7,
          firstName: "Eve",
          lastName: "Davis",
          telegram: "@evedavis",
          image:
            "../../../../client/public/profilePhoto/default-prodile-photo.avif",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Profiles", null, {});
  },
};
