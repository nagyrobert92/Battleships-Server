const { Pool } = require('pg')
const Sequelize = require('sequelize')
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:secret@localhost:5432/postgres'
const pool = new Pool({ connectionString: connectionString })

const sequelize = new Sequelize(connectionString, {define: { timestamps: false }})

pool.on('error', (err, client) => {
  console.error('error event on pool', err)
})

// EXAMPLE TABLE QUERY
//pool.query(`
  // CREATE TABLE IF NOT EXISTS person
  //   (
  //     id SERIAL,
  //     first_name VARCHAR(255),
  //     last_name VARCHAR(255),
  //     eye_color VARCHAR(255)
  //   );
//`)
//  .catch(console.error)

module.exports = sequelize