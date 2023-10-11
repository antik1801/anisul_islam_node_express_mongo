
const getAllUsers = (req,res) =>{
    try {
        res.status(200).json({
            message: "This is get all user routes"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}


const createUser = (req,res) =>{
    try {
        res.status(200).json({
            message: "This is create user route"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const updateUser = (req,res) =>{
    try {
        const id = req.params.id;
        res.status(200).json({
            message: `This is update user route by id ${id}`
        })        
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const deleteUser = (req,res) =>{
    try {
        const id = req.params.id;
        res.status(200).json({
            message: `This is delete user route by id ${id}`
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}


const getSingleUser = (req,res) =>{
    try {
        const id = req.params.id;
        res.status(200).json({
            message: `Get a single user by id ${id}`
        })        
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = {
    getAllUsers,
    createUser, 
    updateUser,
    deleteUser,
    getSingleUser
}