require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const userRoutes = require("./routes/users.route")
const productRoutes = require("./routes/products.route")

app.use(express.urlencoded({extended: true}))
app.use(userRoutes)
app.use(productRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        message: "Routes not found",
        status: 404
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})