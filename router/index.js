const express = require('express')
const router = express.Router()

// CRUD Productos
router.use(require('./ProductsRoutes'))
router.use(require('./gonzalo'))

module.exports = router
