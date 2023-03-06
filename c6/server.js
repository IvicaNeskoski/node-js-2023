const http = require("http");

const server = http.createServer((req, res) => {
  console.log("test server");
  console.log(req.url);
  if (req.url == "/wiki/Main_Page") {
    res.end("Ova e wikipedia main page");
  } else if (req.url == "/about") {
    // res.end(
    //   "<html><head><title><About</title><head><body><h1>Ova e about strana</h1><body></html>"
    // );
    // res.writeHead(301, { Location: "http://facebook.com" });
    res.writeHead(404, "This page does not exist");
    res.writeHead(200, "welcome");
    res.end("This page does not exist");
  } else {
    res.end("Zdravo od serverot");
  }
});

console.log("Server is started...");
server.listen(8080);
