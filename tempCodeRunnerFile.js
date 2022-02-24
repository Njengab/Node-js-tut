const http = require("http");
const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((_req, res) => {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("Welcome to HTTP Server");
});

server.listen(port, hostName, () => {
    console.log("Server running at http//`${hostName}:${port}");
});