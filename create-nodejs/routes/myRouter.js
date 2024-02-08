const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const name = "Brown"
    const age = 35
    const address = "<h1>BANK</h1>"
    res.render('index',{name:name,age:age, address:address})
    
})

module.exports = router