const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/apiError')

const { Product } = require('../models/models')

class ProductController {
	async create(req, res, next) {
		try {
			let { name, price, typeId, manufacturer,
				releaseForm,
				methodOfApplication,
				storageConditions,
				activeSubstance,
				dosage,
				expirationDate,
				country } = req.body

			const { img } = req.files

			let fileName = uuid.v4() + ".jpg"

			img.mv(path.resolve(__dirname, '..', 'static', fileName))

			const testTitle = await Product.findOne({
				where: { name }
			});

			if (testTitle) {
				return next(ApiError.badRequest('Продукт с таким именем уже существует'))
			}

			const product = await Product.create({
				name, price, typeId, img: fileName,
				releaseForm,
				methodOfApplication,
				storageConditions,
				activeSubstance,
				dosage,
				expirationDate,
				country,
				manufacturer
			});

			return res.json(product)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}

	}

	async getAll(request, response, next) {

		try {

			const { typeId, limit, page } = request.query // получаем из строки запроса (это get метод и у него нет тела)

			const offset = page * limit - limit // колличество товаров которые нужно пропустить

			let products;

			if (!typeId) {
				products = await Product.findAndCountAll({ limit: limit, offset })
				// findAndCountAll вернет count - длина массива данных, rows - данные
			} else {
				products = await Product.findAndCountAll({ where: { typeId }, limit: limit, offset })
			}

			return response.json(products)

		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}

	async getOne(request, response) {

		const { id } = request.params

		const product = await Product.findOne({ where: { id } })
		// получаем характеристики только при детальном просмотре девайса

		return response.json(product)

	}

}

module.exports = new ProductController()