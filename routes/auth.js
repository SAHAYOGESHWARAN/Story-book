const express = require ('express')
const passport =require('passport')
const router = express.Router()


// Route for GET /login
router.get('/login', (req, res) => {
    res.render('login'); // Ensure 'login.hbs' or 'login.ejs' exists in your views folder
});

//@desc Auth with Google
//@route Get/auth/google
router.get('/google',passport.authenticate('google',{scope: ['profile']}))
    

//@desc Google auth callback
//@route Get/auth/google/callback
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/dashboard')
    }
)

//@desc Logout user
//route /auth/logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login')
    })

module.exports = router