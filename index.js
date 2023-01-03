const express = require("express");
const mongodb = require("mongodb");
const mongoose = require('mongoose');
const app = express();

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path:"config.env"})
}

app.use(express.json());



// Connection To The Databse
mongoose.connect(
    process.env.MONGO_URI
).then(() => console.log('Connected To the Database'));


const user = require("./routes/user")
app.use(user);

const property = require("./routes/property")
app.use(property);


app.listen(process.env.PORT || 8000, () => {
    console.log("Server running on port 8000");
});

