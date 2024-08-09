"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ArenaDates", {
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
		 onDelete: 'CASCADE',
		 onUpdate: 'CASCADE'
      },
      dateId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Dates",
          key: "id",
        },
		  onDelete: 'CASCADE',
		  onUpdate: 'CASCADE'
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
    await queryInterface.dropTable("ArenaDates");
  },
};
