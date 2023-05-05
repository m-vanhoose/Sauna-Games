const Game = require('../models/Game')

const gameData = [
  {
    "title": "Call of Duty",
    "description": "shooter",
    "release_date": "2005-02-24"
  },
  {
    "title": "Elden Ring",
    "description": "Cancer",
    "release_date": "2010-05-20"
  },
  {
    "title": "Mario",
    "description": "goKart",
    "release_date": "2017-05-22"
  },
 
]

const seedGames = () => Game.bulkCreate(gameData)

module.exports = seedGames