const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Welcome, this is /");
});

app.get("/test", function (req, res) {
  res.send({ status: "success", message: "Welcome, this is /test" });
});

const listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
