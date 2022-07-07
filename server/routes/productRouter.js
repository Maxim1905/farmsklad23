const productController = require('../controllers/productController')
const Router = require('express')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

const router = new Router()

router.post('/', checkRoleMiddleware('ADMIN'), productController.create)
router.get('/', productController.getAll)
router.get('/:id', productController.getOne)

module.exports = router