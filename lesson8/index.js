const app = require("./app")
const PORT = 3000
const express = require('express')
const router = express.Router()


app.use((req,res)=>{
    res.send("<h1> 404!!! Not a valid url</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
});