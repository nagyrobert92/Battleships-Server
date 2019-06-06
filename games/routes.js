const express = require("express");

const Game = require("./model");

function routing (dispatch) {
  const router = express.Router()

  router.post("/games", (req, res, next) => {
    Game.create()
      .then(game => {
        console.log(game)

        dispatch('GAME_CREATED', game)

        res.send(game)
      })
      .catch(error => {
        console.log(error);
        next(error);
      });
  });

  router.get("/games", (req, res, next) => {
    Game.findAll({ order: [["id", "DESC"]] })
      .then(games => {
        res.json({ games });
      })
      .catch(error => next(error));
  });

  router.get("/games/:id", (req, res, next) => {
    const id = req.params.id;
    Game.findByPk(id)
      .then(session => res.json({ game }))
      .catch(err => {
        res.status(500).json({
          message: "Something went wrong",
          error: err
        });
      });
  });

  router.put("/games/:id", (req, res, next) => {
    const id = req.params.id;
    Game.findByPk(id)
      .then(game => game.update(req.body))
      .then(game => {
        res.json({
          message: `Game updated with user ${game.winner} as winner`
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Something went wrong"
        });
      });
  });

  return router
}

module.exports = routing;
