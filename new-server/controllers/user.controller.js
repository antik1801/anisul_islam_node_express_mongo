const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");
const path = require("path");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      message: error.message,
      status: 404,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: req.body.age,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(404).json({
      message: error.message,
      status: 404,
    });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ id: userId });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      message: error.message,
      status: 404,
    });
  }
};

const updateSingleUser = (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const userRegisterForm = (req, res) => {
  
    res.sendFile(path.join(__dirname + "../views/register.html"));
 
};

module.exports = { getAllUser, createUser, getSingleUser, userRegisterForm };
