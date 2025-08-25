// //  Create a hello world webapp using “http” core module in NodeJS
const http = require('http');
// const app = http.createServer((req,resp)=>{
//     response.end("<h1>hello </h1>");
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//part2
const fs = require("fs");
const app = http.createServer((req, resp) => {
  if (req.url == "./home") {
    fs.readFile("./home.html", (err, data) => {
      if (err) {
        resp.statusCode = 404;
        resp.end("<h2>page not found</h2>");
      } else {
        resp.statusCode = 200;
        resp.setHeader("Content-Type", "text/html");
        resp.end(data);
      }
    });
  } else if (req.url == "./contactus") {
    fs.readFile("./contactus.html", (err, data) => {
      if (err) {
        resp.statusCode = 404;
        resp.end("<h1>hello </h1>");
      } else {
        resp.statusCode = 200;
        resp.setHeader("Content-Type", "text/html");
        resp.end(data);
      }
    });
  } else if (req.url == "./landmark") {
    fs.readFile("./contact.html", (err, data) => {
      if (err) {
        resp.statusCode = 404;
        resp.end("<h1>hello </h1>");
      } else {
        resp.statusCode = 200;
        resp.setHeader("Content-Type", "text/html");
        resp.end(data);
      }
    });
  } else if (req.url == "./culture.html") {
    fs.readFile("./culture.html", (err, data) => {
      if (err) {
        resp.statusCode = 404;
        resp.end("<h1>hello </h1>");
      } else {
        resp.statusCode = 200;
        resp.setHeader("Content-Type", "text/html");
        resp.end(data);
      }
    });
  } else if (req.url == "./") {
    fs.readFile("./", (err, data) => {
      if (err) {
        resp.statusCode = 404;
        resp.end("<h2>page not found</h2>");
      } else {
        resp.statusCode = 200;
        resp.setHeader("Content-Type", "text/html");
        resp.end(data);
      }
    });
  }
});

app.listen(3003, () => {
  console.log("server is running");
});
