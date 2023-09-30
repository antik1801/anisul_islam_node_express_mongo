const express = require("express")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3000
const userRouter = require("./routes/users.route")

app.use(express.urlencoded({extended: true}))
app.use(userRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})