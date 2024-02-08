const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const name = "Brown"
    const age = 15
    const address = "<h1>BANK</h1>"
    const order = 10
    res.render('index',{name:name,age:age, address:address,order:order})
    
})

module.exports = router