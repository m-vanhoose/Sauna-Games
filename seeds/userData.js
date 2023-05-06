const User = require('../models/User')

const userData = [
  {
    "user_name": "john",
    "email": "johnapple@gmail.com",
    "password": "rock2014321"
  },
  {
    "user_name": "Judy",
    "email": "Juddyorange@gmail.com",
    "password": "mango14321"
  },
  {
    "user_name": "Sarah",
    "email": "SarahTree@gmail.com",
    "password": "Tree67431"
  },
 
]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser