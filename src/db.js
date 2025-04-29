const { Sequelize } = require('sequelize'); //importo sequelize do node_modules
require('dotenv').config(); // executo o dotenv nessa pagina

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, { // informações para a conexão
    host: dbHost,
    port: dbPort,
    dialect: "mysql" // tipo de BD que sera utilizado
})
module.exports = sequelize;   