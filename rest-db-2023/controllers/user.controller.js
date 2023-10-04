const getAllUsers = (req,res)=>{
    res.status(200).json({
        success: true,
        message: "All users returned"
    })
}

const getOneUser = (req,res)=>{
    res.status(200).json({
        success: true,
        message: "Get One user"
    })
}

const createUser = (req,res)=>{
    res.status(201).json({
        success: true,
        message: "User is created"
    })
}

const updateUser = (req,res)=>{
    res.status(202).json({
        success: true,
        message: "User is updated"
    })
}

const deleteUser = (req,res)=>{
    res.status(200).json({
        success: true,
        message: "User is deleted"
    })
}


module.exports = {getAllUsers, getOneUser, createUser, updateUser, deleteUser}