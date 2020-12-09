const express = require("express");
const path = require("path");

const app = express();

// serve only static files from dist directory
app.use(express.static(__dirname + "/dist/Tempus"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/Tempus/index.html"));
});

// Start the app by listetning default port on heroku
app.listen(process.env.PORT || 8080);
