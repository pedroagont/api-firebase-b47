const express = require('express');
const router = express.Router();

router.get('/rutalulu', (req, res) => {
  res.send('Hola, soy la Computadora 🐱‍');
})

module.exports = router;
