const Sequelize = require("sequelize");
const sequelize = require("../db");
const User = require("../users/model");

const Session = sequelize.define(
  "sessions",
  {
    userId: {
      type: Sequelize.INTEGER,
      field: "user_id",
      allowNull: false
    },
    winner: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    loser: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    status: {
      type: Sequelize.BOOLEAN,
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

Session.belongsTo(User);

module.exports = Session;
