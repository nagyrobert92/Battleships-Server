const express = require("express");
const socketIo = require("socket.io");
const dispatcher = require('./dispatcher')

const app = express();
const port = process.env.PORT || 4000;

const cors = require("cors");
const bodyParser = require("body-parser");

const routing = require('./routing')
const usersRouter = require("./users/routes");
const authRouter = require("./auth/routes");
const sessionRouter = require("./games/routes");

app
  .use(cors())
  .use(bodyParser.json())
  .use(routing)
  .use(usersRouter)
  .use(authRouter)
  .use(sessionRouter);

const server = app.listen(4000, onListen);
function onListen() {
  console.log(`Listening on port ${port}`);
}

const clickedButtons = []
const users = []
const io = socketIo.listen(server);
const dispatch = dispatcher(io)

io.on("connection", user => {
  console.log("USER JOINED", user.id);

  users.push(user.id)
  dispatch('NEW_USER', user.id)

  // user.on('BUTTON_CLICKED', () => {
  //   console.log('Button was clicked by ', user.id)
  // })

  user.on("disconnect", () => {
    console.log("USER LEFT", user.id)
    dispatch('USER_LEFT', user.id)
  }
  );
});

const Board = require("./board-postions/model");
// const Ship = require('./ships/model')
