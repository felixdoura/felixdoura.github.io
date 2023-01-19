const express = require("express");

const app = express();


// Middlewares


// Routes


// Ports

const port = process.env.PORT || 3010;
app.listen(port, () => console.log ("The server is running on port "+port));