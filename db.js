const Sequelize = require("sequelize");

const connectionString =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";
const sequelize = new Sequelize(connectionString, {
  define: { timestamps: false }
});

const { Pool } = require('pg')
const pool = new Pool({ connectionString: connectionString })

pool.on('error', (err, client) => {
  console.error('error event on pool', err)
})

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Sequelize updated database schema");
  })
  .catch(console.error);

module.exports = sequelize;
