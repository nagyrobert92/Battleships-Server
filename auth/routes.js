const { Router } = require("express");
const bcrypt = require("bcrypt");

const Player = require("../players/model");
const { toJWT } = require("./jwt");
const auth = require("./middleware");

const router = new Router();

router.post("/logins", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    // 1. find user based on email address
    Player.findOne({ where: { email } })
      .then(entity => {
        if (!entity) {
          res
            .status(400)
            .send({ message: "User with that email does not exists" });
        }

        // 2. use bcrypt.compareSync to check the password against the stored hash
        if (bcrypt.compareSync(password, entity.password)) {
          // 3. if the password is correct, return a JWT with the userId of the user (user.id)
          res.send({ jwt: toJWT({ userId: entity.id }) });
        } else {
          res.status(400).send({ message: "Password was incorrect" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ message: "Something went wrong" });
      });
  } else {
    res.status(401).send({
      message: "Please supply a valid email and password"
    });
  }
});

router.get("/secret-endpoint", auth, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.user.email}.`
  });
});

module.exports = router;
