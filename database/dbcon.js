const { Sequelize } = require('sequelize');

sequelize = new Sequelize(process.env.DB_URI)

module.exports = sequelize