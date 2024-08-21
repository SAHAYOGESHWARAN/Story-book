const express = require ('express')
const router = express.Router()

//@desc Login/landing page
//@route Get/
router.get('/', (req, res) => {
    res.render('Login',{
        layout:'login',
    })
    })
    module.exports = router;
    

//@desc Dashboard
//@route Get/
router.get('/dashboard',(req,res)=>{
    res.render('Dashboard') })

module.exports = router