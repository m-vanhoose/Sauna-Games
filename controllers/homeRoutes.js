const router = require('express').Router();
const { Game, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render("login")
});

router.get('/catalog', async (req, res) => {
  res.render("catalog")
});

router.get('/library', async (req, res) => {
  res.render("library")
});

router.get('/catalog', async (req, res) => {
  try {
    const gameData = await Game.findAll();
    const games = gameData.map((game) => game.get({plain:true}))
    res.render("catalog", { games})}
      catch (error) {
      res.render("catalog", {error})}
});

router.get('/library', withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user.id, {
      include: [{ model: Game }],
    });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const savedGames = user.Games.map((game) => game.get({ plain: true }));

    res.render('library', {
      games: savedGames,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/library', withAuth, async (req, res) => {
  try {
    const { id } = req.body;

    const user = await User.findByPk(req.session.user.id);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const savedGame = await user.getGames({
      where: { id },
    });

    if (savedGame.length) {
      res.status(400).json({ message: 'Game already saved' });
      return;
    }
    
    if (savedGame.length === 0) {
      res.status(400).json({ message: 'No saved games' });
      return;
    }

    await user.addGame(id);

    res.status(200).json({ message: 'Game saved successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/game/:id', async (req, res) => {
//   try {
//     const gameData = await Game.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const game = gameData.get({ plain: true });

//     res.render('game', {
//       ...game,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/game/:id', async (req, res) => {
  const gameData = await Game.findByPk(req.params.id);
  const game = gameData.get({ plain: true });
  res.render('game', {
    game
  })
})



router.get('/profile', withAuth, async (req, res) => {
  try {
    
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Game }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


module.exports = router;
