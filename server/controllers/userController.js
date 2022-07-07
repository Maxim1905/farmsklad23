const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ApiError = require("../error/apiError");
const { User, Basket } = require('../models/models')


const generateJwt = (id, email, role) => {
	return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: '24h' })
}

class UserController {
	async registration(request, response, next) {
		const { email, password, role } = request.body

		if (!email || !password) return next(ApiError.badRequest('Некорректные данные'))

		const candidate = await User.findOne({ where: { email } })

		if (candidate) return next(ApiError.badRequest('Пользователь с таким эмейлом существует'))

		const hashPassword = await bcrypt.hash(password, 5) // фнкция hash асинхронная

		const newUser = await User.create({ email, password: hashPassword, role })
		const userBasket = await Basket.create({ userId: newUser.id })


		const token = generateJwt(newUser.id, email, newUser.role)
		// генерируем токен для пользователя

		return response.json({ token })
	}

	async login(request, response, next) {

		const { email, password, role } = request.body

		const user = await User.findOne({ where: { email } })

		if (!user) return next(ApiError.badRequest('Пользователь с таким именем не найден'))

		const comparePassword = bcrypt.compareSync(password, user.password) // проверяем чт опользователь ввел нужный пароль, в бд хэшированный пароль поэтому сверяем compareSync

		if (!comparePassword) return next(ApiError.badRequest('Не верный пароль'))

		const token = generateJwt(user.id, user.email, user.role)

		return response.json({ token })

	}

	async check(request, response) {
		// функция для того чтобы сгенерировать новый токен и отправить на клиент, если пользоватль опстоянно использует аккаунт то токен будет записываться

		const token = generateJwt(request.user.id, request.user.email, request.user.role)

		return response.json({ token });
	}
}

module.exports = new UserController();
