const express = require("express")
const router = express.Router()
const taskContro = require("../taskConttroller/taskContro")




router.post("/createTask", taskContro.createTask)
router.get("/getTask/:taskId", taskContro.getTask)
router.put("/updateTask/:taskId",taskContro.updateTask)
router.delete("/deleteTask/:taskId" , taskContro.deleteTask)




// router.get("/", (req, res)=>{
//     res.send({status:true, message:"helllo i m working great"})
// })


module.exports = router