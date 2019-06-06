const express = require('express');

const Board = require('./model')

function routing (dispatch) {
  const router = express.Router()

  router.post("/boards", (req, res, next) => {
    console.log("BODY", req.body)
    Board.create({
      'index_1': req.body[0],
      'index_2': req.body[1],
      'index_3': req.body[2],
      'index_4': req.body[3]
    })
      .then(board => {
        console.log("CREATED", board)

        dispatch('BOARD_CREATED', board)

        res.send(board)
      })
      .catch(error => {
        console.log(error);
        next(error);
      });
  });

  router.put('/boards', (req, res, next) => {
    console.log("REs",res.body.number)
  })

  return router
}

module.exports = routing