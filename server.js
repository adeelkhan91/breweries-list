const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const routes = require("./routes");

const app = express();

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB Config
const USERNAME = "Random";
const PASSWORD = "random";
const CLUSTERNAME = "randomcluster.bz2nwfh";
const COLLECTIONNAME = "random";

// const db = process.env.MONGODB_URI || require("./config/keys").mongoURI;
const db = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTERNAME}.mongodb.net/${COLLECTIONNAME}?retryWrites=true&w=majority`;

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use(routes);

mongoose
  .connect(
    db
    // ,
    // { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
