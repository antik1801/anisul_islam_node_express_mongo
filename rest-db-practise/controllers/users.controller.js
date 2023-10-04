const getAllUsers = (req,res) =>{
    res.status(200).json({
        success: true,
        message: "All users "
    })
}

const createUser = (req,res) =>{
    res.status(200).json({
        success: true,
        message: "Single user created",
    })
}

const updateUser = (req,res) =>{
    res.status(200).json({
        success: true,
        message: "Update a single user"
    })
}

const deleteUser = (req,res) =>{
    res.status(200).json({
        success: true,
        message: "User deleted successfully"
    })
}

const getSingleUser = (req,res) =>{
    res.status(200).json({
        success: true,
        message: "A single user"
    })
}

module.exports = {getAllUsers, createUser, updateUser, deleteUser, getSingleUser}