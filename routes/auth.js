const express = require('express')
const router = express.Router()

router.get('/google', (req, res) => {
  res.send('It Works')
})

module.exports = router