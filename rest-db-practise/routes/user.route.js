const express = require("express")
const { getAllUsers, createUser, updateUser, deleteUser, getSingleUser } = require("../controllers/users.controller")
const router = express.Router()

router.get("/", getAllUsers)
router.get("/:id", getSingleUser)
router.post("/", createUser)
router.patch("/:id", updateUser)
router.delete("/:id", deleteUser)

module.exports = router


