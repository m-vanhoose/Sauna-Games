const router = require('express').Router();
const { Game, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render("login")
});

router.get('/homepage', async (req, res) => {
  res.render("catalog")
});


router.get('/catalog', async (req, res) => {
  try {
    const gameData = await Game.findAll();
    const games = gameData.map((game) => game.get({plain:true}))
    console.log('GAMES', games)
    // we want to change the release date value. originally it is a datetime stamp value. but it should be more user friendly to read 
    let newDates = games.map((game) => game.release_date)
    // keep just the first 10 characters of each date
    //newDates = newDates.map((date) => date.slice(0,10))
    console.log('NEW DATES', newDates)
    res.render("catalog", { games})

  } catch (error) {
    res.render("catalog", {error})
  }
  

});


router.get('/game/:id', async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const game = gameData.get({ plain: true });

    res.render('game', {
      ...game,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
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
