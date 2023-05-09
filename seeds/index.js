const sequelize = require('../config/connection');

const seedGames = require('./gameData')
const seedUser = require('./userData')

const seedDatabase = async () => {
  await sequelize.sync({ force: true })
  console.log('\n -----DATABASE SYNCHED------\n')

  await seedGames()
  console.log('\n -----GAMES SYNCHED------\n')

  await seedUser()
  console.log('\n -----USERS SYNCHED------\n')

  process.exit(0);
};


seedDatabase();
