const express = require ('express')
const router = express.Router()
const {ensureAuth,ensureGuest} = require('../middleware/auth')

//@desc Login/landing page
//@route Get/
router.get('/',ensureGuest, (req, res) => {
    res.render('Login',{
        layout:'login',
    })
    })
    module.exports = router;
    

//@desc Dashboard
//@route Get/
router.get('/dashboard',ensureAuth,(req,res)=>{
    
    res.render('dashboard') })

module.exports = router