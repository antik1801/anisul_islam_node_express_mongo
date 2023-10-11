const express = require("express")
const { getAllUsers, getSingleUser, createUser, deleteUser, updateUser } = require("../controllers/user.controllers")
const router = express.Router()


router.get("/", getAllUsers)
router.post("/", createUser)
router.delete("/:id", deleteUser)
router.put("/:id", updateUser)
router.get("/:id", getSingleUser)


module.exports = router