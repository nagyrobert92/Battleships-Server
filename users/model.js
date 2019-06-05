const Sequelize = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("users", {
  userName: {
    type: Sequelize.STRING,
    field: "user_name",
    unique: true,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter your username" }
    }
  },
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

module.exports = User;
