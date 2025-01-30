// este index lleva las relaciones de las tablas y la connexion a la base de datos inicializando sequelize
const { Sequelize } = require('sequelize')
const { dbUser, dbName, dbPassword} = require('../utils/config/index')
const UserFactory = require('./User');
const sequelize = new Sequelize(
  `postgresql://${dbUser}:${dbPassword}@dpg-cuddvll2ng1s73eg1g8g-a.oregon-postgres.render.com/${dbName}`,
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true, // Obliga el uso de SSL
        rejectUnauthorized: false, // Permite certificados autofirmados
      },
    },
  }
);

const Users = UserFactory(sequelize);

module.exports = {
  conn: sequelize,
  Users,
}