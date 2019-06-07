const Sequelize = require('sequelize')
const sequelize = require('../db')

const Board = sequelize.define("boards", {
  'index_1': {
    type: Sequelize.INTEGER,
    field: 'index_1',
    defaultValue: '0'
  },
  'index_2': {
    type: Sequelize.INTEGER,
    field: 'index_2',
    defaultValue: '0'
  },
  'index_3': {
    type: Sequelize.INTEGER,
    field: 'index_3',
    defaultValue: '0'
  },
  'index_4': {
    type: Sequelize.INTEGER,
    field: 'index_4',
    defaultValue: '0'
  },
  'index_5': {
    type: Sequelize.INTEGER,
    field: 'index_5',
    defaultValue: '0'
  },
  'index_6': {
    type: Sequelize.INTEGER,
    field: 'index_6',
    defaultValue: '0'
  },
  'index_7': {
    type: Sequelize.INTEGER,
    field: 'index_7',
    defaultValue: '0'
  },
  'index_8': {
    type: Sequelize.INTEGER,
    field: 'index_8',
    defaultValue: '0'
  },
  'index_9': {
    type: Sequelize.INTEGER,
    field: 'index_9',
    defaultValue: '0'
  }
});

module.exports = Board