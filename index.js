const express = require("express");
const socketIo = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
const Session = require("./sessions/model");
const playersRouter = require("./players/routes");
const authRouter = require("./auth/routes");
const sessionsRouter = require("./sessions/routes");

app
  .use(cors())
  .use(bodyParser.json())
  .use(playersRouter)
  .use(authRouter)
  .use(sessionsRouter);

const server = app.listen(port, onListen);
function onListen() {
  console.log(`Listening on port ${port}`);
}

const io = socketIo.listen(server);
io.on("connection", client => {
  console.log("client.id test:", client.id);

  client.on("disconnect", () => console.log("disconnect test:", client.id));
});
