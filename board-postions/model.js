const Sequelize = require('sequelize')
const sequelize = require('../db')

const Board = sequelize.define("board", {
  'A': {
    type: Sequelize.STRING,
    field: 'A',
    defaultValue: '.'
  },
  'B': {
    type: Sequelize.STRING,
    field: 'B',
    defaultValue: '.'
  },
  'C': {
    type: Sequelize.STRING,
    field: 'C',
    defaultValue: '.'
  },
  'D': {
    type: Sequelize.STRING,
    field: 'D',
    defaultValue: '.'
  },
  'E': {
    type: Sequelize.STRING,
    field: 'E',
    defaultValue: '.'
  },
  'F': {
    type: Sequelize.STRING,
    field: 'F',
    defaultValue: '.'
  },
  'G': {
    type: Sequelize.STRING,
    field: 'G',
    defaultValue: '.'
  },
  'H': {
    type: Sequelize.STRING,
    field: 'H',
    defaultValue: '.'
  },
  'I': {
    type: Sequelize.STRING,
    field: 'I',
    defaultValue: '.'
  },
  'J': {
    type: Sequelize.STRING,
    field: 'J',
    defaultValue: '.'
  }
});

module.exports = Board