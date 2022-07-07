const { Type } = require('../models/models')
const ApiError = require("../error/apiError");

class TypeController {
	async create(request, response, next) {
		const { name } = request.body

		const checkTypeName = await Type.findOne({ where: { name } })

		if (checkTypeName) return next(ApiError.badRequest('Такой тип уже существует'))

		const type = await Type.create({ name })

		return response.json(type)

	}
	async getAll(request, response) {
		const types = await Type.findAll()

		return response.json(types)
	}

	async deleteById(request, response) {
		const { name } = request.body

		const types = await Type.destroy({ where: { name }, })

		return response.json(types)
	}
}

module.exports = new TypeController()