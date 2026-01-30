const router = require('express').Router()
const controller = require('../controllers/games.controller')

router.get('/', controller.getGames)
router.post('/', controller.createGame)
router.put('/:id', controller.updateGame)
router.delete('/:id', controller.deleteGame)

module.exports = router

