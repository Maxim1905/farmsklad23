const ApiError = require('../error/apiError')

module.exports = function (error, request, response, next) {
	if (error instanceof ApiError) { // Оператор instanceof проверяет, принадлежит ли объект к определённому классу.
		return response.status(error.status).json({ message: error.message })
	}

	return response.status(500).json({ message: "Непредвиденная ошибка" })
}