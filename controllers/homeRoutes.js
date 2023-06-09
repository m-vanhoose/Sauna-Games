const router = require('express').Router();
const { Game, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render("login")
});


// router.get('/library', async (req, res) => {
//   res.render("library")
// });


router.get('/catalog', async (req, res) => {
  try {
    const gameData = await Game.findAll();
    const games = gameData.map((game) => game.get({plain:true}))
    res.render("catalog", {games})}
      catch (error) {
        console.log(error)
      res.render("catalog", {error})}
});

router.get('/library', withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id, {
      include: [{ model: Game }],
    });
console.log(user)
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const savedGames = user.games.map((game) => game.get({ plain: true }));

    res.render('library', {
      games: savedGames,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});


router.post('/library', withAuth, async (req, res) => {
  try {
    const { id } = req.body;

    const user = await User.findByPk(req.session.user_id);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const savedGame = await user.getGames({
      where: { id },
    });

    if (savedGame.length > 0) {
      res.status(400).json({ message: 'Game already saved' });
      return;
    }
    
    // if (savedGame.length === 0) {
    //   res.status(400).json({ message: 'No saved games' });
    //   return;
    // }

    await user.addGame(id);

    res.status(200).json({ message: 'Game saved successfully' });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/game/:id', async (req, res) => {
  const gameData = await Game.findByPk(req.params.id);
  const game = gameData.get({ plain: true });
  res.render('game', {
    game
  })
})

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/catalog');
    return;
  }

  res.render('login');
});


module.exports = router;
