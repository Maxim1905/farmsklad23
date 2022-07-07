
const jwt = require("jsonwebtoken");

module.exports = function (role) {
	return function (request, response, next) {

		if (request.method === 'OPTIONS') next()

		try {
			const token = request.headers.authorization.split(' ')[1] // получаем токен после типа Bearer aoqiwepojP

			if (!token) {
				return response.status(401).json({ message: 'Не авторизован' })
			}

			const decoded = jwt.verify(token, process.env.SECRET_KEY) // если токен есть его надо декодировать

			if (decoded.role !== role) {
				return response.status(403).json({ message: 'Нет доступа' })
			}

			request.user = decoded // этот user будет доступен во всех следующих функциях
			next()

		} catch (error) {
			response.status(401).json({ message: 'Не авторизован' })
		}
	}

}









