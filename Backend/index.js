const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.get("/register", (req, res) => {
  let { name, pass } = req.query;
  res.send(`This GET Request  gave ${name} and ${pass}`);
});
app.post("/register", (req, res) => {
  let { name, pass } = req.body;
  // console.log(req.body);
  res.send(`This POST Request username is ${name} & Password is ${pass}`);
  console.log(req.body);
});

app.listen(port, () => {
    console.log(`Successfully established the connection on port ${port}`);
  });