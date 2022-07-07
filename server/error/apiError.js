class ApiError extends Error { // расширяет Error 
	constructor(status, message) { // параметры которые принимает
		super() // вызываем родительский конструктор

		this.status = status
		this.message = message
	}

	static badRequest(message) {   // статическая функция - та которую можно вызвать без создания объекта, просто обратившись к классу 
		return new ApiError(404, message)
	}

	static internal(message) {
		return new ApiError(500, message)
	}

	static forbidden(message) {
		return new ApiError(403, message)
	}
}

module.exports = ApiError