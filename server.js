const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

var countDownDate = new Date("Jan 31, 2020 23:59:59").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;

distanceJSON = [{ countdown: distance }];

app.get("/api/countdown", (req, res) => {
  res.send(JSON.stringify(distanceJSON));
});

const eMails = [];
app.post("/api/countdown", (req, res) => {
  const eMail = {
    id: eMails.length + 1,
    email: req.body.email
  };
  eMails.push(eMail);
  res.send(req.body.email);
  emailJson = JSON.stringify(eMails);
  fs.writeFile("Emails.json", emailJson, err => {
    if (err) {
      console.log(err);
    }
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
