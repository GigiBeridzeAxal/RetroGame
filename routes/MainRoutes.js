const express =require('express')
const router = express.Router()
const path = require('path')

router.get('/' , (req,res) => {

    const filepath = path.join(__dirname , "../public/Game.html")

    res.sendFile(filepath)

    console.log(__dirname , '../public/Game.html')
})

module.exports = router