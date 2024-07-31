const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/:id", function (req, res) {
  res.send("Welcome, this is /" + req.params.id);
});

app.get("/test", function (req, res) {
  res.send({ status: "success", message: "Welcome, this is /test" });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
