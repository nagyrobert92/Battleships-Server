const Sequelize = require("sequelize");
const sequelize = require("../db");
const Board = require("../board-positions/model");

const Game = sequelize.define(
  "games",
  {
    status: {
      type: Sequelize.STRING,
      defaultValue: 'pending',
      field: "is_active",
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: "games",
    underscored: true
  }
);

Game.belongsTo(Board)

module.exports = Game;
