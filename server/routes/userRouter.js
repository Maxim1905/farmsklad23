const Router = require('express')

const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')

const userController = require('../controllers/userController')

router.post('/login', userController.login)
router.post('/registration', userController.registration)
router.get('/auth', authMiddleware, userController.check)

module.exports = router