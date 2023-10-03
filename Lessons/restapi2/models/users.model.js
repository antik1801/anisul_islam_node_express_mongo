const {v4: uuidv4} = require("uuid");

const users = [
    {
        id: uuidv4(),
        user: "Anik Biswas",
        email: "anik@gmail.com"
    },
    {
        id: uuidv4(),
        user: "Rahee Islam",
        email: "rahee@gmail.com"
    },
    {
        id: uuidv4(),
        user: "Robin Hawladar",
        email: "robin@gmail.com"
    }
]

module.exports = users