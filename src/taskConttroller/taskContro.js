

const taskModel = require("../model/taskModel")


// ============================== create task ===========================

const createTask = async (req, res)=>{
    try{
    const data = req.body
const {title, description} = data

if(!title){return res.status(400).send({status:false , message:"title is mandatoary field"})}
if(!description){return res.status(400).send({status:false , message:"description is mandatoary field"})}


const saveData = await taskModel(data)

res.status(201).send({status:true , message:"Task Added", data:saveData})

    }catch(err){
        res.status(500).send({status:false , message:err.message})
    }
}

// ==============================get task data========================================
const getTask = async ()=>{
try{
const taskId = req.params.taskId

const taskdata = await taskModel.findById(taskId)

res.status(200).send({status:true, data:taskdata})
}catch(err){
    res.status(500).send({status:false , message:err.message})
}
}






//================================== update task =====================================================


const updateTask = async ()=>{
    try{
    let data = req.body
    let taskId = req.params.taskId
    let {title, description, status} = data
if(status){
    if(!["Open", "In-Progress", "Completed"].includes(status)){return res.status(400).send({staus:false, message:"status should have any of Open In-Progress Completed "})}
}
let updateData = await taskModel.findByIdAndUpdate({_id:taskId},{$set:{title:title,description:description,status:status}})

res.status(200).send({status:true, message:"task updated successfully" ,data:updateData})

    }catch(err){
        res.status(500).send({status:false , message:err.message})
    }

}

//====================================delete task data=====================

const deleteTask = async (req, res)=>{
    try{
    let taskId = req.params.taskId

const deleteData = await taskModel.findByIdAndDelete(taskId)

res.status(200).send({status:true , message:"task has been revomed successfullu"})
    }catch(err){
        res.status(500).send({status:false , message:err.message})
    }

}




module.exports ={createTask, updateTask, getTask, deleteTask }




