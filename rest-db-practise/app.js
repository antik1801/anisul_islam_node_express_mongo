const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()
const userRoutes = require("./routes/user.route")
require("./config/db")

// middlewares

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

// user router
// /api/user : GET - get all users
// /api/user : POST - create a newUser
// /api/user/:id : GET - get a single user
// /api/user/:id : PATCH - update a single user
// /api/user/:id : DELETE - delete a single user

app.use("/api/users", userRoutes)




// home route
app.get("/", (req,res)=>{
    res.status(200).sendFile(__dirname+"/views/home.html")
})

// api error
app.use((req,res,next)=>{
    res.status(404).json({
        message: "Route not found",
        success: false
    })
})

// Server error
app.use((error,req,res,next)=>{
    res.status(404).json({
        success: false,
        message: "Wrong request",
        slag: error.message
    })
})

module.exports = app