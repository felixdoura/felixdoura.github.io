const express = require("express");

const app = express();

const mainRouter = require("./routes/mainRouter");
const skillsRouter = require("./routes/skillsRouter");

// Middlewares
app.use(express.static("public"));
app.use(express.json());

app.set("view engine", "ejs");

// Routes
app.use ("/", mainRouter)

// Ports

const port = process.env.PORT || 3010;
app.listen(port, () => console.log ("The server is running on port "+port));