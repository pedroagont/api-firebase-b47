const express = require('express');
const router = express.Router();

// CRUD Productos
router.use(require('./ProductsRoutes'))
router.use(require('./VicPad'))
router.use(require('./RutaLulu'))

module.exports = router;
