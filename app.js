const express = require('express');
const mongoose = require('mongoose');

const app = express();


// connection to mongodb
mongoose.connect("mongodb://localhost/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// ROUTES
app.use(require("./routes/index"));
app.use(require("./routes/todo"));



// SERVER CONFIGURATION
app.listen(3000, () => console.log("Listening ON PORT 3000"));