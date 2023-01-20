const express = require("express");

const app = express();

const mainRouter = require("./routes/mainRouter");

app.set("view engine", "ejs");

// Middlewares
app.use(express.json());

// Routes
app.use ("/", mainRouter)

// Ports

const port = process.env.PORT || 3010;
app.listen(port, () => console.log ("The server is running on port "+port));