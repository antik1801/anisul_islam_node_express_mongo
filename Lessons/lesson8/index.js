const app = require("./app")
const PORT = 3000
const express = require('express')
const router = express.Router()


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
});

