require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user.route");
require("./config/db");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/user", userRouter);

// multer file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });
app.post("/register", (req,res)=>{
    
})
// home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

// route not found error
app.use((req, res, next) => {
  res.status(401).json({
    message: "Routes not found",
    status: 401,
  });
});

// server broken error
app.use((err, req, res, next) => {
  res.status(501).json({
    message: "Server Error",
    status: 501,
  });
});

module.exports = app;
