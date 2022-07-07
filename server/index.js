
require('dotenv').config()

const path = require('path')
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const sequelize = require('./db')
const routes = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static'))) // указываем серверу что файлы из папки статик нужно раздавать как статику
app.use(fileUpload({}))
app.use('/api', routes)

// обработка ошибок должна быть последним мидлвэром
app.use(errorHandler)



const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()

		app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

	} catch (error) {
		console.log('error', error);
	}
}

start()