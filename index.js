const express = require("express");
const socketIo = require("socket.io");
const Sequelize = require("sequelize");
const sequelize = require("./db");
const app = express();
const port = process.env.PORT || 4000;

const server = app.listen(port, onListen);
function onListen() {
  console.log(`Listening on port ${port}`);
}
const io = socketIo.listen(server);
io.on("connection", client => {
  console.log("client.id test:", client.id);

  client.on("disconnect", () => console.log("disconnect test:", client.id));
});

const User = sequelize.define("users", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
