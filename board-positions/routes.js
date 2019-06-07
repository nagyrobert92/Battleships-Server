const express = require('express');

const Board = require('./model')

function routing(dispatch) {
  const router = express.Router()

  router.post("/boards", (req, res, next) => {
    console.log("BODY", req.body)
    Board.create({
      'index_1': req.body[0],
      'index_2': req.body[1],
      'index_3': req.body[2],
      'index_4': req.body[3],
      'index_5': req.body[4],
      'index_6': req.body[5],
      'index_7': req.body[6],
      'index_8': req.body[7],
      'index_9': req.body[8]
    })
      .then(board => {
        dispatch('BOARD_CREATED', board)
        res.send(board)
      })
      .catch(error => {
        console.log(error);
        next(error);
      });
  });

  router.get("/boards/:id", (req, res, next) => {
    const id = req.params.id;
    console.log('BOARD ID:', id)
    Board.findByPk(id)
      .then(board => {
        console.log(board)
        if (board === null) {
          return res.send({
              message: "Board does not exist"
            })
          .catch(console.error)
        } else {
          console.log("Board dispatched")
          dispatch('BOARD_FOUND', board)
          return res.send(board)
        }
      })
      .then(board => {
        if (board === null) 
        return res.send(board)
      })
      .catch(err => {
        console.err
      });
  });
  router.put('/boards', (req, res, next) => {
    console.log("REs", res.body.number)
  })

  return router
}

module.exports = routing