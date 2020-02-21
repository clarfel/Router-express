express = require("express");

const app = express();

// app.get("/home", (req, res) => {
//   res.sendFile(__dirname + "/public/home.html");
// });
// app.get("/OurServices", (req, res) => {
//   res.sendFile(__dirname + "/public/ourservices.html");
// });
// app.get("/Contact", (req, res) => {
//   res.sendFile(__dirname + "/public/contact.html");
// });
var date = new Date();

var current_hour = date.getHours();

app.get((req, res, next) => {
  if (current_hour > 8 && current_hour < 17)
    res.sendFile(__dirname + "/public/home.html");
  next();
  if (current_hour < 8 && current_hour > 17)
    res.sendFile(__dirname + "/public/ourservices.html");
  else res.sendFile(__dirname + "/public/ourservices.html");
});

app.use(express.static(__dirname + "/public"));

app.listen(3000, err => {
  if (err) console.log("server is not running");
  else console.log("serveur is running on port 3000");
});
