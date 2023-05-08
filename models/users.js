const Sequelize = require('sequelize-oracle');

module.exports = (sequelize) => {
    return sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
            len: [3, 20]
        },
        correo: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
            len: [5, 20]          
        }
    }, {
        underscored: true,
        paranoid: true,
        tableName: 'users'
    })
}
