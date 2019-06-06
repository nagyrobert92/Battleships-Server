const Sequelize = require("sequelize");
const sequelize = require("../db");
const User = require("../users/model");

const Game = sequelize.define(
  "sessions",
  {
    winner: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    loser: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'pending',
      field: "is_active",
      allowNull: false
    }
  },

  {
    timestamps: false,
    tableName: "sessions",
    underscored: true
  }
);

module.exports = Game;
