const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASENAME , process.env.DATABASEROOT,process.env.DATABASEPASSWORD,{
    dialect:process.env.DATABASEDILECT,
    host:process.env.DATABASEHOST
});

module.exports = sequelize