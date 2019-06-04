const Sequelize = require('sequelize')
const sequelize = require('../db')

const Ship = sequelize.define("ships", {
  'Carrier': {
    type: Sequelize.STRING,
    defaultValue: 'Ca'
  },
  'Battleship': {
    type: Sequelize.STRING,
    defaultValue: 'Ba'
  },
  'Cruiser': {
    type: Sequelize.STRING,
    defaultValue: 'Cr'
  },
  'Submarine': {
    type: Sequelize.STRING,
    defaultValue: 'Su'
  },
  'Destroyer': {
    type: Sequelize.STRING,
    defaultValue: 'De'
  }
});

module.exports = Ship