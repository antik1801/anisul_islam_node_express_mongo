const http = require("http");
const fs = require("fs");

const PORT = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      if (err) {
        return console.log(err);
      }
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  try {
    if (req.url === "/") {
      // res.end("Mia")
      handleReadFile(200, "lesson6/views/index.html");
    } else if (req.url === "/about") {
      handleReadFile(200, "lesson6/views/about.html");
    } else if (req.url === "/contact") {
      handleReadFile(200, "lesson6/views/contact.html");
    } else {
      handleReadFile(400, "lesson6/views/error.html");
    }
  } catch (error) {
    res.end(error.message);
  }
});

server.listen(PORT, hostname, () => {
  console.log(`The server is running at http://${hostname}:${PORT} `);
});
