const express = require('express');
const path = require('node:path');
const indexRouter = require('./Routes/index');
require('dotenv').config();

const app = express();

// Enable static files
app.use(express.static("Public"));

// Enable body parser
app.use(express.urlencoded({extended: true}));

// Enable EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Use Routes
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Express app listening to Port ${PORT}`);
});