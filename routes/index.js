const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');
const Story = require('../models/story');

// @desc Login/landing page
// @route GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', { 
        layout: 'login',
    });
});

// @desc Dashboard
// @route GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => { // Marked the function as async
    try {
        const stories = await Story.find({ user: req.user.id }).lean();
        res.render('dashboard', {
            name: req.user.firstName,
            stories: stories,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Export the router
module.exports = router;
