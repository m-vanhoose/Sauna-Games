const router = require('express').Router();
const { Game } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/',  (req,res) => {
    Game.findAll()
    .then(data => res.json(data))
    .catch(err => {
        console.log(err)
        res.status(400).json(err)
    }) 
})

router.post('/', withAuth, (req, res) => {
  if(req.session) {
    Game.create({
        title: req.body.title,
        description: req.body.description,
        release_date: req.body.release_date,
    })
    .then(data => res.json(data))
    .catch(err => {
        console.log(err)
        res.status(400).json(err)
    }) 
  }
})
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const gameData = await Game.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!gameData) {
      res.status(404).json({ message: 'No game found with this id!' });
      return;
    }

    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

 

module.exports = router;
