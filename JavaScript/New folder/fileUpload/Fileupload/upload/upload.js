var http = require("http");
const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

var cors = require("cors");

const port = 3000;
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/dowload", (req, res) => {
  try {
  res.download("uploadData/mynewfile1.txt");
  }
  catch (err) {
    console.error(err.message);
  }
});

app.post("/endpoint", (req, res) => {
  fs.writeFile(
    "uploadData/mynewfile1.txt",
    `name:${req.body.name} email:${req.body.email} `,
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
  res.send("success");
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
