const users = require("../models/users.model")
const {v4: uuidv4} = require("uuid")

// get all user
const getAllUsers = (req,res) =>{
    res.status(200).json(
        users
    )
}
// create new user
const createUser = (req,res) =>{
    const user = req.body.user
    const email = req.body.email
    const newUser = {
        id: uuidv4(),
        user: user,
        email: email
    }
    users.push(newUser)
    res.status(200).json(
        users
    )
}

// update a user

const updateUser = (req,res) =>{
    const userId = req.params.id
    const {user,email} = req.body;
    users.filter((user) => user.id === userId).map((selectedUser)=>{
        selectedUser.user = user;
        selectedUser.email = email
    })

    res.status(201).json(users)
}

// delete user

const deleteUser = (req,res) =>{
    const userId = req.params.id;
    const newUsers = users.filter((user) => user.id != userId)
    res.json({users})
    // users = newUsers
    // res.json(users)
}


module.exports = {getAllUsers, createUser, updateUser, deleteUser}