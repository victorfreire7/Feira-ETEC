const { Sequelize } = require('sequelize');
const db = require('../db');

module.exports = db.define('client', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    turma: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

