const typeController = require('../controllers/typeController')
const Router = require('express')

const router = new Router()
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', checkRoleMiddleware('ADMIN'), typeController.create)
router.get('/', typeController.getAll)
router.put('/', typeController.deleteById)

module.exports = router