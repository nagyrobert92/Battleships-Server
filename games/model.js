const Sequelize = require("sequelize");
const sequelize = require("../db");

const Game = sequelize.define(
  "games",
  {
    winner: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    loser: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  },
  {
    timestamps: false,
    tableName: "games",
    underscored: true
  }
);

module.exports = Game;
