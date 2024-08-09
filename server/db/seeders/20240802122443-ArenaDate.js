"use strict";
const createArenaDatesSeeds = () => {
	const arenaDatesSeeds = [];
	const arenaEndTimes = {}; // Track end times for each arena
 
	for (let i = 1; i < 81; i++) {
	  const arenaId = Math.floor(Math.random() * 20) + 1;
	  let startDate;
 
	  // Ensure no overlapping times
	  if (!arenaEndTimes[arenaId]) {
		 startDate = new Date('2024-08-10T18:00:00'); // Start with the initial date
	  } else {
		 startDate = new Date(arenaEndTimes[arenaId]); // Start after the last end time
		 startDate.setDate(startDate.getDate() + 1); // Add at least one day between events
	  }
 
	  // Generate endDate 1-2 hours later
	  const hoursToAdd = Math.floor(Math.random() * 2) + 1; // 1 or 2 hours
	  const endDate = new Date(startDate);
	  endDate.setHours(startDate.getHours() + hoursToAdd);
 
	  // Store the end time for the arena
	  arenaEndTimes[arenaId] = endDate;
 
	  arenaDatesSeeds.push({
		 arenaId: arenaId,
		 dateId: i,
		 // Removed startDate from here
	  });
	}
 
	return arenaDatesSeeds;
 };
let arenaDatesSeeds = createArenaDatesSeeds()
 console.log(arenaDatesSeeds)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ArenaDates",
      arenaDatesSeeds,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ArenaDates", null, {});
  },
};
