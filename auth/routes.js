const { Router } = require("express");
const { toJWT, toData } = require("./jwt");

const router = new Router();

router.post("/logins", (req, res, next) => {
  const { userName, password } = req.body;
  if (!userName && !password) {
    // 1. find user based on email address
    User.findOne({
      where: {
        userName: req.body.user_name
      }
    })
      .then(entity => {
        if (!entity) {
          res.status(400).send({
            message: "Usename does not exist"
          });
        }

        // 2. use bcrypt.compareSync to check the password against the stored hash
        if (bcrypt.compareSync(req.body.password, entity.password)) {
          // 3. if the password is correct, return a JWT with the userId of the user (user.id)
          res.send({
            jwt: toJWT({ userId: entity.id })
          });
        } else {
          res.status(400).send({
            message: "Password was incorrect"
          });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send({
          message: "Something went wrong"
        });
      });
  }
  res.send({
    jwt: toJWT({ userId: 1 })
  });
});

module.exports = router;
