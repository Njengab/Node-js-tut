// //require http module
// const http = require("http");
// //require file system module
// const fs = require("fs");
// //create a server
// const server = http.createServer((req, res) => {
//     if (req.url === "/home" || req.url === "/") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         fs.createReadStream(__dirname + "/index.html").pipe(res);
//     } else if (req.url === "/contact") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         fs.createReadStream(__dirname + "/contact.html");
//     } else {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         fs.createReadStream(__dirname + "/404.html");
//     }
// });
// //assign a port to a server
// server.listen(3000, "127.0.0.1");