const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
  // res.send("You have visited the home page");
});

app.get("/data/:ime", (req, res) => {
  let data = {
    ime: req.params.ime ? req.params.ime : "",
    studenti: [
      { first_name: "Goran", last_name: "Goranovski" },
      { first_name: "Pero", last_name: "Perovski" },
      { first_name: "Janko", last_name: "Jankovski" },
      { first_name: "Stanko", last_name: "Stankovski" },
      { first_name: "Branko", last_name: "Despotoski" },
    ],
  };

  res.render("podatoci", data);
});

app.get('/formular', (req, res) => {
  res.render('formular')
});

app.post('/formular-rezultati', (req, res) => {
  let data = {
    ime: req.body.ime ? req.body.ime : '',
    prezime: req.body.prezime ? req.body.prezime : '',
  };
  res.render(
    'formular-rezultati', data);
});

app.listen(8080, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server started sucessfully");
});
