// import fetch from "node-fetch";

const node_fetch = require("node_fetch");

(async () => {
  try {
    let response = await fetch("https://wikipedia.com");
    let wikipediaContent = await response.text();
    console.log(wikipediaContent);
  } catch (err) {
    console.log(err);
  }
})();
