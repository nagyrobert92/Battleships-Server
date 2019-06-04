const Sequelize = require('sequelize')
const sequelize = require('../db')
const Player = require('../players/model')

const Session = sequelize.define("sessions", {
  id: {
    type: Sequelize.INTEGER,
    field: 'session_id',
    allowNull: false,
    primaryKey: true
  },
  playerId: {
    type: Sequelize.INTEGER,
    field: 'player_id',
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    field: 'is_active',
    allowNull: false
  }
});

Session.belongsTo(Player)

module.exports = Session