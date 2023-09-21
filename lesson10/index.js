const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.get("/products/:id([0-9]+)", (req, res) =>{
    res.status(200).send({
        message: `The Product id is ${req.params.id}`,
        status: 200
    })
})

app.get("/products/:title([a-zA-Z]+)", (req,res) =>{
    res.send(
        {
            message: `The product title is ${req.params.title}`,
            status: 200
        }
    )
})

app.use("*", (req,res)=>{
    res.status(404).send({
        message: "Not a Valid Route"
    })
})

app.listen(PORT, ()=>{
    console.log(`The app is running at http://localhost:${PORT}`)
})
