const express = require("express");
const socketIo = require("socket.io");
const Sequelize = require("sequelize");
const sequelize = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const server = app.listen(port, onListen);
function onListen() {
  console.log(`Listening on port ${port}`);
}

app.get("/lobby/:id", (req, res, next) => {
  const id = req.params.id;
  User.findByPk(id)
    .then(user => res.json({ user }))
    .catch(err => {
      res.status(500).json({
        message: "Something went wrong",
        error: err
      });
    });
});

app.post("/lobby", function(req, res) {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => {
      res.status(500).json({
        message: "Something went wrong",
        error: err
      });
    });
});

app.get("/lobby", (req, res, next) => {
  User.findAll()
    .then(user => {
      res.send({ user: user });
    })
    .catch(error => next(error));
});

const io = socketIo.listen(server);
io.on("connection", client => {
  console.log("client.id test:", client.id);

  client.on("disconnect", () => console.log("disconnect test:", client.id));
});

const Session = require('./sessions/model')
const Player = require('./players/model')
const Board = require('./board-postions/model')
// const Ship = require('./ships/model')
