const { Sequelize } = require('sequelize')

module.exports = new Sequelize(

	process.env.DB_NAME, // название бд
	process.env.DB_USER, // имя пользователя
	process.env.DB_PASSWORD, // пароль бд
	{
		dialect: 'postgres',
		port: process.env.DB_PORT,
		host: process.env.DB_HOST,
	}
)




// module.exports = new Sequelize('default-db', 'default-db', 'Americano-1900', {
// 	host: 'clohegeyaf.beget.app',
// 	port: 3306,
// 	dialect: 'mysql',
// });

