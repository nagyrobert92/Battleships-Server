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
  }
});

module.exports = Board