const User = require('./User');
const Game = require('./Game');
const Post = require('./post');

User.hasMany(Game, {
});

// Game.belongsToMany(User, {
//   foreignKey: 'user_id'
// });

// User.hasMany( Post, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Post.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Game };
