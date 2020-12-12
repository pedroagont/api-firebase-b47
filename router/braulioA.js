const express = require('express')
const router = express.Router()

router.get('/ruta-braulio', (req, res) => {
  res.send('Endpoint de Braulio!')
})

module.exports = router
