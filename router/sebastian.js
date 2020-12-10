const express = require("express");
const router = express.Router();

router.get("/sebastian", (req, res) => {
  res.send("Endpoint de Sebastian! 👨🏻‍🏫");
});

module.exports = router;
