const http = require("http");

const server = http.createServer((req, res) => {
  console.log("test");
  console.log(req.url);
});

// server.listen(8080); // serverot moze da bide pusten da slusa na porta i vo server.js
//  no togash so vklucuvanje na server.js vo index.js togash vednas ke se pusti
module.exports = server;
