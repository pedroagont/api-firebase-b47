const express = require("express");
const router = express.Router();

// CRUD Productos
router.use(require("./ProductsRoutes"));
router.use(require("./gonzalo"));
router.use(require("./VicPad"));
router.use(require("./SenseiRoutes"));
router.use(require("./sebastian"));

module.exports = router;
