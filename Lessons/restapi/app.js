const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
require('dotenv').config()
const app= express()
const userRouter = require("./routes/users.route")

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// user routers
app.use("/users",userRouter)

// home routes
app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/views/index.html")
})

// route not found error
app.use((req,res,next)=>{
    res.status(404).json({
        messgae: "Bad Request",
        status: 404
    })
})

// server error
app.use((error,req,res,next)=>{
    res.status(500).json({
        messgae: "Server not responding",
        status: 500
    })
})


module.exports = app