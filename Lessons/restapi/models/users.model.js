const { v4: uuidv4 } = require("uuid")

const users = [
    {
        id: uuidv4(),
        username: "Gazi Ehsanul Haque",
        email: "antik.edu@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Gazi Rifat Fatima",
        email: "rifat@gmail.com",
    },
    {
        id: uuidv4(),
        username: "Ekramul Haque",
        email: "gaziekramul.2020@gmail.com"
    }
]

module.exports = users