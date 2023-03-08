// let operacija = "minus";

// if (operacija == "minus") {
//   console.log("odzemanje");
// } else if (operacija == "plus") {
//   console.log("dodavanje");
// } else if (operacija == "mnozenje") {
//   console.log("mnozenje");
// } else if (operacija == "delenje") {
//   console.log("delennje");
// }

// switch (operacija) {
//   case "plus":
//     console.log("dodavanje");
//     break;
//   case "minus":
//     console.log("odzemanje");
//     break;
//   case "mnozenje":
//     console.log("mnozenje");
//     break;
//   case "delenje":
//     console.log("delenje");
//     break;
// }

// let results = {
//   plus: () => {
//     console.log("dodavanje");
//     return "ovaa operacija e dodavanje";
//   },
//   minus: () => {
//     console.log("odzemanje");
//     return "ovaa operacija e odzemanje";
//   },
//   mnozenje: () => {
//     console.log("mnozenje");
//   },
//   delenje: () => {
//     console.log("delenje");
//   },
// };

// let rezultat = results[operacija]();
// // console.log(rezultat);

// const student = {
//   ime: "Pero",
//   prezime: "Perosvski",
//   "horoskopski znak": "vodolija",
//   apsolvent: false,
//   godina_na_studii: 10,
//   akcija: () => {
//     console.log("Kaj si be Pero be");
//     return "PEROOOO";
//   },
// };

// console.log(student.ime, student["ime"]);

// let prop = "prezime";
// console.log(student[prop], student.prop);

// console.log(student["horoskopski znak"]);
// console.log(student.apsolvent);
// console.log(student.godina_na_studii);
// console.log(student.akcija());

// let text = "Zdravo jas sum Ivica i ova e 7mi chas.";
// let zbor = "Zdravo";

// let rezultat = text.toLowerCase().search("zdravo"); // rezultat =0
// if (rezultat === false) {
//   console.log("Zborot ne e najden vo tekstot");
// } else {
//   console.log("pozicijata na koja se naogja zborot vo stringot e" + rezultat);
// }

const fs = require("fs");
const http = require("http");
const url = require("url");
// const server = require("./server");

const fileRead = (filename) => {
  return new Promise((success, fail) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

const render = async (page, data) => {
  let content = await fileRead(`./${page}.html`);
  return content.replace(`{{res}}`, data);
};

const pages = {
  "/home": (req, res) => {
    res.end("HOME");
  },

  "/users": (req, res) => {
    res.end("USERS!");
  },

  "/plus": async (req, res) => {
    let result = `${Number(req.query.a) + Number(req.query.b)} `;
    res.end(await render("index", result));
  },
  "/minus": async (req, res) => {
    let result = `${Number(req.query.a) - Number(req.query.b)} `;
    res.end(await render("index", result));
  },
  "/delenje": async (req, res) => {
    let result = `${Number(req.query.a) / Number(req.query.b)} `;
    res.end(await render("index", result));
  },
  "/mnozenje": async (req, res) => {
    let result = `${Number(req.query.a) * Number(req.query.b)} `;
    res.end(await render("index", result));
  },
};

// create server

const server = http.createServer((req, res) => {
  //query parameters ?a=10&=20
  // parametri se a=10
  // i b= 20
  let [path, _] = req.url.split("?");
  if (pages[path]) {
    req.query = url.parse(req.url, true).query;
    pages[path](req, res);
  } else {
    res.writeHead(404, "not found");
    res.end("this page does not exist.");
  }
  //   console.log(path);
  //   console.log("test");
  //   console.log(req.url);
  //   console.log(url.parse(req.url, true).query);
});

// run server
console.log("server is started...");
server.listen(8080); // Dokolku ovde go startuvame serverot imame pogolema kontrola vrz istiot
