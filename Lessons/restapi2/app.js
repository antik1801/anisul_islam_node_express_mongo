const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const users = require("./models/users.model")

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// users route
app.get("/users", (req,res) =>{
    res.status(200).json({
        users
    })
})


// home route
app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/views/index.html");
})

// route not found

app.use((req,res,next)=>{
    res.status(404).json({
        message: "Route not found"
    })
})

// server error
app.use((err, req, res, next) =>{
    res.status(500).json({
        message: "Server broke"
    })
})

module.exports = app