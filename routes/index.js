const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

const Story = require('../models/story')

// @desc Login/landing page
// @route GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', { 
        layout: 'login',
    });
});

// @desc Dashboard
// @route GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    try{
        const stories = await Story.find({user:req.user.id}).lern()
        res.render('dashboard', {
            name:req.user.name,
            stories: stories
    })
    } catch(err){
        console.error(err)
        res.status(500).send('Error')
        }
    res.render('dashboard', {
        name: req.user.firstName,
    });
});

// Export the router
module.exports = router;
