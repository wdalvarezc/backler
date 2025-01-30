// definicion de modelo de temas 
const { DataTypes } = require('sequelize')
module.exports = function (sequelize) {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        correo: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true, // Esto asegura que el correo sea único
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: true, 
        },

    }, {
        timestamps: false,
        tableName: 'usuarios',
    })
}