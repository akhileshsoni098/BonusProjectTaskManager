const mongoose = require("mongoose");
/* 

 title
  description
  status
timeStamp

*/
const TaskSchema = mongoose.Schema({


title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
status:{
    type:String,
    enum:["Open", "In-Progress", "Completed"],
    default:"Open"
}
}, {timestamp:true})


module.exports = mongoose.model("task", TaskSchema)