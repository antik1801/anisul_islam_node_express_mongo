
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    id:{
        type: String,
    },
    name:{
        type: String,
        require: true,
    },
    age:{
        type: String,
        require: true
    },
    createdOn:{
        type: Date,
        default: Date.now()
    }
})



module.exports = mongoose.model("User",userSchema)