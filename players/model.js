const Sequelize = require("sequelize");
const sequelize = require("../db");

const Player = sequelize.define("players", {
  email: {
    type: Sequelize.STRING,
    field: "email",
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    field: "password",
    allowNull: false
  }
});

module.exports = Player;
