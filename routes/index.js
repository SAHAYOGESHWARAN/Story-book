const express = require ('express')
const router = express.Router()

//@desc Login/landing page
//@route Get/
router.get('/', (req, res) => {
    res.render('index', { title: 'Login' });
    })
    module.exports = router;
    

//@desc Dashboars
//@route Get/
router.get('/',(req,res)=>{
    res.render('dashboard', { title: 'Dashboard' });
})

modules.exports = router