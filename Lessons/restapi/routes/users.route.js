const { getAllUsers, createUser, updateUser, deleteUser } = require("../controllers/users.controller")

const router = require("express").Router()

// users routes
router.get("/", getAllUsers)
router.post("/", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)


module.exports = router