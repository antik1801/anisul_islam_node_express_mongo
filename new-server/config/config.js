require("dotenv").config()

const dev = {
    app: {
        PORT: process.env.PORT || 8080
    },
    db: {
        url: process.env.DB_URL || "mongodb://localhost:27017/DemoDatabase"
    }
    
}

module.exports = dev