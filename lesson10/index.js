const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.get("/products/:id([0-9]+)", (req, res) =>{
    res.send(`<h1>ID = ${req.params.id}</h1>`)
})

app.listen(PORT, ()=>{
    console.log(`The app is running at http://localhost:${PORT}`)
})
