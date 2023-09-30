const express = require("express");
const { getUser, saveUser } = require("../controllers/users.controllers");
const router = express.Router();
router.get("/users", getUser)
router.post("/users", saveUser)


module.exports = router
