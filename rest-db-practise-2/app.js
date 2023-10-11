const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const bodyParser = require("body-parser")
const userRouter = require("./routes/user.route")
// require("./config/db") 

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req,res) =>{
    res.status(200).sendFile(__dirname+"/views/index.html")
})

app.use("/api/user", userRouter)



// ! ERROR: Route ERROR: wrong route
app.use((req,res,next)=>{
    res.status(404).json({
        message: "Route not found"
    })
})


// ! SERVER ERROR: BROKEN
app.use((err,req,res,next)=>{
    res.status(500).json({
        message: "SERVER broken"
    })
})

module.exports = app