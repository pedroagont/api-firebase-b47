const express = require('express')
const router = express.Router()

router.get('/ruta-gonzalo', (req, res) => {
  res.send('Endpoint de Gonzalo! 👨🏻‍🏫')
})

module.exports = router
