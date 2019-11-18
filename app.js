const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended:false}));

  
const homeRoute = require("./routes/home");
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
app.use(homeRoute);
app.use(registerRoute);
app.use(loginRoute);  
app.listen(PORT,() => console.log("Server running!"));

