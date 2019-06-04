const { Router } = require("express");

const Session = require("./model");
const Player = require("../players/model");

const router = new Router();

router.get("/sessions", (req, res, next) => {
  const limit = Math.min(200, req.query.limit) || 25;
  const offset = req.query.offset || 0;

  Promise.all([Session.count(), Session.findAll({ limit, offset })])
    .then(([total, sessions]) => {
      res.send({ sessions, total });
    })
    .catch(error => next(error));
});

router.get("/sessions/:id", (req, res, next) => {
  Session.findByPk(req.params.id, { include: [Player] })
    .then(session => {
      if (!session) {
        return res.status(404).send({
          message: `Session does not exist`
        });
      }
      return res.send(session);
    })
    .catch(error => next(error));
});

router.post("/sessions", (req, res, next) => {
  Session.create(req.body)
    .then(session => {
      if (!session) {
        return res.status(404).send({
          message: `Session does not exist`
        });
      }
      return res.status(201).send(session);
    })
    .catch(error => next(error));
});

router.put("/sessions/:id", (req, res, next) => {
  Session.findById(req.params.id)
    .then(session => {
      if (!session) {
        return res.status(404).send({
          message: `Session does not exist`
        });
      }
      return session.update(req.body).then(session => res.send(session));
    })
    .catch(error => next(error));
});

router.delete("/sessions/:id", (req, res, next) => {
  Session.findById(req.params.id)
    .then(session => {
      if (!session) {
        return res.status(404).send({
          message: `Session does not exist`
        });
      }
      return session.destroy().then(() =>
        res.send({
          message: `Session was deleted`
        })
      );
    })
    .catch(error => next(error));
});

module.exports = router;
