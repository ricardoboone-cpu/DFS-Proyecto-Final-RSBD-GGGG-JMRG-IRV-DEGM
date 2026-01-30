const Game = require('../models/Game')

// GET
exports.getGames = async (req, res) => {
  const games = await Game.find()
  res.json(games)
}

// POST
exports.createGame = async (req, res) => {
  const game = new Game(req.body)
  await game.save()
  res.json(game)
}

// PUT
exports.updateGame = async (req, res) => {
  const game = await Game.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(game)
}

// DELETE
exports.deleteGame = async (req, res) => {
  await Game.findByIdAndDelete(req.params.id)
  res.json({ msg: "Juego eliminado" })
}
