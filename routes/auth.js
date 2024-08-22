const express = require('express');
const passport = require('passport');
const router = express.Router();

// Route for GET /login
router.get('/login', (req, res) => {
    res.render('login'); // Ensure 'login.hbs' or 'login.ejs' exists in your views folder
});

// @desc Auth with Google
// @route GET /google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// @desc Google auth callback
// @route GET/google/callback
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

// @desc Logout user
// @route GET /logout
router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        req.session.destroy(() => {
            res.redirect('/login');
        });
    });
});

module.exports = router;
