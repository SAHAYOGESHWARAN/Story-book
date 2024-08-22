const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Story = require('../models/story')

// @desc     show add page
// @route   GET /stories/add
router.get('/add', ensureGuest, (req, res) => {
  res.render('stories/add', {
    
  })
})



module.exports = router