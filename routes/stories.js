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

// @desc    Process add form
// @route   POST /stories
router.post('/', ensureAuth, async (req, res) => {
    try {
      req.body.user = req.user.id
      await Story.create(req.body)
      res.redirect('/dashboard')
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
  })
  
  
// @desc    Show all stories
// @route   GET /stories
router.get('/', ensureAuth, async (req, res) => {
    try {
      const stories = await Story.find({ status: 'public' })
        .populate('user')
        .sort({ createdAt: 'desc' })
        .lean()
  
      res.render('stories/index', {
        stories,
      })
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
  })
  
// @desc    Show single story
// @route   GET /stories/:id
router.get('/:id', ensureAuth, async (req, res) => {
    try {
      let story = await Story.findById(req.params.id).populate('user').lean()
  
      if (!story) {
        return res.render('error/404')
      }
  
      if (story.user._id != req.user.id && story.status == 'private') {
        res.render('error/404')
      } else {
        res.render('stories/show', {
          story,
        })
      }
    } catch (err) {
      console.error(err)
      res.render('error/404')
    }
  })
module.exports = router