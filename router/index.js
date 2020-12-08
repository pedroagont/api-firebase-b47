const express = require('express');
const router = express.Router();

// CRUD Productos
router.use(require('./ProductsRoutes'))

module.exports = router;
