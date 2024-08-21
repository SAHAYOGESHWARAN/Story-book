const express = require ('express')
const passport =require('passport')
const router = express.Router()

//@desc Auth with Google
//@route Get/auth/Google
router.get('/Google',passport.authenticate('Google',{scope: ['profile']}))
    

//@desc Google auth callback
//@route Get/auth/google/callback
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/dashboard')
    }
)

module.exports = router