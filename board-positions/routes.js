const express = require('express');

const Board = require('./model')

function routing (dispatch) {
  const router = express.Router()

  router.post("/boards", (req, res, next) => {
    Board.create()
      .then(board => {
        console.log(board)

        dispatch('BOARD_CREATED', board)

        res.send(board)
      })
      .catch(error => {
        console.log(error);
        next(error);
      });
  });

  router.put('')

  return router
}

module.exports = routing