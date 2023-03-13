const home = (req, res) => {
  res.send("HOME ALONE");
};

const home_post = (req, res) => {
  //   console.log(req.body);
  //   res.send("Success");
  res.json(req.body);
};

const calculator_get = (req, res) => {
  let result;
  switch (req.params.operation) {
    case "sobiranje":
      result = Number(req.query.a) + Number(req.query.b);
      break;
    case "odzemanje":
      result = Number(req.query.a) - Number(req.query.b);
      break;
    case "mnozenje":
      result = Number(req.query.a) * Number(req.query.b);
      break;
    case "delenje":
      result = Number(req.query.a) / Number(req.query.b);
      break;
  }

  res.json({
    msg: "Calculation done successfully",
    result: result,
  });
};

const calculator_post = (req, res) => {
  let result;
  switch (req.params.operation) {
    case "sobiranje":
      result = Number(req.body.a) + Number(req.body.b);
      break;
    case "odzemanje":
      result = Number(req.body.a) - Number(req.body.b);
      break;
    case "mnozenje":
      result = Number(req.body.a) * Number(req.body.b);
      break;
    case "delenje":
      result = Number(req.body.a) / Number(req.body.b);
      break;
  }

  res.json({
    msg: "Calculation done successfully",
    result: result,
  });
};

const smeni_ime = (req, res) => {
  console.log(req.body);
  req.json({
    msg: "Endpoint hit sucessufully",
  });
};

module.exports = {
  home,
  home_post,
  calculator_get,
  calculator_post,
  smeni_ime,
};
