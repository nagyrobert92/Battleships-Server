const express = require('express')

function routing (dispatch, clicked) {
  const router = express.Router()

  return router.post('/sessions/1', (req, res) => {
    const { clicked } = req.body

    console.log('RECEIVED:', clicked)

    clickedButtons.push(clicked)

    dispatch(clickedButtons)
  })
}

module.exports = routing