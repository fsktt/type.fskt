const express = require("express");
const path	  = require("path");

const app = express();

app.get("/", function listen(req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(8080, () => {
	console.log("listening on 8080");
});