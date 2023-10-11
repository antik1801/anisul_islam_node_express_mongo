require("dotenv").config()

const dev = {
    app: {
        PORT: process.env.PORT || 3000
    },
    db: {
        url : process.env.URL || "mongodb://localhost:2701/userDbTest"
    }
}

module.exports = dev