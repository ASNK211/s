const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const cors = require("cors");
const session = require('express-session');
const passport = require("passport");
const authRoute = require("./routes/auth");

require('./passport');

app.use(express.json());

const port = process.env.PORT || 9000;
dotenv.config();

app.use(
    cors({
        origin: "*", // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // allow session cookie from browser to pass through
    })
);

app.use(session({
    secret: "sdfghjkl",
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
.then(() =>console.log('connected!'))
.catch((e) =>console.error('faild'+ e));


app.use("/api/auth", authRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

