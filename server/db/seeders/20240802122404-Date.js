"use strict";
function generateDateRanges() {
	const dateRanges = [];
	const start = new Date('2024-08-10T18:00:00');
	const end = new Date('2024-09-01T18:00:00');
 
	for (let i = 0; i < 80; i++) {
	  const startDate = new Date(start);
	  startDate.setDate(start.getDate() + i);
 
	  // Generate endDate 1-2 hours later
	  const endDate = new Date(startDate);
	  const hoursToAdd = Math.floor(Math.random() * 2) + 1; // 1 or 2 hours
	  endDate.setHours(startDate.getHours() + hoursToAdd);
 
	  dateRanges.push({
		 startDate: startDate,
		 endDate: endDate,
	  });
	}
 
	return dateRanges;
 }

 let dateRanges = generateDateRanges()
console.log(dateRanges);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dates",
      dateRanges,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Dates", null, {});
  },
};
