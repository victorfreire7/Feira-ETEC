const { Sequelize } = require('sequelize');
const db = require('../db');

module.exports = db.define('hash', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    valorInput: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bcrypt: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sha1: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

