const express = require ('express')
const router = express.Router()

//@desc Login/landing page
//@route Get/
router.get('/', (req, res) => {
    res.send('Login')
    })
    module.exports = router;
    

//@desc Dashboard
//@route Get/
router.get('/dashboard',(req,res)=>{
    res.send('Dashboard') })

module.exports = router