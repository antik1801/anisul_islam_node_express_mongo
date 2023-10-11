const { getAllUser, createUser, getSingleUser, userRegisterForm } = require("../controllers/user.controller")

const router = require("express").Router()

router.get("/", getAllUser)
router.get("/:id",getSingleUser)
router.post("/", createUser)
router.put("/:id")
router.delete("/:id")
// router.get("/register", userRegisterForm)


module.exports = router