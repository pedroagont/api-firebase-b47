const express = require('express');
const router = express.Router();

router.get('/vicpad', (req, res) => {
  res.send('¡Este es el endpoint de Vic Pad! 🐶');
})

module.exports = router;
