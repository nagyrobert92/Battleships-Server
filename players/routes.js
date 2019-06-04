const { Router } = require("express");
const bcrypt = require("bcrypt");

const Player = require("./model");
const { toJWT, toData } = require("../auth/jwt");

const router = new Router();

router.post("/players", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const player = {
      email,
      password: bcrypt.hashSync(password, 10)
    };
    Player.create(player).then(res.send({ jwt: toJWT({ playerId: 1 }) }));
  } else {
    res.status(400).send({
      message: "Please supply a valid email and password"
    });
  }
});

module.exports = router;
