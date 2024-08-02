"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      arenaId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Arenas",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      arenaDateId: {
        type: Sequelize.INTEGER,
      },
      sportId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Sports",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      price: {
        type: Sequelize.INTEGER,
      },
      levelId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Levels",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      teamSize: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Events");
  },
};
