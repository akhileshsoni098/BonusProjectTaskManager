const mongoose = require("mongoose")
const express = require("express")
const route = require("./routes/route")
const app = express()
app.use(express.json())




mongoose.connect("", {useNewUrlParsar:true})


.then(()=>{console.log("mongodb is successfully connected")})
.catch((err)=>{console.log(err.message)})

app.use("/", route)

app.listen(3000, ()=>{
    console.log("app is listing on prot 3000");
})






















