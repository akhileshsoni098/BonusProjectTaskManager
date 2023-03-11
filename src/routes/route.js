const express = require("express")


const router = express.Router()


router.get("/", (req, res)=>{
    res.send({status:true, message:"helllo i m working great"})
})


module.exports = router