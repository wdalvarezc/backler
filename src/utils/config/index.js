require('dotenv').config();

module.exports = {
    host : process.env.HOST,
    dbUser : process.env.DB_USER,
    dbPassword : process.env.DB_PASSWORD,
    dbName : process.env.DB_NAME,
    port:process.env.PORT,
}