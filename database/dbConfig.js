require('dotenv').config()
const knex = require('knex')
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig[process.env.NODE_ENV])
module.exports = db

// const dbEnv = process.env.DB_ENV || development;
// module.exports = knex(knexConfig[dbEnv]);
