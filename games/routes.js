const express = require("express");
const bodyParser = require("body-parser");

const Session = require("./model");
const socketIo = require("socket.io");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/sessions", (req, res, next) => {
  const session = {
    winner: req.body.winner,
    loser: req.body.loser
  };
  Session.create(session)
    .then(session => {
      return res.status(201).json(session);
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

app.get("/sessions", (req, res, next) => {
  Session.findAll({ order: [["id", "DESC"]] })
    .then(sessions => {
      res.json({ sessions: sessions });
    })
    .catch(error => next(error));
});
app.get("/sessions/:id", (req, res, next) => {
  const id = req.params.id;
  Session.findByPk(id)
    .then(session => res.json({ session }))
    .catch(err => {
      res.status(500).json({
        message: "Something went wrong",
        error: err
      });
    });
});

app.put("/sessions/:id", (req, res, next) => {
  const id = req.params.id;
  Session.findByPk(id)
    .then(session => session.update(req.body))
    .then(session => {
      res.json({
        message: `Game updated with user ${session.winner} as winner`
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Something went wrong"
      });
    });
});

module.exports = app;
