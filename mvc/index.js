require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3000;
const userRouter = require("./routes/users.route")
const productRouter = require("./routes/products.route")

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(userRouter)
app.use(productRouter)

app.use((req,res,next)=>{
    res.status(404).json({
        message: "Resource not found",
        status: 404
    })
})


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})



