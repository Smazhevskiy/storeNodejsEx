const Router = require('express')
const router = new Router
const deviceRoutes = require('../controllers/deviceController')


router.post('/', deviceRoutes.create)
router.get('/', deviceRoutes.getAll)
router.get('/:id', deviceRoutes.getOneDevice) //отдельный девайс


module.exports = router