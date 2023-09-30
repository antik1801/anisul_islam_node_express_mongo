require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

const myMiddleware = (req,res,next) =>{
    console.log("Middle ware function")
    req.currentTime = new Date(Date.now())
    next()
}

app.use(myMiddleware) // access all the route in index.js

// error handler middlewares
app.use((req,res,next) =>{
    res.send("404 Error : URL not found")
})

app.use((err, req, res, next)=>{
    res.status(500).send("Something Broke")
})

app.get("/",  (req,res)=>{
    console.log("I am home " + req.currentTime)
    res.send("<h1>I am home route</h1>")
})

app.get("/about", (req,res)=>{
    console.log("I am about route "+ req.currentTime)
    res.send("<h1>I am about route</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http:localhost:${PORT}`)
})