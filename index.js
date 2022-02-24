// 1. creste server

// // include the HTTP module
// const http = require("http");
// // create the server
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Fabulous Designs");
// });
// // assign a port and a port number to the server
// server.listen(3000, "127.0.0.1");
// =================================================================================
// 2. make HTTP GET Request
// const http = require("http");
// http.get("http://api.open-notify.org/astros.json", (resp) => {
//     let data = "";
//     resp.on("data", (chunk) => {
//         data += chunk;
//     });
//     resp.on("end", () => {
//         let jsonData = JSON.parse(data);
//         console.log(jsonData);
//     });
// });
// =================================================================================
// 3. making HTTP POST Request
// const axios = require("axios");
// const data = JSON.stringify({
//     name: "Fabulous Designs",
//     job: "Computer Scietist",
// });
// axios
//     .post("https://reqres.in/api/users", data)
//     .then((res) => {
//         console.log(`Status-code : ${res.status}`);
//         console.log(`Body : ${JSON.stringify(res.data)}`);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// =================================================================================
// 4. Working with Files asynchronous way
// const fs = require("fs");
// fs.readFile("test.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
// // synchronous way
// const data = fs.readFileSync("test.txt", { encoding: "utf-8", flag: "r" });
// console.log(data);
// =================================================================================
// 5. Writing and updating files synchronous & Asynchronous way
// i) Synchronous way
// const fs = require("fs");
// const content = {
//     type: "Node Appliaction",
// };
// fs.writeFileSync("ben.json", JSON.stringify(content));
// ii) Asynchronous way
// const fs = require("fs");
// const { exit } = require("process");
// const content = "Node Application";

// fs.writeFile("test.txt", content, { flag: "a+" }, (err) => {
//     if (err) {
//         console.log(err);
//         exit;
//     }
//     console.log("Successfully Done");
// });
// =================================================================================
// 6. Unlink/delete a file
// const fs = require("fs");
// const content = "Node.js";

// fs.unlink("test.txt", (err) => {
//     if (err) {
//         console.log(err);
//         exit;
//     }
//     console.log("File Removed");
// });
// =================================================================================
// 7. Routing
// const http = require("http");
// // route Paths - simpler way to do it
// const routes = {
//     "/": function index(request, response) {
//         response.writeHead(200);
//         response.end("Node Routing");
//     },
//     "/aboutus": function aboutus(request, response) {
//         response.end("This is about Page");
//     },
// };
// const server = http.createServer((req, res) => {
//     if (req.url in routes) {
//         return routes[req.url](req, res);
//     }
// });
// // assign a port and a port number to the server
// server.listen(8000, "127.0.0.1");
// 7.1 = routing
//require http module
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
// =================================================================================
// 8. Paths
//require path module
// const path = require("path");
// // get the name of the file
// const fileName = path.basename("test.json");
// //log out the name of the file
// console.log(fileName);
// // get the directory name
// const dirName = path.dirname("test.json");
// console.log(dirName);
// // check the absolute path
// const absolutePath = path.isAbsolute(
//     "C:UsersFabulousDesignsDesktop\node.js-Tut"
// );
// console.log(absolutePath);
// =================================================================================
// 9. Event module
// const events = require("events");
// let ev = new events.EventEmitter();
// ev.on("my_event", (data) => {
//     console.log("Events :".data);
// });
// ev.emmit("my_event");
// =================================================================================
// 10. streams
// 11. Buffer