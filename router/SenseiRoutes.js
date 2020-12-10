const express = require('express');
const router = express.Router();

router.get('/ruta-sensei', (req, res) => {
  res.send('Endpoint del ejemplo! 👨🏻‍🏫');
})

router.get('/frutas', (req, res) => {
  res.send({ sandia: '🍉', naranja: '🍊', manzana: '🍎' });
})

router.get('/emojis', (req, res) => {
  res.send({ feliz: '😁', enojado: '😡', triste: '😢' });
})

module.exports = router;
