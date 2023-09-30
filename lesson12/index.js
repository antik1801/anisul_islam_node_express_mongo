require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) =>{
    res.sendFile(__dirname+"/index.html")
    // res.send("I am from home routes")
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})