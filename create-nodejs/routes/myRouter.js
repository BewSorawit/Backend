const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const product = ["เสื้อ","พัดลม","หูฟัง","คีย์บอร์ด"]
    res.render('index',{product:product})
    
})

module.exports = router