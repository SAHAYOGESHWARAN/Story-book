const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Story = require('../models/story')

// @desc     show add page
// @route   GET /stories/add
router.get('/add', ensureAuth, (req, res) => {
  res.render('stories/add', {
    
  })
})

// @desc     process add form
// @route   POST/stories
router.post('/', ensureAuth, (req, res) => {
    try{
        const {title, body} = req.body;
    } catch (err) {
        console.error(err)
         res.render('error/500')

    }
      
    })
  
  

module.exports = router