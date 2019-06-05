const express = require("express");
const socketIo = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
const usersRouter = require("./users/routes");
const authRouter = require("./auth/routes");
const gamesRouter = require("./games/routes");

app
  .use(cors())
  .use(bodyParser.json())
  .use(usersRouter)
  .use(authRouter)
  .use(gamesRouter);

const server = app.listen(4000, onListen);
function onListen() {
  console.log(`Listening on port ${port}`);
}

const io = socketIo.listen(server);
io.on("connection", user => {
  console.log("user.id test:", user.id);

  user.on("disconnect", () => console.log("disconnect test:", user.id));
});

const Board = require("./board-postions/model");
// const Ship = require('./ships/model')
